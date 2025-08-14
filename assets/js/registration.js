// Fichier: assets/js/registration.js

document.addEventListener("DOMContentLoaded", () => {
  // --- CONFIGURATION ---
  const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
  const APPWRITE_PROJECT_ID = "689725820024e81781b7"; // Votre Project ID
  const DATABASE_ID = "689d15b10003a5a13636";
  const COLLECTION_ID = "689d15c900353f50464a";
  const REGISTER_FUNCTION_ID = "689d1836002b9b5cfda9";
  const CAMPAIGN_DOC_ID = document.querySelector("[data-campaign-doc-id]")
    .dataset.campaignDocId;

  // --- ÉLÉMENTS DU DOM ---
  const loadingState = document.getElementById("loading-state");
  const campaignValid = document.getElementById("campaign-valid");
  const campaignInvalid = document.getElementById("campaign-invalid");
  const registrationForm = document.getElementById("registration-form");
  const errorMessage = document.getElementById("error-message");
  const successMessage = document.getElementById("success-message");
  const remainingSlots = document.getElementById("remaining-slots");
  const invalidReason = document.getElementById("invalid-reason");

  // --- SDK APPWRITE ---
  const { Client, Databases, Functions } = Appwrite;
  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);
  const databases = new Databases(client);
  const functions = new Functions(client);

  // --- 1. VÉRIFICATION CÔTÉ CLIENT (POUR L'UI) ---
  async function checkCampaignStatus() {
    try {
      const campaign = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        CAMPAIGN_DOC_ID,
      );

      const isExpired = new Date() > new Date(campaign.expires_at);
      const isFull = campaign.current_count >= campaign.max_inscriptions;

      if (campaign.is_active && !isExpired && !isFull) {
        document.getElementById("remaining-slots").textContent =
          campaign.max_inscriptions - campaign.current_count;
        loadingState.style.display = "none";
        campaignValid.style.display = "block";
      } else {
        let reason = "La campagne est terminée.";
        if (isExpired) reason = "La campagne est expirée.";
        if (isFull) reason = "Le nombre maximum d'inscriptions est atteint.";
        document.getElementById("invalid-reason").textContent = reason;
        loadingState.style.display = "none";
        campaignInvalid.style.display = "block";
      }
    } catch (error) {
      document.getElementById("invalid-reason").textContent =
        "Impossible de vérifier la campagne. L'ID est peut-être incorrect.";
      loadingState.style.display = "none";
      campaignInvalid.style.display = "block";
    }
  }

  // --- 2. GESTION DE L'INSCRIPTION ---
  if (registrationForm) {
    registrationForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submitButton = registrationForm.querySelector('button[type="submit"]');
              const spinner = submitButton.querySelector('.spinner-border');
              const name = document.getElementById('reg-name').value;
              const email = document.getElementById('reg-email').value;
              const password = document.getElementById('reg-password').value;
              const confirmPassword = document.getElementById('reg-password-confirm').value;

              // Validation simple
              if (password !== confirmPassword) {
                  errorMessage.textContent = 'Les mots de passe ne correspondent pas.';
                  errorMessage.style.display = 'block';
                  return;
              }

              // --- UI: DÉMARRAGE DU CHARGEMENT ---
              submitButton.disabled = true;
              spinner.style.display = 'inline-block';
              errorMessage.style.display = 'none';
              successMessage.style.display = 'none';

              try {
                  const payload = {
                      campaign_doc_id: CAMPAIGN_DOC_ID,
                      name,
                      email,
                      password
                  };

                  const response = await functions.createExecution(REGISTER_FUNCTION_ID, JSON.stringify(payload));
                  const result = JSON.parse(response.responseBody);

                  if (!result.success) {
                      // Gérer les erreurs métier renvoyées par la fonction
                      throw new Error(result.error || 'Une erreur est survenue lors de l\'inscription.');
                  }

                  // --- UI: SUCCÈS ---
                  successMessage.textContent = 'Inscription réussie ! Vous allez être redirigé vers la page de connexion.';
                  successMessage.style.display = 'block';
                  registrationForm.style.display = 'none'; // Cacher le formulaire

                  // Rediriger après 3 secondes
                  setTimeout(() => {
                      window.location.href = '/login';
                  }, 3000);

              } catch (e) {
                  // --- UI: ERREUR ---
                  errorMessage.textContent = e.message;
                  errorMessage.style.display = 'block';
                  // Réactiver le bouton uniquement en cas d'erreur
                  submitButton.disabled = false;
                  spinner.style.display = 'none';
              }
          });
      }
  // Lancer la vérification initiale au chargement de la page
   if (CAMPAIGN_DOC_ID) {
       checkCampaignStatus();
   } else {
       invalidReason.textContent = 'L\'ID de la campagne n\'est pas configuré sur cette page.';
       loadingState.style.display = 'none';
       campaignInvalid.style.display = 'block';
   }
});
