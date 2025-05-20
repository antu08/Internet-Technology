let tasks = [];

 function addTask() 
 {
    let taskInput = document.getElementById("taskInput").value;
    let dueDate = document.getElementById("dueDate").value;
    
    if (taskInput.trim() === "") 
    {
        alert("Task cannot be empty!");
        return;
    }

    let newTask = 
    {
        text: taskInput,
        completed: false,
        dueDate: dueDate
    };

    tasks.push(newTask);
    document.getElementById("taskInput").value = "";
    displayTasks();
}

function displayTasks(filter = "all") 
{
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => 
    {
        if (filter === "all") return true;
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
    });

    filteredTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    filteredTasks.forEach((task, index) => 
    {
        let li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
        
        li.innerHTML = `
            ${task.text} (${task.dueDate || "No Date"}) 
            <button onclick="toggleTask(${index})">✔</button>
            <button onclick="removeTask(${index})">❌</button>
        `;

        taskList.appendChild(li);
    });
}

function toggleTask(index) 
{
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function removeTask(index) 
{
    tasks.splice(index, 1);
    displayTasks();
}

function filterTasks(filter) 
{
    displayTasks(filter);
}

displayTasks();