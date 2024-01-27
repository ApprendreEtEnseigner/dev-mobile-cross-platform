// recuperation des pieces depuis le fichier .json
//! Ces lignes de code sont écrites en JavaScript et utilisent l'API Fetch pour récupérer un fichier JSON, puis écrire son contenu sur la page HTML.

// *const reponse = await fetch("pieces-auto.json"); envoie une requête à l'URL spécifiée pour récupérer le fichier JSON. La réponse est stockée dans la constante reponse.La réponse est retournée sous forme de promesse et le mot-clé "await" est utilisé pour attendre la résolution de la promesse avant de continuer l'exécution du code. 'https://mega.nz/file/mcIxQSxL#M5OsfyPSeFVp0MijQ5mSqbRdB7dijgfrsCSRudaZHIg'
const reponse = await fetch("pieces-autos.json");

//* const pieces = await reponse.json(); convertit la réponse JSON en un objet JavaScript. Le contenu JSON est extrait de la réponse et stocké dans la constante pieces.Une fois que la réponse est résolue, la méthode "json()" est appelée sur l'objet réponse, ce qui renvoie une autre promesse qui est résolue avec les données JSON parsées. Le mot-clé "await" est à nouveau utilisé pour attendre la résolution de cette promesse.
const pieces = await reponse.json();

// Fonction qui genere toute la page web
function genererPieces(pieces) {}

for (let i = 0; i < pieces.length; i++) {
  //* Enfin, le tableau "pieces" est créé à partir des données JSON récupérées, et la première pièce dans le tableau est stockée dans la variable "article".
  const article = pieces[i];

  //* Récupération de l'élément du DOM qui accueillera les fiches
  const sectionFiches = document.querySelector(".fiches");

  //* Création d’une balise dédiée à une pièce automobile
  const pieceElement = document.createElement("article");

  //! Commençons par choisir nos balises  Le produit est composé d’un nom, d’un prix, d’une catégorie et d’une image. Les balises HTML les plus adaptées pour chacunes de ces informations sont :
  //* img  pour l’image ;

  //* h2  pour le nom (on considère que h1 servira au titre du document) ;

  //* p  pour le prix et la catégorie.

  //! Une fois les balises choisies, nous allons utiliser la fonction document.createElement pour créer ces quatre éléments depuis le code JavaScript. La fonction prend un unique argument de type string (chaîne de caractères) qui spécifie le nom de la balise à créer. Nous pouvons ainsi créer nos quatre balises en appelant quatre fois cette fonction.

  //* Ce code est également écrit en JavaScript et utilise l'API DOM (Document Object Model) pour créer un nouvel élément "img" (une balise HTML utilisée pour afficher une image) en utilisant la méthode "createElement()" de l'objet "document".
  const imageElement = document.createElement("img");

  //* Ensuite, la propriété "src" de l'élément image est définie à l'aide de la valeur de la propriété "image" de l'objet "article". La propriété "src" spécifie l'URL de l'image à afficher.
  //* En résumé, ce code crée un nouvel élément "img" et définit son attribut "src" à une URL d'image spécifiée dans l'objet "article".
  imageElement.src = article.image;
  //! quelle est la difference entre "src" et "image"?
  //* "src" est une propriété de l'élément "img" en HTML qui définit l'URL de la source de l'image à afficher. En revanche, "image" est une propriété personnalisée d'un objet JavaScript spécifique à l'application.
  //* Dans le code donné, la propriété personnalisée "image" de l'objet "article" est utilisée pour récupérer l'URL de la source de l'image à afficher dans l'élément "img". La propriété "src" de l'élément "img" est ensuite définie avec cette URL.
  //* En bref, "src" est une propriété HTML standard qui définit l'URL de la source d'une image, tandis que "image" est une propriété personnalisée spécifique à l'application JavaScript utilisée pour stocker l'URL de la source de l'image.

  const nomElement = document.createElement("h2");
  // !Que fait innerText dans cette ligne de code: nomElement.innerText = article.nom;
  //* innerText est une propriété de l'objet DOM (Document Object Model) qui permet de modifier ou d'obtenir le texte contenu dans un élément HTML. Dans ce cas précis, la ligne de code affecte la valeur de la propriété nom de l'objet article à la propriété innerText de l'élément HTML nomElement. Cela permet d'afficher le nom de l'article dans la page web.
  nomElement.innerText = article.nom;

  const prixElement = document.createElement("p");
  //! Que fait `prix: ${article.prix} €` dans cette ligne de code: prixElement.innerText = `prix: ${article.prix} €`;
  //* La syntaxe correcte pour insérer une variable dans une chaîne de caractères en JavaScript est d'utiliser des backticks () plutôt que des guillemets simples ou doubles.

  //* Dans cette ligne de code, la variable article.prix est insérée dans la chaîne de caractères en utilisant la syntaxe ${ }. En utilisant cette syntaxe, la variable article.prix sera évaluée et son contenu sera inséré dans la chaîne de caractères.

  //* La ligne de code affectera donc le texte prix: {valeur de article.prix} € à la propriété innerText de l'élément prixElement. Cela permettra d'afficher le prix de l'article dans la page web.
  // Vérifiez les données
  //! Vous avez créé votre première fiche produit. Bravo ! 🥳 Mais vous n’en avez pas encore tout à fait fini ! Il vous reste deux problématiques à résoudre :
  //! votre client souhaite afficher un indicateur de prix pour aider les consommateurs à faire leur choix ;

  // //! lorsqu'on affiche la pièce “Balai d'essuie-glace", la catégorie n’est pas renseignée.
  //* Dans notre cas, nous voulons afficher un indicateur à côté du prix pour indiquer au client si l’article est abordable ou non. Si un article vaut moins de 35 euros, alors on considère qu’il est abordable, et on affichera un seul symbole euro. À l’inverse, si l’on considère que le prix est élevé, on affichera trois symboles euro.
  prixElement.innerText = `prix: ${article.prix} € (${
    article.prix > 35 ? "€" : "€€€"
  })`;

  const categorieElement = document.createElement("p");
  const descriptionElement = document.createElement("p");
  const stockElement = document.createElement("p");

  //! Fournir une valeur par défaut grâce à l’opérateur nullish
  //! L’opérateur nullish s’utilise lorsque vous pensez avoir une information dans une variable mais que finalement, il n’y en a pas.
  //! Dans notre cas, la pièce automobile “Balai d’essuie-glace” n’appartient à aucune catégorie. On aimerait le préciser entre parenthèses lorsque c’est le cas.
  //* L’opérateur s’écrit avec deux ?? sous la forme suivante :
  //*      expression à tester ?? valeur de substitution
  categorieElement.innerText = article.categorie ?? "(aucune categorie)";
  descriptionElement.innerText =
    article.description ?? "Pas de description pour le moment.";
  stockElement.innerText = article.disponibilite
    ? "En stock"
    : "Rupture de stock";

  //* On rattache la balise article a la section Fiches
  sectionFiches.appendChild(pieceElement);

  //* On rattache l’image à pieceElement (la balise article)
  pieceElement.appendChild(imageElement);
  pieceElement.appendChild(nomElement);
  pieceElement.appendChild(prixElement);
  pieceElement.appendChild(categorieElement);
  pieceElement.appendChild(descriptionElement);
  pieceElement.appendChild(stockElement);
}

//* gestion des bouttons
const buttonTrier = document.querySelector(".btn-trier");

buttonTrier.addEventListener("click", function () {
  const piecesOrdonnees = Array.from(pieces);

  piecesOrdonnees.sort(function (a, b) {
    return a.prix - b.prix;
  });
  console.log(piecesOrdonnees);
});

const buttonFiltrer = document.querySelector(".btn-filtrer");

buttonFiltrer.addEventListener("click", function () {
  const piecesFiltrees = pieces.filter(function (piece) {
    return piece.prix <= 35;
  });

  console.log(piecesFiltrees);
});

const buttonDescribe = document.querySelector(".btn-describe");
buttonDescribe.addEventListener("click", function () {
  const piecesFiltrees = pieces.filter(function (piece) {
    return piece.description;
  });

  console.log(piecesFiltrees);
});

const buttonDecroissant = document.querySelector(".btn-decroissant");
buttonDecroissant.addEventListener("click", function () {
  const piecesOrdonnees = Array.from(pieces);
  piecesOrdonnees.sort(function (a, b) {
    return b.prix - a.prix;
  });
  console.log(piecesOrdonnees);
});

const noms = pieces.map((piece) => piece.nom);

for (let i = pieces.length - 1; i >= 0; i--) {
  if (pieces[i].prix > 35) {
    noms.splice(i, 1);
  }
}
console.log(noms);

//Création de la liste
const abordableElement = document.createElement("ul");

for (let i = 0; i < noms.length; i++) {
  const nomElement = document.createElement("li");
  nomElement.innerText = noms[i];
  abordableElement.appendChild(nomElement);
}

document.querySelector(".abordables").appendChild(abordableElement);

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
console.log(disponibilitePieces);

// creation de la liste dispobile
const elementDispo = document.createElement("ul");

for (let i = 0; i < disponibilitePieces.length; i++) {
  if (disponibilitePieces != "") {
    const isTrueElement = document.createElement("li");
    isTrueElement.innerText = disponibilitePieces[i];
    elementDispo.appendChild(isTrueElement);
  }
}

// ajout de la liste ul des element dispo dans le div disponible
document.querySelector(".disponibles").appendChild(elementDispo);
