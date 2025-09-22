/**
 * ingredients_list_refactored.js
 * Refactored Vue component using extracted business logic modules
 * Following SOLID, KISS, and DRY principles
 */

import {
  normalizeIngredientQuantity,
  formatNormalizedQuantity,
  roundQuantityByUnit,
  processIngredients,
  processIngredientDetails,
  hasAnyConversion,
  formatDetailQuantity,
  formatTypeShort
} from './ingredientCalculator.js';

export function createEventApp(initialData = {}) {
  // Valeurs par défaut pour éviter les accès undefined
  const {
    datesRepas = [],
    datesTimeRepas = [],
    startDate = null,
    endDate = null,
    ingByTypeList = [],
    types = [],
    toPrint = {},
    uniqueIngCount = 0,
    recettesLength = 0,
    missingRecipes = [],
    conversionRules = {}
  } = initialData;

  return Vue.createApp({
    delimiters: ["[[", "]]"],

    data() {
      return {
        isLoading: false,
        // Recherche
        searchInput: "",
        debouncedSearchQuery: "",
        searchDebounceTimer: null,

        // Données injectées
        datesRepas,
        datesTimeRepas,
        startDate,
        endDate,
        missingRecipes,
        conversionRules,

        // Sélection date courante (contrôlée par flatpickr)
        dateRangeSelected: null,
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
        ingFraisFiltered: [],
        totalRangeWithDetailResults: {},
        _cachedRawRangeDetails: {},
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

        // Système d'onglets
        activeTab: 'normal',

        // Modal ingrédient
        selectedIngredient: "",
        ingredientDetails: [],
        ingredientTotalQuantityStandard: null,
        ingredientTotalQuantityTransparent: null,
        modalDateStart: "",
        modalDateEnd: "",

        ingredientConversionRules: [],

        // Autres
        hasData: true,
        _rangeStandardizedCache: {},

        // Collaborative list creation
        isCreatingList: false,
        existingListExists: false,
      };
    },

    created() {
      // Nothing specific for now
    },

    mounted() {
      const hasIngredients =
        Array.isArray(this.ingByTypeList) &&
        this.ingByTypeList.length > 0 &&
        this.ingByTypeList.some(
          (group) => group.items && group.items.length > 0,
        );

      if (!hasIngredients) {
        console.warn("Aucune donnée d'ingrédients trouvée via ingByTypeList");
        this.hasData = false;
        return;
      }

      // Vérifier si une liste collaborative existe déjà pour cet événement
      this.checkExistingListOnInit();

      // Initialiser les dates sélectionnées
      if (Array.isArray(this.datesRepas) && this.datesRepas.length > 0) {
        this.startDateSelected = this.startDate;
        this.endDateSelected = this.endDate;
        this.endDateAllowed = this.endDate;
      }

      // Initialiser le flatpickr range
      this.flatpickrInstance = flatpickr("#daterange", {
        mode: "range",
        dateFormat: "Y-m-d",
        inline: true,
        position: "auto center",
        locale: { firstDayOfWeek: 1 },
        minDate: this.startDate || "today",
        maxDate: this.endDate || "1 year",
        defaultDate: [this.startDate, this.endDate],
        onChange: function (selectedDates, dateStr, instance) {
          this.dateRangeSelected = dateStr;
          if (selectedDates.length === 2) {
            this.startDateSelected = selectedDates[0];
            this.endDateSelected = selectedDates[1];
          }
        }.bind(this),
      });

      this.isLoading = false;

      // Focus the search input
      this.$nextTick(() => {
        const searchInput = document.querySelector('input[v-model="searchInput"]');
        if (searchInput) {
          searchInput.focus();
        }
      });
    },

    computed: {
      // Calcul unifié des totaux standardisés
      computeTotalStandardDP() {
        const ingFiltered = this.filterByDatePicker;
        const finalGroupedByType = {};

        for (const type in ingFiltered) {
          if (!Object.prototype.hasOwnProperty.call(ingFiltered, type)) continue;

          // Traiter les ingrédients avec le module externe en incluant les quantités originales pour l'affichage transparent
          const processedIngredients = processIngredients(ingFiltered[type], {
            useStandardized: true,
            includeOriginalQuantities: true
          });

          finalGroupedByType[type] = {};
          processedIngredients.forEach(item => {
            // Corriger le iType pour qu'il corresponde au type de la boucle
            item.iType = type;
            finalGroupedByType[type][item.ingredient] = item;
          });
        }

        return finalGroupedByType;
      },

      // Affichage des totaux standardisés
      totalQuantitesStandardDP() {
        const ingTotaux = this.computeTotalStandardDP;
        let finalResult = {};

        for (const type in ingTotaux) {
          if (Object.prototype.hasOwnProperty.call(ingTotaux, type)) {
            finalResult[type] = Object.values(ingTotaux[type])
              .sort((a, b) => a.ingredient.localeCompare(b.ingredient));
          }
        }

        if ((this.debouncedSearchQuery || '').length > 2) {
          finalResult = this.searchFilter(finalResult);
        }

        return finalResult;
      },

      // Totaux standardisés par plage (simplifié)
      totalRangeStandardized() {
        const standardizedByRange = {};

        if (this.activeTab === 'byRange' && this.rangesDates && this.rangesDates.length > 0) {
          this.rangesDates.forEach(range => {
            const startDate = range[0];
            const endDate = range[range.length - 1];
            const rangeKey = `${startDate}_${endDate}`;

            ['legumesFrais', 'frais', 'animaux'].forEach(type => {
              const filteredIng = this.filteredIngredientsRange(type, startDate, endDate);
              const processedIngredients = processIngredients(filteredIng, { useStandardized: true });

              const key = `${type}_${rangeKey}`;
              standardizedByRange[key] = processedIngredients;
            });
          });
        }

        return standardizedByRange;
      },

      // Filtrage par datepicker
      filterByDatePicker() {
        const filtered = {};
        if (!this.startDateSelected || !this.endDateSelected) {
          return filtered;
        }

        const startDate = new Date(this.startDateSelected);
        const endDate = new Date(this.endDateSelected);
        endDate.setDate(endDate.getDate() + 1);

        const sections = Array.isArray(this.ingByTypeList) ? this.ingByTypeList : [];

        sections.forEach((section) => {
          const items = Array.isArray(section.items) ? section.items : [];

          if (this.startDateSelected === this.startDate && this.endDateSelected === this.endDate) {
            filtered[section.type] = items;
          } else {
            filtered[section.type] = items.filter((ingredient) => {
              const ingredientDate = new Date(ingredient.dateTimeService);
              return ingredientDate >= startDate && ingredientDate < endDate;
            });
          }
        });

        return filtered;
      },

      // Types pour navigation
      computedTypesForNavigation() {
        const baseTypes = [
          "sucres", "sec", "lof", "legumesFrais", "legumesNonFrais",
          "frais", "epices", "autres", "animaux", "absent",
        ];

        return baseTypes.filter((type) => {
          return this.totalQuantitesDP[type] && Object.keys(this.totalQuantitesDP[type]).length > 0;
        });
      },

      // Liens de navigation par plage
      computedRangeLinksForNavigation() {
        if (!this.showFreshProductsByRange || !this.rangesDates || this.rangesDates.length === 0) {
          return [];
        }

        const rangeLinks = [];
        const freshTypes = ["legumesFrais", "frais", "animaux"];

        freshTypes.forEach((type) => {
          this.rangesDates.forEach((range) => {
            if (this.totalRange(type, range[0], range[range.length - 1]).length > 0) {
              const startDate = new Date(range[0]);
              const endDate = new Date(range[range.length - 1]);
              const id = `${type}ByRange-${startDate.getDate()}${endDate.getDate()}`;

              const startDateFormatted = startDate.toLocaleDateString("fr-FR", { day: "numeric" });
              const endDateFormatted = endDate.toLocaleDateString("fr-FR", { day: "numeric" });

              rangeLinks.push({
                id,
                type,
                startDate: range[0],
                endDate: range[range.length - 1],
                label: `${formatTypeShort(type)} du ${startDateFormatted} au ${endDateFormatted}`,
              });
            }
          });
        });

        return rangeLinks;
      },

      searchFormat() {
        return (this.debouncedSearchQuery || "")
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
      },

      // Détails par ingrédient et type
      filteredItemsByIngredientAndType() {
        const detailsMap = {};
        const filteredByDate = this.filterByDatePicker;

        for (const type in filteredByDate) {
          if (!Object.prototype.hasOwnProperty.call(filteredByDate, type)) continue;

          detailsMap[type] = {};
          const itemsForType = filteredByDate[type];

          itemsForType.forEach((item) => {
            if (!detailsMap[type][item.ingredient]) {
              detailsMap[type][item.ingredient] = [];
            }
            detailsMap[type][item.ingredient].push(item);
          });

          // Trier par date
          for (const ingredientName in detailsMap[type]) {
            detailsMap[type][ingredientName].sort(
              (a, b) => new Date(a.dateTimeService) - new Date(b.dateTimeService)
            );
          }
        }

        return detailsMap;
      },

      // Calcul des totaux (simplifié en utilisant le module externe)
      computeTotalDP() {
        const ingFiltered = this.filterByDatePicker;
        const ingredientTotals = {};

        for (const [type, ingredients] of Object.entries(ingFiltered)) {
          // Inclure les quantités originales pour l'affichage transparent
          const processedIngredients = processIngredients(ingredients, {
            useStandardized: false,
            includeOriginalQuantities: true
          });

          ingredientTotals[type] = {};

          // M'assurer que chaque ingrédient a le bon iType (le type de la boucle)
          processedIngredients.forEach(item => {
            // Corriger le iType pour qu'il corresponde au type de la boucle
            item.iType = type;
            ingredientTotals[type][item.ingredient] = item;
          });
        }

        return ingredientTotals;
      },

      // Totaux pour affichage
      totalQuantitesDP() {
        const ingTotaux = this.computeTotalDP;
        let finalResult = {};

        for (const type in ingTotaux) {
          if (Object.prototype.hasOwnProperty.call(ingTotaux, type)) {
            finalResult[type] = Object.values(ingTotaux[type])
              .sort((a, b) => a.ingredient.localeCompare(b.ingredient));
          }
        }

        if ((this.debouncedSearchQuery || "").length > 2) {
          finalResult = this.searchFilter(finalResult);
        }

        // Masquer les catégories fresh products en mode byRange
        if (this.activeTab === 'byRange') {
          ['legumesFrais', 'frais', 'animaux'].forEach(type => {
            if (finalResult[type]) {
              finalResult[type] = [];
            }
          });
        }

        return finalResult;
      },

      // Découpage des plages de dates
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

      showRanges() {
        return this.activeTab === 'byRange';
      },

      showFreshProductsByRange() {
        return this.activeTab === 'byRange';
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

      activeTab(newValue) {
        this.clearRangeStandardizedCache();
        if (newValue === 'byRange') {
          this.splitDateRanges;
        }
      },

      daysPerRange() {
        this.clearRangeStandardizedCache();
      },

      startDateSelected() {
        this.clearRangeStandardizedCache();
      },

      endDateSelected() {
        this.clearRangeStandardizedCache();
      },

      ingByTypeList() {
        this.clearRangeStandardizedCache();
      },
    },

    methods: {
      // --- Formatage / Impression ---
      formatDateRange(startDate, endDate) {
        if (!startDate || !endDate) return "";

        const start = new Date(startDate);
        const end = new Date(endDate);
        const options = { day: "numeric", month: "short", year: "numeric" };
        const startFormatted = start.toLocaleDateString("fr-FR", options);
        const endFormatted = end.toLocaleDateString("fr-FR", options);

        if (startDate === endDate) {
          return `du ${startFormatted}`;
        }
        return `du ${startFormatted} au ${endFormatted}`;
      },

      doesTransparentTotalDiverge(input) {
        let details;

        if (Array.isArray(input)) {
          // Cas du modal: input est déjà un tableau de détails
          details = input;
        } else {
          // Cas du tableau: input est un item
          const item = input;
          // On récupère tous les détails de l'ingrédient pour la période sélectionnée
          details = this.getIngredientIndividualDetails(item.ingredient, item.iType);
        }

        // Simple vérification : si au moins UN des détails a hasConversion === true, on affiche le total transparent
        const hasAnyConversion = details.some(detail => {
          return detail.hasConversion === true;
        });

        return hasAnyConversion;
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

      // --- Datepicker ---
      datesReset() {
        this.dateRangeSelected = [this.startDate, this.endDate];
        this.startDateSelected = this.startDate;
        this.endDateSelected = this.endDate;

        this.flatpickrInstance.clear();
        this.flatpickrInstance.setDate([this.startDate, this.endDate]);
      },

      // --- Calculs des totaux sur une plage ---
      totalRange(iType, start, end) {
        const key = `${iType}_${start}_${end}`;
        const base = this.totalRangeWithDetail(iType, start, end);
        return (this.debouncedSearchQuery || "").length > 2
          ? this.searchFilterRange(base)
          : base;
      },

      totalRangeStandard(iType, start, end) {
        const rangeKey = `${start}_${end}`;
        const key = `${iType}_${rangeKey}`;
        const standardizedData = this.totalRangeStandardized[key];

        if (!standardizedData) {
          return [];
        }

        return (this.debouncedSearchQuery || "").length > 2
          ? this.searchFilterRange(standardizedData)
          : standardizedData;
      },

      totalRangeWithDetail(iType, start, end) {
        const key = `${iType}_${start}_${end}`;
        if (this.totalRangeWithDetailResults[key]) {
          return this.totalRangeWithDetailResults[key];
        }

        const filteredIng = this.filteredIngredientsRange(iType, start, end);
        // Inclure les quantités originales pour l'affichage transparent dans les tableaux byRange
        const result = processIngredients(filteredIng, {
          useStandardized: false,
          includeOriginalQuantities: true
        })
          .sort((a, b) => a.ingredient.localeCompare(b.ingredient));

        // M'assurer que chaque ingrédient a le bon iType pour le mode byRange
        result.forEach(item => {
          item.iType = iType;
        });

        this.totalRangeWithDetailResults[key] = result;
        return result;
      },

      getIngredientIndividualDetails(ingredientName, iType, startDate = null, endDate = null) {
        let sourceItems;
        if (startDate && endDate) {
          // Pour les plages de dates spécifiques, utiliser le cache de filteredIngredientsRange
          const rangeKey = `${iType}_${startDate}_${endDate}`;
          sourceItems = this._cachedRawRangeDetails[rangeKey] ||
            this.filteredIngredientsRange(iType, startDate, endDate);
        } else {
          // Pour les totaux généraux (dépend de startDateSelected/endDateSelected), utiliser la computed property
          sourceItems = this.filteredItemsByIngredientAndType[iType]?.[ingredientName] || [];
        }

        if (startDate && endDate) {
          // Cas des plages, sourceItems contient tous les items de la plage pour le type
          const result = sourceItems.filter((item) => item.ingredient === ingredientName);
          return result;
        } else {
          // Cas des totaux généraux, sourceItems est déjà la liste des détails de l'ingrédient spécifique
          return sourceItems;
        }
      },

      // Méthodes déléguées au module externe
      normalizeIngredientQuantity,
      formatNormalizedQuantity,
      round2Decimals: roundQuantityByUnit,
      formatDetailQuantity,
      formatTypeShort,

      filteredIngredientsRange(iType, start, end) {
        const key = `${iType}_${start}_${end}`;
        if (this._cachedRawRangeDetails[key]) {
          return this._cachedRawRangeDetails[key];
        }

        const sections = Array.isArray(this.ingByTypeList) ? this.ingByTypeList : [];
        const section = sections.find((s) => s.type === iType);
        const ingredients = section && Array.isArray(section.items) ? section.items : [];

        if (!Array.isArray(ingredients)) {
          console.warn("[ingredients] expected array for type", iType);
          return [];
        }

        const startDate = new Date(start);
        const endDate = new Date(end);
        endDate.setHours(23, 59, 59, 999);

        const filtered = ingredients.filter((i) => {
          const itemDate = new Date(i.dateTimeService);
          return itemDate >= startDate && itemDate <= endDate;
        });

        const sortedFiltered = filtered.sort(
          (a, b) => new Date(a.dateTimeService) - new Date(b.dateTimeService)
        );

        this.ingFraisFiltered = sortedFiltered;
        this._cachedRawRangeDetails[key] = sortedFiltered;
        return sortedFiltered;
      },

      searchFilterRange(totalRange) {
        if (!Array.isArray(totalRange)) return [];
        return totalRange.filter((item) =>
          (item.ingredient || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(this.searchFormat),
        );
      },

      searchFilter(merge_ing_list) {
        const filtered = {};

        for (const [type, ingredients] of Object.entries(merge_ing_list)) {
          filtered[type] = ingredients.filter((ingredient) =>
            (ingredient.ingredient || "")
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
              .includes(this.searchFormat),
          );
        }

        return filtered;
      },

      // --- Modal ingrédient ---
      setupIngredientModal(ingredientName, ingredientType, startDate = null, endDate = null) {
        this.selectedIngredient = ingredientName;
        const isFromRange = startDate && endDate;

        if (isFromRange) {
          this.modalDateStart = startDate;
          this.modalDateEnd = endDate;
        } else {
          this.modalDateStart = this.startDateSelected;
          this.modalDateEnd = this.endDateSelected;
        }

        // Filtrer les ingrédients
        let ingredientDetails;
        if (isFromRange) {
          const filtered = this.filteredIngredientsRange(ingredientType, startDate, endDate);
          ingredientDetails = filtered.filter(ingredient => ingredient.ingredient === ingredientName);
        } else {
          const filteredIngredients = this.filterByDatePicker;
          ingredientDetails = filteredIngredients[ingredientType]
            ? filteredIngredients[ingredientType].filter(ingredient => ingredient.ingredient === ingredientName)
            : [];
        }

        this.ingredientDetails = ingredientDetails.sort((a, b) =>
          new Date(a.dateTimeService) - new Date(b.dateTimeService)
        );

        // Collecter les règles de conversion
        const rules = new Set();
        this.ingredientDetails.forEach(detail => {
          if (detail.hasConversion && detail.conversionRule) {
            rules.add(detail.conversionRule);
          }
        });
        this.ingredientConversionRules = Array.from(rules);

        // Calculer les totaux avec le module externe
        const { standardizedTotal, transparentTotal } = processIngredientDetails(this.ingredientDetails);
        this.ingredientTotalQuantityStandard = standardizedTotal;
        this.ingredientTotalQuantityTransparent = transparentTotal;
      },

      openIngredientModal(ingredientName, ingredientType) {
        this.setupIngredientModal(ingredientName, ingredientType);
      },

      openIngredientModalRange(ingredientName, ingredientType, startDate, endDate) {
        this.setupIngredientModal(ingredientName, ingredientType, startDate, endDate);
      },

      doesTransparentTotalDivergeForRange(ingredientName, iType, startDate, endDate) {
        const details = this.getIngredientIndividualDetails(ingredientName, iType, startDate, endDate);
        return this.doesTransparentTotalDiverge(details);
      },

      getStandardizedIngredientForRange(ingredientName, iType, startDate, endDate) {
        const standardizedData = this.totalRangeStandard(iType, startDate, endDate);
        return standardizedData.find(std => std.ingredient === ingredientName);
      },

      getCachedStandardizedIngredientForRange(ingredientName, iType, startDate, endDate) {
        const cacheKey = `${ingredientName}_${iType}_${startDate}_${endDate}`;

        if (!this._rangeStandardizedCache[cacheKey]) {
          this._rangeStandardizedCache[cacheKey] = this.getStandardizedIngredientForRange(ingredientName, iType, startDate, endDate);
        }

        return this._rangeStandardizedCache[cacheKey];
      },

      clearRangeStandardizedCache() {
        this._rangeStandardizedCache = {};
      },

      switchToTab(tabName) {
        this.activeTab = tabName;
      },

      formatQuantityDisplay(qTotalX, isStandardized = true) {
        if (!Array.isArray(qTotalX) || qTotalX.length === 0) {
          return '<span class="small">non précisé</span>';
        }

        const unitKey = isStandardized ? 'unit' : 'unitTotal';

        return qTotalX.map((quantiteEntry, qIndex) => {
          if (quantiteEntry.qTotal !== null && quantiteEntry[unitKey] !== null) {
            const formattedValue = roundQuantityByUnit(quantiteEntry.qTotal, quantiteEntry[unitKey]);
            const unit = quantiteEntry[unitKey];
            const separator = qIndex < qTotalX.length - 1 ? ' <span class="mx-1">+</span>' : '';
            return `${formattedValue} ${unit}${separator}`;
          } else {
            const separator = qIndex < qTotalX.length - 1 ? ' <span class="mx-1">+</span>' : '';
            return `<span class="small">non précisé</span>${separator}`;
          }
        }).join('');
      },

      formatTypeShort,

      // --- Méthodes pour les listes collaboratives ---
      async createCollaborativeList() {
        if (this.isCreatingList) return;

        this.isCreatingList = true;

        try {
          // Utiliser la fonction du client Appwrite
          const eventId = this.getEventId();
          await window.AppwriteClient.createCollaborativeListFromEvent(eventId);
          
        } catch (error) {
          console.error('Erreur lors de la création de la liste collaborative:', error);
          alert('Erreur lors de la création de la liste collaborative. Veuillez réessayer.');
        } finally {
          this.isCreatingList = false;
        }
      },

      viewExistingCollaborativeList() {
        const eventId = this.getEventId();
        this.redirectToCollaborativeList(eventId);
      },

      async checkExistingListOnInit() {
        try {
          const eventId = this.getEventId();
          this.existingListExists = await window.AppwriteClient.checkExistingCollaborativeList(eventId);
          console.log(`[Vue App] Liste existante pour l'événement ${eventId}: ${this.existingListExists}`);
        } catch (error) {
          console.error('Erreur lors de la vérification de la liste existante:', error);
          this.existingListExists = false;
        }
      },

      getEventId() {
      // Extraire l'ID de l'événement depuis l'URL ou les données de la page
      const pathname = window.location.pathname;
      const eventMatch = pathname.match(/\/evenements\/([^\/]+)/);
      return eventMatch ? eventMatch[1] : `event_${Date.now()}`;
      },

      async checkExistingList(eventId) {
        // Utiliser la fonction du client Appwrite
        return await window.AppwriteClient.checkExistingCollaborativeList(eventId);
      },

      async createNewCollaborativeList(eventId) {
      // Transformer les données actuelles en format Appwrite
      const transformedData = this.transformDataForAppwrite();

      // TODO: Implémenter la création avec l'API Appwrite
      // Pour l'instant, retourner un ID factice
      return {
        $id: `list_${eventId}_${Date.now()}`,
        eventId: eventId,
        name: `Liste collaborative - ${document.title}`,
        ingredients: transformedData
      };
      },

      transformDataForAppwrite() {
      const transformedIngredients = [];

      // Parcourir tous les types d'ingrédients
      this.ingByTypeList.forEach(typeGroup => {
        if (!typeGroup.items) return;

        typeGroup.items.forEach(item => {
          // Créer les recipeOccurrences pour chaque ingrédient
          const recipeOccurrence = {
            recipeName: item.recette || 'Recette inconnue',
            quantity: item.quantite,
            unit: item.unit,
            dateService: item.dateService,
            horaire: item.horaire,
            typePlat: item.typePlat,
            assiettes: item.assiettes
          };

          // Chercher si cet ingrédient existe déjà dans la liste transformée
          let existingIngredient = transformedIngredients.find(
            ing => ing.ingredientName === item.ingredient && ing.ingType === typeGroup.type
          );

          if (existingIngredient) {
            // Ajouter cette occurrence à l'ingrédient existant
            existingIngredient.originalData.recipeOccurrences.push(recipeOccurrence);
          } else {
            // Créer un nouvel ingrédient
            transformedIngredients.push({
              ingredientName: item.ingredient,
              ingType: typeGroup.type,
              isModified: false,
              isMerged: false,
              originalData: {
                recipeOccurrences: [recipeOccurrence]
              },
              trackingData: {
                purchases: [],
                stock: { effective: [] },
                status: { ok: false },
                mergedWith: []
              }
            });
          }
        });
      });

      return transformedIngredients;
      },

      redirectToCollaborativeList(listId) {
        // Construire l'URL vers l'application collaborative
        const baseUrl = window.location.origin;
        const collaborativeUrl = `${baseUrl}/app/ingredients-collaborative/list/${listId}`;

        // Rediriger vers l'application collaborative
        window.location.href = collaborativeUrl;
      }
    }
  });
}
