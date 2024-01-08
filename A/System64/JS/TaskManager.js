//! TODO: Make into HTML file

function TaskMgr() {
    let task = [`
		<script src="../A/System64/JS/MenuBar.js"></script>
        <ul id='tasks-list'></ul>
    `];

    var menus = {
        "&File": [{
                item: "&New",
                shortcut: "Ctrl+N",
                description: "Creates a new document.",
            },
            {
                item: "&Open...",
                shortcut: "Ctrl+O",
                description: "Opens an existing document.",
            },
            {
                item: "&Save",
                shortcut: "Ctrl+S",
                description: "Saves the active document.",
            },
            {
                item: "Save &As...",
                shortcut: "Ctrl+Shift+S",
                description: "Saves the active document with a new name.",
            },
            MENU_DIVIDER,
            {
                item: "Page Se&tup...",
                action: function () {
                    print();
                },
                description: "Prints the active document and sets printing options.",
            },
            {
                item: "&Print...",
                shortcut: "Ctrl+P",
                action: function () {
                    print();
                },
                description: "Prints the active document and sets printing options.",
            },
            MENU_DIVIDER,
            {
                item: "E&xit",
                action: function () {
                    close();
                },
                description: "Quits Notepad.",
            }
        ],
        "&Edit": [{
                item: "&Undo",
                shortcut: "Ctrl+Z",
                enabled: function () {
                    return document.queryCommandEnabled("undo");
                },
                action: function () {
                    document.execCommand("undo");
                },
                description: "Undoes the last action.",
            },
            {
                item: "&Repeat",
                shortcut: "Ctrl+Shift+Z",
                enabled: function () {
                    return document.queryCommandEnabled("redo");
                },
                action: function () {
                    document.execCommand("redo");
                },
                description: "Redoes the previously undone action.",
            },
            MENU_DIVIDER,
            {
                item: "Cu&t",
                shortcut: "Ctrl+X",
                enabled: function () {
                    return document.queryCommandEnabled("cut");
                },
                action: function () {
                    $textarea.focus();
                    document.execCommand("cut");
                },
                description: "Cuts the selection and puts it on the Clipboard.",
            },
            {
                item: "&Copy",
                shortcut: "Ctrl+C",
                enabled: function () {
                    return document.queryCommandEnabled("copy");
                },
                action: function () {
                    $textarea.focus();
                    document.execCommand("copy");
                },
                description: "Copies the selected text to the Clipboard.",
            },
            {
                item: "&Paste",
                shortcut: "Ctrl+V",
                enabled: function () {
                    return document.queryCommandEnabled("paste");
                },
                action: function () {
                    $textarea.focus();
                    document.execCommand("paste");
                },
                description: "Inserts the contents of the Clipboard.",
            },
            {
                item: "De&lete",
                shortcut: "Del",
                enabled: function () {
                    var textarea = $textarea.get(0);
                    var startPos = textarea.selectionStart;
                    var endPos = textarea.selectionEnd;
                    return (endPos !== startPos);
                },
                action: function () {
                    $textarea.focus();
                    if (document.queryCommandEnabled("delete")) {
                        document.execCommand("delete");
                    } else {
                        var textarea = $textarea.get(0);
                        var startPos = textarea.selectionStart;
                        var endPos = textarea.selectionEnd;
                        var selectionBefore = textarea.value.substring(0, startPos);
                        var selectionAfter = textarea.value.substring(endPos);
                        textarea.textContent = selectionBefore + selectionAfter;
                        textarea.focus();
                        textarea.selectionStart = textarea.selectionEnd = startPos;
                    }
                },
                description: "Deletes the selection.",
            },
            MENU_DIVIDER,
            {
                item: "Select &All",
                shortcut: "Ctrl+A",
                description: "Selects the entire document.",
            },
            {
                item: "Time/&Date",
                shortcut: "F5",
                enabled: function () {
                    return document.queryCommandEnabled("insertText");
                },
                description: "Inserts the current time and date.",
            },
            MENU_DIVIDER,
            {
                item: "&Word Wrap",
                // checkbox: {
                //     toggle: toggle_word_wrap,
                //     check: is_word_wrap_enabled,
                // },
                description: "Makes overflowing lines either wrap or scroll.",
            },
            {
                item: "Set &Font...",
                action: function () {},
                enabled: false,
                description: "Sets the font and text size.",
            },
        ],
        "&Search": [{
                item: "&Find...",
                shortcut: "Ctrl+F",
                action: function () {},
                enabled: false,
                description: "Finds the specified text.",
            },
            {
                item: "Find &Next",
                shortcut: "F3",
                action: function () {},
                enabled: false,
                description: "Repeats the last find.",
            },
        ],
    };

    var go_outside_frame = false;
    if (frameElement) {
        try {
            if (parent.MenuBar) {
                MenuBar = parent.MenuBar;
                go_outside_frame = true;
            }
        } catch (e) {}
    }
    var menu_bar = MenuBar(menus);
    if (go_outside_frame) {
        $(menu_bar.element).insertBefore(frameElement);
    } else {
        $(menu_bar.element).prependTo($("#app"));
    }

    document.getElementById("div1").innerHTML = task;
}

function updateTaskList() {
    let windowElements = document.querySelectorAll(".window");
    let taskList = document.getElementById("tasks-list");
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