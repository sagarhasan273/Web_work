var pos1 = 0,
    pos2 = 0,
    pos2 = 0,
    pos3 = 0,
    index = 0;

var element = null;
var div_create = null;

function createDiv() {
    var container = document.querySelector(".container");
    element = document.createElement('div');
    element.classList.add('box');
    element.style.position = "absolute";
    div_create = document.getElementById('create-div');
    var p = document.createElement('p');
    p.classList.add("pera");
    var value = document.getElementById("value");
    p.innerHTML = index + "<br>" + value.value;
    index += 1;
    p.style.padding = "auto";
    div_create.style.display = "none";
    value.value = "";

    container.appendChild(element);
    element.appendChild(p);
    element.addEventListener("mousedown", dragMouseMove);
}

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
    if (element == null) {
        document.removeEventListener('mouseup', closeMouseElement);
        document.removeEventListener('mousemove', mouseMove);
        return;
    }
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
}

function distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

var sloted = new Set();

function closeMouseElement() {
    var x = 5;
    for (let i = 0; i < 10; i++) {
        if (element == null) {
            document.removeEventListener('mouseup', closeMouseElement);
            document.removeEventListener('mousemove', mouseMove);
            return;
        }
        var dist = distance((element.offsetTop - pos2), (element.offsetLeft - pos1), 31, x);
        if (dist < 50 && !sloted.has(x)) {
            element.style.top = "5" + "px";
            element.style.left = x + "px";
            sloted.add(x);
            element = null;
            div_create.style.display = "block";
            break;
        }
        x += 60;
    }

    document.removeEventListener('mouseup', closeMouseElement);
    document.removeEventListener('mousemove', mouseMove);
}