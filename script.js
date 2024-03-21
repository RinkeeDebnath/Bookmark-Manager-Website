const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const logo = document.getElementById("logo");

const mobileMenu = document.getElementById("menu");
const nav = document.querySelector("nav");

// Event listener to show mobile menu
openMenuBtn.addEventListener("click", showMobileMenu);
function showMobileMenu() {
  mobileMenu.classList.remove("hidden");
  logo.style.color = "white";
  openMenuBtn.classList.add("hidden");
  closeMenuBtn.classList.remove("hidden");
  nav.classList.add("fixed", "top-0", "left-0");
}

// event listener to hide mobile menu
closeMenuBtn.addEventListener("click", hideMobileMenu);
function hideMobileMenu() {
  mobileMenu.classList.add("hidden");
  logo.style.color = "black";
  openMenuBtn.classList.remove("hidden");
  closeMenuBtn.classList.add("hidden");
  nav.classList.remove("fixed", "top-0", "left-0");
}

// Adding event listner to tab clicking
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  e.preventDefault();

  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove("border-b-4", "border-red-700");
  });

  // Hide all panels
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  // Activating only targeted tab
  if (e.target.classList.contains("hover:text-red-700")) {
    e.target.classList.add("border-b-4", "border-red-700");
  } else {
    e.target.children[0].classList.add("border-b-4", "border-red-700");
  }

  // Showing only targetted panel
  const dataTarget = e.target.getAttribute("data-target");

  document.querySelector(`.${dataTarget}`).classList.remove("hidden");
}
