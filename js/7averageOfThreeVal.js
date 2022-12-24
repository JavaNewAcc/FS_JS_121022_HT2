let numFirst = "";
let numSecond = "";
let numThird = "";

let res = 0;

while (numFirst != numFirst || numFirst == "") {
    numFirst = parseFloat(prompt("Please enter first value"));
    if (numFirst != numFirst) {
        alert("You have entered not a number. Please try again");
    }
}

while (numSecond != numSecond || numSecond == "") {
    numSecond = parseFloat(prompt("Please enter second value"));
    if (numSecond != numSecond) {
        alert("You have entered not a number. Please try again");
    }
}


while (numThird != numThird || numThird == "") {
    numThird = parseFloat(prompt("Please enter third value"));
    if (numThird != numThird) {
        alert("You have entered not a number. Please try again");
    }
}

res = (numFirst + numSecond + numThird) / 3;
console.log("You have entered: " + numFirst + ", " + numSecond + " and " + numThird + ". Calculated average value is: " + res)