// 1. Напишіть скрипт всередині HTML-документу, який виводить на екран ваше ім'я за допомогою функції alert().

// 2. 
// Напишіть скрипт в зовнішньому файлі, який виводить в консоль ваше прізвище.
// Підключіть створений файл до HTML-документу.
console.log('-----2-----');

console.log('Pinchuk');

// 3.
//   a) оголосіть дві змінні;
//   b) запишіть у змінні будь-які значення;
//   c) виведіть на екран значення змінних;
//   d) скопіюйте значення однієї змінної в іншу;
//   e) виведіть на екран значення змінних.
console.log('-----3-----');

let frstName = 'Stepan';
let lstName = 'Bandera';

console.log(frstName);
console.log(lstName);

lstName = frstName;

console.log(frstName);
console.log(lstName);

// 4. 
// Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
console.log('-----4-----');

const dataType = {
    'String': 'string',
    'Number': 2,
    'Boolean': true,
    'Undefined': undefined,
    'Null': null
}
console.log(dataType);

// 5. 
// Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.
console.log('-----5-----');

const isAdult = confirm('Вам вже виповнилось 18 років?');
console.log(isAdult);

// 6. 
// В зовнішньому файлі напишіть скрипт , в якому оголосіть змінні, для збереження таких даних:
//         - ваше ім’я
//         - ваше прізвище
//         - навчальна група
//         - ваш рік народження.
// Присвойте змінним відповідні значення. 
// Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
// Визначте тип кожної змінної.
// Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
// Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
console.log('-----6-----');

const firstName = 'Petro';
const lastName = 'Pinchuk';
const trainingGroup = 749;
const birthYear = 1994;
const isMarried = false;

console.log(typeof trainingGroup === "number" ? trainingGroup : "");
console.log(typeof birthYear === "number" ? birthYear : "");
console.log(typeof isMarried === "boolean" ? isMarried : "");
console.log(typeof firstName === "string" ? firstName : "");
console.log(typeof lastName === "string" ? lastName : "");

const isUndefined = undefined;
const isNull = null;

console.log(typeof isUndefined === "undefined" ? isUndefined : "");
console.log(typeof isNull === "object" ? isNull : "");


// 7. 
// За допомогою функції prompt() напишіть скрипт , який послідовно запитує в користувача логін, імейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.
console.log('-----7-----');

const login = prompt('Введіть будь ласка ваш логін');
const email = prompt('Введіть будь ласка ваш email');
const password = prompt('Введіть будь ласка ваш пароль');

console.log(`Dear User, your email is '${email}', your login is '${login}' your password is '${password}'`);

// 8. 
// Напишіть скрипт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
console.log('-----8-----');

let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInDay * 30;

console.log(`Кількість секунд в годині: '${secondsInHour}'. Кількість секунд в добі: '${secondsInDay}'. Кількість секунд в місяці: '${secondsInMonth}'`);
