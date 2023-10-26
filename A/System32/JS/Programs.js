function hidemenu() {
	document.getElementById('-start-menu-').style.display = 'none';
}

function About() {
	let $win = new $EmbedWindow2({
		src: null,
		icons: iconsAtTwoSizes("document"),
		title: "About",
		innerWidth: 420,
		innerHeight: 400
	});
	about();
	hidemenu();
	return new Task($win);
}

function Chat() {
	let $win = make_embed_window({
		src: "./programs/chat/index.php",
		icons: iconsAtTwoSizes("Chat"),
		title: "Chat Room",
		innerWidth: 1000,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function WadCMD() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/WadCMD/index.html",
		icons: iconsAtTwoSizes("WadCMD"),
		title: "WadCMD",
		innerWidth: 1000,
		innerHeight: 515
	});
	hidemenu();
	return new Task($win);
}

function Theme1() {
	let $win = make_embed_window({
		src: "./programs/ThemeEditor/index.html",
		icons: iconsAtTwoSizes("themes"),
		title: "Theme Editor",
		innerWidth: 1000,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Cookie() {
	let $win = make_embed_window({
		src: "./Programs/Games/Cookies/index.html",
		icons: iconsAtTwoSizes("Cookie"),
		title: "Cookie Clicker",
		innerWidth: 660,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Dino() {
	let $win = make_embed_window({
		src: "./Dino.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Chrome Dino",
		innerWidth: 700,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function JellyM() {
	let $win = make_embed_window({
		src: "./Programs/Games/mario/jellymar.io/index.html",
		icons: iconsAtTwoSizes("Mario"),
		title: "Jelly Mario",
		innerWidth: 800,
		innerHeight: 650
	});

	hidemenu();
	return new Task($win);
}

function MinecrapA() {
	let $win = make_embed_window({
		src: "./Programs/Games/Minecraft/MineCrap Alpha/index.html",
		icons: iconsAtTwoSizes("Minecraft"),
		title: "MineCrap Alpha",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Minecrap3() {
	let $win = make_embed_window({
		src: "./Programs/Games/Minecraft/MineCrap 1.3/index.html",
		icons: iconsAtTwoSizes("Minecraft"),
		title: "MineCrap 1.3",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Minecrap5() {
	let $win = make_embed_window({
		src: "./Programs/Games/Minecraft/MineCrap 1.5.2/index.html",
		icons: iconsAtTwoSizes("Minecraft"),
		title: "MineCrap 1.5.2",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function NoGame() {
	let $win = make_embed_window({
		src: "./Programs/Games/NoGame/index.html",
		icons: iconsAtTwoSizes("NoGame"),
		title: "There is No Game",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Power() {
	let $win = make_embed_window({
		src: "./Programs/Games/Power_Player_Super_Joy_III/index.html",
		icons: iconsAtTwoSizes("Power"),
		title: "Power Player Super Joy III",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Baldi() {
	let $win = make_embed_window({
		src: "./Programs/Games/Baldis%20Basics/index.html",
		icons: iconsAtTwoSizes("Baldi"),
		title: "Baldi's Basics",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Rioluvania() {
	let $win = make_embed_window({
		src: "./Programs/Games/Sans/Rioluvania/index.html",
		icons: iconsAtTwoSizes("Rioluvania"),
		title: "Rioluvania",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Sans() {
	let $win = make_embed_window({
		src: "./Programs/Games/Sans/Sans/index.html",
		icons: iconsAtTwoSizes("Rioluvania"),
		title: "Rioluvania",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Funky() {
	let $win = make_embed_window({
		src: "./Programs/Games/Funky Karts/index.html",
		icons: iconsAtTwoSizes("Funky"),
		title: "Funky Karts",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Mario2() {
	let $win = make_embed_window({
		src: "./Programs/Games/Mario/Mario/super.html",
		icons: iconsAtTwoSizes("Mario"),
		title: "Super Mario Bros.",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function MarMakr() {
	let $win = make_embed_window({
		src: "./Programs/Games/Mario/Mario/maker.html",
		icons: iconsAtTwoSizes("Mario"),
		title: "Super Mario Maker",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function iMario() {
	let $win = make_embed_window({
		src: "./Programs/Games/Mario/infinite/index.html",
		icons: iconsAtTwoSizes("Mario"),
		title: "Infinite Mario",
		innerWidth: 660,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function TBOI() {
	let $win = make_embed_window({
		src: "./Programs/Games/TBOI/index.html",
		icons: iconsAtTwoSizes("TBOI"),
		title: "The Binding of Isaac",
		innerWidth: 970,
		innerHeight: 696
	});

	hidemenu();
	return new Task($win);
}

function Rocket() {
	let $win = make_embed_window({
		src: "./Programs/Games/Rocket Custa/index.html",
		icons: iconsAtTwoSizes("Rocket"),
		title: "Rocket Custa",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Spelunky() {
	let $win = make_embed_window({
		src: "./Programs/Games/Spelunky/index.html",
		icons: iconsAtTwoSizes("Spelunky"),
		title: "Spelunky",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Button() {
	let $win = make_embed_window({
		src: "./Programs/Toys/Button/index.html",
		icons: iconsAtTwoSizes("Button"),
		title: "Button",
		innerWidth: 300,
		innerHeight: 300
	});

	hidemenu();
	return new Task($win);
}

function Clock() {
	let $win = make_embed_window({
		src: "./Programs/Toys/Clock/index.html",
		icons: iconsAtTwoSizes("Clock"),
		title: "Clock",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function AcidBox() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/Acid-Box/index.html",
		icons: iconsAtTwoSizes("AcidBox"),
		title: "Acid Box",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Star() {
	let $win = make_embed_window({
		src: "./Programs/Toys/StrWrz/index.html",
		icons: iconsAtTwoSizes("Starwars"),
		title: "Star Wars Episode IV",
		innerWidth: 830,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Zamboni() {
	let $win = make_embed_window({
		src: "./Programs/Games/Zamboni/index.html",
		icons: iconsAtTwoSizes("Zamboni"),
		title: "Frank Zamboni",
		innerWidth: 670,
		innerHeight: 292
	});

	hidemenu();
	return new Task($win);
}

function Soda() {
	let $win = make_embed_window({
		src: "./Programs/Toys/Soda/index.htm",
		icons: iconsAtTwoSizes("Soda"),
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
		icons: iconsAtTwoSizes("Ice"),
		title: "Ice Dodo",
		innerWidth: 700,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function GBC() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/Prometheus/index.html",
		icons: iconsAtTwoSizes("joystick"),
		title: "Games",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Emulator() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/Emulator/index.html",
		icons: iconsAtTwoSizes("joystick"),
		title: "Games",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Drift() {
	let $win = make_embed_window({
		src: "./programs/Games/Drift Hunters/index.html",
		icons: iconsAtTwoSizes("Drift"),
		title: "Drift Hunters",
		innerWidth: 1000,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function Surf1() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/SURF/S.U.R.F%201.0/index.html",
		icons: iconsAtTwoSizes("Surf"),
		title: "Microsoft Surf 1.0",
		innerWidth: 1000,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function Surf2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/SURF/S.U.R.F%202.0/index.html",
		icons: iconsAtTwoSizes("Surf"),
		title: "Microsoft Surf 2.0",
		innerWidth: 1000,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function Surf3() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/SURF/S.U.R.F%203.0/index.html",
		icons: iconsAtTwoSizes("Surf"),
		title: "Microsoft Surf 3.0",
		innerWidth: 1000,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function Hex() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/Race/index.html",
		icons: iconsAtTwoSizes("Hex"),
		title: "Hex GL",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Box() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/Boxel%20Rebound/index.html",
		icons: iconsAtTwoSizes("Box"),
		title: "Boxel Rebound",
		innerWidth: 360,
		innerHeight: 640
	});

	hidemenu();
	return new Task($win);
}

function Doom2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Doom2/Doom2.exe.html",
		icons: iconsAtTwoSizes("Doom2"),
		title: "Doom 2",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function Master() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Master/Master.exe.html",
		icons: iconsAtTwoSizes("Master"),
		title: "The Master Levels for Doom 2",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function UD2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/UD2/UD2.exe.html",
		icons: iconsAtTwoSizes("UD2"),
		title: "The Ultimate Doom 2",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function MSCMD() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/CMD.html",
		icons: iconsAtTwoSizes("msdos"),
		title: "MS-CMD",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function StarDoom() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/StarWars/StarWars.exe.html",
		icons: iconsAtTwoSizes("SDoom"),
		title: "Star Wars Doom",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function BatDoom() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Batman/Batman.exe.html",
		icons: iconsAtTwoSizes("Batman"),
		title: "Batman Doom",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function BDoom2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Brutal/Brutal.exe.html",
		icons: iconsAtTwoSizes("BDoom"),
		title: "Brutal Doom 2",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function Nine() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/95/95.exe.html",
		icons: iconsAtTwoSizes("95"),
		title: "Windows 95",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function Duke() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Duke/Duke.exe.html",
		icons: iconsAtTwoSizes("Duke"),
		title: "Duke 3D",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function GTA() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/GTA/GTA.exe.html",
		icons: iconsAtTwoSizes("GTA"),
		title: "Grand Theft Auto",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function DTrail() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Trail/Oregon.exe.html",
		icons: iconsAtTwoSizes("Oregon"),
		title: "Deluxe Oregon Trail",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Trail() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Trail2/Oregon.exe.html",
		icons: iconsAtTwoSizes("Trail"),
		title: "Oregon Trail",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Castle() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/CW/CW.exe.html",
		icons: iconsAtTwoSizes("Castle"),
		title: "Castle Wolfenstien",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Doom() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Doom/Doom.exe.html",
		icons: iconsAtTwoSizes("Doom"),
		title: "Ultimate Doom",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Heretic() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Heretic/Heretic.exe.html",
		icons: iconsAtTwoSizes("Heretic"),
		title: "Heretic",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Heretic2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Heretic2/Heretic2.exe.html",
		icons: iconsAtTwoSizes("Heretic2"),
		title: "Heretic 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Hexen() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Hexen/Hexen.exe.html",
		icons: iconsAtTwoSizes("Hexen"),
		title: "Hexen",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Plutonia() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Plutonia/Plutonia.exe.html",
		icons: iconsAtTwoSizes("Plutonia"),
		title: "Plutonia",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Plutonia2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Plutonia2/PL2.exe.html",
		icons: iconsAtTwoSizes("Plutonia2"),
		title: "Plutonia 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function TNT() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/TNT/TNT.exe.html",
		icons: iconsAtTwoSizes("FDoom"),
		title: "TNT",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Sixty() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Doom64/64.exe.html",
		icons: iconsAtTwoSizes("64"),
		title: "Doom64",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Zero() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Zero/Zero.exe.html",
		icons: iconsAtTwoSizes("Zero"),
		title: "Doom Zero",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Quake() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Quake/Quake.exe.html",
		icons: iconsAtTwoSizes("Quake"),
		title: "Quake",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function QuakeM1() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/QuakeM1/Quake.exe.html",
		icons: iconsAtTwoSizes("Q1M"),
		title: "Quake Mission Pack 1",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function QuakeM2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/QuakeM2/Quake.exe.html",
		icons: iconsAtTwoSizes("Q1M"),
		title: "Quake Mission Pack 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Quake2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/Quake2-PlayN-MagnusPort/index.html",
		icons: iconsAtTwoSizes("Quake2"),
		title: "Quake 2",
		innerWidth: 1000,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Shool() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/School/School.exe.html",
		icons: iconsAtTwoSizes("School"),
		title: "Doom: School Shooter Edition",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Spear() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Spear/Spear.exe.html",
		icons: iconsAtTwoSizes("Spear"),
		title: "Spear of Destiny",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Rekkr() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Rekkr/Rekkr.exe.html",
		icons: iconsAtTwoSizes("Rekkr"),
		title: "Rekkr",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Strife() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Strife/Strife.exe.html",
		icons: iconsAtTwoSizes("Strife"),
		title: "Strife",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FreeDm() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/FreeDM/FreeDM.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "FreeDM",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Free1() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/free1/FreeDoom.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "FreeDoom: Phase 1",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Free2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/free2/FreeDoom2.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "FreeDoom: Phase 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FDoom() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Doom/FDoom.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "The Ultimate FreeDoom",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FDoom2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Doom2/FDoom2.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "FreeDoom Phase 2: Hell on Earth",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FDoom64() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Doom64/F64.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "FreeDoom 64",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FTNT() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/TNT/FTNT.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "FreeDoom: TNT Evilution",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FPL() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Plutonia/FPlutonia.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "FreeDoom: The Plutonia Experiment",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FPL2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Plutonia2/FPl2.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "FreeDoom: The Plutonia Experiment Phase 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FChex() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Chex1/FChex.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "FreeDoom: Chex Quest Phase 1",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FChex2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Chex2/FChex.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "FreeDoom: Chex Quest Phase 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function FChex3() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Chex3/FChex.exe.html",
		icons: iconsAtTwoSizes("FreeDoom"),
		title: "FreeDoom: Chex Quest Phase 3",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Wolf3D() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Wolf3D/Wolf.exe.html",
		icons: iconsAtTwoSizes("Wolf"),
		title: "Wolf 3D",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function BTSX() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/BTSX/BTSX.exe.html",
		icons: iconsAtTwoSizes("BTSX"),
		title: "Back to Saturn X",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function BTSX2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/BTSX2/BTSX2.exe.html",
		icons: iconsAtTwoSizes("BTSX"),
		title: "Back to Saturn X 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Chex1() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Chex1/Chex.exe.html",
		icons: iconsAtTwoSizes("Chex"),
		title: "Chex Quest 1",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Chex2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Chex2/Chex.exe.html",
		icons: iconsAtTwoSizes("Chex2"),
		title: "Chex Quest 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Chex3() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Chex3/Chex.exe.html",
		icons: iconsAtTwoSizes("Chex3"),
		title: "Chex Quest 3",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Doom2D() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Doom2D/Doom2D.exe.html",
		icons: iconsAtTwoSizes("2D"),
		title: "Doom 2D",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Dario1() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Mario/Mario.exe.html",
		icons: iconsAtTwoSizes("Dario"),
		title: "Mario Doom",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Dario2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Mario2/Mario2.exe.html",
		icons: iconsAtTwoSizes("Dario"),
		title: "Mario Doom 2",
		innerWidth: 665,
		innerHeight: 436
	});
	hidemenu();
	return new Task($win);
}

function Regular() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Regular/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Chrome Dino Game",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function BDay() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/BDay/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Birthday Edition",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function D3D() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/3D/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "3D Dino",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Godzilla() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Godzilla.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Godzilla",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Modz() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Mod/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Modded Chrome Dino Game",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Sonic1() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Sonic/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Sonic v1.0",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Sonic2() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/BSonic/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Sonic v1.2",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Batz() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Batman/Bats/Batman/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Batman",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Halloween() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Halloween.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Halloween",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Joker() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Joker/Jokes/Joker/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Joker",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Mines1() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Minecraft.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Minecraft v1.0",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Mines2() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Minecraft/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Minecraft v1.2",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Naruto() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Naruto.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Naruto",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Anime() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Anime/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Anime",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function DNyan() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Nyan.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Nyan",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Santa() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Santa.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Santa Claus",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function DMario1() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Super_Mario/Mars/Mario/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Super Mario v1.",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function DMario2() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Mario/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Super Mario v1.2",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function DMario3() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Maro/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Super Mario v1.3",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function DMario4() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Marilol/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Super Mario v1.4",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function MegaMan() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/MegaMan/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Mega-Man",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Vivaldi() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Vivaldi/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Vivaldi",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Covid() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Covid/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Covid",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Fish() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Fish/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Fish",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Guy() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Guy/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Kumamon Runner",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Zombie() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/Zombie/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Zombie Runner",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Mario1() {
	let $win = make_embed_window({
		src: "./Programs/Games/Mario/Mario/index.html",
		icons: iconsAtTwoSizes("Mario"),
		title: "Modded Super Mario Bros.",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Mario2() {
	let $win = make_embed_window({
		src: "./Programs/Games/Mario/Mario/super.html",
		icons: iconsAtTwoSizes("Mario"),
		title: "Super Mario Bros.",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function iMario() {
	let $win = make_embed_window({
		src: "./Programs/Games/Mario/infinite/index.html",
		icons: iconsAtTwoSizes("Mario"),
		title: "Infinite Mario",
		innerWidth: 660,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Cat() {
	let $win = make_embed_window({
		src: "./Programs/Games/Mario/Catmario/chrome/index.html",
		icons: iconsAtTwoSizes("Mario"),
		title: "Cat Mario",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Mari0() {
	let $win = make_embed_window({
		src: "./Programs/Games/Mario/Mari0/index.html",
		icons: iconsAtTwoSizes("Mario"),
		title: "Mari0",
		innerWidth: 800,
		innerHeight: 600
	});

	hidemenu();
	return new Task($win);
}

function Surf1() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/SURF/S.U.R.F%201.0/index.html",
		icons: iconsAtTwoSizes("Surf"),
		title: "Microsoft Surf 1.0",
		innerWidth: 660,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Surf2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/SURF/S.U.R.F%202.0/index.html",
		icons: iconsAtTwoSizes("Surf"),
		title: "Microsoft Surf 2.0",
		innerWidth: 660,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Surf3() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/SURF/S.U.R.F%203.0/index.html",
		icons: iconsAtTwoSizes("Surf"),
		title: "Microsoft Surf 3.0",
		innerWidth: 660,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function D4() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/Doom4/Doom4.exe.html",
		icons: iconsAtTwoSizes("4"),
		title: "Doom4",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function SMWDX() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/MS-DOS/SMWDX/SMWDX.exe.html",
		icons: iconsAtTwoSizes("Mario"),
		title: "Super Mario World Deluxe",
		innerWidth: 665,
		innerHeight: 436
	});

	hidemenu();
	return new Task($win);
}

function Ice() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/Ice/ICE%201.0/index.html",
		icons: iconsAtTwoSizes("Ice"),
		title: "Ice Dodo 1.0",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Ice2() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/Ice/ICE%202.0/index.html",
		icons: iconsAtTwoSizes("Ice"),
		title: "Ice Dodo 2.0",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Contranoid() {
	let $win = make_embed_window({
		src: "./Programs/Games/Brain Games/Contranoid/index.html",
		icons: iconsAtTwoSizes("Contranoid"),
		title: "Contranoid",
		innerWidth: 392,
		innerHeight: 539
	});

	hidemenu();
	return new Task($win);
}

function CDG() {
	let $win = make_embed_window({
		src: "./Programs/Games/Dino/index.html",
		icons: iconsAtTwoSizes("Dino"),
		title: "Chrome Dino Games",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Hi() {
	let $win = make_embed_window({
		src: "./Programs/Games/Brain Games/Oh Hi/index.html",
		icons: iconsAtTwoSizes("0HH1"),
		title: "OH H1",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function No() {
	let $win = make_embed_window({
		src: "./Programs/Games/Brain Games/Oh No/index.html",
		icons: iconsAtTwoSizes("0HN0"),
		title: "OH N0",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Quento() {
	let $win = make_embed_window({
		src: "./Programs/Games/Brain Games/Quento/index.html",
		icons: iconsAtTwoSizes("Quento"),
		title: "Quento",
		innerWidth: 500,
		innerHeight: 621
	});

	hidemenu();
	return new Task($win);
}

function Hextris() {
	let $win = make_embed_window({
		src: "./Programs/Games/Brain Games/Hextris/index.html",
		icons: iconsAtTwoSizes("Hextris"),
		title: "Hextris",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Pac() {
	let $win = make_embed_window({
		src: "./Programs/Games/arcade/PacMan/PacMan/index.html",
		icons: iconsAtTwoSizes("Pacman"),
		title: "PacMan 1.0",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Google1() {
	let $win = make_embed_window({
		src: "./Programs/Games/arcade/PacMan/google pacman/index.html",
		icons: iconsAtTwoSizes("Pacman"),
		title: "Google PacMan 1.2",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Google2() {
	let $win = make_embed_window({
		src: "./Programs/Games/arcade/PacMan/google pacman 2/index.html",
		icons: iconsAtTwoSizes("Pacman"),
		title: "Google PacMan 1.0",
		innerWidth: 1000,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Snake() {
	let $win = make_embed_window({
		src: "./Programs/Games/arcade/snake.html",
		icons: iconsAtTwoSizes("Snake"),
		title: "Snake",
		innerWidth: 500,
		innerHeight: 500
	});

	hidemenu();
	return new Task($win);
}

function Pong() {
	let $win = make_embed_window({
		src: "./Programs/Games/arcade/Pong/index.html",
		icons: iconsAtTwoSizes("Pong"),
		title: "Pong",
		innerWidth: 660,
		innerHeight: 505
	});

	hidemenu();
	return new Task($win);
}

function Tetriz() {
	let $win = make_embed_window({
		src: "./Programs/Games/arcade/tetris/tetris.html",
		icons: iconsAtTwoSizes("Tetris"),
		title: "Tetris 1.0",
		innerWidth: 500,
		innerHeight: 621
	});

	hidemenu();
	return new Task($win);
}

function Cubes() {
	let $win = make_embed_window({
		src: "./Programs/Games/arcade/tetris/cubes/index.html",
		icons: iconsAtTwoSizes("Tetris"),
		title: "Tetris 2.0",
		innerWidth: 500,
		innerHeight: 621
	});

	hidemenu();
	return new Task($win);
}

function Jelly() {
	let $win = make_embed_window({
		src: "./Programs/Games/arcade/tetris/Jelly/index.html",
		icons: iconsAtTwoSizes("Tetris"),
		title: "Jelly Tetris",
		innerWidth: 500,
		innerHeight: 621
	});

	hidemenu();
	return new Task($win);
}

function AIT() {
	let $win = make_embed_window({
		src: "./Programs/Games/arcade/tetris/AI/index.html",
		icons: iconsAtTwoSizes("Tetris"),
		title: "Tetris with AI",
		innerWidth: 500,
		innerHeight: 621
	});

	hidemenu();
	return new Task($win);
}

function SpaceI() {
	let $win = make_embed_window({
		src: "./Programs/Games/arcade/Space/index.html",
		icons: iconsAtTwoSizes("Space"),
		title: "Space Invaders",
		innerWidth: 850,
		innerHeight: 560
	});

	hidemenu();
	return new Task($win);
}

function Twenty() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/2048/2048/index.html",
		icons: iconsAtTwoSizes("Twenty"),
		title: "2048",
		innerWidth: 500,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function One() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/2048/Flappy-2048/index.html",
		icons: iconsAtTwoSizes("Twenty"),
		title: "Flappy 2048 1.0",
		innerWidth: 500,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Two() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/2048/Flappy-2048-2.0/index.html",
		icons: iconsAtTwoSizes("Twenty"),
		title: "Flappy 2048 2.0",
		innerWidth: 500,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Three() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/2048/2048-3D/index.html",
		icons: iconsAtTwoSizes("Twenty"),
		title: "2048 3D",
		innerWidth: 1000,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Four() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/2048/4/index.html",
		icons: iconsAtTwoSizes("Twenty"),
		title: "4",
		innerWidth: 500,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function AI() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/2048/2048-AI/index.html",
		icons: iconsAtTwoSizes("Twenty"),
		title: "2048 AI",
		innerWidth: 1000,
		innerHeight: 650
	});
	hidemenu();
	return new Task($win);
}

function Hardcore() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/2048/2048-Hardcore/index.html",
		icons: iconsAtTwoSizes("Twenty"),
		title: "2048 Hardcore",
		innerWidth: 500,
		innerHeight: 500
	});
	hidemenu();
	return new Task($win);
}

function Gore() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/GoreScript/index.html",
		icons: iconsAtTwoSizes("Gore"),
		title: "GoreScript Classic",
		innerWidth: 1000,
		innerHeight: 650
	});
	hidemenu();
	return new Task($win);
}

function VLC() {
	let $win = make_embed_window({
		src: "https://Adam-S-Amir.github.io/VLC-Media-Web-Player/index.html",
		icons: iconsAtTwoSizes("VLC"),
		title: "VLC Media Player",
		innerWidth: 1000,
		innerHeight: 650
	});
	hidemenu();
	return new Task($win);
}

function show_help(options) {
	const $help_window = $Window({
		title: options.title || "Help Topics",
		icons: iconsAtTwoSizes("chm"),
		resizable: true,
	})
	$help_window.addClass("help-window");

	let ignore_one_load = true;
	let back_length = 0;
	let forward_length = 0;

	const $main = $(E("div")).addClass("main");
	const $toolbar = $(E("div")).addClass("toolbar");
	const add_toolbar_button = (name, sprite_n, action_fn, enabled_fn) => {
		const $button = $("<button class='lightweight'>")
			.append($("<span>").text(name))
			.appendTo($toolbar)
			.on("click", () => {
				action_fn();
			});
		$("<div class='icon'/>")
			.appendTo($button)
			.css({
				backgroundPosition: `${-sprite_n * 55}px 0px`,
			});
		const update_enabled = () => {
			$button[0].disabled = enabled_fn && !enabled_fn();
		};
		update_enabled();
		$help_window.on("click", "*", update_enabled);
		$help_window.on("update-buttons", update_enabled);
		return $button;
	};
	const measure_sidebar_width = () =>
		$contents.outerWidth() +
		parseFloat(getComputedStyle($contents[0]).getPropertyValue("margin-left")) +
		parseFloat(getComputedStyle($contents[0]).getPropertyValue("margin-right")) +
		$resizer.outerWidth();
	const $hide_button = add_toolbar_button("Hide", 0, () => {
		const toggling_width = measure_sidebar_width();
		$contents.hide();
		$resizer.hide();
		$hide_button.hide();
		$show_button.show();
		$help_window.width($help_window.width() - toggling_width);
		$help_window.css("left", $help_window.offset().left + toggling_width);
	});
	const $show_button = add_toolbar_button("Show", 5, () => {
		$contents.show();
		$resizer.show();
		$show_button.hide();
		$hide_button.show();
		const toggling_width = measure_sidebar_width();
		$help_window.width($help_window.width() + toggling_width);
		$help_window.css("left", $help_window.offset().left - toggling_width);
		// $help_window.applyBounds() would push the window to fit (before trimming it only if needed)
		// Trim the window to fit (especially for if maximized)
		if ($help_window.offset().left < 0) {
			$help_window.width($help_window.width() + $help_window.offset().left);
			$help_window.css("left", 0);
		}
	}).hide();
	add_toolbar_button("Back", 1, () => {
		$iframe[0].contentWindow.history.back();
		ignore_one_load = true;
		back_length -= 1;
		forward_length += 1;
	}, () => back_length > 0);
	add_toolbar_button("Forward", 2, () => {
		$iframe[0].contentWindow.history.forward();
		ignore_one_load = true;
		forward_length -= 1;
		back_length += 1;
	}, () => forward_length > 0);
	add_toolbar_button("Options", 3, () => { }, () => false); // TODO: hotkey and underline on O
	add_toolbar_button("Web Help", 4, () => {
		iframe.src = "help/online_support.htm";
	});

	const $iframe = $("<iframe sandbox='allow-same-origin allow-scripts allow-forms allow-modals allow-popups allow-downloads'>")
		.attr({ src: "help/default.html" })
		.addClass("inset-deep");
	const iframe = $iframe[0];
	enhance_iframe(iframe);
	iframe.$window = $help_window; // for focus handling integration
	const $resizer = $(E("div")).addClass("resizer");
	const $contents = $(E("ul")).addClass("contents inset-deep");

	// TODO: fix race conditions
	$iframe.on("load", () => {
		if (!ignore_one_load) {
			back_length += 1;
			forward_length = 0;
		}
		iframe.contentWindow.location.href
		ignore_one_load = false;
		$help_window.triggerHandler("update-buttons");
	});

	$main.append($contents, $resizer, $iframe);
	$help_window.$content.append($toolbar, $main);

	$help_window.css({ width: 800, height: 600 });

	$iframe.attr({ name: "help-frame" });
	$iframe.css({
		backgroundColor: "white",
		border: "",
		margin: "1px",
	});
	$contents.css({
		margin: "1px",
	});
	$help_window.center();

	$main.css({
		position: "relative", // for resizer
	});

	const resizer_width = 4;
	$resizer.css({
		cursor: "ew-resize",
		width: resizer_width,
		boxSizing: "border-box",
		background: "var(--ButtonFace)",
		borderLeft: "1px solid var(--ButtonShadow)",
		boxShadow: "inset 1px 0 0 var(--ButtonHilight)",
		top: 0,
		bottom: 0,
		zIndex: 1,
	});
	$resizer.on("pointerdown", (e) => {
		let pointermove, pointerup;
		const getPos = (e) =>
			Math.min($help_window.width() - 100, Math.max(20,
				e.clientX - $help_window.$content.offset().left
			));
		$G.on("pointermove", pointermove = (e) => {
			$resizer.css({
				position: "absolute",
				left: getPos(e)
			});
			$contents.css({
				marginRight: resizer_width,
			});
		});
		$G.on("pointerup", pointerup = (e) => {
			$G.off("pointermove", pointermove);
			$G.off("pointerup", pointerup);
			$resizer.css({
				position: "",
				left: ""
			});
			$contents.css({
				flexBasis: getPos(e) - resizer_width,
				marginRight: "",
			});
		});
	});

	const parse_object_params = $object => {
		// parse an $(<object>) to a plain object of key value pairs
		const object = {};
		for (const param of $object.children("param").get()) {
			object[param.name] = param.value;
		}
		return object;
	};

	let $last_expanded;

	const make_$item = text => {
		const $item = $(E("div")).addClass("item").text(text);
		$item.on("mousedown", () => {
			$contents.find(".item").removeClass("selected");
			$item.addClass("selected");
		});
		$item.on("click", () => {
			const $li = $item.parent();
			if ($li.is(".folder")) {
				if ($last_expanded) {
					$last_expanded.not($li).removeClass("expanded");
				}
				$li.toggleClass("expanded");
				$last_expanded = $li;
			}
		});
		return $item;
	};

	const $default_item_li = $(E("li")).addClass("page");
	$default_item_li.append(make_$item("Welcome to Help").on("click", () => {
		$iframe.attr({ src: "help/default.html" });
	}));
	$contents.append($default_item_li);

	function renderItemFromContents(source_li, $folder_items_ul) {
		const object = parse_object_params($(source_li).children("object"));
		if ($(source_li).find("li").length > 0) {

			const $folder_li = $(E("li")).addClass("folder");
			$folder_li.append(make_$item(object.Name));
			$contents.append($folder_li);

			const $folder_items_ul = $(E("ul"));
			$folder_li.append($folder_items_ul);

			$(source_li).children("ul").children().get().forEach((li) => {
				renderItemFromContents(li, $folder_items_ul);
			});
		} else {
			const $item_li = $(E("li")).addClass("page");
			$item_li.append(make_$item(object.Name).on("click", () => {
				$iframe.attr({ src: `${options.root}/${object.Local}` });
			}));
			if ($folder_items_ul) {
				$folder_items_ul.append($item_li);
			} else {
				$contents.append($item_li);
			}
		}
	}

	$.get(options.contentsFile, hhc => {
		$($.parseHTML(hhc)).filter("ul").children().get().forEach((li) => {
			renderItemFromContents(li, null);
		});
	});

	// @TODO: keyboard accessability
	// $help_window.on("keydown", (e)=> {
	// 	switch(e.keyCode){
	// 		case 37:
	// 			show_error_message("MOVE IT");
	// 			break;
	// 	}
	// });
	var task = new Task($help_window);
	task.$help_window = $help_window;
	return task;
}

function Notepad(file_path) {
	// TODO: DRY the default file names and title code (use document.title of the page in the iframe, in make_embed_window)
	var document_title = file_path ? file_name_from_path(file_path) : "Untitled";
	var win_title = document_title + " - Notepad";
	// TODO: focus existing window if file is currently open?

	var $win = make_embed_window({
		src: "./A/Program Files/notepad/index.html" + (file_path ? ("?path=" + file_path) : ""),
		icons: iconsAtTwoSizes("notepad"),
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
		icons: iconsAtTwoSizes("paint"),
		// NOTE: in Windows 98, "untitled" is lowercase, but TODO: we should just make it consistent
		title: "untitled - Paint",
		outerWidth: 275,
		outerHeight: 400,
		minOuterWidth: 275,
		minOuterHeight: 400,
	});

	var contentWindow = $win.$iframe[0].contentWindow;

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

	// it seems like I should be able to use onload here, but when it works (overrides the function),
	// it for some reason *breaks the scrollbar styling* in jspaint
	// I don't know what's going on there

	// contentWindow.addEventListener("load", function(){
	// $(contentWindow).on("load", function(){
	// $win.$iframe.load(function(){
	// $win.$iframe[0].addEventListener("load", function(){
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

	return new Task($win);
}
Paint.acceptsFilePaths = true;

function Minesweeper() {
	var $win = make_embed_window({
		src: "./A/Program Files/minesweeper/index.html",
		icons: iconsAtTwoSizes("minesweeper"),
		title: "Minesweeper",
		innerWidth: 280,
		innerHeight: 320 + 21,
		resizable: false,
	});
	return new Task($win);
}

function SoundRecorder(file_path) {
	// TODO: DRY the default file names and title code (use document.title of the page in the iframe, in make_embed_window)
	var document_title = file_path ? file_name_from_path(file_path) : "Sound";
	var win_title = document_title + " - Sound Recorder";
	// TODO: focus existing window if file is currently open?
	var $win = make_embed_window({
		src: "./A/Program Files/sound-recorder/index.html" + (file_path ? ("?path=" + file_path) : ""),
		icons: iconsAtTwoSizes("speaker"),
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
		src: "./A/Program Files/js-solitaire/index.html",
		icons: iconsAtTwoSizes("solitaire"),
		title: "Solitaire",
		innerWidth: 585,
		innerHeight: 384 + 21,
	});
	return new Task($win);
}

function showScreensaver(iframeSrc) {
	const mouseDistanceToExit = 15;
	const $iframe = $("<iframe>").attr("src", iframeSrc);
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
	$iframe.css({
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
	$iframe.appendTo("body");
	const cleanUp = () => {
		$backing.remove();
		$iframe.remove();
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
	let $win = new $IframeWindow2({
		src: null,
		icons: iconsAtTwoSizes("settings"),
		title: "Settings",
		innerWidth: 665,
		innerHeight: 436
	});
	Settingz();
	hidemenu();
	return new Task($win);
}

function Store() {
	let $win = new $IframeWindow2({
		src: null,
		icons: iconsAtTwoSizes("Store"),
		title: "Software Center",
		innerWidth: 665,
		innerHeight: 436
	});
	StoreFront();
	hidemenu();
	return new Task($win);
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
		`./programs/pipes/index.html#${encodeURIComponent(JSON.stringify(options))}`
	);
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "Pipes()");
}

function FlowerBox() {
	showScreensaver("./programs/FlowerBox/index.html");
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "FlowerBox()");
}

function DVD() {
	showScreensaver("./Programs/Toys/DVD/index.html");
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "DVD()");
}

function Matrix() {
	showScreensaver("./programs/toys/matrix/index.html");
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "Matrix()");
}

function Dotz() {
	showScreensaver("./programs/toys/Dotz/index.html");
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "Dotz()");
}

function Bubz() {
	showScreensaver("./programs/toys/Bubbles/index.html");
	localStorage.removeItem("scv");
	localStorage.setItem("scv", "Bubz()");
}

function CommandPrompt() {
	var $win = make_embed_window({
		src: "./A/Program Files/command/index.html",
		icons: iconsAtTwoSizes("msdos"),
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
		icons: iconsAtTwoSizes("calculator"),
		title: "Calculator",
		innerWidth: 256,
		innerHeight: 208 + 21,
		minInnerWidth: 256,
		minInnerHeight: 208 + 21,
	});
	return new Task($win);
}

function Pinball() {
	var $win = make_embed_window({
		src: "./A/Program Files/pinball/space-cadet.html",
		icons: iconsAtTwoSizes("pinball"),
		title: "3D Pinball for Windows - Space Cadet",
		innerWidth: 600,
		innerHeight: 416 + 20, // @TODO: where's this 20 coming from?
		minInnerWidth: 600,
		minInnerHeight: 416 + 20,
		// resizable: false, // @TODO (maybe) once gray maximized button is implemented
		override_alert: false, // to handle the alert as a fatal error, and to compensate for overzealous preventDefault()
	});
	const $splash = $("<div>").css({
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		background: "url(images/pinball-splash.png) no-repeat center center",
		backgroundColor: "black",
		zIndex: $Window.Z_INDEX + 6000,
	}).appendTo("body");
	setTimeout(() => {
		$splash.remove(); // just in case
	}, 5000);
	$win.$content.find("iframe").on("game-loaded", () => { // custom event dispatched from within the iframe
		$splash.remove();
	});
	$win.$content.find("iframe").on("game-load-failed", () => { // custom event dispatched from within the iframe
		$splash.remove();
		// on some systems, if the game fails to load,
		// it may result in the canvas showing through to the desktop behind the browser window
		// let's call it a feature, tie it in thematically,
		// and pretend like we did it on purpose, to baffle and amuse.
		// This happens for me on Chrome on Ubuntu with Xfce, when coming out of suspend.
		// It says "Could not create renderer / Couldn't find matching render driver"
		// It keeps happening with live reload, but stops on a regular reload, or duplicating the tab.
		$win.title("Wormhole Window - Space Cadet");
	});
	return new Task($win);
}

function Explorer(address) {
	// TODO: DRY the default file names and title code (use document.title of the page in the iframe, in make_embed_window)
	var document_title = address;
	var win_title = document_title;
	// TODO: focus existing window if folder is currently open
	var $win = make_embed_window({
		src: "./A/Program Files/explorer/index.html" + (address ? ("?address=" + encodeURIComponent(address)) : ""),
		icons: iconsAtTwoSizes("folder-open"),
		title: win_title,
		// this is based on one measurement, but it uses different sizes depending on the screen resolution,
		// and may be different for different Explorer window types (Microsoft Internet Explorer, "Exploring", normal Windows Explorer*),
		// and may store the window positions, even for different types or folders, so I might have a non-standard default size measurement.
		// *See different types (resized for posing this screenshot): https://imgur.com/nxAcT9C
		innerWidth: Math.min(856, innerWidth * 0.9),
		innerHeight: Math.min(547, innerHeight * 0.7),
	});
	return new Task($win);
}
Explorer.acceptsFilePaths = true;

var webamp_bundle_loaded = false;
var load_winamp_bundle_if_not_loaded = function (includeButterchurn, callback) {
	// FIXME: webamp_bundle_loaded not actually set to true when loaded
	// TODO: also maybe handle already-loading-but-not-done
	if (webamp_bundle_loaded) {
		callback();
	} else {
		// TODO: parallelize (if possible)
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

// from https://github.com/jberg/butterchurn/blob/master/src/isSupported.js
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
// TODO: support opening multiple files at once
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
		// TODO: revokeObjectURL
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
		return; // TODO: queue up files?
	}
	winamp_loading = true;

	// This check creates a WebGL context, so don't do it if you try to open Winamp while it's opening or open.
	// (Otherwise it will lead to "WARNING: Too many active WebGL contexts. Oldest context will be lost.")
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
			}],
			// initialSkin: {
			// 	url: "./A/Program Files/winamp/skins/base-2.91.wsz",
			// },
			enableHotkeys: true,
			handleTrackDropEvent: (event) =>
				Promise.all(
					dragging_file_paths.map(filePathToTrack)
				),
			// TODO: filePickers
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
					// TODO: really blur
				}
			};
			winamp_interface.minimize = () => {
				// TODO: are these actually useful or does webamp hide it?
				$webamp.hide();
			};
			winamp_interface.unminimize = () => {
				// more to the point does this work necessarily??
				$webamp.show();
				// $webamp.focus();
			};
			winamp_interface.close = () => {
				// not allowing canceling close event in this case (generally used *by* an application (for "Save changes?"), not outside of it)
				// TODO: probably something like winamp_task.close()
				// winamp_interface.triggerHandler("close");
				// winamp_interface.triggerHandler("closed");
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
				// (did Winamp on Windows 98 animate minimize/restore?)
			};
			// @TODO: this wasn't supposed to be part of the API, but it's needed for the taskbar
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

			// TODO: replace with setInterval
			// Note: can't access butterchurn canvas image data during a requestAnimationFrame here
			// because of double buffering
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
			// TODO: show_error_message("Failed to load Webamp:", error);
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
	css: Notepad,
	d: Notepad,
	editorconfig: Notepad,
	filters: Notepad,
	gitattributes: Notepad,
	gitignore: Notepad,
	gitrepo: Notepad,
	h: Notepad,
	hhc: Notepad,
	hhk: Notepad,
	html: Notepad,
	ini: Notepad,
	js: Notepad,
	json: Notepad,
	log: Notepad,
	make: Notepad,
	map: Notepad,
	marks: Notepad,
	md: Notepad,
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
	htm: Explorer,
	html: Explorer,
	url: openURLFile,
	theme: openThemeFile,
	themepack: openThemeFile,
};

// Note: global systemExecuteFile called by explorer
function systemExecuteFile(file_path) {
	// execute file with default handler
	// like the START command in CMD.EXE

	withFilesystem(function () {
		var fs = BrowserFS.BFSRequire("fs");
		fs.stat(file_path, function (err, stats) {
			if (err) {
				return alert("Failed to get info about " + file_path + "\n\n" + err);
			}
			if (stats.isDirectory()) {
				Explorer(file_path);
			} else {
				var file_extension = file_extension_from_path(file_path);
				var program = file_extension_associations[file_extension.toLowerCase()];
				if (program) {
					if (!program.acceptsFilePaths) {
						alert(program.name + " does not support opening files via the virtual filesystem yet");
						return;
					}
					program(file_path);
				} else {
					alert("No program is associated with " + file_extension + " files");
				}
			}
		});
	});
}

// TODO: base all the desktop icons off of the filesystem
// Note: `C:\Windows\Desktop` doesn't contain My Computer, My Documents, Network Neighborhood, Recycle Bin, or Internet Explorer,
// or Connect to the Internet, or Setup MSN Internet Access,
// whereas `Desktop` does (that's the full address it shows; it's one of them "special locations")
var Create_Icon = function (options) {
	folder_view.add_item(new FolderViewItem({
		icons: {
			// @TODO: know what sizes are available
			[DESKTOP_ICON_SIZE]: getDeskIconPath(options.iconID, DESKTOP_ICON_SIZE),
		},
		...options,
	}));
};
Create_Icon({
	title: "My Computer",
	iconID: "my-computer",
	open: function () { systemExecuteFile("/A/"); },
	// file_path: "/",
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
	iconID: "solitaire",
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
	title: "Pinball",
	iconID: "pinball",
	open: Pinball,
	shortcut: false
});

Create_Icon({
	title: "VLC Media Player",
	iconID: "VLC",
	open: VLC
});

Create_Icon({
	title: "MS-CMD",
	iconID: "msdos",
	open: MSCMD
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