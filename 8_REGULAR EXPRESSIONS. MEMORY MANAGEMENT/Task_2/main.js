console.log('%c ---------------Task 2---------------', 'background-color: yellow; font-weight: bold; color:red');

const checkEmail = str => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

console.log(checkEmail('Qmail2@gmail.com'));