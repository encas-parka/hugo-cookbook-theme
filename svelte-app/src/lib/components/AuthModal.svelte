<script lang="ts">
  // Props avec callbacks Svelte 5
  let {
    onClose = () => {},
    onAuthSuccess = () => {}
  } = $props();

  // États avec runes Svelte 5
  let showLogin = $state(true);
  let isLoading = $state(false);
  let errorMessage = $state('');
  let successMessage = $state('');

  // Formulaire de connexion
  let loginEmail = $state('');
  let loginPassword = $state('');

  // Formulaire d'inscription
  let registerName = $state('');
  let registerEmail = $state('');
  let registerPassword = $state('');

  // Formulaire mot de passe oublié
  let forgotEmail = $state('');
  let showForgotPassword = $state(false);

  // Fonction utilitaire pour accéder à Appwrite
  function getAppwriteClient() {
    if (typeof window !== 'undefined' && window.AppwriteClient) {
      return window.AppwriteClient;
    }
    throw new Error('AppwriteClient non disponible');
  }

  async function handleLogin(event: Event) {
    event.preventDefault();

    if (!loginEmail || !loginPassword) {
      errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    isLoading = true;
    errorMessage = '';

    try {
      const appwrite = getAppwriteClient();
      const account = await appwrite.getAccount();

      // Créer la session
      await account.createEmailPasswordSession(loginEmail, loginPassword);

      successMessage = 'Connexion réussie !';
      setTimeout(() => {
        onAuthSuccess();
      }, 1000);

    } catch (error: any) {
      console.error('Erreur de connexion:', error);
      errorMessage = error.message || 'Erreur lors de la connexion';
    } finally {
      isLoading = false;
    }
  }

  async function handleRegister(event: Event) {
    event.preventDefault();

    if (!registerName || !registerEmail || !registerPassword) {
      errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    isLoading = true;
    errorMessage = '';

    try {
      const appwrite = getAppwriteClient();
      const account = await appwrite.getAccount();

      // Créer le compte
      await account.create(
        'unique()',
        registerEmail,
        registerPassword,
        registerName
      );

      // Créer la session
      await account.createEmailPasswordSession(registerEmail, registerPassword);

      successMessage = 'Compte créé et connecté !';
      setTimeout(() => {
        onAuthSuccess();
      }, 1000);

    } catch (error: any) {
      console.error('Erreur d\'inscription:', error);
      errorMessage = error.message || 'Erreur lors de la création du compte';
    } finally {
      isLoading = false;
    }
  }

  async function handleForgotPassword(event: Event) {
    event.preventDefault();

    if (!forgotEmail) {
      errorMessage = 'Veuillez entrer votre email';
      return;
    }

    isLoading = true;
    errorMessage = '';

    try {
      const appwrite = getAppwriteClient();
      const account = await appwrite.getAccount();

      await account.createRecovery(
        forgotEmail,
        `${window.location.origin}/reset-password`
      );

      successMessage = 'Email de réinitialisation envoyé !';
      setTimeout(() => {
        showForgotPassword = false;
        forgotEmail = '';
      }, 2000);

    } catch (error: any) {
      console.error('Erreur mot de passe oublié:', error);
      errorMessage = error.message || 'Erreur lors de l\'envoi de l\'email';
    } finally {
      isLoading = false;
    }
  }

  function closeModal() {
    if (!isLoading) {
      onClose();
    }
  }

  function stopPropagation(event: Event) {
    event.stopPropagation();
  }

  // Reset des messages via effet réactif
  $effect(() => {
    if (showLogin || showForgotPassword) {
      errorMessage = '';
      successMessage = '';
    }
  });
</script>

<!-- Overlay -->
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title" onclick={closeModal} onkeydown={(e) => e.key === 'Escape' && closeModal()}>
  <!-- Modal content -->
  <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4" onclick={stopPropagation}>

    <!-- Header -->
    <div class="flex items-center justify-between p-6 border-b">
      <h2 id="modal-title" class="text-xl font-semibold text-gray-900">
        {showForgotPassword ? 'Mot de passe oublié' : (showLogin ? 'Connexion' : 'Inscription')}
      </h2>
      <button
        onclick={closeModal}
        class="text-gray-400 hover:text-gray-600 transition-colors p-1"
        disabled={isLoading}
        aria-label="Fermer la modale"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Messages -->
      {#if errorMessage}
        <div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert">
          {errorMessage}
        </div>
      {/if}

      {#if successMessage}
        <div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status">
          {successMessage}
        </div>
      {/if}

      <!-- Mot de passe oublié -->
      {#if showForgotPassword}
        <form onsubmit={handleForgotPassword}>
          <div class="mb-4">
            <label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="forgot-email"
              type="email"
              bind:value={forgotEmail}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="votre@email.com"
              disabled={isLoading}
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Envoi...' : 'Envoyer l\'email de réinitialisation'}
          </button>
        </form>

        <div class="mt-4 text-center">
          <button
            onclick={() => showForgotPassword = false}
            class="text-blue-600 hover:text-blue-800 text-sm"
            disabled={isLoading}
          >
            ← Retour à la connexion
          </button>
        </div>
      <!-- Connexion -->
      {:else if showLogin}
        <form onsubmit={handleLogin}>
          <div class="mb-4">
            <label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              bind:value={loginEmail}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="votre@email.com"
              disabled={isLoading}
              required
            />
          </div>

          <div class="mb-4">
            <label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <input
              id="login-password"
              type="password"
              bind:value={loginPassword}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              disabled={isLoading}
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div class="mt-4 text-center space-y-2">
          <button
            onclick={() => showForgotPassword = true}
            class="text-blue-600 hover:text-blue-800 text-sm"
            disabled={isLoading}
          >
            Mot de passe oublié ?
          </button>

          <div class="text-sm text-gray-600">
            Pas encore de compte ?
            <button
              onclick={() => showLogin = false}
              class="text-blue-600 hover:text-blue-800 ml-1"
              disabled={isLoading}
            >
              S'inscrire
            </button>
          </div>
        </div>

      <!-- Inscription -->
      {:else}
        <form onsubmit={handleRegister}>
          <div class="mb-4">
            <label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">
              Nom
            </label>
            <input
              id="register-name"
              type="text"
              bind:value={registerName}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre nom"
              disabled={isLoading}
              required
            />
          </div>

          <div class="mb-4">
            <label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="register-email"
              type="email"
              bind:value={registerEmail}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="votre@email.com"
              disabled={isLoading}
              required
            />
          </div>

          <div class="mb-4">
            <label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <input
              id="register-password"
              type="password"
              bind:value={registerPassword}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              disabled={isLoading}
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Création...' : 'Créer un compte'}
          </button>
        </form>

        <div class="mt-4 text-center text-sm text-gray-600">
          Déjà un compte ?
          <button
            onclick={() => showLogin = true}
            class="text-blue-600 hover:text-blue-800 ml-1"
            disabled={isLoading}
          >
            Se connecter
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>
