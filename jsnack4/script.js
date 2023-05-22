// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const insertedWord1 = prompt('Inserisci una parola.');
const insertedWord2 = prompt('Inserisci una parola.');



/**
 * 
 * @param word1 first string input to check
 * @param word2 second string input to check
 * @returns check if the strings have the same characters length, if so return true, false otherwise
 */
function lengthStringCheck (word1, word2){
    if(word1.length === word2.length){
        console.log(word1, word2);
        return true;
    } else if (word1.length > word2.length){
        console.log(word1 + 'is the longest.');
        return false;
    }
    console.log(word2 + 'is the longest.');
    return false;
}

console.log(lengthStringCheck(insertedWord1, insertedWord2));