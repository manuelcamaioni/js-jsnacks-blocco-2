// ? Dati un input e due bottoni, l'utente popola una lista di ingredienti usando il primo bottone, al termine della quale preme un secondo bottone e viene generata un'immagine casuale di un pasto al centro dello schermo dopo 2 secondi per ogni ingrediente nella ricetta..


const createBtnElement = document.getElementById('create-button');
const addBtnElement = document.getElementById('add-button');

const inputElement = document.querySelector('input');
inputElement.value = '';
const listElement = document.getElementById('list');
// function addElement(tagName, parent, input){
//     const element = document.createElement(tagName);
//     element.innerHTML = '';
//     element.innerHTML += input.value;
//     parent.appendChild(tagName);

//     return element;
// }
let counter = 0;
addBtnElement.addEventListener('click', function(){
    
    const liElement = document.createElement('li');
    
    counter++;
    liElement.innerHTML += inputElement.value;
    listElement.appendChild(liElement);
    inputElement.value = '';
});

createBtnElement.addEventListener('click', function(){
    if(counter >= 2){
        document.querySelector('div.image-wrapper').innerHTML = '<img src="https://source.unsplash.com/700x400/?meal" alt="Random dish image">';
    } else{
        alert('Inserisci almeno 2 ingredienti');
    }
});