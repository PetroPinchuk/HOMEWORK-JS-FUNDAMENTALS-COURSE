console.log('%c ---------------Task 3---------------', 'background-color: yellow; font-weight: bold; color:red');

const oneClickBtn = document.querySelector('.click');
const doubleClickBtn = document.querySelector('.double-click');
const clickAndHoldBtn = document.querySelector('.click-and-hold');
const hoverLink = document.querySelector('a');
const page = document.querySelector('body');

oneClickBtn.addEventListener('click', () => {
    page.style.backgroundColor = 'blue';
});

doubleClickBtn.addEventListener('dblclick', () => {
    page.style.backgroundColor = 'pink';
});

clickAndHoldBtn.addEventListener('mousedown', () => {
    page.style.backgroundColor = '#654321';
});

clickAndHoldBtn.addEventListener('mouseup', () => {
    page.style.backgroundColor = 'white';
});

hoverLink.addEventListener('mouseover', () => {
    page.style.backgroundColor = 'yellow';
});

hoverLink.addEventListener('mouseout', () => {
    page.style.backgroundColor = 'white';
});
