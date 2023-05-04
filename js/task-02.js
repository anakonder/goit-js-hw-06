const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');


const elements = ingredients.map(element => 
{
  const li = document.createElement('li');  
  li.textContent = element;
  return li.outerHTML
}
)

ingredientsList.innerHTML = elements.join('')



