const data = JSON.parse(dataProducts);
const fiCatalogEl = document.querySelector(".fi_catalog");
const templateEl = document.querySelector(".template");
const btnViewAllEl = document.querySelector(".view_all");

let end = 6;
let start = 0;
const visibleCount = 3;
let counter = 0;
let itemCounter = 1;

showItems();

let addToCartBtn = document.querySelectorAll(".cart");
addItemToCart(addToCartBtn);

btnViewAllEl.addEventListener("click", function (e) {
  start = end;
  end = end + visibleCount;

  showItems();

  if (end >= data.length) {
    btnViewAllEl.classList.add("hide");
  }

  const newBtn = fiCatalogEl.querySelectorAll(".cart");
  const result = Array.from(newBtn).slice(start, end);
  addItemToCart(result);
});

function showItems() {
  const dataSlice = data.slice(start, end);

  dataSlice.forEach((item) => {
    const fiCatalogItemEl = templateEl.content
      .querySelector(".fi_catalog_item")
      .cloneNode(true);

    const cartEl = fiCatalogItemEl.querySelector(".cart");
    cartEl.dataset.id = item.id;

    const imgEl = fiCatalogItemEl.querySelector(".fi_catalog_image");
    imgEl.src = item.img;

    const itemNameEl = fiCatalogItemEl.querySelector(".item_name");
    itemNameEl.textContent = item.name;

    const descriptionEl = fiCatalogItemEl.querySelector(".description");
    descriptionEl.textContent = item.description;

    const priceEl = fiCatalogItemEl.querySelector(".price");
    priceEl.textContent = item.price;

    fiCatalogEl.appendChild(fiCatalogItemEl);
  });
}

const countBlock = document.querySelector(".count_block");
let cartCounter = document.querySelector(".cart_num");
const cartItemsBlock = document.querySelector(".cart_items");
const cartTopEl = document.querySelector(".cart_top");

function addItemToCart(buttons) {
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      cartItemsBlock.classList.remove("hide");
      countBlock.classList.remove("hide");

      counter++;
      cartCounter.textContent = counter;

      addAndDeleteCartItems(e);
    });
  });
}

function addAndDeleteCartItems(element) {

  const addedItems = document.querySelector(".added_items");

  const blockEl = document.createElement("div");
  blockEl.classList.add("block");

  const closeButtonEl = document.createElement("img");
  closeButtonEl.classList.add("close");
  closeButtonEl.src = "./img/Vector.png";

  const blockImageEl = document.createElement("div");
  blockImageEl.classList.add("block__image");

  const blockImage = document.createElement("img");
  blockImage.classList.add("added_item_image");
  blockImage.src = data[element.target.dataset.id].img;

  blockImageEl.appendChild(blockImage);

  const blockTextEl = document.createElement("div");
  blockTextEl.classList.add("block__text");

  const nameEl = document.createElement("h1");
  nameEl.classList.add("added_item_name");
  nameEl.textContent = data[element.target.dataset.id].name;

  const priceEl = document.createElement("p");
  priceEl.classList.add("added_item_price");
  priceEl.textContent = "Price: ";

  const priceColorEl = document.createElement("span");
  priceColorEl.classList.add("color__red");
  priceColorEl.textContent = data[element.target.dataset.id].price;

  priceEl.appendChild(priceColorEl);

  const colorEl = document.createElement("p");
  colorEl.classList.add("added_item_color");
  colorEl.textContent = "Color: " + data[element.target.dataset.id].color;

  const sizeEl = document.createElement("p");
  sizeEl.classList.add("added_item_size");
  sizeEl.textContent = "Size: " + data[element.target.dataset.id].size;

  const quantityTextEl = document.createElement("p");
  quantityTextEl.classList.add("quantity");
  quantityTextEl.textContent = "Quantity: ";

  const quantityInputEl = document.createElement("input");
  quantityInputEl.classList.add("added_item_input");
  quantityInputEl.type = "number";
  quantityInputEl.value = itemCounter;

  quantityTextEl.appendChild(quantityInputEl);

  blockTextEl.appendChild(nameEl);
  blockTextEl.appendChild(priceEl);
  blockTextEl.appendChild(colorEl);
  blockTextEl.appendChild(sizeEl);
  blockTextEl.appendChild(quantityTextEl);

  blockEl.appendChild(closeButtonEl);
  blockEl.appendChild(blockImageEl);
  blockEl.appendChild(blockTextEl);

  addedItems.appendChild(blockEl);

  const closeButton = blockEl.querySelector(".close");
  closeButton.addEventListener("click", function (e) {
    blockEl.classList.add("hide");
    counter--;
    cartCounter.textContent = counter;

    if (counter == 0) {
      cartItemsBlock.classList.add("hide");
    }
  });
}

const headEl = document.querySelector(".head");
const mainEl = document.querySelector(".main");

window.addEventListener("scroll", function (e) {
  const headHeight = headEl.getBoundingClientRect().height;
  if (window.pageYOffset > 0) {
    //console.log(window.pageYOffset);
    headEl.classList.add("fix__head");
    mainEl.style.paddingTop = headHeight + "px";
  } else {
    headEl.classList.remove("fix__head");
    mainEl.style.paddingTop = 0;
  }
});

//const addedItems = document.querySelector(".added_items");

// const addedItems = document.querySelector('.added_items');
// const cartTemplateEl = document.querySelector('.cart_template');

//     data.forEach(element => {
//       const blockEl = templateEl.content.querySelector('.block').cloneNode(true);

//       const blockImage = blockEl.querySelector('.image');;
//       blockImage.src = element.img;

//       const nameEl = blockEl.querySelector('.name');
//       nameEl.textContent = element.name;

//       const priceColorEl = blockEl.querySelector('.color__red');
//       priceColorEl.textContent = "$" + element.price;

//       const colorEl = blockEl.querySelector('.color');
//       colorEl.textContent = "Color: " + element.color;

//       const sizeEl = blockEl.querySelector('.size');
//       sizeEl.textContent = "Size: " + element.size;

//       const quantityInputEl = blockEl.querySelector('.input');
//       quantityInputEl.value = element.quantity;

//       contentEl.appendChild(blockEl)

//     });

// let end = 6;
// let start = 0;
// let counter = 0;

// showItems();
// let addToCartBtn = document.querySelectorAll(".cart");
// addItemToCart(addToCartBtn);

// btnViewAllEl.addEventListener("click", function (e) {
//   start = end;
//   end = end + 3;
//   showItems();
//   if (end == data.length) {
//     btnViewAllEl.classList.add("hide");
//   }
// const newBtn = document.querySelectorAll(".cart");
// addToCartBtn = newBtn;
// addItemToCart(newBtn);
// });

// function showItems() {
//   for (i = start; i < end; i++) {
//     const fiCatalogItemEl = templateEl.content
//       .querySelector(".fi_catalog_item")
//       .cloneNode(true);

//     const imgEl = fiCatalogItemEl.querySelector(".fi_catalog_image");
//     imgEl.src = data[i].img;

//     const itemNameEl = fiCatalogItemEl.querySelector(".item_name");
//     itemNameEl.textContent = data[i].name;

//     const descriptionEl = fiCatalogItemEl.querySelector(".description");
//     descriptionEl.textContent = data[i].description;

//     const priceEl = fiCatalogItemEl.querySelector(".price");
//     priceEl.textContent = data[i].price;

//     fiCatalogEl.appendChild(fiCatalogItemEl);
//   }
// }

// const countBlock = document.querySelector(".count_block");
// let cartCounter = document.querySelector(".cart_num");

// function addItemToCart(buttons) {
//   buttons.forEach((button) => {
//     button.addEventListener("click", function (e) {
//       countBlock.classList.remove("hide");
//       counter += 1;
//       cartCounter.textContent = counter;
//     });
//   });
// }

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
