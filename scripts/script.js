const formElem = document.querySelector('.workers_form');

let workersArr = [];

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
});