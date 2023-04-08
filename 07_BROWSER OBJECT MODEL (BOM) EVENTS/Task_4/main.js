console.log('%c ---------------Task 4---------------', 'background-color: yellow; font-weight: bold; color:red');

const select = document.getElementById('names');
const button = document.querySelector('#delete-btn');

button.addEventListener('click', () => {
    const selectedOption = select.options[select.selectedIndex];
    select.removeChild(selectedOption);
});
