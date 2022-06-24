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

// открытие карточки при наведении
(function () {
  const card = document.querySelector('.sidebar__inner');
  const cardInner = document.querySelector('.sidebar__body');

  const showCard = function () {
  cardInner.classList.add('sidebar_opened');
};
  const removeCard = function () {
  cardInner.classList.remove('sidebar_opened');

}

card.addEventListener('mouseover',showCard);
card.addEventListener('mouseout',removeCard);
})();




