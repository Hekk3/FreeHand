// .hero__content slider

var mySwiper = new Swiper('.hero__slider-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.hero__slider-next',
    prevEl: '.hero__slider-prev',
  },
})

// End .hero__content slider


// Burger menu

const nav = document.querySelector('.hero__header');
const burger = document.querySelector('.burger');


burger.addEventListener('click', () => {
  nav.classList.toggle('hero__header--active');
  burger.classList.toggle('burger--active');
});


// End burger menu