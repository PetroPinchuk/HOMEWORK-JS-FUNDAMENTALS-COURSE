
console.log('%c ---------------Task 1---------------', 'background-color: yellow; font-weight: bold; color:red');

function getPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(message);
        }, delay);
    });
}

getPromise('test promise', 2000).then(function(data) {
    console.log(data);
});