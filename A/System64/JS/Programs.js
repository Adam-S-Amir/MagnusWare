size = 16;

function hidemenu() {
	document.getElementById('-start-menu-').style.display = 'none';
}

function About() {
	let $win = new $EmbedWindow2({
		src: null,
		icons: Window_icons("About"),
		title: "About",
		innerWidth: 420,
		innerHeight: 400
	}, "About.MXW");
	about();
	hidemenu();
	return new Task($win, "About.MX7");
}

function JSCMD() {
	let $win = new $EmbedWindow2({
		src: null,
		icons: Window_icons("msdos"),
		title: "JS-CMD",
		innerWidth: 420,
		innerHeight: 400
	}, "JS-CMD.MXW");
	jscmd();
	hidemenu();
	return new Task($win, "JS-CMD.MX7");
}

function TaskMngr() {
	let $win = new $EmbedWindow2({
		src: "./A/Program Files/Task Manager/index.html",
		icons: Window_icons("Task"),
		title: "Task Manager",
		innerWidth: 420,
		innerHeight: 400
	}, "Task.MXW");
	TaskMgr();
	updateTaskList();
	setInterval(updateTaskList, 2000);
	hidemenu();
	return new Task($win, "Task.MX7");
}

function Chat() {
	let $win = make_embed_window({
		src: "./A/Program%20Files/chat/index.php",
		icons: Window_icons("Chat"),
		title: "Chat Room",
		innerWidth: 1000,
		innerHeight: 500
	}, "Chat-Room.MXW");
	hidemenu();
	return new Task($win, "Chat-Room.MX7");
}

function WadCMD() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/WadCMD/index.html",
		icons: Window_icons("WadCMD"),
		title: "WadCMD",
		innerWidth: 1000,
		innerHeight: 515
	}, "WadCMD.MXW");
	hidemenu();
	return new Task($win, "WadCMD.MX7");
}

function Theme1() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files/ThemeEditor/index.html",
		icons: Window_icons("themes"),
		title: "Theme Editor",
		innerWidth: 1000,
		innerHeight: 500
	}, "Theme-Editor.MXW");
	hidemenu();
	return new Task($win, "Theme-Editor.MX7");
}

function Cookie() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Cookies/index.html",
		icons: Window_icons("Cookie"),
		title: "Cookie Clicker",
		innerWidth: 660,
		innerHeight: 500
	}, "Cookie-Clicker.MXW");
	hidemenu();
	return new Task($win, "Cookie-Clicker.MX7");
}

function JellyM() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/mario/jellymar.io/index.html",
		icons: Window_icons("Mario"),
		title: "Jelly Mario",
		innerWidth: 800,
		innerHeight: 650
	}, "Jelly-Mario.MXW");
	hidemenu();
	return new Task($win, "Jelly-Mario.MX7");
}

function MinecrapA() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Minecraft/MineCrap Alpha/index.html",
		icons: Window_icons("Minecraft"),
		title: "MineCrap Alpha",
		innerWidth: 1000,
		innerHeight: 500
	}, "MineCrap-Alpha.MXW");
	hidemenu();
	return new Task($win, "MineCrap-Alpha.MX7");
}

function Minecrap3() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Minecraft/MineCrap 1.3/index.html",
		icons: Window_icons("Minecraft"),
		title: "MineCrap 1.3",
		innerWidth: 1000,
		innerHeight: 500
	}, "MineCrap-1.3.MXW");
	hidemenu();
	return new Task($win, "MineCrap-1.3.MX7");
}

function Minecrap5() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Minecraft/MineCrap 1.5.2/index.html",
		icons: Window_icons("Minecraft"),
		title: "MineCrap 1.5.2",
		innerWidth: 1000,
		innerHeight: 500
	}, "MineCrap-1.5.2-MXW");
	hidemenu();
	return new Task($win, "MineCrap-1.5.2-MX7");
}

function NoGame() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/NoGame/index.html",
		icons: Window_icons("NoGame"),
		title: "There is No Game",
		innerWidth: 500,
		innerHeight: 500
	}, "There-is-No-Game.MXW");
	hidemenu();
	return new Task($win, "There-is-No-Game.MX7");
}

function Power() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Power_Player_Super_Joy_III/index.html",
		icons: Window_icons("Power"),
		title: "Power Player Super Joy III",
		innerWidth: 500,
		innerHeight: 500
	}, "");
	hidemenu();
	return new Task($win, "");
}

function Baldi() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Baldis%20Basics/index.html",
		icons: Window_icons("Baldi"),
		title: "Baldi's Basics",
		innerWidth: 500,
		innerHeight: 500
	}, "Baldi's-Basics.MXW");
	hidemenu();
	return new Task($win, "Baldi's-Basics.MX7");
}

function Rioluvania() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Sans/Rioluvania/index.html",
		icons: Window_icons("Rioluvania"),
		title: "Rioluvania",
		innerWidth: 500,
		innerHeight: 500
	}, "Rioluvania.MXW");
	hidemenu();
	return new Task($win, "Rioluvania.MX7");
}

function Sans() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Sans/Sans/index.html",
		icons: Window_icons("Sans"),
		title: "Sans Fight",
		innerWidth: 500,
		innerHeight: 500
	}, "Sans-Fight.MXW");
	hidemenu();
	return new Task($win, "Sans-Fight.MX7");
}

function Funky() {
	toast({
		message: "Funky Karts is deprecated"
	})
}

function Mario2() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/Mario/super.html",
		icons: Window_icons("Mario"),
		title: "Super Mario Bros.",
		innerWidth: 1000,
		innerHeight: 500
	}, "Super-Mario-Bros.MXW");
	hidemenu();
	return new Task($win, "Super-Mario-Bros.MX7");
}

function MarMakr() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/Mario/maker.html",
		icons: Window_icons("Mario"),
		title: "Super Mario Maker",
		innerWidth: 1000,
		innerHeight: 500
	}, "Super-Mario-Maker.MXW");
	hidemenu();
	return new Task($win, "Super-Mario-Maker.MX7");
}

function iMario() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/infinite/index.html",
		icons: Window_icons("Mario"),
		title: "Infinite Mario",
		innerWidth: 660,
		innerHeight: 500
	}, "Infinite-Mario.MXW");
	hidemenu();
	return new Task($win, "Infinite-Mario.MX7");
}

function TBOI() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/TBOI/index.html",
		icons: Window_icons("TBOI"),
		title: "The Binding of Isaac",
		innerWidth: 970,
		innerHeight: 696
	}, "The-Binding-of-Isaac.MXW");
	hidemenu();
	return new Task($win, "The-Binding-of-Isaac.MX7");
}

function Rocket() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Rocket Custa/index.html",
		icons: Window_icons("Rocket"),
		title: "Rocket Custa",
		innerWidth: 500,
		innerHeight: 500
	}, "Rocket-Custa.MXW");
	hidemenu();
	return new Task($win, "Rocket-Custa.MX7");
}

function Spelunky() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Spelunky/index.html",
		icons: Window_icons("Spelunky"),
		title: "Spelunky",
		innerWidth: 1000,
		innerHeight: 500
	}, "Spelunky.MXW");
	hidemenu();
	return new Task($win, "Spelunky.MX7");
}

function Button() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files/Button/index.html",
		icons: Window_icons("Button"),
		title: "Button",
		innerWidth: 300,
		innerHeight: 300
	}, "Button.MXW");
	hidemenu();
	return new Task($win, "Button.MX7");
}

function Clock() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files/Clock/index.html",
		icons: Window_icons("Clock"),
		title: "Clock",
		innerWidth: 500,
		innerHeight: 500
	}, "Clock.MXW");
	hidemenu();
	return new Task($win, "Clock.MX7");
}

function AcidBox() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/Acid-Box/index.html",
		icons: Window_icons("AcidBox"),
		title: "Acid Box",
		innerWidth: 1000,
		innerHeight: 500
	}, "Acid-Box.MXW");
	hidemenu();
	return new Task($win, "Acid-Box.MX7");
}

function Star() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files/StrWrz/index.html",
		icons: Window_icons("Starwars"),
		title: "Star Wars Episode IV",
		innerWidth: 830,
		innerHeight: 500
	}, "Star-Wars-Episode-IV.MXW");
	hidemenu();
	return new Task($win, "Star-Wars-Episode-IV.MX7");
}

function Zamboni() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Zamboni/index.html",
		icons: Window_icons("Zamboni"),
		title: "Frank Zamboni",
		innerWidth: 670,
		innerHeight: 292
	}, "Zamboni.MXW");
	hidemenu();
	return new Task($win, "Zamboni.MX7");
}

function Soda() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files/Soda/index.htm",
		icons: Window_icons("Soda"),
		title: "Vending Machine",
		innerWidth: 500,
		innerHeight: 500
	}, "Vending-Machine.MXW");
	hidemenu();
	return new Task($win, "Vending-Machine.MX7");
}

function Prometheus() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Prometheus/index.html",
		icons: Window_icons("Emu"),
		title: "Prometheus",
		innerWidth: 1000,
		innerHeight: 500
	}, "Prometheus.MXW");
	hidemenu();
	return new Task($win, "Prometheus.MX7");
}

function Kronos() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Kronos/index.html",
		icons: Window_icons("Emu"),
		title: "Kronos",
		innerWidth: 1000,
		innerHeight: 500
	}, "Kronos.MXW");
	hidemenu();
	return new Task($win, "Kronos.MX7");
}

function Drift() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Drift Hunters/index.html",
		icons: Window_icons("Drift"),
		title: "Drift Hunters",
		innerWidth: 1000,
		innerHeight: 600
	}, "Drift-Hunters.MXW");
	hidemenu();
	return new Task($win, "Drift-Hunters.MX7");
}

function Surf1() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/SURF/S.U.R.F%201.0/index.html",
		icons: Window_icons("Surf"),
		title: "Microsoft Surf 1.0",
		innerWidth: 1000,
		innerHeight: 600
	}, "Microsoft-Surf-1.0.MXW");
	hidemenu();
	return new Task($win, "Microsoft-Surf-1.0.MX7");
}

function Surf2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/SURF/S.U.R.F%202.0/index.html",
		icons: Window_icons("Surf"),
		title: "Microsoft Surf 2.0",
		innerWidth: 1000,
		innerHeight: 600
	}, "Microsoft-Surf-2.0.MXW");
	hidemenu();
	return new Task($win, "Microsoft-Surf-2.0.MX7");
}

function Surf3() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/SURF/S.U.R.F%203.0/index.html",
		icons: Window_icons("Surf"),
		title: "Microsoft Surf 3.0",
		innerWidth: 1000,
		innerHeight: 600
	}, "Microsoft-Surf-3.0.MXW");
	hidemenu();
	return new Task($win, "Microsoft-Surf-3.0.MX7");
}

function Hex() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Race/index.html",
		icons: Window_icons("Hex"),
		title: "Hex GL",
		innerWidth: 500,
		innerHeight: 500
	}, "Hex-GL.MXW");
	hidemenu();
	return new Task($win, "Hex-GL.MX7");
}

function Box() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Boxel%20Rebound/index.html",
		icons: Window_icons("Box"),
		title: "Boxel Rebound",
		innerWidth: 360,
		innerHeight: 640
	}, "Boxel-Rebound.MXW");
	hidemenu();
	return new Task($win, "Boxel-Rebound.MX7");
}

function Doom2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom2/Doom2.exe.html",
		icons: Window_icons("Doom2"),
		title: "Doom 2",
		innerWidth: 665,
		innerHeight: 436
	}, "Doom-2.MXW");
	hidemenu();
	return new Task($win, "Doom-2.MX7");
}

function Master() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Master/Master.exe.html",
		icons: Window_icons("Master"),
		title: "The Master Levels for Doom 2",
		innerWidth: 665,
		innerHeight: 436
	}, "The-Master-Levels-for-Doom-2.MXW");
	hidemenu();
	return new Task($win, "The-Master-Levels-for-Doom-2.MX7");
}

function UD2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/UD2/UD2.exe.html",
		icons: Window_icons("UD2"),
		title: "The Ultimate Doom 2",
		innerWidth: 665,
		innerHeight: 436
	}, "The-Ultimate-Doom-2.MXW");
	hidemenu();
	return new Task($win, "The-Ultimate-Doom-2.MX7");
}


function StarDoom() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/StarWars/StarWars.exe.html",
		icons: Window_icons("SDoom"),
		title: "Star Wars Doom",
		innerWidth: 665,
		innerHeight: 436
	}, "Star-Wars-Doom.MXW");
	hidemenu();
	return new Task($win, "Star-Wars-Doom.MX7");
}

function BatDoom() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Batman/Batman.exe.html",
		icons: Window_icons("Batman"),
		title: "Batman Doom",
		innerWidth: 665,
		innerHeight: 436
	}, "Batman-Doom.MXW");
	hidemenu();
	return new Task($win, "Batman-Doom.MX7");
}

function BDoom2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Brutal/Brutal.exe.html",
		icons: Window_icons("BDoom"),
		title: "Brutal Doom 2",
		innerWidth: 665,
		innerHeight: 436
	}, "Brutal-Doom-2.MXW");
	hidemenu();
	return new Task($win, "Brutal-Doom-2.MX7");
}

function Nine() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/95/95.exe.html",
		icons: Window_icons("95"),
		title: "Windows 95",
		innerWidth: 665,
		innerHeight: 436
	}, "Windows-95.MXW");
	hidemenu();
	return new Task($win, "Windows-95.MX7");
}

function Duke() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Duke/Duke.exe.html",
		icons: Window_icons("Duke"),
		title: "Duke Nukem 3D",
		innerWidth: 665,
		innerHeight: 436
	}, "Duke-Nukem-3D.MXW");
	hidemenu();
	return new Task($win, "Duke-Nukem-3D.MX7");
}

function GTA() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/GTA/GTA.exe.html",
		icons: Window_icons("GTA"),
		title: "Grand Theft Auto",
		innerWidth: 665,
		innerHeight: 436
	}, "Grand-Theft-Auto.MXW");
	hidemenu();
	return new Task($win, "Grand-Theft-Auto.MX7");
}

function DTrail() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Trail/Oregon.exe.html",
		icons: Window_icons("Oregon"),
		title: "Deluxe Oregon Trail",
		innerWidth: 665,
		innerHeight: 436
	}, "Deluxe-Oregon-Trail.MXW");
	hidemenu();
	return new Task($win, "Deluxe-Oregon-Trail.MX7");
}

function Trail() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Trail2/Oregon.exe.html",
		icons: Window_icons("Trail"),
		title: "Oregon Trail",
		innerWidth: 665,
		innerHeight: 436
	}, "Oregon-Trail.MXW");
	hidemenu();
	return new Task($win, "Oregon-Trail.MX7");
}

function Castle() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/CW/CW.exe.html",
		icons: Window_icons("Castle"),
		title: "Castle Wolfenstein",
		innerWidth: 665,
		innerHeight: 436
	}, "Castle-Wolfenstein.MXW");
	hidemenu();
	return new Task($win, "Castle-Wolfenstein.MX7");
}

function Doom() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom/Doom.exe.html",
		icons: Window_icons("Doom"),
		title: "Ultimate Doom",
		innerWidth: 665,
		innerHeight: 436
	}, "Ultimate-Doom.MXW");
	hidemenu();
	return new Task($win, "Ultimate-Doom.MX7");
}

function Heretic() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Heretic/Heretic.exe.html",
		icons: Window_icons("Heretic"),
		title: "Heretic",
		innerWidth: 665,
		innerHeight: 436
	}, "Heretic.MXW");
	hidemenu();
	return new Task($win, "Heretic.MX7");
}

function Heretic2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Heretic2/Heretic2.exe.html",
		icons: Window_icons("Heretic2"),
		title: "Heretic 2",
		innerWidth: 665,
		innerHeight: 436
	}, "Heretic-2.MXW");
	hidemenu();
	return new Task($win, "Heretic-2.MX7");
}

function Hexen() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Hexen/Hexen.exe.html",
		icons: Window_icons("Hexen"),
		title: "Hexen",
		innerWidth: 665,
		innerHeight: 436
	}, "Hexen.MXW");
	hidemenu();
	return new Task($win, "Hexen.MX7");
}

function Plutonia() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Plutonia/Plutonia.exe.html",
		icons: Window_icons("Plutonia"),
		title: "The-Plutonia-Experiment.MXW",
		innerWidth: 665,
		innerHeight: 436
	}, "The-Plutonia-Experiment.MXW");
	hidemenu();
	return new Task($win, "The-Plutonia-Experiment.MX7");
}

function Plutonia2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Plutonia2/PL2.exe.html",
		icons: Window_icons("Plutonia2"),
		title: "The Plutonia Experiment 2",
		innerWidth: 665,
		innerHeight: 436
	}, "The-Plutonia-Experiment-2.MXW");
	hidemenu();
	return new Task($win, "The-Plutonia-Experiment-2.MX7");
}

function TNT() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/TNT/TNT.exe.html",
		icons: Window_icons("FDoom"),
		title: "TNT Evilution",
		innerWidth: 665,
		innerHeight: 436
	}, "TNT-Evilution.MXW");
	hidemenu();
	return new Task($win, "TNT-Evilution.MX7");
}

function Sixty() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom64/64.exe.html",
		icons: Window_icons("64"),
		title: "Doom64",
		innerWidth: 665,
		innerHeight: 436
	}, "Doom-64.MXW");
	hidemenu();
	return new Task($win, "Doom-64.MX7");
}

function Zero() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Zero/Zero.exe.html",
		icons: Window_icons("Zero"),
		title: "Doom Zero",
		innerWidth: 665,
		innerHeight: 436
	}, "Doom-Zero.MXW");
	hidemenu();
	return new Task($win, "Doom-64.MX7");
}

function Quake() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Quake/Quake.exe.html",
		icons: Window_icons("Quake"),
		title: "Quake",
		innerWidth: 665,
		innerHeight: 436
	}, "Quake.MXW");
	hidemenu();
	return new Task($win, "Quake.MX7");
}

function QuakeM1() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/QuakeM1/Quake.exe.html",
		icons: Window_icons("Q1M"),
		title: "Quake Mission Pack 1",
		innerWidth: 665,
		innerHeight: 436
	}, "Quake-Mission-Pack-1.MXW");
	hidemenu();
	return new Task($win, "Quake-Mission-Pack-1.MX7");
}

function QuakeM2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/QuakeM2/Quake.exe.html",
		icons: Window_icons("Q1M"),
		title: "Quake Mission Pack 2",
		innerWidth: 665,
		innerHeight: 436
	}, "Quake-Mission-Pack-2.MXW");
	hidemenu();
	return new Task($win, "Quake-Mission-Pack-2.MX7");
}

function Quake2() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/Quake2-PlayN-MagnusPort/index.html",
		icons: Window_icons("Quake2"),
		title: "Quake 2",
		innerWidth: 1000,
		innerHeight: 500
	}, "Quake-2.MXW");
	hidemenu();
	return new Task($win, "Quake-2.MX7");
}

function Shool() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/School/School.exe.html",
		icons: Window_icons("School"),
		title: "Doom: School Shooter Edition",
		innerWidth: 665,
		innerHeight: 436
	}, "Doom:-School-Shooter-Edition.MXW");
	hidemenu();
	return new Task($win, "Doom:-School-Shooter-Edition.MX7");
}

function Spear() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Spear/Spear.exe.html",
		icons: Window_icons("Spear"),
		title: "Spear of Destiny",
		innerWidth: 665,
		innerHeight: 436
	}, "Spear-of-Destiny.MXW");
	hidemenu();
	return new Task($win, "Spear-of-Destiny.MX7");
}

function Rekkr() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Rekkr/Rekkr.exe.html",
		icons: Window_icons("Rekkr"),
		title: "Rekkr",
		innerWidth: 665,
		innerHeight: 436
	}, "Rekkr.MXW");
	hidemenu();
	return new Task($win, "Rekkr.MX7");
}

function Strife() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Strife/Strife.exe.html",
		icons: Window_icons("Strife"),
		title: "Strife",
		innerWidth: 665,
		innerHeight: 436
	}, "Strife.MXW");
	hidemenu();
	return new Task($win, "Strife.MX7");
}

function FreeDm() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/FreeDM/FreeDM.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDM",
		innerWidth: 665,
		innerHeight: 436
	}, "FreeDoom.MXW");
	hidemenu();
	return new Task($win, "FreeDoom.MX7");
}

function Free1() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/free1/FreeDoom.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: Phase 1",
		innerWidth: 665,
		innerHeight: 436
	}, "FreeDoom:-Phase-1.MXW");
	hidemenu();
	return new Task($win, "FreeDoom:-Phase-1.MX7");
}

function Free2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/free2/FreeDoom2.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: Phase 2",
		innerWidth: 665,
		innerHeight: 436
	}, "FreeDoom:-Phase-2.MXW");
	hidemenu();
	return new Task($win, "FreeDoom:-Phase-2.MX7");
}

function FDoom() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom/FDoom.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "The Ultimate FreeDoom",
		innerWidth: 665,
		innerHeight: 436
	}, "The-Ultimate-FreeDoom.MXW");
	hidemenu();
	return new Task($win, "The-Ultimate-FreeDoom.MX7");
}

function FDoom2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom2/FDoom2.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom Phase 2: Hell on Earth",
		innerWidth: 665,
		innerHeight: 436
	}, "FreeDoom-Phase-2:-Hell-on-Earth.MXW");
	hidemenu();
	return new Task($win, "FreeDoom-Phase-2:-Hell-on-Earth.MX7");
}

function FDoom64() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom64/F64.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom 64",
		innerWidth: 665,
		innerHeight: 436
	}, "FreeDoom-64.MXW");
	hidemenu();
	return new Task($win, "FreeDoom-64.MX7");
}

function FTNT() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/TNT/FTNT.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: TNT Evilution",
		innerWidth: 665,
		innerHeight: 436
	}, "FreeDoom:-TNT-Evilution.MXW");
	hidemenu();
	return new Task($win, "FreeDoom:-TNT-Evilution.MX7");
}

function FPL() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Plutonia/FPlutonia.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: The Plutonia Experiment",
		innerWidth: 665,
		innerHeight: 436
	}, "FreeDoom:-The-Plutonia-Experiment.MXW");
	hidemenu();
	return new Task($win, "FreeDoom:-The-Plutonia-Experiment.MX7");
}

function FPL2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Plutonia2/FPl2.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: The Plutonia Experiment Phase 2",
		innerWidth: 665,
		innerHeight: 436
	}, "FreeDoom:-The-Plutonia-Experiment-Phase-2.MXW");
	hidemenu();
	return new Task($win, "FreeDoom:-The-Plutonia-Experiment-Phase-2.MX7");
}

function FChex() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex1/FChex.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: Chex Quest Phase 1",
		innerWidth: 665,
		innerHeight: 436
	}, "FreeDoom:-Chex-Quest-Phase-1.MXW");
	hidemenu();
	return new Task($win, "FreeDoom:-Chex-Quest-Phase-1.MX7");
}

function FChex2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex2/FChex.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: Chex Quest Phase 2",
		innerWidth: 665,
		innerHeight: 436
	}, "FreeDoom:-Chex-Quest-Phase-2.MXW");
	hidemenu();
	return new Task($win, "FreeDoom:-Chex-Quest-Phase-2.MX7");
}

function FChex3() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex3/FChex.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: Chex Quest Phase 3",
		innerWidth: 665,
		innerHeight: 436
	}, "FreeDoom:-Chex-Quest-Phase-3.MXW");
	hidemenu();
	return new Task($win, "FreeDoom:-Chex-Quest-Phase-3.MX7");
}

function Wolf3D() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Wolf3D/Wolf.exe.html",
		icons: Window_icons("Wolf"),
		title: "Wolfenstein 3D",
		innerWidth: 665,
		innerHeight: 436
	}, "Wolfenstein-3D.MXW");
	hidemenu();
	return new Task($win, "Wolfenstein-3D.MX7");
}

function BTSX() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/BTSX/BTSX.exe.html",
		icons: Window_icons("BTSX"),
		title: "Back to Saturn X",
		innerWidth: 665,
		innerHeight: 436
	}, "Back-to-Saturn-X.MXW");
	hidemenu();
	return new Task($win, "Back-to-Saturn-X.MX7");
}

function BTSX2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/BTSX2/BTSX2.exe.html",
		icons: Window_icons("BTSX"),
		title: "Back to Saturn X 2",
		innerWidth: 665,
		innerHeight: 436
	}, "Back-to-Saturn-X-2.MXW");
	hidemenu();
	return new Task($win, "Back-to-Saturn-X-2.MX7");
}

function Chex1() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex1/Chex.exe.html",
		icons: Window_icons("Chex"),
		title: "Chex Quest 1",
		innerWidth: 665,
		innerHeight: 436
	}, "Chex-Quest-1.MXW");
	hidemenu();
	return new Task($win, "Chex-Quest-1.MX7");
}

function Chex2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex2/Chex.exe.html",
		icons: Window_icons("Chex2"),
		title: "Chex Quest 2",
		innerWidth: 665,
		innerHeight: 436
	}, "Chex-Quest-2.MXW");
	hidemenu();
	return new Task($win, "Chex-Quest-2.MX7");
}

function Chex3() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex3/Chex.exe.html",
		icons: Window_icons("Chex3"),
		title: "Chex Quest 3",
		innerWidth: 665,
		innerHeight: 436
	}, "Chex-Quest-3.MXW");
	hidemenu();
	return new Task($win, "Chex-Quest-3.MX7");
}

function Doom2D() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom2D/Doom2D.exe.html",
		icons: Window_icons("2D"),
		title: "Doom 2D",
		innerWidth: 665,
		innerHeight: 436
	}, "Doom-2D.MXW");
	hidemenu();
	return new Task($win, "Doom-2D.MX7");
}

function Dario1() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Mario/Mario.exe.html",
		icons: Window_icons("Dario"),
		title: "Mario Doom",
		innerWidth: 665,
		innerHeight: 436
	}, "Mario-Doom.MXW");
	hidemenu();
	return new Task($win, "Mario-Doom.MX7");
}

function Dario2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Mario2/Mario2.exe.html",
		icons: Window_icons("Dario"),
		title: "Mario Doom 2",
		innerWidth: 665,
		innerHeight: 436
	}, "Mario-Doom-2.MXW");
	hidemenu();
	return new Task($win, "Mario-Doom-2.MX7");
}

function CDG() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/index.html",
		icons: Window_icons("Dino"),
		title: "Chrome Dino Games",
		innerWidth: 1000,
		innerHeight: 500
	}, "Chrome-Dino-Games.MXW");
	hidemenu();
	return new Task($win, "Chrome-Dino-Games.MX7");
}

function D3D() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/3D/index.html",
		icons: Window_icons("Dino"),
		title: "3D Dino",
		innerWidth: 1000,
		innerHeight: 500
	}, "3D-Dino.MXW");
	hidemenu();
	return new Task($win, "3D-Dino.MX7");
}

function Cat() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/Catmario/chrome/index.html",
		icons: Window_icons("Mario"),
		title: "Cat Mario",
		innerWidth: 500,
		innerHeight: 500
	}, "Cat-Mario.MXW");
	hidemenu();
	return new Task($win, "Cat-Mario.MX7");
}

function Mari0() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/Mari0/index.html",
		icons: Window_icons("Mario"),
		title: "Mari0",
		innerWidth: 800,
		innerHeight: 600
	}, "Mari0.MXW");
	hidemenu();
	return new Task($win, "Mari0.MX7");
}

function D4() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom4/Doom4.exe.html",
		icons: Window_icons("4"),
		title: "Doom 4",
		innerWidth: 665,
		innerHeight: 436
	}, "Doom-4.MXW");
	hidemenu();
	return new Task($win, "Doom-4.MX7");
}

function SMWDX() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/SMWDX/SMWDX.exe.html",
		icons: Window_icons("Mario"),
		title: "Super Mario World Deluxe",
		innerWidth: 665,
		innerHeight: 436
	}, "Super-Mario-World-Deluxe.MXW");
	hidemenu();
	return new Task($win, "Super-Mario-World-Deluxe.MX7");
}

function Ice() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Ice/ICE%201.0/index.html",
		icons: Window_icons("Ice"),
		title: "Ice Dodo 1.0",
		innerWidth: 500,
		innerHeight: 500
	}, "Ice-Dodo-1.0.MXW");
	hidemenu();
	return new Task($win, "Ice-Dodo-1.0.MX7");
}

function Ice2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Ice/ICE%202.0/index.html",
		icons: Window_icons("Ice"),
		title: "Ice Dodo 2.0",
		innerWidth: 500,
		innerHeight: 500
	}, "Ice-Dodo-2.0.MXW");
	hidemenu();
	return new Task($win, "Ice-Dodo-2.0.MX7");
}

function Contranoid() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Brain Games/Contranoid/index.html",
		icons: Window_icons("Contranoid"),
		title: "Contranoid",
		innerWidth: 392,
		innerHeight: 539
	}, "Contranoid.MXW");
	hidemenu();
	return new Task($win, "Contranoid.MX7");
}

function Hi() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Brain Games/Oh Hi/index.html",
		icons: Window_icons("0HH1"),
		title: "OH H1",
		innerWidth: 500,
		innerHeight: 500
	}, "OH-H1.MXW");
	hidemenu();
	return new Task($win, "OH-H1.MX7");
}

function No() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Brain Games/Oh No/index.html",
		icons: Window_icons("0HN0"),
		title: "OH N0",
		innerWidth: 500,
		innerHeight: 500
	}, "OH-N0.MXW");
	hidemenu();
	return new Task($win, "OH-N0.MX7");
}

function Quento() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Brain Games/Quento/index.html",
		icons: Window_icons("Quento"),
		title: "Quento",
		innerWidth: 500,
		innerHeight: 621
	}, "Quento.MXW");
	hidemenu();
	return new Task($win, "Quento.MX7");
}

function Hextris() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Brain Games/Hextris/index.html",
		icons: Window_icons("Hextris"),
		title: "Hextris",
		innerWidth: 500,
		innerHeight: 500
	}, "Hextris.MXW");
	hidemenu();
	return new Task($win, "Hextris.MX7");
}

function Pac() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/PacMan/PacMan/index.html",
		icons: Window_icons("Pacman"),
		title: "PacMan 1.0",
		innerWidth: 500,
		innerHeight: 500
	}, "PacMan-1.0.MXW");
	hidemenu();
	return new Task($win, "PacMan-1.0.MX7");
}

function Google1() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/PacMan/google pacman/index.html",
		icons: Window_icons("Pacman"),
		title: "Google PacMan 1.2",
		innerWidth: 1000,
		innerHeight: 500
	}, "Google-PacMan-1.2.MXW");
	hidemenu();
	return new Task($win, "Google-PacMan-1.2.MX7");
}

function Google2() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/PacMan/google pacman 2/index.html",
		icons: Window_icons("Pacman"),
		title: "Google PacMan 1.0",
		innerWidth: 1000,
		innerHeight: 500
	}, "Google-PacMan-1.0.MXW");
	hidemenu();
	return new Task($win, "Google-PacMan-1.0.MX7");
}

function Snake() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/snake.html",
		icons: Window_icons("Snake"),
		title: "Snake",
		innerWidth: 500,
		innerHeight: 500
	}, "Snake.MXW");
	hidemenu();
	return new Task($win, "Snake.MX7");
}

function Pong() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/Pong/index.html",
		icons: Window_icons("Pong"),
		title: "Pong",
		innerWidth: 660,
		innerHeight: 505
	}, "Pong.MXW");
	hidemenu();
	return new Task($win, "Pong.MX7");
}

function Tetriz() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/tetris/tetris.html",
		icons: Window_icons("Tetris"),
		title: "Tetris 1.0",
		innerWidth: 500,
		innerHeight: 621
	}, "Tetris-1.0.MXW");
	hidemenu();
	return new Task($win, "Tetris-1.0.MX7");
}

function Cubes() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/tetris/cubes/index.html",
		icons: Window_icons("Tetris"),
		title: "Tetris 2.0",
		innerWidth: 500,
		innerHeight: 621
	}, "Tetris-2.0.MXW");
	hidemenu();
	return new Task($win, "Tetris-2.0.MX7");
}

function Jelly() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/tetris/Jelly/index.html",
		icons: Window_icons("Tetris"),
		title: "Jelly Tetris",
		innerWidth: 500,
		innerHeight: 621
	}, "Jelly-Tetris.MXW");
	hidemenu();
	return new Task($win, "Jelly-Tetris.MX7");
}

function AIT() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/tetris/AI/index.html",
		icons: Window_icons("Tetris"),
		title: "AI Tetris",
		innerWidth: 500,
		innerHeight: 621
	}, "AI-Tetris.MXW");
	hidemenu();
	return new Task($win, "AI-Tetris.MX7");
}

function SpaceI() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/Space/index.html",
		icons: Window_icons("Space"),
		title: "Space Invaders",
		innerWidth: 850,
		innerHeight: 560
	}, "Space-Invaders.MXW");
	hidemenu();
	return new Task($win, "Space-Invaders.MX7");
}

function Twenty() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/2048/index.html",
		icons: Window_icons("2048"),
		title: "2048",
		innerWidth: 500,
		innerHeight: 500
	}, "2048.MXW");
	hidemenu();
	return new Task($win, "2048.MX7");
}

function One() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/Flappy-2048/index.html",
		icons: Window_icons("2048"),
		title: "Flappy 2048 1.0",
		innerWidth: 500,
		innerHeight: 500
	}, "Flappy-2048-1.0.MXW");
	hidemenu();
	return new Task($win, "Flappy-2048-1.0.MX7");
}

function Two() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/Flappy-2048-2.0/index.html",
		icons: Window_icons("2048"),
		title: "Flappy 2048 2.0",
		innerWidth: 500,
		innerHeight: 500
	}, "Flappy-2048-2.0.MXW");
	hidemenu();
	return new Task($win, "Flappy-2048-2.0.MX7");
}

function Three() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/2048-3D/index.html",
		icons: Window_icons("2048"),
		title: "2048 3D",
		innerWidth: 1000,
		innerHeight: 500
	}, "2048-3D.MXW");
	hidemenu();
	return new Task($win, "2048-3D.MX7");
}

function Four() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/4/index.html",
		icons: Window_icons("2048"),
		title: "4",
		innerWidth: 500,
		innerHeight: 500
	}, "4.MXW");
	hidemenu();
	return new Task($win, "4.MX7");
}

function AI() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/2048-AI/index.html",
		icons: Window_icons("2048"),
		title: "2048 AI",
		innerWidth: 1000,
		innerHeight: 650
	}, "2048-AI.MXW");
	hidemenu();
	return new Task($win, "2048-AI.MX7");
}

function Hardcore() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/2048-Hardcore/index.html",
		icons: Window_icons("2048"),
		title: "2048 Hardcore",
		innerWidth: 500,
		innerHeight: 500
	}, "2048-Hardcore.MXW");
	hidemenu();
	return new Task($win, "2048-Hardcore.MX7");
}

function Gore() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/GoreScript/index.html",
		icons: Window_icons("Gore"),
		title: "GoreScript Classic",
		innerWidth: 1000,
		innerHeight: 650
	}, "GoreScript-Classic.MXW");
	hidemenu();
	return new Task($win, "GoreScript-Classic.MX7");
}

function VLC() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/VLC-Media-Web-Player/index.html",
		icons: Window_icons("VLC"),
		title: "VLC Media Player",
		innerWidth: 1000,
		innerHeight: 650
	}, "VLC-Media-Player.MXW");
	hidemenu();
	return new Task($win, "VLC-Media-Player.MX7");
}

function Notepad(file_path) {
	var document_title = file_path ? file_name_from_path(file_path) : "Untitled";
	var win_title = document_title + " - Notepad";
	var $win = make_embed_window({
		src: "./A/Program Files/notepad/index.html" + (file_path ? ("?path=" + file_path) : ""),
		icons: Window_icons("notepad"),
		title: win_title,
		outerWidth: 480,
		outerHeight: 321,
		resizable: true,
	}, "Notepad.MXW");
	hidemenu();
	return new Task($win, "Notepad.MX7");
}
Notepad.acceptsFilePaths = true;

function Paint(file_path) {
	var $win = make_embed_window({
		src: "./A/Program Files/jspaint/index.html",
		icons: Window_icons("paint"),
		title: "untitled - Paint",
		innerWidth: 500,
		innerHeight: 500
	}, "Paint.MXW");
	var contentWindow = $win.$embed[0].contentWindow;
	var waitUntil = function (test, interval, callback) {
		if (test()) {
			callback();
		} else {
			setTimeout(waitUntil, interval, test, interval, callback);
		}
	};

	const systemHooks = {
		readBlobFromHandle: (file_path) => {
			return new Promise((resolve, reject) => {
				withFilesystem(() => {
					var fs = BrowserFS.BFSRequire("fs");
					fs.readFile(file_path, (err, buffer) => {
						if (err) {
							return reject(err);
						}
						const byte_array = new Uint8Array(buffer);
						const blob = new Blob([byte_array]);
						const file_name = file_path.replace(/.*\//g, "");
						const file = new File([blob], file_name);
						resolve(file);
					});
				});
			});
		},
		writeBlobToHandle: async (file_path, blob) => {
			const arrayBuffer = await blob.arrayBuffer();
			return new Promise((resolve, reject) => {
				withFilesystem(() => {
					const fs = BrowserFS.BFSRequire("fs");
					const {
						Buffer
					} = BrowserFS.BFSRequire("buffer");
					const buffer = Buffer.from(arrayBuffer);
					fs.writeFile(file_path, buffer, (err) => {
						if (err) {
							return reject(err);
						}
						resolve();
					});
				});
			});
		},
		setWallpaperCentered: (canvas) => {
			canvas.toBlob((blob) => {
				setDesktopWallpaper(blob, "no-repeat", true);
			});
		},
		setWallpaperTiled: (canvas) => {
			canvas.toBlob((blob) => {
				setDesktopWallpaper(blob, "repeat", true);
			});
		},
	};
	waitUntil(() => contentWindow.systemHooks, 500, () => {
		Object.assign(contentWindow.systemHooks, systemHooks);
		if (file_path) {
			systemHooks.readBlobFromHandle(file_path).then(file => {
				if (file) {
					contentWindow.open_from_file(file, file_path);
				}
			}, (error) => {
				contentWindow.show_error_message(`Failed to open file ${file_path}`, error);
			});
		}

		var old_update_title = contentWindow.update_title;
		contentWindow.update_title = () => {
			old_update_title();
			$win.title(contentWindow.document.title);
		};
	});
	hidemenu();
	return new Task($win, "Paint.MX7");
}
Paint.acceptsFilePaths = true;

function Minesweeper() {
	var $win = make_embed_window({
		src: "./A/Program Files/minesweeper/index.html",
		icons: Window_icons("minesweeper"),
		title: "Minesweeper",
		innerWidth: 280,
		innerHeight: 320 + 21,
		resizable: false,
	}, "Minesweeper.MXW");
	hidemenu();
	return new Task($win, "Minesweeper.MX7");
}

function SoundRecorder(file_path) {
	var document_title = file_path ? file_name_from_path(file_path) : "Sound";
	var win_title = document_title + " - Sound Recorder";
	var $win = make_embed_window({
		src: "./A/Program Files/sound-recorder/index.html" + (file_path ? ("?path=" + file_path) : ""),
		icons: Window_icons("speaker"),
		title: win_title,
		innerWidth: 270,
		innerHeight: 108 + 21,
		minInnerWidth: 270,
		minInnerHeight: 108 + 21,
	}, "Sound-Recorder.MXW");
	hidemenu();
	return new Task($win, "Sound-Recorder.MX7");
}
SoundRecorder.acceptsFilePaths = true;

function Solitaire() {
	var $win = make_embed_window({
		src: "./A/Program Files/Solitaire/index.html",
		icons: Window_icons("Solitaire"),
		title: "Solitaire",
		innerWidth: 585,
		innerHeight: 384 + 21,
	}, "Solitaire.MXW");
	hidemenu();
	return new Task($win, "Solitaire.MX7");
}

function showScreensaver(embedSrc) {
	const mouseDistanceToExit = 15;
	const $embed = $("<embed>").attr("src", embedSrc);
	const $backing = $("<div>");
	$backing.css({
		position: "fixed",
		left: 0,
		top: 0,
		width: "100%",
		height: "100%",
		zIndex: $Window.Z_INDEX + 9998,
		cursor: "none",
		backgroundColor: "black",
	});
	$embed.css({
		position: "fixed",
		left: 0,
		top: 0,
		width: "100%",
		height: "100%",
		zIndex: $Window.Z_INDEX + 9999,
		border: 0,
		pointerEvents: "none",
	});
	$backing.appendTo("body");
	$embed.appendTo("body");
	const cleanUp = () => {
		$backing.remove();
		$embed.remove();
		const prevent = (event) => {
			event.preventDefault();
		};
		$(window).on("contextmenu", prevent);
		setTimeout(() => {
			$(window).off("contextmenu", prevent);
			window.removeEventListener("keydown", keydownHandler, true);
		}, 500);
	};
	const keydownHandler = (event) => {
		if (!(["F11", "F12", "ZoomToggle", "PrintScreen", "MediaRecord", "BrightnessDown", "BrightnessUp", "Dimmer"].includes(event.key))) {
			event.preventDefault();
			event.stopPropagation();
			cleanUp();
		}
	};
	let startMouseX, startMouseY;
	$backing.on("mousemove pointermove", (event) => {
		if (startMouseX === undefined) {
			startMouseX = event.pageX;
			startMouseY = event.pageY;
		}
		if (Math.hypot(startMouseX - event.pageX, startMouseY - event.pageY) > mouseDistanceToExit) {
			cleanUp();
		}
	});
	$backing.on("mousedown pointerdown touchstart", (event) => {
		event.preventDefault();
		cleanUp();
	});
	window.addEventListener("keydown", keydownHandler, true);
}

function Settings() {
	let $win = new $EmbedWindow2({
		src: null,
		icons: Window_icons("settings"),
		title: "Settings",
		innerWidth: 665,
		innerHeight: 436
	}, "Settings.MXW");
	Settingz();
	hidemenu();
	return new Task($win, "Settings.MX7");
}

function Store() {
	let $win = new $EmbedWindow2({
		src: null,
		icons: Window_icons("Store"),
		title: "Software Center",
		innerWidth: 665,
		innerHeight: 436
	}, "Software-Center.MXW");
	StoreFront();
	hidemenu();
	return new Task($win, "Software-Center.MX7");
}

function tmr() {
	let timer = document.getElementById("scvtmr").value;
	setInterval(function () {
		eval(localStorage.getItem("scv"));
	}, timer * 15000);
}

function Pipes() {
	const options = {
		hideUI: true
	};
	showScreensaver(
		`./A/System64/Program%20Files/pipes/index.html#${encodeURIComponent(JSON.stringify(options))}`
	);
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "Pipes()");
}

function FlowerBox() {
	showScreensaver("./A/System64/Program%20Files/FlowerBox/index.html");
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "FlowerBox()");
}

function DVD() {
	showScreensaver("./A/System64/Program%20Files/DVD/index.html");
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "DVD()");
}

function Matrix() {
	showScreensaver("./A/System64/Program%20Files/matrix/index.html");
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "Matrix()");
}

function Dotz() {
	showScreensaver("./A/System64/Program%20Files/Dotz/index.html");
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "Dotz()");
}

function Bubz() {
	showScreensaver("./A/System64/Program%20Files/Bubbles/index.html");
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "Bubz()");
}

function Calculator() {
	var $win = make_embed_window({
		src: "./A/Program Files/calculator/index.html",
		icons: Window_icons("calculator"),
		title: "Calculator",
		innerWidth: 256,
		innerHeight: 208 + 21,
		minInnerWidth: 256,
		minInnerHeight: 208 + 21,
	}, "Calculator.MXW");
	hidemenu();
	return new Task($win, "Calculator.MX7");
}

function Pinball() {
	var $win = make_embed_window({
		src: "./A/Program Files/pinball/index.html",
		icons: Window_icons("pinball"),
		title: "Pinball",
		innerWidth: 600,
		innerHeight: 442
	}, "Pinball.MXW");
	hidemenu();
	return new Task($win, "Pinball.MXW");
}

function Explorer(address) {
	var document_title = address;
	var win_title = document_title;
	if (document_title === "/A/") {
		document_title = "Explorer";
	}
	var $win = make_embed_window({
			src: "./A/Program Files/explorer/index.html" + (address ? ("?address=" + encodeURIComponent(address)) : ""),
			icons: Window_icons("folder-open"),
			title: win_title,
			innerWidth: Math.min(856, innerWidth * 0.9),
			innerHeight: Math.min(547, innerHeight * 0.7),
		},


		`${document_title.replace("/A/", "")}.MXW`);
	hidemenu();
	return new Task($win, `${document_title.replace("/A/", "")}.MX7`);
}
Explorer.acceptsFilePaths = true;

var webamp_bundle_loaded = false;
var load_winamp_bundle_if_not_loaded = function (includeButterchurn, callback) {
	if (webamp_bundle_loaded) {
		callback();
	} else {
		$.getScript("./A/Program Files/winamp/lib/webamp.bundle.min.js", () => {
			if (includeButterchurn) {
				$.getScript("./A/Program Files/winamp/lib/butterchurn.min.js", () => {
					$.getScript("./A/Program Files/winamp/lib/butterchurnPresets.min.js", () => {
						callback();
					});
				});
			} else {
				callback();
			}
		});
	}
}

const isButterchurnSupported = () => {
	const canvas = document.createElement('canvas');
	let gl;
	try {
		gl = canvas.getContext('webgl2');
	} catch (x) {
		gl = null;
	}

	const webGL2Supported = !!gl;
	const audioApiSupported = !!(window.AudioContext || window.webkitAudioContext);

	return webGL2Supported && audioApiSupported;
};

let webamp;
let $webamp;
let winamp_task;
let winamp_interface;
let winamp_loading = false;


function openWinamp(file_path) {
	const filePathToBlob = (file_path) => {
		return new Promise((resolve, reject) => {
			withFilesystem(function () {
				var fs = BrowserFS.BFSRequire("fs");
				fs.readFile(file_path, function (err, buffer) {
					if (err) {
						return reject(err);
					}
					const byte_array = new Uint8Array(buffer);
					const blob = new Blob([byte_array]);
					resolve(blob);
				});
			});
		});
	};

	const filePathToTrack = async (file_path) => {
		const blob = await filePathToBlob(file_path);
		const blob_url = URL.createObjectURL(blob);
		const track = {
			url: blob_url,
			defaultName: file_name_from_path(file_path).replace(/\.[a-z0-9]+$/i, ""),
		};
		return track;
	};

	const whenLoaded = async () => {
		if ($webamp.css("display") === "none") {
			winamp_interface.unminimize();
		}

		winamp_interface.focus();

		if (file_path) {
			if (file_path.match(/(\.wsz|\.zip)$/i)) {
				const blob = await filePathToBlob(file_path);
				const url = URL.createObjectURL(blob);
				webamp.setSkinFromUrl(url);
			} else if (file_path.match(/(\.m3u|\.pls)$/i)) {
				alert("Sorry, we don't support playlists yet.");
			} else {
				const track = await filePathToTrack(file_path);
				webamp.setTracksToPlay([track]);
			}
		}

		winamp_loading = false;
	}
	if (winamp_task) {
		whenLoaded()
		return;
	}
	if (winamp_loading) {
		return;
	}
	winamp_loading = true;
	const includeButterchurn = isButterchurnSupported();

	load_winamp_bundle_if_not_loaded(includeButterchurn, function () {
		const webamp_options = {
			initialTracks: [{
					metaData: {
						artist: "DJ Mike Llama",
						title: "Llama Whippin' Intro",
					},
					url: "./A/Program Files/winamp/mp3/llama-2.91.mp3",
					duration: 5.322286,
				},
				{
					metaData: {
						artist: "Christopher Mintz-Plasse",
						title: "Nuke Radio",
					},
					url: "./A/Program Files/winamp/mp3/Nuke%20Radio.mp3",
					duration: 5,
				}
			],
			initialSkin: {
				url: "./A/Program Files/winamp/skins/base-2.91.wsz",
			},
			enableHotkeys: true,
			handleTrackDropEvent: (event) =>
				Promise.all(
					dragging_file_paths.map(filePathToTrack)
				),
		};
		if (includeButterchurn) {
			webamp_options.__butterchurnOptions = {
				importButterchurn: () => Promise.resolve(window.butterchurn),
				getPresets: () => {
					const presets = window.butterchurnPresets.getPresets();
					return Object.keys(presets).map((name) => {
						return {
							name,
							butterchurnPresetObject: presets[name]
						};
					});
				},
				butterchurnOpen: true,
			};
			webamp_options.__initialWindowLayout = {
				main: {
					position: {
						x: 0,
						y: 0
					}
				},
				equalizer: {
					position: {
						x: 0,
						y: 116
					}
				},
				playlist: {
					position: {
						x: 0,
						y: 232
					},
					size: [0, 4]
				},
				milkdrop: {
					position: {
						x: 275,
						y: 0
					},
					size: [7, 12]
				}
			};
		}
		webamp = new Webamp(webamp_options);

		var visual_container = document.createElement("div");
		visual_container.classList.add("webamp-visual-container");
		visual_container.style.position = "absolute";
		visual_container.style.left = "0";
		visual_container.style.right = "0";
		visual_container.style.top = "0";
		visual_container.style.bottom = "0";
		visual_container.style.pointerEvents = "none";
		document.body.appendChild(visual_container);
		webamp.renderWhenReady(visual_container).then(() => {
			window.console && console.log("Webamp rendered");

			$webamp = $("#webamp");
			$webamp.css({
				position: "absolute",
				left: 0,
				top: 0,
				zIndex: $Window.Z_INDEX++
			});

			const $eventTarget = $({});
			const makeSimpleListenable = (name) => {
				return (callback) => {
					const fn = () => {
						callback();
					};
					$eventTarget.on(name, fn);
					const dispose = () => {
						$eventTarget.off(name, fn);
					};
					return dispose;
				};
			};

			winamp_interface = {};
			winamp_interface.onFocus = makeSimpleListenable("focus");
			winamp_interface.onBlur = makeSimpleListenable("blur");
			winamp_interface.onClosed = makeSimpleListenable("closed");
			winamp_interface.getIconAtSize = (target_icon_size) => {
				if (target_icon_size !== 32 && target_icon_size !== 16) {
					target_icon_size = 32;
				}
				const img = document.createElement("img");
				img.src = getDeskIconPath("winamp2", target_icon_size);
				return img;
			};
			winamp_interface.bringToFront = () => {
				$webamp.css({
					zIndex: $Window.Z_INDEX++
				});
			};
			winamp_interface.element = winamp_interface[0] = $webamp[0];
			winamp_interface.hasClass = (className) => {
				if (className === "focused") {
					return $webamp.hasClass("focused");
				}
				return false;
			};
			winamp_interface.focus = () => {
				if (!$webamp.hasClass("focused")) {
					$webamp.addClass("focused");
					winamp_interface.bringToFront();
					$eventTarget.triggerHandler("focus");
					$webamp.find("#main-window [tabindex='-1']").focus();
				}
			};
			winamp_interface.blur = () => {
				if ($webamp.hasClass("focused")) {
					$webamp.removeClass("focused");
					$eventTarget.triggerHandler("blur");
				}
			};
			winamp_interface.minimize = () => {
				$webamp.hide();
			};
			winamp_interface.unminimize = () => {
				$webamp.show();
			};
			winamp_interface.close = () => {
				webamp.dispose();
				$webamp.remove();

				$eventTarget.triggerHandler("closed");

				webamp = null;
				$webamp = null;
				winamp_task = null;
				winamp_interface = null;
			};
			winamp_interface.getTitle = () => {
				let taskTitle = "Winamp 2.91";
				const $cell = $webamp.find(".playlist-track-titles .track-cell.current");
				if ($cell.length) {
					taskTitle = `${$cell.text()} - Winamp`;
					switch (webamp.getMediaStatus()) {
						case "STOPPED":
							taskTitle = `${taskTitle} [Stopped]`
							break;
						case "PAUSED":
							taskTitle = `${taskTitle} [Paused]`
							break;
					}
				}
				return taskTitle;
			};
			winamp_interface.setMinimizeTarget = () => {};
			winamp_interface.on = (event_name, callback) => {
				if (event_name === "title-change") {
					webamp.onTrackDidChange(callback);
				} else if (event_name === "icon-change") {} else {
					console.warn(`Unsupported event: ${event_name}`);
				}
			};

			mustHaveMethods(winamp_interface, windowInterfaceMethods);

			let raf_id;
			let global_pointerdown;

			winamp_task = new Task(winamp_interface);
			webamp.onClose(function () {
				winamp_interface.close();
				cancelAnimationFrame(raf_id);
				visualizerOverlay.fadeOutAndCleanUp();
			});
			webamp.onMinimize(function () {
				winamp_interface.minimize();
			});

			$webamp.on("focusin", () => {
				winamp_interface.focus();
			});
			$webamp.on("focusout", () => {
				if (
					!document.activeElement ||
					!document.activeElement.closest ||
					!document.activeElement.closest("#webamp")
				) {
					winamp_interface.blur();
				}
			});

			const visualizerOverlay = new VisualizerOverlay(
				$webamp.find(".gen-window canvas")[0], {
					mirror: true,
					stretch: true
				},
			);

			const animate = () => {
				const windowElements = $(".os-window, .window:not(.gen-window)").toArray();
				windowElements.forEach(windowEl => {
					if (!windowEl.hasOverlayCanvas) {
						visualizerOverlay.makeOverlayCanvas(windowEl);
						windowEl.hasOverlayCanvas = true;
					}
				});

				if (webamp.getMediaStatus() === "PLAYING") {
					visualizerOverlay.fadeIn();
				} else {
					visualizerOverlay.fadeOut();
				}
				raf_id = requestAnimationFrame(animate);
			};
			raf_id = requestAnimationFrame(animate);

			whenLoaded()
		}, (error) => {
			alert("Failed to render Webamp:\n\n" + error);
			console.error(error);
		});
	});
}
openWinamp.acceptsFilePaths = true;


function openURLFile(file_path) {
	withFilesystem(function () {
		var fs = BrowserFS.BFSRequire("fs");
		fs.readFile(file_path, "utf8", function (err, content) {
			if (err) {
				return alert(err);
			}
			var match = content.match(/URL\s*=\s*([^\n\r]+)/i);
			var url = match ? match[1] : content;
			Explorer(url);
		});
	});
}
openURLFile.acceptsFilePaths = true;

function openThemeFile(file_path) {
	withFilesystem(function () {
		var fs = BrowserFS.BFSRequire("fs");
		fs.readFile(file_path, "utf8", function (err, content) {
			if (err) {
				return alert(err);
			}
			loadThemeFromText(content);
			try {
				localStorage.setItem("desktop-theme", content);
				localStorage.setItem("desktop-theme-path", file_path);
			} catch (error) {}
		});
	});
}
openThemeFile.acceptsFilePaths = true;

var file_extension_associations = {


	"": Notepad,
	ahk: Notepad,
	ai: Paint,
	bat: Notepad,
	check_cache: Notepad,
	cmake: Notepad,
	cmd: Notepad,
	conf: Notepad,
	cpp: Notepad,
	css: accessDenied,
	d: Notepad,
	editorconfig: Notepad,
	filters: Notepad,
	gitattributes: Notepad,
	gitignore: Notepad,
	gitrepo: Notepad,
	h: Notepad,
	hhc: Notepad,
	hhk: Notepad,
	html: Explorer,
	ini: Notepad,
	js: accessDenied,
	json: accessDenied,
	log: Notepad,
	make: Notepad,
	map: accessDenied,
	marks: Notepad,
	md: Explorer,
	prettierignore: Notepad,
	properties: Notepad,
	rc: Notepad,
	rsp: Notepad,
	sh: Notepad,
	ts: Notepad,
	txt: Notepad,
	py: Notepad,
	vcxproj: Notepad,
	webmanifest: Notepad,
	xml: Notepad,
	yml: Notepad,

	bmp: Paint,
	cur: Paint,
	eps: Paint,
	gif: Paint,
	icns: Paint,
	ico: Paint,
	jpeg: Paint,
	jpg: Paint,
	kra: Paint,
	pbm: Paint,
	pdf: Paint,
	pdn: Paint,
	pgm: Paint,
	png: Paint,
	pnm: Paint,
	ppm: Paint,
	ps: Paint,
	psd: Paint,
	svg: Paint,
	tga: Paint,
	tif: Paint,
	tiff: Paint,
	webp: Paint,
	xbm: Paint,
	xcf: Paint,
	xcfbz2: Paint,
	xcfgz: Paint,
	xpm: Paint,

	wsz: openWinamp,
	zip: openWinamp,

	wav: SoundRecorder,
	mp3: openWinamp,
	ogg: openWinamp,
	wma: openWinamp,
	m4a: openWinamp,
	aac: openWinamp,
	flac: openWinamp,
	mka: openWinamp,
	mpc: openWinamp,
	"mp+": openWinamp,

	m3u: openWinamp,
	pls: openWinamp,

	url: openURLFile,
	theme: openThemeFile,
	themepack: openThemeFile,
};

function accessDenied(file_path) {
	var file_extension = file_extension_from_path(file_path);
	window.confirm(`Access Denied.<br>Cannot Edit .${file_extension} Files.`);
}
accessDenied.acceptsFilePaths = true;

function systemExecuteFile(file_path) {

	withFilesystem(function () {
		var fs = BrowserFS.BFSRequire("fs");
		fs.stat(file_path, function (err, stats) {
			if (err) {
				return window.confirm("Failed to get info about " + file_path + "\n\n" + err);
			}
			if (stats.isDirectory()) {
				Explorer(file_path);
			} else {
				var file_extension = file_extension_from_path(file_path);
				var program = file_extension_associations[file_extension.toLowerCase()];
				if (program) {
					if (!program.acceptsFilePaths) {
						window.confirm(program.name + " does not support opening files via the virtual filesystem yet");
						return;
					}
					program(file_path);
				} else {
					window.confirm("No program is associated<br>with ." + file_extension + " files");
				}
			}
		});
	});
}

var Create_Icon = function (options) {
	folder_view.add_item(new FolderViewItem({
		icons: {
			[DESKTOP_ICON_SIZE]: getDeskIconPath(options.iconID, DESKTOP_ICON_SIZE),
		},
		...options,
	}));
};
Create_Icon({
	title: "Your PC",
	iconID: "my-computer",
	id: "trashyboi.MDX",
	open: function () {
		systemExecuteFile("/");
	},
	is_system_folder: true,
});
Create_Icon({
	title: "Your Documents",
	iconID: "my-documents-folder",
	id: "trashyguy",
	open: function () {
		systemExecuteFile("/A/my-documents");
	},
	is_system_folder: true,
});
Create_Icon({
	title: "Da Hood",
	iconID: "network",
	open: function () {
		systemExecuteFile("/A/da-hood");
	},
	is_system_folder: true,
});
Create_Icon({
	title: "Recycle Bin",
	iconID: "recycle-bin",
	open: function () {
		Explorer("https://www.epa.gov/recycle/");
	},
	is_system_folder: true,
});
Create_Icon({
	title: "Your Pictures",
	iconID: "folder",
	open: function () {
		systemExecuteFile("/A/my-pictures");
	},
	is_system_folder: true,
});
Create_Icon({
	title: "Internet Explorer",
	iconID: "internet-explorer",
	open: function () {
		Explorer("https://www.google.com/");
	}
});
Create_Icon({
	title: "Paint",
	iconID: "paint",
	open: Paint,
	shortcut: false
});
Create_Icon({
	title: "Minesweeper",
	iconID: "minesweeper",
	open: Minesweeper,
	shortcut: false
});
Create_Icon({
	title: "Sound Recorder",
	iconID: "speaker",
	open: SoundRecorder,
	shortcut: false
});
Create_Icon({
	title: "Solitaire",
	iconID: "Solitaire",
	open: Solitaire,
	shortcut: false
});
Create_Icon({
	title: "Notepad",
	iconID: "notepad",
	open: Notepad,
	shortcut: false
});
Create_Icon({
	title: "Winamp",
	iconID: "winamp2",
	open: openWinamp,
	shortcut: false
});
Create_Icon({
	title: "3D Pipes",
	iconID: "pipes",
	open: Pipes,
	shortcut: false
});
Create_Icon({
	title: "3D Flower Box",
	iconID: "pipes",
	open: FlowerBox,
	shortcut: false
});

Create_Icon({
	title: "Calculator",
	iconID: "calculator",
	open: Calculator,
	shortcut: false
});

Create_Icon({
	title: "VLC Media Player",
	iconID: "VLC",
	open: VLC
});

Create_Icon({
	title: "Duke Nukem 3D",
	iconID: "Duke",
	open: Duke
});

Create_Icon({
	title: "Grand Theft Auto",
	iconID: "GTA",
	open: GTA
});

Create_Icon({
	title: "Oregon Trail",
	iconID: "Trail",
	open: Trail
});

Create_Icon({
	title: "Doom64",
	iconID: "64",
	open: Sixty
});

Create_Icon({
	title: "Doom Zero",
	iconID: "Zero",
	open: Zero
});

Create_Icon({
	title: "Quake",
	iconID: "Quake",
	open: Quake
});

Create_Icon({
	title: "Quake 2",
	iconID: "Quake2",
	open: Quake2
});

Create_Icon({
	title: "Wolf 3D",
	iconID: "Wolf",
	open: Wolf3D
});

folder_view.arrange_icons();