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
var arrowImageMain = ["./A/System32/Images/Common/black.gif", "./A/System32/Images/Common/white.gif"];
var arrowWidthSub = 0;
var arrowHeightSub = 0;
var arrowImageSub = ["./A/System32/Images/Common/black.gif", "./A/System32/Images/Common/white.gif"];


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

// greyscale function

var menuItems = [
    //"title", "link", "icon", "null", "description", "null", "null", "- separater" "_ = disabled", "| = one up", "|| = two up", "| = one down",
    ["Games", "", "joystick", "", "", "", "", "", "", "", "",],
    ["|2048", "", "2048", "", "", "", "", "", "", "", "",],
    ["||4", "javascript:Four()", "2048", "", "", "", "", "", "", "", "",],
    ["||2048", "javascript:Twenty()", "2048", "", "", "", "", "", "", "", "",],
    ["||2048 3D", "javascript:Three()", "2048", "", "", "", "", "", "", "", "",],
    ["||2048 AI", "javascript:AI()", "2048", "", "", "", "", "", "", "", "",],
    ["||2048<br>Hardcore", "javascript:Hardcore()", "2048", "", "", "", "", "", "", "", "",],
    ["||Flappy<br>2048", "javascript:One()", "2048", "", "", "", "", "", "", "", "",],
    ["||Flappy<br>2048 2.0", "javascript:Two()", "2048", "", "", "", "", "", "", "", "",],
    ["|FPS Games", "", "FPS", "", "", "", "", "", "", "", "",],
    ["||Ultimate<br>Doom", "javascript:Doom()", "Doom", "", "", "", "", "", "", "", "",],
    ["||Doom 2", "javascript:Doom2()", "Doom2", "", "", "", "", "", "", "", "",],
    ["||Ultimate<br>Doom 2", "javascript:UD2()", "UD2", "", "", "", "", "", "", "", "",],
    ["||Master Levels<br>for Doom 2", "javascript:Master()", "Master", "", "", "", "", "", "", "", "",],
    ["||Brutal Doom 2", "javascript:BDoom2()", "Brutal", "", "", "", "", "", "", "", "",],
    ["||Doom 64", "javascript:Sixty()", "64", "", "", "", "", "", "", "", "",],
    ["||Doom 4", "javascript:D4()", "4", "", "", "", "", "", "", "", "",],
    ["||Duke Nukem", "javascript:Duke()", "Duke", "", "", "", "", "", "", "", "",],
    ["||FreeDoom", "", "FreeDoom", "", "", "", "", "", "", "", "",],
    ["||Heretic", "javascript:Heretic()", "Heretic", "", "", "", "", "", "", "", "",],
    ["||Heretic 2", "javascript:Heretic2()", "Heretic2", "", "", "", "", "", "", "", "",],
    ["||Hexen", "javascript:Hexen()", "Hexen", "", "", "", "", "", "", "", "",],
    ["||Plutonia", "javascript:Plutonia()", "Plutonia", "", "", "", "", "", "", "", "",],
    ["||Plutonia 2", "javascript:Plutonia2()", "Plutonia2", "", "", "", "", "", "", "", "",],
    ["||Final Doom", "javascript:TNT()", "FDoom", "", "", "", "", "", "", "", "",],
    ["||Chex Quest", "javascript:Chex1()", "Chex", "", "", "", "", "", "", "", "",],
    ["||Chex Quest 2", "javascript:Chex2()", "Chex2", "", "", "", "", "", "", "", "",],
    ["||Chex Quest 3", "javascript:Chex3()", "Chex3", "", "", "", "", "", "", "", "",],
    ["||Quake", "javascript:Quake()", "Quake", "", "", "", "", "", "", "", "",],
    ["||Quake Mission<br>Pack 1", "javascript:QuakeM1()", "Q1M", "", "", "", "", "", "", "", "",],
    ["||Quake Mission<br>Pack 2", "javascript:QuakeM2()", "Q1M", "", "", "", "", "", "", "", "",],
    ["||Quake 2", "javascript:Quake2()", "Quake2", "", "", "", "", "", "", "", "",],
    ["||School Shooter<br>Doom 2", "javascript:Shool()", "School", "", "", "", "", "", "", "", "",],
    ["||Batman Doom", "javascript:BatDoom()", "Batman", "", "", "", "", "", "", "", "",],
    ["||Mario Doom", "javascript:Dario1()", "Mario", "", "", "", "", "", "", "", "",],
    ["||Mario Doom 2", "javascript:Dario2()", "Mario", "", "", "", "", "", "", "", "",],
    ["||StarWars Doom", "javascript:StarDoom()", "StarDoom", "", "", "", "", "", "", "", "",],
    ["||Castle<br>Wolfenstein", "javascript:Castle()", "Castle", "", "", "", "", "", "", "", "",],
    ["||Wolfenstein 3D", "javascript:Wolf3D()", "Wolf", "", "", "", "", "", "", "", "",],
    ["||Spear of<br>Destiny", "javascript:Spear()", "Spear", "", "", "", "", "", "", "", "",],
    ["||Strife", "javascript:Strife()", "Strife", "", "", "", "", "", "", "", "",],
    ["||Rekkr", "javascript:Rekkr()", "Rekkr", "", "", "", "", "", "", "", "",],
    ["||GoreScript<br>Classic", "javascript:Gore()", "Gore", "", "", "", "", "", "", "", "",],
    ["||Doom<br>Zero", "javascript:Zero()", "Zero", "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["|Brain Games", "", "Brain", "", "", "", "", "", "", "", "",],
    ["||Contranoid", "javascript:Contranoid()", "Contranoid", "", "", "", "", "", "", "", "",],
    ["||Hextris", "javascript:Hextris()", "Hextris", "", "", "", "", "", "", "", "",],
    ["||Oh Hi", "javascript:Hi()", "0HH1", "", "", "", "", "", "", "", "",],
    ["||Oh No", "javascript:No()", "0HN0", "", "", "", "", "", "", "", "",],
    ["||Quento", "javascript:Quento()", "Quento", "", "", "", "", "", "", "", "",],
    ["|Arcade Games", "", "joystick", "", "", "", "", "", "", "", "",],
    ["||PacMan", "javascript:Pac()", "Pacman", "", "", "", "", "", "", "", "",],
    ["||Google PacMan<br>1.0", "javascript:Google1()", "Pacman", "", "", "", "", "", "", "", "",],
    ["||Google PacMan<br>1.2", "javascript:Google2()", "Pacman", "", "", "", "", "", "", "", "",],
    ["||Pong", "javascript:Pong()", "pong", "", "", "", "", "", "", "", "",],
    ["||Space Invaders", "javascript:SpaceI()", "Space", "", "", "", "", "", "", "", "",],
    ["||Tetris 1.0", "javascript:Tetriz()", "Tetris", "", "", "", "", "", "", "", "",],
    ["||Tetris 2.0", "javascript:Cubes()", "Tetris", "", "", "", "", "", "", "", "",],
    ["||Jelly Tetris", "javascript:Jelly()", "Tetris", "", "", "", "", "", "", "", "",],
    ["||Tetris with AI", "javascript:AIT()", "Tetris", "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["|Mario Games", "", "Mario", "", "", "", "", "", "", "", "",],
    ["||Super Mario", "javascript:Mario2()", "Mario", "", "", "", "", "", "", "", "",],
    ["||Infinite Mario", "javascript:iMario()", "Mario", "", "", "", "", "", "", "", "",],
    ["||Mari0", "javascript:Mari0()", "Mario", "", "", "", "", "", "", "", "",],
    ["||Super Mario<br>World DX", "javascript:SMWDX()", "Mario", "", "", "", "", "", "", "", "",],
    ["||Mario Maker", "javascript:MarMakr()", "Mario", "", "", "", "", "", "", "", "",],
    ["||Jelly Mario", "javascript:JellyM()", "Mario", "", "", "", "", "", "", "", "",],
    ["|Microsoft<br>Surf", "", "Surf", "", "", "", "", "", "", "", "",],
    ["||Surf 1.0", "javascript:Surf1()", "Surf", "", "", "", "", "", "", "", "",],
    ["||Surf 2.0", "javascript:Surf2()", "Surf", "", "", "", "", "", "", "", "",],
    ["||Surf 3.0", "javascript:Surf3()", "Surf", "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|MineCrap", "", "Minecraft", "", "", "", "", "", "", "", "",],
    ["||MineCrap<br>Alpha", "javascript:MinecrapA()", "Minecraft", "", "", "", "", "", "", "", "",],
    ["||MineCrap<br>1.3", "", "Minecraft", "", "Coming Soon!", "", "", "", "", "", "",],
    ["|||Coming Soon!", "", "warning", "", "Coming Soon!", "", "", "", "", "", "",],
    ["||MineCrap<br>1.5.2", "javascript:Minecrap5()", "Minecraft", "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    //  ["||&nbsp;", "", "" , "", "", "", "", "", "", "", "", ],
    ["|Emulators", "", "joystick", "", "", "", "", "", "", "", "",],
    ["||Gameboy /<br>Gameboy Color", "javascript:GBC()", "joystick", "", "", "", "", "", "", "", "",],
    ["||Everything Else", "javascript:Emulator()", "joystick", "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Chrome Dino<br>Games", "", "Dino", "", "", "", "", "", "", "", "",],
    ["||Regular Game", "javascript:CDG()", "Dino", "", "", "", "", "", "", "", "",],
    ["||3D", "javascript:D3D()", "Dino", "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Ice Dodo", "", "ice", "", "", "", "", "", "", "", "",],
    ["||Ice Dodo 1.0", "javascript:Ice()", "ice", "", "", "", "", "", "", "", "",],
    ["||Ice Dodo 2.0", "javascript:Ice2()", "ice", "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Undertale<br>Boss Fight", "", "Sans", "", "", "", "", "", "", "", "",],
    ["||Sans", "javascript:Rioluvania()", "Sans", "", "", "", "", "", "", "", "",],
    ["||Riolu", "javascript:Sans()", "Rioluvania", "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Spelunky", "javascript:Spelunky()", "Spelunky", "", "", "", "", "", "", "", "",],
    ["|Funky Karts", "", "Funky-Grey", "", "Under Construction", "", "", "", "", "", "",],
    ["||Under<br>Construction", "", "warning", "", "Under Construction", "", "", "", "", "", "",],
    ["|Rocket<br>Custa", "javascript:Rocket()", "Rocket", "", "", "", "", "", "", "", "",],
    ["|HexGL", "javascript:Hex()", "Hex", "", "", "", "", "", "", "", "",],
    ["|Boxel<br>Rebound", "javascript:Box()", "Box", "", "", "", "", "", "", "", "",],
    ["|Drift<br>Hunters", "javascript:Drift()", "Drift", "", "", "", "", "", "", "", "",],
    ["|The Binding<br> of Isaac", "javascript:TBOI()", "TBOI", "", "", "", "", "", "", "", "",],
    ["|There is<br>No Game", "javascript:NoGame()", "NoGame", "", "", "", "", "", "", "", "",],
    ["|Frank Zamboni", "javascript:Zamboni()", "Zamboni", "", "", "", "", "", "", "", "",],
    ["|<hr class='clear-hr'>"],
    ["Programs", "", "programs", "", "", "", "", "", "", "", "",],
    ["|Time<br>Wasting", "", "fonts-folder", "", "", "", "", "", "", "", "",],
    ["||Acid Box", "javascript:AcidBox()", "AcidBox", "", "", "", "", "", "", "", "",],
    ["||Clock", "javascript:Clock()", "Clock", "", "", "", "", "", "", "", "",],
    ["||Button", "javascript:Button()", "Button", "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|MagnusWare<br>Software<br>Center", "javascript:Store()", "Store", "", "", "", "", "", "", "", "",],
    ["|Chat Room", "javascript:Chat()", "Chat", "", "", "", "", "", "", "", "",],
    ["|Sound<br>Recorder", "javascript:SoundRecorder()", "speaker", "", "", "", "", "", "", "", "",],
    ["|Calculator", "javascript:Calculator()", "Calculator", "", "", "", "", "", "", "", "",],
    ["|WinAMP", "javascript:openWinamp()", "winamp2", "", "", "", "", "", "", "", "",],
    ["|VLC Media<br>Player", "javascript:VLC()", "VLC.svg", "", "", "", "", "", "", "", "",],
    ["|Theme Creator", "javascript:Theme1()", "themes", "", "", "", "", "", "", "", "",],
    ["|MS-Paint", "javascript:Paint()", "paint", "", "", "", "", "", "", "", "",],
    ["|NotePad", "javascript:Notepad()", "notepad", "", "", "", "", "", "", "", "",],
    ["|Da Hood", "javascript:Network()", "network", "", "", "", "", "", "", "", "",],
    ["|MS-CMD", "javascript:MSCMD()", "msdos", "", "", "", "", "", "", "", "",],
    ["|<hr class='clear-hr'>"],
    ["<hr class='hr-style'>"],
    ["Settings", "javascript:Settings();", "settings", "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["Search", "javascript:", "find-folder", "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["Reboot", "javascript:confirm_reboot()", "shutdown", "", "", "", "", "", "", "", "",],
    ["Factory<br>Reset", "javascript:confirm_reinstall()", "nuke", "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["About", "javascript:About()", "About", "", "", "", "", "", "", "",],
];
dm_init();