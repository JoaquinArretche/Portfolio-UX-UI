import { works } from "./Data-base copy.js";



// TEXT CHANGING////////////////////////////////////////////////////


// SHOW PRODUCTS///////////////////////////////////////////////

works.forEach(
  (e) => (document.querySelector("#cards2").innerHTML += e.showProducts())
);

// CLOSE PRODUCT DETAIL MODAL///////////////////////////////////////////////
const productModal = document.querySelector("#Bg-Modal2");

function addProductCardClickListener() {
  const productCards = document.querySelectorAll(".Card");
  productCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      productModal.style.display = "flex";
      const clickedProductId = e.currentTarget.id;
      const clickedProduct = works.find(
        (product) => product.id === clickedProductId
      );
      productModal.innerHTML = clickedProduct.showProductDetails();
    });
  });


  // Close modal when clicking outside of product details
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) {
      productModal.style.display = "none";
    }
  });
}


// Add event listener to product cards initially
addProductCardClickListener();

// //NAVBAR//////////////////////////////////////////////////////////////
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

const menuLink1 = document.querySelector(".navbar__item1");
const menuLink2 = document.querySelector(".navbar__item2");
const menuLink3 = document.querySelector(".navbar__item3");
const menuLink4 = document.querySelector(".navbar__item4");
const menuLink5 = document.querySelector(".navbar__item5");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active2");
});

menuLink1.addEventListener("click", closeMenu1);
menuLink2.addEventListener("click", closeMenu1);
menuLink3.addEventListener("click", closeMenu1);
menuLink4.addEventListener("click", closeMenu1);
menuLink5.addEventListener("click", closeMenu1);

function closeMenu1() {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active2");
}



