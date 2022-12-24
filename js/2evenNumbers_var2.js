let startNum = 0;
let endNum = 0;

startNum = parseFloat(prompt("Please enter the first number"));
endNum = parseFloat(prompt("Please enter the second number"));

if (startNum !== startNum || endNum !== endNum) {
    alert("You have entered not a number. Please try again.")
}
else if (startNum == endNum) {
    alert("Both numbers are the same. There are no even numbers between them. Please try again.")
}
else if (startNum > endNum) {
    alert("The first number has to be less than the second number. Please try again.")
}

else {
    for (i = startNum; i <= endNum; i++) {
        if (i == 0) { continue; }
        else {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    }
}