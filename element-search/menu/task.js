const menuMain = Array.from(document.getElementsByClassName('menu menu_main'));

Array.from(menuMain[0].querySelectorAll('.menu__link')).forEach((links) => {
    links.onclick = function() {
        if (this.textContent != 'Главная' || this.textContent != 'Контакты') {
            let menuActive = Array.from(document.getElementsByClassName('menu menu_sub menu_active'));
            menuActive.forEach((item) => {item.className = 'menu menu_sub'});
            this.closest('li').querySelector('ul').className = 'menu menu_sub menu_active';
            return false;
        }
    }      
});
