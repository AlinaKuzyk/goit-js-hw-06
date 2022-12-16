// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль
// при клике на button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

const btnChangeColorEl = document.querySelector(".change-color");
const spanTextEl = document.querySelector(".color");

const handleChangeBgC = (event) => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanTextEl.textContent = color;
};

btnChangeColorEl.addEventListener("click", handleChangeBgC);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
