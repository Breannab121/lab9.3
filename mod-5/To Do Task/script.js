const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');


addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value; // Get the value from the input field
    if (taskText.trim() === "") { // Check if input is empty
        alert("Please enter a task!");
        return; // Stop if no task is entered
    }

    const newTask = document.createElement('li'); // Create a new li element
    newTask.innerHTML = `${taskText} <button class="remove">Remove</button>`; // Add the text and remove button to the new task

    // Add a click event listener to the "remove" button inside the new task
    const removeButton = newTask.querySelector('.remove');
    removeButton.addEventListener('click', () => {
        newTask.remove(); // Remove the entire task when the remove button is clicked
    });

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = '';
});



const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;


