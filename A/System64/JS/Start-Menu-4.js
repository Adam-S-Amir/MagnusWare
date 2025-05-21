var menuIdentifier = "";
// -- Deluxe Tuner Style Names
var itemStylesNames = [];
var menuStylesNames = [];
// -- End of Deluxe Tuner Style Names

//--- Common
var isHorizontal = 0;
var smColumns = 0;
var smOrientation = 0;
var dmRTL = 0;
var pressedItem = 0;
var itemCursor = "default";
var itemTarget = "_self";
var statusString = "";
var blankImage = "";
var pathPrefix_img = "";
var pathPrefix_link = "";

//--- Dimensions
var menuWidth = "auto";
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
var fontColor = ["var(--ButtonLight)", "var(--White)"];
var fontDecoration = ["none", "none"];
var fontColorDisabled = "#AAAAAA";

//--- Appearance
var menuBackColor = "var(--ButtonFace)";
var menuBackImage = "";
var menuBackRepeat = "repeat";
var menuBorderColor = "rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0.1)";
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
var separatorVWidth = "50px";
var separatorVHeight = "100%";
var separatorPadding = "0px";

// var separatorHeight = "1px";
// var separatorPadding = "10px";

//--- Floatable Menu
var floatable = 1;
var floatIterations = 5;
var floatableX = 1;
var floatableY = 1;
var floatableDX = 20;
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
    ["||2048 AI", "javascript:AI2048();", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["||2048<br>Hardcore", "javascript:Hardcore2048();", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["||Flappy<br>2048", "javascript:Flappy2048I();", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["||Flappy<br>2048 2.0", "javascript:Flappy2048II();", `${iconsAtTwoSizes("2048", size)}`, "", "", "", "", "", "", "", "",],
    ["|FPS Games", "", `${iconsAtTwoSizes("FPS", size)}`, "", "", "", "", "", "", "", "",],
    ["||Ultimate<br>Doom", "javascript:UltimateDoom();", `${iconsAtTwoSizes("Ultimate Doom", size)}`, "", "", "", "", "", "", "", "",],
    ["||Doom 2", "javascript:DoomII();", `${iconsAtTwoSizes("Doom II", size)}`, "", "", "", "", "", "", "", "",],
    ["||Ultimate<br>Doom 2", "javascript:UltimateDoomII();", `${iconsAtTwoSizes("Ultimate Doom II", size)}`, "", "", "", "", "", "", "", "",],
    ["||Master Levels<br>for Doom 2", "javascript:MasterLevelsForDoomII();", `${iconsAtTwoSizes("Master Levels for Doom II", size)}`, "", "", "", "", "", "", "", "",],
    ["||Brutal Doom 2", "javascript:BrutalDoomII();", `${iconsAtTwoSizes("Brutal Doom", size)}`, "", "", "", "", "", "", "", "",],
    ["||Doom 64", "javascript:Doom64();", `${iconsAtTwoSizes("Doom 64", size)}`, "", "", "", "", "", "", "", "",],
    ["||Doom 4", "javascript:Doom4();", `${iconsAtTwoSizes("Doom 4", size)}`, "", "", "", "", "", "", "", "",],
    ["||Duke Nukem", "javascript:DukeNukem3D();", `${iconsAtTwoSizes("Duke Nukem 3D", size)}`, "", "", "", "", "", "", "", "",],
    ["||FreeDoom", "", `${iconsAtTwoSizes("FreeDoom", size)}`, "", "", "", "", "", "", "", "",],
    ["||Heretic", "javascript:Heretic();", `${iconsAtTwoSizes("Heretic", size)}`, "", "", "", "", "", "", "", "",],
    ["||Heretic 2", "javascript:HereticII();", `${iconsAtTwoSizes("Heretic II", size)}`, "", "", "", "", "", "", "", "",],
    ["||Hexen", "javascript:Hexen();", `${iconsAtTwoSizes("Hexen", size)}`, "", "", "", "", "", "", "", "",],
    ["||Plutonia", "javascript:ThePlutoniaExperiment();", `${iconsAtTwoSizes("The Plutonia Experiment", size)}`, "", "", "", "", "", "", "", "",],
    ["||Plutonia 2", "javascript:ThePlutoniaExperimentII();", `${iconsAtTwoSizes("The Plutonia Experiment II", size)}`, "", "", "", "", "", "", "", "",],
    ["||Final Doom", "javascript:TNTEvilution();", `${iconsAtTwoSizes("TNT Evilution", size)}`, "", "", "", "", "", "", "", "",],
    ["||Chex Quest", "javascript:ChexQuestI();", `${iconsAtTwoSizes("Chex Quest I", size)}`, "", "", "", "", "", "", "", "",],
    ["||Chex Quest 2", "javascript:ChexQuestII();", `${iconsAtTwoSizes("Chex Quest II", size)}`, "", "", "", "", "", "", "", "",],
    ["||Chex Quest 3", "javascript:ChexQuestIII();", `${iconsAtTwoSizes("Chex Quest III", size)}`, "", "", "", "", "", "", "", "",],
    ["||Quake", "javascript:Quake();", `${iconsAtTwoSizes("Quake", size)}`, "", "", "", "", "", "", "", "",],
    ["||Quake Mission<br>Pack 1", "javascript:QuakeMissionPackI();", `${iconsAtTwoSizes("Q1M", size)}`, "", "", "", "", "", "", "", "",],
    ["||Quake Mission<br>Pack 2", "javascript:QuakeMissionPackII();", `${iconsAtTwoSizes("Q1M", size)}`, "", "", "", "", "", "", "", "",],
    ["||Quake 2", "javascript:QuakeII();", `${iconsAtTwoSizes("Quake II", size)}`, "", "", "", "", "", "", "", "",],
    ["||School Shooter<br>Doom 2", "javascript:DoomSchoolShooterEdition();", `${iconsAtTwoSizes("School", size)}`, "", "", "", "", "", "", "", "",],
    ["||Batman Doom", "javascript:BatmanDoom();", `${iconsAtTwoSizes("Batman Doom", size)}`, "", "", "", "", "", "", "", "",],
    ["||Mario Doom", "javascript:MarioDoom();", `${iconsAtTwoSizes("Mario Doom", size)}`, "", "", "", "", "", "", "", "",],
    ["||Mario Doom 2", "javascript:MarioDoomII();", `${iconsAtTwoSizes("Mario Doom", size)}`, "", "", "", "", "", "", "", "",],
    ["||StarWars Doom", "javascript:StarWarsDoom();", `${iconsAtTwoSizes("StarWars Doom", size)}`, "", "", "", "", "", "", "", "",],
    ["||Castle<br>Wolfenstein", "javascript:CastleWolfenstein();", `${iconsAtTwoSizes("Castle Wolfenstein", size)}`, "", "", "", "", "", "", "", "",],
    ["||Wolfenstein 3D", "javascript:Wolfenstein3D();", `${iconsAtTwoSizes("Wolfenstein 3D", size)}`, "", "", "", "", "", "", "", "",],
    ["||Spear of<br>Destiny", "javascript:WolfensteinSpearOfDestiny();", `${iconsAtTwoSizes("Wolfenstein Spear of Destiny", size)}`, "", "", "", "", "", "", "", "",],
    ["||Strife", "javascript:Strife();", `${iconsAtTwoSizes("Strife", size)}`, "", "", "", "", "", "", "", "",],
    ["||Rekkr", "javascript:Rekkr();", `${iconsAtTwoSizes("Rekkr", size)}`, "", "", "", "", "", "", "", "",],
    ["||GoreScript<br>Classic", "javascript:GoreScriptClassic();", `${iconsAtTwoSizes("Gore", size)}`, "", "", "", "", "", "", "", "",],
    ["||Doom<br>Zero", "javascript:DoomZero();", `${iconsAtTwoSizes("Doom Zero", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["|Brain Games", "", `${iconsAtTwoSizes("Brain", size)}`, "", "", "", "", "", "", "", "",],
    ["||Contranoid", "javascript:Contranoid();", `${iconsAtTwoSizes("Contranoid", size)}`, "", "", "", "", "", "", "", "",],
    ["||Hextris", "javascript:Hextris();", `${iconsAtTwoSizes("Hextris", size)}`, "", "", "", "", "", "", "", "",],
    ["||Oh Hi", "javascript:OhHi();", `${iconsAtTwoSizes("0HH1", size)}`, "", "", "", "", "", "", "", "",],
    ["||Oh No", "javascript:OhN0();", `${iconsAtTwoSizes("0HN0", size)}`, "", "", "", "", "", "", "", "",],
    ["||Quento", "javascript:Quento();", `${iconsAtTwoSizes("Quento", size)}`, "", "", "", "", "", "", "", "",],
    ["|Arcade Games", "", `${iconsAtTwoSizes("Arcade", size)}`, "", "", "", "", "", "", "", "",],
    ["||PacMan", "javascript:PacMan();", `${iconsAtTwoSizes("Pacman", size)}`, "", "", "", "", "", "", "", "",],
    ["||Google PacMan<br>1.0", "javascript:GooglePacManI();", `${iconsAtTwoSizes("Pacman", size)}`, "", "", "", "", "", "", "", "",],
    ["||Google PacMan<br>1.2", "javascript:GooglePacManII();", `${iconsAtTwoSizes("Pacman", size)}`, "", "", "", "", "", "", "", "",],
    ["||Pong", "javascript:Pong();", `${iconsAtTwoSizes("pong", size)}`, "", "", "", "", "", "", "", "",],
    ["||Space Invaders", "javascript:SpaceInvaders();", `${iconsAtTwoSizes("Space", size)}`, "", "", "", "", "", "", "", "",],
    ["||Tetris 1.0", "javascript:Tetris();", `${iconsAtTwoSizes("Tetris", size)}`, "", "", "", "", "", "", "", "",],
    ["||Tetris 2.0", "javascript:TetrisII();", `${iconsAtTwoSizes("Tetris", size)}`, "", "", "", "", "", "", "", "",],
    ["||Jelly Tetris", "javascript:JellyTetris();", `${iconsAtTwoSizes("Tetris", size)}`, "", "", "", "", "", "", "", "",],
    ["||Tetris with AI", "javascript:AITetris();", `${iconsAtTwoSizes("Tetris", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["|Mario Games", "", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Super Mario Bros.", "javascript:SuperMarioBros();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Infinite Mario", "javascript:InfiniteMario();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Mari0", "javascript:Mari0();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Super Mario<br>World Deluxe", "javascript:SuperMarioWorldDeluxe();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Mario Maker", "javascript:SuperMarioMaker();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["||Jelly Mario", "javascript:JellyMario();", `${iconsAtTwoSizes("Mario", size)}`, "", "", "", "", "", "", "", "",],
    ["|Microsoft<br>Surf", "", `${iconsAtTwoSizes("Surf", size)}`, "", "", "", "", "", "", "", "",],
    ["||Surf 1.0", "javascript:EdgeSurfI();", `${iconsAtTwoSizes("Surf", size)}`, "", "", "", "", "", "", "", "",],
    ["||Surf 2.0", "javascript:EdgeSurfII();", `${iconsAtTwoSizes("Surf", size)}`, "", "", "", "", "", "", "", "",],
    ["||Surf 3.0", "javascript:EdgeSurfIII();", `${iconsAtTwoSizes("Surf", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|MineCrap", "", `${iconsAtTwoSizes("minecrap", size)}`, "", "", "", "", "", "", "", "",],
    ["||MineCrap<br>Alpha", "javascript:MineCrapAlpha();", `${iconsAtTwoSizes("minecrap", size)}`, "", "", "", "", "", "", "", "",],
    ["||MineCrap<br>1.3", "", `${iconsAtTwoSizes("minecrap", size)}`, "", "Coming Soon!", "", "", "", "", "", "",],
    ["|||Coming Soon!", "", `${iconsAtTwoSizes("warning", size)}`, "", "Coming Soon!", "", "", "", "", "", "",],
    ["||MineCrap<br>1.5.2", "javascript:MineCrap15();", `${iconsAtTwoSizes("minecrap", size)}`, "", "", "", "", "", "", "", "",],
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
    ["||Regular Game", "javascript:ChromeDinoGames();", `${iconsAtTwoSizes("Dino", size)}`, "", "", "", "", "", "", "", "",],
    ["||3D", "javascript:ChromeDino3D();", `${iconsAtTwoSizes("Dino", size)}`, "", "", "", "", "", "", "", "",],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Ice Dodo", "", `${iconsAtTwoSizes("ice", size)}`, "", "", "", "", "", "", "", "",],
    ["||Ice Dodo 1.0", "javascript:IceDodoI();", `${iconsAtTwoSizes("ice", size)}`, "", "", "", "", "", "", "", "",],
    ["||Ice Dodo 2.0", "javascript:IceDodoII();", `${iconsAtTwoSizes("ice", size)}`, "", "", "", "", "", "", "", "",],
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
    ["|Cookie<br>Clicker", "javascript:CookieClicker();", `${iconsAtTwoSizes("Cookie", size)}`, "", "", "", "", "", "", "", "",],
    ["|Spelunky", "javascript:Spelunky();", `${iconsAtTwoSizes("Spelunky", size)}`, "", "", "", "", "", "", "", "",],
    ["|Funky Karts", "javascript:Funky();", `${iconsAtTwoSizes("Funky-Grey", size)}`, "", "Under Construction", "", "", "", "", "", "",],
    ["|Rocket<br>Custa", "javascript:RocketCusta();", `${iconsAtTwoSizes("Rocket", size)}`, "", "", "", "", "", "", "", "",],
    ["|HexGL", "javascript:HexGL();", `${iconsAtTwoSizes("Hex", size)}`, "", "", "", "", "", "", "", "",],
    ["|Boxel<br>Rebound", "javascript:BoxelRebound();", `${iconsAtTwoSizes("Box", size)}`, "", "", "", "", "", "", "", "",],
    ["|Drift<br>Hunters", "javascript:DriftHunters();", `${iconsAtTwoSizes("Drift", size)}`, "", "", "", "", "", "", "", "",],
    ["|The Binding<br> of Isaac", "javascript:TheBindingOfIsaac();", `${iconsAtTwoSizes("TBOI", size)}`, "", "", "", "", "", "", "", "",],
    ["|There is<br>No Game", "javascript:ThereIsNoGame();", `${iconsAtTwoSizes("NoGame", size)}`, "", "", "", "", "", "", "", "",],
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
    ["|Task Manager", "javascript:TaskManager()", `${iconsAtTwoSizes("Task", size)}`, "", "", "", "", "", "", "", "", ],
    ["|Explorer", "javascript:Explorer()", `${iconsAtTwoSizes("hard-disk-drive", size)}`, "", "", "", "", "", "", "", "",],
    ["|Software<br>Center", "javascript:Store();", `${iconsAtTwoSizes("Store", size)}`, "", "", "", "", "", "", "", "",],
    ["|Chat Room", "javascript:Chat();", `${iconsAtTwoSizes("Chat", size)}`, "", "", "", "", "", "", "", "",],
    ["|Sound<br>Recorder", "javascript:SoundRecorder();", `${iconsAtTwoSizes("speaker", size)}`, "", "", "", "", "", "", "", "",],
    ["|Calculator", "javascript:Calculator();", `${iconsAtTwoSizes("calculator", size)}`, "", "", "", "", "", "", "", "",],
    ["|WinAMP", "javascript:openWinamp();", `${iconsAtTwoSizes("winamp2", size)}`, "", "", "", "", "", "", "", "",],
    ["|VLC Media<br>Player", "javascript:VLC();", `${iconsAtTwoSizes("VLC", size)}`, "", "", "", "", "", "", "", "",],
    ["|Theme Creator", "javascript:ThemeEditor();", `${iconsAtTwoSizes("themes", size)}`, "", "", "", "", "", "", "", "",],
    ["|Paint", "javascript:Paint();", `${iconsAtTwoSizes("paint", size)}`, "", "", "", "", "", "", "", "",],
    ["|NotePad", "javascript:Notepad();", `${iconsAtTwoSizes("notepad", size)}`, "", "", "", "", "", "", "", "",],
    ["|Da Hood", "javascript:Network();", `${iconsAtTwoSizes("network", size)}`, "", "", "", "", "", "", "", "",],
    ["|MagnusWare<br>Terminal", "javascript:MWTerminal();", `${iconsAtTwoSizes("msdos", size)}`, "", "", "", "", "", "", "", "",],
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
