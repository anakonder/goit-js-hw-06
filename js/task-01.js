const listWithClass = document.querySelectorAll('li.item');

console.log(`Number of categories: ${listWithClass.length}`);

listWithClass.forEach(elLi => {
    console.log(`Category: ${elLi.firstElementChild.textContent}`);
    console.log(`Elements: ${elLi.querySelectorAll('li').length}`);
});
