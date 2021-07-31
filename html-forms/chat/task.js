//Нашли чат
const chatWidget = Array.from(document.getElementsByClassName('chat-widget'));
//Активировали его
chatWidget[0].addEventListener('click', function() {this.classList.add('chat-widget_active')});
//Поле ввода
const inputMessage = document.getElementById('chat-widget__input');

inputMessage.addEventListener('keydown', sendMessage);
inputMessage.addEventListener('keydown', askBot);


function sendMessage(event) {
  if (event.keyCode === 13) { 
    if (event.target.value !== '') {
      createClientMessage();
      messages.lastElementChild.querySelector('.message__time').textContent = getCurrentTime();
      messages.lastElementChild.querySelector('.message__text').textContent = event.target.value;
      event.target.value = ''; 
    }        
  }   
}

const messages = document.getElementById('chat-widget__messages');

//Шаблон сообщения клиента
function createClientMessage() {
  messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time"></div>
      <div class="message__text"></div>
    </div>
  `;        
}

//Текущее время
function getCurrentTime() {  
  let getCurrentTime = new Date(); 
  return `${getCurrentTime.getHours()}:${getCurrentTime.getMinutes()}`;
}

//Ответ бота
function askBot(event) {
  if (event.keyCode === 13) {
    setTimeout(() => {
      createClientMessage();
    messages.lastElementChild.className = 'message';
    messages.lastElementChild.querySelector('.message__time').textContent = getCurrentTime();
    messages.lastElementChild.querySelector('.message__text').textContent = getmessageBot();
    }, 500);
    
  }
}

//Получение случайного ответа бота
function getmessageBot() {
  messageBot = [
    'Добрый день!',
    'До свидания',
    'Где ваша совесть?',
    'Кто тут?',
    'Не хамите, уважаемый!',
    'К сожалению, все опереторы сейчас заняты. Не пишите нам больше.',
    'Да...мельчает народ',
    'Какова страна, таковы и нравы...',
    'У вас все хорошо?',
    'Дыши глубже.',
    'Виноваты, конечно, всегда другие…',
    'Оптимизм – это недостаток информации',
    'Командовать парадом буду я!',
    'У вас ещё остались вопросы?',
    'Всегда рады вам помочь!',
    'Время, которое у нас есть, — это деньги, которых у нас нет...',
    'Мы не будем с вами разговаривать, пока вы не купите у нас хотя бы один товар!'
  ];
  let index = Math.floor(Math.random() * messageBot.length);
  return messageBot[index];
}

