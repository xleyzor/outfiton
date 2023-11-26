const hamburger = document.querySelector(".hamburger");
const mobileNavbar = document.querySelector(".mobile-navbar");
const closeNavbar = document.querySelector(".mobile-navbar-control i");
const all = document.querySelector(".all");

hamburger.addEventListener("click", () => {
  mobileNavbar.classList.add("showNavbar");
  all.classList.add("changeAll");
});
closeNavbar.addEventListener("click", () => {
  mobileNavbar.classList.remove("showNavbar");
  all.classList.remove("changeAll");
});

//! foreach kullanarak faq kısmını yap

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((faqItem) => {
  const title = document.querySelector("faq-item-title");

  title.addEventListener("click", function () {
    faqItem.classList.toggle("showfia");
  });
});

// faqItemTitle.addEventListener("click", () => {
//   faqIcon.classList.toggle("rotate");
//   faqItemAnswer.classList.toggle("showfia");
// });

const category = document.querySelector(".category");
const categoryContainer = document.querySelector(".category-container");
const categoryIcon = document.querySelector(".category-icon");

category.addEventListener("click", () => {
  categoryContainer.classList.toggle("category-container-show");
  categoryIcon.classList.toggle("showct");
});
