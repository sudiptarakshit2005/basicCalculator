let display = document.getElementById("display");

let score = 0;

let history = [];



function appendtodisplay(value) {

   display.value = display.value + value;

}



function clearDisplay() {

    display.value = "";

    document.getElementById("message").innerHTML = "Ready!";

}



function deleteLast() {

    display.value = display.value.slice(0, -1);

}



function calculate() {

    let answer = display.value;


  
    if (answer == "") {

        document.getElementById("message").innerHTML =
            "Please enter a calculation";

        score--;

        showScore();

        return;
    }



    if (answer.includes("/0")) {

        document.getElementById("message").innerHTML =
            "Cannot divide by zero!";

        score--;

        showScore();

        return;
    }



    let result = eval(answer);



    display.value = result;


    score++;

    showScore();


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


   
    history.push(answer + " = " + result);


  
    if (history.length > 5) {

        history.shift();

    }


   
    document.getElementById("history").innerHTML =
        history.join("<br>");

}



function showScore() {

    document.getElementById("score").innerHTML = score;

}