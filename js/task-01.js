const categoriesItems = document.querySelectorAll('#categories .item');
console.log(categoriesItems.length);
const TitleAndLiCount = categoriesItems.forEach((el) => {
    const titleEl = el.querySelector('h2').textContent;
    const liElementCount = el.querySelectorAll('li').length;
    console.log(`Категория: ${titleEl} Количество элементов: ${liElementCount}`);
})

