const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector(`#ingredients`);
// console.log(ulEl);
const elements = ingredients.map((ingredient) => {
  const listItemEl = document.createElement(`li`);
  listItemEl.textContent = ingredient;
  listItemEl.classList.add("item");
  return listItemEl;
});
console.log(elements);
ulEl.append(...elements);
console.log(ulEl);
