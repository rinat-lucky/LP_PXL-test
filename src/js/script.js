document.addEventListener('DOMContentLoaded', () => {

// работа бургер-меню

    const menu = document.querySelector('.menu__list'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu__list_active');
        });
    });

    // включение нижней подсветки для кнопок меню (десктоп)
    
    // const tabs = document.querySelectorAll('.menu__item');
    // const tabsParent = document.querySelector('.menu__list');

    // function lightOff() {
    //     tabs.forEach(item => {
    //         item.classList.remove('menu__item_active');
    //     });
    // }

    // function lightOn(i) {
    //     tabs[i].classList.add('menu__item_active');
    // }

    // lightOff();
    // lightOn();

    // tabsParent.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('menu__item')) {
    //         tabs.forEach((item, i) => {
    //             if (target == item) {
    //                 lightOff();
    //                 lightOn(i);
    //             }
    //         });
    //     }
    // });

});