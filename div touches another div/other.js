fetch('./other.html')
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const div = doc.querySelector('.other-div');
        const div1 = doc.querySelector('.div2');

        const targetDiv = document.querySelector('#target-div');

        targetDiv.appendChild(div);
        targetDiv.appendChild(div1);

        const h1 = document.querySelector(".slot0");
        const hrect = h1.getBoundingClientRect();
        console.log(hrect);

        const rect = div.getBoundingClientRect();
        // console.log(rect);
        helloWorld();

        function helloWorld() {
            console.log("Hello World!");
        }
    });