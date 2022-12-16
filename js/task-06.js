// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет
// его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится
// зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid, которые мы уже
// добавили в исходные файлы задания.

const inputEl = document.querySelector("input[data-length]");
const cssClassEl = document.querySelector("#validation-input");
console.log(inputEl.dataset.length);

const handleInputBlur = (event) => {
  if (event.currentTarget.value.length > inputEl.dataset.length) {
    cssClassEl.classList.add(`invalid`);
    cssClassEl.classList.remove(`valid`);
  } else {
    cssClassEl.classList.remove(`invalid`);
    cssClassEl.classList.add(`valid`);
  }
};

inputEl.addEventListener("blur", handleInputBlur);
