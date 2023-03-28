// Get a reference to the box element
const box = document.getElementById("box");

// Add event listeners for mouse enter and leave
box.addEventListener("mouseenter", () => {
    // Move the box to the left
    box.style.left = "50px";
});

box.addEventListener("mouseleave", () => {
    // Move the box back to its original position
    box.style.left = "100px";
});