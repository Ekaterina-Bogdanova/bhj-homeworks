let tabs = Array.from(document.getElementsByClassName('tab'));
let contents = Array.from(document.getElementsByClassName('tab__content'));
tabs.forEach((tab) => {tab.addEventListener('click', showTab)});

function showTab(event) {
    tabs.forEach((element) => {element.className = 'tab'});
    contents.forEach((element) => {element.className = 'tab__content'});
    this.className = 'tab_active';
    let posTab = tabs.indexOf(event.target);
    contents.forEach((tabContent, posTabContent) => {
        if (posTabContent === posTab) {
            tabContent.className = 'tab__content_active';
        }
    });
    

}