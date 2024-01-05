let MagnusWare_V = "4.0";
let Color_Scheme = "Siamese";
let Codename = "Nighthawk";
let Release_Date = "??/??/2024"

console.log("Successfully Initialized Kernel.")

let pElement = document.createElement("p");
pElement.id = "splash-log";
let splashScreen = document.querySelector("#splash-screen");

pElement.innerHTML = "Successfully Initialized BOM." + "<br>";
splashScreen.appendChild(pElement);
splashScreen.scrollTop = splashScreen.scrollHeight;

pElement.innerHTML = "Initializing DOM..." + "<br>";
splashScreen.appendChild(pElement);
splashScreen.scrollTop = splashScreen.scrollHeight;

pElement.innerHTML = "Successfully Initialized DOM." + "<br>";
splashScreen.appendChild(pElement);
splashScreen.scrollTop = splashScreen.scrollHeight;

pElement.innerHTML = "Initializing Kernel..." + "<br>";
splashScreen.appendChild(pElement);
splashScreen.scrollTop = splashScreen.scrollHeight;

pElement.innerHTML = "Successfully Initialized Kernel." + "<br>";
splashScreen.appendChild(pElement);
splashScreen.scrollTop = splashScreen.scrollHeight;

let CSSLinks = [
    "MagnusWare-Layout.css",
    "Stylesheet.css",
    "System.css",
    "Calendar.css",
]

function loadCSSSequentially(index) {
    if (index < CSSLinks.length) {
        let CSS = document.createElement("link");
        let CSSlocation = "./A/System64/CSS/";
        CSS.rel = "stylesheet";
        CSS.href = CSSlocation + CSSLinks[index] + "?v=" + new Date().getTime();
        CSS.onload = function () {
            loadCSSSequentially(index + 1);
        };
        document.head.appendChild(CSS);
        console.log("Successfully Initialized " + CSSLinks[index].replace(".css", "") + ".");
        let pElement = document.createElement("p");
        pElement.id = "splash-log";
        pElement.innerHTML = CSSLinks[index] + "<br>";
        let splashScreen = document.querySelector("#splash-screen");
        splashScreen.appendChild(pElement);
        splashScreen.scrollTop = splashScreen.scrollHeight;

    }
}

loadCSSSequentially(0);

let scriptUrls = [
    "Icons.js",
    "TaskManager.js",
    "Index.js",
    "Clippy/build/clippy.min.js",
    "BrowserFS.js",
    "Parse-Theme.js",
    "MenuBar.js",
    "Window.js",
    "X-Window.js",
    "Notifications.js",
    "Filesystem-Setup.js",
    "Embed-Windows.js",
    "Task.js",
    "Start-Menu.js",
    "FolderView.js",
    "FolderViewItem.js",
    "Desktop.js",
    "Window-Switcher.js",
    "Visualizer-Overlay.js",
    "Programs.js",
    "Search.js",
    "Cursor.js",
    "Time.js",
    "StoreFront.js",
    "Device.js",
    "Widgets.js",
    "Update.js",
    "MagnusFS.js",
    "System.js",
    "Defender.js",
    "JukeBox.js",
];

function loadScriptsSequentially(index) {
    if (index < scriptUrls.length) {
        let script = document.createElement("script");
        let JSlocation = "./A/System64/JS/";
        script.src = JSlocation + scriptUrls[index] + "?v=" + new Date().getTime();
        script.onload = function () {
            loadScriptsSequentially(index + 1);
        };
        document.body.appendChild(script);
        console.log("Successfully Initialized " + scriptUrls[index].replace(".js", "") + ".");
        let pElement = document.createElement("p");
        pElement.id = "splash-log";
        pElement.innerHTML = scriptUrls[index] + "<br>";
        let splashScreen = document.querySelector("#splash-screen");
        splashScreen.appendChild(pElement);
        splashScreen.scrollTop = splashScreen.scrollHeight;
    } else {
        console.groupEnd();
        console.groupEnd();
        let x = document.getElementById("splash-screen");
        x.style.opacity = 0;
        x.style.transition = "opacity 1s ease-out";
        setTimeout(function () {
            x.remove();
        }, 1500);
    }
}

console.group("[init scripts...]");
loadScriptsSequentially(0);

const vInfo = document.createElement('span');
const taskbr = document.createElement('div');

taskbr.classList.add('taskbar');
vInfo.id = 'version-info';
vInfo.style.fontSize = "5px";
vInfo.style.opacity = 0.2;
vInfo.style.color = "rgb(183, 202, 202)";
taskbr.id = 'taskbr';

vInfo.setAttribute("onclick", "hideinfo();");
var lineBreak = document.createElement("br");
var text = document.createTextNode(`|  Un-Activated | | Developer || MagnusWare v${MagnusWare_V} |`);
vInfo.appendChild(text);
vInfo.appendChild(lineBreak);
text = document.createTextNode(`|${Color_Scheme}| |${Codename}| |${Release_Date}| |unstable,dev|`);
vInfo.appendChild(text);
vInfo.addEventListener("mouseover", function () {
    vInfo.style.fontSize = "6px";
    vInfo.style.opacity = 1;
    vInfo.style.color = "azure";
});
vInfo.addEventListener("mouseout", function () {
    vInfo.style.fontSize = "5px";
    vInfo.style.opacity = 0.2;
    vInfo.style.color = "rgb(183, 202, 202)";
});
vInfo.title = 'Click to hide';

let start = [`
    <div id="start-button" class="start-button toggle" title="Start">
        <img id="start-img" src="./A/System64/Images/Common/Start.png">
    </div>
    <div class="tasks"></div>
    <div id="tray" class="tray inset-shallow">
        <div class="tray-icons">
            <img class="tray-icon" src="./A/System64/Images/Icons/audio-okay-16x16.png" title="Volume" onclick="hidevol()">
            <img class="tray-icon" src="./A/System64/Images/Icons/battery-err-16x16.png" id="battery" title="Battery" onclick="batteryalert()">
            <img class="tray-icon" src="./A/System64/Images/Common/Wifi.png" id="WiFi" title="WiFi Status" onclick="WiFi()">
            <div class="taskbar-time" id="time" onclick="hidecal()"></div>
        </div>
    </div>
    <button id="hideAllWindows" onclick="hideAllWindows()" title="Click to hide windows"></button>
`]

taskbr.innerHTML = start;
document.body.appendChild(vInfo);
document.body.appendChild(taskbr);

let StartButton = document.getElementById("start-button");

StartButton.addEventListener('mouseover', function () {
    StartButton.classList.remove('start-button-out');
    StartButton.classList.add('start-button-in');
    StartButton.addEventListener('animationend', function handleAnimationEnd() {
        StartButton.classList.add('start-in');
        StartButton.removeEventListener('animationend', handleAnimationEnd);
    });
});

StartButton.addEventListener('mouseout', function () {
    if (StartButton.classList.contains("start-in")) {
        StartButton.classList.remove('start-in');
    } else if (!StartButton.classList.contains("start-in")) {
        StartButton.classList.add('start-button-out');
        StartButton.classList.remove('start-button-in');
        StartButton.classList.remove('start-in');
    } else {
        StartButton.classList.add('start-button-out');
        StartButton.classList.remove('start-button-in');
        StartButton.classList.remove('start-in');
    }
});


let wifi = `
<div class="wifi-body">
    <p>
        <span id='wifi-type'></span>
    </p>
    <p>
        <span id='wifi-downlink'></span>
    </p>
    <p>
        <span id='wifi-downlink-max'></span>
    </p>
    <p>
        <span id='wifi-rtt'></span>
    </p>
    <p>
        <span id='wifi-save-data'></span>
    </p>
    <p>
        <span id='wifi-effective-type'></span>
    </p>
</div>
`;

const Wifi = document.createElement('div');
Wifi.id = 'Wifi';
Wifi.innerHTML = wifi;

document.body.appendChild(Wifi);

let jukebox = `
<div class="jukebox-header">
    <h3 id="now-playing">Nothing is playing</h3>
</div>
<div class="jukebox-body">
    <input type="range" id="range" class="range">
    <span id="range_value">50%</span>
    <button onclick='window.music.play()'>Play</button>
    <button onclick='window.music.stop()'>Stop</button>
    <button onclick='window.music.skip()'>Skip</button>
    <div class='AM-FM'>
        <button class='FM' onclick='window.music.playRandomStation()'>AM</button>
        <button class='AM' onclick='window.music.playMCSong()'>MC</button>
        <br>
        <button class='FM' onclick='window.music.playWCVEFM()'>FM-1</button>
        <button class='AM' onclick='window.music.playWCVEHD2()'>FM-2</button>
    </div>
</div>
`;

const Jukebox = document.createElement('div');
Jukebox.id = 'jukebox';
Jukebox.innerHTML = jukebox;
document.body.appendChild(Jukebox);

let datePicker = [`
<div class="datepicker-body">
    <div id="greeting"></div>
    <span id="time2"></span>
    <span id="unit"></span>
    <br>
    <span id="full"></span>
    <div id="datepicker"></div>
</div>
`]
const picker = document.createElement('div');
picker.id = 'picker';
picker.innerHTML = datePicker;
document.body.appendChild(picker);

let hideAllWindow = document.getElementById("hideAllWindows");
let dextop;

function hideAllWindows() {
    const windowElements = document.querySelectorAll(".window");
    windowElements.forEach(windowElement => {
        windowElement.style.display = "none";
    });
    dextop = 1;
}

hideAllWindow.addEventListener("mouseover", function () {
    const windowElements = document.querySelectorAll(".window");
    windowElements.forEach(windowElement => {
        windowElement.style.display = "none";
    });
});
hideAllWindow.addEventListener("mouseout", function () {
    const windowElements = document.querySelectorAll(".window");
    if (dextop === 1) {
        windowElements.forEach(windowElement => {
            windowElement.style.display = "none";
        });
    } else {
        windowElements.forEach(windowElement => {
            windowElement.style.display = "flex";
        });
    }
});

window.addEventListener('resize', function (event) {
    detectDeviceType();
});

//# sourceURL=MagnusWare