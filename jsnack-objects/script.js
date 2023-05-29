// Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//     Codice giocatore
//     Nome
//     Cognome
//     Età
//     Media punti fatti per partita
//     Percentuale di successo per tiri da 3 punti
//     Stoppate 
//     Tiri 

// Generare casualmente le statistiche di gioco, secondo queste regole:
//     il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
//     la media punti fatti per partita deve essere compresa tra 0 e 50
//     la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
//     le stoppate sono un numero intero compresot ra 0 e 30
//     i tiri sono un numero intero compreso tra 20 e 100

function generateCode(){
    const codeLength = 6;
    let result = '';
    const stringChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const stringNum = "0123456789";
    for(let i = 0; i < codeLength / 2; i++){
        result += stringChar.charAt(Math.floor(Math.random() * stringChar.length));
    }
    for(let i = 0; i < codeLength / 2; i++){
        result += Math.floor(Math.random() * stringNum.length);
    }

    return result;

}

function averagePoints(){
    const average = Math.floor(Math.random() * (50 + 1));
    return average;
}

function averageThreePoints(){
    const average = Math.floor(Math.random() * (100 + 1));
    return average;
}

function stopped(){
    const average = Math.floor(Math.random() * 30 + 1);
    return average;
}

function shots(){
    const average = Math.floor(Math.random() * (100 - 20) + 20);
    return average;
}

const giocatore = {
    'codice giocatore': generateCode(),
    nome : 'Michael',
    COgnome : 'Jordan',
    Eta : 22,
    'Media punti' : averagePoints(),
    'Percentuale di successo tiri da 3 punti': averageThreePoints() + '%',
    Stoppate : stopped(),
    Tiri : shots()
}

console.log(giocatore);