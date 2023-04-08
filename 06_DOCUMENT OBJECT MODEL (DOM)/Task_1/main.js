
console.log('%c ---------------Task 1---------------', 'background-color: yellow; font-weight: bold; color:red');

const list = document.querySelector('#list');
const firstElem = list.firstElementChild.textContent;
const secondElem = list.children[1].textContent;
const thirdElem = list.children[2].textContent;
const fourthElem = list.children[3].textContent;
const lastElem = list.lastElementChild.textContent;

const openButton = document.querySelector('.open_modal');
const modal = document.querySelector('.modal');
const modalList = document.querySelector('.modal_list');
const modalButton = document.querySelector('.modal__button');

const listItems = [firstElem, lastElem, secondElem, fourthElem, thirdElem];

for (let i = 0; i < listItems.length; i++) {
  modalList.innerHTML += `<li>${listItems[i]}</li>`;
}

openButton.addEventListener('click', () => {
  modal.classList.add('active');
  overlay.classList.add('active');
});

modalButton.addEventListener('click', () => {
  const modal = modalButton.closest('.modal')
  closeModal(modal);
});

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
  