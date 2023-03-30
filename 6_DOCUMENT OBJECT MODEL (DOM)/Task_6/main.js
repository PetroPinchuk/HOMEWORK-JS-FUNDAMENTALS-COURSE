console.log('%c ---------------Task 6---------------', 'background-color: yellow; font-weight: bold; color:red');

const colorButtons = document.querySelector('.colors');
const outPrice = document.querySelector('#outprice');

colorButtons.addEventListener('click', (e) => changePriceByColor(e));

function changePriceByColor(e) {
    document.querySelector('.active').classList.remove('active');
    const price = Number(e.target.dataset.price);
    if (e.target.classList.contains('color')) {
        e.target.classList.add('active');
        outPrice.innerText = `${(price - 1) + 0.99}$`;
    }
}