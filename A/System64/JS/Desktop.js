var $desktop = $(".desktop");
$desktop.css("touch-action", "none");

var folder_view = new FolderView(desktop_folder_path, {
	asDesktop: true,
	openFileOrFolder: (path) => {
		systemExecuteFile(path);
	},
});
$(folder_view.element).appendTo($desktop);

function setDesktopWallpaper(file, repeat, saveToLocalStorage) {
	const blob_url = URL.createObjectURL(file);
	$desktop.css({
		backgroundImage: `url(${blob_url})`,
		backgroundRepeat: repeat,
		backgroundPosition: "center",
		backgroundSize: "auto",
	});
	if (saveToLocalStorage) {
		var fr = new FileReader();
		window.fr = fr;
		fr.onload = () => {
			localStorage.setItem("wallpaper-data-url", fr.result);
			localStorage.setItem("wallpaper-repeat", repeat);
		};
		fr.onerror = () => {
			console.error("Error reading file (for setting wallpaper)", file);
		};
		fr.readAsDataURL(file);
	}
}
try {
	var wallpaper_data_url = localStorage.getItem("wallpaper-data-url");
	var wallpaper_repeat = localStorage.getItem("wallpaper-repeat");
	var theme_file_content = localStorage.getItem("desktop-theme");
	if (wallpaper_data_url) {
		fetch(wallpaper_data_url).then(r => r.blob()).then(file => {
			setDesktopWallpaper(file, wallpaper_repeat, false);
		});
	}
	if (theme_file_content) {
		loadThemeFromText(theme_file_content);
	}
} catch (error) {
	console.error(error);
}


function loadThemeFile(file) {
	var reader = new FileReader();
	reader.onload = () => {
		loadThemeFromText(reader.result);
	};
	reader.readAsText(file);
}

function applyTheme(cssProperties, documentElement = document.documentElement) {
	applyCSSProperties(cssProperties, {
		element: documentElement,
		recurseIntoIframes: true
	});
}

function loadThemeFromText(fileText) {
	var cssProperties = parseThemeFileString(fileText);
	applyTheme(cssProperties);
	window.themeCSSProperties = cssProperties;
}

$("html").on("dragover", function (event) {
	event.preventDefault();
	event.stopPropagation();
});
$("html").on("dragleave", function (event) {
	event.preventDefault();
	event.stopPropagation();
});
$("html").on("drop", function (event) {
	event.preventDefault();
	event.stopPropagation();
	var files = [...event.originalEvent.dataTransfer.files];
	for (var file of files) {
		if (file.name.match(/\.theme(pack)?$/i)) {
			loadThemeFile(file);
		}
	}
});

$(window).on("scroll focusin", () => {
	window.scrollTo(0, 0);
});