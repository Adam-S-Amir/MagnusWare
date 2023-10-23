let CSSLinks = [
    "./C/System32/CSS/OS-Layout.css",
    "./C/System32/CSS/Stylesheet.css",
    // "./C/System32/CSS/jQuery-ui.css",
    // "./C/System32/CSS/System.css"
]

function loadCSSSequentially(index) {
    if (index < CSSLinks.length) {
        let CSS = document.createElement("link");
        CSS.rel = "stylesheet";
        CSS.href = CSSLinks[index];
        CSS.onload = function () {
            loadCSSSequentially(index + 1);
        };
        document.head.appendChild(CSS);
    }
}

loadCSSSequentially(0);

let scriptUrls = [
    "./C/System32/JS/Clippy/Build/clippy.min.js",
    "./C/System32/JS/Browserfs.js",
    "./C/System32/JS/parse-theme.js",
    "./C/System32/JS/MenuBar.js",
    "./C/System32/JS/Window.js",
    "./C/System32/JS/msgbox.js",
    "./C/System32/JS/helpers.js",
    "./C/System32/JS/Filesystem-Setup.js",
    "./C/System32/JS/iframe-windows.js",
    "./C/System32/JS/Task.js",
    "./C/System32/JS/$start-menu.js",
    "./C/System32/JS/FolderView.js",
    "./C/System32/JS/FolderViewItem.js",
    "./C/System32/JS/$Desktop.js",
    "./C/System32/JS/window-switcher.js",
    "./C/System32/JS/visualizer-overlay.js",
    "./C/System32/JS/programs.js",
    "./C/System32/JS/Widgets.js",
    "./C/System32/JS/taskbar-time.js",
    "./C/System32/JS/Settings.js",
    "./C/System32/JS/StoreFront.js",
    "./C/System32/JS/Update.js",
    "./C/System32/JS/Cursor.js",
    "./C/System32/JS/MagnusFS.js",
    "./C/System32/JS/System.js",
    "./C/System32/JS/JukeBox.js",
];

function loadScriptsSequentially(index) {
    if (index < scriptUrls.length) {
        let script = document.createElement("script");
        script.src = scriptUrls[index];
        script.onload = function () {
            loadScriptsSequentially(index + 1);
        };
        document.body.appendChild(script);
    }
}

loadScriptsSequentially(0);

const vInfo = document.createElement('span');
const splash = document.createElement('div');
const taskbr = document.createElement('div');

taskbr.classList.add('taskbar');

vInfo.id = 'version-info';
taskbr.id = 'taskbr';
splash.id = 'splash-screen';

vInfo.setAttribute("onclick", "hideinfo();");

vInfo.title = 'Click to hide';

let start = [`
    <div class="start-button toggle" title="Click here to begin.">
        <img id="start-img" src="./C/System32/Images/Common/start.png">
    </div>
    <div class="taskbar-divider"></div>
    <div class="tasks"></div>
    <div id="tray" class="tray inset-shallow">
    <div class="tray-icons">
        <img class="tray-icon" src="./C/System32/Images/Common/wifi.png" id="WiFi" title="WiFi Status" onclick="WiFi()">
        <img class="tray-icon" src="./C/System32/Images/Icons/audio-okay-16x16.png" title="Volume" onclick="hidevol()">
    </div>
    <div class="taskbar-time" id="time" onclick="hidecal()"></div>
`]
taskbr.innerHTML = start;
splash.innerHTML = "Loading...";
document.body.appendChild(vInfo);
document.body.appendChild(taskbr);
document.body.appendChild(splash);
document.getElementById('splash-screen').style.display = 'none';