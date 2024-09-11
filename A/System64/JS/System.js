let canvas = document.getElementById('c');

function Settingz() {
    let Settingz = [
        `
        <div id='sidebar'>
            <p>Welcome to System Settings!</p>
        </div>
        <div class='sys-buttons'>
            <button id='US' onclick='Settingz()'>Personalization</button>
            <button id='US' onclick='checkupdate()'>Update<br>Settings</button>
            <button id='CL' onclick='changelog()'>ChangeLog</button>
            <button id='TW' onclick='Tweaks()'>System Tweaks</button>
        </div>
        <div class='vl'></div>
        <div id='right'></div>
  `
    ];
    document.getElementById("div1").innerHTML = Settingz;
    document.getElementById("right").innerHTML = right;
}

let right = [
    `
    <div id='divbg'>
        <hr id='hrshrt2'>
        <h3 id='bgs'>Backgrounds</h3>
        <button id='bgDEFAULT' onclick='bgDEFAULT()'>Default</button>
        <button id='bgBliss' onclick='bgBliss()'>Bliss</button>
        <button id='bgCandy' onclick='bgCandy()'>Candy</button>
        <button id='bgClouds' onclick='bgClouds()'>Clouds</button>
        <button id='bgGlacier' onclick='bgGlacier()'>Glacier</button>
        <button id='bgGrass' onclick='bgGrass()'>Grass</button>
        <button id='bgHome' onclick='bgHome()'>Home</button>
        <button id='bgIntel' onclick='bgIntel()'>Intel</button>
        <button id='bgInterstellar' onclick='bgInterstellar()'>Interstellar</button>
        <button id='bgOrb' onclick='bgOrb()'>MagnusWare Orb</button>
        <button id='bgMoonroof' onclick='bgMoonroof()'>Moonroof</button>
        <button id='bgNebula' onclick='bgNebula()'>Nebula</button>
        <button id='bgNerdsRope' onclick='bgNerdsRope()'>Nerds Rope</button>
        <button id='bgNightHawk' onclick='bgNightHawk()'>NightHawk</button>
        <button id='bgOutrun' onclick='bgOutrun()'>Outrun</button>
        <button id='bgVerticle' onclick='bgVerticle()'>Verticle</button>
        <button id='bgWaves' onclick='bgWaves()'>Waves</button>
        <button id='bgWindows1' onclick='bgWindows1()'>Windows 1.0</button>
        <button id='bgWindows10' onclick='bgWindows10()'>Windows 10</button>
        <button id='bgWindows95' onclick='bgWindows95()'>Windows 95</button>
        <button id='bgWindows95C' onclick='bgWindows95C()'>Windows 95 Candy Edition</button>
        <button id='bgWindows98' onclick='bgWindows98()'>Windows 98</button>
        <button id='bgXenon' onclick='bgXenon()'>Xenon</button>
    </div>
    <div id='livbg'>
        <hr id='hrshrt2'>
        <h3 id='liv'>Live Backgrounds</h3>
        <button id='lv0' onclick='lv0()'>Abstract</button>
        <button id='lv1' onclick='lv1()'>Beach</button>
        <button id='lv2' onclick='lv2()'>Clouds</button>
        <button id='lv3' onclick='lv3()'>Fast-Moving Paint</button>
        <button id='lv4' onclick='lv4()'>Glitch</button>
        <button id='lv8' onclick='lv8()'>Matrix</button>
        <button id='lv5' onclick='lv5()'>Psychedelic #1</button>
        <button id='lv6' onclick='lv6()'>Psychedelic River</button>
        <button id='lv7' onclick='lv7()'>Paint in Space</button>
    </div>
    <div id='divtc'>
        <hr id='hrshrt2'>
        <h3 id='tms'>Themes</h3>
        <button id='ash' onclick='Ash()'>Ash</button>
        <button id='Baseball' onclick='Baseball()'>Baseball</button>
        <button id='blue' onclick='Blue()'>Blue</button>
        <button id='brick' onclick='Brick()'>Bricks</button>
        <button id='Cherry' onclick='Cherry()'>Cherry</button>
        <button id='dangerous' onclick='Dangerous()'>Dangerous Creatures</button>
        <button id='default' onclick='Default()'>Default</button>
        <button id='desert' onclick='Desert()'>Desert</button>
        <button id='eggplant' onclick='Eggplant()'>Eggplant</button>
        <button id='fx' onclick='FX()'>FX</button>
        <button id='gen1' onclick='Gen1()'>Gen Test 1</button>
        <button id='gen2' onclick='Gen2()'>Gen Test 2</button>
        <button id='gen3' onclick='Gen3()'>Gen Test 3</button>
        <button id='honey' onclick='Honey()'>Honey</button>
        <button id='inside' onclick='Inside()'>Inside Your Computer</button>
        <button id='jungle' onclick='Jungle()'>Jungle</button>
        <button id='vinci' onclick='Vinci()'>Leonardo Da Vinci</button>
        <button id='lilac' onclick='Lilac()'>Lilac</button>
        <button id='maple' onclick='Maple()'>Maple</button>
        <button id='marine' onclick='Marine()'>Marine</button>
        <button id='more' onclick='More()'>More Windows</button>
        <button id='moonroof' onclick='Moonroof()'>Moonroof</button>
        <button id='mystery' onclick='Mystery()'>Mystery</button>
        <button id='nature' onclick='Nature()'>Nature</button>
        <button id='peggy' onclick='Peggy()'>Peggys Pastels</button>
        <button id='plum' onclick='Plum()'>Plums</button>
        <button id='powershell' onclick='Powershell()'>Powershell</button>
        <button id='Powershell' onclick='powershell()'>Powershell (x86)</button>
        <button id='precision' onclick='Precision()'>Precision</button>
        <button id='precision-green' onclick='precisiongreen()'>Precision Green</button>
        <button id='pumpkin' onclick='Pumpkin()'>Pumpkin</button>
        <button id='rainyday' onclick='Rainyday()'>Rainday</button>
        <button id='raspberry' onclick='raspberry()'>Raspberry</button>
        <button id='redwine' onclick='Redwine()'>Red Wine</button>
        <button id='rwb' onclick='RWB()'>Red White and Blue</button>
        <button id='rose' onclick='Rose()'>Roses</button>
        <button id='science' onclick='Science()'>Science</button>
        <button id='seawater' onclick='seawater()'>Seawater</button>
        <button id='slate' onclick='Slate()'>Slate</button>
        <button id='solar' onclick='Solar()'>Solarized Dark</button>
        <button id='space' onclick='Space()'>Space</button>
        <button id='sports' onclick='Sports()'>Sports</button>
        <button id='spruce' onclick='Spruce()'>Spruce</button>
        <button id='storm' onclick='Storm()'>Storm</button>
        <button id='Storm' onclick='storm()'>Storm v2.0</button>
        <button id='steal' onclick='Steal()'>Teal by Shelby</button>
        <button id='teal' onclick='Teal()'>Teal</button>
        <button id='toner' onclick='Toner()'>Toner</button>
        <button id='t6' onclick='T6()'>The USA in the 60's</button>
        <button id='golden' onclick='Golden()'>The Golden Era</button>
        <button id='travel' onclick='Travel()'>Travel</button>
        <button id='underwater' onclick='Underwater()'>Underwater</button>
        <button id='vista' onclick='Vista()'>Vista Dark Theme</button>
        <button id='wheat' onclick='Wheat()'>Wheat</button>
        <button id='w1' onclick='W1()'>Windows 1</button>
        <button id='w93' onclick='W93()'>Windows 93</button>
        <button id='w98' onclick='W98()'>Windows 98</button>
        <button id='wdefault' onclick='Wdefault()'>Windows Default</button>
        <button id='whybrid' onclick='Whybrid()'>Windows Hybrid</button>
        <button id='wxp' onclick='WXP()'>Windows XP</button>
        <button id='default' onclick='Xenon()'>Xenon</button>
    </div>
    <div id='Scrsvrz'>
        <hr id='hrshrt2'>
        <h3 id='scz'>ScreenSavers</h3>
        <button id='pipes' onclick='Pipes()'>Pipes</button>
        <button id='flowers' onclick='FlowerBox()'>3D FlowerBox</button>
        <button id='matrix' onclick='Matrix()'>Matrix</button>
        <button id='dvd' onclick='DVD()'>DVD</button>
        <button id='dotz' onclick='Dotz()'>Dotz</button>
        <button id='bubz' onclick='Bubz()'>Bubbles</button>
    </div>
    <br>
    <!--<div id='tcvdiv'>
        <hr id='hrshrt2'>
        <h3 id='tcv'>Turn on screen saver on</h3><span id='shmol'>Click one from above</span>
        <span id='wait'>Wait:</span><input type='number' max='10' id='scvtmr'><span id='scrmns'> minutes to auto start screen saver</span><button id='tmr' onclick='tmr()'>Go!</button>
    </div>-->
    <br>
`
];

function checkupdate() {
    let UpdateMenu = [
        `
    <div id='updatediv'>
        <hr id='hrshrt2'>
        <button id='update-1' onclick='checkUpdate2()'>Check for<br>Updates</button>
        <p id='update-rs'>May Require a Restart!</p>
        <div id='update-buttons'></div>
    </div>

`
    ];
    document.getElementById("right").innerHTML = UpdateMenu;
}

function changelog() {
    let changelog = [
        `
    <div class='changelog'>
        <hr id='hrshrt2'>
            <h3>MagnusWare 4.0<br>(Siamese/Nighthawk)</h3>
        <hr id='hrshrt2'>
            <h3>MagnusWare 3.1<br>(Sphynx/Vortex)</h3>
            <ul>
                <li>Start Button Width is Shorter</li>
                <li>Desktop Icon Hover Animation
                    <ol>
                        <li>Also when window is resized, the icons move
                            smoothly, which is a nice, unexpected effect
                        </li>
                    </ol>
                </li>
                <li>Date Picker Buttons Don't Move on Hover</li>
                <li>Start Orb Isn't Cut Off at the Bottom Anymore</li>
                <li>Confirm Reboot Dialog</li>
                <li>Disable Dev Tools for Normal Users</li>
                <li>Fixed Initial Loading Errors</li>
            </ul>
        <hr id='hrshrt2'>
            <h3>MagnusWare 3.0<br>(Egyptian Mau/Xenon)</h3>
            <ul>
                <li>Windows Key Opens Start Menu</li>
                <li>Added new feature X</li>
                <li>Fixed TaskBar-Time
                    <ol>
                        <li>Seconds update in real time</li>
                        <li>Greetings update in relation to the current time</li>
                    </ol>
                </li>
                <li>Fixed Calendar
                    <ol>
                        <li>Fixed Colors</li>
                        <li>Fixed Icon Issues</li>
                    </ol>
                </li>
                <li>Fixed Window Focus Issues</li>
                <li>Fixed Resize Issues</li>
                <li>Fixed Marquee Issues
                    <ol>
                        <li>Fixed Mouse Highlighting Issue</li>
                    </ol>
                </li>
                <li>Fixed Settings Navbar Icon Setting</li>
                <li>Fixed Icon issues</li>
                <li>Fixed Notepad</li>
                <li>Fixed JSPaint</li>
                <li>Fixed WinAMP</li>
                <li>Fixed VLC</li>
                <li>Fixed Filesystem-index.json Issues</li>
                <li>Fixed Factory Reset
                    <ol>
                        <li>Changed Icon</li>
                        <li>Created Confirm Dialog</li>
                        <li>Removed BS JS From Original
                        Function</li>
                    </ol>
                </li>
                <li>Fixed Q1M2
                    <ol>
                        <li>Fixed Taskbar Icon</li>
                        <li>Fixed Calling Wrong File</li>
                    </ol>
                </li>
                <li>Added Gadgets</li>
                <li>Added MagnusWare Software Center
                    <ol>
                        <li>Added an App</li>
                    </ol>
                </li>
                <li>Added Clippy & Friends</li>
                <li>Added WadCMD</li>
                <li>Added JukeBox</li>
                <li>Added System Visual FX</li>
                <li>Added About Page</li>
                <li>Added Confirm Dialog On Page Refresh</li>
                <li>Added Confirm Reset Dialog on Factory Reset</li>
                <li>Added Canonical Link Tag</li>
                <li>Added IE EOL Tags</li>
                <li>Added Install as App Dialog</li>
                <li>Added defer To All Script Tags
                    <ol>
                        <li>Faster Loading</li>
                        <li>index.js Is Now In The Head Tag</li>
                    </ol>
                </li>
                <li>Added Version List
                    <ol>
                        <li>Added Changelog</li>
                        <li>Added Check Update Button</li>
                        <li>Added Random Build Number</li>
                        <li>Added Random User ID</li>
                    </ol>
                </li>
                <li>Added Back the Calculator</li>
                <li>Added Back the Damn Context Menu
                    <ol>
                        <li>Button to Randomly Change Clippy Agent</li>
                    </ol>
                </li>
                <li>New System sounds
                    <ol>
                        <li>On program Launch a Sound<br>will play</li>
                        <li>Different System Alert Types</li>
                        <li>Alerts are Now Customized with
                        Personalized Sounds</li>
                    </ol>
                </li>
                <li>New Battery Icon
                    <ol>
                        <li>Battery Icon onclick Brings up Alert with Battery Percent</li>
                        <li>Battery Icon Will Update with Battery Percent</li>
                        <li>Added Low Battery Alerts</li>
                    </ol>
                </li>
                <li>New Taskbar Style & Position</li>
                <li>New Navigation Button Styles</li>
                <li>Semi-Mobile Support
                    <ol>
                        <li>Most things Don't Work,
                        Only Looks Nice</li>
                    </ol>
                </li>
                <li>Removed Un-needed LocalStorage Items</li>
                <li>Removed Audio Script</li>
                <li>Renamed Network Neighborhood to Da Hood</li>
                <li>Updated Update Dialog</li>
                <li>Arranged Icons Horizontally Again</li>
                <li>Whole Icon is Highlighted When Selected</li>
                <li>Most HTML Tags are Written and Initialized Through JS
                    <ol>
                        <li>Made File-Structuring and Page Layout Easier to Read/Use</li>
                        <li>Sort of De-Cluttered the Index.html File</li>
                    </ol>
                </li>
                <li>(mostly) Resolve JS Console errors</li>
                <li>Consolidated Cloud Storage
                    <ol>
                        <li>Move Some Apps/Games to GitHub Pages</li>
                    </ol>
                </li>
            </ul>
        <hr id='hrshrt2'>
                <h3>MagnusWare 2.2<br>(Tabby/Zenith)</h3>
            <ul>
                <li>Calender widget</li>
                <li>Version watermark animation</li>
                <li>MagnusWare Orb glow animation</li>
                <li>Revert MagnusWare Orb Icon to MagnusSoft 1.4 with newer color changes</li>
                <li>Taskbar resize</li>
                <li>Start Menu padding</li>
                <li>Battery Level actually appears in HTML title attribute via JS</li>
                <li>Update dialog</li>
                <li>Always display icon title</li>
                <li>Start Menu error fixing</li>
                <li>Taskbar time has dynamically updated fonts on theme change</li>
                <li>MineCrap 1.3 coming soon on hover menu</li>
                <li>Matrix</li>
                <li>Version list restructure</li>
                <li>Re-define versions/service packs</li>
                <li>Compress scripts list</li>
                <li>Fix cache/update issues</li>
                <li>Factory reset is more efficient</li>
                <li>Remove unnecessary cookies/localStorage properties</li>
            </ul>
        <hr id='hrshrt2'>
            <h3>MagnusWare 2.1<br>(Ragamuffin/Interstellar)</h3>
            <ul>
                <li>Cursor effects</li>
                <li>VLC Media Player!!</li>
            </ul>
        <hr id='hrshrt2'>
    </div>
`
    ];
    document.getElementById("right").innerHTML = changelog;
}

function Tweaks() {
    let tweaks = [`
    <div id="tweaks">
    <div class="user">
        <hr id='hrshrt2'>
        <h3>User Settings</h3>
        <p>Username: <span id='username'></span></p>
        <div><input placeholder="Change Username..." id="changeUname"><button onclick="ChangeUname()" id="submitUname">Submit</button></div>
        <p>User ID: <span id='uid'></span></p>
    </div>
    <div class="clippy-friends">
        <hr id='hrshrt2'>
        <h3>Clippy & Friends</h3>
        <button onclick="toggleclippy()">Toggly Clippy</button>
        <h3>Change Clippy Agent</h3>
        <button onclick="Bonzi()">Bonzi</button>
        <button onclick="CClippy()">Clippy</button>
        <button onclick="F1()">F1</button>
        <button onclick="Genie()">Genie</button>
        <button onclick="Genius()">Genius</button>
        <button onclick="Links()">Links</button>
        <button onclick="Merlin()">Merlin</button>
        <button onclick="Peedy()">Peedy</button>
        <button onclick="Rocky()">Rocky</button>
        <button onclick="Rover()">Rover</button>
    </div>
    <div id='fx_div'>
        <hr id='hrshrt2'>
        <h3>Effects</h3>
        <button onclick='fxnone(),location.reload()'>None</button>
        <button onclick='fxrotate()'>Rotate</button>
        <button onclick='fxspin()'>Spin</button>
        <button onclick='fxacid()'>Acid Trip</button>
        <button onclick='fxstrobe()'>Strobe Light</button>
        <button onclick='fxstrasto()'>Deepfried Strobe Lights</button>
        <button onclick='fxscato()'>Reader</button>
        <button onclick='fxblur()'>Blur</button>
        <button onclick='fxblurry()'>Blurry</button>
        <button onclick='fxdisco()'>Night at the Roxbury</button>
        <button onclick='fxsepia()'>Sepia</button>
        <button onclick='fxgrayscale()'>Grayscale</button>
        <button onclick='fxinvert()'>Invert</button>
        <button onclick='fxinvertlights()'>Inverted Lights</button>
    </div>
    <div id='crdiv'>
        <hr id='hrshrt2'>
        <h3 id='cr'>Cursor effects</h3>
        <button id='curoff' onclick='Curoff()'>Off</button>
        <button id='curon' onclick='Curon()'>On</button>
        <hr id='hrshrt2'>
    </div>
</div>
`]
    document.getElementById("right").innerHTML = tweaks;
    document.getElementById("username").innerHTML = uname;
    document.getElementById("uid").innerHTML = uid;
}

function ChangeUname() {
    let input = document.getElementById("changeUname").value;
    localStorage.removeItem('username')
    localStorage.setItem('username', input);
    window.confirm(`Username changed to ${input}! Changes will take into effect on next restart.`)

}

function hideinfo() {
    document.getElementById("version-info").style.display = "none";
    localStorage.removeItem("hif");
    localStorage.setItem("hif", "hideinfo()");
}

function bgBliss() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/Bliss.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgBliss()");
}

function bgCandy() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/Candy.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgCandy()");
}

function bgClouds() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/clouds.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgClouds()");
}

function bgGlacier() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/glacier.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgGlacier()");
}

function bgGrass() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/grass.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgGrass()");
}

function bgHome() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/home.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgHome()");
}

function bgIntel() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/intel.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgIntel()");
}

function bgInterstellar() {
    document.getElementById("Image").style =
        `
    background: repeating-linear-gradient(190deg,
      #1a2980 40px,
      #d53369 80px,
      #000080 120px,
      #00c6ff 160px,
      rgba(0, 0, 255, 0.5) 200px,
      rgba(75, 0, 130, 0.5) 240px,
      rgba(238, 130, 238, 0.5) 280px,
      #021b79 300px),
    repeating-linear-gradient(-190deg,
      #0072ff 30px,
      #f857a6 60px,
      #061161 90px,
      #6B069F 120px,
      rgba(0, 0, 255, 0.5) 150px,
      rgba(75, 0, 130, 0.5) 180px,
      #fc354c 210px, #d53369 230px),
    repeating-linear-gradient(23deg,
      red 50px,
      #780206 100px,
      #c21500 150px,
      #061161 200px,
      blue 250px,
      indigo 300px,
      #1fa2ff 350px,
      red 370px);
    min-inline-size: -webkit-fill-available;
    `
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgInterstellar()");
}

function bgNebula() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/nebula.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgNebula()");
}

function bgOutrun() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/outrun.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgOutrun()");
}

function bgVerticle() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/verticle.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgVerticle()");
}

function bgWaves() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/Waves.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgWaves()");
}

function bgWindows1() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/1.0.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgWindows1()");
}

function bgWindows10() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/10.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgWindows10()");
}

function bgWindows95() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/95.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgWindows95()");
}

function bgWindows95C() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/95C.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgWindows95C()");
}

function bgWindows98() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/9.8.png);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgWindows98()");
}

function bgMoonroof() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/Moonroof.png);";
    // background-image: linear-gradient(red, yellow);
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgMoonroof()");
}

function bgNightHawk() {
    document.getElementById("Image").style =
        `
    background: linear-gradient(217deg,
    rgba(255, 0, 0, 0.8),
    rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgba(0, 0, 255, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, #00c6ff, #f857a6 70.71%);
    `
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgNightHawk()");
}

function bgXenon() {
    document.getElementById("Image").style =
        `
    background: conic-gradient(from 222deg at 30% 50%,
    #00c6ff,
    #1fa2ff,
    #0072ff,
    #1a2980,
    #000080,
    #021b79,
    #061161,
    #061161,
    #6B069F,
    #780206,
    #c21500,
    #fc354c,
    #d53369,
    #f857a6);
    `
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgXenon()");
}

function bgNerdsRope() {
    document.getElementById("Image").style =
        "background: repeating-linear-gradient(190deg,#1a2980 40px,#d53369 80px,#43ceaf  120px,#00c6ff 160px,rgba(0, 0, 255, 0.5) 200px,rgba(75, 0, 130, 0.5) 240px,rgba(238, 130, 238, 0.5) 280px,#021b79 300px), repeating-linear-gradient(-190deg,#0072ff 30px,#f857a6 60px,#061161 90px,#43ceaf 120px,rgba(0, 0, 255, 0.5) 150px,rgba(75, 0, 130, 0.5) 180px,#fc354c 210px,#d53369 230px), repeating-linear-gradient(23deg, red 50px, #780206 100px, #c21500 150px, #061161 200px, blue 250px, indigo 300px, #1fa2ff 350px, red 370px);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgNerdsRope()");
}

function bgOrb() {
    document.getElementById("Image").style =
        "background: -webkit-radial-gradient(50% 90%, circle closest-corner, #07d9f9, #03456f 100%, #fff 300%);"
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgOrb()");
}

function bgDEFAULT() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/Kryptonite.png);";
    // background-image: linear-gradient(red, yellow);
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "bgDEFAULT()");
}

function lv0() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/Abstract.gif);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "lv0()");
}

function lv1() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/Beach.gif);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "lv1()");
}

function lv2() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/Clouds.gif);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "lv2()");
}

function lv3() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/Fast-Paint.gif);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "lv3()");
}

function lv4() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/Glitch.gif);";
    canvas.remove();
    localStorage.removeItem("bgz");
    // @import compass @function multiple-box-shadow ($n) $value: '#{random(2000)}px #{random(20000)}px #FFF' @for $i from 2 through $n $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF' @return unquote($value) $shadows-small:  multiple-box-shadow(700) $shadows-medium: multiple-box-shadow(200) $shadows-big:    multiple-box-shadow(100) html height: 100% background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%) overflow: hidden #stars width: 1px height: 1px background: transparent box-shadow: $shadows-small animation			: animStar 50s linear infinite &:after content: " " position: absolute top: 2000px width: 1px height: 1px background: transparent box-shadow: $shadows-small #stars2 width: 2px height: 2px background: transparent box-shadow: $shadows-medium animation			: animStar 100s linear infinite &:after content: " " position: absolute top: 2000px width: 2px height: 2px background: transparent box-shadow: $shadows-medium #stars3 width: 3px height: 3px background: transparent box-shadow: $shadows-big animation			: animStar 150s linear infinite &:after content: " " position: absolute top: 2000px width: 3px height: 3px background: transparent box-shadow: $shadows-big @keyframes animStar from transform: translateY(0px) to transform: translateY(-2000px)
    localStorage.setItem("bgz", "lv4()");
}

function lv5() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/High.gif);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "lv5()");
}

function lv6() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/River.gif);";
    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "lv6()");
}

function lv7() {
    document.getElementById("Image").style =
        "background-image: url(./A/System64/Images/common/Space-Paint.gif);";

    canvas.remove();
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "lv7()");
}

function lv8() {
    const x = document.createElement('canvas');
    x.id = 'c';
    x.classList.add("c");
    document.body.appendChild(x);
    // getting canvas by Magnus Marks
    let c = document.getElementById("c");
    let ctx = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //chinese characters - taken from the unicode charset
    let matrix =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}日月金木水火土竹戈十大中一弓人心手口尸廿山女田難卜Ｚ";
    //converting the string into an array of single characters
    matrix = matrix.split("");

    let font_size = 10;
    let columns = c.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    let drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++) drops[x] = 1;

    //drawing the characters
    function draw() {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#7FFF00"; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for (let i = 0; i < drops.length; i++) {
            //a random chinese character to print
            let text = matrix[Math.floor(Math.random() * matrix.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }
    setInterval(draw, 35);
    localStorage.removeItem("bgz");
    localStorage.setItem("bgz", "lv8()");
}

function Ash() {
    document.getElementById("Style").className = "ash1";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Ash()");
}

function Baseball() {
    document.getElementById("Style").className = "baseball";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Baseball()");
}

function Blue() {
    document.getElementById("Style").className = "blue";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Blue()");
}

function Brick() {
    document.getElementById("Style").className = "brick";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Brick()");
}

function Dangerous() {
    document.getElementById("Style").className = "dangerous-creatures";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Dangerous()");
}

function Default() {
    document.getElementById("Style").className = "default-theme";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Default()");
}

function Moonroof() {
    document.getElementById("Style").className = "moonroof";
    document.getElementById("CSS").href = "./assets/css/custom-tray.css";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Moonroof()");
}

function Desert() {
    document.getElementById("Style").className = "desert";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Desert()");
}

function Eggplant() {
    document.getElementById("Style").className = "eggplant";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Eggplant()");
}

function FX() {
    document.getElementById("Style").className = "fx";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "FX()");
}

function Gen1() {
    document.getElementById("Style").className = "gen-test1";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Gen1()");
}

function Gen2() {
    document.getElementById("Style").className = "gen-test2";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Gen2()");
}

function Gen3() {
    document.getElementById("Style").className = "gen-test3";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Gen3()");
}

function Honey() {
    document.getElementById("Style").className = "honey";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Honey()");
}

function Inside() {
    document.getElementById("Style").className = "inside-ur-computer";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Inside()");
}

function Jungle() {
    document.getElementById("Style").className = "jungle";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Jungle()");
}

function Vinci() {
    document.getElementById("Style").className = "da-vinci";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Vinci()");
}

function Lilac() {
    document.getElementById("Style").className = "lilac";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Lilac()");
}

function Maple() {
    document.getElementById("Style").className = "maple";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Maple()");
}

function Marine() {
    document.getElementById("Style").className = "marine";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Marine()");
}

function More() {
    document.getElementById("Style").className = "more-windows";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "More()");
}

function Mystery() {
    document.getElementById("Style").className = "mystery";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Mystery()");
}

function Nature() {
    document.getElementById("Style").className = "nature";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Nature()");
}

function Nighthawk() {
    document.getElementById("Style").className = "nighthawk";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Nighthawk()");
}

function Peggy() {
    document.getElementById("Style").className = "peggy";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Peggy()");
}

function Plum() {
    document.getElementById("Style").className = "plum";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Plum()");
}

function Powershell() {
    document.getElementById("Style").className = "powershell";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Powershell()");
}

function Precision() {
    document.getElementById("Style").className = "precision";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Precision()");
}

function Pumpkin() {
    document.getElementById("Style").className = "pumpkin";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Pumpkin()");
}

function Rainyday() {
    document.getElementById("Style").className = "rainyday";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Rainyday()");
}

function Redwine() {
    document.getElementById("Style").className = "red-wine";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Redwine()");
}

function RWB() {
    document.getElementById("Style").className = "red-white-blue";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "RWB()");
}

function Rose() {
    document.getElementById("Style").className = "rose";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Rose()");
}

function Science() {
    document.getElementById("Style").className = "science";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Science()");
}

function Slate() {
    document.getElementById("Style").className = "slate";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Slate()");
}

function Solar() {
    document.getElementById("Style").className = "solarized";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Solar()");
}

function Space() {
    document.getElementById("Style").className = "space";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Space()");
}

function Sports() {
    document.getElementById("Style").className = "sports";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Sports()");
}

function Spruce() {
    document.getElementById("Style").className = "spruce";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Spruce()");
}

function Storm() {
    document.getElementById("Style").className = "storm";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Storm()");
}

function Steal() {
    document.getElementById("Style").className = "teal-shelby";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Steal()");
}

function Teal() {
    document.getElementById("Style").className = "teal";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Teal()");
}

function T6() {
    document.getElementById("Style").className = "the-60s";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "T6()");
}

function Golden() {
    document.getElementById("Style").className = "the-golden-era";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Golden()");
}

function Travel() {
    document.getElementById("Style").className = "travel";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Travel()");
}

function Underwater() {
    document.getElementById("Style").className = "underwater";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Underwater()");
}

function Vista() {
    document.getElementById("Style").className = "vista-dark";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Vista()");
}

function Wheat() {
    document.getElementById("Style").className = "wheat";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Wheat()");
}

function W1() {
    document.getElementById("Style").className = "windows-1";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "W1()");
}

function W98() {
    document.getElementById("Style").className = "w98";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "W98()");
}

function Wdefault() {
    document.getElementById("Style").className = "wdefault";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Wdefault()");
}

function Whybrid() {
    document.getElementById("Style").className = "whybrid";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Whybrid()");
}

function WXP() {
    document.getElementById("Style").className = "wxp";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "WXP()");
}

function W93() {
    document.getElementById("Style").className = "w93";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "W93()");
}

function Toner() {
    document.getElementById("Style").className = "Toner";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Toner()");
}

function Cherry() {
    document.getElementById("Style").className = "Cherry";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Cherry()");
}

function precisiongreen() {
    document.getElementById("Style").className = "precision-green";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "precisiongreen()");
}

function powershell() {
    document.getElementById("Style").className = "Powershell";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "powershell()");
}

function storm() {
    document.getElementById("Style").className = "Storm";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "storm()");
}

function raspberry() {
    document.getElementById("Style").className = "Raspberry";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "raspberry()");
}

function seawater() {
    document.getElementById("Style").className = "Seawater";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "Seawater()");
}

function Xenon() {
    document.getElementById("Style").className = "MagnusWare";
    localStorage.removeItem("tmz");
    localStorage.setItem("tmz", "MagnusWare()");
}

function customTheme() {
    let ctheme = localStorage.getItem("theme");
    let css = JSON.parse(ctheme);
    let custom = css;
    console.log(custom);
    document.getElementById("Style").removeAttribute('style');
    document.getElementById("Style").className = custom;
    localStorage.removeItem("tmz");
    localStorage.setItem('tmz', "customTheme()");
}

function Curoff() {
    localStorage.removeItem("cur");
    window.confirm(`Changes will take into effect on next restart.`)
}

function Curon() {
    cursor();
    localStorage.removeItem("cur");
    localStorage.setItem("cur", "cursor()");
    window.confirm(`Changes will take into effect on next restart.`)
}

function toggleclippy() {
    let clippy = localStorage.getItem("clippy");
    if (clippy === null) {
        CClippy();
    } else if (clippy !== null) {
        localStorage.removeItem("clippy");
        localStorage.setItem("Tclippy", '1');
        window.confirm(`Changes will take into effect on next restart.`)
    }
}

function Bonzi() {
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        div.parentNode.removeChild(div);
        div2.parentNode.removeChild(div2);
        clippy.load('Bonzi', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Bonzi()");
    } else {
        clippy.load('Bonzi', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Bonzi()");
    }
}

function F1() {
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        div.parentNode.removeChild(div);
        div2.parentNode.removeChild(div2);
        clippy.load('F1', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "F1()");
    } else {
        clippy.load('F1', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "F1()");
    }
}

function Genie() {
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        div.parentNode.removeChild(div);
        div2.parentNode.removeChild(div2);
        clippy.load('Genie', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Genie()");
    } else {
        clippy.load('Genie', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Genie()");
    }
}

function Genius() {
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        div.parentNode.removeChild(div);
        div2.parentNode.removeChild(div2);
        clippy.load('Genius', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Genius()");
    } else {
        clippy.load('Genius', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Genius()");
    }
}

function Links() {
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        div.parentNode.removeChild(div);
        div2.parentNode.removeChild(div2);
        clippy.load('Links', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Links()");
    } else {
        clippy.load('Links', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Links()");
    }
}

function Merlin() {
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        div.parentNode.removeChild(div);
        div2.parentNode.removeChild(div2);
        clippy.load('Merlin', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Merlin()");
    } else {
        clippy.load('Merlin', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Merlin()");
    }
}

function Peedy() {
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        div.parentNode.removeChild(div);
        div2.parentNode.removeChild(div2);
        clippy.load('Peedy', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Peedy()");
    } else {
        clippy.load('Peedy', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Peedy()");
    }
}

function Rocky() {
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        div.parentNode.removeChild(div);
        div2.parentNode.removeChild(div2);
        clippy.load('Rocky', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Rocky()");
    } else {
        clippy.load('Rocky', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Rocky()");
    }
}

function Rover() {
    var div = document.getElementById("clippy");
    var div2 = document.getElementById("clippy-2");
    if (div !== null) {
        div.parentNode.removeChild(div);
        div2.parentNode.removeChild(div2);
        clippy.load('Rover', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Rover()");
    } else {
        clippy.load('Rover', function (agent) {
            agent.show();
            agent.animate();
        });
        localStorage.removeItem("clippy");
        localStorage.setItem("clippy", "Rover()");
    }
}

function fxnone() {
    let fxclass = localStorage.getItem("fx");
    document.getElementById("FX").classList.remove = fxclass;
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxnone()");
}

function fxspin() {
    document.getElementById("FX").className = 'fx_spin'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxspin()");
}

function fxrotate() {
    document.getElementById("FX").className = 'fx_rotate'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxrotate()");
}

function fxacid() {
    document.getElementById("FX").className = 'fx_acid'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxacid()");
}

function fxstrobe() {
    document.getElementById("FX").className = 'fx_strobe'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxstrobe()");
}

function fxstrasto() {
    document.getElementById("FX").className = 'fx_strasto'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxstrasto()");
}

function fxscato() {
    document.getElementById("FX").className = 'fx_scato'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxscato()");
}

function fxblur() {
    document.getElementById("FX").className = 'fx_blur'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxblur()");
}

function fxblurry() {
    document.getElementById("FX").className = 'fx_blurry'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxblurry()");
}

function fxdisco() {
    document.getElementById("FX").className = 'fx_disco'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxdisco()");
}

function fxsepia() {
    document.getElementById("FX").className = 'fx_sepia'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxsepia()");
}

function fxgrayscale() {
    document.getElementById("FX").className = 'fx_grayscale'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxgrayscale()");
}

function fxinvert() {
    document.getElementById("FX").className = 'fx_invert'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxinvert()");
}

function fxinvertlights() {
    document.getElementById("FX").className = 'fx_invertLight'
    localStorage.removeItem("fx");
    localStorage.setItem("fx", "fxinvertlights()");
}

function about() {
    let about = [`
  <div class="about">
  <div class="about-header">
      <img class="About-Icon" src="./A/System64/Images/Common/Start.png">
      <h1 class="about-heading">MagnusWare</h1>
  </div>
  <div class="about-body">
      <p>
          <div id="MagnusWareV">MagnusWare v${MagnusWare_V}</div>
          Color Scheme: <div id=clrsh>${Color_Scheme}</div>
          Code Name: <div id="cdnm">${Codename}</div>
          Release Date: <div id="build-id">${Release_Date}</div>
          Release State: <div id="build-id">${Release_State}</div>
          OS State: <div id="build-id">${OS_State}</div>
          Activation State: <div id="build-id">${Activation_State}</div>
          Build ID: <div id="build-id">${BN}</div>
          UUID: <div id="uuid">${uid}</div>
      </p>
      <br>
      <div class="about-body-center">
          <p>
              Made by Magnus Marks
          </p>
          <p>
              Clippy made by <a href="https://github.com/clippyjs/clippy.js" target='_blank'>clippyjs</a>
          </p>
          <p>
              Base files scraped from GitHub
          </p>
          <p>
              UI heavily based on <a href="https://windows96.net/" target='_blank'>windows 96</a>, <a href="https://emuos.org/beta/emuos/" target='_blank'>EmuOS</a>, and <a href="https://linuxmint.com/" target='_blank'>Linux Mint</a>
          </p>
          <p>
              Theme Editor made by <a href="https://github.com/tpenguinltg/winclassic" target='_blank'>tpenguinltg</a>
          </p>
          <p>
              Everything else created by Magnus Marks
          </p>
          <p>
              <a href='./Feature.html' target='_blank'>Full Feature List</a>
          </p>
      </div>
  </div>
</div>
  `]
    document.getElementById("div1").innerHTML = about;
}

function jscmd() {
    let cmd = [`
    <div class="Terminal">
        <h3>JS-CMD</h3>
        <textarea id="Terminal-Input" placeholder="Type Here..." rows="10"></textarea>
        <button onclick="Terminal();">Submit</button>
        <p id="Terminal-Output"></p>
    </div>
    `]
    document.getElementById("div1").innerHTML = cmd;
    let input = document.getElementById("Terminal-Input");
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            Terminal();
        }
    });
}

function Terminal() {
    let inp = document.getElementById("Terminal-Input").value;
    let input = inp.toLowerCase();
    let output = document.getElementById("Terminal-Output");
    try {
        eval(input)
        output.insertAdjacentHTML('afterbegin', "<br><span id='success'>Success</span>");
    } catch (error) {
        output.insertAdjacentHTML('afterbegin', `<br><span id='error'>${error}</span>`);
    }
}

const confirm_reinstall = function () {
    showMessageBox({
        title: "Confirm Factory Reset?",
        message: "Are you sure you want to reinstall? You will NOT be able to retrieve ANY of your save data!",
        iconID: "nuke",
        sound: [SystemHand.play()],
        buttons: [{
                label: "Yes",
                action: () => {
                    reinstall();
                },
            },
            {
                label: "No",
            },
            {
                label: "No, I meant to reboot",
                action: () => {
                    confirm_reboot();
                },

            }
        ],
    })
}

const reinstall = function () {
    console.clear();
    const boot = document.createElement('div');
    boot.classList.add('boot');
    boot.id = 'boot';
    document.body.appendChild(boot);
    let factory = [`
    <div id='logInfo' class='fullscreen ui-terminal noscroll'></div>
<!--<canvas id="canvas"></canvas>
    <div id="loader"></div>-->
    `]
    boot.innerHTML = factory;
    document.getElementById("version-info").style.display = "none";
    document.getElementById("taskbr").style.display = "none";
    document.getElementById("boot").style.visibility = "visible";
    (function () {
        function reloadCSS() {
            var links = document.getElementsByTagName('link');
            for (var i = 0; i < links.length; i++) {
                if (links[i].rel === 'stylesheet') {
                    var href = links[i].href;
                    href += (href.includes('?') ? '&' : '?') + 'timestamp=' + new Date().getTime();
                    links[i].href = href;
                }
            }
        }
        reloadCSS();
    })();
    (function () {
        function reloadCachedJS() {
            console.log(scriptUrls);
            scriptUrls.forEach(function (filePath) {
                var scriptElement = document.createElement('script');
                scriptElement.src = filePath + '?v=' + Date.now();
                document.head.appendChild(scriptElement);
            });
        }
        reloadCachedJS();
    });
    trash();

    function trash() {
        (function () {
            C = document.cookie.split("; ");
            for (d = "." + location.host; d; d = ("" + d)
                .substr(1)
                .match(/..*$/))
                for (sl = 0; sl < 2; ++sl)
                    for (p = "/" + location.pathname; p; p = p.substring(0, p.lastIndexOf('/')))
                        for (i in C)
                            if (c = C[i]) {
                                document.cookie = c + "; domain=" + d.slice(sl) + "; path=" + p.slice(1) + "/" + "; expires=" + new Date((new Date)
                                        .getTime() - 1e11)
                                    .toGMTString()
                            }
            window.localStorage.clear();
            sessionStorage.clear();
        })();

    };
    /*
     *  howler.js v1.1.25
     */
    (function () {
        var e = {};
        var o = null,
            n = true,
            r = false;
        try {
            if (typeof AudioContext !== "undefined") {
                o = new AudioContext
            } else if (typeof webkitAudioContext !== "undefined") {
                o = new webkitAudioContext
            } else {
                n = false
            }
        } catch (t) {
            n = false
        }
        if (!n) {
            if (typeof Audio !== "undefined") {
                try {
                    new Audio
                } catch (t) {
                    r = true
                }
            } else {
                r = true
            }
        }
        if (n) {
            var i = typeof o.createGain === "undefined" ? o.createGainNode() : o.createGain();
            i.gain.value = 1;
            i.connect(o.destination)
        }
        var a = function (e) {
            this._volume = 1;
            this._muted = false;
            this.usingWebAudio = n;
            this.ctx = o;
            this.noAudio = r;
            this._howls = [];
            this._codecs = e;
            this.iOSAutoEnable = true
        };
        a.prototype = {
            volume: function (e) {
                var o = this;
                e = parseFloat(e);
                if (e >= 0 && e <= 1) {
                    o._volume = e;
                    if (n) {
                        i.gain.value = e
                    }
                    for (var r in o._howls) {
                        if (o._howls.hasOwnProperty(r) && o._howls[r]._webAudio === false) {
                            for (var t = 0; t < o._howls[r]._audioNode.length; t++) {
                                o._howls[r]._audioNode[t].volume = o._howls[r]._volume * o._volume
                            }
                        }
                    }
                    return o
                }
                return n ? i.gain.value : o._volume
            },
            mute: function () {
                this._setMuted(true);
                return this
            },
            unmute: function () {
                this._setMuted(false);
                return this
            },
            _setMuted: function (e) {
                var o = this;
                o._muted = e;
                if (n) {
                    i.gain.value = e ? 0 : o._volume
                }
                for (var r in o._howls) {
                    if (o._howls.hasOwnProperty(r) && o._howls[r]._webAudio === false) {
                        for (var t = 0; t < o._howls[r]._audioNode.length; t++) {
                            o._howls[r]._audioNode[t].muted = e
                        }
                    }
                }
            },
            codecs: function (e) {
                return this._codecs[e]
            },
            _enableiOSAudio: function () {
                var e = this;
                if (o && (e._iOSEnabled || !/iPhone|iPad|iPod/i.test(navigator.userAgent))) {
                    return
                }
                e._iOSEnabled = false;
                var n = function () {
                    var r = o.createBuffer(1, 1, 22050);
                    var t = o.createBufferSource();
                    t.buffer = r;
                    t.connect(o.destination);
                    if (typeof t.start === "undefined") {
                        t.noteOn(0)
                    } else {
                        t.start(0)
                    }
                    setTimeout(function () {
                        if (t.playbackState === t.PLAYING_STATE || t.playbackState === t.FINISHED_STATE) {
                            e._iOSEnabled = true;
                            e.iOSAutoEnable = false;
                            window.removeEventListener("touchstart", n, false)
                        }
                    }, 0)
                };
                window.addEventListener("touchstart", n, false);
                return e
            }
        };
        var u = null;
        var d = {};
        if (!r) {
            u = new Audio;
            d = {
                mp3: !!u.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                opus: !!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!u.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!u.canPlayType("audio/aac;").replace(/^no$/, ""),
                m4a: !!(u.canPlayType("audio/x-m4a;") || u.canPlayType("audio/m4a;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(u.canPlayType("audio/x-mp4;") || u.canPlayType("audio/mp4;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            }
        }
        var f = new a(d);
        var l = function (e) {
            var r = this;
            r._autoplay = e.autoplay || false;
            r._buffer = e.buffer || false;
            r._duration = e.duration || 0;
            r._format = e.format || null;
            r._loop = e.loop || false;
            r._loaded = false;
            r._sprite = e.sprite || {};
            r._src = e.src || "";
            r._pos3d = e.pos3d || [0, 0, -.5];
            r._volume = e.volume !== undefined ? e.volume : 1;
            r._urls = e.urls || [];
            r._rate = e.rate || 1;
            r._model = e.model || null;
            r._onload = [e.onload || function () {}];
            r._onloaderror = [e.onloaderror || function () {}];
            r._onend = [e.onend || function () {}];
            r._onpause = [e.onpause || function () {}];
            r._onplay = [e.onplay || function () {}];
            r._onendTimer = [];
            r._webAudio = n && !r._buffer;
            r._audioNode = [];
            if (r._webAudio) {
                r._setupAudioNode()
            }
            if (typeof o !== "undefined" && o && f.iOSAutoEnable) {
                f._enableiOSAudio()
            }
            f._howls.push(r);
            r.load()
        };
        l.prototype = {
            load: function () {
                var e = this,
                    o = null;
                if (r) {
                    e.on("loaderror");
                    return
                }
                for (var n = 0; n < e._urls.length; n++) {
                    var t, i;
                    if (e._format) {
                        t = e._format
                    } else {
                        i = e._urls[n];
                        t = /^data:audio\/([^;,]+);/i.exec(i);
                        if (!t) {
                            t = /\.([^.]+)$/.exec(i.split("?", 1)[0])
                        }
                        if (t) {
                            t = t[1].toLowerCase()
                        } else {
                            e.on("loaderror");
                            return
                        }
                    }
                    if (d[t]) {
                        o = e._urls[n];
                        break
                    }
                }
                if (!o) {
                    e.on("loaderror");
                    return
                }
                e._src = o;
                if (e._webAudio) {
                    s(e, o)
                } else {
                    var u = new Audio;
                    u.addEventListener("error", function () {
                        if (u.error && u.error.code === 4) {
                            a.noAudio = true
                        }
                        e.on("loaderror", {
                            type: u.error ? u.error.code : 0
                        })
                    }, false);
                    e._audioNode.push(u);
                    u.src = o;
                    u._pos = 0;
                    u.preload = "auto";
                    u.volume = f._muted ? 0 : e._volume * f.volume();
                    var l = function () {
                        e._duration = Math.ceil(u.duration * 10) / 10;
                        if (Object.getOwnPropertyNames(e._sprite).length === 0) {
                            e._sprite = {
                                _default: [0, e._duration * 1e3]
                            }
                        }
                        if (!e._loaded) {
                            e._loaded = true;
                            e.on("load")
                        }
                        if (e._autoplay) {
                            e.play()
                        }
                        u.removeEventListener("canplaythrough", l, false)
                    };
                    u.addEventListener("canplaythrough", l, false);
                    u.load()
                }
                return e
            },
            urls: function (e) {
                var o = this;
                if (e) {
                    o.stop();
                    o._urls = typeof e === "string" ? [e] : e;
                    o._loaded = false;
                    o.load();
                    return o
                } else {
                    return o._urls
                }
            },
            play: function (e, n) {
                var r = this;
                if (typeof e === "function") {
                    n = e
                }
                if (!e || typeof e === "function") {
                    e = "_default"
                }
                if (!r._loaded) {
                    r.on("load", function () {
                        r.play(e, n)
                    });
                    return r
                }
                if (!r._sprite[e]) {
                    if (typeof n === "function") n();
                    return r
                }
                r._inactiveNode(function (t) {
                    t._sprite = e;
                    var i = t._pos > 0 ? t._pos : r._sprite[e][0] / 1e3;
                    var a = 0;
                    if (r._webAudio) {
                        a = r._sprite[e][1] / 1e3 - t._pos;
                        if (t._pos > 0) {
                            i = r._sprite[e][0] / 1e3 + i
                        }
                    } else {
                        a = r._sprite[e][1] / 1e3 - (i - r._sprite[e][0] / 1e3)
                    }
                    var u = !!(r._loop || r._sprite[e][2]);
                    var d = typeof n === "string" ? n : Math.round(Date.now() * Math.random()) + "",
                        l;
                    (function () {
                        var o = {
                            id: d,
                            sprite: e,
                            loop: u
                        };
                        l = setTimeout(function () {
                            if (!r._webAudio && u) {
                                r.stop(o.id).play(e, o.id)
                            }
                            if (r._webAudio && !u) {
                                r._nodeById(o.id).paused = true;
                                r._nodeById(o.id)._pos = 0;
                                r._clearEndTimer(o.id)
                            }
                            if (!r._webAudio && !u) {
                                r.stop(o.id)
                            }
                            r.on("end", d)
                        }, a * 1e3);
                        r._onendTimer.push({
                            timer: l,
                            id: o.id
                        })
                    })();
                    if (r._webAudio) {
                        var s = r._sprite[e][0] / 1e3,
                            _ = r._sprite[e][1] / 1e3;
                        t.id = d;
                        t.paused = false;
                        p(r, [u, s, _], d);
                        r._playStart = o.currentTime;
                        t.gain.value = r._volume;
                        if (typeof t.bufferSource.start === "undefined") {
                            t.bufferSource.noteGrainOn(0, i, a)
                        } else {
                            t.bufferSource.start(0, i, a)
                        }
                    } else {
                        if (t.readyState === 4 || !t.readyState && navigator.isCocoonJS) {
                            t.readyState = 4;
                            t.id = d;
                            t.currentTime = i;
                            t.muted = f._muted || t.muted;
                            t.volume = r._volume * f.volume();
                            setTimeout(function () {
                                t.play()
                            }, 0)
                        } else {
                            r._clearEndTimer(d);
                            (function () {
                                var o = r,
                                    i = e,
                                    a = n,
                                    u = t;
                                var d = function () {
                                    o.play(i, a);
                                    u.removeEventListener("canplaythrough", d, false)
                                };
                                u.addEventListener("canplaythrough", d, false)
                            })();
                            return r
                        }
                    }
                    r.on("play");
                    if (typeof n === "function") n(d);
                    return r
                });
                return r
            },
            pause: function (e) {
                var o = this;
                if (!o._loaded) {
                    o.on("play", function () {
                        o.pause(e)
                    });
                    return o
                }
                o._clearEndTimer(e);
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n) {
                    n._pos = o.pos(null, e);
                    if (o._webAudio) {
                        if (!n.bufferSource || n.paused) {
                            return o
                        }
                        n.paused = true;
                        if (typeof n.bufferSource.stop === "undefined") {
                            n.bufferSource.noteOff(0)
                        } else {
                            n.bufferSource.stop(0)
                        }
                    } else {
                        n.pause()
                    }
                }
                o.on("pause");
                return o
            },
            stop: function (e) {
                var o = this;
                if (!o._loaded) {
                    o.on("play", function () {
                        o.stop(e)
                    });
                    return o
                }
                o._clearEndTimer(e);
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n) {
                    n._pos = 0;
                    if (o._webAudio) {
                        if (!n.bufferSource || n.paused) {
                            return o
                        }
                        n.paused = true;
                        if (typeof n.bufferSource.stop === "undefined") {
                            n.bufferSource.noteOff(0)
                        } else {
                            n.bufferSource.stop(0)
                        }
                    } else if (!isNaN(n.duration)) {
                        n.pause();
                        n.currentTime = 0
                    }
                }
                return o
            },
            mute: function (e) {
                var o = this;
                if (!o._loaded) {
                    o.on("play", function () {
                        o.mute(e)
                    });
                    return o
                }
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n) {
                    if (o._webAudio) {
                        n.gain.value = 0
                    } else {
                        n.muted = true
                    }
                }
                return o
            },
            unmute: function (e) {
                var o = this;
                if (!o._loaded) {
                    o.on("play", function () {
                        o.unmute(e)
                    });
                    return o
                }
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n) {
                    if (o._webAudio) {
                        n.gain.value = o._volume
                    } else {
                        n.muted = false
                    }
                }
                return o
            },
            volume: function (e, o) {
                var n = this;
                e = parseFloat(e);
                if (e >= 0 && e <= 1) {
                    n._volume = e;
                    if (!n._loaded) {
                        n.on("play", function () {
                            n.volume(e, o)
                        });
                        return n
                    }
                    var r = o ? n._nodeById(o) : n._activeNode();
                    if (r) {
                        if (n._webAudio) {
                            r.gain.value = e
                        } else {
                            r.volume = e * f.volume()
                        }
                    }
                    return n
                } else {
                    return n._volume
                }
            },
            loop: function (e) {
                var o = this;
                if (typeof e === "boolean") {
                    o._loop = e;
                    return o
                } else {
                    return o._loop
                }
            },
            sprite: function (e) {
                var o = this;
                if (typeof e === "object") {
                    o._sprite = e;
                    return o
                } else {
                    return o._sprite
                }
            },
            pos: function (e, n) {
                var r = this;
                if (!r._loaded) {
                    r.on("load", function () {
                        r.pos(e)
                    });
                    return typeof e === "number" ? r : r._pos || 0
                }
                e = parseFloat(e);
                var t = n ? r._nodeById(n) : r._activeNode();
                if (t) {
                    if (e >= 0) {
                        r.pause(n);
                        t._pos = e;
                        r.play(t._sprite, n);
                        return r
                    } else {
                        return r._webAudio ? t._pos + (o.currentTime - r._playStart) : t.currentTime
                    }
                } else if (e >= 0) {
                    return r
                } else {
                    for (var i = 0; i < r._audioNode.length; i++) {
                        if (r._audioNode[i].paused && r._audioNode[i].readyState === 4) {
                            return r._webAudio ? r._audioNode[i]._pos : r._audioNode[i].currentTime
                        }
                    }
                }
            },
            pos3d: function (e, o, n, r) {
                var t = this;
                o = typeof o === "undefined" || !o ? 0 : o;
                n = typeof n === "undefined" || !n ? -.5 : n;
                if (!t._loaded) {
                    t.on("play", function () {
                        t.pos3d(e, o, n, r)
                    });
                    return t
                }
                if (e >= 0 || e < 0) {
                    if (t._webAudio) {
                        var i = r ? t._nodeById(r) : t._activeNode();
                        if (i) {
                            t._pos3d = [e, o, n];
                            i.panner.setPosition(e, o, n);
                            i.panner.panningModel = t._model || "HRTF"
                        }
                    }
                } else {
                    return t._pos3d
                }
                return t
            },
            fade: function (e, o, n, r, t) {
                var i = this,
                    a = Math.abs(e - o),
                    u = e > o ? "down" : "up",
                    d = a / .01,
                    f = n / d;
                if (!i._loaded) {
                    i.on("load", function () {
                        i.fade(e, o, n, r, t)
                    });
                    return i
                }
                i.volume(e, t);
                for (var l = 1; l <= d; l++) {
                    (function () {
                        var e = i._volume + (u === "up" ? .01 : -.01) * l,
                            n = Math.round(1e3 * e) / 1e3,
                            a = o;
                        setTimeout(function () {
                            i.volume(n, t);
                            if (n === a) {
                                if (r) r()
                            }
                        }, f * l)
                    })()
                }
            },
            fadeIn: function (e, o, n) {
                return this.volume(0).play().fade(0, e, o, n)
            },
            fadeOut: function (e, o, n, r) {
                var t = this;
                return t.fade(t._volume, e, o, function () {
                    if (n) n();
                    t.pause(r);
                    t.on("end")
                }, r)
            },
            _nodeById: function (e) {
                var o = this,
                    n = o._audioNode[0];
                for (var r = 0; r < o._audioNode.length; r++) {
                    if (o._audioNode[r].id === e) {
                        n = o._audioNode[r];
                        break
                    }
                }
                return n
            },
            _activeNode: function () {
                var e = this,
                    o = null;
                for (var n = 0; n < e._audioNode.length; n++) {
                    if (!e._audioNode[n].paused) {
                        o = e._audioNode[n];
                        break
                    }
                }
                e._drainPool();
                return o
            },
            _inactiveNode: function (e) {
                var o = this,
                    n = null;
                for (var r = 0; r < o._audioNode.length; r++) {
                    if (o._audioNode[r].paused && o._audioNode[r].readyState === 4) {
                        e(o._audioNode[r]);
                        n = true;
                        break
                    }
                }
                o._drainPool();
                if (n) {
                    return
                }
                var t;
                if (o._webAudio) {
                    t = o._setupAudioNode();
                    e(t)
                } else {
                    o.load();
                    t = o._audioNode[o._audioNode.length - 1];
                    var i = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata";
                    var a = function () {
                        t.removeEventListener(i, a, false);
                        e(t)
                    };
                    t.addEventListener(i, a, false)
                }
            },
            _drainPool: function () {
                var e = this,
                    o = 0,
                    n;
                for (n = 0; n < e._audioNode.length; n++) {
                    if (e._audioNode[n].paused) {
                        o++
                    }
                }
                for (n = e._audioNode.length - 1; n >= 0; n--) {
                    if (o <= 5) {
                        break
                    }
                    if (e._audioNode[n].paused) {
                        if (e._webAudio) {
                            e._audioNode[n].disconnect(0)
                        }
                        o--;
                        e._audioNode.splice(n, 1)
                    }
                }
            },
            _clearEndTimer: function (e) {
                var o = this,
                    n = 0;
                for (var r = 0; r < o._onendTimer.length; r++) {
                    if (o._onendTimer[r].id === e) {
                        n = r;
                        break
                    }
                }
                var t = o._onendTimer[n];
                if (t) {
                    clearTimeout(t.timer);
                    o._onendTimer.splice(n, 1)
                }
            },
            _setupAudioNode: function () {
                var e = this,
                    n = e._audioNode,
                    r = e._audioNode.length;
                n[r] = typeof o.createGain === "undefined" ? o.createGainNode() : o.createGain();
                n[r].gain.value = e._volume;
                n[r].paused = true;
                n[r]._pos = 0;
                n[r].readyState = 4;
                n[r].connect(i);
                n[r].panner = o.createPanner();
                n[r].panner.panningModel = e._model || "equalpower";
                n[r].panner.setPosition(e._pos3d[0], e._pos3d[1], e._pos3d[2]);
                n[r].panner.connect(n[r]);
                return n[r]
            },
            on: function (e, o) {
                var n = this,
                    r = n["_on" + e];
                if (typeof o === "function") {
                    r.push(o)
                } else {
                    for (var t = 0; t < r.length; t++) {
                        if (o) {
                            r[t].call(n, o)
                        } else {
                            r[t].call(n)
                        }
                    }
                }
                return n
            },
            off: function (e, o) {
                var n = this,
                    r = n["_on" + e],
                    t = o ? o.toString() : null;
                if (t) {
                    for (var i = 0; i < r.length; i++) {
                        if (t === r[i].toString()) {
                            r.splice(i, 1);
                            break
                        }
                    }
                } else {
                    n["_on" + e] = []
                }
                return n
            },
            unload: function () {
                var o = this;
                var n = o._audioNode;
                for (var r = 0; r < o._audioNode.length; r++) {
                    if (!n[r].paused) {
                        o.stop(n[r].id);
                        o.on("end", n[r].id)
                    }
                    if (!o._webAudio) {
                        n[r].src = ""
                    } else {
                        n[r].disconnect(0)
                    }
                }
                for (r = 0; r < o._onendTimer.length; r++) {
                    clearTimeout(o._onendTimer[r].timer)
                }
                var t = f._howls.indexOf(o);
                if (t !== null && t >= 0) {
                    f._howls.splice(t, 1)
                }
                delete e[o._src];
                o = null
            }
        };
        if (n) {
            var s = function (o, n) {
                if (n in e) {
                    o._duration = e[n].duration;
                    c(o);
                    return
                }
                if (/^data:[^;]+;base64,/.test(n)) {
                    var r = atob(n.split(",")[1]);
                    var t = new Uint8Array(r.length);
                    for (var i = 0; i < r.length; ++i) {
                        t[i] = r.charCodeAt(i)
                    }
                    _(t.buffer, o, n)
                } else {
                    var a = new XMLHttpRequest;
                    a.open("GET", n, true);
                    a.responseType = "arraybuffer";
                    a.onload = function () {
                        _(a.response, o, n)
                    };
                    a.onerror = function () {
                        if (o._webAudio) {
                            o._buffer = true;
                            o._webAudio = false;
                            o._audioNode = [];
                            delete o._gainNode;
                            delete e[n];
                            o.load()
                        }
                    };
                    try {
                        a.send()
                    } catch (u) {
                        a.onerror()
                    }
                }
            };
            var _ = function (n, r, t) {
                o.decodeAudioData(n, function (o) {
                    if (o) {
                        e[t] = o;
                        c(r, o)
                    }
                }, function (e) {
                    r.on("loaderror")
                })
            };
            var c = function (e, o) {
                e._duration = o ? o.duration : e._duration;
                if (Object.getOwnPropertyNames(e._sprite).length === 0) {
                    e._sprite = {
                        _default: [0, e._duration * 1e3]
                    }
                }
                if (!e._loaded) {
                    e._loaded = true;
                    e.on("load")
                }
                if (e._autoplay) {
                    e.play()
                }
            };
            var p = function (n, r, t) {
                var i = n._nodeById(t);
                i.bufferSource = o.createBufferSource();
                i.bufferSource.buffer = e[n._src];
                i.bufferSource.connect(i.panner);
                i.bufferSource.loop = r[0];
                if (r[0]) {
                    i.bufferSource.loopStart = r[1];
                    i.bufferSource.loopEnd = r[1] + r[2]
                }
                i.bufferSource.playbackRate.value = n._rate
            }
        }
        if (typeof define === "function" && define.amd) {
            define(function () {
                return {
                    Howler: f,
                    Howl: l
                }
            })
        }
        if (typeof exports !== "undefined") {
            exports.Howler = f;
            exports.Howl = l
        }
        if (typeof window !== "undefined") {
            window.Howler = f;
            window.Howl = l
        }
    })();
    /*!
    kernel.js
    Writen, concatened, modified, optimised, fixed (or wasted) with ♥ by @zombectro
    */
    ! function (e, t) {
        if (typeof module != "undefined") module.exports = t();
        else if (typeof define == "function" && typeof define.amd == "object") define(t);
        else this[e] = t()
    }
    ("$io", function () {
        "use strict";
        var e = Object.prototype.toString,
            t = Function.prototype.toString,
            n = Object.prototype.hasOwnProperty,
            i = Array.prototype.slice;

        function o(e) {
            this.val = e;
            this.type = x(e);
            this.get = function () {
                return this.val
            };
            this.is = function (e) {
                var t = -1,
                    n = e.length;
                while (++t < n)
                    if (this.type == e[t]) return true;
                return false
            };
            this.isNot = function (e) {
                var t = -1,
                    n = e.length;
                while (++t < n)
                    if (this.type == e[t]) return false;
                return true
            }
        }

        function r(e) {
            return new o(e)
        }

        function a(t) {
            return e.call(t).slice(8, -1)
        }

        function s(t) {
            return t ? t.constructor.name || e.call(t).slice(8, -1) : t === null ? "Null" : "Undefined"
        }
        r.type = a;
        var l = y(Array.isArray) ? Array.isArray : function (t) {
            return t && typeof t == "object" && typeof t.length == "number" && e.call(t) == "[object Array]" || false
        };

        function u(e) {
            return typeof e == "string" || false
        }

        function c(e) {
            return typeof e == "function" || false
        }

        function f(t) {
            return t && (typeof t !== "object" || t === null) ? false : e.call(t) == "[object Object]"
        }

        function d(e) {
            return typeof e == "number" && isFinite(e) || false
        }

        function p(t) {
            return t && typeof t == "object" && e.call(t) == "[object RegExp]" || false
        }

        function m(t) {
            return t && (typeof t.length == "number" && e.call(t) == "[object Arguments]") || false
        }

        function h(t) {
            return e.call(t) == "[object Number]" && t != +t
        }

        function g(t) {
            return e.call(t) == "[object Number]" && !isFinite(t)
        }

        function y(e) {
            return c(e) && ("" + e).indexOf("[native code]") >= 0
        }

        function v(t) {
            var n;
            return t && typeof t == "object" && e.call(t) == "[object Error]" || false
        }

        function w(e) {
            var t;
            return e && (t = e.constructor) && typeof t == "function" && t.prototype == e
        }

        function b(e) {
            return e && e.nodeType === 1 || false
        }

        function _(t) {
            var n = e.call(t);
            return n == "[object global]" || n == "[object Window]" || n == "[object DOMWindow]"
        }

        function $(t) {
            var n = e.call(t);
            return typeof t === "object" && (n == "[object HTMLCollection]" || n == "[object NodeList]" || n == "[object Object]" && t.hasOwnProperty("length") && (t.length === 0 || typeof t[0] === "object" && t[0].nodeType > 0))
        }

        function x(t) {
            var n = typeof t;
            return n == "string" ? "String" : n == "boolean" ? "Boolean" : n == "function" || false ? "Function" : t === null ? "Null" : t === undefined ? "Undefined" : d(t) ? "Number" : h(t) ? "NaN" : b(t) ? "Element" : l(t) ? "Array" : m(t) ? "Arguments" : g(t) ? "Infinity" : v(t) ? "Error" : t.constructor.name || e.call(t).slice(8, -1)
        }
        r.is = x;
        r.is.arr = r.isArray = l;
        r.is.str = r.isString = u;
        r.is.fun = r.isFunction = c;
        r.is.obj = r.isObject = f;
        r.is.num = r.isNumber = d;
        r.is.reg = r.isRegExp = p;
        r.is.arg = r.isArguments = m;
        r.is.inf = r.isInfinity = g;
        r.is.nat = r.isNative = y;
        r.is.err = r.isError = v;
        r.is.pro = r.isPrototype = w;
        r.is.ele = r.isElement = b;
        r.is.win = r.isWindow = _;
        r.is.nodelist = r.isNodeList = $;

        function C(e) {
            if (!e) return [];
            return Object.keys(e)
        }

        function E(e, t) {
            var n;
            for (n in e) {
                aI = e[n];
                bI = t[n];
                if (e.hasOwnProperty(n) != t.hasOwnProperty(n)) return false;
                if (typeof aI != typeof bI) return false
            }
            for (n in t) {
                aI = e[n];
                bI = t[n];
                if (!e.hasOwnProperty(n)) return false;
                if (aI === bI) continue;
                if (typeof aI != typeof bI) return false;
                if (!t.hasOwnProperty(n)) continue;
                else if (l(aI) && l(bI) && O(aI, bI)) continue;
                else if (f(aI) && f(bI) && E(aI, bI)) continue;
                return false
            }
            return true
        }

        function L(e, t) {
            var n;
            for (n in e)
                if (e.hasOwnProperty(n)) t(e[n], n)
        }

        function k(e, t) {
            var n;
            for (n in e)
                if (e.hasOwnProperty(n)) {
                    if (t(e[n], n) === false) break
                }
        }

        function N(e) {
            try {
                return JSON.stringify(e, null, 2)
            } catch (t) {
                try {
                    var n = [];
                    $io.arr.all(e, function (e) {
                        n.push(e)
                    });
                    return "[" + n.join(", ") + "]"
                } catch (i) {
                    return "[Error]"
                }
            }
        }

        function j(e, t, n) {
            var i = 0,
                o = $io.reg.escape(n),
                r = new RegExp("^" + o + "|" + o + "$", "gi"),
                a;
            n = n || ".";
            t = t.replace(r, "").split(n);
            while (e && i < t.length) e = e[t[i++]];
            return e
        }

        function I(e, t, n) {
            var i = 0,
                o = $io.reg.escape(n),
                r = new RegExp("^" + o + "|" + o + "$", "gi"),
                a;
            n = n || ".";
            t = t.replace(r, "").split(n);
            while (e && i < t.length) {
                if (e[t[i]]) {
                    e = e[t[i]]
                } else {
                    e = e[t[i]] = {}
                }
                i++
            }
            return e
        }
        r.obj = r.Object = {};
        r.obj.all = L;
        r.obj.each = k;
        r.obj.equal = E;
        r.obj.str = N;
        r.obj.getPath = j;
        r.obj.setPath = I;

        function O(e, t) {
            var n = e.length;
            if (n != t.length) return false;
            while (n--) {
                aI = e[n];
                bI = t[n];
                if (aI === bI) continue;
                else if (l(aI) && l(bI) && O(aI, bI)) continue;
                else if (f(aI) && f(bI) && E(aI, bI)) continue;
                return false
            }
            return true
        }

        function T(e, t) {
            var n = -1,
                i = e.length;
            while (++n < i) t(e[n])
        }

        function A(e, t) {
            var n = -1,
                i = e.length;
            while (++n < i)
                if (t(e[n], n) === false) break
        }

        function M(e, t, n) {
            var i = n;
            for (var o = 0, r = e.length; o < r; o++) {
                i = t(i, e[o], o, e)
            }
            return i
        }

        function S(e) {
            return e[Math.floor(Math.random() * e.length)]
        }
        r.arr = r.Array = {};
        r.arr.all = T;
        r.arr.each = A;
        r.arr.equal = O;
        r.arr.reduce = M;
        r.arr.random = S;
        r.str = {};
        r.str.truncate = function (e, t) {
            return e.length > t ? e.slice(0, t) + "..." : e
        };
        r.str.slug = function (e) {
            return e.toLowerCase().replace(/ +/g, "-").replace(/[^-\w]/g, "")
        };
        r.str.trim = function (e) {
            var t, n;
            for (t = 0, n = e.length - 1; t <= n; t++) {
                if (e.charCodeAt(t) < 33) continue;
                else break
            }
            for (; n >= t; n--) {
                if (e.charCodeAt(n) < 33) continue;
                else break
            }
            return e.substring(t, n + 1)
        };
        r.str.camel = function (e) {
            return e.replace(/(\-[a-z])/g, function (e) {
                return e.toUpperCase().replace("-", "")
            })
        };
        r.str.dash = function (e) {
            return e.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase()
            })
        };
        r.str.autolink = function (e) {
            var t = [],
                n = 0;
            return e.replace(/(?:\(((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+$&@#\/%=~_()|])\))/gm, function (e, n) {
                t.push(n);
                return "_links_in_parens___ktlu_"
            }).replace(/((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+$&@#\/%=~_()|])/gm, function (e) {
                return '<a target="_blank" href="' + (e.indexOf("www.") == 0 ? "http://" + e : e) + '">' + e + "</a>"
            }).replace(/(^|[^@\w])@(\w{1,15})\b/g,
                '$1<a target="_blank" href="http://twitter.com/$2">@$2</a>').replace(/([\w.]*\w@[\w.]+\w)/gm,
                '<a href="mailto:$1">$1</a>').replace(/_links_in_parens___ktlu_/g, function () {
                var e = t[n++];
                return '(<a target="_blank" href="' + e + '">' + e + "</a>)"
            })
        };

        function z(e, t) {
            "use strict";
            if (!e || typeof e != "function") return "_not_a_function_";
            return t(e)
        }

        function H(e, t) {
            return z(e, function () {
                var n = t ? /^function[\W\w]*?{/ : null,
                    i = t ? /\s+\}$/ : null,
                    o = e.toString().replace(n, "").replace(i, ""),
                    a = o.match(/(^\s*)/gm),
                    s = a ? a.length > 1 ? a.slice(1).reduce(function (e, t) {
                        return e.length < t.length ? e : t
                    }) : a[0] : "";
                return r.str.trim(o.replace(new RegExp("^" + o.match(s), "gm"), "").replace(/^\t/gm, "  "))
            })
        }

        function R(e) {
            if (e.name) return e.name;
            return z(e, function () {
                var t = e.toString().match(/^\s*function ([^\(\s]+)/);
                return t && t[1] || "anonymous"
            })
        }

        function D(e) {
            if (!e.length) return [];
            return z(e, function () {
                var t = e.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, ""),
                    n = t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(/([^\s,]+)/g);
                return n === null ? [] : n
            })
        }
        r.fn = {};
        r.fn.str = H;
        r.fn.outer = H;
        r.fn.inner = function (e) {
            return H(e, true)
        };
        r.fn.name = R;
        r.fn.arg = D;
        r.fn.prop = r.fn.keys = function q(e) {
            if (!e) return [];
            return Object.keys(e)
        };
        r.fn.method = r.fn.meth = function (e) {
            var t = C(e),
                n = -1,
                i = t.length,
                o = {};
            while (++n < i) {
                o[t[n]] = e[t[n]]
            }
            return o
        };
        r.fn.throttle = function (e, t) {
            var n = false;
            return function () {
                if (!n) {
                    e.apply(this, arguments);
                    n = true;
                    setTimeout(function () {
                        n = false
                    }, t)
                }
            }
        };
        r.fn.debounce = function (e, t) {
            var n;
            return function () {
                var i = this,
                    o = arguments;
                clearTimeout(n);
                n = setTimeout(function () {
                    e.apply(i, o)
                }, t)
            }
        };

        function P(e) {
            return i.call(e)
        }
        r.arg = {};
        r.arg.arr = P;
        r.reg = {};
        r.reg.escape = function (e) {
            return e.replace(/[-[\]{}()*+?.\\^$|]/g, "\\$&")
        };
        r.each = function (e, t, i) {
            if (e) {
                if (f(e)) {
                    for (var o in e) {
                        if (n.call(e, o)) {
                            if (t.call(i, e[o], o, e) === false) break
                        }
                    }
                } else {
                    for (var o = 0, r = e.length; o < r; o++) {
                        if (t.call(i, e[o], o, e) === false) break
                    }
                }
            }
        };
        return r
    });
    var $url = {
        query: function () {
            var e = {};
            var t = window.location.search.substring(1);
            var n = t.split("&");
            for (var i = 0; i < n.length; i++) {
                var o = n[i].split("=");
                if (typeof e[o[0]] === "undefined") {
                    e[o[0]] = o[1]
                } else if (typeof e[o[0]] === "string") {
                    var r = [e[o[0]], o[1]];
                    e[o[0]] = r
                } else {
                    e[o[0]].push(o[1])
                }
            }
            return e
        }(),
        parseQuery: function (e) {
            return $io.arr.reduce(e.replace("?", "").split("&"), function (e, t) {
                var n = t.indexOf("="),
                    i = t.slice(0, n),
                    o = t.slice(++n);
                e[i] = decodeURIComponent(o);
                return e
            }, {})
        },
        getExtention: function (e) {
            var t = e.match(/(?:\.)([0-9a-z]+)(?:[!?].+)?$/);
            return t && t[1] ? t[1] : ""
        },
        getDomain: function (e) {
            var t = e.match(/:\/\/(.[^/]+)/);
            if (t != null && t.length >= 2) {
                return t[1]
            } else {
                return null
            }
        },
        checkImage: function (e, t) {
            var n = new Image;
            n.onload = i;
            n.onerror = i;
            n.onabort = i;
            n.src = e;

            function i() {
                if (n.width > 0) t(true, n);
                else t(false, n)
            }
        },
        checkFavicon: function (e, t) {
            if (e && $io.str.trim(e) != "") {
                var n = $url.getDomain(e),
                    i;
                if (n) {
                    $url.checkImage(i = "http://" + n + "/favicon.ico", function (e) {
                        if (e) t(true, i);
                        else $url.checkImage(i = "http://" + n + "/favicon.gif", function (e) {
                            if (e) t(true, i);
                            else $url.checkImage(i = "http://" + n + "/favicon.png", function (e) {
                                if (e) t(true, i);
                                else t(false)
                            })
                        })
                    })
                }
            }
        }
    };
    var $dom = {
        getSelection: function () {
            var e = "";
            if (window.getSelection) {
                e = window.getSelection().toString()
            } else if (document.selection && document.selection.type != "Control") {
                e = document.selection.createRange().text
            }
            return e
        }
    };

    function $noop() {}! function (e) {
        "use strict";
        var t = Object.prototype.toString,
            n = Object.prototype.hasOwnProperty,
            i = Array.prototype.slice;
        e["$is"] = function o(e, n) {
            return n ? t.call(e).indexOf("[object " + n) == 0 : t.call(e).replace(/\[object |\]/g, "")
        };
        e["$slice"] = function r(e, t, n) {
            var o = t && n ? [t, n] : t ? [t] : [1];
            return i.apply(e, o)
        };
        e["$extend"] = function a(e) {
            var t, o, r, s;
            if (typeof e == "boolean" || typeof e == "string") {
                t = i.call(arguments, 1);
                e = e === true ? "deep" : e
            } else {
                t = arguments;
                e = false
            }
            o = t[0];
            for (r = 1, s = t.length; r < s; r++) {
                var l = t[r];
                for (var u in l) {
                    var c = l[u];
                    if (e == "strict" && !n.call(o, u)) continue;
                    if (e == "deep" && typeof c === "object" && typeof o[u] !== "undefined") a(e, o[u], c);
                    else o[u] = c
                }
            }
            return o
        }
    }(this);

    function $watch(e, t) {
        "use strict";
        var n = {};
        var i = Array.prototype.slice;
        var t = t;
        e.observers = n;
        e.on = function (e, t) {
            e.replace(/\S+/g, function (e, i) {
                (n[e] = n[e] || []).push(t)
            });
            return t
        };
        e.off = function (e, t) {
            if (e === "*") n = {};
            else if (t) {
                var i = n[e];
                for (var o = 0, r; r = i && i[o]; ++o) {
                    if (r === t) {
                        i.splice(o, 1);
                        o--
                    }
                }
            } else {
                e.replace(/\S+/g, function (e) {
                    n[e] = []
                })
            }
            return t
        };
        e.trigger = function (e) {
            var i = n[e],
                o = $slice(arguments);
            if (i) {
                for (var r = 0, a = i.length; r < a; r++) {
                    i[r].apply(t, o)
                }
            }
            var s = {
                done: function (e) {
                    if (typeof e == "function") e.call(t)
                },
                trigger: this.trigger
            };
            return s
        };
        e.scope = function (e) {
            t = e
        };
        return e
    }

    function $chain() {
        "use strict";

        function e(e, t, n) {
            Object.defineProperty(e, n, {
                get: function () {
                    var e = t();
                    return e === undefined ? this : e
                }
            })
        }

        function t(e, t, n) {
            e[n] = function () {
                var e = t.apply(this, arguments);
                return e === undefined ? this : e
            }
        }

        function n(i, o, r) {
            if ($is(o, "Object")) {
                $io.obj.all(o, function (n, o) {
                    if (r === true) e(i, n, o);
                    else t(i, n, o);
                    if (r === "both") {
                        e(i, n, o);
                        t(i, n, o)
                    }
                })
            }
            return $is(r, "Object") ? n(i, r, true) : i
        }
        var i = n.apply(null, arguments);
        i["prop"] = function (e) {
            return n(this, e, true)
        };
        i["meth"] = function (e) {
            return n(this, e)
        };
        return i
    }! function (e, t) {
        if (typeof module != "undefined") module.exports = t();
        else if (typeof define == "function" && typeof define.amd == "object") define(t);
        else this[e] = t()
    }
    ("$key", function () {
        "use strict";
        var e = 0,
            t = {},
            n = {},
            i = {},
            o = {
                shift: false,
                alt: false,
                ctrl: false,
                meta: false
            },
            r = {
                0: "\\",
                8: "backspace",
                9: "tab",
                12: "num",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                19: "pause",
                20: "caps",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                44: "print",
                45: "insert",
                46: "delete",
                91: "cmd",
                92: "cmd",
                93: "cmd",
                106: "num_multiply",
                107: "num_add",
                108: "num_enter",
                109: "num_subtract",
                110: "num_decimal",
                111: "num_divide",
                124: "print",
                144: "num",
                145: "scroll",
                224: "cmd",
                225: "altgr",
                57392: "ctrl",
                63289: "num"
            };
        for (var a = 1; a < 20; ++a) r[111 + a] = "f" + a;
        for (a = 0; a <= 9; ++a) r[a + 96] = "num_" + a;
        for (var s in r) {
            if (r.hasOwnProperty(s)) {
                var l = r[s];
                if (i[l]) i[l].push(s);
                else i[l] = [s]
            }
        }

        function u(e) {
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            if (e.stopPropagation) e.stopPropagation();
            else e.cancelBubble = true;
            e.stopImmediatePropagation()
        }
        var c;

        function f(e) {
            e = e || window.event;
            if (typeof e.which !== "number") e.which = e.keyCode;
            var t, i, o;
            if (e.type == "keydown") {
                i = String.fromCharCode(e.which).toLowerCase();
                if (r[e.which]) {
                    t = r[e.which];
                    c = t === "shift" ? null : t
                }
                if (n["ctrl"] || n["shift"] || n["cmd"] || n["meta"] || n["alt"] || n["altgr"]) {
                    t = t || i
                }
                n[t || i] = true
            }
            if (e.type == "keypress" && !c) {
                t = String.fromCharCode(e.which)
            }
            if (e.type == "keyup") {
                c = null;
                o = String.fromCharCode(e.which).toLowerCase();
                if (r[e.which]) o = r[e.which];
                n[o] = false
            }
            if (t) d(t, e.which, e)
        }

        function d(e, n, i) {
            var o;
            if (o = t[i.target.getAttribute("data-keyboard-id")]) {
                if (o.call(i.target, e, n, i) === false) {
                    u(i)
                }
            } else if (p) {
                if (p(e, n, i) === false) {
                    u(i)
                }
            }
        }
        var p, m = document.documentElement;
        m.addEventListener("keydown", f, false);
        m.addEventListener("keypress", f, false);
        m.addEventListener("keyup", f, false);
        var h = function (i, o) {
            if (typeof i == "string") {
                return n[i]
            }
            if (typeof i == "function") {
                p = i
            }
            if (i && typeof o == "function") {
                t[++e] = o;
                i.setAttribute("data-keyboard-id", e);
                if (!i.getAttribute("tabindex")) i.setAttribute("tabindex", "0");
                i.addEventListener("keydown", f, false);
                i.addEventListener("keypress", f, false);
                i.addEventListener("keyup", f, false)
            }
        };
        h.up = function (e, t) {
            if (e && typeof t == "function") {
                if (!e.getAttribute("tabindex")) e.setAttribute("tabindex", "0");
                e.addEventListener("keyup", function (e) {
                    e = e || window.event;
                    if (typeof e.which !== "number") e.which = e.keyCode;
                    var n = String.fromCharCode(e.which).toLowerCase();
                    if (r[e.which]) {
                        n = r[e.which]
                    }
                    if (t(n, e) === false);
                }, false)
            }
        };
        h.down = function (e, t) {
            if (e && typeof t == "function") {
                if (!e.getAttribute("tabindex")) e.setAttribute("tabindex", "0");
                e.addEventListener("keydown", function (e) {
                    e = e || window.event;
                    if (typeof e.which !== "number") e.which = e.keyCode;
                    var n = String.fromCharCode(e.which).toLowerCase();
                    if (r[e.which]) {
                        n = r[e.which]
                    }
                    if (t(n, e) === false);
                }, false)
            }
        };
        return h
    });
    ! function (e) {
        "use strict";
        var t, n = ["clear", "error", "error", "succes", "fail", "pass", "warn", "info", "bold", "italic", "blue", "green", "white", "yellow", "cyan", "magenta", "html", "autolink", "code", "pad", "right", "center", "repeat", "stack", "save", "stay", "id", "fast", "group", "noop", "obj", "end"],
            i = {
                el: null
            },
            o = {},
            r = "";
        for (var a = 0, s = n.length; a < s; a++) {
            i[n[a]] = "";
            o[n[a]] = function (e) {
                return function () {
                    i[e] = "1"
                }
            }(n[a])
        }

        function l(e) {
            if ($is(e, "String")) return e;
            if ($is(e, "Number")) return '<span class="sh_number">' + e + "</span>";
            if ($is(e, "Undefined")) return "Undefined";
            if ($is(e, "Null")) return "Null";
            if ($is(e, "Function")) return $hilit($io.fn.str(e));
            if ($is(e, "Object") || $is(e, "Array")) return $hilit($io.obj.str(e));
            if ($is(e.constructor, "Function")) return "<span class=sh_init>" + $is(e) + "</span> " + $hilit($io.obj.str(e), true);
            return e
        }

        function u(e, t) {
            for (var n in e) {
                var i = e[n];
                if (n == t) return;
                if (typeof i == "string" || typeof i == "number" || typeof i == "boolean") {
                    $log.pad(n, i + "", ".")
                } else if ($io.is.obj(i)) u(i, t)
            }
        }

        function c(e, n, o) {
            if (i.clear) {
                i.el.innerHTML = "";
                i.clear = "";
                return
            }
            if (i.repeat) e = e.repeat(i.cols), i.repeat = "";
            if (i.code) e = $hilit(e), i.code = "";
            if (i.pass) e = "✔ " + e, r += "ui-log-green", i.pass = "";
            if (i.fail) e = "✘ " + e, r += "ui-log-red", i.fail = "";
            if (i.info) e = "ℹ " + e, r += "ui-log__blue", i.info = "";
            if (i.white) r += "ui-log__white", i.white = "";
            if (i.yellow) r += "ui-log__yellow", i.yellow = "";
            if (i.cyan) r += "ui-log__cyan", i.cyan = "";
            if (i.magenta) r += "ui-log__magenta", i.magenta = "";
            if (i.blue) r += "ui-log__blue", i.blue = "";
            if (i.succes) r += "ui-log-green", i.succes = "";
            if (i.green) r += "ui-log-green", i.green = "";
            if (i.error) r += "ui-log-red", i.error = "";
            if (i.obj) {
                i.obj = "";
                u(e, n);
                return
            }
            if (i.pad) {
                var a;
                if (o) a = o;
                else a = n, n = "";
                var s = i.cols - 3 - (e.length + (n || "").length);
                e = e + a.repeat((3 + (s >= 0 ? s : 0)) / a.length) + n;
                i.pad = ""
            } else if (n) {
                var f = $io.arg.arr(arguments);
                e = f.join(", ")
            }
            if (!i.el) return;
            t = document.createElement("div");
            t.innerHTML = l(e);
            t.className = r;
            i.el.appendChild(t);
            c.trigger("addline");
            r = "";
            return t
        }
        c.config = function (e) {
            $extend(i, e);
            return c
        };
        $watch(c);
        e["$log"] = $chain(c, o, o)
    }(this);
    ! function (e) {
        "use strict";

        function t(e) {
            e.scrollTop = e.scrollHeight
        }

        function n(e) {
            e.style.height = e.scrollHeight + "px"
        }

        function i(e) {
            e.focus();
            var t, n;
            if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
                t = document.createRange(), n = window.getSelection();
                t.selectNodeContents(e);
                t.collapse(false);
                n.removeAllRanges();
                n.addRange(t)
            } else if (typeof document.body.createTextRange != "undefined") {
                t = document.body.createTextRange();
                t.moveToElementText(e);
                t.collapse(false);
                t.select()
            }
        }
        r.history = function () {
            return o
        };
        r.clearhistory = function () {
            o.length = 0
        };
        var o;

        function r(e) {
            var i = {
                    cols: 59,
                    el: document.body,
                    prompt: "$>",
                    history: o
                },
                r = $extend(i, e),
                a = document.createElement("code"),
                s = document.createElement("div"),
                l = document.createElement("div"),
                u = document.createElement("span"),
                c = document.createElement("textarea");
            if (!r.el) return;
            r.prompt += "&nbsp;";
            u.innerHTML = r.prompt;
            c.innerHTML = "";
            c.spellcheck = false;
            c.rows = "1";
            c.style.outline = "0 none";
            c.style.boxShadow = "0 0 transparent";
            c.style.textShadow = "0 0 transparent";
            c.style.border = "0 none";
            c.style.verticalAlign = "top";
            c.style.resize = "none";
            c.style.padding = "0";
            c.style.margin = "0";
            c.style.height = "auto";
            c.style.width = "100%";
            c.style.color = "inherit";
            c.style.font = "inherit";
            c.style.fontSize = "inherit";
            c.style.background = "transparent";
            c.style.overflow = "hidden";
            l.style.display = "table";
            l.style.tableLayout = "fixed";
            c.style.display = "table-cell";
            u.style.display = "table-cell";
            u.style.width = "1%";
            u.style.whiteSpace = "nowrap";
            l.appendChild(u);
            l.appendChild(c);
            a.appendChild(s);
            a.appendChild(l);
            a.style.display = "block";
            a.style.width = "100%";
            a.style.whiteSpace = "pre-wrap";
            a.style.wordBreak = "break-word";
            a.style.wordWrap = "break-word";
            r.el.appendChild(a);
            r.el.style.overflowY = "hidden";
            if (r.rows) r.el.style.height = r.rows + "em";

            function f() {
                $log.config({
                    cols: r.cols,
                    el: s
                })
            }

            function d() {
                if (!$dom.getSelection()) {
                    c.focus();
                    f()
                }
            }
            $log.on("addline", function () {
                t(r.el)
            });
            r.el.addEventListener("mouseup", d, false);
            r.el.addEventListener("contextmenu", d, false);
            c.addEventListener("mouseup", function (e) {
                if (e.stopPropagation) e.stopPropagation();
                else e.cancelBubble = true;
                e.stopImmediatePropagation();
                f()
            }, false);
            c.addEventListener("paste", function (e) {
                setTimeout(function () {
                    p(c)
                }, 0)
            }, false);

            function p(e) {
                n(e);
                t(r.el)
            }
            var m = 0;
            var h = false;
            $key(c, function (e, t, n) {
                p(this);
                var i = r.history.length;
                if (e == "enter") {
                    var o = $io.str.trim(this.value);
                    if (!o) return false;
                    this.value = "";
                    this.style.height = "auto";
                    m = 0;
                    if (y.onenter(o) === false) return;
                    $log(r.prompt + o);
                    if (r.history[i - 1] != o) r.history.push(o);
                    if (!$exe(o)) {
                        try {
                            $log(eval.call(window, o))
                        } catch (n) {
                            $log.error.autolink(n.message + " \n" + n.stack.replace(n.message, ""))
                        }
                    }
                    return false
                }
                if (!this.value) h = false;
                if (!h) {
                    if (e == "up") {
                        m++;
                        if (m > i) m = i;
                        this.value = r.history[i - m] || "";
                        p(this);
                        return false
                    }
                    if (e == "down") {
                        m--;
                        if (m < 0) m = 0;
                        this.value = r.history[i - m] || "";
                        p(this);
                        return false
                    }
                }
            });
            var g = $log.config({
                cols: r.cols,
                el: s
            });
            var y = {
                destroy: function () {
                    console.log("@todo : terminal destroy")
                },
                onenter: $noop,
                prompt: u,
                input: c,
                log: g
            };
            return y
        }
        e["$cli"] = r
    }(this);
    ! function (e) {
        "use strict";
        var t = {};

        function n() {}

        function i(e, t) {
            var n = [],
                i;
            $io.arr.each(e, function (e, o) {
                var r = 1;
                e = e.replace(/\.\.\//g, function () {
                    r++;
                    return ""
                });
                i = t.split("/").slice(0, -r).join("/");
                var a = i + "/" + e + ".js";
                n.push(a)
            });
            return n
        }

        function o(e) {
            setTimeout(function () {
                for (var t = 0, n = e.length; t < n; t++) {
                    var i = e[t];
                    if (i && i.nodeType) {
                        i.onload = i.onreadystatechange = i.onerror = i.onabort = null
                    }
                }
            }, 0)
        }

        function r(e) {}

        function a(e, n, i) {
            s++;
            var o = arguments.length;
            if (o == 1) {
                i = e;
                n = [];
                e = s
            } else if (o == 2) {
                i = n;
                if (typeof e == "string") {
                    n = []
                } else {
                    n = e;
                    e = s
                }
            }
            if (n.length) {
                t[e] = {
                    dep: n,
                    fac: i
                }
            } else {
                t[e] = i
            }
        }
        var s = 0;
        var l = 0;
        var u = 0;
        var c = {
            yo: "yo"
        };
        var f = {},
            d = {},
            p = [];
        var m, h;
        ! function () {
            var e = document.getElementsByTagName("script")[0];
            if (e) {
                m = e.parentNode;
                h = e
            } else {
                m = document.head || document.getElementsByTagName("head")[0];
                h = m.getElementsByTagName("base")[0] || null
            }
            var t = document.createComment("/// loaded with $loader ///");
            m.insertBefore(t, h)
        }();

        function g(e) {
            m.insertBefore(e, h)
        }
        window.$log = window.$log || n;
        var y;

        function v(e, n, r) {
            if ($is(e, "Object")) {
                var a = r;
                r = e;
                e = n;
                n = a
            }
            r = $extend({
                amd: true
            }, r);
            if (r.amd === false) {
                y = window["define"];
                window["define"] = null
            } else if (y) {
                window["define"] = y;
                y = null
            }
            var s = 0,
                m = e.length,
                h = [];

            function w(e, r, a) {
                if (e.couldBeAMD) {
                    var u = t[l + 1];
                    if (u) {
                        l++;
                        if (u.dep) {
                            (function (e, t) {
                                u.dep = i(u.dep, t.url);
                                v(u.dep, function () {
                                    f[t.url] = t.uid;
                                    p[t.uid] = h[t.i] = typeof u.fac == "function" ? u.fac.apply(null, arguments) : u.fac;
                                    t.couldBeAMD = false;
                                    w(t)
                                })
                            })(l, e);
                            return
                        } else {
                            f[e.url] = e.uid;
                            p[e.uid] = h[e.i] = typeof t[l] == "function" ? t[l].apply(null, ["require", "exports", "module"]) : t[l]
                        }
                    } else {
                        f[e.url] = e.uid;
                        p[e.uid] = h[e.i]
                    }
                } else {
                    f[e.url] = e.uid;
                    p[e.uid] = h[e.i]
                }
                if (r) {
                    $log.fail.pad(e.url, r, ".")
                } else {
                    $log.pass.pad(e.url, " ")
                }
                if (d[e.url].length) {
                    $io.arr.each(d[e.url], function (t, n) {
                        t && t.apply(c, [p[e.uid]])
                    });
                    d[e.url].length = 0
                }
                if (++s >= m) {}
            }
            $io.arr.each(e, function (t, i) {
                u++;
                if (!t) {
                    console.error("loader: One asset was undefined", e);
                    return
                }
                var o = false;
                if (t.indexOf("nocache!") > -1) {
                    o = true;
                    t = t.replace("nocache!", "")
                }
                var a = (r.baseUrl || "") + t,
                    s = $url.getExtention(a),
                    l, c = {
                        url: a,
                        type: s,
                        i: i,
                        uid: u
                    };

                function m(e, t) {
                    w(c, e, t)
                }
                if (d[a] && !f[a]) {
                    d[a].push(n);
                    return
                } else {
                    d[a] = []
                }
                if (!o && f[a]) {
                    c.uid = f[a];
                    h[i] = p[c.uid];
                    m();
                    return
                }
                if (/txt|html|php|json|xml/.test(s)) {
                    $ajax.get(a).done(function (e) {
                        h[c.i] = e;
                        m()
                    }).fail(function (e) {
                        m("ajax error: " + e.status + " " + e.statusText, arguments)
                    })
                } else if (/jpg|jpeg|gif|png|svg/.test(s)) {
                    h[i] = l = new Image;
                    l.id = "dynamicDeps_" + u;
                    l.className = "js_dynamic-deps";
                    l.onload = function () {
                        m()
                    };
                    l.onerror = function () {
                        m("image not loaded correctly", arguments)
                    };
                    l.onabort = function () {
                        m("image not loaded correctly (abort)", arguments)
                    };
                    l.src = a
                } else if (s === "css") {
                    h[i] = l = document.createElement("link");
                    l.id = "dynamicDeps_" + u;
                    l.className = "js_dynamic-deps";
                    l.charset = "utf-8";
                    l.rel = "stylesheet";
                    l.href = a;
                    g(l);
                    m()
                } else if (s === "js" || s === "" && r.amd) {
                    c.couldBeAMD = true;
                    h[i] = l = document.createElement("script");
                    l.id = "dynamicDeps_" + u;
                    l.className = "js_dynamic-deps";
                    l.type = "text/javascript";
                    l.charset = "utf-8";
                    l.async = r.amd;
                    l.defer = true;
                    l.onload = l.onreadystatechange = function (e, t) {
                        if (!l.readyState || /loaded|complete/.test(l.readyState)) {
                            if (t) {
                                m("script not loaded correctly (abort)", arguments)
                            } else {
                                m()
                            }
                        }
                    };
                    l.onerror = function () {
                        m("script not loaded correctly", arguments)
                        location.reload();
                    };
                    g(l);
                    l.src = a
                } else if (/mp3|opus|ogg|wav|aac|m4a|mp4|weba/.test(s)) {
                    h[i] = l = $sound({
                        urls: [a],
                        buffer: false,
                        onload: function () {
                            m()
                        },
                        onloaderror: function () {
                            m("sound not loaded correctly", arguments)
                        }
                    })
                } else {
                    m("unknown dependencies format")
                }
            })
        }
        r["factories"] = t;
        a["amd"] = {
            plugins: false,
            jQuery: false,
            $loader: {
                version: "0.3.0",
                config: function (e) {}
            }
        };
        e["define"] = a;
        e["require"] = r;
        e["$loader"] = v
    }(this);
    ! function (e) {
        "use strict";
        var n = {
            load: function (e, t) {
                $loader(e, function () {
                    t.apply(n, arguments)
                })
            },
            _states: {
                opened: {}
            },
            _data: {
                _tree: {}
            }
        };

        function t(e, i) {
            if ($io.is.obj(e) || !e) {
                $extend(n, e);
                t.scope(n)
            }
            if (typeof e == "string" && i && typeof i == "function") t.on(e, i);
            else if (typeof e == "string" && !i) {
                t.trigger(e);
                return n[e]
            } else if (typeof e == "function") t.on("ready", e);
            else if (e instanceof Array && typeof i == "function") {
                t.on("ready", function () {
                    n.load(e, i)
                })
            }
        }
        e["system42"] = $watch(t)
    }(window);
    system42(function () {
        var e = this,
            n = e._apps;

        function t(n) {
            var t = $url.getDomain(n.url);
            if (t && location.hostname != t) {
                $url.checkFavicon(n.url, function (e, t) {
                    if (e) n.icon = t;
                    else if (img) n.icon = img.src;
                    $window(n)
                })
            } else {
                if (n.url.slice(-1) === "/") {
                    $explorer(n.url)
                } else {
                    var i = $url.getExtention(n.url);
                    var o = a.getDefaultApp(i);
                    if (o) o.call(e, n);
                    else if (i || n.url.indexOf("c/") > -1) $window(n)
                }
            }
        }
        var i, o, r = -1;

        function l(e) {
            --r;
            if (r == 0 && o.length) {
                $route(i.replace(/ \| /g, "&"));
                o.length = 0
            } else {
                $route(i)
            }
        }

        var c = {};
    });
    system42(function () {
        "use strict";
        var e = this;

        function n(n) {
            var t;
            n = n || {
                onopen: $noop
            };
            $window({
                title: "Terminal",
                icon: e._apps.terminal.icon,
                bodyClass: "ui_terminal",
                onopen: function (i, o) {
                    t = $cli({
                        cols: 60,
                        prompt: ">",
                        el: o
                    });
                    e._states.opened["terminal"] = {
                        loaded: true,
                        body: o,
                        cli: t
                    };
                    t.input.focus();
                    n.onopen()
                },
                onclose: function () {
                    e._states.opened["terminal"] = null;
                    t.destroy()
                }
            })
        }
        window.$terminal = n
    });
    system42(function () {
        "use strict";
        var e = this,
            n = document.getElementById("templ_computer").innerHTML;
        $el(this._desktop).on("dblclick touchend", ".ui_explorer--nobrowse .ui_icon", function () {
            $exe(this)
        });

        function t(t, i) {
            if (typeof t == "object") {
                i = t;
                t = "/"
            }
            var o = {
                    list: false,
                    browse: false,
                    nav: false,
                    onopen: $noop,
                    onclose: $noop
                },
                r = $extend(o, i),
                l = 0,
                a;
            if (r.browse) r.nav = true;
            if (!t) t = "/";
            if (t.slice(-1) !== "/") t += "/";

            function s(t) {
                if (t.slice(-1) !== "/") t += "/";
                if (!r.browse) {
                    $route("dora " + t + (r.list ? " --list" : "") + (r.nav ? " --nav" : ""))
                }
                if (t === "/") {
                    return n
                } else {
                    var i = [],
                        o = [],
                        l = $io.obj.getPath(e._files, t || "c", "/");
                    for (var a in l) {
                        if (l.hasOwnProperty(a)) {
                            if (typeof l[a] == "string") {
                                o.push(l[a])
                            } else if ($io.is.obj(l[a]) || $io.is.arr(l[a])) {
                                i.push(a)
                            }
                        }
                    }
                    var s = "";
                    $io.arr.all(i.sort(), function (e, n) {
                        s += '<div tabindex="0" class="ui_icon icon-folder" ' + 'data-url="' + t + e + '/" ' + '><img src="c/sys/ico32/folder.png">' + "<span>" + e + "</span></div>"
                    });
                    $io.arr.all(o.sort(), function (n, i) {
                        var o = e.getFileInfo(n);
                        s += '<div tabindex="0" class="ui_icon icon-file" ' + 'data-url="' + t + n + '" ' + '><img src="c/sys/ico32/' + o.icon + '">' + "<span>" + n + "</span></div>"
                    });
                    return s
                }
            }

            function c(e) {
                var n = [];
                for (var t in e) {
                    if (e.hasOwnProperty(t)) {
                        if ($io.is.arr(e[t])) {
                            n.push({
                                name: t
                            })
                        } else if ($io.is.obj(e[t])) {
                            n.push({
                                name: t,
                                items: function (e) {
                                    return c(e)
                                }(e[t])
                            })
                        }
                    }
                }
                return n.sort()
            }

            function u() {
                b.value = $el(this).data("url")
            }

            function f() {
                b.value = $el(this).data("url");
                a.close(true)
            }

            function d() {
                var e = $el(this).data("url");
                p(e)
            }

            function p(e) {
                y.value = e;
                k.innerHTML = s(e)
            }

            function m() {
                var e = y.value;
                var n = e.slice(0, -1).split("/");
                n.pop();
                e = n.join("/");
                p(e || "/")
            }

            function v() {
                var e = y.value;
                p(e)
            }

            function h(e) {
                e = e || window.event;
                if (typeof e.which !== "number") e.which = e.keyCode;
                if (e.which == 13) {
                    v()
                }
            }
            var _ = {};
            _.bodyClass = "skin_inset_deep skin_light ui_explorer";
            _.icon = "/c/sys/ico32/computer.png";
            if (r.browse) {
                _.title = "explorer";
                _.bodyClass += " ui_explorer--browse";
                _.btnOk = "Open";
                _.btnCancel = "Cancel";
                var b = document.createElement("input");
                b.type = "text";
                b.className = "ui_explorer__selected_file";
                b.value = t;
                _.footer = b
            } else {
                _.title = t;
                _.bodyClass += " ui_explorer--nobrowse"
            }
            if (r.nav) {
                var $ = document.createElement("div"),
                    y = document.createElement("input"),
                    g = document.createElement("button"),
                    w = document.createElement("button"),
                    x = document.createElement("button");
                $.className = "ui_explorer__nav";
                g.innerHTML = "<";
                g.className = "ui_explorer__nav__prev";
                w.innerHTML = ">";
                w.className = "ui_explorer__nav__next";
                x.innerHTML = "Go";
                x.className = "ui_explorer__nav__go";
                y.type = "text";
                y.value = t;
                y.className = "ui_explorer__nav__input";
                $.appendChild(g);
                $.appendChild(y);
                $.appendChild(x);
                _.afterMenu = $;
                g.addEventListener("click", m, false);
                x.addEventListener("click", v, false);
                y.addEventListener("keypress", h, false)
            }
            _.onopen = function () {
                if (r.browse) $el(this.el.base).on("click", ".icon-file", u);
                if (r.browse) $el(this.el.base).on("dblclick touchend", ".icon-file", f);
                if (r.nav) $el(this.el.base).on("dblclick touchend", ".icon-folder", d);
                r.onopen.call(this)
            };
            _.onclose = function (e) {
                if (r.browse) $el(this.el.base).off("click", ".icon-file", u);
                if (r.browse) $el(this.el.base).off("dblclick touchend", ".icon-file", f);
                if (r.nav) $el(this.el.base).off("dblclick touchend", ".icon-folder", d);
                if (r.nav) g.removeEventListener("click", m, false);
                if (r.nav) x.removeEventListener("click", v, false);
                if (y) y.removeEventListener("keypress", h, false);
                if (r.browse) r.onclose.call(this, e, b.value);
                else r.onclose.call(this)
            };
            var k = document.createElement("div");
            if (r.list) {
                _.bodyClass += " ui_explorer--panes ui_explorer--list";
                var C = document.createDocumentFragment(),
                    T = document.createElement("div");
                T.className = "ui_explorer--panes__tree";
                k.className = "ui_explorer--panes__folder";
                $menu(T, c(e._files.c), {
                    mode: "tree"
                });
                $resize(T, "e");
                k.innerHTML = s(t);
                C.appendChild(T);
                C.appendChild(k);
                _.html = C
            } else {
                _.bodyClass += " ui_explorer--folder";
                k.innerHTML = s(t);
                _.html = k
            }
            a = $window(_)
        }
        window.$explorer = t
    });
    var $nfo = {};
    (function () {
        // detect javascript version
        $nfo.version = '1.0';
        var i, l, s, v, first = document.getElementsByTagName('script')[0],
            head = first.parentNode,
            scripts = [];
        for (i = 10, l = 20; i <= l; i++) {
            s = document.createElement("script");
            v = parseFloat((i / 10).toFixed(1));
            s.setAttribute('language',
                'javascript' + v);
            s.innerHTML;
            head.insertBefore(s, first);
            scripts.push(s);
        }
        for (i = 0, l = scripts.length; i < l; i++) head.removeChild(scripts[i]);

        // detect browser
        $nfo.os = "Unknown OS";
        $nfo.browser = "Unknown Browser";
        if (navigator.appVersion.indexOf("Win") != -1) $nfo.os = "Windows";
        else if (navigator.appVersion.indexOf("Mac") != -1) $nfo.os = "MacOS";
        else if (navigator.appVersion.indexOf("X11") != -1) $nfo.os = "UNIX";
        else if (navigator.appVersion.indexOf("Linux") != -1) $nfo.os = "Linux";
        else if (navigator.appVersion.indexOf("iPhone") != -1) $nfo.os = "iPhone";
        else if (navigator.appVersion.indexOf("iPod") != -1) $nfo.os = "iPod";
        else if (navigator.appVersion.indexOf("iPad") != -1) $nfo.os = "iPad";
        else if (navigator.appVersion.indexOf("Android") != -1) $nfo.os = "Android";

        if (navigator.userAgent.indexOf("MSIE") != -1) $nfo.browser = "msie";
        else if (navigator.userAgent.indexOf("Firefox") != -1) {
            $nfo.browser = "firefox";
            document.documentElement.classList.add('firefox');
        } else if (navigator.userAgent.indexOf("Chrome") != -1) $nfo.browser = "Chrome";
        else if (navigator.userAgent.indexOf("Safari") != -1) $nfo.browser = "Safari";
        else if (navigator.userAgent.indexOf("Opera") != -1) $nfo.browser = "Opera";
    }());

    function logInfo(cb) {
        'use strict';
        $log('Reinstalling MagnusWare...');
        $log.repeat('=');
        $log(C.length + " cookie(s) removed from " + location.host);
        $log((new Date).toString());

        setTimeout(function () {
            $log.repeat('=');
            $log.obj(window.location);
            setTimeout(function () {
                $log.repeat('=');
                $log.obj(window.navigator);
                //console.log(window.navigator);
                $log.repeat('=');
                setTimeout(function () {
                    $nfo.plugins = [];
                    navigator.plugins.refresh(false);
                    var numPlugins = navigator.plugins.length;
                    for (var i = 0; i < numPlugins; i++) {
                        var plugin = navigator.plugins[i];
                        if (plugin) {
                            $nfo.plugins.push(plugin.name)
                            $log.pad('plugin', plugin.name,
                                '.');
                        }
                    }
                    $log.repeat('=');
                    cb && cb();
                }, 150);
            }, 150);
        }, 150);
    }
    system42({});
    system42.on('boot', function (api) {
        var scope = this;
        var bootInfo = document.getElementById('logInfo');
        if (!scope.debug) {
            var bootIframe = document.createElement('iframe');
            bootInfo.appendChild(bootIframe);
            bootIframe.className = "fullscreen";
            bootIframe.style.position = 'fixed';
            bootIframe.style.visibility = 'hidden';
            $cli({
                cols: 60,
                prompt: '>',
                el: bootInfo
            });
            logInfo(function () {
                setTimeout(function () {
                    // handle refresh
                    trash();
                    localStorage.removeItem("Update");
                    localStorage.setItem("Update", "3");
                    beforeUnloadHandler();
                }, 5000);
            });

        } else {
            scope._everything.removeChild(bootInfo);
        }
        bootSound = null, booted = null;
        this.load("./A/System64/JS/" + scriptUrls[0]);
    });
    system42.trigger('boot');
}
//# sourceURL=MagnusWare