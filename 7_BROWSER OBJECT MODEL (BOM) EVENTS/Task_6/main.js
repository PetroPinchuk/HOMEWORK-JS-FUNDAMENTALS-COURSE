console.log('%c ---------------Task 6---------------', 'background-color: yellow; font-weight: bold; color:red');

function sizeOfWindow() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
}

window.addEventListener('resize', sizeOfWindow);

sizeOfWindow();


