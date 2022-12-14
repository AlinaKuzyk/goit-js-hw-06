const listEl = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${listEl}`);

const newListEl = document.querySelectorAll(`.item`);
// console.log(newListEl);

newListEl.forEach((ulEl) => {
  const titleEl = ulEl.firstElementChild.textContent;
  const liEl = ulEl.lastElementChild.children.length;
  console.log(`Category: ${titleEl}; Elements: ${liEl}`);
});
