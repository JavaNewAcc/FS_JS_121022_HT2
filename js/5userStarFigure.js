let width = 0;
let height = 0;

width = parseInt(prompt("Please enter width"));
height = parseInt(prompt("Please enter height"));

if (width !== width || height !== height) {
    alert("You have entered not a number. Please try again.");
}

else if (width <= 0 || height <= 0) {
    alert("Width and height cannot be less than 0");
}

else {
    for (let i = 0; i < height; i++) {
            console.log("*".repeat(width));
    }
}