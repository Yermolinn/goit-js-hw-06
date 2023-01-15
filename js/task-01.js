

const ulCat = document.querySelectorAll('.item');
console.log("Numbers of categories: ", ulCat.length);
 

const totalElements = ulCat.forEach((category) => {
    console.log("Category: ",category.firstElementChild.textContent);
    console.log("Elements: ", category.querySelectorAll('li').length);
});




