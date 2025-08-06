# AGENTS

Projet multi-dépôts : ce thème Hugo (hugo-cookbook-theme) est utilisé par le dépôt de contenu enka-cookbook-site, où il est intégré en tant que sous-module Git. Toute évolution du thème doit rester découplée du contenu et compatible avec son intégration comme submodule.

1) Construction/serveur/tests
- Construire: hugo --gc --minify
- Développer: hugo server -D
- Lint: npx prettier --check "**/*.{html,md,css,js,scss}"
- Format: npx prettier --write "**/*.{html,md,css,js,scss}"
- Tests: pas de framework; valider par build (ci-dessus)
- Test unitaire isolé: non applicable (pas de runner). Documenter si ajouté.

2) Style de code
- Prettier + prettier-plugin-go-template (.prettierrc); parser go-template pour *.html
- Modules Hugo: github.com/hugomods/*, photoswipe; préférer assets/ (scss, js) et pipelines Hugo
- JS: ES5/ES6 simple (Alpine, Vue2); utiliser const/let, fonctions pures; pas de TypeScript
- Nommage: fichiers/partials en kebab-case; classes CSS BEM/Bootstrap; données YAML/TOML snake_case
- Hugo: limiter la logique; utiliser partials, blocks, range, with; vérifier nil/empty avec with/default
- SCSS: centraliser variables/mixins sous assets/scss; éviter !important; suivre Bootstrap 5
- Erreurs: JS avec try/catch et guards DOM; Hugo éviter panics via defaults; pas de secrets loggés
- Accessibilité: alt, aria-*, contrastes; structure sémantique
- Performance: pipelines Hugo (minify, fingerprint), éviter JS bloquant; images via hugomods/images
- Règles Cursor/Copilot: aucune trouvée (.cursor/, .cursorrules, .github/copilot-instructions.md absents)

3) Partials et fonctions (inventaire bref)
- components/ingredients-grouped-list: liste d’ingrédients groupée, tri + icônes
- components/event-top-nav: navigation supérieure pages événement
- components/breadcrumb, doc-sidebar, backlinks: navigation docs
- components/*icon*: rendu d’icônes (cat/type/svg/font), giscus-comment
- components/search-module-* : modules recherche recettes/événements
- functions/format-qty: formate quantité/unité avec conversions g↔kg, ml↔l
- functions/quantite-converter: conversions auxiliaires par unité/ingrédient
- functions/extract-uuid-from-slug.html: extrait UUID depuis slug étendu
- functions/ingredients-index, recettes-index: index globaux d’ingrédients/recettes
- functions/ingredients-types-rename(-short): renommage lisible des types
- bootstrap/* et bootstrap/functions/*: helpers UI Bootstrap (grille, alertes, attrs, url)
- head/*, header/*, footer/*: SEO/meta, favicons, scripts/styles
- inline-svg, fontawesome, email, content/*: utilitaires d’inclusion/rendu
