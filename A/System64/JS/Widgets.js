// ^ Lame attempt at closing a window with CTRL + W
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'W') {
        event.preventDefault();
        $w.close();
        $w.fixed();
    }
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'Meta') {
        event.preventDefault();
        toggle_start_menu();
    }
})

// ! Ugh, can't open dev console via JS :(
function toggleConsole() {
    if (typeof console === "object") {
        if (console._commandLineAPI) {
            console.API = console._commandLineAPI; // This is for Chrome.
        } else if (console._inspectorCommandLineAPI) {
            console.API = console._inspectorCommandLineAPI; // This is for Firefox.
        } else if (console.clear) {
            console.API = console; // This is for IE.
        }

        console.API.toggle();
    }
}

//* End onload

//* Context Menu
document.oncontextmenu = function () {
    return false
};

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.getElementById("contextMenu").style.display = "none"
}

function rightClick(e) {
    e.preventDefault();

    if (document.getElementById("contextMenu").style.display == "block")
        hideMenu();
    else {
        let menu = document.getElementById("contextMenu");
        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}

let ContextMenu = [`
<div id="contextMenu" class="context-menu">
	<ul>
		<li onclick="window.history.back();"><a id="Back">Back</a></li>
		<li onclick="window.history.forward();"><a id="Forward">Forward</a></li>
		<li class="group" onclick="location.reload();"><a id="Reload">Reload</a></li>
		<li onclick="window.open('https://google.com', '_blank')"><a id="New-Tab">New-Tab</a></li>
		<li onclick="window.print();"><a id="Print">Print</a></li>
		<li class="group" onclick="viewSource();"><a id="View-Source">View Page<br>Source</a></li>
		<li onclick="GadgetsMenu();"><a id="Gadgets">Gadgets</a></li>
		<li onclick="ChangeAgent();"><a id="Gadgets">Change Clippy<br>Agent</a></li>
	</ul>
</div>
`]

const cmenu = document.createElement('div');
cmenu.classList.add('cmenu');
cmenu.id = 'cmenu';
cmenu.innerHTML = ContextMenu;
let desktop = document.getElementById("Image");
desktop.appendChild(cmenu);

// const GadgetDiv = document.createElement('div');
// const GameDiv = document.createElement('div');
// GameDiv.id = 'GameDiv';
// GadgetDiv.classList.add('GadgetDiv');
// GadgetDiv.classList.add('GadgetDiv');
// document.body.insertBefore(GadgetDiv, cmenu);
// document.body.insertBefore(GameDiv, GadgetDiv);

function viewSource() {
    let source = "<html>";
    source += document.getElementsByTagName('html')[0].innerHTML;
    source += "</html>";
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    source = "<pre style='background-color:black;color:blue;'>" + source + "</pre>";
    sourceWindow = window.open('', '_blank');
    sourceWindow.document.write(source);
    sourceWindow.document.close();
    if (window.focus) {
        sourceWindow.focus();
    }
}

function GadgetsMenu() {
    let Gadgetz = [`
    <div id="GadgetMenu" class="context-menu">
        <ul>
            <li onclick="GPong();"><a id="Pong">Pong</a></li>
        </ul>
    </div>
    `]
    GadgetDiv.innerHTML = Gadgetz;
    let Gmenu = document.getElementById("GadgetMenu");
    Gmenu.style.display = "block";
}

function ChangeAgent() {
    let agents = ['Bonzi', 'Clippy', 'F1', 'Genie', 'Genius', 'Links', 'Merlin', 'Peedy', 'Rocky', 'Rover']
    let randomAgent = agents[Math.floor(Math.random() * agents.length)];
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        div.remove();
        div2.remove();
        clippy.load(`${randomAgent}`, function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", `${randomAgent}()`);
    } else {
        clippy.load(`${randomAgent}`, function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", `${randomAgent}()`);
    }
}

function GPong() {
    let Pong = [`
    <div id="GadgetGame" class="context-menu" style="display:none">
        <button onclick="hide();">Close
            <li style="list-style: none;">
                <embed id="Game" src="./Programs/Games/Arcade/Pong/index.html" style="height: 320px; width: 320px;"></embed>
            </li>
        </button>
    </div>
    `]
    GameDiv.innerHTML = Pong;
    let GadgetGame = document.getElementById("GadgetGame");
    GadgetGame.style.display = "block";
    hideGadgets();
}

function hide() {
    if (document.getElementById('Game').src == '') {
        document.getElementById('Game').src = './Programs/Games/Arcade/Pong/index.html';
    } else {
        document.getElementById('Game').src = './Programs/Games/Arcade/Pong/index.html';
    };
    let GadgetGame = document.getElementById("GadgetGame");
    if (GadgetGame.style.display == 'none') {
        GadgetGame.style.display = 'block';
    } else {
        GadgetGame.style.display = 'none';
    };
}

function hideGadgets() {
    let x = document.getElementById("GadgetMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//* End Context Menu

//* Calendar
function hidecal() {
    let x = document.getElementById("picker");
    if (x.style.display === "none") {
        x.style.display = "block";
        toggle_dp();
    } else {
        x.style.display = "none";
    }
}

function toggle_dp() {
    let dp = $("#datepicker");
    if (dp.hasClass("hidden")) {
        dp.removeClass("hidden");
        dp.datepicker();
    } else {
        dp.datepicker();
        dp.addClass("hidden");
        dp.datepicker("hide");
    }
}
//* End Calendar

//* JukeBox Controller
let rangeInput = document.getElementById('range');
let rangeValue = document.getElementById('range_value');
let value = rangeInput.value;
let percentValue = Math.round(value * 100);

rangeInput.addEventListener('input', function () {
    rangeInput.setAttribute('min', '0');
    rangeInput.setAttribute('max', '1');
    rangeInput.setAttribute('step', '0.01');
    rangeInput.setAttribute('value', '1');
    value = rangeInput.value;
    percentValue = Math.round(value * 100);
    rangeValue.innerHTML = percentValue + '%';
    window.music.volume(value);
});

function hidevol() {
    let x = document.getElementById("jukebox");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//* End JukeBox

//* Battery Level
try {
    let level;
    let animationInterval;

    function getBatLevel() {
        navigator.getBattery().then(function (battery) {
            battery.addEventListener('chargingchange', getBatLevel);
            level = battery.level * 100;
            let batteryElement = document.getElementById("battery");
            let bats = Math.round(level) + "%";
            batteryElement.title = `${bats}`;
            if (bats === 100) {
                toast({
                    message: `Battery is fully charged at ${bats}!`,
                    sound: Battery,
                });
            } else if (bats === 69) {
                toast({
                    message: `Battery is at ${bats}, nice!`,
                    sound: Battery,
                })
            }
            if (bats === 20) {
                toast({
                    message: `Battery is low at ${bats}!`,
                    sound: Battery,
                });
            } else if (bats === 10) {
                toast({
                    message: `Battery is critically low at ${bats}!`,
                    sound: Battery,
                });
            }
            if (battery.charging) {
                toast({
                    message: `Battery is charging at ${bats}.`,
                    sound: Battery,
                });
                let batteryani0 = [
                    './A/System64/Images/Icons/battery-6.png', //0
                    './A/System64/Images/Icons/battery-5.png', //20
                    './A/System64/Images/Icons/battery-4.png', //40
                    './A/System64/Images/Icons/battery-3.png', //60
                    './A/System64/Images/Icons/battery-2.png', //80
                    './A/System64/Images/Icons/battery-1.png' //100
                ];
                let batteryani1 = [
                    './A/System64/Images/Icons/battery-5.png', //20
                    './A/System64/Images/Icons/battery-4.png', //40
                    './A/System64/Images/Icons/battery-3.png', //60
                    './A/System64/Images/Icons/battery-2.png', //80
                    './A/System64/Images/Icons/battery-1.png' //100
                ];
                let batteryani2 = [
                    './A/System64/Images/Icons/battery-4.png', //40
                    './A/System64/Images/Icons/battery-3.png', //60
                    './A/System64/Images/Icons/battery-2.png', //80
                    './A/System64/Images/Icons/battery-1.png' //100
                ];
                let batteryani3 = [
                    './A/System64/Images/Icons/battery-3.png', //60
                    './A/System64/Images/Icons/battery-2.png', //80
                    './A/System64/Images/Icons/battery-1.png' //100
                ];
                let batteryani4 = [
                    './A/System64/Images/Icons/battery-2.png', //80
                    './A/System64/Images/Icons/battery-1.png' //100
                ];
                let batteryani5 = [
                    './A/System64/Images/Icons/battery-1.png' //100
                ];
                let curani = 0;

                function anistart() {
                    if (Math.round(level / 20) * 20 === 100) {
                        curani = (curani === 0) ? 0 : ++curani;
                        batteryElement.src = batteryani5[curani];
                    } else if (Math.round(level / 20) * 20 === 80) {
                        curani = (curani === 1) ? 0 : ++curani;
                        batteryElement.src = batteryani4[curani];
                    } else if (Math.round(level / 20) * 20 === 60) {
                        curani = (curani === 2) ? 0 : ++curani;
                        batteryElement.src = batteryani3[curani];
                    } else if (Math.round(level / 20) * 20 === 40) {
                        curani = (curani === 3) ? 0 : ++curani;
                        batteryElement.src = batteryani2[curani];
                    } else if (Math.round(level / 20) * 20 === 20) {
                        curani = (curani === 4) ? 0 : ++curani;
                        batteryElement.src = batteryani1[curani];
                    } else if (Math.round(level / 20) * 20 === 20) {
                        curani = (curani === 5) ? 0 : ++curani;
                        batteryElement.src = batteryani0[curani];
                    }
                }
                clearInterval(animationInterval);
                animationInterval = setInterval(anistart, 2000);
            } else if (!battery.charging) {
                toast({
                    message: `Battery is discharging at ${bats}.`,
                    sound: Battery,
                });
                clearInterval(animationInterval);
                if (level >= 100) {
                    batteryElement.src = './A/System64/Images/Icons/battery-16x16.png';
                } else if (level >= 80) {
                    batteryElement.src = './A/System64/Images/Icons/battery-1.png';
                } else if (level >= 60) {
                    batteryElement.src = './A/System64/Images/Icons/battery-2.png';
                } else if (level >= 40) {
                    batteryElement.src = './A/System64/Images/Icons/battery-3.png';
                } else if (level >= 20) {
                    batteryElement.src = './A/System64/Images/Icons/battery-4.png';
                } else if (level >= 10) {
                    batteryElement.src = './A/System64/Images/Icons/battery-5.png';
                }
            }
        });
    }

    function batteryalert() {
        navigator.getBattery().then(function (battery) {
            level = (battery.level * 100);
            let bats = Math.round(level) + "%";
            toast({
                message: `Battery is at ${bats}!`,
                sound: Battery,
            })
        });
    }
} catch (error) {
    console.log(error);

    function batteryalert() {
        toast({
            message: "Can't get battery info :(",
            sound: Battery,
        })
    }
    document.getElementById("battery").setAttribute("title", "Can't get battery info :(");
    document.getElementById("battery").src = iconsAtTwoSizes("battery-err", 16);

}
//* End Battery Level

//* Wifi
let wifitype = document.getElementById('wifi-type');
let wifidownlink = document.getElementById('wifi-downlink');
let wifidownlinkmax = document.getElementById('wifi-downlink-max');
let wifirtt = document.getElementById('wifi-rtt');
let wifisavedata = document.getElementById('wifi-save-data');
let wifieffectivetype = document.getElementById('wifi-effective-type');

wifitype.innerHTML = 'Type: ' + navigator.connection.type;
wifidownlink.innerHTML = 'Downlink: ' + navigator.connection.downlink + ' Mb/s';
wifidownlinkmax.innerHTML = 'Downlink Max: ' + navigator.connection.downlinkMax + ' Mb/s';
wifirtt.innerHTML = 'Downlink: ' + navigator.connection.rtt + ' M/s';
wifisavedata.innerHTML = 'Save Data: ' + navigator.connection.saveData;
wifieffectivetype.innerHTML = 'Effective Type: ' + navigator.connection.effectiveType;

function WiFi() {
    let x = document.getElementById("Wifi");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//* End Wifi

//* Clippy
document.addEventListener('DOMContentLoaded', function () {});
let Tclippy = localStorage.getItem('Tclippy');
let clappy = localStorage.getItem('clippy');
if (Tclippy === '1') {
    console.warn("Clippy is Disabled");
} else if (Tclippy === null) {
    console.warn("Toggle Clippy Never Initialized.");
}
if (clappy === null && Tclippy === null) {
    CClippy();
} else if (clappy !== null && Tclippy === null) {
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        div.remove();
        div2.remove();
        CClippy();
    }
} else if (clappy === null && Tclippy === null) {
    console.log("Clippy Never Initialized.");
}

function CClippy() {
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        try {
            div.remove();
            div2.remove();
            clippy.load('Clippy', function (agent) {
                agent.show();
                agent.animate();
            });
            localStorage.removeItem("clippy");
            localStorage.setItem("clippy", "CClippy()");

        } catch (error) {
            toast({
                message: "You haven't interacted yet!"
            })
        }
    } else {
        try {
            clippy.load('Clippy', function (agent) {
                agent.show();
                agent.animate();
            });
            localStorage.removeItem("clippy");
            localStorage.setItem("clippy", "CClippy()");
        } catch (error) {
            toast({
                message: "You haven't interacted yet!"
            })
        }
    }
}
//* End Clippy

//* User Settings
let uid = localStorage.getItem("uid");
let BN = localStorage.getItem("BN");

if (uid === null && BN === null) {
    UID();
    BuildNumber();
    console.log('Defining UID...')
} else {
    console.warn(`User ID [UID] is \n${uid}.`);
    console.warn(`Current MagnusWare v${MagnusWare_V} Build Number is ${BN}.`);
}

function UID() {
    // A UUID is typically in the format "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    const UiD = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
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


document.title = `MagnusWare | v${MagnusWare_V} ${BN}`

//* End User
//# sourceURL=MagnusWare