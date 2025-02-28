/*## Palidroma
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma


Ragionamento logico :
- creo un prompt per chiedere all'utente di inserire una parola
- 



*/
let wordUser = prompt('Inserisci una parola!');

function checkIfPalindro(wordUser){
    let word = wordUser
    let wordReverse = word.split("").reverse().join;
    
    if  (word === wordReverse) {
        console.log(`${word} è un parola palindroma!`);
        return;
    } else (word !== wordReverse); {
        console.log(`${word} non è un parola palindroma!`)
        return;
    }
}

checkIfPalindro(wordUser);

//if (checkIfPalindro()) {
  //  console.log('è una parola palindra!');
//}