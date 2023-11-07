// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Add a new task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';

        // Edit task
        li.querySelector('.edit-button').addEventListener('click', () => {
            const span = li.querySelector('.task-text');
            const newText = prompt('Edit task:', span.textContent);
            if (newText !== null && newText.trim() !== '') {
                span.textContent = newText;
            }
        });

        // Delete task
        li.querySelector('.delete-button').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
});
