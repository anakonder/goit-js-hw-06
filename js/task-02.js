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
  li.classList.add('item')
  return li
}
)

ingredientsList.append(...elements)



