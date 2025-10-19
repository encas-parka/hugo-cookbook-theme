export const modal = $state({"product" : {
  id: '',
  isOpen: false,
  tab: 'recettes'
}})

export function openProductModal(tab: string, productId: string) {
  modal.product.tab = tab;
  modal.product.isOpen = true;
  modal.product.id = productId;
}

export function closeProductModal() {
  modal.product.isOpen = false;
  modal.product.tab = '';
  modal.product.id = '';
}

export let userName = () => {return localStorage.getItem("appwrite-user-name") || "";
};
