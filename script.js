// script.js

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskContainer = document.getElementById('task-container');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear input after adding task
    }
});

function addTask(taskText) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.textContent = taskText;

    taskElement.addEventListener('click', function() {
        taskElement.classList.toggle('done');
    });

    taskContainer.appendChild(taskElement);
}

