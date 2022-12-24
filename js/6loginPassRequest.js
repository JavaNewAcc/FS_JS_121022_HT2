const PASS = "12345";
const LOGIN = "admin";
let userLogin = "";
let userPass = "";
let maxAttempts = 3;
let attempts = 0;

while (attempts < maxAttempts) {
    attempts++;
    userLogin = prompt("Attempt " + attempts + " of " + maxAttempts + ". " +
        "Please enter your login");

    if (userLogin == null || userLogin == "") {
        break;
    }

    userPass = prompt("Attempt " + attempts + " of " + maxAttempts + ". " + "Please enter your password");

    if (userPass == null || userPass == "") {
        break;
    }

    else {
        if (userLogin == LOGIN && userPass == PASS) {
            alert("Вітаємо в системі");
            break;
        }
        else {
            alert("Ви ввели невірний логін чи пароль. Спробуйте ще раз.")
        }

        if (attempts == maxAttempts) { alert("Ви ввели неправильний пароль " + attempts + " раз. Спробуйте ще через 5 хвилин.") }
    }
}