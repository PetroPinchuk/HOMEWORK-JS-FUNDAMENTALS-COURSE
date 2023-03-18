console.log('---------------1-----------------');

const arr = [2,3,4,5,6,7,8,9];

function sumSliceArray(arr, first, second) {

    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error('Введіть будь ласка тільки числа!');
    }
    if (first > arr.length || second > arr.length) {
        throw new Error('Введіть будь ласка порядковий номер менший ніж кількість елементів в масиві!')
    }
    if (first === 0 || second === 0) {
        throw new Error('Введіть будь ласка порядковий номер більший від нуля !')
    }

    const firstElem = arr[first-1];
    const secondElem = arr[second-1];

    return firstElem + secondElem;
}

try {
    const sum = sumSliceArray(arr, 2, 0);
    console.log(sum);
} catch (error) {
    console.log(error.message);
}


console.log('---------------2-----------------');


console.log('---------------3---------------');


console.log('---------------4---------------');


console.log('---------------5---------------');


console.log('---------------6---------------');

console.log('---------------7---------------');

