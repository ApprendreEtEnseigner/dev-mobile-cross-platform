// const { normalize } = require("node:path/win32");

function digitalRoot(n){
    //* tester si n a moins de 2 chiffre
    if ( n < 10){
        return n // * si oui, renvoyer n simplement
    }else{  // * sinon,...
        //* use sum pour sommer les chiffres de n
        let sum = n;
        //* continuer a sommer tant que sum a plus d'un chiffre
        while ( sum >= 10){
            //* use tempSum pour sommer les chiffres de sum dans la boucle for
            let tempSum = 0;
            //* convertir sum en string pour parcourir ses chiffres dans la boucle for
            let str = sum.toString();
            for( let i = 0; i < str.length; i++){
                //* sommer les chiffres stockes dans str et les ajouter dans tempSum
                tempSum += parseInt(str.charAt(i));
            };  
            //* apres parcours de all chiffres stockes dans str affecter le resultat a sum
            sum = tempSum;
        }
        
        return sum;
    }
    
}

document.write(digitalRoot(942));