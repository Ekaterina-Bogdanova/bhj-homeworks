let timerObj = document.getElementById("timer");
let timerValue = Number(timerObj.textContent);

let timerId = setInterval(() => {    
    if (timerValue == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerId);
    } else {
        timerValue--;
        timerObj.textContent = timerValue;
    }
    
}, 1000);