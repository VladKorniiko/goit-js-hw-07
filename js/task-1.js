const categories = document.querySelector('#categories');
const categoriesItems = categories.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${items}`);
});
