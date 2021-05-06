// Navbar
let btnNav = document.getElementById("btn-nav");

btnNav.addEventListener("click", toggleNav);

function toggleNav() {
  let navLinks = document.getElementById("nav-links");
  let btnIcon = document.getElementById("btn-icon");
  navLinks.classList.toggle("hidden");
  if (btnIcon.innerHTML === "menu") {
    btnIcon.innerHTML = "close";
  } else {
    btnIcon.innerHTML = "menu";
  }
}

//

//
