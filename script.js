var typed = new Typed(".typing", {
  strings: ["Programmer", "Front End Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// My works
let section = document.querySelector("section#my-works");

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// My works

// Footer
let goUpButton = document.querySelector(".goUp");

window.onscroll = function () {
  if (window.scrollY >= 850) {
    goUpButton.style.setProperty("display", "block");
  } else {
    goUpButton.style.display = "none";
  }
};

goUpButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Footer
