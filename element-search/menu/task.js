const menuMain = Array.from(document.getElementsByClassName('menu menu_main'));

Array.from(menuMain[0].querySelectorAll('.menu__link')).forEach((links) => {
    links.onclick = function() {
         
        if (!this.closest('li').querySelector('ul').classList.contains('menu menu_sub')) {
            if (this.closest('li').querySelector('ul').className.includes('menu menu_sub menu_active')) {
                this.closest('li').querySelector('ul').className = ('menu menu_sub')                
            } else {
                let menuActive = Array.from(document.getElementsByClassName('menu menu_sub menu_active'));
            menuActive.forEach((item) => {item.className = 'menu menu_sub'});
            this.closest('li').querySelector('ul').className = 'menu menu_sub menu_active';
            }     
            return false;
        }
    }      
});
