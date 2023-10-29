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
var arrowImageMain = ["./A/System64/Images/Common/Black.gif", "./A/System64/Images/Common/white.gif"];
var arrowWidthSub = 0;
var arrowHeightSub = 0;
var arrowImageSub = ["./A/System64/Images/Common/black.gif", "./A/System64/Images/Common/white.gif"];


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

let source = `./A/System64/Images/Icons/`;
let pic = "-32x32.png"
// greyscale function

var menuItems = [
    //"title", "link", "icon", "null", "description", "null", "null", "- separater" "_ = disabled", "| = one up", "|| = two up", "| = one down",
    ["Games", "", source + "joystick" + pic, "", "", "", "", "", "", "", "",],
    ["|2048", "", source + "2048" + pic, "", "", "", "", "", "", "", "",],
    ["||4", "javascript:Four()", source + "2048" + pic, "", "", "", "", "", "", "", "",],
    ["||2048", "javascript:Twenty()", source + "2048" + pic, "", "", "", "", "", "", "", "",],
    ["||2048 3D", "javascript:Three()", source + "2048" + pic, "", "", "", "", "", "", "", "",],
    ["||2048 AI", "javascript:AI()", source + "2048" + pic, "", "", "", "", "", "", "", "",],
    ["||2048<br>Hardcore", "javascript:Hardcore()", source + "2048" + pic, "", "", "", "", "", "", "", "",],
    ["||Flappy<br>2048", "javascript:One()", source + "2048" + pic, "", "", "", "", "", "", "", "",],
    ["||Flappy<br>2048 2.0", "javascript:Two()", source + "2048" + pic, "", "", "", "", "", "", "", "",],
    ["|FPS Games", "", source + "FPS" + pic, "", "", "", "", "", "", "", "",],
    ["||Ultimate<br>Doom", "javascript:Doom()", source + "Doom" + pic, "", "", "", "", "", "", "", "",],
    ["||Doom 2", "javascript:Doom2()", source + "Doom2" + pic, "", "", "", "", "", "", "", "",],
    ["||Ultimate<br>Doom 2", "javascript:UD2()", source + "UD2" + pic, "", "", "", "", "", "", "", "",],
    ["||Master Levels<br>for Doom 2", "javascript:Master()", source + "Master" + pic, "", "", "", "", "", "", "", "",],
    ["||Brutal Doom 2", "javascript:BDoom2()", source + "Brutal" + pic, "", "", "", "", "", "", "", "",],
    ["||Doom 64", "javascript:Sixty()", source + "64" + pic, "", "", "", "", "", "", "", "",],
    ["||Doom 4", "javascript:D4()", source + "4" + pic, "", "", "", "", "", "", "", "",],
    ["||Duke Nukem", "javascript:Duke()", source + "Duke" + pic, "", "", "", "", "", "", "", "",],
    ["||FreeDoom", "", source + "FreeDoom" + pic, "", "", "", "", "", "", "", "",],
    ["||Heretic", "javascript:Heretic()", source + "Heretic" + pic, "", "", "", "", "", "", "", "",],
    ["||Heretic 2", "javascript:Heretic2()", source + "Heretic2" + pic, "", "", "", "", "", "", "", "",],
    ["||Hexen", "javascript:Hexen()", source + "Hexen" + pic, "", "", "", "", "", "", "", "",],
    ["||Plutonia", "javascript:Plutonia()", source + "Plutonia" + pic, "", "", "", "", "", "", "", "",],
    ["||Plutonia 2", "javascript:Plutonia2()", source + "Plutonia2" + pic, "", "", "", "", "", "", "", "",],
    ["||Final Doom", "javascript:TNT()", source + "FDoom" + pic, "", "", "", "", "", "", "", "",],
    ["||Chex Quest", "javascript:Chex1()", source + "Chex" + pic, "", "", "", "", "", "", "", "",],
    ["||Chex Quest 2", "javascript:Chex2()", source + "Chex2" + pic, "", "", "", "", "", "", "", "",],
    ["||Chex Quest 3", "javascript:Chex3()", source + "Chex3" + pic, "", "", "", "", "", "", "", "",],
    ["||Quake", "javascript:Quake()", source + "Quake" + pic, "", "", "", "", "", "", "", "",],
    ["||Quake Mission<br>Pack 1", "javascript:QuakeM1()", source + "Q1M" + pic, "", "", "", "", "", "", "", "",],
    ["||Quake Mission<br>Pack 2", "javascript:QuakeM2()", source + "Q1M" + pic, "", "", "", "", "", "", "", "",],
    ["||Quake 2", "javascript:Quake2()", source + "Quake2" + pic, "", "", "", "", "", "", "", "",],
    ["||School Shooter<br>Doom 2", "javascript:Shool()", source + "School" + pic, "", "", "", "", "", "", "", "",],
    ["||Batman Doom", "javascript:BatDoom()", source + "Batman" + pic, "", "", "", "", "", "", "", "",],
    ["||Mario Doom", "javascript:Dario1()", source + "Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Mario Doom 2", "javascript:Dario2()", source + "Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||StarWars Doom", "javascript:StarDoom()", source + "StarDoom" + pic, "", "", "", "", "", "", "", "",],
    ["||Castle<br>Wolfenstein", "javascript:Castle()", source + "Castle" + pic, "", "", "", "", "", "", "", "",],
    ["||Wolfenstein 3D", "javascript:Wolf3D()", source + "Wolf" + pic, "", "", "", "", "", "", "", "",],
    ["||Spear of<br>Destiny", "javascript:Spear()", source + "Spear" + pic, "", "", "", "", "", "", "", "",],
    ["||Strife", "javascript:Strife()", source + "Strife" + pic, "", "", "", "", "", "", "", "",],
    ["||Rekkr", "javascript:Rekkr()", source + "Rekkr" + pic, "", "", "", "", "", "", "", "",],
    ["||GoreScript<br>Classic", "javascript:Gore()", source + "Gore" + pic, "", "", "", "", "", "", "", "",],
    ["||Doom<br>Zero", "javascript:Zero()", source + "Zero" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["|Brain Games", "", source + "Brain" + pic, "", "", "", "", "", "", "", "",],
    ["||Contranoid", "javascript:Contranoid()", source + "Contranoid" + pic, "", "", "", "", "", "", "", "",],
    ["||Hextris", "javascript:Hextris()", source + "Hextris" + pic, "", "", "", "", "", "", "", "",],
    ["||Oh Hi", "javascript:Hi()", source + "0HH1" + pic, "", "", "", "", "", "", "", "",],
    ["||Oh No", "javascript:No()", source + "0HN0" + pic, "", "", "", "", "", "", "", "",],
    ["||Quento", "javascript:Quento()", source + "Quento" + pic, "", "", "", "", "", "", "", "",],
    ["|Arcade Games", "", source + "joystick" + pic, "", "", "", "", "", "", "", "",],
    ["||PacMan", "javascript:Pac()", source + "Pacman" + pic, "", "", "", "", "", "", "", "",],
    ["||Google PacMan<br>1.0", "javascript:Google1()", source + "Pacman" + pic, "", "", "", "", "", "", "", "",],
    ["||Google PacMan<br>1.2", "javascript:Google2()", source + "Pacman" + pic, "", "", "", "", "", "", "", "",],
    ["||Pong", "javascript:Pong()", source + "pong" + pic, "", "", "", "", "", "", "", "",],
    ["||Space Invaders", "javascript:SpaceI()", source + "Space" + pic, "", "", "", "", "", "", "", "",],
    ["||Tetris 1.0", "javascript:Tetriz()", source + "Tetris" + pic, "", "", "", "", "", "", "", "",],
    ["||Tetris 2.0", "javascript:Cubes()", source + "Tetris" + pic, "", "", "", "", "", "", "", "",],
    ["||Jelly Tetris", "javascript:Jelly()", source + "Tetris" + pic, "", "", "", "", "", "", "", "",],
    ["||Tetris with AI", "javascript:AIT()", source + "Tetris" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["|Mario Games", "", source + "Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Super Mario", "javascript:Mario2()", source + "Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Infinite Mario", "javascript:iMario()", source + "Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Mari0", "javascript:Mari0()", source + "Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Super Mario<br>World DX", "javascript:SMWDX()", source + "Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Mario Maker", "javascript:MarMakr()", source + "Mario" + pic, "", "", "", "", "", "", "", "",],
    ["||Jelly Mario", "javascript:JellyM()", source + "Mario" + pic, "", "", "", "", "", "", "", "",],
    ["|Microsoft<br>Surf", "", source + "Surf" + pic, "", "", "", "", "", "", "", "",],
    ["||Surf 1.0", "javascript:Surf1()", source + "Surf" + pic, "", "", "", "", "", "", "", "",],
    ["||Surf 2.0", "javascript:Surf2()", source + "Surf" + pic, "", "", "", "", "", "", "", "",],
    ["||Surf 3.0", "javascript:Surf3()", source + "Surf" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|MineCrap", "", source + "Minecraft" + pic, "", "", "", "", "", "", "", "",],
    ["||MineCrap<br>Alpha", "javascript:MinecrapA()", source + "Minecraft" + pic, "", "", "", "", "", "", "", "",],
    ["||MineCrap<br>1.3", "", source + "Minecraft" + pic, "", "Coming Soon!", "", "", "", "", "", "",],
    ["|||Coming Soon!", "", source + "warning" + pic, "", "Coming Soon!", "", "", "", "", "", "",],
    ["||MineCrap<br>1.5.2", "javascript:Minecrap5()", source + "Minecraft" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    //  ["||&nbsp;", "", "" , "", "", "", "", "", "", "", "", ],
    ["|Emulators", "", source + "joystick" + pic, "", "", "", "", "", "", "", "",],
    ["||Gameboy /<br>Gameboy Color", "javascript:GBC()", source + "joystick" + pic, "", "", "", "", "", "", "", "",],
    ["||Everything Else", "javascript:Emulator()", source + "joystick" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Chrome Dino<br>Games", "", source + "Dino" + pic, "", "", "", "", "", "", "", "",],
    ["||Regular Game", "javascript:CDG()", source + "Dino" + pic, "", "", "", "", "", "", "", "",],
    ["||3D", "javascript:D3D()", source + "Dino" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Ice Dodo", "", source + "ice" + pic, "", "", "", "", "", "", "", "",],
    ["||Ice Dodo 1.0", "javascript:Ice()", source + "ice" + pic, "", "", "", "", "", "", "", "",],
    ["||Ice Dodo 2.0", "javascript:Ice2()", source + "ice" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Undertale<br>Boss Fight", "", source + "Sans" + pic, "", "", "", "", "", "", "", "",],
    ["||Sans", "javascript:Rioluvania()", source + "Sans" + pic, "", "", "", "", "", "", "", "",],
    ["||Riolu", "javascript:Sans()", source + "Rioluvania" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Spelunky", "javascript:Spelunky()", source + "Spelunky" + pic, "", "", "", "", "", "", "", "",],
    ["|Funky Karts", "", source + "Funky-Grey" + pic, "", "Under Construction", "", "", "", "", "", "",],
    ["||Under<br>Construction", "", source + "warning" + pic, "", "Under Construction", "", "", "", "", "", "",],
    ["|Rocket<br>Custa", "javascript:Rocket()", source + "Rocket" + pic, "", "", "", "", "", "", "", "",],
    ["|HexGL", "javascript:Hex()", source + "Hex" + pic, "", "", "", "", "", "", "", "",],
    ["|Boxel<br>Rebound", "javascript:Box()", source + "Box" + pic, "", "", "", "", "", "", "", "",],
    ["|Drift<br>Hunters", "javascript:Drift()", source + "Drift" + pic, "", "", "", "", "", "", "", "",],
    ["|The Binding<br> of Isaac", "javascript:TBOI()", source + "TBOI" + pic, "", "", "", "", "", "", "", "",],
    ["|There is<br>No Game", "javascript:NoGame()", source + "NoGame" + pic, "", "", "", "", "", "", "", "",],
    ["|Frank Zamboni", "javascript:Zamboni()", source + "Zamboni" + pic, "", "", "", "", "", "", "", "",],
    ["|<hr class='clear-hr'>"],
    ["Programs", "", source + "programs" + pic, "", "", "", "", "", "", "", "",],
    ["|Time<br>Wasting", "", source + "fonts-folder" + pic, "", "", "", "", "", "", "", "",],
    ["||Acid Box", "javascript:AcidBox()", source + "AcidBox" + pic, "", "", "", "", "", "", "", "",],
    ["||Clock", "javascript:Clock()", source + "Clock" + pic, "", "", "", "", "", "", "", "",],
    ["||Button", "javascript:Button()", source + "Button" + pic, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|MagnusWare<br>Software<br>Center", "javascript:Store()", source + "Store" + pic, "", "", "", "", "", "", "", "",],
    ["|Chat Room", "javascript:Chat()", source + "Chat" + pic, "", "", "", "", "", "", "", "",],
    ["|Sound<br>Recorder", "javascript:SoundRecorder()", source + "speaker" + pic, "", "", "", "", "", "", "", "",],
    ["|Calculator", "javascript:Calculator()", source + "Calculator" + pic, "", "", "", "", "", "", "", "",],
    ["|WinAMP", "javascript:openWinamp()", source + "winamp2" + pic, "", "", "", "", "", "", "", "",],
    ["|VLC Media<br>Player", "javascript:VLC()", source + "VLC.svg", "", "", "", "", "", "", "", "",],
    ["|Theme Creator", "javascript:Theme1()", source + "themes" + pic, "", "", "", "", "", "", "", "",],
    ["|MS-Paint", "javascript:Paint()", source + "paint" + pic, "", "", "", "", "", "", "", "",],
    ["|NotePad", "javascript:Notepad()", source + "notepad" + pic, "", "", "", "", "", "", "", "",],
    ["|Da Hood", "javascript:Network()", source + "network" + pic, "", "", "", "", "", "", "", "",],
    ["|MS-CMD", "javascript:MSCMD()", source + "msdos" + pic, "", "", "", "", "", "", "", "",],
    ["|<hr class='clear-hr'>"],
    ["<hr class='hr-style'>"],
    ["Settings", "javascript:Settings();", source + "settings" + pic, "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["Search", "javascript:", source + "find-folder" + pic, "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["Reboot", "javascript:confirm_reboot()", source + "shutdown" + pic, "", "", "", "", "", "", "", "",],
    ["Factory<br>Reset", "javascript:confirm_reinstall()", source + "nuke" + pic, "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["About", "javascript:About()", source + "About" + pic, "", "", "", "", "", "", "",],
];
dm_init();