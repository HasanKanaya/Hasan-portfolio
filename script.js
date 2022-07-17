var typed = new Typed(".typing", {
  strings: ["Programmer", "Front End Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// About Section
let language = "En";
let xAr = "هذه هي قصتي";
let xEn = "Here are my story";
let yAr = "عندما بدأت تعلم البرمجة بدأت بتعلم لغة";
let yEn = "When I started learn coding I started with C++";
let allText = document.querySelectorAll(".aboutTextAr");

allText.forEach((e) => {
  e.addEventListener("click", () => {
    if (language == "En") {
      language = "Ar";
      allText[0].innerHTML = xAr;
      allText[1].innerHTML = yAr;
    } else {
      language = "En";
      allText[0].innerHTML = xEn;
      allText[1].innerHTML = yEn;
    }
    allText.forEach((e) => {
      e.classList.toggle("turnToAr");
    });
  });
});

// About Section

// My works
let section = document.querySelector("section#my-works");

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// My works

// Cer

// let changeImg = document.querySelectorAll(".certifications .mySwiper img");
// let bigImg = document.querySelector(".certifications .bigImg");
// changeImg.forEach((e) => {
//   e.addEventListener("click", () => {
//     if (bigImg.getAttribute("src") != e.getAttribute("src")) {
//       $(".bigImg").fadeOut("normal", function () {
//         bigImg.setAttribute("src", e.getAttribute("src"));
//       });
//       $(".bigImg").fadeIn("fast");
//     }
//   });
// });

let images = document.querySelectorAll(".gallery .image img");
$(".bigImg").fadeOut("fast");
images.forEach((ele) => {
  ele.addEventListener("click", () => {
    // $(".bigImg").css("display", "block");
    // $(".bigImg").animate({
    //   opacity: 1,
    //   width: 400,
    //   height: 300,
    //   left: 20,
    // });
    $(".bigImg img").attr("src", ele.getAttribute("src"));
    $(".bigImg").fadeIn("normal");
    $(".bigImg .closeButton").on("click", function () {
      // $(".bigImg").animate(
      //   {
      //     opacity: 1,
      //     left: -300,
      //   },
      //   function () {
      //     $(".bigImg").fadeOut("normal");
      //   }
      // );
      $(".bigImg").fadeOut("normal");
    });
  });
});
// Cer
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
