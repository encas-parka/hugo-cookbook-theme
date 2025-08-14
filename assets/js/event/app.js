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

      const hasIngredients = Array.isArray(this.ingByTypeList) &&
                               this.ingByTypeList.length > 0 &&
                               this.ingByTypeList.some(group => group.items && group.items.length > 0);

        if (!hasIngredients) {
          console.warn("Aucune donnée d'ingrédients trouvée via ingByTypeList");
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

      this.isLoading = false;

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

      //  Prépare les détails d'ingrédients pour un accès rapide par type et par ingrédient
      // C'est une computed property, donc elle est mise en cache par Vue et recalculée uniquement si filterByDatePicker change.
      filteredItemsByIngredientAndType() {
        const detailsMap = {};
        const filteredByDate = this.filterByDatePicker; // Dépendance: filterByDatePicker (c'est une computed, donc déjà efficace)

        for (const type in filteredByDate) {
          if (!Object.prototype.hasOwnProperty.call(filteredByDate, type)) continue;

          detailsMap[type] = {}; // Map pour les ingrédients dans ce type
          const itemsForType = filteredByDate[type]; // Tableau d'items bruts pour ce type

          itemsForType.forEach(item => {
            if (!detailsMap[type][item.ingredient]) {
              detailsMap[type][item.ingredient] = [];
            }
            detailsMap[type][item.ingredient].push(item);
          });

          // Trie les détails pour chaque ingrédient par dateService pour un affichage cohérent
          for (const ingredientName in detailsMap[type]) {
            detailsMap[type][ingredientName].sort((a, b) => new Date(a.dateTimeService) - new Date(b.dateTimeService));
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
                    iType: i.ingredientType,
                    // New: Temporary storage for normalized quantities before formatting
                    _normalizedQuantities: {
                      weight: 0, // In grams
                      volume: 0, // In milliliters
                      other: new Map(), // Stores {unit: totalQuantity} for other types
                    }
                  };
                  ingredientTotals[type][i.ingredient] = ingredientItem;
                }

                // Always increment these
                ingredientItem.totalRecettes++;
                ingredientItem.totalAssiettes += i.assiettes;

                const { normalizedQuantity, baseUnit, displayUnitCategory } = this.normalizeIngredientQuantity(i);

                if (displayUnitCategory === 'weight' || displayUnitCategory === 'volume') {
                    ingredientItem._normalizedQuantities[displayUnitCategory] += normalizedQuantity;
                } else {
                    // For 'other' units, sum if unit is identical, otherwise keep separate
                    const currentOtherTotal = ingredientItem._normalizedQuantities.other.get(baseUnit) || 0;
                    ingredientItem._normalizedQuantities.other.set(baseUnit, currentOtherTotal + normalizedQuantity);
                }
              });
            }

            // Now, format the normalized quantities for display
            for (const [type, ingredientsByType] of Object.entries(ingredientTotals)) {
              for (const ingredientName in ingredientsByType) {
                const item = ingredientsByType[ingredientName];
                const quantities = [];

                if (item._normalizedQuantities.weight > 0) {
                  const { value, unit } = this.formatNormalizedQuantity(item._normalizedQuantities.weight, 'weight');
                  quantities.push({
                    qTotal: value, // qTotal is now a number
                    unit: unit // unit is now 'Kg' or 'g'
                  });
                }
                if (item._normalizedQuantities.volume > 0) {
                  const { value, unit } = this.formatNormalizedQuantity(item._normalizedQuantities.volume, 'volume');
                  quantities.push({
                    qTotal: value, // qTotal is now a number
                    unit: unit // unit is now 'L' or 'ml'
                  });
                }
                // For 'other' units, qTotal should already be a number and unit its original unit
                item._normalizedQuantities.other.forEach((qTotal, unit) => {
                    quantities.push({ qTotal: qTotal, unit: unit });
                });

                item.qTotalX = quantities;
                delete item._normalizedQuantities; // Clean up temporary data
              }
            }

            return ingredientTotals;
          },


          totalQuantitesDP() {
                const ingTotaux = this.computeTotalDP; // Ceci contient déjà les totaux formatés

                const finalResult = {};

                for (const type in ingTotaux) {
                  if (Object.prototype.hasOwnProperty.call(ingTotaux, type)) {
                    // ingTotaux[type] est un objet { "nomIngredient": { ingredient: "nom", qTotalX: [...], ... } }
                    // Nous le convertissons en un tableau pour le tri et l'itération dans le template.
                    finalResult[type] = Object.values(ingTotaux[type])
                      .sort((a, b) => a.ingredient.localeCompare(b.ingredient));
                  }
                }

                if ((this.debouncedSearchQuery || '').length > 2) {
                  return this.searchFilter(finalResult);
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
        const base = this.totalRangeWithDetail(iType, start, end);
              return (this.debouncedSearchQuery || '').length > 2
                ? this.searchFilterRange(base)
                : base;
      },

      totalRangeWithDetail(iType, start, end) {
        const key = `${iType}_${start}_${end}`;
               if (this.totalRangeWithDetailResults[key]) {
                 return this.totalRangeWithDetailResults[key];
               }

               // totalRangeArray calcule déjà et formate les totaux.
               // Ce n'est pas censé "fusionner" avec des détails bruts ici, mais fournir les totaux résumés.
               const totalArray = this.totalRangeArray(iType, start, end);
               const result = totalArray.sort((a, b) => a.ingredient.localeCompare(b.ingredient));

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
                    }
                  };
                }
                const currentTotal = totalByIngredient[item.ingredient];

                currentTotal.totalAssiettes += item.assiettes;
                currentTotal.totalRecettes += 1; // Assuming each item is one recipe instance

                const { normalizedQuantity, baseUnit, displayUnitCategory } = this.normalizeIngredientQuantity(item);

                if (displayUnitCategory === 'weight' || displayUnitCategory === 'volume') {
                  currentTotal._normalizedQuantities[displayUnitCategory] += normalizedQuantity;
                } else {
                  const existingOtherUnit = currentTotal._normalizedQuantities.other.get(baseUnit) || 0;
                  currentTotal._normalizedQuantities.other.set(baseUnit, existingOtherUnit + normalizedQuantity);
                }
              });

              const result = Object.values(totalByIngredient).map(item => {
                       const formattedQuantities = [];
                       if (item._normalizedQuantities.weight > 0) {
                         const { value, unit } = this.formatNormalizedQuantity(item._normalizedQuantities.weight, 'weight');
                         formattedQuantities.push({
                           qTotal: value, // qTotal is now a number
                           unitTotal: unit, // unitTotal is now 'Kg' or 'g' (keeping unitTotal for consistency with existing template usage for ranges)
                         });
                       }
                       if (item._normalizedQuantities.volume > 0) {
                         const { value, unit } = this.formatNormalizedQuantity(item._normalizedQuantities.volume, 'volume');
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

          getIngredientIndividualDetails(ingredientName, iType, startDate = null, endDate = null) {
                  let sourceItems;
                  if (startDate && endDate) {
                    // Pour les plages de dates spécifiques, utiliser le cache de filteredIngredientsRange
                    const rangeKey = `${iType}_${startDate}_${endDate}`;
                    sourceItems = this._cachedRawRangeDetails[rangeKey] || this.filteredIngredientsRange(iType, startDate, endDate);
                  } else {
                    // Pour les totaux généraux (dépend de startDateSelected/endDateSelected), utiliser la computed property
                    sourceItems = this.filteredItemsByIngredientAndType[iType]?.[ingredientName] || [];
                  }

                  // Si la sourceItems est déjà triée par filteredIngredientsRange ou filteredItemsByIngredientAndType,
                  // nous n'avons pas besoin de trier à nouveau ici.
                  // Seul le filtrage par ingredientName est nécessaire si sourceItems contient tous les ingredients du type.
                  // Mais puisque filteredItemsByIngredientAndType est déjà pré-filtré par ingrédient, c'est un simple retour.
                  // Pour les plages, filteredIngredientsRange renvoie tous les items pour le type et la plage, donc un filtrage final est nécessaire.
                  if (startDate && endDate) { // Cas des plages, sourceItems contient tous les items de la plage pour le type
                    return sourceItems.filter(item => item.ingredient === ingredientName);
                  } else { // Cas des totaux généraux, sourceItems est déjà la liste des détails de l'ingrédient spécifique
                    return sourceItems;
                  }
                },

      //  Normalise la quantité d'un ingrédient en une unité de base (grammes ou millilitres) et identifie sa catégorie d'affichage.
    normalizeIngredientQuantity(item) {
            let normalizedQuantity = item.quantite || 0;
            let baseUnit = item.unit || 'unknown';
            let displayUnitCategory = 'other'; // Default category

            const unit = (item.unit || '').toLowerCase().trim();

            if (['grammes', 'gr.', 'g'].includes(unit)) {
              displayUnitCategory = 'weight';
              baseUnit = 'g'; // Standard base unit for weight
            } else if (['kg', 'kilo', 'kilogrammes'].includes(unit)) {
              normalizedQuantity *= 1000; // Convert to grams
              displayUnitCategory = 'weight';
              baseUnit = 'g';
            } else if (['ml', 'millilitres'].includes(unit)) {
              displayUnitCategory = 'volume';
              baseUnit = 'ml'; // Standard base unit for volume
            } else if (['l.', 'litre', 'litres'].includes(unit)) {
              normalizedQuantity *= 1000; // Convert to milliliters
              displayUnitCategory = 'volume';
              baseUnit = 'ml';
            }
            // For other units (e.g., 'pièce', 'unité'), quantity is used as is, and baseUnit is its original unit
            // and displayUnitCategory remains 'other'.

            return { normalizedQuantity, baseUnit, displayUnitCategory };
          },

          // Formate une quantité totale normalisée pour l'affichage, retournant un objet { value, unit }
          formatNormalizedQuantity(totalQuantity, unitCategory) {
                 if (unitCategory === 'weight') {
                   if (totalQuantity >= 1000) {
                     // Retourne la valeur en nombre, et l'unité en 'Kg'
                     return { value: parseFloat((totalQuantity / 1000).toFixed(2)), unit: 'Kg' };
                   } else {
                     // Retourne la valeur en nombre entier, et l'unité en 'g'
                     return { value: Math.round(totalQuantity), unit: 'g' };
                   }
                 } else if (unitCategory === 'volume') {
                   if (totalQuantity >= 1000) {
                     // Retourne la valeur en nombre, et l'unité en 'L'
                     return { value: parseFloat((totalQuantity / 1000).toFixed(2)), unit: 'L' };
                   } else {
                     // Retourne la valeur en nombre entier, et l'unité en 'ml'
                     return { value: Math.round(totalQuantity), unit: 'ml' };
                   }
                 }
                 // Pour les catégories 'other', la quantité est déjà dans son unité native.
                 // Cette branche ne devrait pas être atteinte si les unités 'other' sont gérées directement
                 // dans les boucles forEach de computeTotalDP et totalRangeArray, mais comme fallback :
                 return { value: totalQuantity, unit: 'unité' }; // Unité générique par défaut
               },

               formatDetailQuantity(detailItem) {
                     // Normalise la quantité pour pouvoir la traiter (ex: g -> kg ou ml -> L)
                     const { normalizedQuantity, baseUnit, displayUnitCategory } = this.normalizeIngredientQuantity(detailItem);

                     // Si c'est une unité convertible (poids ou volume), utilise la logique de formatage consolidée
                     if (displayUnitCategory === 'weight' || displayUnitCategory === 'volume') {
                       const { value, unit } = this.formatNormalizedQuantity(normalizedQuantity, displayUnitCategory);
                       return `${value} ${unit}`;
                     } else {
                       // Pour les autres unités, affiche la quantité originale (parsée en nombre et arrondie) et son unité
                       const val = parseFloat(detailItem.quantite) || 0;
                       const unit = detailItem.unit || '';
                       return `${this.round2Decimals(val)} ${unit}`;
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

          // Optionnel: trier ici si les détails doivent toujours être triés par date
          const sortedFiltered = filtered.sort((a, b) => new Date(a.dateTimeService) - new Date(b.dateTimeService));

          this.ingFraisFiltered = sortedFiltered; // Conserver pour d'autres usages si nécessaire
          this._cachedRawRangeDetails[key] = sortedFiltered; // Mettre en cache le résultat
          return sortedFiltered;
        },

      // convertUnit(item) {
      //   if (item && (item.unit === 'grammes' || item.unit === 'gr.')) {
      //     item.quantite = item.quantite / 1000;
      //     item.unit = 'Kg';
      //   }
      //   if (item && item.unit === 'ml') {
      //     item.quantite = item.quantite / 1000;
      //     item.unit = 'l.';
      //   }
      //   return item;
      // },

      round2Decimals(x) {
          const num = parseFloat(x); // Tente de convertir en nombre flottant
          if (isNaN(num)) {
            return x; // Retourne la valeur originale si elle n'est pas un nombre valide (ex: une chaîne "N/A" ou undefined)
          }
          return Math.round(num * 100) / 100;
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
             // Temporary storage for normalized totals
             const normalizedTotals = {
                 weight: 0, // In grams
                 volume: 0, // In milliliters
                 other: new Map(), // Stores {unit: totalQuantity} for other types
             };

             this.ingredientDetails.forEach(detail => {
                 const { normalizedQuantity, baseUnit, displayUnitCategory } = this.normalizeIngredientQuantity(detail);

                 if (displayUnitCategory === 'weight' || displayUnitCategory === 'volume') {
                     normalizedTotals[displayUnitCategory] += normalizedQuantity;
                 } else {
                     const currentOtherTotal = normalizedTotals.other.get(baseUnit) || 0;
                     normalizedTotals.other.set(baseUnit, currentOtherTotal + normalizedQuantity);
                 }
             });

             // Format for display
             const formattedQuantities = [];
                    if (normalizedTotals.weight > 0) {
                        const { value, unit } = this.formatNormalizedQuantity(normalizedTotals.weight, 'weight');
                        formattedQuantities.push({
                            qTotal: value, // qTotal est maintenant un nombre
                            unit: unit // unit est maintenant 'Kg' ou 'g'
                        });
                    }
                    if (normalizedTotals.volume > 0) {
                        const { value, unit } = this.formatNormalizedQuantity(normalizedTotals.volume, 'volume');
                        formattedQuantities.push({
                            qTotal: value, // qTotal est maintenant un nombre
                            unit: unit // unit est maintenant 'L' ou 'ml'
                        });
                    }
                    normalizedTotals.other.forEach((qTotal, unit) => {
                        formattedQuantities.push({ qTotal: qTotal, unit: unit }); // qTotal est un nombre, unit est l'original
                    });

                    this.ingredientTotalQuantity = formattedQuantities;
                  },
                },
              });
}
