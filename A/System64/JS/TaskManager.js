function TaskMgr() {
    let task = [`

    <div id='tasks-list'></div>

    `]
    document.getElementById("div1").innerHTML = task;

    function updateTaskList() {
        let windowElements = document.querySelectorAll(".window");
        let taskList = document.getElementById("tasks-list");
        taskList.innerHTML = ""; // Clear the existing task list

        windowElements.forEach(windowElement => {
            const newTask = document.createElement("p");
            newTask.innerHTML = windowElement.id;
            taskList.appendChild(newTask);
        });
    }
    setInterval(updateTaskList, 2000);
}

//# sourceURL=MagnusWare
