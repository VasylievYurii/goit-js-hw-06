const listRef = document.querySelector('#categories');
const getListArray = listRef.children;
const lengthOfCategories = getListArray.length;

console.log("Number of categories:", lengthOfCategories);


const getListForEachCategories = document.querySelectorAll('.item');

const h2 = getListForEachCategories.forEach((title) => {

    const getTitle = title.querySelector('h2');
    const getLength = title.querySelectorAll('li');

    console.log("Category:", getTitle.textContent);
    console.log("Elements:", getLength.length);
})
   













