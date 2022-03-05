const header = document.querySelector('#header');
const number = document.querySelector('#num1');
const button = document.querySelector('#show');

button.addEvenListener('click', () => {
  header.textContent = number.value;
  header.classList.add('shake');
  header.classList.add('newHeader');
});

number.addEventListener('input', () => {
  header.classList.remove('shake');
  header.classList.remove('newHeader');
});
