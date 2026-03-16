let target = 159;
let current = 1;

let counter = setInterval(() => {
    document.getElementById("counter2").textContent = "+" + current;

    if (current >= target) {
        clearInterval(counter); // stop at +159
    }

    current++;
}, 15); // medium speed
