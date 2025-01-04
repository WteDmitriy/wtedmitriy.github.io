const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      992: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 4,
      },
      480: {
        slidesPerView: 2,
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.carousel-button.next',
      prevEl: '.carousel-button.prev',
    },

  });
  