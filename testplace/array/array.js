var pos1 = 0,
    pos2 = 0,
    pos2 = 0,
    pos3 = 0,
    index = 0,
    array_size = 0;
const array = new Array(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
var element = null;
var div_create = null;

var slots = document.querySelector(".slots");
var slots_pos = slots.getBoundingClientRect();

var value = document.getElementById("value");
const slots_arrayClass = new Array();;
const slots_arrayPos = new Array();

for (let i = 0; i < 15; i++) {
    let slt = ".slot" + i;
    slots_arrayClass.push(document.querySelector(slt));
    slots_arrayPos.push(slots_arrayClass[i].getBoundingClientRect());
    var p = document.createElement('p');
    p.classList.add("value");
    slots_arrayClass[i].appendChild(p);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomInt(1, 10);

function arrayContainerUpdate(update_array) {
    for (let i = 0; i < update_array.length; i++) {
        if (update_array[i] == null) {
            break;
        }
        slots_arrayClass[i].style.color = "black";
        slots_arrayClass[i].style.backgroundColor = "green";
        var text = slots_arrayClass[i].querySelector(".value");
        text.textContent = update_array[i];
    }

}

function createDiv() {

    div_create = document.getElementById('create-div');
    div_create.style.display = "none";

    element = document.createElement('div');
    element_pos = element.getBoundingClientRect();
    element.classList.add('box');
    element.style.position = "absolute";

    slots.appendChild(element);

    randomNumber = getRandomInt(1, 500);
    if (value.value == "") {
        value.value = randomNumber;
    }
    var p = document.createElement('p');
    p.classList.add("pera");
    p.innerHTML = value.value;
    p.style.padding = "auto";

    element.appendChild(p);
    element.addEventListener("mousedown", dragMouseMove);
}

function dragMouseMove(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;

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
    const newArray = new Array();
    for (let i = 0; i < array_size; i++) {
        newArray.push(array[i]);
    }
    for (let i = 0; i < array_size + 1; i++) {
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
        slots_arrayClass[array_size].style.color = "black";
        slots_arrayClass[array_size].style.backgroundColor = "green";

        newArray.splice(index, 0, value.value);
    }
    arrayContainerUpdate(newArray);
}


function slotsSetOnChange() {
    if (element == null) {
        return;
    }
    var xs, ys;
    for (let i = 0; i < 15; i++) {
        xs = slots_arrayPos[i].left - slots_pos.left;
        ys = slots_arrayPos[i].top - slots_pos.top;
        console.log(element.offsetLeft, element.offsetTop, xs, ys, slots_arrayPos[i].left, slots_arrayPos[i].top);
        if (distance(element.offsetLeft, element.offsetTop, xs, ys) < 25) {
            element.style.top = "27.5" + "px";
            element.style.left = xs + "px";
            element.style.zIndex = -1;
            element = null;

            const newArray = new Array();
            for (let i = 0; i < array_size; i++) {
                newArray.push(array[i]);
            }
            newArray.splice(i, 0, value.value);

            array_size += 1;
            for (let i = 0; i < array_size; i++) {
                array[i] = newArray[i];
            }
            arrayContainerUpdate(array);
            value.value = "";

            div_create.style.display = "block";
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