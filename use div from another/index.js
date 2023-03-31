function load_js() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = 'index.js';
    head.appendChild(script);
}
var doc = null;

const parser = new DOMParser();
doc = parser.parseFromString("array.html", 'text/html');

function showSection(event, id1, id2) {

    var sections = document.getElementsByClassName('array-section');
    console.log(sections);
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    sections[0].classList.add('active');
    // load_js();
    const div = doc.querySelector('#myDiv');
    const targetDiv = document.querySelector('#target-div');
    targetDiv.appendChild(div);

    // Get the position of the div
    const rect = div.getBoundingClientRect();
    console.log(rect);
}