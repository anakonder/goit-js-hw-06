const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

let ingredientPunkt;
let ingredientName;

ingredients.forEach(ingredient => {
  ingredientPunkt = document.createElement('li');
  ingredientPunkt.classList.add('item')
  ingredientName = document.createElement('p');
  ingredientPunkt.append(ingredientName)
  ingredientName.textContent = ingredient;
  ingredientsList.append(ingredientPunkt);
});
