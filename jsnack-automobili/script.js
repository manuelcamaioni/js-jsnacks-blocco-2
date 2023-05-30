const cars = [
    {
        marca: 'Volvo',
        modello: 'X',
        alimentazione: 'benzina'
    },
    {
        marca: 'Mercedes',
        modello: 'B',
        alimentazione: 'benzina'
    },
    {
        marca: 'Mercedes',
        modello: 'X',
        alimentazione: 'gpl'
    },
    {
        marca: 'Ford',
        modello: 'A',
        alimentazione: 'gpl'
    },
    {
        marca: 'Renault',
        modello: 'B',
        alimentazione: 'metano'
    },
    {
        marca: 'Ford',
        modello: 'Z',
        alimentazione: 'metano'
    },
    {
        marca: 'Volvo',
        modello: 'Y',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Mercedes',
        modello: 'Y',
        alimentazione: 'benzina'
    },
    {
        marca: 'Renault',
        modello: 'A',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Ford',
        modello: 'B',
        alimentazione: 'diesel'
    },
    {
        marca: 'Mercedes',
        modello: 'Y',
        alimentazione: 'gpl'
    },
    {
        marca: 'Volvo',
        modello: 'A',
        alimentazione: 'diesel'
    },
    {
        marca: 'Renault',
        modello: 'Z',
        alimentazione: 'diesel'
    },
    {
        marca: 'Volvo',
        modello: 'X',
        alimentazione: 'gpl'
    },
    {
        marca: 'Renault',
        modello: 'Z',
        alimentazione: 'benzina'
    }
];

const aBenzina = [];
for(let i = 0; i < cars.length; i++){
    const car = cars[i];
    if(car.alimentazione === 'benzina'){
        aBenzina.push(car);
    }
}

console.log(aBenzina);

const aDiesel = [];

cars.forEach((car)=>{
    if(car.alimentazione === 'diesel')
        aDiesel.push(car);
})

console.log(aDiesel);

const otherCars = [];
cars.filter((car) => {
    if(!car.alimentazione === 'diesel' && !car.alimentazione === 'benzina')
        otherCars.push(car);
})

console.log(otherCars);