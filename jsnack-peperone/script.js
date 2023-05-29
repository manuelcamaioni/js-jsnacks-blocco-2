const list = [];

function pepperObject(){
    const pepper = {
        type : '',
        weight : (Math.random() * 3 + 1),
        length : (Math.random() * 70 + 1),
    }
    return pepper;
}

for(let i = 0; i < 10; i++){
    list.push(pepperObject());
    
}

console.log(list);
let totalWeight= 0;
for(let a = 0; a < list.length; a++){
    const pepper = list[a];

    totalWeight += pepper.weight;

}

console.log(totalWeight.toFixed(2) + 'kg');