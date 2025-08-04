/**
 * app.js
 * Exporte une fabrique `createEventApp(initialData)` qui instancie l’app Vue
 * en lisant les données initiales depuis un objet (ex: window.__EVENT_PAGE_DATA__).
 *
 * Remarques:
 * - Cette version migre la structure et branchements essentiels de l’app, en
 *   conservant les comportements existants (délimiteurs, computed clés, watch,
 *   méthodes principales et couplage à flatpickr via datePickerReset).
 * - Les templates HTML restent dans le layout Hugo. On ne monte pas ici;
 *   laissez le bootstrap s’en charger:
 *     import { createEventApp } from './app.js';
 *     const app = createEventApp(window.__EVENT_PAGE_DATA__);
 *     app.mount('#app');
 */

export function createEventApp(initialData = {}) {
  // Valeurs par défaut pour éviter les accès undefined
  const {
    datesRepas = [],
    datesTimeRepas = [],
    startDate = null,
    endDate = null,
    ingByTypeList = [],
    allIngredients = [],
    types = [],
    toPrint = {},
    uniqueIngCount = 0,
    recettesLength = 0,
    missingRecipes = [],
  } = initialData;

  return Vue.createApp({
    delimiters: ['[[', ']]'],

    data() {
      return {
        // Recherche
        searchInput: '',
        debouncedSearchQuery: '',
        searchDebounceTimer: null,

        // Données injectées
        datesRepas,
        datesTimeRepas,
        startDate,
        endDate,
        missingRecipes,

        // Sélection date courante (contrôlée par flatpickr)
        startDateSelected: null,
        endDateSelected: null,
        endDateSelectedDebug: null,
        endDateAllowed: null,

        // UI flags
        startDateMenu: false,
        endDateMenu: false,
        showAllColIngredients: false,
        displayDetailsRecettes: true,

        // Groupements/ingrédients
        ingByTypeList,
        ingredients: Array.isArray(allIngredients) ? allIngredients : [],
        ingFraisFiltered: [],
        totalRangeWithDetailResults: {},
        uniqueIngCount,
        recettesLength,

        // Impression
        printSelectIng: false,
        toPrint: { ...toPrint },
        printAddCol: [],

        // Types/ranges
        types: Array.isArray(types) ? types : [],
        rangesDates: [],
        daysPerRange: 3,
        fraisByRanges: false,
        legumesByRanges: false,
        animauxByRanges: false,

        // Modal ingrédient
        selectedIngredient: '',
        ingredientDetails: [],
        ingredientTotalQuantity: null,
        modalDateStart: '',
        modalDateEnd: '',

        // Autres
        hasData: true,
      };
    },

    created() {
      // Nothing specific for now (placeholder for future lifecycle migrations)
    },

    mounted() {
      // Logs de débogage semblables à la version inline
      try {
        console.log("=== DÉBUG INITIALISATION ===");
        console.log("Type de this.ingredients:", typeof this.ingredients);
        console.log("Est un tableau:", Array.isArray(this.ingredients));
        console.log("Longueur:", this.ingredients.length);
        console.log("Contenu:", this.ingredients);
      } catch (_e) {
        // Logging best-effort
      }

      if (!Array.isArray(this.ingredients) || this.ingredients.length === 0) {
        console.warn("Aucune donnée d'ingrédients trouvée");
        this.hasData = false;
        return;
      }

      // Initialisation bornes des dates si disponibles
      if (Array.isArray(this.datesRepas) && this.datesRepas.length > 0) {
        this.startDateSelected = this.startDate;
        this.endDateSelected = this.endDate;
        this.endDateAllowed = this.endDate;

        try {
          console.log("Dates initialisées:", {
            startDate: this.startDate,
            endDate: this.endDate,
            startDateSelected: this.startDateSelected,
            endDateSelected: this.endDateSelected
          });
        } catch (_e) {}
      }

      // Initialiser les datepickers via la méthode Vue
      this.$nextTick(() => {
        this.datePickerReset();
      });

      try {
        console.log("=== FIN DEBUG INITIALISATION ===");
      } catch (_e) {}
    },

    computed: {
      // Filtrage par datepicker -> produit un objet { type: items[] } selon la période
      filterByDatePicker() {
        const filtered = {};
        if (!this.startDateSelected || !this.endDateSelected) {
          return filtered;
        }
        const startDate = new Date(this.startDateSelected);
        const endDate = new Date(this.endDateSelected);
        // inclure la date de fin complète
        endDate.setDate(endDate.getDate() + 1);

        const sections = Array.isArray(this.ingByTypeList) ? this.ingByTypeList : [];
        sections.forEach(section => {
          const items = Array.isArray(section.items) ? section.items : [];
          if (this.startDateSelected === this.startDate && this.endDateSelected === this.endDate) {
            filtered[section.type] = items;
          } else {
            filtered[section.type] = items.filter(ingredient => {
              const ingredientDate = new Date(ingredient.dateTimeService);
              return ingredientDate >= startDate && ingredientDate < endDate;
            });
          }
        });

        return filtered;
      },

      searchFormat() {
        return (this.debouncedSearchQuery || '')
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "");
      },

      // Calcul des totaux par type pour les ingrédients filtrés par période
      computeTotalDP() {
        const ingFiltered = this.filterByDatePicker;
        const ingredientTotals = new Map();

        for (const [type, ingredients] of Object.entries(ingFiltered)) {
          ingredients.forEach((i) => {
            if (!ingredientTotals[type]) {
              ingredientTotals[type] = {};
            }

            let ingredientItem = ingredientTotals[type][i.ingredient];
            if (!ingredientItem) {
              ingredientItem = {
                ingredient: i.ingredient,
                qTotalX: [],
                totalRecettes: 1,
                totalAssiettes: i.assiettes,
                iType: i.ingredientType
              };
              ingredientTotals[type][i.ingredient] = ingredientItem;
            } else {
              ingredientItem.totalRecettes++;
              ingredientItem.totalAssiettes += i.assiettes;
            }

            const existingUnit = ingredientItem.qTotalX.find(item => item.unit === i.unit);
            if (existingUnit) {
              existingUnit.qTotal += i.quantite;
            } else {
              ingredientItem.qTotalX.push({
                qTotal: i.quantite,
                unit: i.unit,
              });
            }
          });
        }

        return ingredientTotals;
      },

      // Fusionne détails + totaux et applique optionnellement un filtre de recherche
      totalQuantitesDP() {
        const ingTotaux = this.computeTotalDP;
        const ingDetail = this.filterByDatePicker;
        const mergedResult = new Map();

        for (const key in ingDetail) {
          if (Object.prototype.hasOwnProperty.call(ingDetail, key) &&
              Object.prototype.hasOwnProperty.call(ingTotaux, key)) {
            mergedResult[key] = Object.assign({}, ingDetail[key], ingTotaux[key]);
          }
        }

        for (const key in mergedResult) {
          if (Object.prototype.hasOwnProperty.call(mergedResult, key)) {
            mergedResult[key] = Object.values(mergedResult[key])
              .sort((a, b) => a.ingredient.localeCompare(b.ingredient));
          }
        }

        if ((this.debouncedSearchQuery || '').length > 2) {
          return this.searchFilter(mergedResult);
        }
        return mergedResult;
      },

      // Découpe datesRepas en tranches de daysPerRange
      splitDateRanges() {
        let currentRange = [];
        this.rangesDates = [];
        const newDaysPerRange = this.daysPerRange;

        for (let i = 0; i < this.datesRepas.length; i++) {
          currentRange.push(this.datesRepas[i]);
          if (currentRange.length >= Number(newDaysPerRange)) {
            this.rangesDates.push([...currentRange]);
            currentRange = [];
          }
        }
        if (currentRange.length > 0) {
          this.rangesDates.push([...currentRange]);
        }
        return this.rangesDates;
      },
    },

    watch: {
      searchInput(newValue) {
        if (this.searchDebounceTimer) {
          clearTimeout(this.searchDebounceTimer);
        }
        this.searchDebounceTimer = setTimeout(() => {
          this.debouncedSearchQuery = newValue;
        }, 500);
      },

      // splitDateRanges recalculera totalRangeWithDetail via accès paresseux
      splitDateRanges() {
        // trigger dépendances si nécessaire
        this.totalRangeWithDetail;
      },
    },

    methods: {
      // --- Formatage / Impression ---
      formatDateRange(startDate, endDate) {
        if (!startDate || !endDate) return '';

        const start = new Date(startDate);
        const end = new Date(endDate);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const startFormatted = start.toLocaleDateString('fr-FR', options);
        const endFormatted = end.toLocaleDateString('fr-FR', options);

        if (startDate === endDate) {
          return `du ${startFormatted}`;
        }
        return `du ${startFormatted} au ${endFormatted}`;
      },

      printThis(el, section) {
        this.$nextTick(() => {
          const printThat = [el, section];
          Object.keys(this.toPrint).forEach((param) => {
            this.toPrint[param] = printThat.includes(param);
          });
          this.$nextTick(() => {
            window.print();
          });
        });
      },

      printGlobal() {
        Object.keys(this.toPrint).forEach((param) => {
          this.toPrint[param] = true;
        });
      },

      print() {
        setTimeout(() => {
          window.print();
        }, 500);
      },

      updateSelectedAttribute(e) {
        let sel, i;
        sel = document.getElementById(e.target.id);
        for (i = 0; i < sel.length; i += 1) {
          sel[i].removeAttribute("selected");
        }
        sel[sel.selectedIndex].setAttribute("selected", "selected");
      },

      // --- Datepicker (couplé à flatpickr) ---
      datesReset() {
        this.startDateSelected = this.startDate;
        this.endDateSelected = this.endDateAllowed;
        this.datePickerReset();
      },

      datePickerReset() {
        // flatpickr doit être disponible globalement à ce stade.
        const configDPStart = {
          enableTime: false,
          dateFormat: "Y-m-d",
          altInput: true,
          altFormat: "D d M",
          defaultDate: this.startDate,
          minDate: this.startDate,
          maxDate: this.endDateAllowed,
        };
        const configDPEnd = {
          enableTime: false,
          dateFormat: "Y-m-d",
          altInput: true,
          altFormat: "D d M",
          defaultDate: this.endDateAllowed,
          minDate: this.startDate,
          maxDate: this.endDateAllowed,
        };

        // Ces éléments doivent exister dans le DOM (IDs déjà en place dans le layout)
        try {
          // eslint-disable-next-line no-undef
          flatpickr(datepickerStart, configDPStart);
          // eslint-disable-next-line no-undef
          flatpickr(datepickerEnd, configDPEnd);
        } catch (_e) {
          // Si flatpickr ou les éléments ne sont pas disponibles, on ignore silencieusement.
        }
      },

      // --- Calculs des totaux sur une plage ---
      totalRange(iType, start, end) {
        const key = `${iType}_${start}_${end}`;
        if (!this.totalRangeWithDetailResults[key]) {
          this.totalRangeWithDetail(iType, start, end);
        }
        const base = this.totalRangeWithDetailResults[key] || [];
        return (this.debouncedSearchQuery || '').length > 2
          ? this.searchFilterRange(base)
          : base;
      },

      totalRangeWithDetail(iType, start, end) {
        const key = `${iType}_${start}_${end}`;
        if (this.totalRangeWithDetailResults[key]) {
          return this.totalRangeWithDetailResults[key];
        }

        const totalArray = this.totalRangeArray(iType, start, end);
        const ingDetailList = this.ingFraisFiltered;

        const result = [...ingDetailList, ...totalArray]
          .sort((a, b) => a.ingredient.localeCompare(b.ingredient));

        this.totalRangeWithDetailResults[key] = result;
        return result;
      },

      totalRangeArray(iType, start, end) {
        // Implémente le flux de calcul total -> objets {ingredient, unitTotal, qTotal, totalAssiettes}
        const total = this.computeTotalRange(this.filteredIngredientsRange(iType, start, end));
        const result = Object.entries(total).flatMap(([ingredient, values]) => {
          return values.map(({ unitTotal, qTotal, totalAssiettes }) => ({
            ingredient,
            unitTotal,
            qTotal: Math.round(qTotal * 100) / 100,
            totalAssiettes,
          }));
        });
        return result;
      },

      // --- Calculs / filtres migrés depuis l'app inline ---
      computeTotalRange(filteredIng) {
        const totalArray = [];

        filteredIng.forEach((item) => {
          const converted = this.convertUnit({ ...item });

          const { ingredient, quantite, unit, assiettes } = converted;

          if (!totalArray[ingredient]) {
            totalArray[ingredient] = [];
          }

          const existingItem = totalArray[ingredient].find((it) => it.unitTotal === unit);
          if (existingItem) {
            existingItem.qTotal += quantite !== 0 ? quantite : 1;
            existingItem.totalAssiettes += assiettes;
            existingItem.totalRecettes += 1;
          } else {
            totalArray[ingredient].push({
              unitTotal: unit,
              qTotal: quantite !== 0 ? quantite : 1,
              totalAssiettes: assiettes,
              totalRecettes: 1,
            });
          }
        });

        return totalArray;
      },

      filteredIngredientsRange(iType, start, end) {
        const sections = Array.isArray(this.ingByTypeList) ? this.ingByTypeList : [];
        const section = sections.find(s => s.type === iType);
        const ingredients = section && Array.isArray(section.items) ? section.items : [];
        if (!Array.isArray(ingredients)) {
          console.warn('[ingredients] expected array for type', iType);
          return [];
        }

        const filtered = ingredients.filter(
          (i) =>
            i.dateTimeService >= start &&
            i.dateTimeService <= end
        );

        this.ingFraisFiltered = filtered;
        return filtered;
      },

      convertUnit(item) {
        if (item && (item.unit === 'grammes' || item.unit === 'gr.')) {
          item.quantite = item.quantite / 1000;
          item.unit = 'Kg';
        }
        if (item && item.unit === 'ml') {
          item.quantite = item.quantite / 1000;
          item.unit = 'l.';
        }
        return item;
      },

      round2Decimals(x) {
        return Math.round(x * 100) / 100;
      },

      searchFilterRange(totalRange) {
        if (!Array.isArray(totalRange)) return [];
        return totalRange.filter(item =>
          (item.ingredient || '').normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
            .includes(this.searchFormat)
        );
      },

      searchFilter(merge_ing_list) {
        const filtered = {};

        for (const [type, ingredients] of Object.entries(merge_ing_list)) {
          filtered[type] = ingredients.filter(
            ingredient => (ingredient.ingredient || '').normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(this.searchFormat)
          );
        }

        return filtered;
      },

      // --- Modal ingrédient (détails et totaux) ---
      openIngredientModal(ingredientName, ingredientType) {
        this.selectedIngredient = ingredientName;

        // Période active basée sur le date picker
        this.modalDateStart = this.startDateSelected;
        this.modalDateEnd = this.endDateSelected;

        // Filtrer les ingrédients pour celui sélectionné dans la période active
        const filteredIngredients = this.filterByDatePicker;

        if (filteredIngredients[ingredientType]) {
          this.ingredientDetails = filteredIngredients[ingredientType].filter(
            ingredient => ingredient.ingredient === ingredientName
          ).sort((a, b) => new Date(a.dateTimeService) - new Date(b.dateTimeService));
        } else {
          this.ingredientDetails = [];
        }

        // Calculer le total pour cet ingrédient
        this.calculateIngredientTotal();
      },

      openIngredientModalRange(ingredientName, ingredientType, startDate, endDate) {
        this.selectedIngredient = ingredientName;

        // Période explicite
        this.modalDateStart = startDate;
        this.modalDateEnd = endDate;

        // Filtrer les ingrédients pour celui sélectionné dans la période spécifiée
        const filtered = this.filteredIngredientsRange(ingredientType, startDate, endDate);
        this.ingredientDetails = filtered.filter(
          ingredient => ingredient.ingredient === ingredientName
        ).sort((a, b) => new Date(a.dateTimeService) - new Date(b.dateTimeService));

        // Calculer le total pour cet ingrédient
        this.calculateIngredientTotal();
      },

      calculateIngredientTotal() {
        const totals = new Map();

        this.ingredientDetails.forEach(detail => {
          const convertedDetail = this.convertUnit({ ...detail });
          const unit = convertedDetail.unit;

          if (totals.has(unit)) {
            totals.set(unit, totals.get(unit) + convertedDetail.quantite);
          } else {
            totals.set(unit, convertedDetail.quantite);
          }
        });

        this.ingredientTotalQuantity = Array.from(totals, ([unit, qTotal]) => ({
          unit,
          qTotal
        }));
      },
    },
  });
}
