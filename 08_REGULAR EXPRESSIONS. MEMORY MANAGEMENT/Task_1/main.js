
console.log('%c ---------------Task 1---------------', 'background-color: yellow; font-weight: bold; color:red');

const ifUpperCase = str => str.charAt(0) === str.charAt(0).toUpperCase() ? 'String\'s starts with uppercase character' : 'String\'s not starts with uppercase character';

console.log(ifUpperCase('regexp'));
console.log(ifUpperCase('Regexp'));
