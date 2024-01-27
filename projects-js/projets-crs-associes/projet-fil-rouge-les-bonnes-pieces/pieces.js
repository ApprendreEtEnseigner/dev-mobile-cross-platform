// recuperation des pieces depuis le fichier .json

const reponse = await fetch("pieces-autos.json");

const pieces = await reponse.json();

// Fonction qui genere toute la page web
function genererPieces(pieces) {
  for (let i = 0; i < pieces.length; i++) {
    //*   extraction d'une pieces (=article) dans pieces-auto.json a l'indice i
    const article = pieces[i];

    //* Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");

    //* Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");

    //* Création d’une balise image dédiée à une pièce automobile
    const imageElement = document.createElement("img");

    //*   association de l'image dans pieces-auto.json a la balise imageElement
    imageElement.src = pieces[i].image;

    //* Création d’une balise h2 dédiée au nom d'une pièce automobile
    const nomElement = document.createElement("h2");

    //*   association du nom dans pieces-auto.json a la balise nomElement (h2)
    nomElement.innerText = article.nom;

    //* Création d’une balise p dédiée au prix d'une pièce automobile
    const prixElement = document.createElement("p");

    //* Création d’une balise p dédiée a la categorie d'une pièce automobile
    const categorieElement = document.createElement("p");

    //* Création d’une balise p dédiée a la description d'une pièce automobile
    const descriptionElement = document.createElement("p");

    //* Création d’une balise p dédiée au stock (disponibilite)
    const stockElement = document.createElement("p");

    // Vérifiez les données
    //! votre client souhaite afficher un indicateur de prix pour aider les consommateurs à faire leur choix ;
    prixElement.innerText = `prix: ${article.prix} € (${
      article.prix > 35 ? "€" : "€€€"
    })`;

    //! Fournir une valeur par défaut grâce à l’opérateur nullish
    categorieElement.innerText = article.categorie ?? "(aucune categorie)";

    descriptionElement.innerText =
      article.description ?? "Pas de description pour le moment.";

    // Verifier l'etat du stock
    stockElement.innerText = article.disponibilite
      ? "En stock"
      : "Rupture de stock";

    // montage de la balise article (pieceElement) au parent sectiton (=sectionFiches)
    sectionFiches.appendChild(pieceElement);

    // On rattache la balise img (imageElement) au parent article (pieceElement)
    pieceElement.appendChild(imageElement);

    // Ainsi de suite...
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
  }
}

// Affichage initial de la page
genererPieces(pieces);

//* gestion des bouttons
// Montage du addEventListener pour trier les pieces par ordre de prix croissant
const buttonTrier = document.querySelector(".btn-trier");

buttonTrier.addEventListener("click", function () {
  const piecesOrdonnees = Array.from(pieces);

  piecesOrdonnees.sort(function (a, b) {
    return a.prix - b.prix;
  });

  //  Effacement de l'écran et...
  document.querySelector(".fiches").innerHTML = "";
  // ...régénération de la page
  genererPieces(piecesOrdonnees);
});

// Montage du addEventListener pour filtrer les pieces  abordables
const buttonFiltrer = document.querySelector(".btn-filtrer");

buttonFiltrer.addEventListener("click", function () {
  const piecesFiltrees = pieces.filter(function (piece) {
    return piece.prix <= 35;
  });

  //  Effacement de l'écran et...
  document.querySelector(".fiches").innerHTML = "";
  // ...régénération de la page
  genererPieces(piecesFiltrees);
});

// Montage du addEventListener pour filtrer les pieces non  abordables
const buttonDecroissant = document.querySelector(".btn-decroissant");
buttonDecroissant.addEventListener("click", function () {
  const piecesOrdonnees = Array.from(pieces);
  piecesOrdonnees.sort(function (a, b) {
    return b.prix - a.prix;
  });

  //  Effacement de l'écran et...
  document.querySelector(".fiches").innerHTML = "";
  // ...régénération de la page
  genererPieces(piecesOrdonnees);
});

// Montage du addEventListener pour afficher la description des pièces
const buttonDescribe = document.querySelector(".btn-describe");
buttonDescribe.addEventListener("click", function () {
  const piecesHasDescription = pieces.filter(function (piece) {
    return piece.description;
  });

  //  Effacement de l'écran et...
  document.querySelector(".fiches").innerHTML = "";
  // ...régénération de la page
  genererPieces(piecesHasDescription);
});

//   Filtrer les pieces via input
const choicePrice = document.querySelector(".trier-graphic");

choicePrice.addEventListener("input", function () {
  const priceHasChoiced = pieces.filter(function (piece) {
    return piece.prix <= choicePrice.value;
  });
  const displayValueChoiced = document.querySelector(".value-choiced");
  displayValueChoiced.innerText =
    choicePrice.value != 0 ? `${choicePrice.value} €` : `0 €`;
  //  Effacement de l'écran et...
  document.querySelector(".fiches").innerHTML = "";
  // ...régénération de la page
  genererPieces(priceHasChoiced);
  console.log(priceHasChoiced);
});

//! Listing des pieces
//   Noms de toutes les pieces abordables
const noms = pieces.map((piece) => piece.nom);

for (let i = pieces.length - 1; i >= 0; i--) {
  if (pieces[i].prix > 35) {
    noms.splice(i, 1);
  }
}

// Creation de l'entete de la liste des pieces abordables
const pElement = document.createElement("p");
pElement.innerText = "Pièces abordables";

//Création de la liste des pieces abordables
const abordableElement = document.createElement("ul");

for (let i = 0; i < noms.length; i++) {
  const nomElement = document.createElement("li");
  nomElement.innerText = noms[i];
  abordableElement.appendChild(nomElement);
}

// Montage de l'entete (pElement)  & ... de la liste (abordableElement) sur la div (.abordables)
document
  .querySelector(".abordables")
  .appendChild(pElement)
  .appendChild(abordableElement);

//  disponibilite des pieces
const disponibilitePieces = pieces.map((piece) =>
  piece.disponibilite == true ? `${piece.nom} - ${piece.prix} € ` : ""
);
// suppression des "" dans la liste
for (let i = disponibilitePieces.length - 1; i >= 0; i--) {
  if (disponibilitePieces[i] == "") {
    disponibilitePieces.splice(i, 1);
  }
}

// Creation de l'entete de la liste des pieces disponibles
const enteteDisponibilite = document.createElement("p");
enteteDisponibilite.innerText = "Pièces disponibles";

// creation de la liste dispobile
const elementDispo = document.createElement("ul");

for (let i = 0; i < disponibilitePieces.length; i++) {
  if (disponibilitePieces != "") {
    const isTrueElement = document.createElement("li");
    isTrueElement.innerText = disponibilitePieces[i];
    elementDispo.appendChild(isTrueElement);
  }
}

// Montage de l'entete (enteteDisponibilite)  & ... de la liste (elementDispo) sur la div (.disponibles)
document
  .querySelector(".disponibles")
  .appendChild(enteteDisponibilite)
  .appendChild(elementDispo);
