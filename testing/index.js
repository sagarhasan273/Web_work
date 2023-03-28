var pos1 = 0,
    pos2 = 0,
    pos2 = 0,
    pos3 = 0,
    index = 0,
    array_size = 0;
const array = new Array(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
console.log(array);
var element = null;
var div_create = null;

var slots = document.querySelector(".slots");
var slots_pos = slots.getBoundingClientRect();
const slots_arrayClass = new Array();;
const slots_arrayPos = new Array();

for (let i = 0; i < 15; i++) {
    let slt = ".slot" + i;
    slots_arrayClass.push(document.querySelector(slt));
    slots_arrayPos.push(slots_arrayClass[i].getBoundingClientRect());
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomInt(1, 10);

function createDiv() {
    var container = document.querySelector(".slots");

    var value = document.getElementById("value");
    div_create = document.getElementById('create-div');
    div_create.style.display = "none";

    element = document.createElement('div');
    element_pos = element.getBoundingClientRect();
    element.classList.add('box');
    element.style.position = "absolute";

    container.appendChild(element);

    randomNumber = getRandomInt(1, 500);

    var p = document.createElement('p');
    p.classList.add("pera");
    p.innerHTML = randomNumber;
    p.style.padding = "auto";

    element.appendChild(p);
    element.addEventListener("mousedown", dragMouseMove);
}

function dragMouseMove(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;

    slotsColorChange();

    document.addEventListener('mouseup', closeMouseElement);
    document.addEventListener('mousemove', mouseMove);
}

function distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

var sloted = new Set();

function slotsColorChange() {
    if (element == null) {
        return;
    }
    var xs, ys, index, flag;

    for (let i = 0; i < 15; i++) {
        xs = slots_arrayPos[i].left - slots_pos.left;
        ys = slots_arrayPos[i].top - slots_pos.top;
        if (distance(element.offsetLeft, element.offsetTop, xs, ys) < 25) {
            index = i;
        } else if (array_size <= i) {
            slots_arrayClass[i].style.color = "black";
            slots_arrayClass[i].style.backgroundColor = "black";
        }
    }

    if (array_size <= index) {
        slots_arrayClass[index].style.color = "red";
        slots_arrayClass[index].style.backgroundColor = "red";
    } else if (array_size > index) {
        slots_arrayClass[array_size].style.color = "green";
        slots_arrayClass[array_size].style.backgroundColor = "green";
    }
}


function slotsSetOnChange() {
    if (element == null) {
        return;
    }
    var xs, ys;
    for (let i = 0; i < 15; i++) {
        xs = slots_arrayPos[i].left - slots_pos.left;
        ys = slots_arrayPos[i].top - slots_pos.top;
        if (distance(element.offsetLeft, element.offsetTop, xs, ys) < 25 && !sloted.has(i)) {
            element.style.top = "27.5" + "px";
            element.style.left = xs + "px";
            sloted.add(i);
            div_create.style.display = "block";
            element.style.zIndex = -1;
            element = null;

            slots_arrayClass[i].style.color = "black";
            slots_arrayClass[i].style.backgroundColor = "green";
            p = document.createElement('p');
            p.classList.add("value");
            var value = document.getElementById("value");
            value.value = randomNumber;
            p.innerHTML = value.value;
            array[i] = value.value;
            slots_arrayClass[i].appendChild(p);

            array_size += 1;
            value.value = "";
            break;
        }
    }
}

function mouseMove(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    slotsColorChange();
    if (element == null) {
        return;
    }
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
}


function closeMouseElement() {
    slotsSetOnChange();
    document.removeEventListener('mouseup', closeMouseElement);
    document.removeEventListener('mousemove', mouseMove);
}