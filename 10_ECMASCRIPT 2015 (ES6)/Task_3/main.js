console.log('%c ---------------Task 3---------------', 'background-color: yellow; font-weight: bold; color:red');

function mul() {
    let arr = [...arguments];
    let numbers = arr.filter(el => typeof el === 'number');
    if (numbers.length) {
        return numbers.reduce((acc, el) => {
            return acc * el;
        }, 1);
    } else return 0;
 }

 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0