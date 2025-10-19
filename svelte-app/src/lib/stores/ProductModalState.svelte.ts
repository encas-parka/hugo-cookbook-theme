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
    }

  });

  const recipes = $derived(product?.recipesArray || []);
  const currentsWho = $derived(product?.who || []);



}
