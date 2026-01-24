<script lang="ts">
  import { navigate } from "../services/simple-router.svelte";
  import { globalState } from "../stores/GlobalState.svelte";
  import { ChefHat, ArrowRight } from "@lucide/svelte";
  import { eventsStore } from "../stores/EventsStore.svelte";
  import { toastService } from "../services/toast.service.svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { onMount, onDestroy } from "svelte";
  import { ScrollState } from "runed";

  function openAuthModal() {
    globalState.authModal.isOpen = true;
  }

  export function fadeScale(
    node,
    { duration = 300, delay = 0, start = 0.8 } = {},
  ) {
    return {
      delay,
      duration,
      easing: cubicInOut,
      css: (t) => `
        opacity: ${t};
        transform: scale(${start + (1 - start) * t});
      `,
    };
  }

  async function handleDemoEvent() {
    try {
      const toastId = toastService.loading("Chargement de la démo...");

      if (!eventsStore.isInitialized) {
        await eventsStore.initializeForPublic();
      }

      const demoEvents = eventsStore.events.filter(
        (e) => (e.status as string) === "local",
      );

      if (demoEvents.length === 0) {
        toastService.update(toastId, {
          state: "error",
          message: "Aucun événement de démo disponible",
          autoCloseDelay: 3000,
        });
        return;
      }

      const demoEvent = demoEvents[0];
      toastService.dismiss(toastId);
      navigate(`/demo/event/${demoEvent.$id}`);
    } catch (error) {
      console.error("[HomePage] Erreur chargement démo:", error);
      toastService.error("Erreur lors du chargement de la démo");
    }
  }

  const features = [
    {
      id: "feature-1",
      title: "Organisation",
      description:
        "Élaborez des menus sur plusieurs jours et organisez-vous en équipes",
      screenshot: "/images/home/edit_event.webp",
      buttonText: "Voir la démo",
      buttonAction: handleDemoEvent,
      theme: "secondary" as const,
    },
    {
      id: "feature-2",
      title: "Listes de courses",
      description: "Générez automatiquement les listes de courses de vos menus",
      items: [
        "Suivez l'avancement des achats",
        "Notez les dépenses",
        "Répartissez vous les courses",
      ],
      screenshot: "/images/home/product.webp",
      theme: "secondary" as const,
    },
    {
      id: "feature-3",
      title: "Gérez le matos collectifs",
      description: "Maintenez un inventaires, gérer les emprunts",
      screenshot: "/images/home/matos.webp",
      theme: "secondary" as const,
    },
    {
      id: "feature-4",
      title: "Imprimez facilement les recettes",
      description:
        "L'impression des recettes est optimisé pour un rendu noir et blanc, sans l'interface web",
      screenshot: "/images/home/recipe-print.webp",
      theme: "primary" as const,
    },
  ];

  // ScrollState : gestion réactive du scroll
  let featuresContainer: HTMLElement | undefined = $state(undefined);
  let activeIndex = $state(0);
  let isScrollingDown = $state(false);
  let continuousProgress = $state(0); // Progression continue 0-4

  // Instance ScrollState
  const scroll = new ScrollState({
    element: () => window, // Retour à window pour préserver le sticky
    onScroll: handleScroll,
    eventListenerOptions: { passive: true },
  });

  // Handler pour le scroll
  function handleScroll() {
    if (!featuresContainer) return;

    // Calculer la position relative au container features
    const rect = featuresContainer.getBoundingClientRect();
    const containerHeight = featuresContainer.scrollHeight;
    const windowHeight = window.innerHeight;

    // Scroll relatif au container (négatif quand on descend dans la section)
    const scrolled = -rect.top;
    const totalScrollable = containerHeight - windowHeight;

    // Progression 0 à features.length
    const rawProgress = Math.max(
      0,
      Math.min(features.length, (scrolled / totalScrollable) * features.length),
    );

    // Mise à jour de l'index actif (pour le snap du texte)
    const newActiveIndex = Math.min(
      features.length - 1,
      Math.max(0, Math.floor(rawProgress + 0.3)),
    );

    if (newActiveIndex !== activeIndex) {
      activeIndex = newActiveIndex;
    }

    // Mise à jour de la progression continue
    continuousProgress = rawProgress;

    // Détection de la direction
    isScrollingDown = scroll.directions.bottom;
  }

  onMount(() => {
    // ScrollState gère automatiquement les listeners
    // Initialisation de la progression
    handleScroll();
  });

  const themeBtnClasses = (theme: "primary" | "secondary" = "primary") => {
    return theme === "primary" ? "btn-primary" : "btn-secondary";
  };

  /**
   * Fonction d'easing avec plateau pour créer un moment de stabilité
   * @param t - Progression 0 à 1
   * @param plateauStart - Début du plateau (ex: 0.35)
   * @param plateauEnd - Fin du plateau (ex: 0.65)
   * @returns Valeur easing avec plateau
   */
  function plateauEasing(
    t: number,
    plateauStart: number,
    plateauEnd: number,
  ): number {
    const clampedT = Math.max(0, Math.min(1, t));

    if (clampedT < plateauStart) {
      // Phase d'arrivée : 0 → plateauStart
      return clampedT / plateauStart;
    } else if (clampedT > plateauEnd) {
      // Phase de départ : plateauEnd → 1
      return 1 - (1 - clampedT) / (1 - plateauEnd);
    } else {
      // PLATEAU STABLE : reste à 1
      return 1;
    }
  }

  /**
   * État d'animation pour le TEXTE avec snap et plateau
   * Utilise un plateau de 30% (0.35 → 0.65) pour le moment de lisibilité
   */
  function getSnapState(index: number) {
    const isActive = index === activeIndex;
    const isPrev = index < activeIndex;
    const isNext = index > activeIndex;

    // Animation directionnelle : translateY inversé selon direction du scroll
    let translateY: number;
    if (isScrollingDown) {
      // Scroll ↓ : le texte vient d'en bas
      translateY = isPrev ? -20 : isNext ? 20 : 0;
    } else {
      // Scroll ↑ : le texte vient d'en haut
      translateY = isPrev ? 20 : isNext ? -20 : 0;
    }

    return {
      opacity: isActive ? 1 : 0,
      translateX: 0, // Pas de translateX, on garde seulement Y
      translateY,
      scale: isActive ? 1 : 0.88,
      zIndex: isActive ? 10 : 0,
      pointerEvents: isActive ? "auto" : "none",
    };
  }

  /**
   * État d'animation CONTINU pour bordure/glow + forme floue
   * Pas de plateau, animation fluide basée sur la progression exacte
   */
  function getContinuousState(index: number) {
    const progress = continuousProgress - index;
    const absProgress = Math.abs(progress);

    // Opacité : diminue avec la distance (1 à l'index actif, 0 à ±1)
    const opacity = Math.max(0, 1 - absProgress);

    // Scale : légèrement plus petit quand on s'éloigne
    const scale = Math.max(0.85, 1 - absProgress * 0.15);

    // TranslateY : suit exactement la progression
    const translateY = progress * 30;

    // TranslateX : léger décalage latéral pour effet de profondeur
    const translateX = progress * 15;

    return {
      opacity,
      scale,
      translateY,
      translateX,
    };
  }

  // Nouveaux délais progressifs pour les éléments
  function getElementDelay(elementIndex: number, isActive: boolean) {
    if (!isActive) return 0;
    return elementIndex * 150; // 80ms entre chaque élément
  }
</script>

<div class="bg-base-200">
  <!-- SECTION 1: Hero -->
  <section
    class="hero bg-base-200 flex min-h-[90vh] snap-center flex-col justify-center gap-20"
  >
    <div class="hero-content text-center">
      <div class="max-w-3xl">
        <div class="mb-4 flex justify-center" in:fade={{ duration: 800 }}>
          <img
            src="images/logo.svg"
            alt="Enka Cookbook"
            class="color-primary size-80 transition-all duration-900 hover:origin-center hover:rotate-360"
          />
        </div>
        <h1
          class="cherry-bomb-one-regular text-7xl"
          in:fly={{ y: 30, duration: 600, delay: 100 }}
        >
          {#each "Enka Cookbook" as l}
            <span class="hover:text-primary transition-colors duration-200"
              >{l}</span
            >
          {/each}
        </h1>
        <div
          class="text-base-content/70 mt-6 space-x-1 text-xl"
          in:fly={{ y: 20, duration: 800, delay: 200 }}
        >
          {#each ["Outils", " de", " planification", " pour", " les", " cantines", " autogérées"] as w, i (i)}
            <div
              class=" hover:text-primary inline-block transition-all duration-75 hover:rotate-3"
            >
              {w}
            </div>
          {/each}
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap items-center justify-center gap-6"
      in:fadeScale={{ duration: 400, delay: 400, start: 0.9 }}
    >
      <button
        class="btn btn-primary btn-lg transition-all duration-300 hover:scale-110"
        onclick={() => navigate("/recipe")}
        in:fadeScale={{ duration: 400, delay: 450, start: 0.9 }}
      >
        <ChefHat size={24} />
        <span class="flex items-baseline gap-2"> Voir les recettes </span>
      </button>

      {#if globalState.isAuthenticated}
        <button
          class="btn btn-outline btn-lg transition-all duration-300 hover:scale-110"
          onclick={() => navigate("/dashboard")}
          in:fadeScale={{ duration: 400, delay: 500, start: 0.9 }}
        >
          <ArrowRight size={24} />
          Accéder au tableau de bord
        </button>
      {:else}
        <button
          class="btn btn-secondary btn-lg transition-all duration-300 hover:scale-110"
          onclick={openAuthModal}
        >
          Créer un compte pour commencer
          <ArrowRight size={24} />
        </button>
      {/if}

      <button
        class="btn btn-lg btn-primary"
        in:fadeScale={{ duration: 400, delay: 550, start: 0.8 }}
        onclick={handleDemoEvent}
      >
        Démo
      </button>

      {#if !globalState.isAuthenticated}
        <p class="text-base-content/60 text-center">
          Déjà membre ? Connectez-vous pour gérer vos cantines et équipes
        </p>
      {/if}
    </div>
  </section>

  <!-- SECTION 2: Features avec snapping et transitions séquentielles -->
  <section
    class="from-base-200 to-base-100 relative bg-gradient-to-b"
    bind:this={featuresContainer}
  >
    <div class="container mx-auto px-4">
      <!-- Contenu fixe visible -->
      <div class="sticky top-0 flex min-h-screen items-center">
        <div
          class="items-top grid w-full grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16"
        >
          <!-- Screenshot avec cross-fade clean et défilement vertical fluide -->
          <div
            class="bg-base-300 relative col-span-3 aspect-video overflow-hidden rounded-4xl shadow-2xl"
          >
            {#each features as feature, i}
              {@const state = getSnapState(i)}
              {@const scrollY = (continuousProgress - i) * 50}
              <div
                class="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out"
                style="opacity: {state.opacity}; z-index: {state.zIndex}; background-image: url('{feature.screenshot}'); background-position-y: calc(50% + {scrollY *
                  -10}px);"
              ></div>
            {/each}
          </div>

          <!-- Contenu texte avec transitions séquentielles -->
          <div class="relative col-span-2 min-h-[450px]">
            <!-- Icône animée unique (feedback visuel continu) -->
            <div
              class="absolute -right-2 bottom-2 flex -translate-y-1/2 items-center justify-center"
              style="transform: rotate({continuousProgress *
                180}deg); transition: none;"
            >
              <img src="images/logo.svg" alt="EC" class="size-16" />
            </div>

            <!-- Contenu texte (avec snap + plateau) -->
            {#each features as feature, i}
              {@const state = getSnapState(i)}
              {@const isActive = i === activeIndex}
              <div
                class="absolute inset-0"
                style="
                  opacity: {state.opacity};
                  transform: translateX({state.translateX}px) translateY({state.translateY}px) scale({state.scale});
                  z-index: {state.zIndex};
                  pointer-events: {state.pointerEvents};
                  transition: opacity 600ms ease-out, transform 600ms ease-out;
                "
              >
                <div class="space-y-6">
                  <!-- Titre avec délai 0 -->
                  <h3
                    class="text-base-content mt-10 text-3xl font-bold md:text-4xl"
                    style="
                      opacity: {isActive ? 1 : 0};
                      transform:  translateX({isActive ? 0 : 55}px);
                      transition: opacity 500ms ease-out {getElementDelay(
                      0,
                      isActive,
                    )}ms,
                                  transform 500ms ease-out {getElementDelay(
                      0,
                      isActive,
                    )}ms;
                    "
                  >
                    {feature.title}
                  </h3>

                  <!-- Description avec délai 1 -->
                  <p
                    class="text-base-content/70 text-lg leading-relaxed"
                    style="
                      opacity: {isActive ? 1 : 0};
                      transform: translateX({isActive ? 0 : 35}px);
                      transition: opacity 500ms ease-out {getElementDelay(
                      1,
                      isActive,
                    )}ms,
                                  transform 500ms ease-out {getElementDelay(
                      1,
                      isActive,
                    )}ms;
                    "
                  >
                    {feature.description}
                  </p>

                  {#if feature.items}
                    <!-- Liste avec délai 2 -->
                    <ul
                      class="mt-8 space-y-3"
                      style="
                        opacity: {isActive ? 1 : 0};
                        transform: translateY({isActive ? 0 : 15}px);
                        transition: opacity 500ms ease-out {getElementDelay(
                        2,
                        isActive,
                      )}ms,
                                    transform 500ms ease-out {getElementDelay(
                        2,
                        isActive,
                      )}ms;
                      "
                    >
                      {#each feature.items as item, itemIdx}
                        <li
                          class="text-base-content flex items-start gap-3"
                          style="
                            opacity: {isActive ? 1 : 0};
                            transform: translateX({isActive ? 0 : -10}px);
                            transition: opacity 400ms ease-out {getElementDelay(
                            3,
                            isActive,
                          ) +
                            itemIdx * 50}ms,
                                        transform 400ms ease-out {getElementDelay(
                            3,
                            isActive,
                          ) +
                            itemIdx * 50}ms;
                          "
                        >
                          <svg
                            class="text-primary mt-0.5 h-6 w-6 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      {/each}
                    </ul>
                  {/if}

                  {#if feature.buttonText && feature.buttonAction}
                    <!-- Bouton avec dernier délai -->
                    <div
                      class="mt-8"
                      style="
                        opacity: {isActive ? 1 : 0};
                        transform: translateY({isActive
                        ? 0
                        : 15}px) scale({isActive ? 1 : 0.95});
                        transition: opacity 500ms ease-out {getElementDelay(
                        feature.items ? 4 : 3,
                        isActive,
                      )}ms,
                                    transform 500ms ease-out {getElementDelay(
                        feature.items ? 4 : 3,
                        isActive,
                      )}ms;
                      "
                    >
                      <button
                        class="btn btn-lg {themeBtnClasses(feature.theme)}"
                        onclick={feature.buttonAction}
                      >
                        {feature.buttonText}
                      </button>
                    </div>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Indicateur de progression avec double layer -->
        <div class="absolute right-0 bottom-8 left-0 flex justify-center px-4">
          <div
            class="bg-base-100/80 flex max-w-full gap-2 overflow-x-auto rounded-full px-4 py-3 shadow-lg backdrop-blur-sm md:gap-3 md:px-6 md:py-4"
          >
            {#each features as _, idx}
              <div
                class="bg-base-300 relative h-2 w-12 flex-shrink-0 overflow-hidden rounded-full md:w-16"
              >
                <!-- Barre de progression continue (transparente) -->
                <div
                  class="bg-primary/30 absolute inset-y-0 left-0 rounded-full transition-all duration-200 ease-out"
                  style="width: {Math.max(
                    0,
                    Math.min(1, continuousProgress - idx),
                  ) * 100}%"
                ></div>
                <!-- Barre d'état actif (opaque) -->
                <div
                  class="bg-primary absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out"
                  style="width: {activeIndex === idx ? 100 : 0}%"
                ></div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Hauteur de scroll invisible (sans snap CSS) -->
      <div class="relative -z-10">
        {#each features as feature}
          <div class="h-screen"></div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  .cherry-bomb-one-regular {
    font-family: "Cherry Bomb One", system-ui;
    font-weight: 400;
    font-style: normal;
  }

  :global(html) {
    scroll-behavior: smooth;
  }
</style>
