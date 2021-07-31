const listOfInterests = Array.from(document.getElementsByClassName('interests interests_main'));
//Список с интересами
const interests = Array.from(listOfInterests[0].querySelector('ul').children);

//повесили событие-изменение на "главный" чекбокс
interests.forEach((item) => {
    item.querySelector('.interest__check').addEventListener('change', markElements)
})

function markElements(event) {
    const childСheckboxes = Array.from(event.target.closest('.interest').querySelector('ul').querySelectorAll('.interest__check'));
    childСheckboxes.forEach((item) => {item.checked = event.target.checked})    
}



