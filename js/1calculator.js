let firstNmbr = parseFloat(prompt("Please enter your first number:"));
let secondNmbr = parseFloat(prompt("Please enter your second number:"));
let operSign = prompt("Please enter math sign:");
let res = 0;
if (firstNmbr !== firstNmbr || secondNmbr !== secondNmbr) {
    alert("You entered not a number. Please refresh page and try again.");
}
else if (secondNmbr == 0 && operSign == "/") {
    alert("Division by 0.");
    console.log("It is impossible to devide by " + secondNmbr);
}
else {
    if (operSign == "+" || operSign == "-" || operSign == "/" || operSign == "*") {
        if (operSign == "+") {
            res = firstNmbr + secondNmbr;
        }
        else if (operSign == "-") {
            res = firstNmbr - secondNmbr;
        }
        else if (operSign == "/") {
            res = firstNmbr / secondNmbr;
        }
        else if (operSign == "*") {
            res = firstNmbr * secondNmbr;
        }
        console.log("You entered: " + firstNmbr + operSign + secondNmbr + ". The result is: " + res);
    }
    else {
        alert("You have entered unacceptable math sign. Please refresh page and try again.")
    }
}