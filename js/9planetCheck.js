let planetName = "";

planetName = prompt("Введіть, будь ласка, назву планети Сонячної системи");

switch (planetName) {
    case "Меркурій":
    case "меркурій":
    case "МЕРКУРІЙ":
        console.log("Інформація про Меркурій у Wikipedia: https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%80%D0%BA%D1%83%D1%80%D0%B8%D0%B9");
        break;
    case "Венера":
    case "венера":
    case "ВЕНЕРА":
        console.log("Інформація про Венеру у Wikipedia: https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BD%D0%B5%D1%80%D0%B0");
        break;
    case "Земля":
    case "земля":
    case "ЗЕМЛЯ":
        console.log("Інформація про Землю у Wikipedia: https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BC%D0%BB%D1%8F");
        break;
    case "Марс":
    case "марс":
    case "МАРС":
        console.log("Інформація про Марс у Wikipedia: https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D1%81");
        break;
    case "Юпітер":
    case "юпітер":
    case "ЮПІТЕР":
        console.log("Інформація про Юпітер у Wikipedia: https://ru.wikipedia.org/wiki/%D0%AE%D0%BF%D0%B8%D1%82%D0%B5%D1%80");
        break;
    case "Сатурн":
    case "сатурн":
    case "САТУРН":
        console.log("Інформація про Сатурн у Wikipedia: https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%82%D1%83%D1%80%D0%BD");
        break;
    case 'Уран':
    case 'уран':
    case 'УРАН':
        console.log("Інформація про Уран у Wikipedia: https://ru.wikipedia.org/wiki/%D0%A3%D1%80%D0%B0%D0%BD_(%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B0)");
        break;
    case "Нептун":
    case "нептун":
    case "НЕПТУН":
        console.log("Інформація про Нептун у Wikipedia: https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%BF%D1%82%D1%83%D0%BD");
        break;
    default: console.log("Ви ввели невірну назву планути. Спробуйте ще раз.")

}