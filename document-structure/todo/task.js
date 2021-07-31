const tasksList = document.getElementById('tasks__list');
const formTask = document.getElementById('tasks__form');
//кнопка
const button = document.getElementById('tasks__add');
//поле для ввода
const inputField = document.getElementById('task__input');
let context = '';
// //Вешаем события
formTask.addEventListener('click', (e) => {e.preventDefault()});
button.addEventListener('click', buttonUp);
inputField.addEventListener('keyup', enterUp);

//Функция создает шаблон задачи
function createTask() {
    let task = document.createElement('div');
    task.className = 'task';
    let taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    task.appendChild(taskTitle);
            
    let linkText = document.createElement('a');            
    linkText.href = '#';
    linkText.className = 'task__remove';
    linkText.textContent = '×';
    task.appendChild(linkText);
    return task;
}

function buttonUp(event) {
    event.preventDefault();
    
    if (inputField.value !== '') {
        let addedTask = createTask();
        addedTask.querySelector('.task__title').textContent = inputField.value;
        addedTask.querySelector('.task__remove').addEventListener('click', removeTask);
        tasksList.appendChild(addedTask);
        inputField.value = '';
    } 
}

function enterUp(event) {
    if (event.keyCode === 13) {    
        buttonUp(event);  
    } 
}

function removeTask(event) {
    event.target.closest('.task').remove();
}



