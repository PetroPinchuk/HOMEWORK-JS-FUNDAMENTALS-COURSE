console.log('--------------------Task 1--------------------');

const numbers = (a, b, c) => a < b && b < c ? true : false;
console.log(numbers(2,3,4));

console.log('--------------------Task 2--------------------');

let x = 1;
let y = 2;

let res1 = x + '' + y; 
console.log(res1);
console.log(typeof res1);

let res2 = true + '' + y;
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = x / 'y';
console.log(res4); 
console.log(typeof res4);

console.log('--------------------Task 3--------------------');

let isAdult = prompt('Ви повнолітні? Скільки Вам років?');
isAdult >= 18 ? console.log('Ви досягли повнолітнього віку') : console.log('Ви ще надто молоді');

console.log('--------------------Task 4--------------------');

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]

let data; // Найбільш повторюване число в масиві
let mf = 1; // Кількість його входжень в масив
let m = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if (arr[i] == arr[j])
        m++;
        if (mf < m) {
            mf = m; 
            data = arr[i];
        }
    }
    m=0;
}

arr = arr.filter(item => item !== data)

console.log('Найбільш повторюване число в масиві: ', data);
console.log('Масив, після визначення найбільш повторюваного числа в масиві: ', arr)


console.log('--------------------Task 5--------------------');

let a = prompt('Введіть довжину першої сторони трикутника (в см)')
let b = prompt('Введіть довжину другої сторони трикутника (в см)')
let c = prompt('Введіть довжину третьої сторони трикутника (в см)')

function triangleArea(a,b,c) {
    let triangleSides = [a, b, c]
    for (let i = 0; i < triangleSides.length; i++) {
        let side = parseInt(triangleSides[i]);
        if (isNaN(side) || side <= 0) {
            console.log('Incorrect data!');
            return false;
        }
    }
    //напівпериметр трикутника
    let p = (a + b + c) / 2; 
    //формула Герона + обрізання результату до 3-х знаків після коми
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3); 
    console.log('Площа трикутника: ', area + ' кв.см');
    
    let hypotenuse = Math.max(a, b, c); //гіпотенуза
    let sumOfSquares = 0; //сума квадратів катетів
    
    if (hypotenuse === a) {
        sumOfSquares = b * b + c * c;
    } else if (hypotenuse === b) {
        sumOfSquares = a * a + c * c;
      } else {
          sumOfSquares = a * a + b * b;
        }
    
        hypotenuse * hypotenuse === sumOfSquares
        ? console.log('Це прямокутний трикутник')
        : console.log('Це не прямокутний трикутник')
    }

    triangleArea(a,b,c);

    
console.log('--------------------Task 6--------------------');

let dateNow = new Date();
let hours = dateNow.getHours();

if (hours >= 23 && hours < 5) {
    console.log('Доброї ночі!')
} else if (hours >= 5 && hours < 11) {
    console.log('Доброго ранку!')
} else if (hours >= 11 && hours < 17) {
    console.log('Доброго дня!')
} else if (hours >= 17 && hours < 23) {
    console.log('Доброго вечора!')
}

switch (true) {
    case (hours >= 23 && hours < 5) :
        console.log('Доброї ночі!');
        break;
    case (hours >= 5 && hours < 11) :
        console.log('Доброго ранку!');
        break;
    case (hours >= 11 && hours < 17) :
        console.log('Доброго дня!');
        break;
    case (hours >= 17 && hours < 23) :
        console.log('Доброго вечора!');
        break;
    default:
        console.log('Некоректне значення часу!');
        break;
}

