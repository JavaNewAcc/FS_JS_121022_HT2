let startNum = 0;
let endNum = 0;

startNum = parseInt(prompt("Please enter the first number"));
endNum = parseInt(prompt("Please enter the second number"));

if (startNum !== startNum || endNum !== endNum) {
    alert("You have entered not a number. Please try again.")
}
else if (startNum == endNum) {
    alert("Both numbers are the same. It is impossible to print any number between them. Please try again.")
}
else if (startNum < endNum) {
    alert("For reverse print the first number has to be bigger than the second number. Please try again.")
}

else {
    for (let i = startNum; i >= endNum; i--) {
        console.log(i);
    }
}