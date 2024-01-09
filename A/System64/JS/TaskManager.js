function updateTaskList() {
    let windowElements = document.querySelectorAll(".window");
    let taskList = document.querySelectorAll("tasks-list");
    taskList.innerHTML = "";
    windowElements.forEach(windowElement => {
        let taskID = windowElement.id;
        let taskDel = document.getElementById(`${taskID.replace(".MXW", ".MX7")}`);
        let taskContainer = document.createElement("div");
        let logButton = document.createElement("button");
        logButton.innerHTML = "X";
        logButton.onclick = function () {
            windowElement.remove();
            taskDel.remove();
            updateTaskList();
            window.confirm("Successfully killed " + taskID.replace("-", " "))
        };
        taskContainer.appendChild(logButton);
        let taskText = document.createElement("span");
        taskText.innerHTML = taskID;
        taskContainer.appendChild(taskText);
        taskList.appendChild(taskContainer);
    });
}