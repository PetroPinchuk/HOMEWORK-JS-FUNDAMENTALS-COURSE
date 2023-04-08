console.log('%c ---------------Task 3---------------', 'background-color: yellow; font-weight: bold; color:red');

let body = document.createElement("body");
let main = document.createElement("main");
let div = document.createElement("div");
let p = document.createElement("p");

main.setAttribute("class", "mainClass check item");
div.setAttribute("id", "myDiv");

let pText = document.createTextNode("First paragraph");
p.appendChild(pText);

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

document.documentElement.appendChild(body);
