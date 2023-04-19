console.log('%c ---------------Task 4---------------', 'background-color: yellow; font-weight: bold; color:red');

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
    for (let i = 0, p = Promise.resolve(0); i <= 10; i++) {
        const time = Math.floor(Math.random() * 3) * 1000;
        p = p.then(() => 
            delay(i, time).then((result) => {
                console.log(`result = ${result}, delay = ${time / 1000}sec`);
            })
        );
    }
}

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

// async function showNumbers() {
//     for (let i = 0; i <= 10; i++) {
//         await delay(i, Math.random() * 2000);
//         console.log(i);
//     }
// }

showNumbers();