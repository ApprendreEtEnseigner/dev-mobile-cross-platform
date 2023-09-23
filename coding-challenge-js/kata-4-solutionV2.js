//! --------------------------------- V1 -------------------------------------------------

  function solution(str, ending) {
    // Vérifie si les arguments sont des chaînes de caractères
    if (typeof(str) != "string" || typeof(ending) != "string")
      throw "wrong type"; // Si ce n'est pas le cas, lance une exception
  
    // Vérifie si la longueur de la chaîne 'ending' est supérieure à celle de la chaîne 'str'
    if (ending.length > str.length)
      return false; // Si c'est le cas, renvoie false
  
    // Récupère les derniers caractères de la chaîne 'str' en utilisant la méthode 'substr'
    let lastChars = str.substr(str.length - ending.length, ending.length);
  
    // Compare les derniers caractères de 'str' avec la chaîne 'ending'
    return lastChars == ending; // Renvoie true si les deux chaînes sont égales, false sinon
  }
//! --------------------------------- V2 -------------------------------------------------
  function solution(str, ending){
    return str.substr(-ending.length) == ending;
  }

//! --------------------------------- V3 -------------------------------------------------
  function solution(str, ending){
    return str.slice(0 - ending.length) === ending;
  }

//! --------------------------------- V4 -------------------------------------------------
  const solution = (str, ending) => str.endsWith(ending);
  

  function solution(str, ending){
  return str.substr(-ending.length) == ending;
}

//! --------------------------------- V5 -------------------------------------------------
function solution(str, ending){
    var l = ending.length;
    var str = str.slice(-l); 
    return str.match(ending) ? true : false;
  }

//! --------------------------------- V6 -------------------------------------------------
  function solution(str, ending){
    let strArray = str.split("");
    let endArray = ending.split("");
    let wasteArrayLength = strArray.length - endArray.length;
    let newArray = [];
  
    for (let i = wasteArrayLength; i < strArray.length; i++) {
      newArray.push(strArray[i]);
    } 
  
    let newEnding = endArray.join();
    let newString = newArray.join();
  
    if (newString == newEnding) {
        return true;
    } else {
        return false;
    }
  }

//! --------------------------------- V7 -------------------------------------------------
  function solution(str, ending){
    return str.split('').reverse().join('').search(ending.split('').reverse().join('')) === 0;
  }