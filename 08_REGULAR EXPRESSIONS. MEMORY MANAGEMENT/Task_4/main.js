console.log('%c ---------------Task 4---------------', 'background-color: yellow; font-weight: bold; color:red');

function cardValidator(cardNumber) {
    const regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    return regex.test(cardNumber) ? true : false;
}

let trueCardNum = '9999-9999-9999-9999';
let falseCardNum = '78-9999-9999-9999';

console.log(cardValidator(trueCardNum));
console.log(cardValidator(falseCardNum));