console.log('%c ---------------Task 6---------------', 'background-color: yellow; font-weight: bold; color:red');

const colorButtons = document.querySelector('.colors');
const sizeButtons = document.querySelector('.sizes');
const outPrice = document.querySelector('#outprice');

colorButtons.addEventListener('click', (e) => changePriceByColor(e));
sizeButtons.addEventListener('click', (e) => changePriceBySize(e));

function changePriceByColor(e) {
    document.querySelector('.active').classList.remove('active');
    const price = Number(e.target.dataset.price);
    if (e.target.classList.contains('color')) {
        e.target.classList.add('active');
        calculateEndPrice();
    }
}

function changePriceBySize(e) {
    document.querySelector('.size.active').classList.remove('active');
    const price = Number(e.target.dataset.price);
    if (e.target.classList.contains('size')) {
        e.target.classList.add('active');
        calculateEndPrice();
    }
}

function calculateEndPrice() {
    const activeButtons = document.querySelectorAll('.active');
    let activeColorPrice = Number(activeButtons[0].dataset.price);
    let activeSizePrice = Number(activeButtons[1].dataset.price);
    let endPrice = activeColorPrice + activeSizePrice;
    outPrice.innerText = `${endPrice - 0.01}$`;
}

calculateEndPrice();