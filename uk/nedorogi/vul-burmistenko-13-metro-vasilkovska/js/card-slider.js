const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
    },
  
    // If we need pagination
    pagination: {
      el: '.pagination',
      clickable: true,
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button--active',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.carousel-button.next',
      prevEl: '.carousel-button.prev',
    },

  });
  