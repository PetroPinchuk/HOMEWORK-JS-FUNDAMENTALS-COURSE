console.log('%c ---------------Task 5---------------', 'background-color: yellow; font-weight: bold; color:red');

function emailValidator(email) {
    const regex = /^[A-Za-z0-9]+([_-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_-][A-Za-z0-9]+)*(\.[A-Za-z0-9]+)+$/;
    return regex.test(email) ? "Email is correct!" : "Email is not correct!";
}

console.log(emailValidator('my_mail@gmail.com'));
console.log(emailValidator('#my_mail@gmail.com'));
console.log(emailValidator('my_ma--il@gmail.com'));