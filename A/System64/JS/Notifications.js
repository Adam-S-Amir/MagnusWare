let SoundLocation = "/A/System64/Audio/MagnusWare/"
let Asterisk = new Audio(window.location.origin + SoundLocation + "System Asterisk.wav");
let Notification = new Audio(window.location.origin + SoundLocation + "System Exclamation.wav");
let Battery = new Audio(window.location.origin + SoundLocation + "Low Battery Alarm.wav");
let CriticalBattery = new Audio(window.location.origin + SoundLocation + "Critical Battery Alarm.wav");
let SystemNotification = new Audio(window.location.origin + SoundLocation + "System Notification.wav");
let SystemExclamation = new Audio(window.location.origin + SoundLocation + "System Exclamation.wav");
let SystemHand = new Audio(window.location.origin + SoundLocation + "System Hand.wav");
let SecurityBand = new Audio(window.location.origin + SoundLocation + "Security Band.wav");
let LogOff = new Audio(window.location.origin + SoundLocation + "Windows Logoff.wav");

defaultMessageBoxTitle = "MagnusWare";
window.showMessageBox = window.showMessageBox || (({
	title = window.defaultMessageBoxTitle ?? "Alert",
	message,
	messageHTML,
	buttons = [{
		label: "OK",
		value: "ok",
		default: true
	}],
	iconID = "warning", // "error", "warning", "info", or "nuke" for deleting files/folders
	windowOptions = {}, // for controlling width, etc.
}) => {
	let $window, $message;
	const promise = new Promise((resolve, reject) => {
		$window = new $Window(Object.assign({
			title,
			resizable: false,
			innerWidth: 400,
			maximizeButton: false,
			minimizeButton: false,
		}, windowOptions));
		// $window.addClass("dialog-window horizontal-buttons");
		$message =
			$("<div>").css({
				textAlign: "left",
				fontFamily: "MS Sans Serif, Arial, sans-serif",
				fontSize: "14px",
				marginTop: "22px",
				flex: 1,
				minWidth: 0, // Fixes hidden overflow, see https://css-tricks.com/flexbox-truncated-text/
				whiteSpace: "normal", // overriding .window:not(.squish)
			});
		if (messageHTML) {
			$message.html(messageHTML);
		} else if (message) { // both are optional because you may populate later with dynamic content
			$message.text(message).css({
				whiteSpace: "pre-wrap",
				wordWrap: "break-word",
			});
		}
		$("<div>").append(
			$("<img width='32' height='32'>").attr("src", `./A/System64/images/icons/${iconID}-32x32.png`).css({
				margin: "16px",
				display: "block",
			}),
			$message
		).css({
			display: "flex",
			flexDirection: "row",
		}).appendTo($window.$content);

		$window.$content.css({
			textAlign: "center",
		});
		for (const button of buttons) {
			const $button = $window.$Button(button.label, () => {
				button.action?.(); // API may be required for using user gesture requiring APIs
				resolve(button.value);
				$window.close(); // actually happens automatically
			});
			if (button.default) {
				$button.addClass("default");
				$button.focus();
				setTimeout(() => $button.focus(), 0); // @TODO: why is this needed? does it have to do with the iframe window handling?
			}
			$button.css({
				minWidth: 75,
				height: 23,
				margin: "16px 2px",
			});
		}
		$window.on("focusin", "button", (event) => {
			$(event.currentTarget).addClass("default");
		});
		$window.on("focusout", "button", (event) => {
			$(event.currentTarget).removeClass("default");
		});
		$window.on("closed", () => {
			resolve("closed"); // or "cancel"? do you need to distinguish?
		});
		$window.center();
		$window.focus();
	});
	promise.$window = $window;
	promise.$message = $message;
	promise.promise = promise; // for easy destructuring
	try {
		Asterisk.play();
	} catch (error) {
		console.log(`Failed to play ${Asterisk.src}: `, error);
	}
	return promise;
});

window.alert = (message) => {
	showMessageBox({
		message
	});
};

window.toast = window.toast || (({
	message,
	messageHTML,
	windowOptions = {}, // for controlling width, etc.
}) => {
	let $window, $message, $bar, $cls;
	const promise = new Promise((resolve, reject) => {
		// Create the window
		$window = document.createElement('div');
		$window.setAttribute('id', 'toast');
		Object.assign($window.style, {
			width: '250px',
			height: '80px',
			display: 'flex',
			"background-color": "var(--Menu)",
			flexDirection: 'column',
			position: 'fixed',
			"border-color": "var(--ButtonLight) var(--ButtonShadow) var(--ButtonShadow) var(--ButtonLight)",
			"border-style": "solid",
			"border-width": "2px 2px",
			"border-radius": "5px"
		});

		// Create the progress bar
		$bar = document.createElement('div');
		$bar.style.height = '18px';
		$bar.style.width = '100%';
		$bar.style.position = 'relative';
		$bar.style.background = 'linear-gradient(to right, var(--ActiveTitle) 0%, var(--GradientActiveTitle) 100%)';
		$bar.style.borderRadius = '5px';
		$bar.style.zIndex = '1';
		$bar.id = 'progressbar';
		$window.appendChild($bar);

		// Create the message container
		$message = document.createElement('div');
		$message.style.fontFamily = 'Orbitron';
		$message.style.fontSize = '14px';
		$message.style.marginTop = '22px';
		$message.style.bottom = '10px';
		$message.style.left = '20px';
		$message.style.position = 'relative';
		$message.style.minWidth = 0; // Fixes hidden overflow
		$message.style.whiteSpace = 'normal';
		$message.style.wordWrap = 'break-word';

		// Create the message content
		if (messageHTML) {
			$message.innerHTML = messageHTML;
		} else if (message) {
			$message.textContent = message;
			$message.style.whiteSpace = 'pre-wrap';
			$message.style.wordWrap = 'break-word';
		}

		// Append the message container to the window
		$window.appendChild($message);

		// Set styles for the window and content
		Object.assign($window.style, windowOptions);
		Object.assign($window.style, {
			top: '1px',
			right: '1px',
		});

		// Add the window to the document
		document.body.appendChild($window);

		// Focus the window
		$window.focus();
	});
	function move() {
		var elem = $("#progressbar");
		var width = 0;
		var id = setInterval(frame, 15);
		function frame() {
			if (width >= 99) {
				clearInterval(id);
				document.getElementById("toast").remove()
			} else {
				width++;
				elem.css('width', width + '%');
			}
		}
	}
	move();
	try {
		SystemExclamation.play();
	} catch (error) {
		console.log(`Failed to play ${SystemExclamation.src}: `, error);
	}

	return promise;
});

window.confirm = (message) => {
	toast({
		message
	});
};

