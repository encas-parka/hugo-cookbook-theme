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

 // Fonctions de formatage et normalisation pour les produits
 export function normalizeUnit(quantity: number, unit: string): { quantity: number; unit: string } {
   if (unit === 'kg') {
     return { quantity: quantity * 1000, unit: 'gr.' };
   } else if (unit === 'l.') {
     return { quantity: quantity * 1000, unit: 'ml' };
   }
   return { quantity, unit };
 }

 export function formatQuantity(quantity: number, unit: string): string {
   if (unit === 'gr.' && quantity >= 1000) {
     return `${(quantity / 1000).toFixed(1)} kg`;
   } else if (unit === 'ml' && quantity >= 1000) {
     return `${(quantity / 1000).toFixed(1)} l`;
   }
   return `${quantity} ${unit}`;
 }

 export function formatDate(dateString: string): string {
   if (!dateString) return '-';
   try {
     return new Date(dateString).toLocaleDateString('fr-FR', {
       day: '2-digit',
       month: '2-digit',
       year: 'numeric',
       hour: '2-digit',
       minute: '2-digit'
     });
   } catch {
     return dateString;
   }
 }

 export function formatDisplayQuantity(quantity: string | null): string {
   if (!quantity) return '-';
   try {
     const parsed = JSON.parse(quantity);
     if (Array.isArray(parsed) && parsed.length > 0) {
       return parsed.map(q => `${q.value} ${q.unit}`).join(' et ');
     }
   } catch {
     return quantity;
   }
   return quantity;
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
