// 1. Напишіть скрипт всередині HTML-документу, який виводить на екран ваше ім'я за допомогою функції alert().

console.log('---------------2-----------------');

console.log('Pinchuk');


console.log('---------------3---------------');

let frstName = 'Stepan';
let lstName = 'Bandera';

console.log(frstName);
console.log(lstName);

lstName = frstName;

console.log(frstName);
console.log(lstName);

console.log('---------------4---------------');

const dataType = {
    'String': 'string',
    'Number': 2,
    'Boolean': true,
    'Undefined': undefined,
    'Null': null
}
console.log(dataType);

console.log('---------------5---------------');

const isAdult = confirm('Вам вже виповнилось 18 років?');
console.log(isAdult);

console.log('---------------6---------------');

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


console.log('---------------7---------------');

const login = prompt('Введіть будь ласка ваш логін');
const email = prompt('Введіть будь ласка ваш email');
const password = prompt('Введіть будь ласка ваш пароль');

console.log(`Dear User, your email is '${email}', your login is '${login}' your password is '${password}'`);

console.log('---------------8---------------');

let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInDay * 30;

console.log(`Кількість секунд в годині: '${secondsInHour}'. Кількість секунд в добі: '${secondsInDay}'. Кількість секунд в місяці: '${secondsInMonth}'`);




console.log('-************-@@@@@@@@-----Додаткове завдання-----@@@@@@@@-************-');


function getPlatzkartInfo(placeNumber) {
    const coupeNumber = Math.ceil(placeNumber / 6); // номер купе
    const isSidePlace = placeNumber % 3 === 1 || placeNumber % 3 === 0; // чи є місце бічним
    const isUpperPlace = placeNumber % 2 === 0; // чи є місце верхнім

    const message = `
        Ваше місце знаходиться в 'купе № ${coupeNumber}'
        - ${isSidePlace ? 'місце бічне' : 'біля вікна'}
        - ${isUpperPlace ? 'верхнє' : 'нижнє'}
    `;
    console.log(message);
    alert(message);
  }

  let placeNumber = prompt('Введіть номер квитка');
  getPlatzkartInfo(placeNumber);
