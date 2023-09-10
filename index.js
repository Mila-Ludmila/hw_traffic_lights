
const circles = document.querySelectorAll('.cyrcle');
const btn = document.getElementById('btn');
var index = 0;

btn.addEventListener('click', () => {
    // Видалити виділений клас із поточного кола
circles[index].classList.remove('active');

    // Збільшити індекс або виконати цикл назад до 0, якщо в кінці
index = (index + 1) % circles.length;

    // Додати клас зміни кольору до наступного кола
circles[index].classList.add('active');
  });