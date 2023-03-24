// Get the box element
var box = document.querySelector('.box');
var box1 = document.querySelector('.box1');
console.log(box1.offsetTop, box1.offsetLeft, box.offsetTop, box.offsetLeft);
console.log("YES");
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

function distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

// Example usage:
// dist = 5

function closeDragElement() {
    const dist = distance(box1.offsetTop, box1.offsetLeft, box.offsetTop, box.offsetLeft);
    if (dist < 100) {
        box.style.top = "350";
        box.style.left = "0";
        console.log(dist, box.offsetTop, box.offsetLeft);
        box.style.top = (box1.offsetTop - pos2) + "px";
        box.style.left = (box1.offsetLeft - pos1) + "px";
    }
    // stop moving when mouse button is released:
    document.removeEventListener('mouseup', closeDragElement);
    document.removeEventListener('mousemove', elementDrag);
}