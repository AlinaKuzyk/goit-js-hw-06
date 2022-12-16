// Напиши скрипт, который реагирует на изменение значения input#font - size - control
//  (событие input) и изменяет инлайн - стиль span#text обновляя свойство font -
//  size.В результате при перетаскивании ползунка будет меняться размер текста.
const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

const handleChangeRangeOnInput = (event) => {
  spanTextEl.style.fontSize = inputEl.value + "px";
};

inputEl.addEventListener("input", handleChangeRangeOnInput);
