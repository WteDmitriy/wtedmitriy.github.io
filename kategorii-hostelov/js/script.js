//Таб-фильтр - все хостелы
const filterMetroAll = document.querySelectorAll('.box');
document.querySelector('.filter__metro-all').addEventListener('click', event => {
    if (event.target.tagName !== 'OPTION') return false;

    let filterClass = event.target.dataset['f'];

    filterMetroAll.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide');
        }
    });
});
//Таб-фильтр Красная ветка метро
const filterMetroRed = document.querySelectorAll('.box');
document.querySelector('.filter__metro-red').addEventListener('click', event => {
    if (event.target.tagName !== 'OPTION') return false;

    let filterClass = event.target.dataset['f'];

    filterMetroRed.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide');
        }
    });
});
//Таб-фильтр Зеленая ветка метро
const filterMetroGreen = document.querySelectorAll('.box');
document.querySelector('.filter__metro-green').addEventListener('click', event => {
    if (event.target.tagName !== 'OPTION') return false;

    let filterClass = event.target.dataset['f'];

    filterMetroGreen.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide');
        }
    });
});
//Таб-фильтр Синяя ветка метро
const filterMetroBlue = document.querySelectorAll('.box');
document.querySelector('.filter__metro-blue').addEventListener('click', event => {
    if (event.target.tagName !== 'OPTION') return false;

    let filterClass = event.target.dataset['f'];

    filterMetroBlue.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide');
        }
    });
});
//Таб-фильтр Районы
const filterRegion = document.querySelectorAll('.box');
document.querySelector('.filter__region').addEventListener('click', event => {
    if (event.target.tagName !== 'OPTION') return false;

    let filterClass = event.target.dataset['f'];

    filterRegion.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide');
        }
    });
});
//Таб-фильтр Массивы
const filterMassive = document.querySelectorAll('.box');
document.querySelector('.filter__massive').addEventListener('click', event => {
    if (event.target.tagName !== 'OPTION') return false;

    let filterClass = event.target.dataset['f'];

    filterMassive.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide');
        }
    });
});


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
