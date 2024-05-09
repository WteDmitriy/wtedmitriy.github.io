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