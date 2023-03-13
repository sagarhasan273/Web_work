const floatingObject = document.getElementById("floating-object");

floatingObject.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    floatingObject.style.left = `${x}px`;
    floatingObject.style.top = `${y}px`;
});