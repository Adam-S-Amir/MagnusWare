var menuIdentifier = "";
// -- Deluxe Tuner Style Names
var itemStylesNames = [];
var menuStylesNames = [];
// -- End of Deluxe Tuner Style Names

//--- Common
var isHorizontal = 0;
var smColumns = 1;
var smOrientation = 0;
var dmRTL = 0;
var pressedItem = -2;
var itemCursor = "default";
var itemTarget = "_self";
var statusString = "";
var blankImage = "";
var pathPrefix_img = "";
var pathPrefix_link = "";

//--- Dimensions
var menuWidth = "fit-content";
var menuHeight = "-webkit-fill-available";
var smWidth = "fit-content";
var smHeight = "-webkit-fill-available";

//--- Positioning
var absolutePos = 0;
var posX = "10px";
var posY = 0;
var topDX = 1;
var topDY = 0;
var DX = 0;
var DY = 0;
var subMenuAlign = "left";
var subMenuVAlign = "top";

//--- Font
var fontStyle = [""];
var fontColor = ["#000000", "#ffffff"];
var fontDecoration = ["none", "none"];
var fontColorDisabled = "#AAAAAA";

//--- Appearance
var menuBackColor = "var(--ButtonFace)";
var menuBackImage = "";
var menuBackRepeat = "repeat";
var menuBorderColor = "var(--ButtonHilight) var(--ButtonShadow) var(--ButtonShadow) var(--ButtonHilight)";
var menuBorderWidth = null;
var menuBorderStyle = "solid";

//--- Item Appearance
var itemBackColor = ["", "#000080"];
var itemBackImage = ["", ""];
var beforeItemImage = ["", ""];
var afterItemImage = ["", ""];
var beforeItemImageW = "";
var afterItemImageW = "";
var beforeItemImageH = "";
var afterItemImageH = "";
var itemBorderWidth = null;
var itemBorderColor = "";
var itemBorderStyle = "solid";
var itemSpacing = "0px";
var itemPadding = "3px";
var itemAlignTop = "left";
var itemAlign = "left";
// var itemPadding = "4px";
// var itemBorderWidth = 1;

//--- Icons/size
var iconTopWidth = 24;
var iconTopHeight = 24;
var iconWidth = 32;
var iconHeight = 32;
var arrowWidth = 7;
var arrowHeight = 7;
var arrowImageMain = ["./C/System32/Images/Common/black.gif", "./C/System32/Images/Common/white.gif"];
var arrowWidthSub = 0;
var arrowHeightSub = 0;
var arrowImageSub = ["./C/System32/Images/Common/black.gif", "./C/System32/Images/Common/white.gif"];


//--- Separators
var separatorImage = "";
var separatorWidth = "100%";
var separatorHeight = "4px";
var separatorColor = "black";
var separatorAlignment = "right";
var separatorVImage = "";
var separatorVWidth = "5px";
var separatorVHeight = "100%";
var separatorPadding = "0px";

// var separatorHeight = "1px";
// var separatorPadding = "10px";

//--- Floatable Menu
var floatable = 1;
var floatIterations = 5;
var floatableX = 1;
var floatableY = 1;
var floatableDX = 15;
var floatableDY = 15;

//--- Movable Menu
var movable = 0;
var moveWidth = 0;
var moveHeight = 0;
var moveColor = "#AAFFFF";
var moveImage = "";
var moveCursor = "move";
var smMovable = 0;
var closeBtnW = 11;
var closeBtnH = 11;
var closeBtn = "";

//--- Transitional Effects & Filters
var transparency = "100";
var transition = 0;
var transOptions = "";
var transDuration = 0;
var transDuration2 = 200;
var shadowLen = 0;
var shadowColor = "";
var shadowTop = 1;

//--- CSS Support (CSS-based Menu)
var cssStyle = "display:inline-table;font-size:22px;";
var cssSubmenu = "";
var cssItem = ["", ""];
var cssItemText = ["", ""];
// var cssStyle=1;
// var cssSubmenu="dmSubmenu";
// var cssItem=["dmItem1","dmItem2"];
// var cssItemText=["dmText1","dmText2"];

//--- Advanced
var dmObjectsCheck = 0;
var saveNavigationPath = 1;
var showByClick = 0;
var noWrap = 1;
var smShowPause = 100;
var smHidePause = 500;
var smSmartScroll = 1;
var topSmartScroll = 0;
var smHideOnClick = 1;
var dm_writeAll = 0;
var useIFRAME = 0;
var dmSearch = 0;

//--- AJAX-like Technology
var dmAJAX = 0;
var dmAJAXCount = 0;
var ajaxReload = 0;

//--- Dynamic Menu
var dynamic = 0;

//--- Popup Menu
var popupMode = 0;

//--- Keystrokes Support
var keystrokes = 1;
var dm_focus = 1;
var dm_actKey = 113;

//--- Sound
var onOverSnd = "";
var onClickSnd = "";

var itemStyles = [];
var menuStyles = [];

let pic = "-32x32.png?v=3.0";

var menuItems = [
    //"title", "link", "icon", "null", "description", "null", "null", "- separater" "_ = disabled", "| = one up", "|| = two up", "| = one down",
    ["Games", "", "./C/System32/Images/Icons/joystick" + pic, "", "", "", "", "", "", "", "",],
    ["|2048", "", "./C/System32/Images/Icons/2048" + pic, "", "", "", "", "", "", "", "",],
    ["||4", "javascript:Four()", "./C/System32/Images/Icons/2048" + pic, "", "", "", "", "", "", "", "",],
    ["||2048", "javascript:Twenty()", "./C/System32/Images/Icons/2048" + pic, "", "", "", "", "", "", "", "",],
    ["||2048 3D", "javascript:Three()", "./C/System32/Images/Icons/2048" + pic, "", "", "", "", "", "", "", "",],
    ["||2048 AI", "javascript:AI()", "./C/System32/Images/Icons/2048" + pic, "", "", "", "", "", "", "", "",],
    ["||2048<br>Hardcore", "javascript:Hardcore()", "./C/System32/Images/Icons/2048" + pic, "", "", "", "", "", "", "", "",],
    ["||Flappy<br>2048", "javascript:One()", "./C/System32/Images/Icons/2048" + pic, "", "", "", "", "", "", "", "",],
    ["||Flappy<br>2048 2.0", "javascript:Two()", "./C/System32/Images/Icons/2048" + pic, "", "", "", "", "", "", "", "",],
    ["|FPS Games", "", "./C/System32/Images/Icons/FPS" + pic, "", "", "", "", "", "", "", "",],
    ["||Ultimate<br>Doom", "javascript:Doom()", "./C/System32/Images/Icons/Doom" + pic, "", "", "", "", "", "", "", "",],
    ["||Doom 2", "javascript:Doom2()", "./C/System32/Images/Icons/Doom2" + pic, "", "", "", "", "", "", "", "",],
    ["||Ultimate<br>Doom 2", "javascript:UD2()", "./C/System32/Images/Icons/UD2" + pic, "", "", "", "", "", "", "", "",],
    ["||Master Levels<br>for Doom 2", "javascript:Master()", "./C/System32/Images/Icons/Master" + pic, "", "", "", "", "", "", "", "",],
    ["||Brutal Doom 2", "javascript:BDoom2()", "./C/System32/Images/Icons/Brutal" + pic, "", "", "", "", "", "", "", "",],
    ["||Doom 64", "javascript:Sixty()", "./C/System32/Images/Icons/64" + pic, "", "", "", "", "", "", "", "",],
    ["||Doom 4", "javascript:D4()", "./C/System32/Images/Icons/4" + pic, "", "", "", "", "", "", "", "",],
    ["||Duke Nukem", "javascript:Duke()", "./C/System32/Images/Icons/Duke" + pic, "", "", "", "", "", "", "", "",],
    ["||FreeDoom", "", "./C/System32/Images/Icons/FreeDoom" + pic, "", "", "", "", "", "", "", "",],
    ["||Heretic", "javascript:Heretic()", "./C/System32/Images/Icons/Heretic" + pic, "", "", "", "", "", "", "", "",],
    ["||Heretic 2", "javascript:Heretic2()", "./C/System32/Images/Icons/Heretic2" + pic, "", "", "", "", "", "", "", "",],
    ["||Hexen", "javascript:Hexen()", "./C/System32/Images/Icons/Hexen" + pic, "", "", "", "", "", "", "", "",],
    ["||Plutonia", "javascript:Plutonia()", "./C/System32/Images/Icons/Plutonia" + pic, "", "", "", "", "", "", "", "",],
    ["||Plutonia 2", "javascript:Plutonia2()", "./C/System32/Images/Icons/Plutonia2" + pic, "", "", "", "", "", "", "", "",],
    ["||Final Doom", "javascript:TNT()", "./C/System32/Images/Icons/FDoom" + pic, "", "", "", "", "", "", "", "",],
    ["||Chex Quest", "javascript:Chex1()", "./C/System32/Images/Icons/Chex" + pic, "", "", "", "", "", "", "", "",],
    ["||Chex Quest 2", "javascript:Chex2()", "./C/System32/Images/Icons/Chex2" + pic, "", "", "", "", "", "", "", "",],
    ["||Chex Quest 3", "javascript:Chex3()", "./C/System32/Images/Icons/Chex3" + pic, "", "", "", "", "", "", "", "",],
    ["||Quake", "javascript:Quake()", "./C/System32/Images/Icons/Quake" + pic, "", "", "", "", "", "", "", "",],
    ["||Quake Mission<br>Pack 1", "javascript:QuakeM1()", "./C/System32/Images/Icons/Q1M" + pic, "", "", "", "", "", "", "", "",],
    ["||Quake Mission<br>Pack 2", "javascript:QuakeM2()", "./C/System32/Images/Icons/Q1M" + pic, "", "", "", "", "", "", "", "",],
    ["||Quake 2", "javascript:Quake2()", "./C/System32/Images/Icons/Quake2" + pic, "", "", "", "", "", "", "", "",],
    ["||School Shooter<br>Doom 2", "javascript:Shool()", "./C/System32/Images/Icons/School" + pic, "", "", "", "", "", "", "", "",],
    ["||Batman Doom", "javascript:BatDoom()", "./C/System32/Images/Icons/Batman" + pic, "", "", "", "", "", "", "", "",],
    ["||Mario Doom", "javascript:Dario1()", "./C/System32/Images/Icons/Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Mario Doom 2", "javascript:Dario2()", "./C/System32/Images/Icons/Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||StarWars Doom", "javascript:StarDoom()", "./C/System32/Images/Icons/StarDoom" + pic, "", "", "", "", "", "", "", "",],
    ["||Castle<br>Wolfenstein", "javascript:Castle()", "./C/System32/Images/Icons/Castle" + pic, "", "", "", "", "", "", "", "",],
    ["||Wolfenstein 3D", "javascript:Wolf3D()", "./C/System32/Images/Icons/Wolf" + pic, "", "", "", "", "", "", "", "",],
    ["||Spear of<br>Destiny", "javascript:Spear()", "./C/System32/Images/Icons/Spear" + pic, "", "", "", "", "", "", "", "",],
    ["||Strife", "javascript:Strife()", "./C/System32/Images/Icons/Strife" + pic, "", "", "", "", "", "", "", "",],
    ["||Rekkr", "javascript:Rekkr()", "./C/System32/Images/Icons/Rekkr" + pic, "", "", "", "", "", "", "", "",],
    ["||GoreScript<br>Classic", "javascript:Gore()", "./C/System32/Images/Icons/Gore" + pic, "", "", "", "", "", "", "", "",],
    ["||Doom<br>Zero", "javascript:Zero()", "./C/System32/Images/Icons/Zero" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["|Brain Games", "", "./C/System32/Images/Icons/Brain" + pic, "", "", "", "", "", "", "", "",],
    ["||Contranoid", "javascript:Contranoid()", "./C/System32/Images/Icons/Contranoid" + pic, "", "", "", "", "", "", "", "",],
    ["||Hextris", "javascript:Hextris()", "./C/System32/Images/Icons/Hextris" + pic, "", "", "", "", "", "", "", "",],
    ["||Oh Hi", "javascript:Hi()", "./C/System32/Images/Icons/0HH1" + pic, "", "", "", "", "", "", "", "",],
    ["||Oh No", "javascript:No()", "./C/System32/Images/Icons/0HN0" + pic, "", "", "", "", "", "", "", "",],
    ["||Quento", "javascript:Quento()", "./C/System32/Images/Icons/Quento" + pic, "", "", "", "", "", "", "", "",],
    ["|Arcade Games", "", "./C/System32/Images/Icons/joystick" + pic, "", "", "", "", "", "", "", "",],
    ["||PacMan", "javascript:Pac()", "./C/System32/Images/Icons/Pacman" + pic, "", "", "", "", "", "", "", "",],
    ["||Google PacMan<br>1.0", "javascript:Google1()", "./C/System32/Images/Icons/Pacman" + pic, "", "", "", "", "", "", "", "",],
    ["||Google PacMan<br>1.2", "javascript:Google2()", "./C/System32/Images/Icons/Pacman" + pic, "", "", "", "", "", "", "", "",],
    ["||Pong", "javascript:Pong()", "./C/System32/Images/Icons/pong" + pic, "", "", "", "", "", "", "", "",],
    ["||Space Invaders", "javascript:SpaceI()", "./C/System32/Images/Icons/Space" + pic, "", "", "", "", "", "", "", "",],
    ["||Tetris 1.0", "javascript:Tetriz()", "./C/System32/Images/Icons/Tetris" + pic, "", "", "", "", "", "", "", "",],
    ["||Tetris 2.0", "javascript:Cubes()", "./C/System32/Images/Icons/Tetris" + pic, "", "", "", "", "", "", "", "",],
    ["||Jelly Tetris", "javascript:Jelly()", "./C/System32/Images/Icons/Tetris" + pic, "", "", "", "", "", "", "", "",],
    ["||Tetris with AI", "javascript:AIT()", "./C/System32/Images/Icons/Tetris" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["|Mario Games", "", "./C/System32/Images/Icons/Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Super Mario", "javascript:Mario2()", "./C/System32/Images/Icons/Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Infinite Mario", "javascript:iMario()", "./C/System32/Images/Icons/Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Mari0", "javascript:Mari0()", "./C/System32/Images/Icons/Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Super Mario<br>World DX", "javascript:SMWDX()", "./C/System32/Images/Icons/Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Mario Maker", "javascript:MarMakr()", "./C/System32/Images/Icons/Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Jelly Mario", "javascript:JellyM()", "./C/System32/Images/Icons/Mario" + pic, "", "", "", "", "", "", "", "",],
    ["|Microsoft<br>Surf", "", "./C/System32/Images/Icons/Surf" + pic, "", "", "", "", "", "", "", "",],
    ["||Surf 1.0", "javascript:Surf1()", "./C/System32/Images/Icons/Surf" + pic, "", "", "", "", "", "", "", "",],
    ["||Surf 2.0", "javascript:Surf2()", "./C/System32/Images/Icons/Surf" + pic, "", "", "", "", "", "", "", "",],
    ["||Surf 3.0", "javascript:Surf3()", "./C/System32/Images/Icons/Surf" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|MineCrap", "", "./C/System32/Images/Icons/Minecraft" + pic, "", "", "", "", "", "", "", "",],
    ["||MineCrap<br>Alpha", "javascript:MinecrapA()", "./C/System32/Images/Icons/Minecraft" + pic, "", "", "", "", "", "", "", "",],
    ["||MineCrap<br>1.3", "", "./C/System32/Images/Icons/Minecraft" + pic, "", "Coming Soon!", "", "", "", "", "", "",],
    ["|||Coming Soon!", "", "./C/System32/Images/Icons/warning" + pic, "", "Coming Soon!", "", "", "", "", "", "",],
    ["||MineCrap<br>1.5.2", "javascript:Minecrap5()", "./C/System32/Images/Icons/Minecraft" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    //  ["||&nbsp;", "", "" , "", "", "", "", "", "", "", "", ],
    ["|Emulators", "", "./C/System32/Images/Icons/joystick" + pic, "", "", "", "", "", "", "", "",],
    ["||Gameboy /<br>Gameboy Color", "javascript:GBC()", "./C/System32/Images/Icons/joystick" + pic, "", "", "", "", "", "", "", "",],
    ["||Everything Else", "javascript:Emulator()", "./C/System32/Images/Icons/joystick" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Chrome Dino<br>Games", "", "./C/System32/Images/Icons/Dino" + pic, "", "", "", "", "", "", "", "",],
    ["||Regular Game", "javascript:CDG()", "./C/System32/Images/Icons/Dino" + pic, "", "", "", "", "", "", "", "",],
    ["||3D", "javascript:D3D()", "./C/System32/Images/Icons/Dino" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Ice Dodo", "", "./C/System32/Images/Icons/ice" + pic, "", "", "", "", "", "", "", "",],
    ["||Ice Dodo 1.0", "javascript:Ice()", "./C/System32/Images/Icons/ice" + pic, "", "", "", "", "", "", "", "",],
    ["||Ice Dodo 2.0", "javascript:Ice2()", "./C/System32/Images/Icons/ice" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Undertale<br>Boss Fight", "", "./C/System32/Images/Icons/Sans" + pic, "", "", "", "", "", "", "", "",],
    ["||Sans", "javascript:Rioluvania()", "./C/System32/Images/Icons/Sans" + pic, "", "", "", "", "", "", "", "",],
    ["||Riolu", "javascript:Sans()", "./C/System32/Images/Icons/Rioluvania" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Spelunky", "javascript:Spelunky()", "./C/System32/Images/Icons/Spelunky" + pic, "", "", "", "", "", "", "", "",],
    ["|Funky Karts", "", "./C/System32/Images/Icons/Funky-Grey" + pic, "", "Under Construction", "", "", "", "", "", "",],
    ["||Under<br>Construction", "", "./C/System32/Images/Icons/warning" + pic, "", "Under Construction", "", "", "", "", "", "",],
    ["|Rocket<br>Custa", "javascript:Rocket()", "./C/System32/Images/Icons/Rocket" + pic, "", "", "", "", "", "", "", "",],
    ["|HexGL", "javascript:Hex()", "./C/System32/Images/Icons/Hex" + pic, "", "", "", "", "", "", "", "",],
    ["|Boxel<br>Rebound", "javascript:Box()", "./C/System32/Images/Icons/Box" + pic, "", "", "", "", "", "", "", "",],
    ["|Drift<br>Hunters", "javascript:Drift()", "./C/System32/Images/Icons/Drift" + pic, "", "", "", "", "", "", "", "",],
    ["|The Binding<br> of Isaac", "javascript:TBOI()", "./C/System32/Images/Icons/TBOI" + pic, "", "", "", "", "", "", "", "",],
    ["|There is<br>No Game", "javascript:NoGame()", "./C/System32/Images/Icons/NoGame" + pic, "", "", "", "", "", "", "", "",],
    ["|Frank Zamboni", "javascript:Zamboni()", "./C/System32/Images/Icons/Zamboni" + pic, "", "", "", "", "", "", "", "",],
    ["|<hr class='clear-hr'>"],
    ["Programs", "", "./C/System32/Images/Icons/programs" + pic, "", "", "", "", "", "", "", "",],
    ["|Time<br>Wasting", "", "./C/System32/Images/Icons/fonts-folder" + pic, "", "", "", "", "", "", "", "",],
    ["||Acid Box", "javascript:AcidBox()", "./C/System32/Images/Icons/AcidBox" + pic, "", "", "", "", "", "", "", "",],
    ["||Clock", "javascript:Clock()", "./C/System32/Images/Icons/Clock" + pic, "", "", "", "", "", "", "", "",],
    ["||Button", "javascript:Button()", "./C/System32/Images/Icons/Button" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|MagnusWare<br>Software<br>Center", "javascript:Store()", "./C/System32/Images/Icons/Store" + pic, "", "", "", "", "", "", "", "",],
    ["|Chat Room", "javascript:Chat()", "./C/System32/Images/Icons/Chat" + pic, "", "", "", "", "", "", "", "",],
    ["|Sound<br>Recorder", "javascript:SoundRecorder()", "./C/System32/Images/Icons/speaker" + pic, "", "", "", "", "", "", "", "",],
    ["|Calculator", "javascript:Calculator()", "./C/System32/Images/Icons/Calculator" + pic, "", "", "", "", "", "", "", "",],
    ["|WinAMP", "javascript:openWinamp()", "./C/System32/Images/Icons/winamp2" + pic, "", "", "", "", "", "", "", "",],
    ["|VLC Media<br>Player", "javascript:VLC()", "./C/System32/Images/Icons/VLC.svg", "", "", "", "", "", "", "", "",],
    ["|Theme Creator", "javascript:Theme1()", "./C/System32/Images/Icons/themes" + pic, "", "", "", "", "", "", "", "",],
    ["|MS-Paint", "javascript:Paint()", "./C/System32/Images/Icons/paint" + pic, "", "", "", "", "", "", "", "",],
    ["|NotePad", "javascript:Notepad()", "./C/System32/Images/Icons/notepad" + pic, "", "", "", "", "", "", "", "",],
    ["|Da Hood", "javascript:Network()", "./C/System32/Images/Icons/network" + pic, "", "", "", "", "", "", "", "",],
    ["|MS-CMD", "javascript:MSCMD()", "./C/System32/Images/Icons/msdos" + pic, "", "", "", "", "", "", "", "",],
    ["|<hr class='clear-hr'>"],
    ["<hr class='hr-style'>"],
    ["Settings", "javascript:Settings();", "./C/System32/Images/Icons/settings" + pic, "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["Search", "javascript:", "./C/System32/Images/Icons/find-folder" + pic, "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["Reboot", "javascript:confirm_reboot()", "./C/System32/Images/Icons/shutdown" + pic, "", "", "", "", "", "", "", "",],
    ["Factory<br>Reset", "javascript:confirm_reinstall()", "./C/System32/Images/Icons/nuke" + pic, "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["About", "javascript:About()", "./C/System32/Images/Icons/About" + pic, "", "", "", "", "", "", "",],
];
dm_init();