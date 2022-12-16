// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и
// уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение
// счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
// значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const spanEl = document.querySelector("#value");
let counterValue = 0;
const btnDecrEl = document.querySelector('button[data-action="decrement"]');
const btnIncrEl = document.querySelector('button[data-action="increment"]');

const handleClickBtnDecrement = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};
const handleClickBtnIncrement = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

btnDecrEl.addEventListener("click", handleClickBtnDecrement);
btnIncrEl.addEventListener("click", handleClickBtnIncrement);
