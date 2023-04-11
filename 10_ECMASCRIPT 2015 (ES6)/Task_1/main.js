
console.log('%c ---------------Task 1---------------', 'background-color: yellow; font-weight: bold; color:red');

let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

names.fifth = 'Name №5';

let {first: f, third: x, fifth} = names;

console.log(f); // "Tom"

console.log(x); // "Ray"

console.log(fifth); // "Name №5"