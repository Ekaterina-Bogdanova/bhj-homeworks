const clickPrev = Array.from(document.getElementsByClassName('slider__arrow slider__arrow_prev'));
const clickNext = Array.from(document.getElementsByClassName('slider__arrow slider__arrow_next'));
let sliders = Array.from(document.getElementsByClassName('slider__item'));

let index = 0;

function Scroll(index) {
    sliders.forEach((item) => {
        if (item.className.includes('slider__item slider__item_active')) {
            item.className = 'slider__item';
        }
    });
    sliders[index].className = 'slider__item slider__item_active';
}

clickPrev[0].onclick = function() {
    if (index === 0) {
        index = sliders.length -1;
        Scroll(index);
    } else if (index !== 0) {
        index--;
        Scroll(index);
    }            
}

clickNext[0].onclick = function() {
    if (index < sliders.length -1) {
        index++;
        Scroll(index);
    } else if (index === sliders.length -1) {
        index = 0;
        Scroll(index);
    }    
}






