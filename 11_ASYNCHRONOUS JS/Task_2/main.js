console.log('%c ---------------Task 2---------------', 'background-color: yellow; font-weight: bold; color:red');

function calcArrProduct(arr) {
    return new Promise( (resolve, reject) => {
        let res = 1;
        for(let i = 0; i < arr.length; i++) {
            if(typeof arr[i] === 'number') {
                res *= arr[i];
            }
            else {
                reject('Error! Incorrect array!');
            }
        }
        resolve(res);
    });
}

calcArrProduct([3,4,5]).then(result => console.log(result));
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));