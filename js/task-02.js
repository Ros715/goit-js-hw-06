const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = document.querySelector('#ingredients');
const listItemsArray = [];
ingredients.forEach(ingredient => {
  const liItem = document.createElement('li');
  liItem.classList.add('item');
  liItem.textContent = ingredient;
  listItemsArray.push(liItem);
});

listItems.append(...listItemsArray);
