import { Bean, Beef, Carrot, CandyCane, Egg, ChefHat, Leaf, Refrigerator, Package } from '@lucide/svelte';

// Fonction pour obtenir le nom d'affichage et l'icône d'un type de produit
 export function getProductTypeInfo(type: string) {
   const typeLower = type.toLowerCase();

   switch (typeLower) {
     case 'sec':
       return { displayName: 'Produits Sec', icon: Bean };
     case 'animaux':
       return { displayName: 'Viandes et Poissons', icon: Beef };
     case 'legumes':
       return { displayName: 'Fruits et Légumes', icon: Carrot };
     case 'sucres':
       return { displayName: 'Sucrées', icon: CandyCane };
     case 'lof':
       return { displayName: 'L.O.F', icon: Egg };
     case 'autres':
       return { displayName: 'Autres', icon: ChefHat };
     case 'epices':
       return { displayName: 'Assaisonnements', icon: Leaf };
     case 'frais':
       return { displayName: 'Produits Frais', icon: Refrigerator };
     default:
       return { displayName: type, icon: Package };
   }
 }



 export function sortEnrichedProducts(products: any[], filters: any): any[] {
   if (!filters.sortColumn) return products;

   return [...products].sort((a, b) => {
     let aVal: any = a[filters.sortColumn as keyof any];
     let bVal: any = b[filters.sortColumn as keyof any];

     if (aVal < bVal) return filters.sortDirection === 'asc' ? -1 : 1;
     if (aVal > bVal) return filters.sortDirection === 'asc' ? 1 : -1;
     return 0;
   });
 }
