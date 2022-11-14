const text = prompt("Введите текст");
alert(text);

const numb1 = prompt(`Введите первое число`);
const numb2 = prompt(`Введите второе число`);
const numb3 = prompt(`Введите третье число`);
console.log(Number(numb1) + Number(numb2) + Number(numb3))

const userName = prompt(`Введите имя пользователя`)
const age = prompt(`Ваш возраст`)
if (age >= 18) {
    alert (`Добро пожаловать, ${userName}`)
} else {
    alert (`Доступ пользователю ${userName} закрыт`)
}