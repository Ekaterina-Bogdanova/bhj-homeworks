let dropdownName = Array.from(document.getElementsByClassName('dropdown__value'));
let dropdownList = Array.from(document.getElementsByClassName('dropdown__list'));
dropdownName.forEach((item) => { item.addEventListener('click', openList) }); 

function openList(e) {
    dropdownList.forEach((element) => {element.className = 'dropdown__list dropdown__list_active'});
}

let links = Array.from(document.getElementsByClassName('dropdown__link'));
links.forEach((item) => {item.addEventListener('click', itemActive)});

function itemActive(event) {
    event.preventDefault();
    dropdownName.forEach((element) => {element.textContent = event.target.textContent});
    dropdownList.forEach((element) => {element.className = 'dropdown__list'});   
}

