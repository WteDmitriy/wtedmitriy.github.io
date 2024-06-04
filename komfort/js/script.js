//Кнопка с выпадающим списком
document.querySelectorAll(".dropbutton__btn").forEach(button => {
    button.addEventListener('click', function(event){
        document.querySelectorAll('.dropbutton__item').forEach(item => {
            if(item.querySelector('.dropbutton__btn')!==button){
                item.classList.remove('dropbutton__item-open')
            }    
        })
        event.isClick = true
        button.parentElement.classList.toggle('dropbutton__item-open')
    })
})
document.body.addEventListener('click', function(event){
    if (
        event._isClick == true ||
        event.target.classList.contains('dropbutton__btn') == true ||
        event.target.classList.contains('dropdown-menu') == true   
        ) return

        document.querySelectorAll('.dropbutton__item').forEach(item => {
            item.classList.remove('dropbutton__item-open')
    })
})

//Гамбургер
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

// const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 20,
//     breakpoints: {
      
//       // when window width is >= 480px
//       768: {
//         slidesPerView: 2,
//       },
//       // when window width is >= 768px
//       1200: {
//         slidesPerView: 3,
//       }
//     },
  
//     // If we need pagination
//     pagination: {
//       el: '.pagination',
//       bulletClass: 'pagination__button',
//       bulletActiveClass: 'pagination__button--active',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.carousel-button.next',
//       prevEl: '.carousel-button.prev',
//     },

//   });

