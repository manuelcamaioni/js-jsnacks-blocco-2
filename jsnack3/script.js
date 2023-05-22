//Calcola la somma e la media dei primi dieci numeri

const numList = [];
let sum = 0;

for(let i = 1; i < 11; i++){
    sum += i;
    numList.push(i);
}
console.log('Somma: ' + sum);
console.log('Media: ' + sum / numList.length);