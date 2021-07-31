let links = Array.from(document.getElementsByClassName('has-tooltip'));

links.forEach((item) => {
    let tooltipText = item.getAttribute('title');
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.style = 'left: 0; top: 0';
    tooltip.textContent = tooltipText;
    item.insertAdjacentElement('afterEnd', tooltip);
});

links.forEach((item) => item.addEventListener('click', showTooltip));

let tooltipsBox = Array.from(document.getElementsByClassName('tooltip'));

function showTooltip(event) {
    event.preventDefault();

    let tooltipLink = tooltipsBox.find((element) => {return element.textContent === event.target.getAttribute('title')});
    if (tooltipLink.classList.contains('tooltip_active')) {
        tooltipLink.classList.remove('tooltip_active')
    } else {
        let activityTooltip = tooltipsBox.find((element) => {return element.classList.contains('tooltip_active')});
        if (activityTooltip) {
            activityTooltip.classList.remove('tooltip_active');        
        }
        let coordsLink = event.target.getBoundingClientRect();
        tooltipLink.style.left = coordsLink.left + "px";
        tooltipLink.style.top = coordsLink.bottom + "px";
        tooltipLink.classList.add('tooltip_active')       
    }    
}

window.addEventListener('scroll', fixtooltip);

function fixtooltip() {
    let toooltipActive = tooltipsBox.find((element) => {return element.classList.contains('tooltip_active')});
    if (toooltipActive) {
        let linkActive = links.find((element) => {return element.getAttribute('title') === toooltipActive.textContent});
        let coordsLink = linkActive.getBoundingClientRect();
        toooltipActive.style.left = coordsLink.left + "px";
        toooltipActive.style.top = coordsLink.bottom + "px";
    }   
}