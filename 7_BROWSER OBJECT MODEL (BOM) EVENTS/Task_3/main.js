console.log('%c ---------------Task 3---------------', 'background-color: yellow; font-weight: bold; color:red');
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
// 1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
// 2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
// 3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
// 4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.


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
