---
weight: 22
title: "Les Recettes"
description: ""
icon: "article"
date: "2024-01-21T23:16:47+01:00"
lastmod: "2024-01-21T23:16:47+01:00"
draft: true
toc: true
zoomable_img: true
gallery: true
---
{{< load-photoswipe >}}


## Aperçu de l'édition d'une recette
{{< figure src="img/recette-apercu.png" alt="apercu recette" class="border border-1 border-gray-300 m-4 p-2">}} </figure>

Certains champs sont optionnels, d'autres sont obligatoires. De nombreux champs servent à classer la recettes, et servent pour la recherche par filtres des recettes.

{{% alert context="warning" %}}

- Chaque recette doit avoir **un nom unique**. Si 2 recettes existent avec le même nom, une seule des 2 sera visible/accessible sur le site. Pensez-y si vous dupliquez des recettes.
- **Ne pas renommer une recette**  ( ou un ingrédient / un "materiel", une catégories... ) si vous ne venez pas de la créer. Si une recette est renommée, alors les pages événements qui l'utilisaient n'y auront plus accès, et seront buggées, et les recettes qui lui sont liées comme "recettes alternatives" auront des liens "cassés". Au pire, dupliquez la recette et mettez lui le nom qui vous convient .

- Si vous n'êtes pas l'auteur•ices d'une recette mais que vous pensez qu'il faudrait modifier les ingrédients/proportions, à moins que vous ayez eu l'avis de l'auteur•ice, ne le faites pas. Utilisez plutôt l'option "Dupliquer", modifier le nom de la recette pour la distinguer de la précédente (en ajoutant par exemple "version vachement mieux" :), et modifiez ensuite ce que vous souhaitez.
{{% /alert %}}

_Exemple de page 'événement' avec erreur si une de ses recettes n'existe plus (ou à été renommée):_
{{< row >}}
  {{< bs/col >}}
    {{< zoomable-img img_content="img/recette-erreur-1.jpg"  alt="recette-erreur-1.jpg">}}
  {{< /bs/col >}}

  {{< bs/col >}}
    {{< zoomable-img img_content="img/recette-erreur-2.jpg"  alt="recette-erreur-2.jpg">}}
  {{< /bs/col >}}
{{< /row >}}

## Les ingrédients
L'ajout des ingrédients se fait à partir de champs répartis dans différentes catégories d'ingrédients. 

Lorsque vous commencez à taper le nom d'un ingrédient, une liste de propositions apparaît : les ingrédients sont pré-enregistré afin de permettre certaines classifications automatiques (présence d’allergènes notamment). 

Vous pouvez rapidement vérifier l'existence d'un ingrédient sur la page [ingrédients](https://enka-cookbook.netlify.app/ingredients/). Lorsque vous souhaitez ajouter une recette avec des ingrédients peu commun, il peut être malin de se rendre sur cette page au préalable pour vérifier leur existence, et commencer par [ajouter les ingrédients manquant au site]({{< ref "docs/editer/autres/index.md#les-ingrédients" >}}) avant de rédiger la recette.

Indiquer les quantités en Kg, grammes, litres ou mili-litres est fortement encouragé, afin de permettre l'élaboration des listes de courses lorsque les recettes sont utilisées par une page événement.  

{{< zoomable-img img_content="img/1-ingredient.jpg" alt="ingredients" >}}


Il est possible de "réduire" les ingrédients déjà ajoutés pour avoir une meilleure visibilité de l'ensemble.
{{< gallery path="img/gallery-ing" col_lg="2" />}}


## Préparation à faire la veille
Un champ est dédié aux préparations à effectuer la veille du service. Ce qui est inscrit dans ce champ sera mis en évidence dans la recette, afin d'éviter les oublis.

{{< gallery path="img/gallery-veille" col_lg="2" />}}

## Préparations alternatives
S'il existe des préparations alternatives à celle que vous ajoutez (alternatives végés, ou avec d'autres proportions, etc.), il existe un champ qui permet de les indiquer. Les recettes ainsi liées entre-elles auront alors un lien indiquant l'alternative en bas de leur page. 
blue
{{< gallery path="img/gallery-prepalt" col_lg="2" />}}

## Publier une recette

{{< text_img img_content="img/save/save-step1.jpg" alt="Enregistrer une recette">}}
Pour publier une recette, il faut :
1. Cliquer sur "Enregistrer" la recette
2. Définir son "statut" à "Prêt" (par défaut elle est enregistré comme brouillon)
3. Cliquer sur "Publier" → "Publier maintenant"
{{< /text_img >}}

{{% alert context="warning" %}}
## Publier plusieurs recettes
Si vous ajoutez plusieurs recettes en une session, il est recommandé de ne pas les publier immédiatement (étape 3. ci-dessus). 

Il est préférable de créer d'abord toute les recettes, de les enregistrer, puis lorsque c'est fait, de les publier toutes d'un coup depuis l'onglet "Flux". 

Cela permet de limiter le nombre de "reconstruction" du site: l’hébergement gratuit de ce site implique une limitation du nombre mensuelle de publication autorisée, et si on est plein à modifier le site sur une même période, cette limite risque d'être atteinte et les nouvelles publications seront bloquées jusqu'au mois suivant (environs 600 modifications/publications par mois possibles)...

{{% /alert %}}

{{< row >}}
  {{< bs/col >}}
    {{< zoomable-img img_content="img/save/1-save-workflow.jpg"  alt="publier plusieurs recettes">}}
  {{< /bs/col >}}

  {{< bs/col >}}
    {{< zoomable-img img_content="img/save/2-save-workflow.jpg"  alt="publier plusieurs recettes">}}
  {{< /bs/col >}}
{{< /row >}}
