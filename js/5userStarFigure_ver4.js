let height = 0;

height = parseInt(prompt("Please enter height"));
halfHeight = parseInt(height / 2);

if (height !== height) {
    alert("You have entered not a number. Please try again.");
}

else if (height <= 0) {
    alert("Height cannot be less than 0");
}

else if (height <= 2) {
    alert("It is impossible to build rhombus with such a small height.")
}

else {
    if (height % 2 == 0) {
        for (let i = 0; i < halfHeight; i++) {
            console.log(" ".repeat((halfHeight - 1) - i) + "*".repeat(i + 1) + "*".repeat(i));
        }
        for (let j = halfHeight; j > 0; j--) {
            console.log(" ".repeat(halfHeight - j) + "*".repeat(j-1)+"*".repeat(j));
        }
    }
    else{
        for (let i = 0; i < (halfHeight+1); i++) {
            console.log(" ".repeat((halfHeight+1) - i) + "*".repeat(i + 1) + "*".repeat(i));
        }
        for (let j = halfHeight; j > 0; j--) {
            console.log(" ".repeat(halfHeight+2 - j) + "*".repeat(j-1)+"*".repeat(j));
        }
    }
}