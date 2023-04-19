console.log('%c ---------------Task 3---------------', 'background-color: yellow; font-weight: bold; color:red');

new Promise(function (resolve, reject) {
    let number = prompt('Введіть число:');
    if (typeof number !== 'number') {
        reject('Ви ввели не число');
    } else {
        resolve(Number(number));
    }
 }).catch(function (error) {
    return new Promise(function (resolve, reject) {
       let number;
       do {
        number = prompt('Введіть число:');
       } while (typeof number !== 'number');
       resolve(Number(number));
    });
 }).then(function (result) {
    console.log('Введене число: ', result);
 });