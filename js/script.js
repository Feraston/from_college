if(window.innerWidth >= 750){
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
} else {
  var swiper1 = new Swiper(".mySwiper_one", {
    slidesPerView: 1,
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
}

var swiper2 = new Swiper(".mySwiper_two", {
  // slidesPerView: 4,
  spaceBetween: 30,
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


