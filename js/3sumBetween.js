let startNum = 0;
let endNum = 0;
let res = 0;
let i = 0;

startNum = parseInt(prompt("Please enter the first number"));
endNum = parseInt(prompt("Please enter the second number"));

if (startNum !== startNum || endNum !== endNum) {
    alert("You have entered not a number. Please try again.")
}
else if (startNum == endNum) {
    alert("Both numbers are the same. It is impossible to calculate summ. Please try again.")
}
else if (startNum > endNum) {
    alert("The first number has to be less than the second number. Please try again.")
}

else {
    for (i = startNum; i <= endNum; i++) {
        res += i;
    }
    console.log("The sum of figures between " + startNum + " and " + endNum + " is: " + res);
}