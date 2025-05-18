const vInfo = document.createElement('span');
const taskbr = document.createElement('div');

taskbr.classList.add('taskbar');
vInfo.id = 'version-info';
vInfo.style.fontSize = "8px";
vInfo.style.opacity = 0.2;
vInfo.style.color = "rgb(183, 202, 202)";
taskbr.id = 'taskbr';

vInfo.setAttribute("onclick", "hideinfo();");
var lineBreak = document.createElement("br");
var text = document.createTextNode(`| ${Activation_State} | | ${Release_State} | | MagnusWare v${MagnusWare_V} |`);
vInfo.appendChild(text);
vInfo.appendChild(lineBreak);
text = document.createTextNode(`|${Color_Scheme}| |${Codename}| |${Release_Date}| |${OS_State}|`);
vInfo.appendChild(text);
vInfo.addEventListener("mouseover", function () {
    vInfo.style.fontSize = "10px";
    vInfo.style.opacity = 1;
    vInfo.style.color = "azure";
});
vInfo.addEventListener("mouseout", function () {
    vInfo.style.fontSize = "8px";
    vInfo.style.opacity = 0.2;
    vInfo.style.color = "rgb(183, 202, 202)";
});

let start = [`
<div id="start-button" class="start-button toggle" title="Start">
<img id="start-img" src="./A/System64/Images/Common/Favicon.png">
</div>
<div class="tasks"></div>
<div id="tray" class="tray">
<div class="tray-icons">
<img class="tray-icon" src="./A/System64/Images/Icons/audio-okay-16x16.png" title="Volume" id="Volume" onclick="hidevol()">
<img class="tray-icon" src="./A/System64/Images/Icons/battery-err-16x16.png" id="battery" title="Battery" onclick="batteryalert()">
<img class="tray-icon" src="./A/System64/Images/Common/Wifi.png" id="WiFi" title="WiFi Status" onclick="WiFi()">
<div class="taskbar-time" id="time" onclick="hidecal()"></div>
</div>
</div>
<button id="hideAllWindows" onclick="hideAllWindows()" title="Show Desktop"></button>
`]

taskbr.innerHTML = start;
document.body.appendChild(vInfo);
document.body.appendChild(taskbr);

let StartButton = document.getElementById("start-button");

StartButton.addEventListener('mouseover', function () {
    StartButton.classList.remove('start-button-out');
    StartButton.classList.add('start-button-in');
    StartButton.addEventListener('animationend', function handleAnimationEndIn() {
        StartButton.classList.add("start-in");
        StartButton.removeEventListener('animationend', handleAnimationEndIn);
    });
});

StartButton.addEventListener('mouseout', function () {
    StartButton.classList.remove("start-in");
    StartButton.classList.remove('start-button-in');
    StartButton.classList.add('start-button-out');
    StartButton.classList.remove('start-button-out');
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
<h3 id="now-playing">Select a radio station below</h3>
</div>
<div class="jukebox-body">
<div class="range-container">
<input type="range" id="range" class="range">
<span id="range_value">50%</span>
</div>
<button onclick='window.music.play()'>Play</button>
<button onclick='window.music.stop()'>Stop</button>
<button onclick='window.music.skip()'>Skip</button>
<div class='AM-FM'>
<button class='AM' onclick='window.music.playMCSong()'> Station #1: MC</button>
<button class='FM' onclick='window.music.playRandomStation()'>Station #2: AM</button>
<br>
<button class='AM' onclick='window.music.playWCVEFM()'>Station #3: FM-1</button>
<button class='FM' onclick='window.music.playWCVEHD2()'>Station #4: FM-2</button>
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

if (!uid) {
    UID();
    console.log('Defining UID...')
} else {
    console.warn(`User ID [UID] is \n${uid}.`);
}

if (!BN) {
    BuildNumber();
} else {
    console.warn(`Current MagnusWare v${MagnusWare_V} Build Number is ${BN}.`);
}


function UID() {
    // A UUID is typically in the format "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    // I'm using 7 because I'm like that
    const UiD = 'xxxxxxxx-xxxx-7xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

    localStorage.setItem('uid', UiD);
}

function BuildNumber() {
    function randomString(length, chars) {
        let result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }
    let BuildNumber = randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    console.warn(`Current MagnusWare v${MagnusWare_V} Build Number is ${BN}.`);
    localStorage.setItem('BN', BuildNumber);
}

let uname = localStorage.getItem('username');

if (uname !== null && uname !== undefined) {
    detectDeviceType();
    try {
        toast({
            message: `Welcome back, ${uname}!`,
            sound: LogOn
        });
        setTimeout(() => {
            getBatLevel()
        }, 3000);
    } catch (error) {
        toast({
            message: "You haven't interacted yet!"
        });
    }
} else {
    detectDeviceType();
    let username = 'User';
    localStorage.setItem('username', username);
    console.error('Username Unspecified. Using Default Username.');
    console.warn(`Current MagnusWare v${MagnusWare_V} Build Number is ${BN}.`);
    toast({
        message: `Welcome to MagnusWare v${MagnusWare_V}, ${username}!`,
        sound: LogOn
    });
    setTimeout(() => {
        toast({
            message: "Click the start button in the bottom left corner!",
            sound: Asterisk,
        });
        setTimeout(() => {
            getBatLevel()
        }, 2000);
    }, 3000);
}


document.title = `MagnusWare | v${MagnusWare_V}`

//# sourceURL=MagnusWare