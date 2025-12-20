<script lang="ts">
  import { globalState } from "../stores/GlobalState.svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";

  import {
    LogInIcon,
    LogOutIcon,
    LayoutDashboardIcon,
    UsersIcon,
    BookOpenIcon,
    ChevronLeftIcon,
    PlusIcon,
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

  async function handleLoginSuccess() {
    showAuthModal = false;
    // Réinitialiser l'authentification et déclencher le rechargement du dashboard
    await globalState.refreshAuthAfterLogin();
  }

  $effect(() => {
    if (showDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  });
</script>

<AuthModal bind:isOpen={showAuthModal} onAuthSuccess={handleLoginSuccess} />

<div
  class="navbar bg-base-100 border-base-300 sticky top-0 z-[1000] min-h-[4rem] border-b px-4 shadow-sm"
>
  <div class="navbar-start gap-2">
    <!-- Brand -->
    <button class="btn btn-ghost px-2" onclick={() => navigate("/")}>
      <img src="/favicon-96x96.png" alt="logo" class="h-8 w-8" />
    </button>

    <!-- Back button -->
    {#if navBarStore.backAction}
      <button
        class="btn btn-ghost btn-circle btn-sm"
        onclick={navBarStore.backAction}
      >
        <ChevronLeftIcon size={20} />
      </button>
    {/if}

    <!-- Breadcrumbs -->
    <div class="breadcrumbs ml-2 hidden text-sm lg:block">
      <ul>
        {#each navBarStore.breadcrumbs as item, i}
          <li>
            {#if i < navBarStore.breadcrumbs.length - 1 && (item.path || item.action)}
              <button
                class="hover:text-primary cursor-pointer transition-colors"
                onclick={item.path ? () => navigate(item.path) : item.action}
              >
                {item.label}
              </button>
            {:else}
              <span class="text-base-content font-semibold">{item.label}</span>
            {/if}
          </li>
        {/each}
        {#if navBarStore.breadcrumbs.length === 0}
          <li>
            <span class="text-base-content font-semibold"
              >{navBarStore.title}</span
            >
          </li>
        {/if}
      </ul>
    </div>
  </div>

  <div class="navbar-center">
    {#if navBarStore.actions}
      <div class="flex items-center gap-2">
        {@render navBarStore.actions()}
      </div>
    {:else}
      <div class="hidden gap-2 sm:flex">
        {#if globalState.isAuthenticated}
          <button
            class="btn btn-ghost btn-sm"
            onclick={() => navigate("/dashboard")}>Tableau de bord</button
          >
        {/if}
        <button class="btn btn-ghost btn-sm" onclick={() => navigate("/recipe")}
          >Recettes</button
        >
      </div>
    {/if}
  </div>

  <div class="navbar-end">
    {#if globalState.isAuthenticated}
      <div class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle avatar bg-primary/10 text-primary border-primary/20 border"
        >
          <div
            class="flex w-10 items-center justify-center rounded-full text-lg font-bold"
          >
            {globalState.user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 border-base-200 z-[1] mt-3 w-56 rounded-xl border p-2 shadow-xl"
        >
          <li class="border-base-100 mb-1 border-b px-4 py-2">
            <span
              class="block truncate p-0 text-xs font-medium italic opacity-60"
            >
              {globalState.user?.email}
            </span>
          </li>
          <li>
            <button onclick={() => navigate("/dashboard")}
              ><LayoutDashboardIcon size={16} /> Dashboard</button
            >
          </li>
          <li>
            <button onclick={() => navigate("/dashboard/teams")}
              ><UsersIcon size={16} /> Équipes</button
            >
          </li>
          <li>
            <button onclick={() => navigate("/dashboard/eventEdit")}
              ><PlusIcon size={16} /> Nouvel événement</button
            >
          </li>
          <li>
            <button onclick={() => navigate("/recipe")}
              ><BookOpenIcon size={16} /> Recettes</button
            >
          </li>
          <li class="border-base-100 my-1 border-t"></li>
          <li>
            <button class="text-error hover:bg-error/10" onclick={handleLogout}
              ><LogOutIcon size={16} /> Se déconnecter</button
            >
          </li>
        </ul>
      </div>
    {:else}
      <button class="btn btn-primary btn-sm shadow-md" onclick={handleLogin}>
        <LogInIcon size={16} />
        Connexion
      </button>
    {/if}
  </div>
</div>

<style>
  /* On garde juste ce qui est nécessaire pour sticky ou transitions spécifiques si non géré par DaisyUI */
  :global(.breadcrumbs ul li > button) {
    background: transparent;
    border: none;
    padding: 0;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    display: flex;
    align-items: center;
  }
</style>
