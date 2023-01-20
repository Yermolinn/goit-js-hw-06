
const categories = document.querySelectorAll('.item')
console.log('Number of categories', categories.length)
categories.forEach((element) => {
console.log('Category:', element.firstElementChild.textContent)
console.log('Elements:', element.lastElementChild.children.length)
})
console.log(categories);




// const arrayOfCategories = document.querySelectorAll('li.item');
// console.log(`Number of categories: ${arrayOfCategories.length}`);

// const categoriesArray = [...arrayOfCategories]
//     .map(
//         categories => `Category: ${categories.children[0].textContent} 
//         Elements: ${categories.children[1].children.length}`)
      
//     .join('\n');
    
// console.log(categoriesArray);