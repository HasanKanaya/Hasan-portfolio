var typed = new Typed(".typing", {
  strings: ["Programmer", "Front End Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// About Section
let language = "En";
let xAr = "هذه هي قصتي";
let xEn = "This is my story";
let yAr = `بدأت بتعلم البرمجة عندما كان عمري 16 سنة تعلمت لغة سي بلاس بلاس بالإضافة الى مبادئ الخوازميات
ثم قررت بناء تطبيقات الموبايل لذلك تعلمت لغة الجافا والكوتلن وقمت ببناء تطبيقين الأول لحساب العمر والثاني ليعرض الوقت 
بعد ذلك قررت تصميم لعبة فتعلمت لغة سي شارب وقمت بتصميم لعبة بسيطة مثل لعبة الأفعى`;
let yEn = `I started learning programming when I was 16 years old. I learned C++ language as well as the Logical thinking and algorithms
Then I decided to build mobile applications, so I learned Java and Kotlin and built two applications, the first was to calculate the age and the second to display the time
After that, I decided to design a game, so I learned C# and build a simple game like the a snake game`;
let zAr = `وعندما بدأت بمجال تصميم المواقع لاحظت انه من أروع المجالات بالعالم لأنه يمكنك بناء اي شيء تريده
ومنذ ذلك الوقت خصصت وقتي وجهدي لأصبح من أفضل مطوري المواقع في العالم`;
let zEn = `And when I started into the web Development, I noticed that it is one of the most wonderful careers in the world because you can build anything you want
Since then, I have dedicated my time and effort to become one of the best web developers in the world`;
let allText = document.querySelectorAll(".aboutTextAr");

allText.forEach((e) => {
  e.addEventListener("click", () => {
    if (language == "En") {
      language = "Ar";
      allText[0].innerHTML = xAr;
      allText[1].innerHTML = yAr;
      allText[2].innerHTML = zAr;
      document.querySelector(".allText").style.cssText =
        "color: #8abee0; line-height: 2;";
    } else {
      language = "En";
      allText[0].innerHTML = xEn;
      allText[1].innerHTML = yEn;
      allText[2].innerHTML = zEn;
      document.querySelector(".allText").style.cssText =
        "color: white; line-height: 1.6;";
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
    $(".bigImg img").attr("src", ele.getAttribute("src"));
    $(".bigImg").fadeIn("normal");
    $(".bigImg .closeButton").on("click", function () {
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
