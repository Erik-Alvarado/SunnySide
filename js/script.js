const hamBurger = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".navbar");

// event listeners
hamBurger.addEventListener("click", hamburgerToggle);
// functions
function hamburgerToggle() {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
