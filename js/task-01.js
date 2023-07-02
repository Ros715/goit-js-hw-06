const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(item => {
  let textElement = item.firstElementChild.textContent;
  let amountElements = item.lastElementChild.children.length;
  console.log(
    'Category: ' + textElement + '\n' + 'Elements: ' + amountElements
  );
});
