let b = 0;
var t = b.toString();
var box = document.querySelector('.box' + t);
box.addEventListener("mousedown", dragMouseMove);

var pos1 = 0,
    pos2 = 0,
    pos2 = 0,
    pos3 = 0;

function dragMouseMove(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    console.log(pos1, pos2);
    document.addEventListener('mouseup', closeMouseElement);
    document.addEventListener('mousemove', mouseMove);
}

function mouseMove(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    box.style.top = (box.offsetTop - pos2) + "px";
    box.style.left = (box.offsetLeft - pos1) + "px";
    console.log((box.offsetTop - pos2), (box.offsetLeft - pos1));
}

function distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

function closeMouseElement() {
    var x = 5;
    for (let i = 0; i < 10; i++) {
        var dist = distance((box.offsetTop - pos2), (box.offsetLeft - pos1), 31, x);
        if (dist < 50) {
            box.style.top = "5" + "px";
            box.style.left = x + "px";
        }
        x += 60;
    }

    document.removeEventListener('mouseup', closeMouseElement);
    document.removeEventListener('mousemove', mouseMove);
}

function createDiv() {
    var container = document.querySelector(".container");
    var element = document.createElement('div');
    var text = b.toString();
    var div = "box" + text;
    console.log(div);
    element.classList.add(div);
    element.innerHTML = 5;
    container.appendChild(element);
    b += 1
}