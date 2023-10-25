console.log("Kernel Successfully Initialized.")

let CSSLinks = [
    "OS-Layout.css",
    "Stylesheet.css",
    // "jQuery-ui.css",
    // "System.css"
]

function loadCSSSequentially(index) {
    if (index < CSSLinks.length) {
        let CSS = document.createElement("link");
        CSS.rel = "stylesheet";
        CSS.href = "./A/System32/CSS/" + CSSLinks[index];
        CSS.onload = function () {
            loadCSSSequentially(index + 1);
        };
        document.head.appendChild(CSS);
        console.log("Successfully Initialized " + CSSLinks[index].replace(".css", "") + ".")
    }
}

loadCSSSequentially(0);

let scriptUrls = [
    "Clippy/Build/clippy.min.js",
    "BrowserFS.js",
    "Parse-Theme.js",
    "MenuBar.js",
    "Window.js",
    "Msgbox.js",
    "Filesystem-Setup.js",
    "iframe-windows.js",
    "Task.js",
    "Start-Menu.js",
    "FolderView.js",
    "FolderViewItem.js",
    "Desktop.js",
    "Window-Switcher.js",
    "Visualizer-Overlay.js",
    "Programs.js",
    "Widgets.js",
    "Taskbar-Time.js",
    "Settings.js",
    "StoreFront.js",
    "Update.js",
    "Cursor.js",
    "MagnusFS.js",
    "System.js",
    "JukeBox.js",
];

function loadScriptsSequentially(index) {
    if (index < scriptUrls.length) {
        let script = document.createElement("script");
        script.src = "./A/System32/JS/" + scriptUrls[index];
        script.onload = function () {
            loadScriptsSequentially(index + 1);
        };
        document.body.appendChild(script);
        console.log("Successfully Initialized " + scriptUrls[index].replace(".js", "") + ".");
    }
}

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
        16: `A/System32/Images/icons/${iconID}-16x16.png`,
        48: `A/System32/Images/icons/${iconID}-48x48.png`,
    };
}

function getIconPath(iconID, size) {
    return web_server_root_for_icons + "./A/System32/Images/Icons/" + iconID + "-" + size + "x" + size + ".png";
}

function getDeskIconPath(iconID, size) {
    return window.location.href.replace("index.html", "") + "A/System32/Images/Icons/" + iconID + "-" + size + "x" + size + ".png";
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
        <img id="start-img" src="./A/System32/Images/Common/start.png">
    </div>
    <div class="tasks"></div>
    <div id="tray" class="tray inset-shallow">
    <div class="tray-icons">
        <img class="tray-icon" src="./A/System32/Images/Common/wifi.png" id="WiFi" title="WiFi Status" onclick="WiFi()">
        <img class="tray-icon" src="./A/System32/Images/Icons/audio-okay-16x16.png" title="Volume" onclick="hidevol()">
    </div>
    <div class="taskbar-time" id="time" onclick="hidecal()"></div>
`]
taskbr.innerHTML = start;
splash.innerHTML = "Loading...";
document.body.appendChild(vInfo);
document.body.appendChild(taskbr);
document.body.appendChild(splash);
document.getElementById('splash-screen').style.display = 'none';