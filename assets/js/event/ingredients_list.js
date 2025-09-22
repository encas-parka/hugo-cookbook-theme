/**
 * app.js
 * Exporte une fabrique `createEventApp(initialData)` qui instancie l’app Vue
 * en lisant les données initiales depuis un objet (ex: window.__EVENT_PAGE_DATA__).
 */

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

        // Gestion des listes collaboratives
        isCreatingList: false,
        collaborativeListId: null,
        appwriteConfig: {
          endpoint: 'https://cloud.appwrite.io/v1',
          projectId: '', // À configurer
          databaseId: '689d15b10003a5a13636'
        },

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
        totalRangeWithDetailResults: {}, // Cache for range totals
        _cachedRawRangeDetails: {}, //  Cache for raw ingredient details by range (key: iType_start_end)
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

        // Propriété calculée pour les types affichés
        displayedTypes: [],

        // Système d'onglets
        activeTab: 'normal', // 'normal' ou 'byRange'

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

        // Cache pour les performances
        _rangeStandardizedCache: {},
      };
    },

    created() {
      // Nothing specific for now (placeholder for future lifecycle migrations)
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

      // Initialiser les dates sélectionnées

      // Initialisation bornes des dates si disponibles
      if (Array.isArray(this.datesRepas) && this.datesRepas.length > 0) {
        this.startDateSelected = this.startDate;
        this.endDateSelected = this.endDate;
        this.endDateAllowed = this.endDate;
      }

      // Initialiser le flatpickr range AVEC bornes
      this.flatpickrInstance = flatpickr("#daterange", {
        mode: "range",
        dateFormat: "Y-m-d",
        inline: true,
        position: "auto center",
        locale: {
          firstDayOfWeek: 1,
        },
        // Configuration des bornes
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

      // Focus the search input when the component is mounted, especially for >=lg screens
      // where the offcanvas is always visible (not a true offcanvas behavior).
      this.$nextTick(() => {
        const searchInput = document.querySelector(
          'input[v-model="searchInput"]',
        );
        if (searchInput) {
          searchInput.focus();
        }
      });
    },

    computed: {
      // Fichier: hugo-cookbook-theme/assets/js/event/app.js
      // À AJOUTER dans la section computed: { ... }

      computeTotalStandardDP() {
        const ingFiltered = this.filterByDatePicker;
        const ingredientTotals = {}; // Un objet temporaire pour agréger par nom d'ingrédient

        // Étape 1: Agréger les quantités standardisées pour chaque ingrédient
        for (const type in ingFiltered) {
          if (!Object.prototype.hasOwnProperty.call(ingFiltered, type)) continue;

          ingFiltered[type].forEach((item) => {
            const ingredientName = item.ingredient;

            if (!ingredientTotals[ingredientName]) {
              ingredientTotals[ingredientName] = {
                ingredient: ingredientName,
                iType: type, // On garde le type pour le regroupement final
                // On n'a pas besoin de totalAssiettes/Recettes ici, car on les lira de l'autre fonction
                _normalizedQuantities: {
                  weight: 0, // En grammes
                  volume: 0, // En millilitres
                  other: new Map(), // Stocke les totaux par unité pour les autres types
                },
              };
            }

            const currentIngredient = ingredientTotals[ingredientName];

            // Utiliser les quantités standardisées si disponibles, sinon les quantités originales
            let quantity, unit, displayUnitCategory;

            if (item.quantiteEq && item.unitEq) {
              // Utiliser les quantités standardisées
              quantity = parseFloat(item.quantiteEq) || 0;
              unit = item.unitEq;
            } else {
              // Utiliser les quantités originales et les normaliser
              const normalized = this.normalizeIngredientQuantity(item);
              quantity = normalized.normalizedQuantity;
              unit = normalized.baseUnit;
              displayUnitCategory = normalized.displayUnitCategory;
            }

            // Normaliser en unités de base pour l'addition
            const unitLower = unit.toLowerCase();
            if (unitLower === 'kg') {
              currentIngredient._normalizedQuantities.weight += quantity * 1000; // Convertir en grammes
            } else if (unitLower === 'gr.') {
              currentIngredient._normalizedQuantities.weight += quantity;
            } else if (unitLower === 'l.') {
              currentIngredient._normalizedQuantities.volume += quantity * 1000; // Convertir en millilitres
            } else if (unitLower === 'ml') {
              currentIngredient._normalizedQuantities.volume += quantity;
            } else {
              // Pour les autres unités, conserver l'unité originale
              const currentOtherTotal = currentIngredient._normalizedQuantities.other.get(unit) || 0;
              currentIngredient._normalizedQuantities.other.set(unit, currentOtherTotal + quantity);
            }
          });
        }

        // Étape 2: Formater les totaux et les regrouper par type
        const finalGroupedByType = {};
        for (const ingredientName in ingredientTotals) {
          const item = ingredientTotals[ingredientName];
          const formattedQuantities = [];

          // Formater les poids
          if (item._normalizedQuantities.weight > 0) {
            const formatted = this.formatNormalizedQuantity(item._normalizedQuantities.weight, 'weight');
            formattedQuantities.push({ qTotal: formatted.value, unit: formatted.unit });
          }

          // Formater les volumes
          if (item._normalizedQuantities.volume > 0) {
            const formatted = this.formatNormalizedQuantity(item._normalizedQuantities.volume, 'volume');
            formattedQuantities.push({ qTotal: formatted.value, unit: formatted.unit });
          }

          // Formater les autres unités
          item._normalizedQuantities.other.forEach((total, unit) => {
            formattedQuantities.push({ qTotal: this.round2Decimals(total, unit), unit: unit });
          });

          item.qTotalX = formattedQuantities;
          delete item._normalizedQuantities;

          const type = item.iType;
          if (!finalGroupedByType[type]) {
            finalGroupedByType[type] = {};
          }
          finalGroupedByType[type][ingredientName] = item;
        }

        return finalGroupedByType;
      },

      totalQuantitesStandardDP() {
        // Cette fonction prend le résultat de computeTotalStandardDP et le prépare pour l'affichage
        // (conversion en tableau, tri, et potentiellement filtrage par la recherche)
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

        // On ne masque rien ici, car la visibilité est gérée par totalQuantitesDP
        return finalResult;
      },

      // Computed properties pour les totaux standardisés des tableaux byRanges
      totalRangeStandardized() {
        const standardizedByRange = {};

        if (this.activeTab === 'byRange' && this.rangesDates && this.rangesDates.length > 0) {
          this.rangesDates.forEach(range => {
            const startDate = range[0];
            const endDate = range[range.length - 1];
            const rangeKey = `${startDate}_${endDate}`;

            ['legumesFrais', 'frais', 'animaux'].forEach(type => {
              const filteredIng = this.filteredIngredientsRange(type, startDate, endDate);
              const ingredientTotals = {};

              // Étape 1: Agréger les quantités standardisées pour chaque ingrédient
              filteredIng.forEach(item => {
                const ingredientName = item.ingredient;

                if (!ingredientTotals[ingredientName]) {
                  ingredientTotals[ingredientName] = {
                    ingredient: ingredientName,
                    totalAssiettes: 0,
                    totalRecettes: 0,
                    _normalizedQuantities: {
                      weight: 0, // En grammes
                      volume: 0, // En millilitres
                      other: new Map(), // Stocke les totaux par unité pour les autres types
                    },
                  };
                }

                const currentIngredient = ingredientTotals[ingredientName];
                currentIngredient.totalAssiettes += item.assiettes;
                currentIngredient.totalRecettes += 1;

                // Utiliser les quantités standardisées si disponibles, sinon les quantités originales
                let quantity, unit;
                if (item.quantiteEq && item.unitEq) {
                  quantity = parseFloat(item.quantiteEq) || 0;
                  unit = item.unitEq;
                } else {
                  const normalized = this.normalizeIngredientQuantity(item);
                  quantity = normalized.normalizedQuantity;
                  unit = normalized.baseUnit;
                }

                // Normaliser en unités de base pour l'addition
                const unitLower = unit.toLowerCase();
                if (unitLower === 'kg') {
                  currentIngredient._normalizedQuantities.weight += quantity * 1000;
                } else if (unitLower === 'gr.') {
                  currentIngredient._normalizedQuantities.weight += quantity;
                } else if (unitLower === 'l.') {
                  currentIngredient._normalizedQuantities.volume += quantity * 1000;
                } else if (unitLower === 'ml') {
                  currentIngredient._normalizedQuantities.volume += quantity;
                } else {
                  const currentOtherTotal = currentIngredient._normalizedQuantities.other.get(unit) || 0;
                  currentIngredient._normalizedQuantities.other.set(unit, currentOtherTotal + quantity);
                }
              });

              // Étape 2: Formater les totaux
              Object.keys(ingredientTotals).forEach(ingredientName => {
                const item = ingredientTotals[ingredientName];
                const formattedQuantities = [];

                // Formater les poids
                if (item._normalizedQuantities.weight > 0) {
                  const formatted = this.formatNormalizedQuantity(item._normalizedQuantities.weight, 'weight');
                  formattedQuantities.push({ qTotal: formatted.value, unit: formatted.unit });
                }

                // Formater les volumes
                if (item._normalizedQuantities.volume > 0) {
                  const formatted = this.formatNormalizedQuantity(item._normalizedQuantities.volume, 'volume');
                  formattedQuantities.push({ qTotal: formatted.value, unit: formatted.unit });
                }

                // Formater les autres unités
                item._normalizedQuantities.other.forEach((total, unit) => {
                  formattedQuantities.push({ qTotal: this.round2Decimals(total, unit), unit: unit });
                });

                item.qTotalX = formattedQuantities;
                delete item._normalizedQuantities;
              });

              // Stocker le résultat
              const key = `${type}_${rangeKey}`;
              standardizedByRange[key] = Object.values(ingredientTotals)
                .sort((a, b) => a.ingredient.localeCompare(b.ingredient));
            });
          });
        }

        return standardizedByRange;
      },




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

        const sections = Array.isArray(this.ingByTypeList)
          ? this.ingByTypeList
          : [];
        sections.forEach((section) => {
          const items = Array.isArray(section.items) ? section.items : [];
          if (
            this.startDateSelected === this.startDate &&
            this.endDateSelected === this.endDate
          ) {
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

      // Propriété calculée pour synchroniser la navigation avec les tableaux affichés
      computedTypesForNavigation() {
        // Types de base qui peuvent être affichés
        const baseTypes = [
          "sucres",
          "sec",
          "lof",
          "legumesFrais",
          "legumesNonFrais",
          "frais",
          "epices",
          "autres",
          "animaux",
          "absent",
        ];

        // Filtrer les types qui ont des données et sont donc affichés
        return baseTypes.filter((type) => {
          // Vérifier si le type a des données (comme dans le template)
          return (
            this.totalQuantitesDP[type] &&
            Object.keys(this.totalQuantitesDP[type]).length > 0
          );
        });
      },

      // Propriété calculée pour les liens de navigation des tableaux byRange
      computedRangeLinksForNavigation() {
        // Vérifier si les produits frais par plage doivent être affichés
        if (!this.showFreshProductsByRange || !this.rangesDates || this.rangesDates.length === 0) {
          return [];
        }

        const rangeLinks = [];

        // Types de produits frais à vérifier
        const freshTypes = ["legumesFrais", "frais", "animaux"];

        // Pour chaque type, générer les liens pour chaque plage
        freshTypes.forEach((type) => {
          this.rangesDates.forEach((range) => {
            // Vérifier s'il y a des données pour cette plage
            if (
              this.totalRange(
                type,
                range[0],
                range[range.length - 1],
              ).length > 0
            ) {
              // Créer un ID unique basé sur les dates
              const startDate = new Date(range[0]);
              const endDate = new Date(range[range.length - 1]);
              const id = `${type}ByRange-${startDate.getDate()}${endDate.getDate()}`;

              // Formater les dates pour l'affichage
              const startDateFormatted = startDate.toLocaleDateString(
                "fr-FR",
                { day: "numeric" },
              );
              const endDateFormatted = endDate.toLocaleDateString("fr-FR", {
                day: "numeric",
              });

              rangeLinks.push({
                id: id,
                type: type,
                startDate: range[0],
                endDate: range[range.length - 1],
                label: `${this.formatTypeShort(type)} du ${startDateFormatted} au ${endDateFormatted}`,
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

      //  Prépare les détails d'ingrédients pour un accès rapide par type et par ingrédient
      // C'est une computed property, donc elle est mise en cache par Vue et recalculée uniquement si filterByDatePicker change.
      filteredItemsByIngredientAndType() {
        const detailsMap = {};
        const filteredByDate = this.filterByDatePicker; // Dépendance: filterByDatePicker (c'est une computed, donc déjà efficace)

        for (const type in filteredByDate) {
          if (!Object.prototype.hasOwnProperty.call(filteredByDate, type))
            continue;

          detailsMap[type] = {}; // Map pour les ingrédients dans ce type
          const itemsForType = filteredByDate[type]; // Tableau d'items bruts pour ce type

          itemsForType.forEach((item) => {
            if (!detailsMap[type][item.ingredient]) {
              detailsMap[type][item.ingredient] = [];
            }
            detailsMap[type][item.ingredient].push(item);
          });

          // Trie les détails pour chaque ingrédient par dateService pour un affichage cohérent
          for (const ingredientName in detailsMap[type]) {
            detailsMap[type][ingredientName].sort(
              (a, b) =>
                new Date(a.dateTimeService) - new Date(b.dateTimeService),
            );
          }
        }
        return detailsMap;
      },

      // Calcul des totaux par type pour les ingrédients filtrés par période
      computeTotalDP() {
        const ingFiltered = this.filterByDatePicker;
        const ingredientTotals = new Map();

        for (const [type, ingredients] of Object.entries(ingFiltered)) {
          if (!ingredientTotals[type]) {
            ingredientTotals[type] = {};
          }

          ingredients.forEach((i) => {
            let ingredientItem = ingredientTotals[type][i.ingredient];
            if (!ingredientItem) {
              ingredientItem = {
                ingredient: i.ingredient,
                qTotalX: [], // Array to hold formatted quantities { value: number, unit: string }
                totalRecettes: 0,
                totalAssiettes: 0,
                iType: type, // Utiliser le type de la boucle, pas i.ingredientType
                // New: Temporary storage for normalized quantities before formatting
                _normalizedQuantities: {
                  weight: 0, // In grams
                  volume: 0, // In milliliters
                  other: new Map(), // Stores {unit: totalQuantity} for other types
                },
                // Stocker aussi les quantités originales (non standardisées) pour le total transparent
                _originalQuantities: new Map(), // Stores {unit: totalQuantity} for original units
              };
              ingredientTotals[type][i.ingredient] = ingredientItem;
            }

            // Always increment these
            ingredientItem.totalRecettes++;
            ingredientItem.totalAssiettes += i.assiettes;

            // Stocker les quantités originales pour le total transparent
            const originalUnit = i.unit || '';
            const originalQuantity = parseFloat(i.quantite) || 0;
            const currentOriginalTotal = ingredientItem._originalQuantities.get(originalUnit) || 0;
            ingredientItem._originalQuantities.set(originalUnit, currentOriginalTotal + originalQuantity);

            const { normalizedQuantity, baseUnit, displayUnitCategory } =
              this.normalizeIngredientQuantity(i);

            if (
              displayUnitCategory === "weight" ||
              displayUnitCategory === "volume"
            ) {
              ingredientItem._normalizedQuantities[displayUnitCategory] +=
                normalizedQuantity;
            } else {
              // For 'other' units, sum if unit is identical, otherwise keep separate
              const currentOtherTotal =
                ingredientItem._normalizedQuantities.other.get(baseUnit) || 0;
              ingredientItem._normalizedQuantities.other.set(
                baseUnit,
                currentOtherTotal + normalizedQuantity,
              );
            }
          });
        }

        // Now, format the normalized quantities for display
        for (const [type, ingredientsByType] of Object.entries(
          ingredientTotals,
        )) {
          for (const ingredientName in ingredientsByType) {
            const item = ingredientsByType[ingredientName];
            const quantities = [];

            if (item._normalizedQuantities.weight > 0) {
              const { value, unit } = this.formatNormalizedQuantity(
                item._normalizedQuantities.weight,
                "weight",
              );
              quantities.push({
                qTotal: value, // qTotal is now a number
                unit: unit, // unit is now 'Kg' or 'g'
              });
            }
            if (item._normalizedQuantities.volume > 0) {
              const { value, unit } = this.formatNormalizedQuantity(
                item._normalizedQuantities.volume,
                "volume",
              );
              quantities.push({
                qTotal: value, // qTotal is now a number
                unit: unit, // unit is now 'L' or 'ml'
              });
            }
            // For 'other' units, qTotal should already be a number and unit its original unit
            item._normalizedQuantities.other.forEach((qTotal, unit) => {
              quantities.push({ qTotal: qTotal, unit: unit });
            });

            item.qTotalX = quantities;
            delete item._normalizedQuantities; // Clean up temporary data

            // Formatter aussi les quantités originales pour le total transparent
            const originalQuantities = [];
            item._originalQuantities.forEach((qTotal, unit) => {
              originalQuantities.push({ qTotal: this.round2Decimals(qTotal, unit), unitTotal: unit });
            });
            item.qTotalXOriginal = originalQuantities;
            delete item._originalQuantities; // Clean up temporary data
          }
        }

        return ingredientTotals;
      },

      totalQuantitesDP() {
        const ingTotaux = this.computeTotalDP; // Ceci contient déjà les totaux formatés

        let finalResult = {};

        for (const type in ingTotaux) {
          if (Object.prototype.hasOwnProperty.call(ingTotaux, type)) {
            // ingTotaux[type] est un objet { "nomIngredient": { ingredient: "nom", qTotalX: [...], ... } }
            // Nous le convertissons en un tableau pour le tri et l'itération dans le template.
            finalResult[type] = Object.values(ingTotaux[type]).sort((a, b) =>
              a.ingredient.localeCompare(b.ingredient),
            );
          }
        }

        if ((this.debouncedSearchQuery || "").length > 2) {
          finalResult = this.searchFilter(finalResult);
        }

        // Si on est sur l'onglet byRange, cacher ces catégories de l'affichage normal
        if (this.activeTab === 'byRange') {
          if (finalResult.legumesFrais) {
            finalResult.legumesFrais = [];
          }
          if (finalResult.frais) {
            finalResult.frais = [];
          }
          if (finalResult.animaux) {
            finalResult.animaux = [];
          }
        }
        return finalResult;
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

      // Computed property pour savoir si on affiche les ranges
      showRanges() {
        return this.activeTab === 'byRange';
      },

      // Computed property pour la rétrocompatibilité
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

      // splitDateRanges recalculera totalRangeWithDetail via accès paresseux
      splitDateRanges() {
        // trigger dépendances si nécessaire
        this.totalRangeWithDetail;
      },

      // Watcher pour l'onglet actif
      activeTab(newValue) {
        this.clearRangeStandardizedCache();
        if (newValue === 'byRange') {
          // Recalculer les ranges quand on passe sur l'onglet byRange
          this.splitDateRanges;
        }
      },

      // Watchers pour nettoyer le cache quand les données changent
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
        // Fonction générique qui peut accepter soit un item (pour le tableau) soit un tableau de détails (pour le modal)
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

      // --- Datepicker (couplé à flatpickr) ---
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

      // Nouvelle méthode pour obtenir les totaux standardisés d'une plage
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

        // totalRangeArray calcule déjà et formate les totaux.
        // Ce n'est pas censé "fusionner" avec des détails bruts ici, mais fournir les totaux résumés.
        const totalArray = this.totalRangeArray(iType, start, end);
        const result = totalArray.sort((a, b) =>
          a.ingredient.localeCompare(b.ingredient),
        );

        this.totalRangeWithDetailResults[key] = result;
        return result;
      },

      totalRangeArray(iType, start, end) {
        const filteredIng = this.filteredIngredientsRange(iType, start, end);
        const totalByIngredient = {}; // Stores { ingredientName: { _normalizedQuantities: { ... }, totalAssiettes, totalRecettes } }

        filteredIng.forEach((item) => {
          if (!totalByIngredient[item.ingredient]) {
            totalByIngredient[item.ingredient] = {
              ingredient: item.ingredient,
              totalAssiettes: 0,
              totalRecettes: 0,
              _normalizedQuantities: {
                weight: 0, // In grams
                volume: 0, // In milliliters
                other: new Map(), // Stores {unit: totalQuantity} for other types
              },
            };
          }
          const currentTotal = totalByIngredient[item.ingredient];

          currentTotal.totalAssiettes += item.assiettes;
          currentTotal.totalRecettes += 1; // Assuming each item is one recipe instance

          const { normalizedQuantity, baseUnit, displayUnitCategory } =
            this.normalizeIngredientQuantity(item);

          if (
            displayUnitCategory === "weight" ||
            displayUnitCategory === "volume"
          ) {
            currentTotal._normalizedQuantities[displayUnitCategory] +=
              normalizedQuantity;
          } else {
            const existingOtherUnit =
              currentTotal._normalizedQuantities.other.get(baseUnit) || 0;
            currentTotal._normalizedQuantities.other.set(
              baseUnit,
              existingOtherUnit + normalizedQuantity,
            );
          }
        });

        const result = Object.values(totalByIngredient).map((item) => {
          const formattedQuantities = [];
          if (item._normalizedQuantities.weight > 0) {
            const { value, unit } = this.formatNormalizedQuantity(
              item._normalizedQuantities.weight,
              "weight",
            );
            formattedQuantities.push({
              qTotal: value, // qTotal is now a number
              unitTotal: unit, // unitTotal is now 'Kg' or 'g' (keeping unitTotal for consistency with existing template usage for ranges)
            });
          }
          if (item._normalizedQuantities.volume > 0) {
            const { value, unit } = this.formatNormalizedQuantity(
              item._normalizedQuantities.volume,
              "volume",
            );
            formattedQuantities.push({
              qTotal: value, // qTotal is now a number
              unitTotal: unit, // unitTotal is now 'L' or 'ml'
            });
          }
          // For 'other' units, qTotal should already be a number and unit its original unit
          item._normalizedQuantities.other.forEach((qTotal, unit) => {
            formattedQuantities.push({ qTotal: qTotal, unitTotal: unit });
          });

          return {
            ingredient: item.ingredient,
            qTotalX: formattedQuantities, // Naming for consistency with computeTotalDP
            totalAssiettes: item.totalAssiettes,
            totalRecettes: item.totalRecettes,
          };
        });
        return result;
      },

      getIngredientIndividualDetails(
        ingredientName,
        iType,
        startDate = null,
        endDate = null,
      ) {
        let sourceItems;
        if (startDate && endDate) {
          // Pour les plages de dates spécifiques, utiliser le cache de filteredIngredientsRange
          const rangeKey = `${iType}_${startDate}_${endDate}`;
          sourceItems =
            this._cachedRawRangeDetails[rangeKey] ||
            this.filteredIngredientsRange(iType, startDate, endDate);
        } else {
          // Pour les totaux généraux (dépend de startDateSelected/endDateSelected), utiliser la computed property
          sourceItems =
            this.filteredItemsByIngredientAndType[iType]?.[ingredientName] ||
            [];
        }

        if (startDate && endDate) {
          // Cas des plages, sourceItems contient tous les items de la plage pour le type
          return sourceItems.filter(
            (item) => item.ingredient === ingredientName,
          );
        } else {
          // Cas des totaux généraux, sourceItems est déjà la liste des détails de l'ingrédient spécifique
          return sourceItems;
        }
      },

      //  Normalise la quantité d'un ingrédient en une unité de base (gr. ou millil.s) et identifie sa catégorie d'affichage.
      normalizeIngredientQuantity(item) {
        let normalizedQuantity = item.quantite || 0;
        let baseUnit = item.unit || "?";
        let displayUnitCategory = "other"; // Default category

        const unit = (item.unit || "").toLowerCase().trim();
        if (unit === "gr.") {
          displayUnitCategory = "weight";
          baseUnit = "gr."; // Standard base unit for weight
        } else if (unit === "kg") {
          normalizedQuantity *= 1000; // Convert to grams
          displayUnitCategory = "weight";
          baseUnit = "gr.";
        } else if (unit === "ml") {
          displayUnitCategory = "volume";
          baseUnit = "ml"; // Standard base unit for volume
        } else if (unit === "l.") {
          normalizedQuantity *= 1000; // Convert to milliliters
          displayUnitCategory = "volume";
          baseUnit = "ml";
        }
        // For other units (e.g., 'pièce', 'unité'), quantity is used as is, and baseUnit is its original unit
        // and displayUnitCategory remains 'other'.

        return { normalizedQuantity, baseUnit, displayUnitCategory };
      },

      // Formate une quantité totale normalisée pour l'affichage, retournant un objet { value, unit }
      formatNormalizedQuantity(totalQuantity, unitCategory) {
        if (unitCategory === "weight") {
          if (totalQuantity >= 1000) {
            // Retourne la valeur en nombre, et l'unité en 'Kg'
            return {
              value: parseFloat((totalQuantity / 1000).toFixed(2)),
              unit: "Kg",
            };
          } else {
            // Retourne la valeur en nombre entier, et l'unité en 'g'
            return { value: Math.round(totalQuantity), unit: "gr." };
          }
        } else if (unitCategory === "volume") {
          if (totalQuantity >= 1000) {
            // Retourne la valeur en nombre, et l'unité en 'L'
            return {
              value: parseFloat((totalQuantity / 1000).toFixed(2)),
              unit: "l.",
            };
          } else {
            // Retourne la valeur en nombre entier, et l'unité en 'ml'
            return { value: Math.round(totalQuantity), unit: "ml" };
          }
        }
        // Pour les catégories 'other', la quantité est déjà dans son unité native.
        // Cette branche ne devrait pas être atteinte si les unités 'other' sont gérées directement
        // dans les boucles forEach de computeTotalDP et totalRangeArray, mais comme fallback :
        return { value: totalQuantity, unit: "unité" }; // Unité générique par défaut
      },

      formatDetailQuantity(detailItem) {
        // Normalise la quantité pour pouvoir la traiter (ex: g -> kg ou ml -> L)
        const { normalizedQuantity, baseUnit, displayUnitCategory } =
          this.normalizeIngredientQuantity(detailItem);

        // Si c'est une unité convertible (poids ou volume), utilise la logique de formatage consolidée
        if (
          displayUnitCategory === "weight" ||
          displayUnitCategory === "volume"
        ) {
          const { value, unit } = this.formatNormalizedQuantity(
            normalizedQuantity,
            displayUnitCategory,
          );
          return `${value} ${unit}`;
        } else {
          // Pour les autres unités, affiche la quantité originale (parsée en nombre et arrondie) et son unité
          const val = parseFloat(detailItem.quantite) || 0;
          const unit = detailItem.unit || "";
          return `${this.round2Decimals(val, unit)} ${unit}`;
        }
      },
      // computeTotalRange(filteredIng) {
      //   const totalArray = [];

      //   filteredIng.forEach((item) => {
      //     const converted = this.convertUnit({ ...item });

      //     const { ingredient, quantite, unit, assiettes } = converted;

      //     if (!totalArray[ingredient]) {
      //       totalArray[ingredient] = [];
      //     }

      //     const existingItem = totalArray[ingredient].find((it) => it.unitTotal === unit);
      //     if (existingItem) {
      //       existingItem.qTotal += quantite !== 0 ? quantite : 1;
      //       existingItem.totalAssiettes += assiettes;
      //       existingItem.totalRecettes += 1;
      //     } else {
      //       totalArray[ingredient].push({
      //         unitTotal: unit,
      //         qTotal: quantite !== 0 ? quantite : 1,
      //         totalAssiettes: assiettes,
      //         totalRecettes: 1,
      //       });
      //     }
      //   });

      //   return totalArray;
      // },

      // optimisée pour mettre en cache les détails bruts filtrés par plage
      filteredIngredientsRange(iType, start, end) {
        const key = `${iType}_${start}_${end}`;
        if (this._cachedRawRangeDetails[key]) {
          return this._cachedRawRangeDetails[key];
        }

        const sections = Array.isArray(this.ingByTypeList)
          ? this.ingByTypeList
          : [];
        const section = sections.find((s) => s.type === iType);
        const ingredients =
          section && Array.isArray(section.items) ? section.items : [];
        if (!Array.isArray(ingredients)) {
          console.warn("[ingredients] expected array for type", iType);
          return [];
        }

        const startDate = new Date(start);
        const endDate = new Date(end);
        // Inclure la fin de la journée de fin
        endDate.setHours(23, 59, 59, 999);

        const filtered = ingredients.filter((i) => {
          const itemDate = new Date(i.dateTimeService);
          return itemDate >= startDate && itemDate <= endDate;
        });

        // Optionnel: trier ici si les détails doivent toujours être triés par date
        const sortedFiltered = filtered.sort(
          (a, b) => new Date(a.dateTimeService) - new Date(b.dateTimeService),
        );

        this.ingFraisFiltered = sortedFiltered; // Conserver pour d'autres usages si nécessaire
        this._cachedRawRangeDetails[key] = sortedFiltered; // Mettre en cache le résultat
        return sortedFiltered;
      },


      round2Decimals(x, unit = '') {
        const num = parseFloat(x);
        if (isNaN(num)) {
          return x; // Retourne la valeur originale si elle n'est pas un nombre valide
        }

        // Conserver 2 décimales pour les unités de poids et volume (insensible à la casse)
        const unitLower = unit.toLowerCase().trim();
        if (unitLower === 'kg' || unitLower === 'l.' || unitLower === 'l') {
          return Math.round(num * 100) / 100;
        } else if (unitLower === 'gr.' || unitLower === 'ml') {
          return Math.round(num); // Arrondi à l'unité pour les grammes et millilitres
        } else {
          return Math.round(num * 10) / 10; // Arrondi à une décimal pour les autres (unité, c. à soupe...)
        }
      },

      // Fonction pour consolider les unités similaires (ex: 1.55 l. + 1 l. → 2.55 l.)
      consolidateUnits(quantityArray) {
        const unitGroups = {};

        quantityArray.forEach(item => {
          const unit = item.unit || item.unitTotal || '';
          if (!unitGroups[unit]) {
            unitGroups[unit] = 0;
          }
          unitGroups[unit] += item.qTotal || item.qTotal || 0;
        });

        return Object.entries(unitGroups).map(([unit, total]) => ({
          unit: unit,
          unitTotal: unit,
          qTotal: total
        }));
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

      // --- Modal ingrédient (détails et totaux) ---
    setupIngredientModal(ingredientName, ingredientType, startDate = null, endDate = null) {
        this.selectedIngredient = ingredientName;

        // Stocker le contexte pour savoir si on vient d'une plage ou de l'affichage normal
        const isFromRange = startDate && endDate;

        // Définir la période (spécifique ou active)
        if (isFromRange) {
          this.modalDateStart = startDate;
          this.modalDateEnd = endDate;
        } else {
          this.modalDateStart = this.startDateSelected;
          this.modalDateEnd = this.endDateSelected;
        }

        // Filtrer les ingrédients pour celui sélectionné
        let ingredientDetails;
        if (isFromRange) {
          // Cas des plages de dates spécifiques (onglet byRange)
          const filtered = this.filteredIngredientsRange(ingredientType, startDate, endDate);
          ingredientDetails = filtered.filter(
            ingredient => ingredient.ingredient === ingredientName
          );
        } else {
          // Cas des totaux généraux (onglet normal)
          const filteredIngredients = this.filterByDatePicker;
          ingredientDetails = filteredIngredients[ingredientType]
            ? filteredIngredients[ingredientType].filter(
                ingredient => ingredient.ingredient === ingredientName
              )
            : [];
        }

        // Trier par date et définir les détails
        this.ingredientDetails = ingredientDetails.sort((a, b) =>
          new Date(a.dateTimeService) - new Date(b.dateTimeService)
        );

        // Collecter les règles de conversion à partir des données pré-calculées par Hugo
        const rules = new Set();
        this.ingredientDetails.forEach(detail => {
          // Les données de conversion sont déjà calculées par Hugo dans chaque détail
          if (detail.hasConversion && detail.conversionRule) {
            rules.add(detail.conversionRule);
          }
        });
        this.ingredientConversionRules = Array.from(rules);

        // Calculer le total pour cet ingrédient avec le contexte approprié
        this.calculateIngredientTotal(isFromRange, ingredientType, startDate, endDate);
      },

      openIngredientModal(ingredientName, ingredientType) {
        this.setupIngredientModal(ingredientName, ingredientType);
      },

      openIngredientModalRange(ingredientName, ingredientType, startDate, endDate) {
        this.setupIngredientModal(ingredientName, ingredientType, startDate, endDate);
      },


      calculateIngredientTotal(isFromRange = false, ingredientType = null, startDate = null, endDate = null) {
        // --- Calcul du total standardisé (même logique pour normal et byRange, basée sur ingredientDetails) ---
        const normalizedTotals = {
          weight: 0, // En grammes
          volume: 0, // En millilitres
          other: new Map(),
        };

        this.ingredientDetails.forEach((detail, index) => {
          // Utiliser les équivalences quand elles sont disponibles (même logique que les tableaux)
          let quantity, unit;

          if (detail.quantiteEq && detail.unitEq) {
            // Utiliser les quantités standardisées
            quantity = parseFloat(detail.quantiteEq) || 0;
            unit = detail.unitEq;
          } else {
            // Utiliser les quantités originales et les normaliser
            const normalized = this.normalizeIngredientQuantity(detail);
            quantity = normalized.normalizedQuantity;
            unit = normalized.baseUnit;
          }

          if (quantity <= 0) {
            return;
          }

          // Normaliser en unités de base pour consolider
          const unitLower = unit.toLowerCase().trim();
          if (unitLower === 'gr.' || unitLower === 'g') {
            normalizedTotals.weight += quantity;
          } else if (unitLower === 'kg') {
            normalizedTotals.weight += quantity * 1000; // Convertir en grammes
          } else if (unitLower === 'ml') {
            normalizedTotals.volume += quantity;
          } else if (unitLower === 'l.' || unitLower === 'l') {
            normalizedTotals.volume += quantity * 1000; // Convertir en millilitres
          } else {
            // Pour les autres unités, les additionner par unité identique
            const currentOtherTotal = normalizedTotals.other.get(unit) || 0;
            normalizedTotals.other.set(unit, currentOtherTotal + quantity);
          }
        });

        // Formatage pour l'affichage - consolider en une seule entrée par type
        const formattedStandard = [];
        if (normalizedTotals.weight > 0) {
          const formatted = this.formatNormalizedQuantity(normalizedTotals.weight, 'weight');
          formattedStandard.push({ qTotal: formatted.value, unit: formatted.unit });
        }
        if (normalizedTotals.volume > 0) {
          const formatted = this.formatNormalizedQuantity(normalizedTotals.volume, 'volume');
          formattedStandard.push({ qTotal: formatted.value, unit: formatted.unit });
        }
        normalizedTotals.other.forEach((qTotal, unit) => {
          formattedStandard.push({ qTotal: this.round2Decimals(qTotal, unit), unit: unit });
        });
        this.ingredientTotalQuantityStandard = formattedStandard;

        // --- Calcul du total transparent (basé sur quantite/unit bruts) ---
        // Consolider les unités similaires pour éviter "4.75 l.+8 l"
        const transparentTotals = {
          weight: 0,
          volume: 0,
          other: new Map(),
        };

        this.ingredientDetails.forEach(detail => {
          const unit = detail.unit || '?';
          const quantity = parseFloat(detail.quantite) || 0;
          if (quantity <= 0) return;

          const unitLower = unit.toLowerCase().trim();
          if (unitLower === 'gr.' || unitLower === 'g') {
            transparentTotals.weight += quantity;
          } else if (unitLower === 'kg') {
            transparentTotals.weight += quantity * 1000;
          } else if (unitLower === 'ml') {
            transparentTotals.volume += quantity;
          } else if (unitLower === 'l.' || unitLower === 'l') {
            transparentTotals.volume += quantity * 1000;
          } else {
            const currentTotal = transparentTotals.other.get(unit) || 0;
            transparentTotals.other.set(unit, currentTotal + quantity);
          }
        });

        const formattedTransparent = [];
        if (transparentTotals.weight > 0) {
          const formatted = this.formatNormalizedQuantity(transparentTotals.weight, 'weight');
          formattedTransparent.push({ qTotal: formatted.value, unit: formatted.unit });
        }
        if (transparentTotals.volume > 0) {
          const formatted = this.formatNormalizedQuantity(transparentTotals.volume, 'volume');
          formattedTransparent.push({ qTotal: formatted.value, unit: formatted.unit });
        }
        transparentTotals.other.forEach((qTotal, unit) => {
          formattedTransparent.push({ qTotal: this.round2Decimals(qTotal, unit), unit: unit });
        });
        this.ingredientTotalQuantityTransparent = formattedTransparent;
      },

      // Méthode pour vérifier si le total transparent diverge pour les tableaux byRange
      doesTransparentTotalDivergeForRange(ingredientName, iType, startDate, endDate) {
        const details = this.getIngredientIndividualDetails(ingredientName, iType, startDate, endDate);
        return this.doesTransparentTotalDiverge(details);
      },

      // Méthode utilitaire pour obtenir l'ingrédient standardisé d'une plage
      getStandardizedIngredientForRange(ingredientName, iType, startDate, endDate) {
        const standardizedData = this.totalRangeStandard(iType, startDate, endDate);
        return standardizedData.find(std => std.ingredient === ingredientName);
      },

      // Cache pour les ingrédients standardisés par plage (évite les recalculs dans le template)

      // Méthode optimisée pour obtenir l'ingrédient standardisé avec cache
      getCachedStandardizedIngredientForRange(ingredientName, iType, startDate, endDate) {
        const cacheKey = `${ingredientName}_${iType}_${startDate}_${endDate}`;

        if (!this._rangeStandardizedCache[cacheKey]) {
          this._rangeStandardizedCache[cacheKey] = this.getStandardizedIngredientForRange(ingredientName, iType, startDate, endDate);
        }

        return this._rangeStandardizedCache[cacheKey];
      },

      // Méthode pour nettoyer le cache (appelée quand les données changent)
      clearRangeStandardizedCache() {
        this._rangeStandardizedCache = {};
      },

      // Méthodes pour gérer les onglets
      switchToTab(tabName) {
        this.activeTab = tabName;
      },

      // Fonction utilitaire pour standardiser le formatage des quantités
      formatQuantityDisplay(qTotalX, isStandardized = true) {
        if (!Array.isArray(qTotalX) || qTotalX.length === 0) {
          return '<span class="small">non précisé</span>';
        }

        const unitKey = isStandardized ? 'unit' : 'unitTotal';

        return qTotalX.map((quantiteEntry, qIndex) => {
          if (quantiteEntry.qTotal !== null && quantiteEntry[unitKey] !== null) {
            const formattedValue = this.round2Decimals(quantiteEntry.qTotal, quantiteEntry[unitKey]);
            const unit = quantiteEntry[unitKey];
            const separator = qIndex < qTotalX.length - 1 ? ' <span class="mx-1">+</span>' : '';
            return `${formattedValue} ${unit}${separator}`;
          } else {
            const separator = qIndex < qTotalX.length - 1 ? ' <span class="mx-1">+</span>' : '';
            return `<span class="small">non précisé</span>${separator}`;
          }
        }).join('');
      },



      formatTypeShort(type) {
        switch (type) {
          case "frais":
            return "Produits Frais";
          case "legumesFrais":
            return "Fruits et Légumes Frais";
          case "legumesNonFrais":
            return "Fruits et Légumes Conserve/sec";
          case "lof":
            return "LOF";
          case "sucres":
            return "Sucrés";
          case "epices":
            return "Assaisonnements";
          case "sec":
            return "Produits Secs";
          case "animaux":
            return "Viandes et Poissons";
          case "autres":
            return "Autres";
          default:
            return type;
        }
      },

      // --- Méthodes pour les listes collaboratives ---
      async createCollaborativeList() {
        if (this.isCreatingList) return;
        
        this.isCreatingList = true;
        
        try {
          // Vérifier si une liste existe déjà pour cet événement
          const eventId = this.getEventId();
          const existingList = await this.checkExistingList(eventId);
          
          if (existingList) {
            // Rediriger vers la liste existante
            this.redirectToCollaborativeList(existingList.$id);
            return;
          }
          
          // Créer une nouvelle liste
          const listData = await this.createNewCollaborativeList(eventId);
          this.redirectToCollaborativeList(listData.$id);
          
        } catch (error) {
          console.error('Erreur lors de la création de la liste collaborative:', error);
          alert('Erreur lors de la création de la liste collaborative. Veuillez réessayer.');
        } finally {
          this.isCreatingList = false;
        }
      },

      getEventId() {
        // Extraire l'ID de l'événement depuis l'URL ou les données de la page
        const pathname = window.location.pathname;
        const eventMatch = pathname.match(/\/evenements\/([^\/]+)/);
        return eventMatch ? eventMatch[1] : `event_${Date.now()}`;
      },

      async checkExistingList(eventId) {
        // TODO: Implémenter la vérification avec l'API Appwrite
        // Pour l'instant, retourner null (pas de liste existante)
        return null;
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
        const collaborativeUrl = `${baseUrl}/app/ingredients-collaborative/demo/`;
        
        // Rediriger vers l'application collaborative
        window.location.href = collaborativeUrl;
      },
    },
  });
}
