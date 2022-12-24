let amountDue = -0.01;

while (amountDue < 0 || amountDue != amountDue) {
    amountDue = parseFloat(prompt("Please amount due for payment (in format 0.00)"));
    if (amountDue < 0) {
        alert("Amount due for payment cannot be below 0");
    }

    else if (amountDue != amountDue) {
        alert("You entered not a number. Please try again.");
    }

    else {
        if (amountDue < 100) {
            alert(`У Вас немає знижки. До сплати ${amountDue}`);
        }
        else if (amountDue >= 100 && amountDue < 3000) { alert(`Ваша знижка складає 3%. До сплати ${amountDue * 0.97}`); }
        else if (amountDue >= 3000 && amountDue < 10000) { alert(`Ваша знижка складає 5%. До сплати ${amountDue * 0.95}`); }
        else if (amountDue >= 10000) { alert(`Ваша знижка складає 7%. До сплати ${amountDue * 0.93}`); }
    }
}

