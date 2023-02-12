const data = JSON.parse(dataProducts);
console.log(data);

const fiCatalogEl = document.querySelector('.fi_catalog');
const templateEl = document.querySelector('.template');
const btnViewAllEl = document.querySelector('.view_all');

let end = 6;
let start = 0;

showItems();

btnViewAllEl.addEventListener('click', function (e) {
    start = end;
    end = end + 3;
    showItems();
    if (end == data.length) {
        btnViewAllEl.classList.add('hide');
    }
});


function showItems () {
    for (i = start; i < end; i++) {
        const fiCatalogItemEl = templateEl.content.querySelector('.fi_catalog_item').cloneNode(true);
    
        const imgEl = fiCatalogItemEl.querySelector('.fi_catalog_image');
        imgEl.src = data[i].img;
    
        const itemNameEl = fiCatalogItemEl.querySelector('.item_name');
        itemNameEl.textContent = data[i].name;
    
        const descriptionEl = fiCatalogItemEl.querySelector('.description');
        descriptionEl.textContent = data[i].description;
    
        const priceEl = fiCatalogItemEl.querySelector('.price');
        priceEl.textContent = data[i].price;
    
        fiCatalogEl.appendChild(fiCatalogItemEl);
}}


// data.forEach(element => {
//     const fiCatalogItemEl = templateEl.content.querySelector('.fi_catalog_item').cloneNode(true);

//     const imgEl = fiCatalogItemEl.querySelector('.fi_catalog_image');
//     imgEl.src = element.img;

//     const itemNameEl = fiCatalogItemEl.querySelector('.item_name');
//     itemNameEl.textContent = element.name;

//     const descriptionEl = fiCatalogItemEl.querySelector('.description');
//     descriptionEl.textContent = element.description;

//     const priceEl = fiCatalogItemEl.querySelector('.price');
//     priceEl.textContent = element.price;

//     fiCatalogEl.appendChild(fiCatalogItemEl);
// });

const countBlock = document.querySelector('.count_block');
const addToCartBtn = document.querySelectorAll('.cart');
let cartCounter = document.querySelector('.cart_num');
let counter = 0;

addToCartBtn.forEach((button) => {
    button.addEventListener('click', function (e) {
        countBlock.classList.remove('hide');
        counter += 1;
        cartCounter.textContent = counter;
    });
});