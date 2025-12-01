// index.js (Node.js 18+)
import {
  Client,
  Users,
  Databases,
  Messaging,
  ID,
  Permission,
  Role,
  Query,
} from 'node-appwrite';

export default async ({ req, res, log, error }) => {
  // 1. Initialisation Client
  const client = new Client()
    .setEndpoint(
      process.env.APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1'
    )
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  const users = new Users(client);
  const db = new Databases(client);
  const messaging = new Messaging(client);

  // Configuration
  const DB_ID = process.env.DATABASE_ID || 'main';
  const KTEAMS_COLLECTION = 'kteams';
  const APP_URL = process.env.APP_URL || 'http://localhost:5173';

  try {
    const payload = JSON.parse(req.body);

    // =========================================================================
    //  PING (Warm-up)
    // =========================================================================
    if (payload.action === 'ping') {
      return res.json({
        success: true,
        message: 'pong',
        timestamp: Date.now(),
      });
    }

    // =========================================================================
    // LIEN PUBLIC
    // =========================================================================
    if (payload.action === 'public-link') {
      const {
        collectionId,
        documentId,
        expiration = '24h',
        permissions = ['read'],
      } = payload;

      // Convertir les durées textuelles en secondes
      let expirationInSeconds = 24 * 60 * 60; // 24h par défaut
      switch (expiration) {
        case '7j':
          expirationInSeconds = 7 * 24 * 60 * 60;
          break;
        case '30j':
          expirationInSeconds = 30 * 24 * 60 * 60;
          break;
      }

      // Récupérer le document pour vérifier les permissions de PUBLIC_ID
      const targetDoc = await db.getDocument({
        databaseId: DB_ID,
        collectionId: collectionId,
        documentId: documentId,
      });

      // Vérifier si PUBLIC_ID a les permissions requises
      const PUBLIC_ID = process.env.PUBLIC_ID || 'public';
      const hasPermission = targetDoc.$permissions?.some(
        (perm) =>
          perm.includes(PUBLIC_ID) &&
          (permissions.includes('read') || perm.includes('any'))
      );

      if (!hasPermission) {
        // SI PAS DE PERMISSION : On AJOUTE les permissions manquantes
        const newPermissions = [...(targetDoc.$permissions || [])];

        // Ajouter les permissions demandées
        if (permissions.includes('read')) {
          newPermissions.push(Permission.read(Role.user(PUBLIC_ID)));
        }
        if (permissions.includes('write')) {
          newPermissions.push(Permission.update(Role.user(PUBLIC_ID)));
        }
        if (permissions.includes('delete')) {
          newPermissions.push(Permission.delete(Role.user(PUBLIC_ID)));
        }

        // Mettre à jour le document avec les nouvelles permissions
        await db.updateDocument({
          databaseId: DB_ID,
          collectionId: collectionId,
          documentId: documentId,
          data: {}, // Pas de changement de données
          permissions: newPermissions,
        });

        log(
          `Permissions ajoutées pour ${PUBLIC_ID} sur ${collectionId}/${documentId}`
        );

        // Maintenant on peut continuer car le document a les permissions requises
      } else {
        // SI PERMISSION DÉJÀ PRÉSENTE : On continue normalement
        log(
          `Permissions déjà présentes pour ${PUBLIC_ID} sur ${collectionId}/${documentId}`
        );
      }

      // Créer un token pour accès public
      const publicToken = await users.createToken({
        userId: PUBLIC_ID,
      });

      // Construire l'URL publique
      const publicUrl = `${APP_URL}/public/${collectionId}/${documentId}/${publicToken.secret}`;

      // Enregistrer le lien dans les logs (optionnel)
      log(
        `Lien public créé pour ${collectionId}/${documentId} par ${PUBLIC_ID}`
      );

      return res.json({
        success: true,
        publicUrl,
        token: publicToken.secret,
        expiresAt: new Date(
          Date.now() + expirationInSeconds * 1000
        ).toISOString(),
      });
    }

    // =========================================================================
    //  INVITATION DE MASSE
    // =========================================================================
    if (payload.action === 'invite') {
      const { emails, context, message } = payload;

      // Validation
      if (!emails || !Array.isArray(emails) || emails.length === 0) {
        throw new Error("Paramètre invalide : 'emails' (array) requis.");
      }
      if (!context || !context.type || !context.id || !context.name) {
        throw new Error(
          "Paramètre invalide : 'context' requis avec { type, id, name }."
        );
      }

      const { type, id: contextId, name: contextName } = context;

      if (type !== 'team' && type !== 'event') {
        throw new Error("context.type doit être 'team' ou 'event'.");
      }

      log(
        `Traitement de ${emails.length} invitations pour ${type} ${contextName}`
      );

      // Déterminer la collection cible
      const collectionId = type === 'team' ? KTEAMS_COLLECTION : 'main';
      const fieldName = type === 'team' ? 'invited' : 'contributors';
      const memberFieldName = type === 'team' ? 'membersId' : null;

      // A. Récupérer le document (team ou event)
      const targetDoc = await db.getDocument({
        databaseId: DB_ID,
        collectionId: collectionId,
        documentId: contextId,
      });

      // Préparation des conteneurs pour le batch update
      let newPermissions = [...(targetDoc.$permissions || [])];
      let currentInvited = [...(targetDoc[fieldName] || [])];
      let currentMembers = memberFieldName
        ? [...(targetDoc[memberFieldName] || [])]
        : [];

      // Liste pour gérer les envois d'emails ensuite
      const usersToNotify = [];

      // B. Boucle de traitement des utilisateurs (Séquentielle pour intégrité logique)
      for (const email of emails) {
        let userId;
        let userName = email.split('@')[0];
        let isNewUser = false;

        // Vérifier si user existe
        const userList = await users.list({
          queries: [Query.equal('email', email)],
        });

        if (userList.total > 0) {
          // --- USER EXISTANT ---
          const existingUser = userList.users[0];
          userId = existingUser.$id;
          userName = existingUser.name;
          isNewUser = false;
        } else {
          // --- NOUVEL USER ---
          userId = ID.unique();
          await users.create({
            userId: userId,
            email: email,
            password: undefined,
            name: userName,
          });
          isNewUser = true;
          log(`Création user ${userId}`);
        }

        // Si déjà membre, on ignore (seulement pour teams)
        if (memberFieldName && currentMembers.includes(userId)) {
          continue;
        }

        // Ajout Permission (si pas déjà présente)
        const permString = Permission.read(Role.user(userId));
        if (!newPermissions.includes(permString)) {
          newPermissions.push(permString);
        }

        // Ajout Liste Invited (si pas déjà présent)
        const alreadyInvited = currentInvited.some((i) => i.includes(userId));
        if (!alreadyInvited) {
          const inviteEntry = JSON.stringify({
            id: userId,
            email: email,
            name: userName,
            status: 'invited',
            invitedAt: new Date().toISOString(),
          });
          currentInvited.push(inviteEntry);
        }

        // On prépare la notification
        usersToNotify.push({ userId, email, userName, isNewUser });
      }

      // C. Mise à jour UNIQUE de la Database (Atomicité)
      await db.updateDocument({
        databaseId: DB_ID,
        collectionId: collectionId,
        documentId: contextId,
        data: { [fieldName]: currentInvited },
        permissions: newPermissions,
      });

      log(`Base de données mise à jour pour ${type} ${contextName}`);

      // D. Envoi des emails en parallèle
      const emailPromises = usersToNotify.map(async (u) => {
        let ctaLink = '';
        let buttonText = '';
        let inviteText = '';

        if (u.isNewUser) {
          // Cas NOUVEAU : Création d'un JWT au lieu de Magic URL Token
          const jwtToken = await users.createJWT({
            userId: u.userId,
            sessionId: undefined, // Optionnel
            duration: 60 * 60 * 24, // Expire dans 24h (en secondes)
          });

          // Construction du lien selon le type
          const redirectParam =
            type === 'team'
              ? `teamId=${contextId}`
              : `eventId=${contextId}`;
          ctaLink = `${APP_URL}/#/accept-invite?userId=${u.userId}&secret=${jwtToken.jwt}&${redirectParam}`;
          buttonText = 'Accepter et créer mon mot de passe';
        } else {
          // Cas EXISTANT : Lien vers la page appropriée
          ctaLink =
            type === 'team'
              ? `${APP_URL}/#/dashboard`
              : `${APP_URL}/#/eventEdit/${contextId}`;
          buttonText = "Ouvrir l'application";
        }

        // Texte d'invitation selon le type
        if (type === 'team') {
          inviteText = `Tu as été invité(e) à rejoindre l'équipe <strong>${contextName}</strong>.`;
        } else {
          inviteText = `Tu as été invité(e) à contribuer à l'événement <strong>${contextName}</strong>.`;
        }

        // Template HTML (Partagé)
        const htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
              <style>
                  body { font-family: sans-serif; background-color: #f9f9f9; padding: 20px; }
                  .card { max-width: 500px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                  .btn { display: inline-block; background-color: #ff6b6b; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px; }
                  .note { background-color: #fff3cd; padding: 10px; border-radius: 4px; margin: 15px 0; font-size: 0.9em; }
              </style>
          </head>
          <body>
              <div class="card">
                  <h2>👨‍🍳 C'est l'heure de cuisiner !</h2>
                  <p>Bonjour <strong>${u.userName}</strong>,</p>
                  <p>${inviteText}</p>

                  ${message ? `<div class="note">Message : "${message}"</div>` : ''}

                  ${
                    u.isNewUser
                      ? `<p>Pour activer ton compte, clique ci-dessous :</p>`
                      : `<p>Connecte-toi simplement pour accéder à ${type === 'team' ? 'cette équipe' : 'cet événement'}.</p>`
                  }

                  <center>
                      <a href="${ctaLink}" class="btn">${buttonText}</a>
                  </center>
              </div>
          </body>
          </html>
        `;

        // Envoi via Appwrite Messaging
        return messaging.createEmail({
          messageId: ID.unique(),
          subject: `[encas-cookbook] Invitation : ${contextName}`,
          content: htmlContent,
          users: [u.userId],
          html: true,
        });
      });

      await Promise.all(emailPromises);

      return res.json({
        success: true,
        processed: usersToNotify.length,
        contextType: type,
        contextName: contextName,
      });
    }

    // =========================================================================
    //  VÉRIFICATION EMAILS
    // =========================================================================
    if (payload.action === 'checkEmails') {
      const { emails } = payload;

      if (!emails || !Array.isArray(emails)) {
        throw new Error("Paramètre invalide : 'emails' (array) requis.");
      }

      const result = {};

      // On traite les emails en parallèle pour plus de rapidité
      const checks = emails.map(async (email) => {
        try {
          const userList = await users.list([Query.equal('email', email)]);
          if (userList.total > 0) {
            const user = userList.users[0];
            result[email] = {
              id: user.$id,
              name: user.name || email.split('@')[0],
            };
          } else {
            result[email] = false;
          }
        } catch (err) {
          console.error(`Erreur vérification email ${email}:`, err);
          result[email] = false; // En cas d'erreur, on considère comme non trouvé
        }
      });

      await Promise.all(checks);

      return res.json({
        success: true,
        data: result,
      });
    }

    // Action inconnue
    return res.json({ success: false, error: 'Action inconnue' }, 400);
  } catch (e) {
    error(`Erreur Function: ${e.message}`);
    return res.json({ success: false, error: e.message }, 500);
  }
};
