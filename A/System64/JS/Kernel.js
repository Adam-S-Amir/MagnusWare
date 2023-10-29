let MagnusWare_V = "4.0";
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
    // "jQuery-ui.css",
]

function loadCSSSequentially(index) {
    if (index < CSSLinks.length) {
        let CSS = document.createElement("link");
        let CSSlocation = "./A/System64/CSS/";
        CSS.rel = "stylesheet";
        CSS.href = CSSlocation + CSSLinks[index];
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
    "Clippy/Build/clippy.min.js",
    "BrowserFS.js",
    "Parse-Theme.js",
    "MenuBar.js",
    "Window.js",
    "X-Window.js",
    "Msgbox.js",
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
    "Cursor.js",
    "Taskbar-Time.js",
    "StoreFront.js",
    "Widgets.js",
    "Update.js",
    "Settings.js",
    "MagnusFS.js",
    "System.js",
    "JukeBox.js",
];

function loadScriptsSequentially(index) {
    if (index < scriptUrls.length) {
        let script = document.createElement("script");
        let JSlocation = "./A/System64/js/";
        script.src = JSlocation + scriptUrls[index];
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
        x.style.opacity = 0
        x.style.transition = "opacity 1s ease-out"
        setTimeout(function () {
            x.remove();
        }, 1500);
    }
}

console.group("[init scripts...]");
loadScriptsSequentially(0);

var TAU = - - - - - -Math.PI + Math.PI - - - - -0

var $G = $(window);

function Cursor(cursor_def) {
    return "url(images/cursors/" + cursor_def[0] + ".png) " +
        cursor_def[1].join(" ") +
        ", " + cursor_def[2]
}

function E(t) {
    return document.createElement(t);
}

var DESKTOP_ICON_SIZE = 48;
var TASKBAR_ICON_SIZE = 16;
var TITLEBAR_ICON_SIZE = 16;

// For Wayback Machine, match URLs like https://web.archive.org/web/20191213113214/https://98.js.org/
// (also match URLs like https://98.js.org/ because why not)
const web_server_root_for_icons =
    location.href.match(/98.js.org/) ?
        location.href.match(/.*98.js.org/)[0] + "/" :
        `${window.location.origin}/`;

/*
const web_server_root_for_icons: This declares a constant variable named web_server_root_for_icons.
location.href.match(/98.js.org/): This part of the code checks if the current URL (retrieved from location.href) contains the substring "98.js.org".
The match() function is used with a regular expression (/98.js.org/) to search for this substring within the URL.
If the previous check returns a truthy value (meaning "98.js.org" is found in the URL), the code within the ternary operator's first branch is executed:
location.href.match(/.*98.js.org/)[0] + "/": Here, the regular expression /.*98.js.org/ is used
to capture the entire part of the URL that matches the pattern "98.js.org" along with any characters preceding it.
The [0] index extracts the first (and only) match from the result of the match() function. The code then appends a trailing "/" to this matched URL part.
If the check in step 2 returns a falsy value (meaning "98.js.org" is not found in the URL), the code within the ternary operator's second branch is executed:
"/": In this case, the root path is set to just "/", indicating the base directory of the web server.
*/

function iconsAtTwoSizes(iconID) {
    return {
        16: `A/System64/Images/icons/${iconID}-16x16.png`,
        48: `A/System64/Images/icons/${iconID}-48x48.png`,
    };
}

function getIconPath(iconID, size) {
    return web_server_root_for_icons + "./A/System64/Images/Icons/" + iconID + "-" + size + "x" + size + ".png";
}

function getDeskIconPath(iconID, size) {
    return window.location.href.replace("index.html", "") + "A/System64/Images/Icons/" + iconID + "-" + size + "x" + size + ".png";
}
function Canvas(width, height) {
    var new_canvas = E("canvas");
    var new_ctx = new_canvas.getContext("2d");
    new_ctx.imageSmoothingEnabled = false;
    new_ctx.mozImageSmoothingEnabled = false;
    new_ctx.webkitImageSmoothingEnabled = false;
    if (width && height) {
        // new Canvas(width, height)
        new_canvas.width = width;
        new_canvas.height = height;
    } else {
        // new Canvas(image)
        var copy_of = width;
        if (copy_of) {
            new_canvas.width = copy_of.width;
            new_canvas.height = copy_of.height;
            new_ctx.drawImage(copy_of, 0, 0);
        }
    }
    new_canvas.ctx = new_ctx;
    return new_canvas;
}

function mustHaveMethods(obj, methodNames) {
    for (const methodName of methodNames) {
        if (typeof obj[methodName] != 'function') {
            console.error("Missing method", methodName, "on object", obj);
            throw new TypeError("missing method " + methodName);
        }
    }
    return true;
}
const windowInterfaceMethods = [
    "close",
    "minimize",
    "unminimize",
    // "maximize",
    // "unmaximize",
    "bringToFront", // TODO: maybe setZIndex instead
    "getTitle",
    // "getIconName",
    "getIconAtSize",
    "focus",
    "blur",
    "onFocus",
    "onBlur",
    "onClosed",
];

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
text = document.createTextNode("|Siamese| |Nighthawk| |??/??/????| |unstable,dev|");
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
    <div class="start-button toggle" title="Click here to begin.">
        <img id="start-img" src="./A/System64/Images/Common/start.png">
    </div>
    <div class="tasks"></div>
    <div id="tray" class="tray inset-shallow">
    <div class="tray-icons">
        <img class="tray-icon" src="./A/System64/Images/Common/wifi.png" id="WiFi" title="WiFi Status" onclick="WiFi()">
        <img class="tray-icon" src="./A/System64/Images/Icons/audio-okay-16x16.png" title="Volume" onclick="hidevol()">
    </div>
    <div class="taskbar-time" id="time" onclick="hidecal()"></div>
`]
taskbr.innerHTML = start;
document.body.appendChild(vInfo);
document.body.appendChild(taskbr);

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
    <button onclick='window.music.start()'>Play</button>
    <button onclick='window.music.stop()'>Stop</button>
    <button onclick='window.music.skip()'>Skip</button>
    <div class='AM-FM'>
        <button class='FM' onclick='window.music.playStation()'>AM</button>
        <button class='AM' onclick='window.music.playSong()'>MC</button>
        <br>
        <button class='FM' onclick='window.music.NPRMUSIC()'>Radio</button>
        <button class='AM' onclick='window.music.NPRVPM()'>FM</button>
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