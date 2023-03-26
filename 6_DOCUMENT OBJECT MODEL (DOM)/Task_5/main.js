console.log('%c ---------------Task 5---------------', 'background-color: yellow; font-weight: bold; color:red');

// 1) вибрати всі теги із класом circle
// 2) перебрати кожен елемент, і вибрати його data-anim значення
// 3) вибране значення додати як клас за допомогою classList до цього елемента.
// 4) перевірити чи застосувались анімації

const circles = document.querySelectorAll('.circle');

for (let i = 0; i < circles.length; i++) {
  circles[i].classList.add(`${circles[i].dataset.anim}`);
}