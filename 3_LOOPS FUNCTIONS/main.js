console.log('---------------1-----------------');


const arr = [5, 3, 4, 5, 6, 7, 3];

function compact(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}

const arr2 = compact(arr);
console.log(arr2);


console.log('---------------2-----------------');


function createArray(start, end) {
    const arr = [];
    arr.push(start);
    const arrLength = end - start;
    for (let i = 0; i < arrLength; i++ ) {
        arr.push(arr[arr.length - 1] + 1);
    }
    return arr;
}

let arr3 = createArray(2, 9);
console.log(arr3); // [2,3,4,5,6,7,8,9]


console.log('---------------3---------------');


function numbersRange(a, b, arrayGenerator) {
    if (a >= b) {
        console.log('You entered incorrect data!');
        return;
    }
    const arr = arrayGenerator(a, b);
    for (let i = 0; i < arr.length; i++) {
        console.log(String(arr[i] + ' ').repeat(i + 1));
    }
}

numbersRange(10, 21, createArray);


console.log('---------------4---------------');

function randArray(k) {
    const array = [];
    const min = 1;
    const max = 500;

    for (let i = 0; i < k; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return array;
}

console.log(randArray(5));


console.log('---------------5---------------');

let  arr4 = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];

function funcName(arr) {
    const newArr = [];
    const numbers = [];
    const strings = [];
    newArr.push(numbers, strings);
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') numbers.push(arr[i]);
        if (typeof arr[i] === 'string') strings.push(arr[i]);
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                if (typeof arr[i][j] === 'number') numbers.push(arr[i][j]);
                if (typeof arr[i][j] === 'string') strings.push(arr[i][j]);
            }
        }
    }
    
    return newArr;
}

let arrNew = funcName(arr4);
console.log(arrNew);

console.log('---------------6---------------');

function calc(a, b, op) {
    if (op % 1 !== 0) {
        console.log('Будь ласка, введіть ціле число!');
        return;
    }
    if (op === 1) return a - b;
    if (op === 2) return a * b;
    if (op === 3) return a / b;
}

console.log(calc(5, 2, 1));
console.log(calc(5, 2, 2));
console.log(calc(6, 2, 3));


console.log('---------------7---------------');


const findUnique = arr => (new Set(arr)).size === arr.length;

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));