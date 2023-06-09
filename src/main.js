import { createApp } from 'vue'

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import './style.css'
import App from './App.vue'

import router from './router'

const app = createApp(App)
app.use(router);
app.mount('#app')

// Toggle menu
const toggleMenu = document.querySelector("#toggle-menu");
const toggleMenuIcon = toggleMenu.querySelector("img");
const menu = document.querySelector("#menu");

toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("translate-y-[-200%]");
  changeMenuIcon();
});

// Close menu when click menu list
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    menu.classList.add("translate-y-[-200%]");
    changeMenuIcon();
  });
});

function changeMenuIcon() {
  const isContainTranslate = menu.classList.contains("translate-y-[-200%]");
  const icon = isContainTranslate ? "icon-menu" : "icon-close";
  toggleMenuIcon.src = `/${icon}.svg`;
}

// Get the 'to top' button element by ID
var toTopButton = document.getElementById("to-top-button");

// Check if the button exists
if (toTopButton) {

  // On scroll event, toggle button visibility based on scroll position
  window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      toTopButton.classList.remove("hidden");
    } else {
      toTopButton.classList.add("hidden");
    }
  };

  // Function to scroll to the top of the page smoothly
  window.goToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
}

//datetime
document.getElementById("year").innerHTML = new Date().getFullYear();

Fancybox.bind("[data-fancybox]", {
  contentClick: "close"
});
