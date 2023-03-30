console.log('%c ---------------Task 2---------------', 'background-color: yellow; font-weight: bold; color:red');

const text = document.getElementById('text');
const button = document.querySelector('button');

function changeCSS() {
    text.style.color = 'orange';
    text.style.fontSize = '20px';
    text.style.fontFamily = 'Comic Sans MS';
}

button.addEventListener('click', changeCSS);