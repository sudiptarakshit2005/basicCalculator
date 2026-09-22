let display = document.getElementById("display");

function appendtodisplay(value) {
    display.value += value;
}

function calculate() {
    display.value = eval(display.value);
}

function cleardisplay() {
    display.value = "";
}