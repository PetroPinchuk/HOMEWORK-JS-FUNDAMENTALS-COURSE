console.log('%c ---------------Task 5---------------', 'background-color: yellow; font-weight: bold; color:red');

const btn = document.querySelector('button');
const inputDiv = document.querySelector('.input');

btn.addEventListener('click', () => {
    inputDiv.innerHTML += `<p>I was pressed!</p>`;
});
btn.addEventListener('mouseover', () => {
    inputDiv.innerHTML += `<p>Mouse on me!</p>`;
});
btn.addEventListener('mouseout', () => {
    inputDiv.innerHTML += `<p>Mouse is not on me!</p>`;
});