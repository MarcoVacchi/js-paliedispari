/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


let checkEvenOdd = prompt('Scegli pari o dispari!'); // variabile scelta pari o dispari    
// console.log(checkEvenOdd)

let checkUserNumber = parseInt(prompt('Scegli un numero da 1 a 5'));  // variabile scelta numero fra 1 a 5 per l utente  
// console.log(checkUserNumber)

let CpuRandomNumber = Math.floor(Math.random() * 5) + 1; // il computer genera un numero randomico da 1 a 5

let sum = checkUserNumber + CpuRandomNumber; 
console.log(sum);


function isNumberEven(myNumber) {  //funzione per verificare se il numero inserito è dispari

    let result = myNumber;

    if (result % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumberEven(sum));

//const sum = isNumberOddOrEven(11);
//console.log(sum);