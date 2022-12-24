let height = 0;

height = parseInt(prompt("Please enter height"));

if (height !== height) {
    alert("You have entered not a number. Please try again.");
}

else if (height <= 0) {
    alert("Height cannot be less than 0");
}

else {
    for (let i = 0; i < height; i++) {
            console.log("*".repeat(i+1));
    }
}