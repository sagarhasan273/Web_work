const array = [];
const arrayElement = document.querySelector('.array');

function add() {
    const value = document.querySelector('#value').value;
    if (value === '') {
        return;
    }
    array.push(value);
    updateArray();
}

function remove() {
    if (array.length === 0) {
        return;
    }
    array.pop();
    updateArray();
}

function clearAll() {
    array.length = 0;
    updateArray();
}

function insert() {
    const value = document.querySelector('#value').value;
    const index = document.querySelector('#index').value;
    if (value === '' || index === '') {
        return;
    }
    array.splice(index, 0, value);
    updateArray();
}

function removeAt() {
    const index = document.querySelector('#index').value;
    if (index === '') {
        return;
    }
    array.splice(index, 1);
    updateArray();
}

function getValue() {
    const index = document.querySelector('#getValueIndex').value;
    if (index === '') {
        return;
    }
    const value = array[index];
    alert(`Value at index ${index} is ${value}`);
}

function updateArray() {
    arrayElement.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const element = document.createElement('div');
        element.classList.add('element');
        element.innerHTML = "<p> " + i + " " + array[i] + "</p>";
        arrayElement.appendChild(element);
    }
}

// function view() {
//   const arrayWindow = window.open('', 'Array', 'width=800,height=600,top=50,left=50');
//   arrayWindow.document.body.innerHTML = '';
//   const arrayContainer = document.createElement('div');
//   arrayContainer.classList.add('array');
//   for (let i = 0; i < array.length; i++) {
//     const element =