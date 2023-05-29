const list = [];

function pepperObject(){
    const pepper = {
        type : '',
        weight : (Math.random() * 3 + 1).toFixed(2) + 'kg',
        length : (Math.random() * 70 + 1).toFixed(2) + 'cm',
    }
    return pepper;
}

for(let i = 0; i < 10; i++){
    list.push(pepperObject());
}

console.log(list);