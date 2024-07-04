// script.js

document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("active");
  });

document
  .getElementById("mobile-search-icon")
  .addEventListener("click", function () {
    const searchbar = document.querySelector(".searchbar");
    searchbar.classList.toggle("mobile-active");
    searchbar.focus();
  });
