let controlFontSize = Array.from(document.getElementsByClassName('book__control book__control_font-size'));
let linksFontSize = Array.from(controlFontSize[0].querySelectorAll('a'));
linksFontSize.forEach((item) => {item.addEventListener('click', changeSize)});

function changeSize(event) {
    event.preventDefault();
    linksFontSize.find((elem) => {return elem.classList.contains('font-size_active')}).classList.remove('font-size_active');    
    event.target.classList.add('font-size_active');

    if (event.target.getAttribute('data-size') === 'small') {        
        document.getElementById('book').classList.remove('book_fs-big');
        document.getElementById('book').classList.add('book_fs-small');
        
    } else if (event.target.getAttribute('data-size') === 'big') {
        document.getElementById('book').classList.remove('book_fs-small');
        document.getElementById('book').classList.add('book_fs-big');
    } else {
        document.getElementById('book').className = 'book';
    }
}

