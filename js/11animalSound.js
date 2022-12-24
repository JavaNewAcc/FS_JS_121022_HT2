let animalSound = "";

animalSound = prompt("Введіть назву твариниа, щоб дізнатсь який зву вона видає");

switch (animalSound) {
    case "кіт":
    case "Кіт":
    case "кішка":
    case "Кішка":
    case "кошеня":
    case "Кошеня":
    case "коти":
    case "Коти":
        (console.log(`${animalSound} видає такий звук: Мяу-мяу`));
        break;
    case "собака":
    case "Собака":
    case "собачка":
    case "Собачка":
    case "пес":
    case "Пес":
    case "песик":
    case "Песик":
        (console.log(`${animalSound} видає такий звук: Гав-гав`));
        break;
    case "корова":
    case "Корова":
    case "корівка":
    case "Корівка":
    case "бик":
    case "Бик":
        (console.log(`${animalSound} видає такий звук: Му-му`));
        break;
    case "коза":
    case "Коза":
    case "козел":
    case "Козел":
    case "козлик":
    case "Козлик":
        (console.log(`${animalSound} видає такий звук: Ме-ме`));
        break;
    case "баран":
    case "Баран":
    case "вівця":
    case "Вівця":
    case "баранчик":
    case "Баранчик":
        (console.log(`${animalSound} видає такий звук: Бе-бе`));
        break;
    case "кінь":
    case "Кінь":
    case "лошадь":
    case "Лошадь":
        (console.log(`${animalSound} видає такий звук: Іго-го`));
        break;
    default: (console.log("На жаль, такої тварини в базі немає"))
}