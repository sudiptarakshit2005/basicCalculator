let display = document.getElementById("display");

let score = 0;

let history = [];


// Add number to display
function appendtodisplay(value) {

    display.value += value;

}


// Clear
function clearDisplay() {

    display.value = "";

    document.getElementById("message").innerHTML = "Ready!";

}


// Delete last character
function deleteLast() {

    display.value = display.value.slice(0, -1);

}


// Calculate
function calculate() {

    let answer = display.value;


    // Nothing entered
    if (answer == "") {

        document.getElementById("message").innerHTML =
            "Please enter a calculation";

        score--;

        showScore();

        return;
    }


    // Divide by zero
    if (answer.includes("/0")) {

        document.getElementById("message").innerHTML =
            "Cannot divide by zero!";

        score--;

        showScore();

        return;
    }


    // Calculate answer
    let result = eval(answer);


    // Show result
    display.value = result;


    // Increase score
    score++;

    showScore();


    // Smart message
    if (result > 0) {

        document.getElementById("message").innerHTML =
            "Positive result 😊";

    }
    else if (result < 0) {

        document.getElementById("message").innerHTML =
            "Negative result ⚠️";

    }
    else {

        document.getElementById("message").innerHTML =
            "Result is zero 😐";

    }


    // Add to history
    history.push(answer + " = " + result);


    // Only keep 5
    if (history.length > 5) {

        history.shift();

    }


    // Show history
    document.getElementById("history").innerHTML =
        history.join("<br>");

}


// Show score
function showScore() {

    document.getElementById("score").innerHTML = score;

}