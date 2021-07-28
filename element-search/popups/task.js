const modalActive = document.getElementById('modal_main');
modalActive.className = 'modal modal_active';

Array.from(document.getElementsByClassName('modal__close')).forEach((element) => { 
    element.onclick = function() {
        Array.from(document.getElementsByClassName('modal modal_active')).forEach((item) => {
            item.className = 'modal'
        })
    }                    
});

Array.from(document.getElementsByClassName('show-success')).forEach((element) => { 
    element.onclick = function() {
        document.getElementById('modal_success').className = 'modal modal_active'
    }     
});
