console.log('%c ---------------Task 2---------------', 'background-color: yellow; font-weight: bold; color:red');

document.getElementsByTagName('h1')[0].style.backgroundColor = "green";
const paragraphs = document.querySelector('#myDiv');
paragraphs.firstElementChild.style.fontWeight = 'bold';
paragraphs.children[1].style.color = 'red';
paragraphs.children[2].style.textDecoration = 'underline';
paragraphs.children[3].style.fontStyle = 'italic';
document.querySelector('#myList').style.display = 'flex';
document.querySelector('#myList').style.listStyle = 'none';
bigHeader = document.getElementsByTagName('span')[0].style.display = "none";