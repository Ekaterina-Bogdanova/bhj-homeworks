let rotatorCase = Array.from(document.getElementsByClassName('rotator__case'));
let index = 0;

function doActive(index) {
    rotatorCase.find((item) => {return item.classList.contains('rotator__case_active')}).classList.remove('rotator__case_active');
    rotatorCase[index].classList.add('rotator__case_active');
}

let showPhrase = setInterval(() => {
    if (index === rotatorCase.length -1) {
        index = 0;
    } else if (index < rotatorCase.length -1) {
        index++;
    }
    return doActive(index);
}, 1000);

window.addEventListener('load', showPhrase);




