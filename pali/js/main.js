/*## Palidroma
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma
*/
let wordUser = prompt('Inserisci una parola!');  
const checkFunction = checkIfPalindro(wordUser);
//console.log(checkFunction);

if  (checkFunction){
    console.log(`${wordUser} è una parola palindroma`)
 } else {
    console.log(`${wordUser} non è una parola palindroma`)
 }

function checkIfPalindro(wordUser){   
    let word = wordUser.toLowerCase(); 
    let reversed = '' 
    for (let i = word.length - 1; i >= 0; i--) {
        reversed = reversed + word[i];
    }
    if  (word === reversed) {
        return true;
    } else {
        return false;
    }
}

