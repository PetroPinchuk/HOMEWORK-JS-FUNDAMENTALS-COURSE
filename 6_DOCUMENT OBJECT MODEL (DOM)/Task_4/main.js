console.log('%c ---------------Task 4---------------', 'background-color: yellow; font-weight: bold; color:red');

const inputs = document.querySelectorAll('.arr');
const btn = document.querySelector('.btn');
const out = document.querySelector('.out');

btn.addEventListener('click', () => {
  out.innerHTML += '';
  for (let i = 0; i < inputs.length; i++) {
    out.innerHTML += `<p>${inputs[i].value}</p>`
  }
})