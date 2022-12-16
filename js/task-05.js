// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие
//    input), подставляет его текущее значение в span#name - output.Если инпут
// пустой, в спане должна отображаться строка "Anonymous".
const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
//

const handleEnterNameInput = (event) => {
  if (event.currentTarget.value === "") {
    return (spanEl.textContent = "Anonymous");
  } else {
    spanEl.textContent = event.currentTarget.value;
    console.log(spanEl.textContent);
  }
};

inputEl.addEventListener("input", handleEnterNameInput);
