console.log('%c ---------------Task 6---------------', 'background-color: yellow; font-weight: bold; color:red');

let colorButtons = document.querySelectorAll('.color');
let outPrice = document.querySelector('#outprice');


colorButtons.forEach(button => {
    button.addEventListener('click', e => {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const price = Number(e.target.dataset.price);
        outPrice.innerText = `${price - 1}.99`;
    })
})