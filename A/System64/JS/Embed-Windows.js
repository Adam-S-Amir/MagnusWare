
var programs_being_loaded = 0;

function enhance_embed(embed) {
	var $embed = $(embed);

	$("body").addClass("loading-program");
	programs_being_loaded += 1;

	$embed.on("load", function () {

		if (--programs_being_loaded <= 0) {
			$("body").removeClass("loading-program");
		}

		try {
			console.assert(embed.contentWindow.document === embed.contentDocument); // just something that won't get optimized away if we were to ever use a minifier (or by the JIT compiler??)
		} catch (e) {
			return;
		}

		if (window.themeCSSProperties) {
			applyTheme(themeCSSProperties, embed.contentDocument.documentElement);
		}

		// Let the embed to handle mouseup events outside itself
		// (without using setPointerCapture)
		embed.contentDocument.addEventListener("mousedown", (event) => {
			var delegate_pointerup = function () {
				if (embed.contentWindow && embed.contentWindow.jQuery) {
					embed.contentWindow.jQuery("body").trigger("pointerup");
				}
				if (embed.contentWindow) {
					const event = new embed.contentWindow.MouseEvent("mouseup", { button: 0 });
					embed.contentWindow.dispatchEvent(event);
					const event2 = new embed.contentWindow.MouseEvent("mouseup", { button: 2 });
					embed.contentWindow.dispatchEvent(event2);
				}
				clean_up_delegation();
			};
			// @TODO: delegate pointermove events too?
			// @TODO: do delegation in os-gui.js library instead
			// is it delegation? I think I mean proxying (but I'm really tired and don't have internet right now so I can't say for sure haha)

			$G.on("mouseup blur", delegate_pointerup);
			embed.contentDocument.addEventListener("mouseup", clean_up_delegation);
			function clean_up_delegation() {
				$G.off("mouseup blur", delegate_pointerup);
				embed.contentDocument.removeEventListener("mouseup", clean_up_delegation);
			}
		});

		// Let the containing page handle keyboard events, with an opportunity to cancel them
		proxy_keyboard_events(embed);

		// on Wayback Machine, and embed's url not saved yet
		if (embed.contentDocument.querySelector("#error #livewebInfo.available")) {
			var message = document.createElement("div");
			message.style.position = "absolute";
			message.style.left = "0";
			message.style.right = "0";
			message.style.top = "0";
			message.style.bottom = "0";
			message.style.background = "#c0c0c0";
			message.style.color = "#000";
			message.style.padding = "50px";
			embed.contentDocument.body.appendChild(message);
			message.innerHTML = `<a target="_blank">Save this url in the Wayback Machine</a>`;
			message.querySelector("a").href =
				"https://web.archive.org/save/https://magnusware.vercel.app/" +
				embed.src.replace(/.*https:\/\/magnusware.vercel.app\/?/, "");
			message.querySelector("a").style.color = "blue";
		}

		var $contentWindow = $(embed.contentWindow);
		$contentWindow.on("pointerdown click", function (e) {
			embed.$window && embed.$window.focus();

			// from close_menus in $MenuBar
			$(".menu-button").trigger("release");
			// Close any rogue floating submenus
			$(".menu-popup").hide();
		});
		// We want to disable pointer events for other embeds, but not this one
		$contentWindow.on("pointerdown", function (e) {
			$embed.css("pointer-events", "all");
			$("body").addClass("drag");
		});
		$contentWindow.on("pointerup", function (e) {
			$("body").removeClass("drag");
			$embed.css("pointer-events", "");
		});
		// $("embed").css("pointer-events", ""); is called elsewhere.
		// Otherwise embeds would get stuck in this interaction mode

		embed.contentWindow.close = function () {
			embed.$window && embed.$window.close();
		};
		// TODO: hook into saveAs (a la FileSaver.js) and another function for opening files
		// embed.contentWindow.saveAs = function(){
		// 	saveAsDialog();
		// };

		// Don't override alert (except within the specific pages)
		// but override the underlying message box function that
		// the alert override uses, so that the message boxes can
		// go outside the window.
		embed.contentWindow.showMessageBox = (options) => {
			return showMessageBox({
				title: options.title ?? embed.contentWindow.defaultMessageBoxTitle,
				...options,
			});
		};
	});
	$embed.css({
		minWidth: 0,
		minHeight: 0, // overrides user agent styling apparently, fixes Sound Recorder
		flex: 1,
		border: 0, // overrides user agent styling
	});
}

// Let the containing page handle keyboard events, with an opportunity to cancel them
function proxy_keyboard_events(embed) {
	// Note: embed must be same-origin, or this will fail.
	for (const event_type of ["keyup", "keydown", "keypress"]) {
		embed.contentWindow.addEventListener(event_type, (event) => {
			const proxied_event = new KeyboardEvent(event_type, {
				target: embed,
				view: embed.ownerDocument.defaultView,
				bubbles: true,
				cancelable: true,
				key: event.key,
				keyCode: event.keyCode,
				which: event.which,
				code: event.code,
				shiftKey: event.shiftKey,
				ctrlKey: event.ctrlKey,
				metaKey: event.metaKey,
				altKey: event.altKey,
				repeat: event.repeat,
				//...@TODO: should it copy ALL properties?
			});
			const result = embed.dispatchEvent(proxied_event);
			// console.log("proxied", event, "as", proxied_event, "result", result);
			if (!result) {
				event.preventDefault();
			}
		}, true);
	}
}

function make_embed_window(options, id) {

	options.resizable ??= true;
	var $win = new $Window(options, id);

	var $embed = $win.$embed = $("<embed>").attr({ src: options.src });
	enhance_embed($embed[0]);
	$win.$content.append($embed);
	var embed = $win.embed = $embed[0];
	// TODO: should I instead of having embed.$window, have a get$Window type of dealio?
	// where all is $window needed?
	// I know it's used from within the embed contents as frameElement.$window
	embed.$window = $win;

	$embed.on("load", function () {
		$win.show();
		$win.focus();
	});

	$win.$content.css({
		display: "flex",
		flexDirection: "column",
	});

	// TODO: cascade windows
	$win.center();
	$win.hide();

	return $win;
}

// Fix dragging things (i.e. windows) over embeds (i.e. other windows)
// (when combined with a bit of css, .drag embed { pointer-events: none; })
// (and a similar thing in make_embed_window)
$(window).on("pointerdown", function (e) {
	//console.log(e.type);
	$("body").addClass("drag");
});
$(window).on("pointerup dragend blur", function (e) {
	//console.log(e.type);
	if (e.type === "blur") {
		if (document.activeElement.tagName.match(/embed/i)) {
			return;
		}
	}
	$("body").removeClass("drag");
	$("embed").css("pointer-events", "");
});

//# sourceURL=MagnusWare
