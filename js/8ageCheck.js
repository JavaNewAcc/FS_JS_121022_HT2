let userAge = -1;
let checkRes = false;

while (userAge <= 0 || userAge != userAge) {
    userAge = parseFloat(prompt("Please enter your age"));
    if (userAge <= 0) {
        alert("User age cannot be below or equal to 0");
    }

    else if (userAge != userAge) {
        alert("You entered not a number. Please try again.");
    }
}

userAge >= 18 ? checkRes = true : checkRes = false;

console.log(checkRes);
