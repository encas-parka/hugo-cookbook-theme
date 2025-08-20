const { createApp } = Vue;

document.addEventListener('DOMContentLoaded', () => {
  const eventsSearchElement = document.getElementById('app-search-events');

  if (eventsSearchElement) {
    const eventsSearchApp = createApp({
      delimiters: ['[[', ']]'],
      data() {
        return {
          searchEventsInput: "",
          eventsData: [],
          selectedIndex: -1,
          isAuthenticated: false, // Default state
        };
      },
      created() {
        // Check authentication status from localStorage when the app is created
        this.isAuthenticated = localStorage.getItem('is-authenticated') === 'true';
      },
      mounted() {
        // Set focus on the search input when the component is mounted
        this.$refs.searchEventsInput.focus();
      },
      watch: {
        searchEventsInput() {
          this.selectedIndex = -1;
        }
      },
      computed: {
        filteredEvents() {
          const searchTerm = this.searchEventsInput.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

          // Authenticated users: show all events by default, filter as they type
          if (this.isAuthenticated) {
            if (!searchTerm) {
              return this.eventsData; // Show all if input is empty
            }
            return this.eventsData.filter((event) => {
              return searchTerm.split(' ').every(
                v => event.title.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').includes(v)
              );
            });
          }

          // Unauthenticated users: original behavior, show results only after 4+ characters
          if (this.searchEventsInput.length >= 4) {
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

    const rawEventsData = eventsSearchElement.dataset.events;
    const parsedEventsData = JSON.parse(rawEventsData || '[]');
    const appInstance = eventsSearchApp.mount(eventsSearchElement);
    appInstance.setEventsData(parsedEventsData);
  }
});