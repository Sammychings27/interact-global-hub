let target = 14000;
let current = 1;

let counter = setInterval(() => {
    document.getElementById("counter").textContent = "+" + current;

    if (current >= target) {
        clearInterval(counter); // stop at +14000
    }

    current++;
}, 5); // speed (increase number for slower, decrease for faster)


// Light/Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
