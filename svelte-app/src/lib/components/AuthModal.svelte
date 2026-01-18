<script lang="ts">
  import { getAppwriteInstances } from "../services/appwrite";
  import ModalContainer from "$lib/components/ui/modal/ModalContainer.svelte";
  import ModalHeader from "$lib/components/ui/modal/ModalHeader.svelte";
  import ModalContent from "$lib/components/ui/modal/ModalContent.svelte";
  import ModalFooter from "$lib/components/ui/modal/ModalFooter.svelte";

  let { isOpen = $bindable(), onAuth_success = async () => {} } = $props();

  // États avec runes Svelte 5
  let showLogin = $state(true);
  let isLoading = $state(false);
  let errorMessage = $state("");
  let successMessage = $state("");

  // Formulaire de connexion
  let loginEmail = $state("");
  let loginPassword = $state("");

  // Formulaire d'inscription
  let registerName = $state("");
  let registerEmail = $state("");
  let registerPassword = $state("");

  // Formulaire mot de passe oublié
  let forgotEmail = $state("");
  let showForgotPassword = $state(false);

  async function handleLogin(event: Event) {
    event.preventDefault();

    if (!loginEmail || !loginPassword) {
      errorMessage = "Veuillez remplir tous les champs";
      return;
    }

    isLoading = true;
    errorMessage = "";

    try {
      const { account } = await getAppwriteInstances();

      // Créer la session
      await account.createEmailPasswordSession({
        email: loginEmail,
        password: loginPassword,
      });

      successMessage = "Connexion réussie !";
      setTimeout(() => {
        onAuth_success();
      }, 1000);
    } catch (error: any) {
      console.error("Erreur de connexion:", error);
      errorMessage = error.message || "Erreur lors de la connexion";
    } finally {
      isLoading = false;
    }
  }

  async function handleRegister(event: Event) {
    event.preventDefault();

    if (!registerName || !registerEmail || !registerPassword) {
      errorMessage = "Veuillez remplir tous les champs";
      return;
    }

    isLoading = true;
    errorMessage = "";

    try {
      const { account } = await getAppwriteInstances();

      // Créer le compte
      await account.create({
        userId: "unique()",
        email: registerEmail,
        password: registerPassword,
        name: registerName,
      });

      // Créer la session
      await account.createEmailPasswordSession({
        email: registerEmail,
        password: registerPassword,
      });

      successMessage = "Compte créé et connecté !";
      setTimeout(() => {
        onAuth_success();
      }, 1000);
    } catch (error: any) {
      console.error("Erreur d'inscription:", error);
      errorMessage = error.message || "Erreur lors de la création du compte";
    } finally {
      isLoading = false;
    }
  }

  async function handleForgotPassword(event: Event) {
    event.preventDefault();

    if (!forgotEmail) {
      errorMessage = "Veuillez entrer votre email";
      return;
    }

    isLoading = true;
    errorMessage = "";

    try {
      const { account } = await getAppwriteInstances();

      await account.createRecovery({
        email: forgotEmail,
        url: `${window.location.origin}/#/reset-password`,
      });

      successMessage = "Email de réinitialisation envoyé !";
      setTimeout(() => {
        showForgotPassword = false;
        forgotEmail = "";
      }, 2000);
    } catch (error: any) {
      console.error("Erreur mot de passe oublié:", error);
      errorMessage = error.message || "Erreur lors de l'envoi de l'email";
    } finally {
      isLoading = false;
    }
  }

  function closeModal() {
    if (!isLoading) {
      isOpen = false;
    }
  }

  // Reset des messages via effet réactif
  $effect(() => {
    if (showLogin || showForgotPassword) {
      errorMessage = "";
      successMessage = "";
    }
  });

  function getTitle() {
    if (showForgotPassword) return "Mot de passe oublié";
    if (showLogin) return "Connexion";
    return "Inscription";
  }
</script>

<ModalContainer {isOpen} onClose={closeModal} maxWidth="sm">
  <ModalHeader title={getTitle()} onClose={closeModal} />

  <ModalContent>
    <div class="space-y-4">
      <!-- Messages -->
      {#if errorMessage}
        <div role="alert" class="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{errorMessage}</span>
        </div>
      {/if}

      {#if successMessage}
        <div role="alert" class="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{successMessage}</span>
        </div>
      {/if}

      <!-- Mot de passe oublié -->
      {#if showForgotPassword}
        <form onsubmit={handleForgotPassword} class="space-y-4">
          <div class="form-control">
            <label for="forgot-email" class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              id="forgot-email"
              type="email"
              bind:value={forgotEmail}
              class="input input-bordered w-full"
              placeholder="votre@email.com"
              disabled={isLoading}
            />
          </div>

          <div class="alert alert-info alert-soft">
            Un email avec un lien vous sera envoyé par "noreply@appwrite.io".
            Pensez à vérifier s'il n'a pas attéri dans votre dossier spam.
          </div>
        </form>

        <div class="text-center">
          <button
            onclick={() => (showForgotPassword = false)}
            class="btn btn-ghost btn-sm"
            disabled={isLoading}
          >
            ← Retour à la connexion
          </button>
        </div>

        <!-- Connexion -->
      {:else if showLogin}
        <form onsubmit={handleLogin} class="space-y-4">
          <div class="form-control">
            <label for="login-email" class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              id="login-email"
              type="email"
              bind:value={loginEmail}
              class="input input-bordered w-full"
              placeholder="votre@email.com"
              disabled={isLoading}
              required
            />
          </div>

          <div class="form-control">
            <label for="login-password" class="label">
              <span class="label-text">Mot de passe</span>
            </label>
            <input
              id="login-password"
              type="password"
              bind:value={loginPassword}
              class="input input-bordered w-full"
              placeholder="•••••••"
              disabled={isLoading}
              required
            />
          </div>
        </form>

        <div class="space-y-2 text-center">
          <button
            onclick={() => (showForgotPassword = true)}
            class="btn btn-link btn-sm btn-primary"
            disabled={isLoading}
          >
            Mot de passe oublié ?
          </button>

          <div class="text-base-content/70 text-sm">
            Pas encore de compte ?
            <button
              onclick={() => (showLogin = false)}
              class="btn btn-primary btn-sm btn-soft ms-1"
              disabled={isLoading}
            >
              S'inscrire
            </button>
          </div>
        </div>

        <!-- Inscription -->
      {:else}
        <form onsubmit={handleRegister} class="space-y-4">
          <div class="form-control">
            <label for="register-name" class="label">
              <span class="label-text">Nom</span>
            </label>
            <input
              id="register-name"
              type="text"
              bind:value={registerName}
              class="input input-bordered w-full"
              placeholder="Votre nom"
              disabled={isLoading}
              required
            />
          </div>

          <div class="form-control">
            <label for="register-email" class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              id="register-email"
              type="email"
              bind:value={registerEmail}
              class="input input-bordered w-full"
              placeholder="votre@email.com"
              disabled={isLoading}
              required
            />
          </div>

          <div class="form-control">
            <label for="register-password" class="label">
              <span class="label-text">Mot de passe</span>
            </label>
            <input
              id="register-password"
              type="password"
              bind:value={registerPassword}
              class="input input-bordered w-full"
              placeholder="•••••••"
              disabled={isLoading}
              required
            />
          </div>
          <div class="alert alert-info alert-soft">
            Un email avec un lien vous sera envoyé par "noreply@appwrite.io".
            Pensez à vérifier s'il n'a pas attéri dans votre dossier spam.
          </div>
        </form>

        <div class="text-base-content/70 text-center text-sm">
          Déjà un compte ?
          <button
            onclick={() => (showLogin = true)}
            class="btn btn-ghost btn-sm text-primary ms-1"
            disabled={isLoading}
          >
            Se connecter
          </button>
        </div>
      {/if}
    </div>
  </ModalContent>

  <ModalFooter>
    {#if showForgotPassword}
      <button
        type="submit"
        class="btn btn-primary btn-block"
        onclick={handleForgotPassword}
        disabled={isLoading}
      >
        {#if isLoading}
          <span class="loading loading-spinner"></span>
        {:else}
          Envoyer l'email de réinitialisation
        {/if}
      </button>
    {:else if showLogin}
      <button
        type="submit"
        class="btn btn-primary btn-block"
        onclick={handleLogin}
        disabled={isLoading}
      >
        {#if isLoading}
          <span class="loading loading-spinner"></span>
        {:else}
          Se connecter
        {/if}
      </button>
    {:else}
      <button
        type="submit"
        class="btn btn-success btn-block"
        onclick={handleRegister}
        disabled={isLoading}
      >
        {#if isLoading}
          <span class="loading loading-spinner"></span>
        {:else}
          Créer un compte
        {/if}
      </button>
    {/if}
  </ModalFooter>
</ModalContainer>

<style>
  .space-y-4 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 1rem;
  }

  .space-y-2 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 0.5rem;
  }
</style>
