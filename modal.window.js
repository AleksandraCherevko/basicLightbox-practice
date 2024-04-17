// Create cards with products based on the products array,
// example card https://prnt.sc/KmgDlzqOIA3M
//
// Implement event delegation on card collections
// After clicking on the card, a modal window should appear
// with detailed information about the product,
// example of a modal window https://prnt.sc/vWNoCeZcw7ii
//
// To implement a modal window, use
// basicLightbox library (https://github.com/electerious/basicLightbox

const products = [
  {
    id: 1,
    img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
    name: "Monitor",
    price: 3000,
    description: "23-inch monitor with Full HD resolution.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Laptop",
    price: 20000,
    description:
      "Lightweight and powerful laptop with a 15-inch display and SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Smartphone",
    price: 8000,
    description: "Equipped with a triple camera and a multi-core processor.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Tablet",
    price: 12000,
    description: "10-inch tablet with high performance and a Retina display.",
  },
];

const productListEl = document.querySelector(".products");
productListEl.insertAdjacentHTML("beforeend", createMarkup(products));
productListEl.addEventListener("click", handleProductClick);

function createMarkup(array) {
  return array
    .map(
      (product) => ` <li class='item product-item' data-id=${product.id}>
 <img src="${product.img}" alt="${product.name}" width = '300px'>
 <h2>${product.name}</h2>
<p>Count: ${product.price} UAH </p>
</li> 
  `
    )
    .join("");
}

function handleProductClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  const currentProduct = event.target.closest(".product-item");
  const currentId = currentProduct.dataset.id;
  const product = products.find((item) => item.id === Number(currentId));

  const instance = basicLightbox.create(
    ` <div class='modal'>
  <img src="${product.img}" alt="${product.name}" width = '300px'>
  <h2>${product.name}</h2>
  <p>Count: ${product.price} UAH </p>
  </div> 
  `
  );

  instance.show();
}
