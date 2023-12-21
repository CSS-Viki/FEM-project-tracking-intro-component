const hamburger = document.getElementById("menu-bar");
const navLists = document.getElementById("nav-lists");

function openMenu() {
  navLists.classList.toggle("active");
  if(navLists.classList.contains("active")) {
    hamburger.src = "./images/icon-close.svg";
  } else {
    hamburger.src = "./images/icon-hamburger.svg";
  }
}

hamburger.addEventListener("click", openMenu);
