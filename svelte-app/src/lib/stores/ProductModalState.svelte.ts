import type { Purchases } from '../types/appwrite';
import type { EnrichedProduct } from '../types/store.types';

export function createProductModalState(product: EnrichedProduct) {

  let loading = $state(false);
  let error = $state<string | null>(null);

  // Préremplissage intelligent des formulaires
  const forms = $state({
    purchase: {
      quantity: null,
      unit: product.totalNeededArray[0].unit || '', // Unité par défaut du produit
      store: product.storeInfo?.storeName || '', // Magasin du produit
      who: localStorage.getItem("appwrite-user-name") || '', // Utilisateur courant
      price: null,
      notes: ''
    },
    stock: {
      quantity: null,
      unit: product.totalNeededArray[0].unit || '', // Unité par défaut du produit
      notes: '',
      dateTime: new Date().toISOString()
    },
    store: {
      name: product.storeInfo?.storeName || null,
      comment: product.storeInfo?.storeComment || null
    },
    who: {
      name: localStorage.getItem("appwrite-user-name") || '',
    },




  });


  // Autres données à afficher
  const recipes = $derived(product?.recipesArray || []);
  const whoList = $derived(product?.who || []);
  const stockEntries = $derived(product?.stockArray || []);
  const purchasesList = $derived(product?.totalPurchasesArray || []);

  // Edition d'une donnée existante (plus besoin de edit.store ?)
  let edit = $state({
    purchase: null as Purchases | null,
    whoList: whoList || null as string[] | null
  })


}
