// réccupérer le nombre d'assietes (quantityInput) et les quantité de base (amounts)

/// Quantités dans l'input utilisateur
const quantityInput = document.querySelector("#quantityInput");

/// Quantité initiale défini par l'auteur de la recette
const quantityInit = document.getElementById("quantityInit").textContent;

// Nombres de couverts selectionné (pour les impressions)
const quantitySpan = document.getElementById("quantityDefined")

/// Quantité des ingrédients
const amounts = document.querySelectorAll(".amount");
const amountArray = [];

/// Informations originales pour chaque quantité (valeur et unité)
const originalData = [];

// Remplir le tableau des quantité amountArray de chaque quantité signalée comme appartenant a amounts (element de class css .amount)
Array.from(amounts).forEach(function (element, index) {
  const unitElement = element.parentElement.querySelector('.unit');
  const unit = unitElement ? unitElement.textContent : '';
  
  // Toujours stocker la valeur originale en unité de base (gr ou ml)
  let baseValue = Number(element.innerText);
  let baseUnit = unit;
  
  // Convertir en unité de base si nécessaire
  if (unit === "Kg") {
    baseValue = baseValue * 1000;
    baseUnit = "gr.";
  } else if (unit === "l.") {
    baseValue = baseValue * 1000;
    baseUnit = "ml";
  }
  
  amountArray.push(baseValue);
  originalData.push({
    baseValue: baseValue,
    baseUnit: baseUnit,
    originalUnit: unit
  });
});

// Empecher le rechargement de la page lorsque la touche entrée est presser sur quantityInput
quantityInput.addEventListener('keydown', function (e) {
  if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13)
  {e.preventDefault();return false;}
},true);



// Fonction pour formater une quantité selon son unité
function formatQuantity(qty, unit) {
  if (!unit) return Math.round(qty * 10) / 10;

  switch(unit) {
    case "l.":
    case "Kg":
      return Math.round(qty * 100) / 100;
    case "ml":
    case "gr.":
      return Math.round(qty);
    default:
      return Math.round(qty * 10) / 10;
  }
}

// Fonction pour déterminer la meilleure unité d'affichage
function getBestDisplayUnit(baseQty, baseUnit) {
  if (baseUnit === "gr.") {
    if (baseQty >= 1000) {
      return { qty: baseQty / 1000, unit: "Kg" };
    }
    return { qty: baseQty, unit: "gr." };
  } else if (baseUnit === "ml") {
    if (baseQty >= 1000) {
      return { qty: baseQty / 1000, unit: "l." };
    }
    return { qty: baseQty, unit: "ml" };
  }
  
  return { qty: baseQty, unit: baseUnit };
}

// Lorsque quantityInput change, chaque valeur du tableau amountArray est modifié
quantityInput.addEventListener("input", function () {
  amountArray.forEach((baseValue, i) => {
    const unitElement = amounts[i].parentElement.querySelector('.unit');
    const original = originalData[i];
    
    // Calculer la nouvelle quantité en unité de base
    const newBaseQty = (baseValue * quantityInput.value) / quantityInit;
    
    // Déterminer la meilleure unité d'affichage
    const display = getBestDisplayUnit(newBaseQty, original.baseUnit);
    
    // Formater selon l'unité d'affichage
    amounts[i].innerHTML = formatQuantity(display.qty, display.unit);
    
    // Mettre à jour l'unité affichée
    if (unitElement) {
      unitElement.textContent = display.unit;
    }
  });

  quantitySpan.textContent = quantityInput.value;
});
