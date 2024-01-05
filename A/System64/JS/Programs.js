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

function TaskMngr() {
	let $win = new $EmbedWindow2({
		src: null,
		icons: Window_icons("About"),
		title: "Task Manager",
		innerWidth: 420,
		innerHeight: 400
	}, "Task.MXW");
	TaskMgr();
	hidemenu();
	return new Task($win, "Task.MX7");
}

function Chat() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files/chat/index.php",
		icons: Window_icons("Chat"),
		title: "Chat Room",
		innerWidth: 1000,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function WadCMD() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/WadCMD/index.html",
		icons: Window_icons("WadCMD"),
		title: "WadCMD",
		innerWidth: 1000,
		innerHeight: 515
	});
	hidemenu();
	return new Task($win);
}

function Theme1() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files/ThemeEditor/index.html",
		icons: Window_icons("themes"),
		title: "Theme Editor",
		innerWidth: 1000,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Cookie() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Cookies/index.html",
		icons: Window_icons("Cookie"),
		title: "Cookie Clicker",
		innerWidth: 660,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function JellyM() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/mario/jellymar.io/index.html",
		icons: Window_icons("Mario"),
		title: "Jelly Mario",
		innerWidth: 800,
		innerHeight: 650
	});

	hidemenu();
	return new Task($win);
}

function MinecrapA() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Minecraft/MineCrap Alpha/index.html",
		icons: Window_icons("Minecraft"),
		title: "MineCrap Alpha",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Minecrap3() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Minecraft/MineCrap 1.3/index.html",
		icons: Window_icons("Minecraft"),
		title: "MineCrap 1.3",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Minecrap5() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Minecraft/MineCrap 1.5.2/index.html",
		icons: Window_icons("Minecraft"),
		title: "MineCrap 1.5.2",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function NoGame() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/NoGame/index.html",
		icons: Window_icons("NoGame"),
		title: "There is No Game",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Power() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Power_Player_Super_Joy_III/index.html",
		icons: Window_icons("Power"),
		title: "Power Player Super Joy III",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Baldi() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Baldis%20Basics/index.html",
		icons: Window_icons("Baldi"),
		title: "Baldi's Basics",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Rioluvania() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Sans/Rioluvania/index.html",
		icons: Window_icons("Rioluvania"),
		title: "Rioluvania",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Sans() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Sans/Sans/index.html",
		icons: Window_icons("Rioluvania"),
		title: "Rioluvania",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Funky() {
	toast({
		message: "Funky Karts is deprecated"
	})
	// let $win = make_embed_window({
	// 	src: "./A/System64/Program%20Files%20(x86)/Funky Karts/index.html",
	// 	icons: Window_icons("Funky"),
	// 	title: "Funky Karts",
	// 	innerWidth: 1000,
	// 	innerHeight: 500
	// });

	// hidemenu();
	// return new Task($win);
}

function Mario2() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/Mario/super.html",
		icons: Window_icons("Mario"),
		title: "Super Mario Bros.",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function MarMakr() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/Mario/maker.html",
		icons: Window_icons("Mario"),
		title: "Super Mario Maker",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function iMario() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/infinite/index.html",
		icons: Window_icons("Mario"),
		title: "Infinite Mario",
		innerWidth: 660,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function TBOI() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/TBOI/index.html",
		icons: Window_icons("TBOI"),
		title: "The Binding of Isaac",
		innerWidth: 970,
		innerHeight: 696
	});

	hidemenu();
	return new Task($win);
}

function Rocket() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Rocket Custa/index.html",
		icons: Window_icons("Rocket"),
		title: "Rocket Custa",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Spelunky() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Spelunky/index.html",
		icons: Window_icons("Spelunky"),
		title: "Spelunky",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Button() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files/Button/index.html",
		icons: Window_icons("Button"),
		title: "Button",
		innerWidth: 300,
		innerHeight: 300
	});

	hidemenu();
	return new Task($win);
}

function Clock() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files/Clock/index.html",
		icons: Window_icons("Clock"),
		title: "Clock",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function AcidBox() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/Acid-Box/index.html",
		icons: Window_icons("AcidBox"),
		title: "Acid Box",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Star() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files/StrWrz/index.html",
		icons: Window_icons("Starwars"),
		title: "Star Wars Episode IV",
		innerWidth: 830,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Zamboni() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Zamboni/index.html",
		icons: Window_icons("Zamboni"),
		title: "Frank Zamboni",
		innerWidth: 670,
		innerHeight: 292
	});

	hidemenu();
	return new Task($win);
}

function Soda() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files/Soda/index.htm",
		icons: Window_icons("Soda"),
		title: "Vending Machine",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Ice() {
	let $win = make_embed_window({
		src: "./Dodo.html",
		icons: Window_icons("Ice"),
		title: "Ice Dodo",
		innerWidth: 700,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function Prometheus() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Prometheus/index.html",
		icons: Window_icons("Emu"),
		title: "Prometheus",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Kronos() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Kronos/index.html",
		icons: Window_icons("Emu"),
		title: "Kronos",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Drift() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Drift Hunters/index.html",
		icons: Window_icons("Drift"),
		title: "Drift Hunters",
		innerWidth: 1000,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function Surf1() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/SURF/S.U.R.F%201.0/index.html",
		icons: Window_icons("Surf"),
		title: "Microsoft Surf 1.0",
		innerWidth: 1000,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function Surf2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/SURF/S.U.R.F%202.0/index.html",
		icons: Window_icons("Surf"),
		title: "Microsoft Surf 2.0",
		innerWidth: 1000,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function Surf3() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/SURF/S.U.R.F%203.0/index.html",
		icons: Window_icons("Surf"),
		title: "Microsoft Surf 3.0",
		innerWidth: 1000,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function Hex() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Race/index.html",
		icons: Window_icons("Hex"),
		title: "Hex GL",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Box() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Boxel%20Rebound/index.html",
		icons: Window_icons("Box"),
		title: "Boxel Rebound",
		innerWidth: 360,
		innerHeight: 640
	});

	hidemenu();
	return new Task($win);
}

function Doom2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom2/Doom2.exe.html",
		icons: Window_icons("Doom2"),
		title: "Doom 2",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function Master() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Master/Master.exe.html",
		icons: Window_icons("Master"),
		title: "The Master Levels for Doom 2",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function UD2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/UD2/UD2.exe.html",
		icons: Window_icons("UD2"),
		title: "The Ultimate Doom 2",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function MWCMD() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/CMD.html",
		icons: Window_icons("msdos"),
		title: "MW-CMD",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function StarDoom() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/StarWars/StarWars.exe.html",
		icons: Window_icons("SDoom"),
		title: "Star Wars Doom",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function BatDoom() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Batman/Batman.exe.html",
		icons: Window_icons("Batman"),
		title: "Batman Doom",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function BDoom2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Brutal/Brutal.exe.html",
		icons: Window_icons("BDoom"),
		title: "Brutal Doom 2",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function Nine() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/95/95.exe.html",
		icons: Window_icons("95"),
		title: "Windows 95",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function Duke() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Duke/Duke.exe.html",
		icons: Window_icons("Duke"),
		title: "Duke 3D",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function GTA() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/GTA/GTA.exe.html",
		icons: Window_icons("GTA"),
		title: "Grand Theft Auto",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function DTrail() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Trail/Oregon.exe.html",
		icons: Window_icons("Oregon"),
		title: "Deluxe Oregon Trail",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Trail() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Trail2/Oregon.exe.html",
		icons: Window_icons("Trail"),
		title: "Oregon Trail",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Castle() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/CW/CW.exe.html",
		icons: Window_icons("Castle"),
		title: "Castle Wolfenstien",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Doom() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom/Doom.exe.html",
		icons: Window_icons("Doom"),
		title: "Ultimate Doom",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Heretic() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Heretic/Heretic.exe.html",
		icons: Window_icons("Heretic"),
		title: "Heretic",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Heretic2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Heretic2/Heretic2.exe.html",
		icons: Window_icons("Heretic2"),
		title: "Heretic 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Hexen() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Hexen/Hexen.exe.html",
		icons: Window_icons("Hexen"),
		title: "Hexen",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Plutonia() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Plutonia/Plutonia.exe.html",
		icons: Window_icons("Plutonia"),
		title: "Plutonia",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Plutonia2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Plutonia2/PL2.exe.html",
		icons: Window_icons("Plutonia2"),
		title: "Plutonia 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function TNT() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/TNT/TNT.exe.html",
		icons: Window_icons("FDoom"),
		title: "TNT",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Sixty() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom64/64.exe.html",
		icons: Window_icons("64"),
		title: "Doom64",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Zero() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Zero/Zero.exe.html",
		icons: Window_icons("Zero"),
		title: "Doom Zero",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Quake() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Quake/Quake.exe.html",
		icons: Window_icons("Quake"),
		title: "Quake",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function QuakeM1() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/QuakeM1/Quake.exe.html",
		icons: Window_icons("Q1M"),
		title: "Quake Mission Pack 1",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function QuakeM2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/QuakeM2/Quake.exe.html",
		icons: Window_icons("Q1M"),
		title: "Quake Mission Pack 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Quake2() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/Quake2-PlayN-MagnusPort/index.html",
		icons: Window_icons("Quake2"),
		title: "Quake 2",
		innerWidth: 1000,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Shool() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/School/School.exe.html",
		icons: Window_icons("School"),
		title: "Doom: School Shooter Edition",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Spear() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Spear/Spear.exe.html",
		icons: Window_icons("Spear"),
		title: "Spear of Destiny",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Rekkr() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Rekkr/Rekkr.exe.html",
		icons: Window_icons("Rekkr"),
		title: "Rekkr",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Strife() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Strife/Strife.exe.html",
		icons: Window_icons("Strife"),
		title: "Strife",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FreeDm() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/FreeDM/FreeDM.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDM",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Free1() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/free1/FreeDoom.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: Phase 1",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Free2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/free2/FreeDoom2.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: Phase 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FDoom() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom/FDoom.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "The Ultimate FreeDoom",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FDoom2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom2/FDoom2.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom Phase 2: Hell on Earth",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FDoom64() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom64/F64.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom 64",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FTNT() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/TNT/FTNT.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: TNT Evilution",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FPL() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Plutonia/FPlutonia.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: The Plutonia Experiment",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FPL2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Plutonia2/FPl2.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: The Plutonia Experiment Phase 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FChex() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex1/FChex.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: Chex Quest Phase 1",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FChex2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex2/FChex.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: Chex Quest Phase 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FChex3() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex3/FChex.exe.html",
		icons: Window_icons("FreeDoom"),
		title: "FreeDoom: Chex Quest Phase 3",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Wolf3D() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Wolf3D/Wolf.exe.html",
		icons: Window_icons("Wolf"),
		title: "Wolf 3D",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function BTSX() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/BTSX/BTSX.exe.html",
		icons: Window_icons("BTSX"),
		title: "Back to Saturn X",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function BTSX2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/BTSX2/BTSX2.exe.html",
		icons: Window_icons("BTSX"),
		title: "Back to Saturn X 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Chex1() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex1/Chex.exe.html",
		icons: Window_icons("Chex"),
		title: "Chex Quest 1",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Chex2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex2/Chex.exe.html",
		icons: Window_icons("Chex2"),
		title: "Chex Quest 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Chex3() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Chex3/Chex.exe.html",
		icons: Window_icons("Chex3"),
		title: "Chex Quest 3",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Doom2D() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom2D/Doom2D.exe.html",
		icons: Window_icons("2D"),
		title: "Doom 2D",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Dario1() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Mario/Mario.exe.html",
		icons: Window_icons("Dario"),
		title: "Mario Doom",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Dario2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Mario2/Mario2.exe.html",
		icons: Window_icons("Dario"),
		title: "Mario Doom 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Regular() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Regular/index.html",
		icons: Window_icons("Dino"),
		title: "Chrome Dino Game",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function BDay() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/BDay/index.html",
		icons: Window_icons("Dino"),
		title: "Birthday Edition",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function D3D() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/3D/index.html",
		icons: Window_icons("Dino"),
		title: "3D Dino",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Godzilla() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Godzilla.html",
		icons: Window_icons("Dino"),
		title: "Godzilla",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Modz() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Mod/index.html",
		icons: Window_icons("Dino"),
		title: "Modded Chrome Dino Game",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Sonic1() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Sonic/index.html",
		icons: Window_icons("Dino"),
		title: "Sonic v1.0",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Sonic2() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/BSonic/index.html",
		icons: Window_icons("Dino"),
		title: "Sonic v1.2",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Batz() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Batman/Bats/Batman/index.html",
		icons: Window_icons("Dino"),
		title: "Batman",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Halloween() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Halloween.html",
		icons: Window_icons("Dino"),
		title: "Halloween",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Joker() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Joker/Jokes/Joker/index.html",
		icons: Window_icons("Dino"),
		title: "Joker",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Mines1() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Minecraft.html",
		icons: Window_icons("Dino"),
		title: "Minecraft v1.0",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Mines2() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Minecraft/index.html",
		icons: Window_icons("Dino"),
		title: "Minecraft v1.2",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Naruto() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Naruto.html",
		icons: Window_icons("Dino"),
		title: "Naruto",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Anime() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Anime/index.html",
		icons: Window_icons("Dino"),
		title: "Anime",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function DNyan() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Nyan.html",
		icons: Window_icons("Dino"),
		title: "Nyan",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Santa() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Santa.html",
		icons: Window_icons("Dino"),
		title: "Santa Claus",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function DMario1() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Super_Mario/Mars/Mario/index.html",
		icons: Window_icons("Dino"),
		title: "Super Mario v1.",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function DMario2() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Mario/index.html",
		icons: Window_icons("Dino"),
		title: "Super Mario v1.2",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function DMario3() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Maro/index.html",
		icons: Window_icons("Dino"),
		title: "Super Mario v1.3",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function DMario4() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Marilol/index.html",
		icons: Window_icons("Dino"),
		title: "Super Mario v1.4",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function MegaMan() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/MegaMan/index.html",
		icons: Window_icons("Dino"),
		title: "Mega-Man",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Vivaldi() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Vivaldi/index.html",
		icons: Window_icons("Dino"),
		title: "Vivaldi",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Covid() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Covid/index.html",
		icons: Window_icons("Dino"),
		title: "Covid",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Fish() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Fish/index.html",
		icons: Window_icons("Dino"),
		title: "Fish",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Guy() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Guy/index.html",
		icons: Window_icons("Dino"),
		title: "Kumamon Runner",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Zombie() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/Zombie/index.html",
		icons: Window_icons("Dino"),
		title: "Zombie Runner",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Mario1() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/Mario/index.html",
		icons: Window_icons("Mario"),
		title: "Modded Super Mario Bros.",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Mario2() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/Mario/super.html",
		icons: Window_icons("Mario"),
		title: "Super Mario Bros.",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function iMario() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/infinite/index.html",
		icons: Window_icons("Mario"),
		title: "Infinite Mario",
		innerWidth: 660,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Cat() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/Catmario/chrome/index.html",
		icons: Window_icons("Mario"),
		title: "Cat Mario",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Mari0() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Mario/Mari0/index.html",
		icons: Window_icons("Mario"),
		title: "Mari0",
		innerWidth: 800,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function Surf1() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/SURF/S.U.R.F%201.0/index.html",
		icons: Window_icons("Surf"),
		title: "Microsoft Surf 1.0",
		innerWidth: 660,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Surf2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/SURF/S.U.R.F%202.0/index.html",
		icons: Window_icons("Surf"),
		title: "Microsoft Surf 2.0",
		innerWidth: 660,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Surf3() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/SURF/S.U.R.F%203.0/index.html",
		icons: Window_icons("Surf"),
		title: "Microsoft Surf 3.0",
		innerWidth: 660,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function D4() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/Doom4/Doom4.exe.html",
		icons: Window_icons("4"),
		title: "Doom4",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function SMWDX() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/MS-DOS/SMWDX/SMWDX.exe.html",
		icons: Window_icons("Mario"),
		title: "Super Mario World Deluxe",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function Ice() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Ice/ICE%201.0/index.html",
		icons: Window_icons("Ice"),
		title: "Ice Dodo 1.0",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Ice2() {
	let $win = make_embed_window({
		src: "https://magnusware-libs.vercel.app/Ice/ICE%202.0/index.html",
		icons: Window_icons("Ice"),
		title: "Ice Dodo 2.0",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Contranoid() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Brain Games/Contranoid/index.html",
		icons: Window_icons("Contranoid"),
		title: "Contranoid",
		innerWidth: 392,
		innerHeight: 539
	});

	hidemenu();
	return new Task($win);
}

function CDG() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Dino/index.html",
		icons: Window_icons("Dino"),
		title: "Chrome Dino Games",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Hi() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Brain Games/Oh Hi/index.html",
		icons: Window_icons("0HH1"),
		title: "OH H1",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function No() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Brain Games/Oh No/index.html",
		icons: Window_icons("0HN0"),
		title: "OH N0",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Quento() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Brain Games/Quento/index.html",
		icons: Window_icons("Quento"),
		title: "Quento",
		innerWidth: 500,
		innerHeight: 621
	});

	hidemenu();
	return new Task($win);
}

function Hextris() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/Brain Games/Hextris/index.html",
		icons: Window_icons("Hextris"),
		title: "Hextris",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Pac() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/PacMan/PacMan/index.html",
		icons: Window_icons("Pacman"),
		title: "PacMan 1.0",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Google1() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/PacMan/google pacman/index.html",
		icons: Window_icons("Pacman"),
		title: "Google PacMan 1.2",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Google2() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/PacMan/google pacman 2/index.html",
		icons: Window_icons("Pacman"),
		title: "Google PacMan 1.0",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Snake() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/snake.html",
		icons: Window_icons("Snake"),
		title: "Snake",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Pong() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/Pong/index.html",
		icons: Window_icons("Pong"),
		title: "Pong",
		innerWidth: 660,
		innerHeight: 505
	});

	hidemenu();
	return new Task($win);
}

function Tetriz() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/tetris/tetris.html",
		icons: Window_icons("Tetris"),
		title: "Tetris 1.0",
		innerWidth: 500,
		innerHeight: 621
	});

	hidemenu();
	return new Task($win);
}

function Cubes() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/tetris/cubes/index.html",
		icons: Window_icons("Tetris"),
		title: "Tetris 2.0",
		innerWidth: 500,
		innerHeight: 621
	});

	hidemenu();
	return new Task($win);
}

function Jelly() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/tetris/Jelly/index.html",
		icons: Window_icons("Tetris"),
		title: "Jelly Tetris",
		innerWidth: 500,
		innerHeight: 621
	});

	hidemenu();
	return new Task($win);
}

function AIT() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/tetris/AI/index.html",
		icons: Window_icons("Tetris"),
		title: "Tetris with AI",
		innerWidth: 500,
		innerHeight: 621
	});

	hidemenu();
	return new Task($win);
}

function SpaceI() {
	let $win = make_embed_window({
		src: "./A/System64/Program%20Files%20(x86)/arcade/Space/index.html",
		icons: Window_icons("Space"),
		title: "Space Invaders",
		innerWidth: 850,
		innerHeight: 560
	});

	hidemenu();
	return new Task($win);
}

function Twenty() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/2048/index.html",
		icons: Window_icons("2048"),
		title: "2048",
		innerWidth: 500,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function One() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/Flappy-2048/index.html",
		icons: Window_icons("2048"),
		title: "Flappy 2048 1.0",
		innerWidth: 500,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Two() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/Flappy-2048-2.0/index.html",
		icons: Window_icons("2048"),
		title: "Flappy 2048 2.0",
		innerWidth: 500,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Three() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/2048-3D/index.html",
		icons: Window_icons("2048"),
		title: "2048 3D",
		innerWidth: 1000,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Four() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/4/index.html",
		icons: Window_icons("2048"),
		title: "4",
		innerWidth: 500,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function AI() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/2048-AI/index.html",
		icons: Window_icons("2048"),
		title: "2048 AI",
		innerWidth: 1000,
		innerHeight: 650
	});
	hidemenu();
	return new Task($win);
}

function Hardcore() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/2048/2048-Hardcore/index.html",
		icons: Window_icons("2048"),
		title: "2048 Hardcore",
		innerWidth: 500,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Gore() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/GoreScript/index.html",
		icons: Window_icons("Gore"),
		title: "GoreScript Classic",
		innerWidth: 1000,
		innerHeight: 650
	});
	hidemenu();
	return new Task($win);
}

function VLC() {
	let $win = make_embed_window({
		src: "https://adam-s-amir.github.io/VLC-Media-Web-Player/index.html",
		icons: Window_icons("VLC"),
		title: "VLC Media Player",
		innerWidth: 1000,
		innerHeight: 650
	});
	hidemenu();
	return new Task($win);
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
	});
	return new Task($win);
}
Notepad.acceptsFilePaths = true;

function Paint(file_path) {
	var $win = make_embed_window({
		src: "./A/Program Files/jspaint/index.html",
		icons: Window_icons("paint"),
		title: "untitled - Paint",
		innerWidth: 500,
		innerHeight: 500
	});
	return new Task($win);
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
					const { Buffer } = BrowserFS.BFSRequire("buffer");
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

		let $help_window;
		contentWindow.show_help = () => {
			if ($help_window) {
				$help_window.focus();
				return;
			}
			$help_window = show_help({
				title: "Paint Help",
				contentsFile: "./A/Program Files/jspaint/help/mspaint.hhc",
				root: "./A/Program Files/jspaint/help",
			}).$help_window;
			$help_window.on("close", () => {
				$help_window = null;
			});
		};

		if (file_path) {
			// window.initial_system_file_handle = ...; is too late to set this here
			// contentWindow.open_from_file_handle(...); doesn't exist
			systemHooks.readBlobFromHandle(file_path).then(file => {
				if (file) {
					contentWindow.open_from_file(file, file_path);
				}
			}, (error) => {
				// this handler may not always called for errors, sometimes error message is shown via readBlobFromHandle
				contentWindow.show_error_message(`Failed to open file ${file_path}`, error);
			});
		}

		var old_update_title = contentWindow.update_title;
		contentWindow.update_title = () => {
			old_update_title();
			$win.title(contentWindow.document.title);
		};
	});
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
	});
	return new Task($win);
}

function SoundRecorder(file_path) {
	// TODO: DRY the default file names and title code (use document.title of the page in the embed, in make_embed_window)
	var document_title = file_path ? file_name_from_path(file_path) : "Sound";
	var win_title = document_title + " - Sound Recorder";
	// TODO: focus existing window if file is currently open?
	var $win = make_embed_window({
		src: "./A/Program Files/sound-recorder/index.html" + (file_path ? ("?path=" + file_path) : ""),
		icons: Window_icons("speaker"),
		title: win_title,
		innerWidth: 270,
		innerHeight: 108 + 21,
		minInnerWidth: 270,
		minInnerHeight: 108 + 21,
	});
	return new Task($win);
}
SoundRecorder.acceptsFilePaths = true;

function Solitaire() {
	var $win = make_embed_window({
		src: "./A/Program Files/Solitaire/index.html",
		icons: Window_icons("Solitaire"),
		title: "Solitaire",
		innerWidth: 585,
		innerHeight: 384 + 21,
	});
	return new Task($win);
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
		// Trying to let you change the display or capture the output
		// not allowing Ctrl+PrintScreen etc. because no modifiers
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
	// useCapture needed for scenario where you hit Enter, with a desktop icon selected
	// (If it relaunches the screensaver, it's like you can't exit it!)
	window.addEventListener("keydown", keydownHandler, true);
}

function Settings() {
	let $win = new $EmbedWindow2({
		src: null,
		icons: Window_icons("settings"),
		title: "Settings",
		innerWidth: 665,
		innerHeight: 436
	});
	Settingz();
	hidemenu();
	return new Task($win, "Settings");
}

function Store() {
	let $win = new $EmbedWindow2({
		src: null,
		icons: Window_icons("Store"),
		title: "Software Center",
		innerWidth: 665,
		innerHeight: 436
	});
	StoreFront();
	hidemenu();
	return new Task($win, "Store");
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

function CommandPrompt() {
	var $win = make_embed_window({
		src: "./A/Program Files/command/index.html",
		icons: Window_icons("msdos"),
		title: "MS-DOS Prompt",
		// TODO: default dimensions
		innerWidth: 640,
		innerHeight: 400,
		constrainRect(rect, x_axis, y_axis) {
			const char_width = 8;
			const char_height = 16;
			const border = ($win.outerWidth() - $win.$content.outerWidth()) / 2;
			const inner_rect = {
				x: rect.x + border,
				y: rect.y + border + $win.$titlebar.outerHeight(),
				width: rect.width - $win.outerWidth() + $win.$content.outerWidth(),
				height: rect.height - $win.outerHeight() + $win.$content.outerHeight(),
			};
			const new_inner_rect = {
				width: Math.floor(inner_rect.width / char_width) * char_width,
				height: Math.floor(inner_rect.height / char_height) * char_height,
			};
			const new_rect = {
				x: inner_rect.x - border,
				y: inner_rect.y - border - $win.$titlebar.outerHeight(),
				width: new_inner_rect.width + $win.outerWidth() - $win.$content.outerWidth(),
				height: new_inner_rect.height + $win.outerHeight() - $win.$content.outerHeight(),
			};
			if (x_axis === -1) {
				new_rect.x = rect.x + rect.width - new_rect.width;
			}
			if (y_axis === -1) {
				new_rect.y = rect.y + rect.height - new_rect.height;
			}
			return new_rect;
		},
		// TODO: make the API simpler / more flexible like:
		// constrainDimensions({ innerWidth, innerHeight }) {
		// 	const charWidth = 8;
		// 	const charHeight = 16;
		// 	innerWidth = Math.floor(innerWidth / charWidth) * charWidth;
		// 	innerHeight = Math.floor(innerHeight / charHeight) * charHeight;
		// 	return { innerWidth, innerHeight };
		// },
	});
	return new Task($win);
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
	return new Task($win, "Calculator.MX7");
}

function Pinball() {
	var $win = make_embed_window({
		src: "./A/Program Files/pinball/index.html",
		icons: Window_icons("pinball"),
		title: "Pinball",
		innerWidth: 600,
		innerHeight: 442
	});
	return new Task($win);
}

function Explorer(address) {
	var document_title = address;
	var win_title = document_title;
	var $win = make_embed_window({
		src: "./A/Program Files/explorer/index.html" + (address ? ("?address=" + encodeURIComponent(address)) : ""),
		icons: Window_icons("folder-open"),
		title: win_title,
		// this is based on one measurement, but it uses different sizes depending on the screen resolution,
		// and may be different for different Explorer window types (Microsoft Internet Explorer, "Exploring", normal Windows Explorer*),
		// and may store the window positions, even for different types or folders, so I might have a non-standard default size measurement.
		// *See different types (resized for posing this screenshot): https://imgur.com/nxAcT9C
		innerWidth: Math.min(856, innerWidth * 0.9),
		innerHeight: Math.min(547, innerHeight * 0.7),
	});
	hidemenu();
	return new Task($win);
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
			}],
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
				main: { position: { x: 0, y: 0 } },
				equalizer: { position: { x: 0, y: 116 } },
				playlist: { position: { x: 0, y: 232 }, size: [0, 4] },
				milkdrop: { position: { x: 275, y: 0 }, size: [7, 12] }
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
		// Render after the skin has loaded.
		webamp.renderWhenReady(visual_container).then(() => {
			window.console && console.log("Webamp rendered");

			$webamp = $("#webamp");
			// Bring window to front, initially and when clicked
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
			winamp_interface.element = winamp_interface[0] = $webamp[0]; // for checking z-index in window switcher
			winamp_interface.hasClass = (className) => { // also for window switcher (@TODO: clean this stuff up)
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
					// @TODO: focus last focused window/control?
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
				// $webamp.focus();
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
			winamp_interface.setMinimizeTarget = () => {
				// dummy function; it won't animate to the minimize target anyway
			};
			winamp_interface.on = (event_name, callback) => {
				if (event_name === "title-change") {
					webamp.onTrackDidChange(callback);
				} else if (event_name === "icon-change") {
					// icon will never change
				} else {
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
				// could use relatedTarget, no?
				if (
					!document.activeElement ||
					!document.activeElement.closest ||
					!document.activeElement.closest("#webamp")
				) {
					winamp_interface.blur();
				}
			});

			const visualizerOverlay = new VisualizerOverlay(
				$webamp.find(".gen-window canvas")[0],
				{ mirror: true, stretch: true },
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

/*
function saveAsDialog(){
	var $win = new $Window();
	$win.title("Save As");
	return $win;
}
function openFileDialog(){
	var $win = new $Window();
	$win.title("Open");
	return $win;
}
*/

function openURLFile(file_path) {
	withFilesystem(function () {
		var fs = BrowserFS.BFSRequire("fs");
		fs.readFile(file_path, "utf8", function (err, content) {
			if (err) {
				return alert(err);
			}
			// it's supposed to be an ini-style file, but lets handle files that are literally just a URL as well, just in case
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
			} catch (error) {
				// no local storage
			}
		});
	});
}
openThemeFile.acceptsFilePaths = true;

// Note: extensions must be lowercase here. This is used to implement case-insensitive matching.
var file_extension_associations = {
	// Fonts:
	// - eot (Embedded OpenType)
	// - otf (OpenType)
	// - ttf (TrueType)
	// - woff (Web Open Font Format)
	// - woff2 (Web Open Font Format 2)
	// - (also svg but that's mainly an image format)

	// Misc binary:
	// - wasm (WebAssembly)
	// - o (Object file)
	// - so (Shared Object)
	// - dll (Dynamic Link Library)
	// - exe (Executable file)
	// - a (static library)
	// - lib (static library)
	// - pdb (Program Debug database)
	// - idb (Intermediate Debug file)
	// - bcmap (Binary Character Map)
	// - bin (generic binary file extension)

	// Text:
	"": Notepad, // bare files such as LICENSE, Makefile, CNAME, etc.
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

	// Images:
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
	pdf: Paint, // yes I added PDF support to JS Paint (not all formats listed here are supported though)
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

	// Winamp Skins:
	wsz: openWinamp, // winamp skin zip
	zip: openWinamp, // MIGHT be a winamp skin zip, so might as well for now

	// Audio:
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

	// Playlists:
	m3u: openWinamp,
	pls: openWinamp,

	// Misc:
	url: openURLFile,
	theme: openThemeFile,
	themepack: openThemeFile,
};

function accessDenied(file_path) {
	var file_extension = file_extension_from_path(file_path);
	window.confirm(`Access Denied.<br>Cannot Edit .${file_extension} Files.`);
}
accessDenied.acceptsFilePaths = true;

// Note: global systemExecuteFile called by explorer
function systemExecuteFile(file_path) {
	// execute file with default handler
	// like the START command in CMD.EXE

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
	title: "My Computer",
	iconID: "my-computer",
	open: function () { systemExecuteFile("/A/"); },
	file_path: "/",
	is_system_folder: true,
});
Create_Icon({
	title: "My Documents",
	iconID: "my-documents-folder",
	open: function () { systemExecuteFile("/A/my-documents"); },
	// file_path: "/my-documents/",
	is_system_folder: true,
});
Create_Icon({
	title: "Da Hood",
	iconID: "network",
	open: function () { systemExecuteFile("/A/network-neighborhood"); },
	// file_path: "/network-neighborhood/",
	is_system_folder: true,
});
Create_Icon({
	title: "Recycle Bin",
	iconID: "recycle-bin",
	open: function () { Explorer("https://www.epa.gov/recycle/"); },
	is_system_folder: true,
});
Create_Icon({
	title: "My Pictures",
	iconID: "folder",
	open: function () { systemExecuteFile("/A/my-pictures"); },
	// file_path: "/my-pictures/",
	is_system_folder: true,
});
Create_Icon({
	title: "Internet Explorer",
	iconID: "internet-explorer",
	open: function () { Explorer("https://www.google.com/"); }
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
	title: "MW-CMD",
	iconID: "msdos",
	open: MWCMD
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
//# sourceURL=MagnusWare
