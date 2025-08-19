const { createApp } = Vue;

document.addEventListener('DOMContentLoaded', () => {

  // // --- Vue.js App for Recipes Search ---
  // const recipesSearchApp = createApp({
  //   delimiters: ['[[', ']]'],
  //   data() {
  //     return {
  //       searchRecipesInput: "",
  //       recipesData: [],
  //       selectedIndex: -1,
  //     };
  //   },
  //   watch: {
  //     // When the user types, reset the selection.
  //     searchRecipesInput() {
  //       this.selectedIndex = -1;
  //     }
  //   },
  //   computed: {
  //     filteredRecipes() {
  //       if (this.searchRecipesInput.length > 2) {
  //         const searchTerm = this.searchRecipesInput.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
  //         return this.recipesData.filter((recipe) => {
  //           return searchTerm.split(' ').every(
  //             v => recipe.title.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').includes(v) ||
  //             (recipe.auteur && recipe.auteur.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').includes(v)) ||
  //             (recipe.specialite && recipe.specialite.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').includes(v))
  //           );
  //         });
  //       }
  //       return [];
  //     },
  //   },
  //   methods: {
  //     closeSearch() {
  //       this.searchRecipesInput = "";
  //       this.selectedIndex = -1;
  //     },
  //     setRecipesData(data) {
  //       this.recipesData = data;
  //     },
  //     selectNext() {
  //       if (this.filteredRecipes.length === 0) return;
  //       this.selectedIndex = (this.selectedIndex + 1) % this.filteredRecipes.length;
  //       this.ensureVisible();
  //     },
  //     selectPrevious() {
  //       if (this.filteredRecipes.length === 0) return;
  //       if (this.selectedIndex <= 0) { // This handles both 0 and the initial -1 case
  //         this.selectedIndex = this.filteredRecipes.length - 1;
  //       } else {
  //         this.selectedIndex--;
  //       }
  //       this.ensureVisible();
  //     },
  //     navigateToSelected() {
  //       if (this.selectedIndex > -1 && this.filteredRecipes[this.selectedIndex]) {
  //         window.location.href = this.filteredRecipes[this.selectedIndex].url;
  //       }
  //     },
  //     ensureVisible() {
  //       this.$nextTick(() => {
  //         const links = this.$refs.resultLinks;
  //         if (links && links[this.selectedIndex]) {
  //           links[this.selectedIndex].scrollIntoView({
  //             block: 'nearest',
  //           });
  //         }
  //       });
  //     }
  //   }
  // });

  // const recipesSearchElement = document.getElementById('app-search-recipes');
  // if (recipesSearchElement) {
  //   const rawRecipesData = recipesSearchElement.dataset.recipes;
  //   const parsedRecipesData = JSON.parse(rawRecipesData || '[]');
  //   const appInstance = recipesSearchApp.mount(recipesSearchElement);
  //   appInstance.setRecipesData(parsedRecipesData);
  // }

  // --- Vue.js App for Events Search ---
  const eventsSearchApp = createApp({
    delimiters: ['[[', ']]'],
    data() {
      return {
        searchEventsInput: "",
        eventsData: [],
        selectedIndex: -1,
      };
    },
    watch: {
      searchEventsInput() {
        this.selectedIndex = -1;
      }
    },
    computed: {
      filteredEvents() {
        if (this.searchEventsInput.length >= 4) {
          const searchTerm = this.searchEventsInput.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
          return this.eventsData.filter((event) => {
            return searchTerm.split(' ').every(
              v => event.title.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').includes(v)
            );
          });
        }
        return [];
      },
    },
    methods: {
      closeSearch() {
        this.searchEventsInput = "";
        this.selectedIndex = -1;
      },
      setEventsData(data) {
        this.eventsData = data;
      },
      selectNext() {
        if (this.filteredEvents.length === 0) return;
        this.selectedIndex = (this.selectedIndex + 1) % this.filteredEvents.length;
        this.ensureVisible();
      },
      selectPrevious() {
        if (this.filteredEvents.length === 0) return;
        if (this.selectedIndex <= 0) {
          this.selectedIndex = this.filteredEvents.length - 1;
        } else {
          this.selectedIndex--;
        }
        this.ensureVisible();
      },
      navigateToSelected() {
        if (this.selectedIndex > -1 && this.filteredEvents[this.selectedIndex]) {
          window.location.href = this.filteredEvents[this.selectedIndex].url;
        }
      },
      ensureVisible() {
        this.$nextTick(() => {
          const links = this.$refs.resultLinks;
          if (links && links[this.selectedIndex]) {
            links[this.selectedIndex].scrollIntoView({
              block: 'nearest',
            });
          }
        });
      }
    }
  });

  const eventsSearchElement = document.getElementById('app-search-events');
  if (eventsSearchElement) {
    const rawEventsData = eventsSearchElement.dataset.events;
    const parsedEventsData = JSON.parse(rawEventsData || '[]');
    const appInstance = eventsSearchApp.mount(eventsSearchElement);
    appInstance.setEventsData(parsedEventsData);
  }
});
