const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        // delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        li.appendChild(deleteButton);

        // Mark done on clicl
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Delete on click
        deleteButton.addEventListener('click', function(e) {
            e.stopPropagation(); // troubleshootin supposed to stop the task from being marked as completed when deleting
            taskList.removeChild(li);
        });
        
               // Append new task to list
               taskList.appendChild(li);
        
               // Clears input field
               taskInput.value = "";
    }
});
