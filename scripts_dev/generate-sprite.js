import fs from 'fs/promises';
import path from 'path';
import { optimize } from 'svgo';

// Configuration
const ICONS_DIR = '../static/icons';
const OUTPUT_FILE = '../static/icons/sprite.svg';
const EXCLUDE_FILES = ['sprite.svg']; // Fichiers à exclure

// Fonction pour nettoyer le contenu SVG
function cleanSvgContent(content) {
  // Supprimer les déclarations XML et DOCTYPE
  return content
    .replace(/<\?xml.*?\?>/, '')
    .replace(/<!DOCTYPE.*?>/, '')
    .replace(/<!--.*?-->/g, '') // Supprimer les commentaires
    .trim();
}

// Fonction pour extraire le viewBox
function extractViewBox(svgContent) {
  const match = svgContent.match(/viewBox="([^"]+)"/);
  return match ? match[1] : '0 0 24 24'; // viewBox par défaut
}

// Fonction pour optimiser le SVG
async function optimizeSvg(svgContent) {
  try {
    const result = await optimize(svgContent, {
      plugins: [
        { name: 'removeXMLNS', active: false }, // Garder xmlns pour les symbols
        { name: 'removeDoctype', active: true },
        { name: 'removeComments', active: true },
        { name: 'removeMetadata', active: true },
        { name: 'removeTitle', active: true },
        { name: 'removeDesc', active: true },
        { name: 'removeUselessDefs', active: true },
        { name: 'removeEmptyAttrs', active: true },
        { name: 'removeHiddenElems', active: true },
        { name: 'removeEmptyText', active: true },
        { name: 'removeEmptyContainers', active: true },
        { name: 'convertStyleToAttrs', active: true },
        { name: 'convertColors', active: true },
        { name: 'convertPathData', active: true },
        { name: 'convertTransform', active: true },
        { name: 'removeUnknownsAndDefaults', active: true },
        { name: 'removeNonInheritableGroupAttrs', active: true },
        { name: 'removeUselessStrokeAndFill', active: true },
        { name: 'removeViewBox', active: false }, // Garder viewBox
        { name: 'cleanupEnableBackground', active: true },
        { name: 'cleanupIDs', active: true },
        { name: 'mergePaths', active: true },
        { name: 'moveElemsAttrsToGroup', active: true },
        { name: 'moveGroupAttrsToElems', active: true },
        { name: 'collapseGroups', active: true },
        { name: 'convertShapeToPath', active: true },
        { name: 'sortAttrs', active: true },
        { name: 'removeDimensions', active: true },
        { name: 'removeAttrs', params: { attrs: '(data-name)' } }
      ]
    });
    return result.data;
  } catch (error) {
    console.error('Erreur lors de l\'optimisation SVG:', error);
    return svgContent;
  }
}

// Fonction principale
async function generateSprite() {
  try {
    // Lire tous les fichiers SVG dans le dossier
    const files = await fs.readdir(ICONS_DIR);

    const svgFiles = files.filter(file => {
      const isSvg = path.extname(file).toLowerCase() === '.svg';
      const isExcluded = EXCLUDE_FILES.includes(file);
      return isSvg && !isExcluded;
    });

    if (svgFiles.length === 0) {
      console.log('Aucun fichier SVG trouvé dans le dossier');
      return;
    }

    console.log(`Trouvé ${svgFiles.length} fichiers SVG à traiter...`);

    let symbols = [];

    for (const file of svgFiles) {
      const filePath = path.join(ICONS_DIR, file);
      const content = await fs.readFile(filePath, 'utf8');
      const cleanedContent = cleanSvgContent(content);
      const optimizedContent = await optimizeSvg(cleanedContent);

      // Extraire l'ID à partir du nom de fichier (sans extension)
      const id = path.basename(file, '.svg').replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
      const viewBox = extractViewBox(optimizedContent);

      // Extraire le contenu à l'intérieur de la balise <svg>
      const innerContent = optimizedContent
        .replace(/^<svg[^>]*>/, '')
        .replace(/<\/svg>$/, '')
        .trim();

      symbols.push({
        id,
        viewBox,
        content: innerContent
      });

      console.log(`✓ Traité: ${file} -> #${id}`);
    }

    // Générer le sprite
    const spriteContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
${symbols.map(symbol => `
  <symbol id="${symbol.id}" viewBox="${symbol.viewBox}">
    ${symbol.content}
  </symbol>
`).join('\n')}
</svg>`;

    // Écrire le fichier de sortie
    await fs.writeFile(OUTPUT_FILE, spriteContent, 'utf8');
    console.log(`\n✅ Sprite SVG généré avec succès: ${OUTPUT_FILE}`);
    console.log(`   Contient ${symbols.length} icônes`);

  } catch (error) {
    console.error('❌ Erreur lors de la génération du sprite:', error);
  }
}

// Exécuter le script
generateSprite();
