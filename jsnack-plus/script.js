const ulElement = document.querySelector('ul');

function createElement(tagName){
    const liElement = document.createElement(tagName);
    liElement.innerHTML += 'ciao';
    // className.classList.add('deleted');
    return liElement;

}

for(let i = 0; i < 10; i++){
    const actualElement = createElement('li');
    actualElement.addEventListener('click', function(){
        actualElement.classList.toggle('deleted');
    });

    ulElement.appendChild(actualElement);

  

}