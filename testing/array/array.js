var doc = null;
var pos1 = 0,
    pos2 = 0,
    pos2 = 0,
    pos3 = 0,
    index = 0,
    array_size = 0;

var element = null;
var div_create = null;
var slots = null;
var slots_pos = null;
var value = null;
var array = null;


var slots_arrayClass = null;
var slots_arrayPos = null;
slots_arrayClass = new Array();
slots_arrayPos = new Array();
array = new Array();

function reset() {
    doc = null;
    pos1 = 0;
    pos2 = 0;
    pos2 = 0;
    pos3 = 0;
    index = 0;
    array_size = 0;
    value = null;
    const allslots = document.querySelectorAll(".slot");
    for (let i = 0; i < 15; i++) {
        let slt = "slot" + i;
        if (allslots[i].classList.contains(slt)) {
            allslots[i].querySelector(".value").remove();
            allslots[i].classList.remove(slt);
        }
    }
    if (element)
        element.style.display = "none";
    if (div_create)
        div_create.style.display = "block";
    array = null;
    element = null;
    div_create = null;
    array = new Array();
    slots_arrayClass = new Array();
    slots_arrayPos = new Array();
    arrayContainerUpdate(array);
}



fetch('./array/array.html')
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        doc = parser.parseFromString(html, 'text/html');
        const div = doc.querySelector('.container_array');

        const div1 = doc.querySelector('.footer_array');

        const targetDiv = document.querySelector('#array-section');

        targetDiv.appendChild(div);
        targetDiv.appendChild(div1);


        slots = document.querySelector(".slots");
        slots_pos = slots.getBoundingClientRect();
    });

function createDiv() {
    div_create = document.getElementById('create-div');
    div_create.style.display = "none";

    element = document.createElement('div');
    element_pos = element.getBoundingClientRect();
    element.classList.add('box');
    element.style.position = "absolute";

    const allslots = document.querySelectorAll(".slot");
    let i = array.length;
    let slt = "slot" + i;
    allslots[i].classList.add(slt);
    slots_arrayClass.push(document.querySelector(".slot" + i));
    slots_arrayPos.push(slots_arrayClass[i].getBoundingClientRect());
    var p = document.createElement('p');
    p.classList.add("value");
    slots_arrayClass[i].appendChild(p);


    slots.appendChild(element);
    value = document.getElementById("value");
    randomNumber = getRandomInt(1, 500);
    if (value.value == "") {
        value.value = randomNumber;
    }
    var p = document.createElement('p');
    p.classList.add("pera");
    p.innerHTML = value.value;
    p.style.padding = "auto";

    update_slots_position(1);
    element.appendChild(p);
    element.addEventListener("mousedown", dragMouseMove);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomInt(1, 10);

function update_slots_position(t) {
    slots = document.querySelector(".slots");
    slots_pos = slots.getBoundingClientRect();
    for (let i = 0; i < array_size + t; i++) {
        slots_arrayPos[i] = document.querySelector(".slot" + i).getBoundingClientRect();
    }
}

function arrayContainerUpdate(update_array) {
    for (let i = 0; i < update_array.length; i++) {
        if (update_array[i] == null) {
            slots_arrayClass[i].style.color = "black";
            slots_arrayClass[i].style.backgroundColor = "black";
            continue;
        }
        slots_arrayClass[i].style.color = "black";
        slots_arrayClass[i].style.backgroundColor = "green";
        var text = slots_arrayClass[i].querySelector(".value");
        text.textContent = update_array[i];
    }

}


function dragMouseMove(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    update_slots_position();
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
    const output = document.querySelector(".output_code_array");
    for (let i = 0; i < array_size + 1; i++) {
        xs = slots_arrayPos[i].left - slots_pos.left;
        ys = slots_arrayPos[i].top - slots_pos.top;
        update_slots_position(1);
        if (distance(element.offsetLeft, element.offsetTop - 30, xs, ys) < 25) {
            index = i;
        } else if (array_size <= i) {
            slots_arrayClass[i].style.color = "black";
            slots_arrayClass[i].style.backgroundColor = "black";
            output.innerHTML = "";
        }
    }

    if (array_size <= index) {
        slots_arrayClass[index].style.color = "red";
        slots_arrayClass[index].style.backgroundColor = "red";
        output.innerHTML = "array.append(" + value.value + ")";
    } else if (array_size > index) {
        slots_arrayClass[array_size].style.color = "black";
        slots_arrayClass[array_size].style.backgroundColor = "black";
        output.innerHTML = "array.insert(" + index + ", " + value.value + ")";
        newArray.splice(index, 0, value.value);
    }
    arrayContainerUpdate(newArray);
}


function slotsSetOnChange() {
    if (element == null) {
        return;
    }
    var xs, ys;
    for (let i = 0; i < array.length + 1; i++) {
        xs = slots_arrayPos[i].left - slots_pos.left;
        ys = slots_arrayPos[i].top - slots_pos.top;

        update_slots_position(1);
        if (distance(element.offsetLeft, element.offsetTop - 30, xs, ys) < 25) {
            element.style.top = "27.5" + "px";
            element.style.left = xs + "px";
            element.style.display = "none";
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