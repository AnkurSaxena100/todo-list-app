const todoInput = document.getElementById('todo-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

addTaskBtn.addEventListener('click', function () {

    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;

    }


    const li = document.createElement('li');
    li.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.addEventListener('click', function () {
        li.classList.toggle('completed');

    });
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = '';

});



