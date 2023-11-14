var __fs_initialized;
var __fs_errored;
var __fs_timed_out;
var __fs_waiting_callbacks = [];
const desktop_folder_path = "/A/desktop/";
const web_server_root_for_browserfs =
	location.href.match(/magnusware.vercel.app/) ?
		location.href.match(/.*magnusware.vercel.app/)[0] + "/" :
		`${window.location.origin}/`;

BrowserFS.configure({
	fs: "OverlayFS",
	options: {
		writable: {
			fs: "IndexedDB",
			options: {
				storeName: "A:&#92;"
			}
		},
		readable: {
			fs: "XmlHttpRequest",
			options: {
				index: web_server_root_for_browserfs + "filesystem-index.json",
				action: function() {
					console.log('JSON file loaded successfully.');
					// You can perform further actions here after the JSON file is loaded.
				}
			}
		}
	}
}, function (error) {
	if (error) {
		__fs_errored = true;
		if (__fs_waiting_callbacks.length) {
			console.warn(`The filesystem is not available. It failed to initialize due to the protocol "${window.location.protocol}".`);
		}
		__fs_waiting_callbacks = [];
		throw error;
	}
	__fs_initialized = true;
	for (var i = 0; i < __fs_waiting_callbacks.length; i++) {
		__fs_waiting_callbacks[i]();
	}
	__fs_waiting_callbacks = [];
});
setTimeout(function () {
	__fs_timed_out = true;
	if (__fs_waiting_callbacks.length) {
		console.warn("The filesystem is not working.");
	}
	__fs_waiting_callbacks = [];
}, 5000);

function withFilesystem(callback) {
	if (__fs_initialized) {
		callback();
	} else if (__fs_errored) {
		console.warn(`The filesystem is not available. It failed to initialize due to the protocol "${window.location.protocol}".`);
	} else if (__fs_timed_out) {
		console.warn("The filesystem is not working.");
	} else {
		__fs_waiting_callbacks.push(callback);
	}
}

function file_name_from_path(file_path) {
	return file_path.split("\\").pop().split("/").pop();
}

function file_extension_from_path(file_path) {
	return (file_path.match(/\.(\w+)$/) || [, ""])[1];
}