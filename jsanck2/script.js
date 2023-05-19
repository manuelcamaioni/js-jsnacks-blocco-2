// Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
// Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
// Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.

let insertedNumber = 0;
let attempts = 0;
const rightGuess = Math.floor(Math.random() * 100) + 1;

while (insertedNumber !== rightGuess){

 insertedNumber = parseInt(prompt('Inserisci un numero casuale tra 1 e 100.'));

    if(isNaN(insertedNumber) || insertedNumber > 100 || insertedNumber < 1){
    insertedNumber = parseInt(prompt('Inserisci un numero valido.'));
    }

    if(insertedNumber > rightGuess){
        console.log('Il numero da indovinare è minore del numero inserito.');
    } else if(insertedNumber < rightGuess){
        console.log('Il numero da indovinare è maggiore del numero inserito.');
    }

    ++attempts;
}

console.log(`Numero tentativi: ${attempts}`);