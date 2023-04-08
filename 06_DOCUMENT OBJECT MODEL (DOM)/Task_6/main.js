console.log('%c ---------------Task 6---------------', 'background-color: yellow; font-weight: bold; color:red');

const colorButtons = document.querySelector('.colors');
const sizeButtons = document.querySelector('.sizes');
const num = document.querySelector('#num');
let quantity = Number(document.querySelector('#num').value);
const outPrice = document.querySelector('#outprice');

colorButtons.addEventListener('click', (e) => changePriceByColor(e));
sizeButtons.addEventListener('click', (e) => changePriceBySize(e));
num.addEventListener('input', (e) => changePriceByQuntity(e));

function changeShoeImage(e) {
    document.querySelector('.show').classList.remove('show');
    document.querySelector(`img[color="${e}"]`).classList.add('show');
}

function changePriceByColor(e) {
    document.querySelector('.active').classList.remove('active');
    if (e.target.classList.contains('color')) {
        e.target.classList.add('active');
        calculateEndPrice();
        changeShoeImage(e.target.attributes[2].nodeValue);
    }
}

function changePriceBySize(e) {
    document.querySelector('.size.active').classList.remove('active');
    if (e.target.classList.contains('size')) {
        e.target.classList.add('active');
        calculateEndPrice();
    }
}

function changePriceByQuntity(e) {
    quantity = Number(e.target.value);
    calculateEndPrice();
}

function calculateEndPrice() {
    const activeButtons = document.querySelectorAll('.active');
    let activeColorPrice = Number(activeButtons[0].dataset.price);
    let activeSizePrice = Number(activeButtons[1].dataset.price);
    let endPrice = (activeColorPrice + activeSizePrice) * quantity;
    outPrice.innerText = `${endPrice - 0.01}$`;
}

calculateEndPrice();