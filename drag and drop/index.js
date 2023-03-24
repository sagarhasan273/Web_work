// Get the box element
var box = document.querySelector('.box');

// Set the initial position of the box
var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
box.addEventListener('mousedown', dragMouseDown);

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
    box.style.top = (box.offsetTop - pos2) + "px";
    box.style.left = (box.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    // stop moving when mouse button is released:
    document.removeEventListener('mouseup', closeDragElement);
    document.removeEventListener('mousemove', elementDrag);
}