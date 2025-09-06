function loadComponent(id, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error("Component not found: " + file);
      return response.text();
    })
    .then((html) => {
      document.getElementById(id).innerHTML = html;

      if (id === "navbar") {
        addNavbarScrollEffect();
        highlightActiveNavLink();
      }
    })
    .catch((err) => console.error(err));
}

function addNavbarScrollEffect() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

function highlightActiveNavLink() {
  const links = document.querySelectorAll(".navbar-right a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (href === "index.html" && currentPage === "")) {
      link.classList.add("active");
    }
  });
}
