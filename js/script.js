// selectors
const navButton = document.getElementById("nav-button");
const miniNavbar = document.getElementById("mini-navbar");
// listeners
navButton.addEventListener("click", openNavbar);

// functions
function openNavbar() {
  miniNavbar.classList.toggle("hidden");
  miniNavbar.classList.toggle("open");
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
