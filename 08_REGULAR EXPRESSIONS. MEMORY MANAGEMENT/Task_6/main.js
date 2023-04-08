console.log('%c ---------------Task 6---------------', 'background-color: yellow; font-weight: bold; color:red');

const checkLogin = (login) => {
    const loginRegex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
    const numbers = login.match(/[\d.]+/g);
    return `
    ${loginRegex.test(login) ? true : false} 
    ${numbers.toString()}`;
};

console.log(checkLogin("e1ret3")); 
console.log(checkLogin("ee1.1ret3")); 
console.log(checkLogin("ee11ret3")); 
console.log(checkLogin("ee1*1ret3"));
