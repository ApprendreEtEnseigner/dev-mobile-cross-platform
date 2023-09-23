//* Ce texte décrit la création d'une fonction qui prend en entrée une chaîne de caractères contenant un ou plusieurs mots et qui retourne la même chaîne, mais avec les mots de cinq lettres ou plus inversés. La fonction doit fonctionner uniquement avec des lettres et des espaces et les espaces ne seront inclus que si plusieurs mots sont présents. 

// Termes techniques : 

// - Fonction : une séquence d'instructions qui effectue une tâche spécifique et peut être appelée à partir d'autres parties du programme.
// - Chaîne de caractères : une séquence de caractères, tels que des lettres, des chiffres et des symboles, qui sont utilisés pour représenter du texte.
// - Mots : une séquence de caractères entourée d'espaces ou de limites de phrase.
// - Espaces : un caractère utilisé pour séparer les mots dans une chaîne de caractères.

// Exemple
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"
let string = "Hey fellow warriors";
function spinWords(string){
    //TODO Have fun :)
    
  }

  let word = string.split(" ");
  for(let i=0; i<word.lengtn; i++){
    if(word[i] >= 5){
       let reverse = word[i].reverse();
    }
  }