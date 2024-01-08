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
var menuBorderRadius = "5px";

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
var itemBorderRadius = "";
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
var arrowImageMain = ["./A/System64/Images/Common/Black.gif", "./A/System64/Images/Common/White.gif"];
var arrowWidthSub = 0;
var arrowHeightSub = 0;
var arrowImageSub = ["./A/System64/Images/Common/Black.gif", "./A/System64/Images/Common/White.gif"];


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

let size = 32;
// greyscale function

var menuItems = [
    //"title", "link", "icon", "null", "description", "null", "null", "- separater" "_ = disabled", "| = one up", "|| = two up", "| = one down",
    ["Games", "", `${iconsAtTwoSizes("Game-Folder", size)}`, "", "", "", "", "", "", "", "",],
    ["|2048", "", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["||4", "javascript:Four();", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["||2048", "javascript:Twenty();", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["||2048 3D", "javascript:Three();", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["||2048 AI", "javascript:AI();", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["||2048<br>Hardcore", "javascript:Hardcore();", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["||Flappy<br>2048", "javascript:One();", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["||Flappy<br>2048 2.0", "javascript:Two();", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["|FPS Games", "", `${iconsAtTwoSizes("FPS", size)}`, "", "", "", "", "", "", "", "",],
    ["||Ultimate<br>Doom", "javascript:Doom();", `${iconsAtTwoSizes("Doom", size)}`, "", "", "", "", "", "", "", "",],
    ["||Doom 2", "javascript:Doom2();", `${iconsAtTwoSizes("Doom2", size)}`, "", "", "", "", "", "", "", "",],
    ["||Ultimate<br>Doom 2", "javascript:UD2();", `${iconsAtTwoSizes("UD2", size)}`, "", "", "", "", "", "", "", "",],
    ["||Master Levels<br>for Doom 2", "javascript:Master();", `${iconsAtTwoSizes("Master", size)}`, "", "", "", "", "", "", "", "",],
    ["||Brutal Doom 2", "javascript:BDoom2();", `${iconsAtTwoSizes("Brutal", size)}`, "", "", "", "", "", "", "", "",],
    ["||Doom 64", "javascript:Sixty();", `${iconsAtTwoSizes("64", size)}`, "", "", "", "", "", "", "", "",],
    ["||Doom 4", "javascript:D4();", `${iconsAtTwoSizes("4", size)}`, "", "", "", "", "", "", "", "",],
    ["||Duke Nukem", "javascript:Duke();", `${iconsAtTwoSizes("Duke", size)}`, "", "", "", "", "", "", "", "",],
    ["||FreeDoom", "", `${iconsAtTwoSizes("FreeDoom", size)}`, "", "", "", "", "", "", "", "",],
    ["||Heretic", "javascript:Heretic();", `${iconsAtTwoSizes("Heretic", size)}`, "", "", "", "", "", "", "", "",],
    ["||Heretic 2", "javascript:Heretic2();", `${iconsAtTwoSizes("Heretic2", size)}`, "", "", "", "", "", "", "", "",],
    ["||Hexen", "javascript:Hexen();", `${iconsAtTwoSizes("Hexen", size)}`, "", "", "", "", "", "", "", "",],
    ["||Plutonia", "javascript:Plutonia();", `${iconsAtTwoSizes("Plutonia", size)}`, "", "", "", "", "", "", "", "",],
    ["||Plutonia 2", "javascript:Plutonia2();", `${iconsAtTwoSizes("Plutonia2", size)}`, "", "", "", "", "", "", "", "",],
    ["||Final Doom", "javascript:TNT();", `${iconsAtTwoSizes("FDoom", size)}`, "", "", "", "", "", "", "", "",],
    ["||Chex Quest", "javascript:Chex1();", `${iconsAtTwoSizes("Chex", size)}`, "", "", "", "", "", "", "", "",],
    ["||Chex Quest 2", "javascript:Chex2();", `${iconsAtTwoSizes("Chex2", size)}`, "", "", "", "", "", "", "", "",],
    ["||Chex Quest 3", "javascript:Chex3();", `${iconsAtTwoSizes("Chex3", size)}`, "", "", "", "", "", "", "", "",],
    ["||Quake", "javascript:Quake();", `${iconsAtTwoSizes("Quake", size)}`, "", "", "", "", "", "", "", "",],
    ["||Quake Mission<br>Pack 1", "javascript:QuakeM1();", `${iconsAtTwoSizes("Q1M", size)}`, "", "", "", "", "", "", "", "",],
    ["||Quake Mission<br>Pack 2", "javascript:QuakeM2();", `${iconsAtTwoSizes("Q1M", size)}`, "", "", "", "", "", "", "", "",],
    ["||Quake 2", "javascript:Quake2();", `${iconsAtTwoSizes("Quake2", size)}`, "", "", "", "", "", "", "", "",],
    ["||School Shooter<br>Doom 2", "javascript:Shool();", `${iconsAtTwoSizes("School", size)}`, "", "", "", "", "", "", "", "",],
    ["||Batman Doom", "javascript:BatDoom();", `${iconsAtTwoSizes("Batman", size)}`, "", "", "", "", "", "", "", "",],
    ["||Mario Doom", "javascript:Dario1();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Mario Doom 2", "javascript:Dario2();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||StarWars Doom", "javascript:StarDoom();", `${iconsAtTwoSizes("StarDoom", size)}`, "", "", "", "", "", "", "", "",],
    ["||Castle<br>Wolfenstein", "javascript:Castle();", `${iconsAtTwoSizes("Castle", size)}`, "", "", "", "", "", "", "", "",],
    ["||Wolfenstein 3D", "javascript:Wolf3D();", `${iconsAtTwoSizes("Wolf", size)}`, "", "", "", "", "", "", "", "",],
    ["||Spear of<br>Destiny", "javascript:Spear();", `${iconsAtTwoSizes("Spear", size)}`, "", "", "", "", "", "", "", "",],
    ["||Strife", "javascript:Strife();", `${iconsAtTwoSizes("Strife", size)}`, "", "", "", "", "", "", "", "",],
    ["||Rekkr", "javascript:Rekkr();", `${iconsAtTwoSizes("Rekkr", size)}`, "", "", "", "", "", "", "", "",],
    ["||GoreScript<br>Classic", "javascript:Gore();", `${iconsAtTwoSizes("Gore", size)}`, "", "", "", "", "", "", "", "",],
    ["||Doom<br>Zero", "javascript:Zero();", `${iconsAtTwoSizes("Zero", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["|Brain Games", "", `${iconsAtTwoSizes("Brain", size)}`, "", "", "", "", "", "", "", "",],
    ["||Contranoid", "javascript:Contranoid();", `${iconsAtTwoSizes("Contranoid", size)}`, "", "", "", "", "", "", "", "",],
    ["||Hextris", "javascript:Hextris();", `${iconsAtTwoSizes("Hextris", size)}`, "", "", "", "", "", "", "", "",],
    ["||Oh Hi", "javascript:Hi();", `${iconsAtTwoSizes("0HH1", size)}`, "", "", "", "", "", "", "", "",],
    ["||Oh No", "javascript:No();", `${iconsAtTwoSizes("0HN0", size)}`, "", "", "", "", "", "", "", "",],
    ["||Quento", "javascript:Quento();", `${iconsAtTwoSizes("Quento", size)}`, "", "", "", "", "", "", "", "",],
    ["|Arcade Games", "", `${iconsAtTwoSizes("Arcade", size)}`, "", "", "", "", "", "", "", "",],
    ["||PacMan", "javascript:Pac();", `${iconsAtTwoSizes("Pacman", size)}`, "", "", "", "", "", "", "", "",],
    ["||Google PacMan<br>1.0", "javascript:Google1();", `${iconsAtTwoSizes("Pacman", size)}`, "", "", "", "", "", "", "", "",],
    ["||Google PacMan<br>1.2", "javascript:Google2();", `${iconsAtTwoSizes("Pacman", size)}`, "", "", "", "", "", "", "", "",],
    ["||Pong", "javascript:Pong();", `${iconsAtTwoSizes("pong", size)}`, "", "", "", "", "", "", "", "",],
    ["||Space Invaders", "javascript:SpaceI();", `${iconsAtTwoSizes("Space", size)}`, "", "", "", "", "", "", "", "",],
    ["||Tetris 1.0", "javascript:Tetriz();", `${iconsAtTwoSizes("Tetris", size)}`, "", "", "", "", "", "", "", "",],
    ["||Tetris 2.0", "javascript:Cubes();", `${iconsAtTwoSizes("Tetris", size)}`, "", "", "", "", "", "", "", "",],
    ["||Jelly Tetris", "javascript:Jelly();", `${iconsAtTwoSizes("Tetris", size)}`, "", "", "", "", "", "", "", "",],
    ["||Tetris with AI", "javascript:AIT();", `${iconsAtTwoSizes("Tetris", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["|Mario Games", "", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Super Mario", "javascript:Mario2();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Infinite Mario", "javascript:iMario();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Mari0", "javascript:Mari0();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Super Mario<br>World DX", "javascript:SMWDX();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Mario Maker", "javascript:MarMakr();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Jelly Mario", "javascript:JellyM();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["|Microsoft<br>Surf", "", `${iconsAtTwoSizes("Surf", size)}`, "", "", "", "", "", "", "", "",],
    ["||Surf 1.0", "javascript:Surf1();", `${iconsAtTwoSizes("Surf", size)}`, "", "", "", "", "", "", "", "",],
    ["||Surf 2.0", "javascript:Surf2();", `${iconsAtTwoSizes("Surf", size)}`, "", "", "", "", "", "", "", "",],
    ["||Surf 3.0", "javascript:Surf3();", `${iconsAtTwoSizes("Surf", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|MineCrap", "", `${iconsAtTwoSizes("Minecraft", size)}`, "", "", "", "", "", "", "", "",],
    ["||MineCrap<br>Alpha", "javascript:MinecrapA();", `${iconsAtTwoSizes("Minecraft", size)}`, "", "", "", "", "", "", "", "",],
    ["||MineCrap<br>1.3", "", `${iconsAtTwoSizes("Minecraft", size)}`, "", "Coming Soon!", "", "", "", "", "", "",],
    ["|||Coming Soon!", "", `${iconsAtTwoSizes("warning", size)}`, "", "Coming Soon!", "", "", "", "", "", "",],
    ["||MineCrap<br>1.5.2", "javascript:Minecrap5();", `${iconsAtTwoSizes("Minecraft", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    //  ["||&nbsp;", "", "" , "", "", "", "", "", "", "", "", ],
    ["|Emulators", "", `${iconsAtTwoSizes("emu", size)}`, "", "", "", "", "", "", "", "",],
    ["||Prometheus", "javascript:Prometheus();", `${iconsAtTwoSizes("emu", size)}`, "", "", "", "", "", "", "", "",],
    ["||Kronos", "javascript:Kronos();", `${iconsAtTwoSizes("emu", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Chrome Dino<br>Games", "", `${iconsAtTwoSizes("Dino", size)}`, "", "", "", "", "", "", "", "",],
    ["||Regular Game", "javascript:CDG();", `${iconsAtTwoSizes("Dino", size)}`, "", "", "", "", "", "", "", "",],
    ["||3D", "javascript:D3D();", `${iconsAtTwoSizes("Dino", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Ice Dodo", "", `${iconsAtTwoSizes("ice", size)}`, "", "", "", "", "", "", "", "",],
    ["||Ice Dodo 1.0", "javascript:Ice();", `${iconsAtTwoSizes("ice", size)}`, "", "", "", "", "", "", "", "",],
    ["||Ice Dodo 2.0", "javascript:Ice2();", `${iconsAtTwoSizes("ice", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Undertale<br>Boss Fight", "", `${iconsAtTwoSizes("Sans", size)}`, "", "", "", "", "", "", "", "",],
    ["||Sans", "javascript:Rioluvania();", `${iconsAtTwoSizes("Sans", size)}`, "", "", "", "", "", "", "", "",],
    ["||Riolu", "javascript:Sans();", `${iconsAtTwoSizes("Rioluvania", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Cookie<br>Clicker", "javascript:Cookie();", `${iconsAtTwoSizes("Cookie", size)}`, "", "", "", "", "", "", "", "",],
    ["|Spelunky", "javascript:Spelunky();", `${iconsAtTwoSizes("Spelunky", size)}`, "", "", "", "", "", "", "", "",],
    ["|Funky Karts", "javascript:Funky();", `${iconsAtTwoSizes("Funky-Grey", size)}`, "", "Under Construction", "", "", "", "", "", "",],
    ["|Rocket<br>Custa", "javascript:Rocket();", `${iconsAtTwoSizes("Rocket", size)}`, "", "", "", "", "", "", "", "",],
    ["|HexGL", "javascript:Hex();", `${iconsAtTwoSizes("Hex", size)}`, "", "", "", "", "", "", "", "",],
    ["|Boxel<br>Rebound", "javascript:Box();", `${iconsAtTwoSizes("Box", size)}`, "", "", "", "", "", "", "", "",],
    ["|Drift<br>Hunters", "javascript:Drift();", `${iconsAtTwoSizes("Drift", size)}`, "", "", "", "", "", "", "", "",],
    ["|The Binding<br> of Isaac", "javascript:TBOI();", `${iconsAtTwoSizes("TBOI", size)}`, "", "", "", "", "", "", "", "",],
    ["|There is<br>No Game", "javascript:NoGame();", `${iconsAtTwoSizes("NoGame", size)}`, "", "", "", "", "", "", "", "",],
    ["|Frank Zamboni", "javascript:Zamboni();", `${iconsAtTwoSizes("Zamboni", size)}`, "", "", "", "", "", "", "", "",],
    ["Programs", "", `${iconsAtTwoSizes("programs-folder", size)}`, "", "", "", "", "", "", "", "",],
    ["|Time<br>Wasting", "", `${iconsAtTwoSizes("fonts-folder", size)}`, "", "", "", "", "", "", "", "",],
    ["||Acid Box", "javascript:AcidBox();", `${iconsAtTwoSizes("AcidBox", size)}`, "", "", "", "", "", "", "", "",],
    ["||Clock", "javascript:Clock();", `${iconsAtTwoSizes("Clock", size)}`, "", "", "", "", "", "", "", "",],
    ["||Button", "javascript:Button();", `${iconsAtTwoSizes("Button", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Task Manager", "javascript:TaskMngr()", `${iconsAtTwoSizes("Task", size)}`, "", "", "", "", "", "", "", "",],
    ["|Explorer", "javascript:Explorer()", `${iconsAtTwoSizes("hard-disk-drive", size)}`, "", "", "", "", "", "", "", "",],
    ["|JS-CMD", "javascript:JSCMD()", `${iconsAtTwoSizes("msdos", size)}`, "", "", "", "", "", "", "", "",],
    ["|Software<br>Center", "javascript:Store();", `${iconsAtTwoSizes("Store", size)}`, "", "", "", "", "", "", "", "",],
    ["|Chat Room", "javascript:Chat();", `${iconsAtTwoSizes("Chat", size)}`, "", "", "", "", "", "", "", "",],
    ["|Sound<br>Recorder", "javascript:SoundRecorder();", `${iconsAtTwoSizes("speaker", size)}`, "", "", "", "", "", "", "", "",],
    ["|Calculator", "javascript:Calculator();", `${iconsAtTwoSizes("calculator", size)}`, "", "", "", "", "", "", "", "",],
    ["|WinAMP", "javascript:openWinamp();", `${iconsAtTwoSizes("winamp2", size)}`, "", "", "", "", "", "", "", "",],
    ["|VLC Media<br>Player", "javascript:VLC();", `${iconsAtTwoSizes("VLC", size)}`, "", "", "", "", "", "", "", "",],
    ["|Theme Creator", "javascript:Theme1();", `${iconsAtTwoSizes("themes", size)}`, "", "", "", "", "", "", "", "",],
    ["|Paint", "javascript:Paint();", `${iconsAtTwoSizes("paint", size)}`, "", "", "", "", "", "", "", "",],
    ["|NotePad", "javascript:Notepad();", `${iconsAtTwoSizes("notepad", size)}`, "", "", "", "", "", "", "", "",],
    ["|Da Hood", "javascript:Network();", `${iconsAtTwoSizes("network", size)}`, "", "", "", "", "", "", "", "",],
    ["|MW-CMD", "javascript:MWCMD();", `${iconsAtTwoSizes("msdos", size)}`, "", "", "", "", "", "", "", "",],
    ["|<hr class='clear-hr'>"],
    ["<hr class='hr-style'>"],
    ["Settings", "javascript:Settings();", `${iconsAtTwoSizes("settings", size)}`, "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["Search", "javascript:Search();", `${iconsAtTwoSizes("find-folder", size)}`, "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["Reboot", "javascript:confirm_reboot();", `${iconsAtTwoSizes("shutdown", size)}`, "", "", "", "", "", "", "", "",],
    ["Factory<br>Reset", "javascript:confirm_reinstall();", `${iconsAtTwoSizes("nuke", size)}`, "", "", "", "", "", "", "", "",],
    ["<hr class='hr-style'>"],
    ["About", "javascript:About();", `${iconsAtTwoSizes("About", size)}`, "", "", "", "", "", "", "",],
];
dm_init();

//# sourceURL=MagnusWare
