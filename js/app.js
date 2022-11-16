// Первое задание:

const text = prompt("Введите текст");
alert(text);

// Ворое задание:

const numb1 = prompt(`Введите первое число`);
const numb2 = prompt(`Введите второе число`);
const numb3 = prompt(`Введите третье число`);
console.log(Number(numb1) + Number(numb2) + Number(numb3));

// Третье задание:

const userName = prompt(`Введите имя пользователя`);
const age = prompt(`Ваш возраст`);
if (age >= 18) {
  alert(`Добро пожаловать, ${userName}`);
} else {
  alert(`Доступ пользователю ${userName} закрыт`);
}

// Четвёртое задание:


const block = confirm(`Хотите ввести название блока?`);
if (block === true) {
  blockName = prompt(`Введите имя блока`,);
  const element = confirm(`Хотите ввести название элемента?`);
  if (element === true) {
    const elementName = prompt(`Введите название элемента`);
    const modifier = confirm(`Хотите ввести название модификатора?`);
    if (modifier === true) {
      const modifierName = prompt(`Введите название модификатора`);
      console.log(`${blockName}${elementName}${modifierName}`);
    } else {
      console.log(`${blockName}${elementName}`);
    }
  } else {
    console.log(`${blockName}`);
  }
} else {
  alert(`Элементу не присвоен класс.`);
}

// Пятое задание:

const numb5 = prompt(`Введите первое число`)
const numb51 = prompt(`Введите второе число`)
const operation = prompt(`Выберите операцию`, `div, plus, mult, minus`)
  if (operation === `div`) {
    alert(+numb5 / +numb51)
  } else if (operation === `plus`) {
    alert (+numb5 + +numb51)
  } else if (operation === `mult`) {
    alert (+numb5 * +numb51)
  } else if (operation === `minus`) {
    alert (+numb5 - +numb51)
  }