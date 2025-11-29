<script lang="ts">
  import { globalState } from "../stores/GlobalState.svelte";
  import {
    LogInIcon,
    LogOutIcon,
    LayoutDashboardIcon,
    UsersIcon,
    BookOpenIcon,
  } from "@lucide/svelte";
  import AuthModal from "./AuthModal.svelte";

  let showDropdown = $state(false);
  let showAuthModal = $state(false);

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function closeDropdown() {
    showDropdown = false;
  }

  async function handleLogout() {
    try {
      await globalState.logout();
      window.location.href = "/"; // Rediriger vers la home après logout
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  }

  function handleLogin() {
    showAuthModal = true;
    console.log("showAuthModal", showAuthModal);
  }

  // Fermer le dropdown au clic extérieur
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest(".svelte-user-dropdown")) {
      closeDropdown();
    }
  }

  function handleLoginSuccess() {
    showAuthModal = false;
  }

  $effect(() => {
    if (showDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  });
</script>

<AuthModal bind:isOpen={showAuthModal} onAuthSuccess={handleLoginSuccess} />

<nav class="svelte-header-nav">
  <div class="svelte-nav-container">
    <a class="svelte-nav-brand" href="/">
      <img src="/favicon-96x96.png" alt="logo" class="svelte-brand-logo" />
    </a>

    <ul class="svelte-nav-menu">
      <li>
        <a class="svelte-nav-link" href="/recettes">Recettes</a>
      </li>
      <li>
        <a class="svelte-nav-link" href="/evenements">Événements</a>
      </li>
    </ul>

    <ul class="svelte-nav-actions">
      {#if globalState.isAuthenticated}
        <!-- État connecté -->
        <li class="svelte-user-dropdown">
          <button
            class="svelte-btn-user"
            onclick={toggleDropdown}
            aria-expanded={showDropdown}
            aria-label="Menu utilisateur"
          >
            <div class="svelte-user-avatar">
              {globalState.user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <svg
              class="svelte-dropdown-arrow"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path
                d="M2 4l4 4 4-4"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </button>

          {#if showDropdown}
            <ul class="svelte-dropdown-menu">
              <li>
                <div class="svelte-dropdown-header">
                  {globalState.user?.email || "Utilisateur"}
                </div>
              </li>
              <li>
                <a class="svelte-dropdown-item" href="/dashboard">
                  <LayoutDashboardIcon class="svelte-dropdown-icon" size={16} />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a class="svelte-dropdown-item" href="/dashboard/teams">
                  <UsersIcon class="svelte-dropdown-icon" size={16} />
                  <span>Équipes</span>
                </a>
              </li>
              <li>
                <a class="svelte-dropdown-item" href="/dashboard/recipes">
                  <BookOpenIcon class="svelte-dropdown-icon" size={16} />
                  <span>Recettes</span>
                </a>
              </li>
              <li><hr class="svelte-dropdown-divider" /></li>
              <li>
                <button class="svelte-dropdown-item" onclick={handleLogout}>
                  <LogOutIcon class="svelte-dropdown-icon" size={16} />
                  <span>Se déconnecter</span>
                </button>
              </li>
            </ul>
          {/if}
        </li>
      {:else}
        <!-- État déconnecté -->
        <li>
          <button class="svelte-btn-login" onclick={handleLogin}>
            <LogInIcon size={16} />
            <span>Connexion</span>
          </button>
        </li>
      {/if}
    </ul>
  </div>
</nav>

<style>
  /* Reset */
  .svelte-header-nav {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .svelte-header-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Navbar principale */
  .svelte-header-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: #212529;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .svelte-nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
  }

  /* Brand / Logo */
  .svelte-nav-brand {
    display: flex;
    align-items: center;
    color: whitesmoke;
    text-decoration: none;
  }

  .svelte-brand-logo {
    width: 32px;
    height: 32px;
  }

  /* Menu navigation */
  .svelte-nav-menu {
    display: flex;
    gap: 0.5rem;
  }

  .svelte-nav-link {
    display: block;
    padding: 0.2rem 0.75rem;
    color: whitesmoke;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.2s ease;
  }

  .svelte-nav-link:hover {
    background: #8c0327;
    color: whitesmoke;
  }

  /* Actions utilisateur */
  .svelte-nav-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .svelte-btn-user,
  .svelte-btn-login {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.2rem 1rem;
    background: #8c0327;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s ease;
    font-size: 0.875rem;
  }

  .svelte-btn-user:hover,
  .svelte-btn-login:hover {
    background: #730014;
  }

  .svelte-user-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .svelte-dropdown-arrow {
    transition: transform 0.2s ease;
  }

  .svelte-btn-user[aria-expanded="true"] .svelte-dropdown-arrow {
    transform: rotate(180deg);
  }

  /* Dropdown */
  .svelte-user-dropdown {
    position: relative;
  }

  .svelte-dropdown-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    min-width: 220px;
    background: #343a40;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    padding: 0.5rem 0;
    z-index: 1001;
  }

  .svelte-dropdown-header {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 0.25rem;
  }

  .svelte-dropdown-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.5rem 1rem;
    color: whitesmoke;
    background: none;
    border: none;
    cursor: pointer;
    transition: background 0.15s ease;
    font-size: 0.875rem;
    text-align: left;
    text-decoration: none;
  }

  .svelte-dropdown-item:hover {
    background: rgba(255, 255, 255, 0.15);
    color: whitesmoke;
  }

  .svelte-dropdown-item :global(.svelte-dropdown-icon) {
    opacity: 0.8;
  }

  .svelte-dropdown-divider {
    height: 1px;
    margin: 0.5rem 0;
    background: rgba(255, 255, 255, 0.1);
    border: none;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .svelte-nav-container {
      gap: 1rem;
    }

    .svelte-nav-menu {
      gap: 0.25rem;
    }

    .svelte-nav-link {
      padding: 0.5rem;
      font-size: 0.875rem;
    }

    .svelte-dropdown-menu {
      min-width: 200px;
    }
  }
</style>
