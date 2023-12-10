let SoundLocation = "/A/System64/Audio/MagnusWare/"
let Asterisk = new Audio(SoundLocation + "System Asterisk.wav");
let Notification = new Audio(SoundLocation + "System Exclamation.wav");
let Battery = new Audio(SoundLocation + "Low Battery Alarm.wav");
let CriticalBattery = new Audio(SoundLocation + "Critical Battery Alarm.wav");
let DeviceFail = new Audio(SoundLocation + "Device Fail.wav");
let SystemNotification = new Audio(SoundLocation + "System Notification.wav");
let SystemExclamation = new Audio(SoundLocation + "System Exclamation.wav");
let SystemHand = new Audio(SoundLocation + "System Hand.wav");
let SecurityBand = new Audio(SoundLocation + "Security Band.wav");
let LogOn = new Audio(SoundLocation + "Windows Logon.wav");
let LogOff = new Audio(SoundLocation + "Windows Logoff.wav");
let Mute = new Audio().pause();

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
			$("<img width='32' height='32'>").attr("src", `./A/System64/Images/Icons/${iconID}-32x32.png`).css({
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
	sound = SystemHand,
	windowOptions = {}, // for controlling width, etc.
}) => {
	const toastQueue = document.getElementById('toast-queue') || createToastQueue();
	const activeToasts = document.querySelectorAll('.toast-window').length;

	if (activeToasts > 0) {
		console.log(`${activeToasts} active toasts.`);
	}

	const promise = new Promise((resolve, reject) => {
		// Create the window
		const window = document.createElement('div');
		window.classList.add('toast-window');
		Object.assign(window.style, {
			"width": '250px',
			"height": '80px',
			"background-color": "var(--Menu)",
			"border-color": "var(--ButtonLight) var(--ButtonShadow) var(--ButtonShadow) var(--ButtonLight)",
			"border-style": "solid",
			"border-width": "2px 2px",
			"border-radius": "5px",
			"margin-bottom": "5px",
		});

		// Create the progress bar
		const bar = document.createElement('div');
		bar.style.height = '18px';
		bar.style.width = '0%';
		bar.style.background = 'linear-gradient(to right, var(--ActiveTitle) 0%, var(--GradientActiveTitle) 100%)';
		bar.style.borderRadius = '5px';
		bar.id = 'progressbar';
		window.appendChild(bar);

		// Create the message container
		const messageHTML = document.createElement('div');
		messageHTML.style.fontFamily = 'Orbitron';
		messageHTML.style.fontSize = '14px';
		messageHTML.style.marginTop = '5px';
		messageHTML.style.padding = '5px';
		messageHTML.style.wordWrap = 'break-word';

		messageHTML.innerHTML = message;

		// Append the message container to the window
		window.appendChild(messageHTML);

		// Set styles for the window and content
		Object.assign(window.style, windowOptions);

		// Add the window to the queue
		toastQueue.appendChild(window);

		// Focus the window
		window.focus();
		try {
			sound.play();
		} catch (error) {
			console.log(`Failed to play ${sound}: `, error);
		}

		// Move progress bar
		move(bar, resolve, window);
	});

	function move(elem, callback, window) {
		let width = 0;
		const id = setInterval(frame, 15);

		function frame() {
			if (width >= 100) {
				clearInterval(id);
				// Remove the toast after completion
				window.remove();
				callback();
			} else {
				width++;
				elem.style.width = width + '%';
			}
		}
	}

	return promise;
});

function createToastQueue() {
	const toastQueue = document.createElement('div');
	toastQueue.id = 'toast-queue';
	toastQueue.style.position = 'fixed';
	toastQueue.style.top = '0';
	toastQueue.style.right = '0';
	toastQueue.style.zIndex = '9999';
	document.body.appendChild(toastQueue);
	return toastQueue;
}
window.confirm = (message) => {
	toast({
		message
	});
};

//# sourceURL=MagnusWare
