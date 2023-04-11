console.log('%c ---------------Task 5---------------', 'background-color: yellow; font-weight: bold; color:red');

const mapBuilder = (keysArray, valuesArray) => {
    const map = new Map();
    for(let i = 0; i < keysArray.length; i++) {
        map.set(keysArray[i], valuesArray[i]);
    }

    return map;
}

let keys = [1, 2, 3, 4];
let values = ['div', 'span', 'b', 'i'];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // span