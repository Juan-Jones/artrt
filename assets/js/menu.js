'use strict';

(function iifeMenu(document, window) {
    const menuBtn = document.querySelector('.menu__btn');
    const menu = document.querySelector('.menu__list');

    if (!menuBtn || !menu) return; // Prevent errors if elements are missing

    function toggleMenu() {
        menu.classList.toggle('menu__list--active');
        menu.classList.toggle('menu__list--transition');
        menuBtn.classList.toggle('menu__btn--active');
        menuBtn.setAttribute(
            'aria-expanded',
            menuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    }

    function removeMenuTransition() {
        menu.classList.remove('menu__list--transition');
    }

    menuBtn.addEventListener('click', toggleMenu);
    menu.addEventListener('transitionend', removeMenuTransition);

})(document, window);
