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


// const name = prompt('What is your name?');
// const age = +prompt('What is your age?');
// const status = prompt('What is your status (admin, moderator, user)?');

function checkAge(name, age, status) {
    try {
        if (!name || !age || !status) {
            throw new Error(`The field is empty! Please enter your ${!name ? 'name' : !age ? 'age' : 'status' }.`);
        }
        if (isNaN(age) || age === '') {
            throw new Error('Ви ввели некоректне значення в полі "Вік".')
        }
        if (age < 18 || age > 70) {
            throw new RangeError('Фільм дозволено переглядати тільки особам від 18 до 70 років.');
        }
        if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
            throw new EvalError('Ви ввели неправельний статус.')
        }
        alert('Приємного перегляду =)');

    } catch (error) {
        console.log(error.message);
        errorInModal.innerHTML += `<p>${error.message}</p>`
        modal.classList.add('active');
        overlay.classList.add('active');
    }
}

const modal = document.querySelector('.modal');
const modal_button = document.querySelector('.modal__button');
const errorInModal = document.querySelector('.error');

modal_button.addEventListener('click', () => {
    const modal = modal_button.closest('.modal')
    closeModal(modal);
    window.location.reload();
});

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }


// checkAge(name, age, status);

console.log('---------------3---------------');


function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error('Ширина і довжина праямокутника мають мати числові значення!')
    }
    const area = width * height;

    return area;
}

try {
    const width = 50;
    const height = 'not a number';

    const area = calcRectangleArea(width, height);

    console.log(area);

} catch (error) {
    console.error(error.message);
}



console.log('---------------4---------------');


console.log('---------------5---------------');


console.log('---------------6---------------');

console.log('---------------7---------------');

