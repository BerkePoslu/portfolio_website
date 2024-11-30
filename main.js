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
    toggleDarkMode();
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

function toggleDarkMode() {
  let root = document.querySelector(":root");
  let isDark = localStorage.getItem("isDark");

  if (isDark === null || isDark === "false") {
    // Corrected color value and property names
    root.style.setProperty("--color-body", "#171010");
    root.style.setProperty("--color-body-dark", "hsl(35, 1%, 99%)");
    root.style.setProperty("--color-heading", "#fff");
    root.style.setProperty("--color-text", "hsl(35, 1%, 99%)");
    root.style.setProperty("--color-base", "#362222");
    root.style.setProperty("--color-brand", "#E5BA73");
    root.style.setProperty("--color-globe", "#141010");
    localStorage.setItem("isDark", "true");

    let buttonIcon = document.querySelector("#toggleDarkModeButton > i");
    if (buttonIcon) {
      buttonIcon.classList.add("fa-sun");
      buttonIcon.classList.remove("fa-moon");
    }
  } else {
    root.style.setProperty("--color-body", "hsl(35, 1%, 99%)");
    root.style.setProperty("--color-body-dark", "hsl(35, 38.2%, 22.4%)");
    root.style.setProperty("--color-heading", "hsl(35, 38.2%, 22.4%)");
    root.style.setProperty("--color-text", "hsl(35, 38.2%, 25.4%)");
    root.style.setProperty("--color-base", "hsl(35, 37.5%, 95.2%)");
    root.style.setProperty("--color-brand", "hsl(35, 38.2%, 72.4%)");
    root.style.setProperty("--color-globe", "#fff");
    localStorage.setItem("isDark", "false");

    let buttonIcon = document.querySelector("#toggleDarkModeButton > i");
    if (buttonIcon) {
      buttonIcon.classList.remove("fa-sun");
      buttonIcon.classList.add("fa-moon");
    }
  }
}

function scrollspy() {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;

    navLinks.forEach((link) => {
      const section = document.querySelector(link.hash);

      if (section) {
        const sectionTop = section.offsetTop - 70;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  });
}
