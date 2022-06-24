const formElem = document.querySelector('.workers_form');

let workersArr = [];

const cardsRender = () => {
    const cardsContainer = document.querySelector('.cards_container');
    cardsContainer.innerText = '';
    workersArr.forEach(({name, lastname, age}) => {
        const container= document.createElement('div');
        const nameElem = document.createElement('p');
        const lastnameElem = document.createElement('p');
        const ageElem = document.createElement('p');
        nameElem.innerText = `First  name: ${name}`;
        lastnameElem.innerText = `Lastname: ${lastname}`;
        ageElem.innerText = `Age: ${age}`;
        container.append(nameElem, lastnameElem, ageElem);
        cardsContainer.append(container);
    });
}

formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    const { name, lastname, age } = event.target; //this(если обычная функция)
    workersArr.push({
        name: name.value,
        lastname: lastname.value,
        age: age.value
    });
    name.value = '';
    lastname.value = '';
    age.value = '';
    cardsRender();
});