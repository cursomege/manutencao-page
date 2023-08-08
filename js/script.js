// animate

AOS.init({
  duration: 1000,
  once: true
});





// depoimentos

var swiper = new Swiper(".depoimentos", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  // autoplay: {
  //   delay: 7500,
  //   autoplay: true,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: ".s-depoimentos .cards .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".s-depoimentos .cards .depoimentos .swiper-button-next",
    prevEl: ".s-depoimentos .cards .depoimentos  .swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    }
  }

});


// menu mobile

const btnMenu = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay');

function openMenuMobile() {
  document.documentElement.classList.add('menu-opened'); 

}

function closeMenuMobile() {
  document.documentElement.classList.remove('menu-opened'); 

}

btnMenu.addEventListener('click', openMenuMobile);

overlayMenu.addEventListener('click', closeMenuMobile);


