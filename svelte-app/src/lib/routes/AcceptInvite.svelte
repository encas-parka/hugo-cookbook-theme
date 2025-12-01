<script lang="ts">
  import { onMount } from "svelte";
  import { getAppwriteInstances } from "$lib/services/appwrite";
  import { navigate, getQuery } from "$lib/services/simple-router.svelte"; // Adaptez le chemin vers votre fichier router
  import { TriangleAlert } from "@lucide/svelte";

  // États (Svelte 5 Runes)
  let loading = $state(true);
  let step = $state<"verifying" | "set-password" | "error">("verifying");
  let errorMsg = $state("");

  // Formulaire
  let password = $state("");
  let name = $state("");

  // Params (récupérés via le Custom Router)
  let userId = "";
  let secret = ""; // Le JWT
  let teamId = "";

  onMount(async () => {
    // 1. Récupération des paramètres via votre routeur
    // L'URL ressemble à : #/accept-invite?userId=xyz&secret=eyJ...&teamId=123
    userId = getQuery("userId") || "";
    secret = getQuery("secret") || "";
    teamId = getQuery("teamId") || "";

    if (!userId || !secret) {
      step = "error";
      errorMsg = "Lien d'invitation incomplet ou invalide.";
      loading = false;
      return;
    }

    try {
      console.log("[AcceptInvite] Initialisation avec JWT...");

      const { client, account } = await getAppwriteInstances();

      // 2. Authentification "Stateless" avec le JWT
      // On dit au client Appwrite : "Agis en tant que cet utilisateur pour l'instant"
      client.setJWT(secret);

      // 3. Vérification du token
      // Si le JWT est invalide ou expiré, account.get() échouera
      const user = await account.get();

      console.log("[AcceptInvite] Token valide pour :", user.name);

      // Pré-remplir le nom
      name = user.name;

      // Cas particulier : Si l'utilisateur a déjà un mot de passe (ex: ancien compte réinvité)
      // On le redirige vers le login ou le dashboard
      if (user.passwordUpdate) {
        // Optionnel : Vous pourriez vouloir le connecter auto ici si vous aviez son password,
        // mais sans password, on le renvoie au login ou on le laisse définir un nouveau pass.
        // Ici, on part du principe qu'on le laisse définir un (nouveau) mot de passe.
      }

      step = "set-password";
    } catch (e: any) {
      console.error("[AcceptInvite] Erreur validation:", e);
      step = "error";
      errorMsg = "Ce lien d'invitation a expiré ou est invalide.";
    } finally {
      loading = false;
    }
  });

  async function handleFinish() {
    if (password.length < 8) {
      alert("Le mot de passe doit faire au moins 8 caractères.");
      return;
    }

    loading = true;
    try {
      const { client, account } = await getAppwriteInstances();

      // 4. Définition du mot de passe
      // Fonctionne car nous sommes authentifiés temporairement via le JWT
      await account.updatePassword({ password });

      // Mise à jour du nom si modifié par l'utilisateur
      if (name) await account.updateName({ name });

      // 5. CRITIQUE : Création de la session persistante
      // Le JWT ne crée pas de cookie de session. Il faut connecter l'utilisateur "pour de vrai".
      // On récupère l'email frais depuis le compte
      const user = await account.get();
      await account.createEmailPasswordSession({ email: user.email, password });

      console.log("[AcceptInvite] Session créée, redirection...");

      // 6. Redirection vers le dashboard via le routeur
      // Utilisation de "/dashboard" qui est la route définie dans App.svelte
      navigate("/dashboard");
    } catch (e: any) {
      console.error("[AcceptInvite] Erreur finalisation:", e);
      alert("Erreur : " + e.message);
      loading = false;
    }
  }
</script>

<div class="bg-base-200 flex min-h-screen items-center justify-center p-4">
  <div class="card bg-base-100 w-full max-w-md shadow-xl">
    <div class="card-body text-center">
      {#if loading && step !== "set-password"}
        <span class="loading loading-spinner loading-lg text-primary mx-auto"
        ></span>
        <p class="text-base-content/70 mt-4">Vérification de l'invitation...</p>
      {:else if step === "error"}
        <TriangleAlert class="text-error mb-2 size-7" />
        <h2 class="text-error text-xl font-bold">Oups !</h2>
        <p class="py-4">{errorMsg}</p>
        <button class="btn btn-ghost" onclick={() => navigate("/")}>
          Retour à l'accueil
        </button>
      {:else if step === "set-password"}
        <div class="mb-2 text-4xl">👋</div>
        <h2 class="card-title justify-center text-2xl">Bienvenue !</h2>
        <p class="text-base-content/70 mb-6 text-sm">
          Votre invitation est validée. <br />
          Veuillez définir un mot de passe.
        </p>

        <label class="w-full text-left">
          <div class="label">
            <span class="label-text">Votre Pseudo / Nom</span>
          </div>
          <input
            type="text"
            bind:value={name}
            class="input w-full"
            placeholder="Ex: Chef Gusto"
          />
        </label>

        <label class="mt-3 w-full text-left">
          <div class="label">
            <span class="label-text">Nouveau mot de passe</span>
          </div>
          <input
            type="password"
            bind:value={password}
            placeholder="Minimum 8 caractères"
            class="input w-full"
          />
        </label>

        <div class="card-actions mt-6">
          <button
            class="btn btn-primary w-full"
            onclick={handleFinish}
            disabled={loading}
          >
            {#if loading}<span class="loading loading-spinner loading-xs"
              ></span>{/if}
            Terminer l'inscription
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>
