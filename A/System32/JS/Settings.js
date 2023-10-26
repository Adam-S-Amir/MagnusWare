let canvas = document.getElementById('c');

function Settingz() {
  let Settingz = [
    `
        <div id='sidebar'>
            <p>Welcome to System Settings!</p>
        </div>
        <div class='sys-buttons'>
            <button id='US' onclick='Settingz()'>Main<br>Menu</button>
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
      <hr id='hrshrt'>
      <button id='bg0' onclick='bg0()'>Bliss</button>
      <button id='bg1' onclick='bg1()'>Candy</button>
      <button id='bg2' onclick='bg2()'>Clouds</button>
      <button id='bg18' onclick='bg18()'>Default</button>
      <button id='bg4' onclick='bg4()'>Glacier</button>
      <button id='bg5' onclick='bg5()'>Grass</button>
      <button id='bg6' onclick='bg6()'>Home</button>
      <button id='bg7' onclick='bg7()'>Intel</button>
      <button id='bg3' onclick='bg3()'>Interstellar</button>
      <button id='bg8' onclick='bg8()'>Nebula</button>
      <button id='bg16' onclick='bg20()'>MagnusWare Orb</button>
      <button id='bg17' onclick='bg17()'>Moonroof</button>
      <button id='bg9' onclick='bg9()'>Outrun</button>
      <button id='bg10' onclick='bg10()'>Verticle</button>
      <button id='bg19' onclick='bg19()'>Vortex</button>
      <button id='bg11' onclick='bg11()'>Waves</button>
      <button id='bg12' onclick='bg12()'>Windows 1.0</button>
      <button id='bg13' onclick='bg13()'>Windows 10</button>
      <button id='bg14' onclick='bg14()'>Windows 95</button>
      <button id='bg15' onclick='bg15()'>Windows 95 Candy Edition</button>
      <button id='bg16' onclick='bg16()'>Windows 98</button>
  </div>
  <div id='livbg'>
      <hr id='hrshrt2'>
      <h3 id='liv'>Live Backgrounds</h3>
      <hr id='hrshrt'>
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
      <hr id='hrshrt'>
      <button id='ash' onclick='Ash()'>Ash</button>
      <button id='Baseball' onclick='Baseball()'>Baseball</button>
      <button id='blue' onclick='Blue()'>Blue</button>
      <button id='brick' onclick='Brick()'>Bricks</button>
      <button id='Cherry' onclick='Cherry()'>Cherry</button>
      <button id='dangerous' onclick='Dangerous()'>Dangerous Creatures</button>
      <button id='default' onclick='MagnusWare()'>Default</button>
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
  </div>
  <div id='Scrsvrz'>
      <hr id='hrshrt2'>
      <h3 id='scz'>ScreenSavers</h3>
      <hr id='hrshrt'>
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
      <hr id='hrshrt'>
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
      <hr id='hrshrt'>
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
                        <li>On program Launch a Sound</li>
                        will play
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
                <li>Consolidated Cloud Storage</li>
                    <ol>
                        <li>Move Some Apps/Games to GitHub Pages</li>
                    </ol>
                </li>
            </ul>
        <hr id='hrshrt2'>
              <h3>MagnusWare 2.2<br>(Tabby/Zenith)</h3>
            <ul>
              <li><span>Calender widget</span></li>
              <li><span>Version watermark animation</span></li>
              <li><span>MagnusWare Orb glow animation</span></li>
              <li><span>    Revert MagnusWare Orb Icon to MagnusSoft 1.4 with newer color changes</span></li>
              <li><span>Taskbar resize</span></li>
              <li><span>Start Menu padding</span></li>
              <li><span>Battery Level actually appears in HTML title attribute via JS</span></li>
              <li><span>Update dialog</span></li>
              <li><span>Always display icon title</span></li>
              <li><span>Start Menu error fixing</span></li>
              <li><span>Taskbar time has dynamically updated fonts on theme change</span></li>
              <li><span>MineCrap 1.3 coming soon on hover menu</span></li>
              <li><span>Matrix</span></li>
              <li><span>Version list restructure</span></li>
              <li><span>    Re-define versions/service packs</span></li>
              <li><span>Compress scripts list</span></li>
              <li><span>Fix cache/update issues</span></li>
              <li><span>    Factory reset is more efficient</span></li>
              <li><span>Remove unnecessary cookies/localStorage properties</span></li>
            </ul>
        <hr id='hrshrt2'>
            <h3>MagnusWare 2.1<br>(Ragamuffin/Interstellar)</h3>
            <ul>
              <li><span>Cursor effects</span></li>
              <li><span>VLC Media Player!!</span></li>
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
        <hr id='hrshrt'>
        <p>Username: <span id='username'></span></p>
        <p>User ID: <span id='uid'></span></p>
    </div>
    <div class="clippy-friends">
        <hr id='hrshrt2'>
        <h3>Clippy & Friends</h3>
        <hr id='hrshrt'>
        <button onclick="toggleclippy()">Toggly Clippy</button>
        <p>Requires Restart!</p>
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
        <hr id='hrshrt'>
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
        <hr id='hrshrt'>
        <button id='curoff' onclick='Curoff()'>Off</button>
        <button id='curon' onclick='Curon()'>On</button>
        <p id='cur-rs'>Requires Restart!</p>
        <hr id='hrshrt2'>
    </div>  
</div>
  `]
  document.getElementById("right").innerHTML = tweaks;
  document.getElementById("username").innerHTML = uname;
  document.getElementById("uid").innerHTML = uid;
}

function hideinfo() {
  document.getElementById("version-info").style.display = "none";
  localStorage.removeItem("hif");
  localStorage.setItem("hif", "hideinfo()");
}

function bg0() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/Bliss.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg0()");
}

function bg1() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/Candy.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg1()");
}

function bg2() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/clouds.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg2()");
}

function bg3() {
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
      #f857a6
  );  
  `
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg3()");
}

function bg4() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/glacier.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg4()");
}

function bg5() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/grass.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg5()");
}

function bg6() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/home.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg6()");
}

function bg7() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/intel.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg7()");
}

function bg8() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/nebula.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg8()");
}

function bg9() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/outrun.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg9()");
}

function bg10() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/verticle.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg10()");
}

function bg11() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/Waves.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg11()");
}

function bg12() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/1.0.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg12()");
}

function bg13() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/10.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg13()");
}

function bg14() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/95.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg14()");
}

function bg15() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/95C.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg15()");
}

function bg16() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/9.8.png);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg16()");
}

function bg17() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/Moonroof.png);";
  // background-image: linear-gradient(red, yellow);
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg17()");
}

function bg18() {
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
  localStorage.setItem("bgz", "bg19()");
}

function bg19() {
  document.getElementById("Image").style =
    "background: repeating-linear-gradient(190deg,#1a2980 40px,#d53369 80px,#43ceaf  120px,#00c6ff 160px,rgba(0, 0, 255, 0.5) 200px,rgba(75, 0, 130, 0.5) 240px,rgba(238, 130, 238, 0.5) 280px,#021b79 300px), repeating-linear-gradient(-190deg,#0072ff 30px,#f857a6 60px,#061161 90px,#43ceaf 120px,rgba(0, 0, 255, 0.5) 150px,rgba(75, 0, 130, 0.5) 180px,#fc354c 210px,#d53369 230px), repeating-linear-gradient(23deg, red 50px, #780206 100px, #c21500 150px, #061161 200px, blue 250px, indigo 300px, #1fa2ff 350px, red 370px);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg19()");
}

function bg20() {
  document.getElementById("Image").style =
    "background: -webkit-radial-gradient(50% 90%, circle closest-corner, #07d9f9, #03456f 100%, #fff 300%);"
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "bg20()");
}

function lv0() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/Abstract.gif);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "lv0()");
}

function lv1() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/Beach.gif);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "lv1()");
}

function lv2() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/Clouds.gif);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "lv2()");
}

function lv3() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/Fast-Paint.gif);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "lv3()");
}

function lv4() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/Glitch.gif);";
  canvas.remove();
  localStorage.removeItem("bgz");
  // @import compass @function multiple-box-shadow ($n) $value: '#{random(2000)}px #{random(20000)}px #FFF' @for $i from 2 through $n $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF' @return unquote($value) $shadows-small:  multiple-box-shadow(700) $shadows-medium: multiple-box-shadow(200) $shadows-big:    multiple-box-shadow(100) html height: 100% background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%) overflow: hidden #stars width: 1px height: 1px background: transparent box-shadow: $shadows-small animation			: animStar 50s linear infinite &:after content: " " position: absolute top: 2000px width: 1px height: 1px background: transparent box-shadow: $shadows-small #stars2 width: 2px height: 2px background: transparent box-shadow: $shadows-medium animation			: animStar 100s linear infinite &:after content: " " position: absolute top: 2000px width: 2px height: 2px background: transparent box-shadow: $shadows-medium #stars3 width: 3px height: 3px background: transparent box-shadow: $shadows-big animation			: animStar 150s linear infinite &:after content: " " position: absolute top: 2000px width: 3px height: 3px background: transparent box-shadow: $shadows-big @keyframes animStar from transform: translateY(0px) to transform: translateY(-2000px)
  localStorage.setItem("bgz", "lv4()");
}

function lv5() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/High.gif);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "lv5()");
}

function lv6() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/River.gif);";
  canvas.remove();
  localStorage.removeItem("bgz");
  localStorage.setItem("bgz", "lv6()");
}

function lv7() {
  document.getElementById("Image").style =
    "background-image: url(./Assets/Images/common/Space-Paint.gif);";

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
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Ash()");
}

function Baseball() {
  document.getElementById("Style").className = "baseball";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Baseball()");
}

function Blue() {
  document.getElementById("Style").className = "blue";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Blue()");
}

function Brick() {
  document.getElementById("Style").className = "brick";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Brick()");
}

function Dangerous() {
  document.getElementById("Style").className = "dangerous-creatures";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Dangerous()");
}

function Moonroof() {
  document.getElementById("Style").className = "moonroof";
  document.getElementById("CSS").href = "./assets/css/custom-tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Moonroof()");
}

function Desert() {
  document.getElementById("Style").className = "desert";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Desert()");
}

function Eggplant() {
  document.getElementById("Style").className = "eggplant";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Eggplant()");
}

function FX() {
  document.getElementById("Style").className = "fx";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "FX()");
}

function Gen1() {
  document.getElementById("Style").className = "gen-test1";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Gen1()");
}

function Gen2() {
  document.getElementById("Style").className = "gen-test2";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Gen2()");
}

function Gen3() {
  document.getElementById("Style").className = "gen-test3";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Gen3()");
}

function Honey() {
  document.getElementById("Style").className = "honey";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Honey()");
}

function Inside() {
  document.getElementById("Style").className = "inside-ur-computer";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Inside()");
}

function Jungle() {
  document.getElementById("Style").className = "jungle";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Jungle()");
}

function Vinci() {
  document.getElementById("Style").className = "da-vinci";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Vinci()");
}

function Lilac() {
  document.getElementById("Style").className = "lilac";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Lilac()");
}

function Maple() {
  document.getElementById("Style").className = "maple";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Maple()");
}

function Marine() {
  document.getElementById("Style").className = "marine";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Marine()");
}

function More() {
  document.getElementById("Style").className = "more-windows";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "More()");
}

function Mystery() {
  document.getElementById("Style").className = "mystery";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Mystery()");
}

function Nature() {
  document.getElementById("Style").className = "nature";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Nature()");
}

function Peggy() {
  document.getElementById("Style").className = "peggy";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Peggy()");
}

function Plum() {
  document.getElementById("Style").className = "plum";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Plum()");
}

function Powershell() {
  document.getElementById("Style").className = "powershell";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Powershell()");
}

function Precision() {
  document.getElementById("Style").className = "precision";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Precision()");
}

function Pumpkin() {
  document.getElementById("Style").className = "pumpkin";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Pumpkin()");
}

function Rainyday() {
  document.getElementById("Style").className = "rainyday";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Rainyday()");
}

function Redwine() {
  document.getElementById("Style").className = "red-wine";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Redwine()");
}

function RWB() {
  document.getElementById("Style").className = "red-white-blue";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "RWB()");
}

function Rose() {
  document.getElementById("Style").className = "rose";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Rose()");
}

function Science() {
  document.getElementById("Style").className = "science";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Science()");
}

function Slate() {
  document.getElementById("Style").className = "slate";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Slate()");
}

function Solar() {
  document.getElementById("Style").className = "solarized";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Solar()");
}

function Space() {
  document.getElementById("Style").className = "space";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Space()");
}

function Sports() {
  document.getElementById("Style").className = "sports";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Sports()");
}

function Spruce() {
  document.getElementById("Style").className = "spruce";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Spruce()");
}

function Storm() {
  document.getElementById("Style").className = "storm";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Storm()");
}

function Steal() {
  document.getElementById("Style").className = "teal-shelby";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Steal()");
}

function Teal() {
  document.getElementById("Style").className = "teal";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Teal()");
}

function T6() {
  document.getElementById("Style").className = "the-60s";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "T6()");
}

function Golden() {
  document.getElementById("Style").className = "the-golden-era";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Golden()");
}

function Travel() {
  document.getElementById("Style").className = "travel";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Travel()");
}

function Underwater() {
  document.getElementById("Style").className = "underwater";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Underwater()");
}

function Vista() {
  document.getElementById("Style").className = "vista-dark";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Vista()");
}

function Wheat() {
  document.getElementById("Style").className = "wheat";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Wheat()");
}

function W1() {
  document.getElementById("Style").className = "windows-1";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "W1()");
}

function W98() {
  document.getElementById("Style").className = "w98";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "W98()");
}

function Wdefault() {
  document.getElementById("Style").className = "wdefault";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Wdefault()");
}

function Whybrid() {
  document.getElementById("Style").className = "whybrid";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Whybrid()");
}

function WXP() {
  document.getElementById("Style").className = "wxp";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "WXP()");
}

function W93() {
  document.getElementById("Style").className = "w93";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "W93()");
}

function Toner() {
  document.getElementById("Style").className = "Toner";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Toner()");
}

function Cherry() {
  document.getElementById("Style").className = "Cherry";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Cherry()");
}

function precisiongreen() {
  document.getElementById("Style").className = "precision-green";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "precisiongreen()");
}

function powershell() {
  document.getElementById("Style").className = "Powershell";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "powershell()");
}

function storm() {
  document.getElementById("Style").className = "Storm";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "storm()");
}

function raspberry() {
  document.getElementById("Style").className = "Raspberry";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "raspberry()");
}

function seawater() {
  document.getElementById("Style").className = "Seawater";
  document.getElementById("CSS").href = "./assets/css/tray.css";
  localStorage.removeItem("tmz");
  localStorage.setItem("tmz", "Seawater()");
}

function MagnusWare() {
  document.getElementById("Style").className = "MagnusWare";
  document.getElementById("CSS").href = "./assets/css/tray.css";
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
  location.reload();
}

function Curon() {
  cursor();
  localStorage.removeItem("cur");
  localStorage.setItem("cur", "cursor()");
  location.reload();
}

function toggleclippy() {
  let clippy = localStorage.getItem("clippy");
  if (clippy === null) {
    CClippy();
  } else if (clippy !== null) {
    localStorage.removeItem("clippy");
    localStorage.setItem("Tclippy", '1');
    location.reload();
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
      <img class="About-Icon" src="./A/System32/Images/Common/Start.png">
      <h1 class="about-heading">MagnusWare</h1>
  </div>
  <div class="about-body">
      <p>
          MagnusWare v${MagnusWare_V}
          <br>
          <div id="build-id"></div>
          (Egyptian Mau)[Xenon]
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
  document.getElementById('build-id').innerHTML = `(${BN})`;
}