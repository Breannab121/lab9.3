const taskInput = document.getElementById("task"); // Get the task input field
const category = document.getElementById("category"); // Get the category input field
const deadline = document.getElementById("deadline"); // Get the deadline (date input)
const taskStatus = document.getElementById("options"); // Get the task status dropdown
const submitTask = document.getElementById("submitButton"); // Get the submit button
let tasks = [];
submitTask.addEventListener("click", function () {
    const taskValue = taskInput.value;
    const categoryValue = category.value;
    const deadlineValue = deadline.value;
    const statusValue = taskStatus.value;

    if (taskValue === "" || categoryValue === "" || deadlineValue === "" || statusValue === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Create a task object
    const task = {
        id: Date.now(), // Unique ID
        title: taskValue,
        category: categoryValue,
        deadline: deadlineValue,
        status: statusValue
    };

    // Add to the array
    tasks.push(task);

    // Show all tasks
    renderTasks(tasks);

    // Clear inputs
    taskInput.value = "";
    category.value = "";
    deadline.value = "";
    taskStatus.value = "New";
});

function renderTasks(taskArray) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear old tasks

    taskArray.forEach(task => {
        const newItem = document.createElement("li");

        newItem.innerHTML = `
            <strong>Task:</strong> ${task.title}<br>
            <strong>Category:</strong> ${task.category}<br>
            <strong>Deadline:</strong> ${task.deadline}<br>
            <strong>Status:</strong> ${task.status}<br>
            <button onclick="updateStatus(${task.id}, 'Completed')">Mark Completed</button>
            <button onclick="updateStatus(${task.id}, 'Overdue')">Mark Overdue</button>
        `;

        taskList.appendChild(newItem);
    });
}


function updateStatus(taskId, newStatus) {
    tasks = tasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
    );
    renderTasks(tasks);
}

function filterTasksByCategory(categoryName) {
    const filtered = tasks.filter(task => task.category === categoryName);
    renderTasks(filtered);
}

function filterTasksByStatus(statusName) {
    const filtered = tasks.filter(task => task.status === statusName);
    renderTasks(filtered);
}