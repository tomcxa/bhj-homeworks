window.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('tasks__input');
    const addButton = document.getElementById('tasks__add');
    const tasksList = document.getElementById('tasks__list');

    if (localStorage.getItem('tasks')) {//восстанавливаем задачи
        tasksList.innerHTML = localStorage.getItem('tasks');
    }

    function addTask(task) {
        if (task) {
            tasksList.innerHTML += `<div class="task">
                <div class="task__title">
                ${task}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`;
        }
    }

    function renderNewTask() {
        const task = taskInput.value.trim();
        addTask(task);
        localStorage.setItem('tasks', tasksList.innerHTML);
        taskInput.value = '';
    }

    taskInput.addEventListener('keypress', event => {
        if (event.code == 'Enter') {
            renderNewTask();
        }
    });

    addButton.addEventListener('click', event => {
        event.preventDefault();
        renderNewTask();
    });

    tasksList.addEventListener('click', event => {
        const taskItem = event.target.closest('.task');

        if (event.target.classList.contains('task__remove')) {
            taskItem.remove();
            localStorage.setItem('tasks', tasksList.innerHTML);
        }
    });
});