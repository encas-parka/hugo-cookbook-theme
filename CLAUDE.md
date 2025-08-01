# Directives pour agents LLM – Projet ENKA Cookbook

## Organisation du projet

- Le projet est composé de deux dépôts :
  - **enka-cookbook-site** : contient principalement le contenu du site, utilise le CMS Decap (configuration dans `/static/admin`).
  - **hugo-cookbook-theme** : contient le thème Hugo utilisé par le site.

## Directives générales

- **Langue** : Toutes les contributions, commentaires, messages de commit, et communications doivent être rédigés en **français**.
- **Qualité du code** :
  - Respecter les principes **DRY** (Don't Repeat Yourself), **SOLID** et **KISS** (Keep It Simple, Stupid).
  - Privilégier la clarté, la simplicité et la maintenabilité du code.
  - Documenter les parties complexes ou non triviales.
- **Structure** :
  - Séparer clairement le contenu (dans `enka-cookbook-site`) et la logique de présentation/thème (dans `hugo-cookbook-theme`).
  - Ne pas dupliquer de logique ou de contenu entre les deux dépôts.
- **CMS** :
  - Toute modification liée à la gestion de contenu doit prendre en compte la configuration Decap CMS présente dans `/static/admin`.

## Bonnes pratiques

- Toujours vérifier l’impact d’une modification sur l’ensemble du site.
- Préférer la réutilisation des composants existants.
