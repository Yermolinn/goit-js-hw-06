

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredients_list = document.querySelector('#ingredients');

const createIngredients = ingredientsList => {
  return ingredientsList.map(ingredient => {
    const ingredients_item = document.createElement('li');
    ingredients_item.classList.add('item');
    ingredients_item.textContent = ingredient;

    return ingredients_item;
  });
};

const elements = createIngredients(ingredients);
ingredients_list.append(...elements);



/// metod 2
// const listIngredient = document.getElementById("ingredients");
// console.log(listIngredient);

// for (const ingredient of ingredients) {
// const liElem = document.createElement("li");
//   liElem.textContent = ingredient;
//   liElem.classList.add("item");
//   listIngredient.appendChild(liElem);
// }

