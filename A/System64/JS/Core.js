const MagnusWare_V = "5.0";
const Color_Scheme = "Turkish Angora";
const Codename = "Kryptonite";
const Release_Date = "??/??/????";
const Release_State = "Developer";
const OS_State = "unstable,dev,beta";
const Activation_State = "Unactivated";
const uid = localStorage.getItem("uid");
const BN = localStorage.getItem("BN");
const splashScreen = document.querySelector("#splash-screen");

if (document.getElementById("splash-screen")) {

    console.log("Successfully Initialized Kernel.");
    window.addEventListener("load", function () {
        console.log("Successfully Initialized BOM.");
    });
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Successfully Initialized DOM.");
    });

    let pElement = document.createElement("p");
    pElement.id = "splash-log";
    let splashScreen = document.getElementById("splash-screen");
    pElement.innerHTML = "Successfully Initialized Kernel." + "<br>";
    splashScreen.appendChild(pElement);
    splashScreen.scrollTop = splashScreen.scrollHeight;

    let CSSLinks = [
        "Root.css",
        "MagnusWare-Layout.css",
        "Fonts.css",
        "Stylesheet.css",
        "System.css",
        "Calendar.css",
        "ThemePacks.css",
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
            let output = CSSLinks[index].replace(".css", "");
            let logMessage = (`Successfully Initialized ${output}.`);
            console.log(logMessage);
            let pElement = document.createElement("p");
            pElement.id = "splash-log";
            pElement.innerHTML = `${logMessage}<br>`;
            splashScreen.appendChild(pElement);
            splashScreen.scrollTop = splashScreen.scrollHeight;

        }
    }

    loadCSSSequentially(0);

    let scriptUrls = [
        "TaskManager.js",
        "Program-Data.js",
        "Index.js",
        "Clippy/build/Clippy.min.js",
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
        "Program-Launcher.js",
        "Search.js",
        "Cursor.js",
        "Time.js",
        "StoreFront.js",
        "Device.js",
        "Widgets.js",
        "Update.js",
        "System.js",
        "Defender.js",
        "JukeBox.js",
        "MagnusFS.js",
        "RTF.js",
    ];

    function loadScriptsSequentially(index) {
        if (index < scriptUrls.length) {
            let script = document.createElement("script");
            let JSlocation = "./A/System64/JS/";
            script.defer = true;
            script.src = JSlocation + scriptUrls[index] + "?v=" + new Date().getTime();
            script.onload = function () {
                loadScriptsSequentially(index + 1);
            };
            document.body.appendChild(script);
            let output = scriptUrls[index].replace("Clippy/build/", "").replace("-", " ").replace(".min.js", "").replace(".js", "");
            let logMessage = (`Successfully Initialized ${output}.`);
            console.log(logMessage);
            let pElement = document.createElement("p");
            pElement.id = "splash-log";
            pElement.innerHTML = `${logMessage}<br>`;
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

    loadScriptsSequentially(0);
} else {
    console.log("Desktop not found...");
}

//# sourceURL=MagnusWare