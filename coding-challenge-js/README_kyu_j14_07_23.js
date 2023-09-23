// //! -------------------------------------DECOUPER UNE CHAINE----------------------------------------------------

// Il existe plusieurs méthodes en JavaScript pour découper une chaîne de caractères selon un motif ou un indice. Voici quelques exemples :

// - La méthode **split()** divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. La division est effectuée en recherchant un motif ; où le motif est fourni comme premier paramètre dans l'appel de la méthode¹.
// - La méthode **slice()** extrait une section d'une chaîne de caractères et la retourne comme une nouvelle chaîne de caractères. La chaîne de caractères courante n'est pas modifiée. On peut spécifier un indice de début et un indice de fin pour délimiter la section à extraire².
// - La méthode **substring()** retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin. Cette méthode est similaire à slice(), sauf qu'elle ne prend pas en compte les indices négatifs³.

// Pour utiliser la méthode **split()** en JavaScript, il faut appeler cette méthode sur une chaîne de caractères en passant un motif ou un séparateur en paramètre. La méthode retourne un tableau contenant les sous-chaînes obtenues en divisant la chaîne selon le motif ou le séparateur. Par exemple :

// ```js
// var chaine = "Bonjour le monde";
// var tableau = chaine.split(" "); // on utilise l'espace comme séparateur
// console.log(tableau); // affiche ["Bonjour", "le", "monde"]
// ```

// On peut aussi passer une expression régulière comme motif pour diviser la chaîne selon un critère plus complexe. Par exemple :

// ```js
// var chaine = "12-34-56-78";
// var tableau = chaine.split(/-/); // on utilise le tiret comme motif
// console.log(tableau); // affiche ["12", "34", "56", "78"]
// ```

// On peut également spécifier une limite sur le nombre de sous-chaînes à inclure dans le tableau. Par exemple :

// ```js
// var chaine = "a-b-c-d-e-f-g";
// var tableau = chaine.split("-", 3); // on utilise le tiret comme séparateur et on limite à 3 éléments
// console.log(tableau); // affiche ["a", "b", "c"]
// ```

// Vous pouvez consulter les liens suivants pour plus de détails et d'exemples sur la méthode split() :

// ¹: [String.prototype.split() - JavaScript | MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split)
// ²: [javascript - How to use split? - Stack Overflow](https://stackoverflow.com/questions/2555794/how-to-use-split)
// ³: [La méthode split() en Javascript - Analyste Programmeur](https://www.analyste-programmeur.com/javascript/les-expressions-regulieres/javascript-split)

// Source: Conversation with Bing, 7/14/2023
// (1) javascript - How to use split? - Stack Overflow. https://stackoverflow.com/questions/2555794/how-to-use-split.
// (2) String.prototype.split() - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split.
// (3) String.prototype.split() - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split.
// (4) La méthode split() en Javascript - Analyste Programmeur. https://www.analyste-programmeur.com/javascript/les-expressions-regulieres/javascript-split.

// //! -------------------------------------RENVERSER UNE CHAINE----------------------------------------------------
// Il existe plusieurs méthodes pour inverser une chaîne de caractères en JavaScript. Voici quelques exemples:

// - Utiliser les fonctions intégrées `split()`, `reverse()` et `join()`²¹. Par exemple:

// ```javascript
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("bonjour")); // ruojnob
// ```

// - Utiliser une boucle en décrémentation². Par exemple:

// ```javascript
// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }

// console.log(reverseString("bonjour")); // ruojnob
// ```

// - Utiliser la récursion². Par exemple:

// ```javascript
// function reverseString(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverseString(str.substr(1)) + str[0];
//   }
// }

// console.log(reverseString("bonjour")); // ruojnob
// ```

// J'espère que cela vous a été utile. 😊

// Source: Conversation with Bing, 7/14/2023
// (1) Trois façons d'inverser une chaine de caractères dans JavaScript. https://www.freecodecamp.org/french/news/trois-facons-d-inverser-une-chaine-de-caracteres-dans-javascript/.
// (2) Inverser une chaîne en JavaScript | Delft Stack. https://www.delftstack.com/fr/howto/javascript/reverse-string-javascript/.
// (3) Comment inverser une chaîne de caractères en Javascript. https://waytolearnx.com/2019/09/comment-inverser-une-chaine-de-caracteres-en-javascript.html.
// (4) Inverser une chaîne en JavaScript - Techie Delight. https://www.techiedelight.com/fr/reverse-string-javascript/.