const dropDown = document.getElementById("navbar-dropdown");
const hamBtn = document.getElementById("ham-btn");

const dropDownMenuBtn = document.getElementById("dropdownNavbarLink");
const dropDownMenuBtn1 = document.getElementById("dropdownNavbarLink1");
const dropDownLink = document.querySelector(".dropdownNavbar");
const dropDownLink1 = document.querySelector(".dropdownNavbar1");

hamBtn.addEventListener("click", () => {
  dropDown.classList.toggle("hidden");
});

dropDownMenuBtn.addEventListener("click", () => {
  dropDownLink.classList.toggle("hidden");
});

dropDownMenuBtn1.addEventListener("click", () => {
  dropDownLink1.classList.toggle("hidden");
});
