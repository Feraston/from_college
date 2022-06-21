// JS Сучилища
var swiper1 = new Swiper(".mySwiper_one", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});