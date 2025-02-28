/*## Palidroma
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma
*/
let wordUser = prompt('Inserisci una parola!');  

function checkIfPalindro(wordUser){   
    let word = wordUser.toLowerCase(); 
    let wordReverse = word.split("");
    let reversed = '' 
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += wordReverse[i];
    }
    if  (word === reversed) {
        return true;
    } else {
        return false;
    }
}
const checkFunction = checkIfPalindro(wordUser);
console.log(checkFunction);
