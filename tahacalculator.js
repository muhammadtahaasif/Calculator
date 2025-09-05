let screen = document.getElementById("screen")

function append(value) {
    if (screen.innerText === "0") {
        screen.innerText = value;
    } else {
        screen.innerText += value;
    }
}
function clearScreen() {
    screen.innerText = "0";
}
function backspace() {
    screen.innerText = screen.innerText.slice(0, -1);
    if (screen.innerText.length === 0) screen.innerText = "0";
}
function calculate() {
    try {
        let result = eval(screen.innerText);
        screen.innerText = result;
    } catch (e) {
        screen.innerText = "Error";
    }
}

