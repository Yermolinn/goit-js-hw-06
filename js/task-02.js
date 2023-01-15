

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredient = document.getElementById("ingredients");
console.log(listIngredient);

for (const ingredient of ingredients) {
const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  liElem.classList.add("item");
  listIngredient.appendChild(liElem);
}





