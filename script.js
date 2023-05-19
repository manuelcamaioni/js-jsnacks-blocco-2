// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const numberList = [];

let sum = 0;

while (sum < 50){
    const insertNum = parseInt(prompt('Inserisci un numero.'));
    if(isNaN(insertNum) || isNaN(sum)){
        parseInt(prompt('Errore, inserire valori validi.'));
    }

    numberList.push(insertNum);

    sum += insertNum;
}

console.log('somma totale: ' + sum);

