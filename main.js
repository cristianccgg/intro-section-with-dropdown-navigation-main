const dropDown = document.getElementById("dropdown");
const hamBtn = document.getElementById("ham-btn");
const xBtn = document.getElementById("x-btn");
const arrowDownFeatures = document.getElementById("arrow-features");
const featuresDropdown = document.getElementById("features-dropdown");
const arrowUpFeatures = document.getElementById("features-up");
const arrowCompanyDown = document.getElementById("arrow-company-down");
const arrowCompanyUp = document.getElementById("arrow-company-up");
const companyDropDown = document.getElementById("company-dropdown");
const container = document.querySelector(".contenedor");

hamBtn.addEventListener("click", () => {
  dropDown.classList.remove("hidden");
  hamBtn.classList.add("hidden");
  container.classList.add("backdrop-contrast-50");
});

xBtn.addEventListener("click", () => {
  dropDown.classList.add("hidden");
  hamBtn.classList.remove("hidden");
  container.classList.remove("backdrop-contrast-50");
});

arrowDownFeatures.addEventListener("click", () => {
  featuresDropdown.classList.toggle("hidden");
  arrowDownFeatures.classList.add("hidden");
  arrowUpFeatures.classList.remove("hidden");
});

arrowUpFeatures.addEventListener("click", () => {
  featuresDropdown.classList.toggle("hidden");
  arrowDownFeatures.classList.remove("hidden");
  arrowUpFeatures.classList.add("hidden");
});

arrowCompanyDown.addEventListener("click", () => {
  companyDropDown.classList.toggle("hidden");
  arrowCompanyDown.classList.add("hidden");
  arrowCompanyUp.classList.remove("hidden");
});

arrowCompanyUp.addEventListener("click", () => {
  companyDropDown.classList.toggle("hidden");
  arrowCompanyDown.classList.remove("hidden");
  arrowCompanyUp.classList.add("hidden");
});
