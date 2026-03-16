let target = 14000;
let current = 1;

let counter = setInterval(() => {
    document.getElementById("counter").textContent = "+" + current;

    if (current >= target) {
        clearInterval(counter); // stop at +14000
    }

    current++;
}, 100); // medium speed
