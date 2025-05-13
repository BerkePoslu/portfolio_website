// Add CSS for the animations at the start
const style = document.createElement("style");
style.textContent = `
  @keyframes moveBackground1 {
    0% { 
      background-position: 0 0;
      transform: translateY(0);
    }
    100% { 
      background-position: -300px 100px;
      transform: translateY(-100px);
    }
  }
  @keyframes moveBackground2 {
    0% { 
      background-position: 0 0;
      transform: translateX(0);
    }
    100% { 
      background-position: 200px -150px;
      transform: translateX(-50px);
    }
  }
  @keyframes moveBackground3 {
    0% { 
      background-position: 0 0;
      transform: translate(0, 0);
    }
    100% { 
      background-position: -250px -250px;
      transform: translate(50px, -50px);
    }
  }
`;
document.head.appendChild(style);

var i = 0;
var txt = "Hello, I am Berke Poslu";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title_Name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(function () {
      document.getElementById("title_Button").classList.add("fadingin");
      document.getElementById("title_Button").classList.remove("d-nothing");
    }, 500);
  }
}

window.onload = function () {
  window.scrollTo(0, 0);
  setTimeout(function () {
    typeWriter();
    overflowFunction();
    AOS.init();
    let isDark = localStorage.getItem("isDark") === "true";
    applyDarkMode(isDark);
    scrollspy();
  }, 400);
};

function overflowFunction() {
  console.log("clicked");
  document
    .getElementById("title_Button")
    .addEventListener("click", function () {
      console.log("overflow");
      document.body.style.overflow = "auto";
    });

  document.getElementById("title_Button").onclick = function () {
    setTimeout(function () {
      window.location.href = "#aboutme";
    }, 200);
  };
}

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function applyDarkMode(isDark) {
  let root = document.querySelector(":root");
  let container = document.querySelector("#container");

  if (isDark) {
    root.style.setProperty("--color-body", "#1a1a1a");
    root.style.setProperty("--color-body-dark", "#f0f0f0");
    root.style.setProperty("--color-heading", "#ffcc00");
    root.style.setProperty("--color-text", "#e0e0e0");
    root.style.setProperty("--color-base", "#2d2d2d");
    root.style.setProperty("--color-brand", "#ffb366");
    root.style.setProperty("--color-globe", "#000000");
    if (container) {
      container.style.background = "none";
      container.style.animation = "none";
    }
    let buttonIcon = document.querySelector("#toggleDarkModeButton > i");
    if (buttonIcon) {
      buttonIcon.classList.add("fa-sun");
      buttonIcon.classList.remove("fa-moon");
    }
  } else {
    root.style.setProperty("--color-body", "#f0f0f0");
    root.style.setProperty("--color-body-dark", "#1a1a1a");
    root.style.setProperty("--color-heading", "#0066cc");
    root.style.setProperty("--color-text", "#333333");
    root.style.setProperty("--color-base", "#e0e0e0");
    root.style.setProperty("--color-brand", "#ffb366");
    root.style.setProperty("--color-globe", "#ffffff");
    if (container) {
      // Layer 1: Large floating particles
      const pattern1 =
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="300" height="300" fill="transparent"/><circle cx="50" cy="150" r="20" fill="%23dedede" opacity="0.15"/><circle cx="250" cy="50" r="15" fill="%23dedede" opacity="0.1"/><circle cx="150" cy="250" r="25" fill="%23dedede" opacity="0.12"/><circle cx="200" cy="100" r="10" fill="%23dedede" opacity="0.08"/><circle cx="100" cy="200" r="18" fill="%23dedede" opacity="0.1"/></svg>\')';

      // Layer 2: Medium squares and rectangles
      const pattern2 =
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="transparent"/><rect x="50" y="100" width="15" height="15" transform="rotate(15)" fill="%23dedede" opacity="0.12"/><rect x="250" y="300" width="20" height="10" transform="rotate(-20)" fill="%23dedede" opacity="0.08"/><rect x="300" y="150" width="12" height="12" transform="rotate(45)" fill="%23dedede" opacity="0.1"/><rect x="100" y="250" width="8" height="20" transform="rotate(-10)" fill="%23dedede" opacity="0.15"/></svg>\')';

      // Layer 3: Small dots constellation
      const pattern3 =
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"><rect width="500" height="500" fill="transparent"/><circle cx="50" cy="50" r="2" fill="%23dedede" opacity="0.2"/><circle cx="150" cy="150" r="3" fill="%23dedede" opacity="0.15"/><circle cx="400" cy="400" r="2" fill="%23dedede" opacity="0.2"/><circle cx="250" cy="350" r="2" fill="%23dedede" opacity="0.15"/><circle cx="350" cy="100" r="3" fill="%23dedede" opacity="0.1"/><circle cx="100" cy="400" r="2" fill="%23dedede" opacity="0.12"/><circle cx="450" cy="250" r="2" fill="%23dedede" opacity="0.18"/></svg>\')';

      container.style.background = `${pattern1}, ${pattern2}, ${pattern3}`;
      container.style.backgroundRepeat = "repeat, repeat, repeat";
      container.style.backgroundSize = "300px 300px, 400px 400px, 500px 500px";
      container.style.position = "relative";
      container.style.overflow = "hidden";
      container.style.animation =
        "moveBackground1 15s ease-in-out infinite alternate, moveBackground2 20s ease-in-out infinite alternate, moveBackground3 25s ease-in-out infinite alternate";
    }
    let buttonIcon = document.querySelector("#toggleDarkModeButton > i");
    if (buttonIcon) {
      buttonIcon.classList.remove("fa-sun");
      buttonIcon.classList.add("fa-moon");
    }
  }
}

function toggleDarkMode() {
  let isDark = localStorage.getItem("isDark") === "true";
  isDark = !isDark;
  localStorage.setItem("isDark", isDark);
  applyDarkMode(isDark);
}

function scrollspy() {
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href").substring(1) === current) {
        item.classList.add("active");
      }
    });
  });

  // Add smooth scrolling
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = item.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });
}

// Add event listener for dark mode toggle button
document
  .getElementById("toggleDarkModeButton")
  .addEventListener("click", toggleDarkMode);
