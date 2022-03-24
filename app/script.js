'use strict'
let s03area12 = Array.from(document.querySelectorAll('.s03 .area-12'))
let s03area12row = Array.from(document.querySelectorAll('.s03 .area-12 .row'))
let i

s03area12.forEach(element => {
  element.addEventListener('click', () => {
    s03area12row.forEach(element => {
      element.classList.remove('active')
    });
    i = s03area12.indexOf(element)
    s03area12row[i].classList.add('active')
  });
});

/* Слайдер */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});