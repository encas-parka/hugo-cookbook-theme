<script lang="ts">
  import { getAppwriteInstances } from "../services/appwrite";

  let { isOpen = $bindable(), onAuthSuccess = () => {} } = $props();

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
        onAuthSuccess();
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
        onAuthSuccess();
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
        url: `${window.location.origin}/reset-password`,
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

  function stopPropagation(event: Event) {
    event.stopPropagation();
  }

  // Reset des messages via effet réactif
  $effect(() => {
    if (showLogin || showForgotPassword) {
      errorMessage = "";
      successMessage = "";
    }
  });
</script>

<div class="auth-modal {isOpen && 'auth-modal-open'}" role="dialog">
  <div class="auth-modal-content">
    <!-- Header -->
    <div class="auth-header">
      <div class="auth-title">
        {showForgotPassword
          ? "Mot de passe oublié"
          : showLogin
            ? "Connexion"
            : "Inscription"}
      </div>
      <button class="auth-close-btn" onclick={closeModal}>✕</button>
    </div>

    <!-- Content -->
    <div class="auth-body">
      <!-- Messages -->
      {#if errorMessage}
        <div class="auth-message auth-message-error">
          <span>{errorMessage}</span>
        </div>
      {/if}

      {#if successMessage}
        <div class="auth-message auth-message-success">
          <span>{successMessage}</span>
        </div>
      {/if}

      <!-- Mot de passe oublié -->
      {#if showForgotPassword}
        <form onsubmit={handleForgotPassword} class="auth-form">
          <div class="auth-field">
            <label class="auth-label" for="forgot-email">
              <span class="auth-label-text">Email</span>
            </label>
            <input
              id="forgot-email"
              type="email"
              bind:value={forgotEmail}
              class="auth-input"
              placeholder="votre@email.com"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            class="auth-btn auth-btn-primary auth-btn-full"
            disabled={isLoading}
          >
            {#if isLoading}
              <span class="auth-spinner"></span>
            {:else}
              Envoyer l'email de réinitialisation
            {/if}
          </button>
        </form>

        <div class="auth-back-link">
          <button
            onclick={() => (showForgotPassword = false)}
            class="auth-link-btn"
            disabled={isLoading}
          >
            ← Retour à la connexion
          </button>
        </div>

        <!-- Connexion -->
      {:else if showLogin}
        <form onsubmit={handleLogin} class="auth-form">
          <div class="auth-field">
            <label class="auth-label" for="login-email">
              <span class="auth-label-text">Email</span>
            </label>
            <input
              id="login-email"
              type="email"
              bind:value={loginEmail}
              class="auth-input"
              placeholder="votre@email.com"
              disabled={isLoading}
              required
            />
          </div>

          <div class="auth-field">
            <label class="auth-label" for="login-password">
              <span class="auth-label-text">Mot de passe</span>
            </label>
            <input
              id="login-password"
              type="password"
              bind:value={loginPassword}
              class="auth-input"
              placeholder="•••••••"
              disabled={isLoading}
              required
            />
          </div>

          <button
            type="submit"
            class="auth-btn auth-btn-primary auth-btn-full"
            disabled={isLoading}
          >
            {#if isLoading}
              <span class="auth-spinner"></span>
            {:else}
              Se connecter
            {/if}
          </button>
        </form>

        <div class="auth-actions">
          <button
            onclick={() => (showForgotPassword = true)}
            class="auth-link-btn"
            disabled={isLoading}
          >
            Mot de passe oublié ?
          </button>

          <div class="auth-switch">
            Pas encore de compte ?
            <button
              onclick={() => (showLogin = false)}
              class="auth-link-btn auth-link-inline"
              disabled={isLoading}
            >
              S'inscrire
            </button>
          </div>
        </div>

        <!-- Inscription -->
      {:else}
        <form onsubmit={handleRegister} class="auth-form">
          <div class="auth-field">
            <label class="auth-label" for="register-name">
              <span class="auth-label-text">Nom</span>
            </label>
            <input
              id="register-name"
              type="text"
              bind:value={registerName}
              class="auth-input"
              placeholder="Votre nom"
              disabled={isLoading}
              required
            />
          </div>

          <div class="auth-field">
            <label class="auth-label" for="register-email">
              <span class="auth-label-text">Email</span>
            </label>
            <input
              id="register-email"
              type="email"
              bind:value={registerEmail}
              class="auth-input"
              placeholder="votre@email.com"
              disabled={isLoading}
              required
            />
          </div>

          <div class="auth-field">
            <label class="auth-label" for="register-password">
              <span class="auth-label-text">Mot de passe</span>
            </label>
            <input
              id="register-password"
              type="password"
              bind:value={registerPassword}
              class="auth-input"
              placeholder="•••••••"
              disabled={isLoading}
              required
            />
          </div>

          <button
            type="submit"
            class="auth-btn auth-btn-success auth-btn-full"
            disabled={isLoading}
          >
            {#if isLoading}
              <span class="auth-spinner"></span>
            {:else}
              Créer un compte
            {/if}
          </button>
        </form>

        <div class="auth-switch">
          Déjà un compte ?
          <button
            onclick={() => (showLogin = true)}
            class="auth-link-btn auth-link-inline"
            disabled={isLoading}
          >
            Se connecter
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  /* Modal styles */
  .auth-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s ease,
      visibility 0.3s ease;
  }

  .auth-modal.auth-modal-open {
    opacity: 1;
    visibility: visible;
  }

  .auth-modal-content {
    background: white;
    border-radius: 8px;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    max-width: 28rem;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
  }

  /* Header styles */
  .auth-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .auth-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #111827;
  }

  .auth-close-btn {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: #6b7280;
    transition: background-color 0.2s ease;
  }

  .auth-close-btn:hover {
    background-color: #f3f4f6;
  }

  .auth-close-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Body styles */
  .auth-body {
    padding: 1.5rem;
  }

  /* Message styles */
  .auth-message {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }

  .auth-message-error {
    background-color: #fef2f2;
    color: #991b1b;
    border: 1px solid #fecaca;
  }

  .auth-message-success {
    background-color: #f0fdf4;
    color: #166534;
    border: 1px solid #bbf7d0;
  }

  /* Form styles */
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .auth-field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .auth-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
  }

  .auth-label-text {
    display: block;
  }

  .auth-input {
    padding: 0.5rem 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 0.875rem;
    background-color: white;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .auth-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .auth-input:disabled {
    background-color: #f9fafb;
    color: #6b7280;
    cursor: not-allowed;
  }

  /* Button styles */
  .auth-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .auth-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .auth-btn-primary {
    background-color: #3b82f6;
    color: white;
  }

  .auth-btn-primary:hover:not(:disabled) {
    background-color: #2563eb;
  }

  .auth-btn-success {
    background-color: #10b981;
    color: white;
  }

  .auth-btn-success:hover:not(:disabled) {
    background-color: #059669;
  }

  .auth-btn-full {
    width: 100%;
  }

  /* Link button styles */
  .auth-link-btn {
    background: none;
    border: none;
    color: #3b82f6;
    cursor: pointer;
    font-size: 0.875rem;
    text-decoration: underline;
    transition: color 0.2s ease;
  }

  .auth-link-btn:hover:not(:disabled) {
    color: #2563eb;
  }

  .auth-link-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .auth-link-inline {
    display: inline;
  }

  /* Layout styles */
  .auth-back-link {
    margin-top: 1rem;
    text-align: center;
  }

  .auth-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .auth-switch {
    font-size: 0.875rem;
    color: #6b7280;
  }

  /* Spinner styles */
  .auth-spinner {
    width: 1rem;
    height: 1rem;
    border: 2px solid #e5e7eb;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
