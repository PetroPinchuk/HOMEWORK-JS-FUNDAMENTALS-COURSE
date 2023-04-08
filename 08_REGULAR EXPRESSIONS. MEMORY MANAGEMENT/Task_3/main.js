console.log('%c ---------------Task 3---------------', 'background-color: yellow; font-weight: bold; color:red');

function replaceFunc(str) {
    const regex = /(\w+)\s+(\w+)/;
    return str.replace(regex, "$2, $1");
}

const string = "Java Script";

console.log(replaceFunc(string));