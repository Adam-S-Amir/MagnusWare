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
    <div class="taskbar-divider"></div>
    <div id="tray" class="tray inset-shallow">
    <div class="tray-icons">
        <img class="tray-icon" src="./C/System32/Images/Common/wifi.png" id="WiFi" title="WiFi Status" onclick="WiFi()">
        <img class="tray-icon" src="./C/System32/Images/Icons/battery-16x16.png" id="battery" title="Battery" onclick="batteryalert()">
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

let CSSLinks = [
    "./C/System32/CSS/OS-Layout.css",
    "./C/System32/CSS/Stylesheet.css",
    // "./C/System32/CSS/jQuery-ui.css",
    // "./C/System32/CSS/System.css"
]

for (var i = 0; i < CSSLinks.length; i++) {
    let CSS = document.createElement("link");
    CSS.rel = "stylesheet";
    CSS.href = CSSLinks[i];
    document.head.appendChild(CSS);
}

let scriptUrls = [
    // windows
    "./C/System32/JS/$Window.js",
    "./C/System32/JS/window-switcher.js",
    // end windows
    "./C/System32/JS/JukeBox.js",
    "./C/System32/JS/Clippy/Build/clippy.min.js",
    "./C/System32/JS/Msgbox.js",
    "./C/System32/JS/Widgets.js",
    "./C/System32/JS/Settings.js",
    "./C/System32/JS/StoreFront.js",
    "./C/System32/JS/Update.js",
    "./C/System32/JS/Cursor.js",
    "./C/System32/JS/Pep.js",
    "./C/System32/JS/Parse-Theme.js",
    "./C/System32/JS/Helpers.js",
    "./C/System32/JS/Filesystem-Setup.js",
    "./C/System32/JS/Task.js",
    "./C/System32/JS/Taskbar-Time.js",
    "./C/System32/JS/$Start-Menu.js",
    // folder shit
    "./C/System32/JS/FolderViewItem.js",
    "./C/System32/JS/FolderView.js",
    // end shit
    "./C/System32/JS/$Desktop.js",
    "./C/System32/JS/Visualizer-overlay.js",
    "./C/System32/JS/Programs.js",
    "./C/System32/JS/MagnusFS.js",
    "./C/System32/JS/MenuBar.js",
    "./C/System32/JS/System.js"

];

while (i < scriptUrls.length) {
    let script = document.createElement("script");
    script.src = scriptUrls[i];
    //     script.defer = true;
    document.body.appendChild(script);
    i++;
}