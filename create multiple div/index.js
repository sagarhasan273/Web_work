function createDiv() {
    var div = document.querySelector(".container");
    const element = document.createElement('div');
    element.classList.add('array');
    div.appendChild(element);
}


// Get the box element
var array = document.querySelector('.array');
var box = document.querySelector('.boxes');
console.log(array.offsetTop, array.offsetLeft, box.offsetTop, box.offsetLeft);
// Set the initial position of the box
var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
array.addEventListener('mousedown', dragMouseDown);

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.addEventListener('mouseup', closeDragElement);
    // call a function whenever the cursor moves:
    document.addEventListener('mousemove', elementDrag);
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    array.style.top = (array.offsetTop - pos2) + "px";
    array.style.left = (array.offsetLeft - pos1) + "px";
}

function distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

// Example usage:
// dist = 5

function closeDragElement() {
    // const dist = distance(array.offsetTop, array.offsetLeft, box.offsetTop, box.offsetLeft);
    // if (dist < 20) {
    //     array.style.top = (box.offsetTop - pos2) + "px";
    //     array.style.left = (box.offsetLeft - pos1) + "px";
    // }
    // stop moving when mouse button is released:
    document.removeEventListener('mouseup', closeDragElement);
    document.removeEventListener('mousemove', elementDrag);
}