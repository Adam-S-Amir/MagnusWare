var TAU = //////|//////
	/////     |     /////
	///         tau         ///
	///     ...--> | <--...     ///
	///     -'   one | turn  '-     ///
	//     .'         |         '.     //
	//     /           |           \     //
	//     |            | <-..       |     //
	//    |          .->|     \       |    //
	//    |         /   |      |      |    //
	- - - - - -Math.PI + Math.PI - - - - -0
//    |         \   |      |      |    //
//    |          '->|     /       |    //
//     |            | <-''       |     //
//     \           |           /     //
//     '.         |         .'     //
///     -.       |       .-     ///
///     '''----|----'''     ///
///          |          ///
//////     |     /////
//////|//////          C/r;

var $G = $(window);

function Cursor(cursor_def) {
	return "url(images/cursors/" + cursor_def[0] + ".png) " +
		cursor_def[1].join(" ") +
		", " + cursor_def[2]
}

function E(t) {
	return document.createElement(t);
}

var DESKTOP_ICON_SIZE = 48;
var TASKBAR_ICON_SIZE = 16;
var TITLEBAR_ICON_SIZE = 16;

// For Wayback Machine, match URLs like https://web.archive.org/web/20191213113214/https://98.js.org/
// (also match URLs like https://98.js.org/ because why not)
const web_server_root_for_icons =
	location.href.match(/98.js.org/) ?
	location.href.match(/.*98.js.org/)[0] + "/" :
		`${window.location.origin}/`;

/*
const web_server_root_for_icons: This declares a constant variable named web_server_root_for_icons.
location.href.match(/98.js.org/): This part of the code checks if the current URL (retrieved from location.href) contains the substring "98.js.org".
The match() function is used with a regular expression (/98.js.org/) to search for this substring within the URL.
If the previous check returns a truthy value (meaning "98.js.org" is found in the URL), the code within the ternary operator's first branch is executed:
location.href.match(/.*98.js.org/)[0] + "/": Here, the regular expression /.*98.js.org/ is used
to capture the entire part of the URL that matches the pattern "98.js.org" along with any characters preceding it.
The [0] index extracts the first (and only) match from the result of the match() function. The code then appends a trailing "/" to this matched URL part.
If the check in step 2 returns a falsy value (meaning "98.js.org" is not found in the URL), the code within the ternary operator's second branch is executed:
"/": In this case, the root path is set to just "/", indicating the base directory of the web server.
*/

function iconsAtTwoSizes(iconID) {
	return {
		16: `C/System32/Images/icons/${iconID}-16x16.png`,
		48: `C/System32/Images/icons/${iconID}-48x48.png`,
	};
}

function getIconPath(iconID, size) {
	return web_server_root_for_icons + "C/System32/Images/Icons/" + iconID + "-" + size + "x" + size + ".png";
}

function getDeskIconPath(iconID, size) {
	return window.location.href.replace("index.html", "") + "C/System32/Images/Icons/" + iconID + "-" + size + "x" + size + ".png";
}
function Canvas(width, height) {
	var new_canvas = E("canvas");
	var new_ctx = new_canvas.getContext("2d");
	new_ctx.imageSmoothingEnabled = false;
	new_ctx.mozImageSmoothingEnabled = false;
	new_ctx.webkitImageSmoothingEnabled = false;
	if (width && height) {
		// new Canvas(width, height)
		new_canvas.width = width;
		new_canvas.height = height;
	} else {
		// new Canvas(image)
		var copy_of = width;
		if (copy_of) {
			new_canvas.width = copy_of.width;
			new_canvas.height = copy_of.height;
			new_ctx.drawImage(copy_of, 0, 0);
		}
	}
	new_canvas.ctx = new_ctx;
	return new_canvas;
}

function mustHaveMethods(obj, methodNames) {
	for (const methodName of methodNames) {
		if (typeof obj[methodName] != 'function') {
			console.error("Missing method", methodName, "on object", obj);
			throw new TypeError("missing method " + methodName);
		}
	}
	return true;
}
const windowInterfaceMethods = [
	"close",
	"minimize",
	"unminimize",
	// "maximize",
	// "unmaximize",
	"bringToFront", // TODO: maybe setZIndex instead
	"getTitle",
	// "getIconName",
	"getIconAtSize",
	"focus",
	"blur",
	"onFocus",
	"onBlur",
	"onClosed",
];