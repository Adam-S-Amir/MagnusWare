const grid_size_x_for_large_icons = 75;
const grid_size_y_for_large_icons = 75;
const grid_size_x_for_small_icons = 17;
const grid_size_y_for_small_icons = 17;

window.resetAllFolderCustomizations = () => {
	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i).startsWith("folder-config:")) {
			localStorage.removeItem(localStorage.key(i));
		}
	}
};

const icon_size_by_view_mode = {
	LARGE_ICONS: 32,
	MEDIUM_ICONS: 48,
	SMALL_ICONS: 16,
	DETAILS: 16,
	LIST: 16,
	DESKTOP: 48,
};

FolderView.VIEW_MODES = {
	THUMBNAILS: "THUMBNAILS",
	LARGE_ICONS: "LARGE_ICONS",
	MEDIUM_ICONS: "MEDIUM_ICONS",
	SMALL_ICONS: "SMALL_ICONS",
	DETAILS: "DETAILS",
	LIST: "LIST",
	DESKTOP: "DESKTOP",
};

FolderView.SORT_MODES = {
	NAME: "NAME",
	TYPE: "TYPE",
	SIZE: "SIZE",
	DATE: "DATE",
};


var file_extension_icons = {
	"txt": "notepad-file",
	"py": "python",
	"md": "html",
	"json": "notepad-file",
	"js": "notepad-file",
	"css": "notepad-file",
	"html": "notepad-file",
	"png": "image-file",
	"svg": "image-file",
	"jpg": "image-file",
	"jpeg": "image-file",
	"gif": "image-file",
	"webp": "image-file",
	"bmp": "paint-file",
	"tif": "image-file",
	"tiff": "image-file",
	"otf": "font-file",
	"ttf": "font-file",
	"woff": "font-file",
	"eot": "font-file",
	"map": "JS-File",
	"js": "JS-File",
	"css": "CSS-File",
	"zip": "Archive",
	"rar": "Archive",
	"7z": "Archive",
	"tar": "Archive",
	"wav": "sound",
	"mp3": "sound",
	"ogg": "sound",
	"wma": "sound",
	"exe": "task",
	"htm": "html",
	"html": "html",
	"url": "url",
	"theme": "themes",
	"themepack": "themes",
};

const system_folder_path_to_name = {
	"/": "Your PC",
	"/your pictures/": "Your Pictures",
	"/your documents/": "Your Documents",
	"/da-hood/": "Network Neighborhood",
	"/desktop/": "Desktop",
	"/Program Files/": "Program Files",
	"/Program Files (x86)/": "Program Files (x86)",
};
const system_folder_name_to_path = Object.fromEntries(
	Object.entries(system_folder_path_to_name).map(([key, value]) => [value, key])
);
const system_folder_lowercase_name_to_path = Object.fromEntries(
	Object.entries(system_folder_name_to_path).map(([key, value]) => [key.toLowerCase(), value])
);


const set_dragging_file_paths = (dragging_file_paths) => {
	window.dragging_file_paths = dragging_file_paths;
	let frame = window;
	while (frame !== frame.parent) {
		frame = frame.parent;
		frame.dragging_file_paths = dragging_file_paths;
	}
};

function FolderView(folder_path, {
	asDesktop = false,
	onStatus,
	openFolder,
	openFileOrFolder,
	onConfigure
} = {}) {
	const self = this;

	var $folder_view = $(`<div class="folder-view" tabindex="0">`);

	this.element = $folder_view[0];

	this.items = [];

	this.add_item = (folder_view_item) => {
		$folder_view.append(folder_view_item.element);
		this.items.push(folder_view_item);
	};


	this.config = {};
	var storage_key = `folder-config:${asDesktop ? "desktop" : folder_path}`;
	try {
		const config_json = localStorage.getItem(storage_key);
		const config = JSON.parse(config_json);
		if (config) {
			Object.assign(this.config, config);
		}
	} catch (e) {
		console.error("Failed to read folder config:", e);
	}
	if (!FolderView.VIEW_MODES[this.config.view_mode]) {
		this.config.view_mode = asDesktop ?
			FolderView.VIEW_MODES.DESKTOP :
			FolderView.VIEW_MODES.LARGE_ICONS;
	}
	if (!FolderView.SORT_MODES[this.config.sort_mode]) {
		this.config.sort_mode = FolderView.SORT_MODES.NAME;
	}
	this.config.view_as_web_page ??= folder_path !== "/desktop/";

	this.element.dataset.viewMode = this.config.view_mode;
	this.configure = (config_props) => {
		Object.assign(this.config, config_props);
		if (config_props.view_mode) {
			this.element.dataset.viewMode = config_props.view_mode;
		}
		this.arrange_icons();
		try {
			localStorage.setItem(storage_key, JSON.stringify(this.config));
		} catch (e) {
			console.error("Can't write to localStorage:", e);
		}
		onConfigure ?.(config_props);
	};

	this.cycle_view_mode = () => {
		const view_modes = [
			FolderView.VIEW_MODES.LARGE_ICONS,
			FolderView.VIEW_MODES.SMALL_ICONS,
			FolderView.VIEW_MODES.LIST,
		];
		const current_view_mode_index = view_modes.indexOf(this.config.view_mode);
		const next_view_mode_index = (current_view_mode_index + 1) % view_modes.length;
		this.configure({
			view_mode: view_modes[next_view_mode_index]
		});
	};

	let waiting_on_stats = false;
	this.arrange_icons = () => {
		if (waiting_on_stats) {
			return;
		}
		if (!self.element.isConnected) {
			return;
		}
		const pending_promises = this.items.map((item) => item.pendingStatPromise).filter(Boolean);
		const any_pending = pending_promises.length > 0;
		if (any_pending) {
			if (!waiting_on_stats) {
				Promise.allSettled(pending_promises).then(() => {
					waiting_on_stats = false;
					self.arrange_icons();
				});
			}
			waiting_on_stats = true;
		}
		const horizontal_first =
			this.config.view_mode === FolderView.VIEW_MODES.LARGE_ICONS ||
			this.config.view_mode === FolderView.VIEW_MODES.SMALL_ICONS;
		const large_icons =
			this.config.view_mode === FolderView.VIEW_MODES.LARGE_ICONS ||
			this.config.view_mode === FolderView.VIEW_MODES.DESKTOP;
		const icon_size = icon_size_by_view_mode[this.config.view_mode] || 48;

		const grid_size_x = large_icons ? grid_size_x_for_large_icons : grid_size_x_for_small_icons;
		const grid_size_y = large_icons ? grid_size_y_for_large_icons : grid_size_y_for_small_icons;
		var x = 0;
		var y = 0;
		const dir_ness = (item) =>
			item.is_system_folder ? 2 :
			item.resolvedStats ?.isDirectory() ? 1 : 0;
		const get_ext = (item) => (item.file_path ?? "").split(".").pop();
		if (this.config.sort_mode === FolderView.SORT_MODES.NAME) {
			this.items.sort((a, b) =>
				dir_ness(b) - dir_ness(a) ||
				(a.title ?? "").localeCompare(b.title ?? "")
			);
		} else if (this.config.sort_mode === FolderView.SORT_MODES.TYPE) {
			this.items.sort((a, b) =>
				dir_ness(b) - dir_ness(a) ||
				(get_ext(a) ?? "").localeCompare(get_ext(b) ?? "")
			);
		} else if (this.config.sort_mode === FolderView.SORT_MODES.SIZE) {
			this.items.sort((a, b) =>
				dir_ness(b) - dir_ness(a) ||
				(a.resolvedStats ?.size ?? 0) - (b.resolvedStats ?.size ?? 0)
			);
		} else if (this.config.sort_mode === FolderView.SORT_MODES.DATE) {
			this.items.sort((a, b) =>
				dir_ness(b) - dir_ness(a) ||
				(a.resolvedStats ?.mtime ?? 0) - (b.resolvedStats ?.mtime ?? 0)
			);
		}
		for (const item of this.items) {
			$(item.element).css({
				top: y,
				left: x,
			});
			x += grid_size_x;
				if (x + grid_size_x > $folder_view[0].clientWidth) {
					y += grid_size_y;
					x = 0;
				}
			item.setIconSize(icon_size);
		}

		if (!any_pending) {
			this.items.forEach((item, index) => {
				item.element.classList.toggle("focused", index === 0);
			});
			this.items[0] ?.element.focus();
			updateStatus();
		}
	};

	function updateStatus() {
		onStatus ?.({
			items: self.items,
			selectedItems: self.items.filter((item) => item.element.classList.contains("selected")),
		});
	}

	function deleteRecursiveSync(fs, itemPath) {
		if (fs.statSync(itemPath).isDirectory()) {
			for (const childItemName of fs.readdirSync(itemPath)) {
				deleteRecursiveSync(itemPath + "/" + childItemName);
			}
			fs.rmdirSync(itemPath);
		} else {
			fs.unlinkSync(itemPath);
		}
	}

	self.focus = function () {
		if ($folder_view.is(":focus-within")) {
			return;
		}
		$folder_view.focus();
		if ($folder_view.find(".desktop-icon.focused").length === 0) {
			this.items[0] ?.element.focus();
		}
	};

	self.select_all = function () {
		$folder_view.find(".desktop-icon").addClass("selected");
		updateStatus();
	};

	self.select_inverse = function () {
		$folder_view.find(".desktop-icon").each(function () {
			$(this).toggleClass("selected");
		});
		updateStatus();
	};

	self.delete_selected = function () {
		const selected_file_paths = $folder_view.find(".desktop-icon.selected")
			.toArray().map((icon_el) => icon_el.dataset.filePath)
			.filter((file_path) => system_folder_path_to_name[file_path] === undefined);

		if (selected_file_paths.length === 0) {
			return;
		}
		const name_of_first = $folder_view.find(".desktop-icon.selected .title").text().replace(/\.([^.]+)$/, "");
		showMessageBox({
			title: selected_file_paths.length === 1 ? "Confirm File Delete" : "Confirm Multiple File Delete",
			message: selected_file_paths.length === 1 ?
				`Are you sure you want to delete '${name_of_first}'?` : `Are you sure you want to delete these ${selected_file_paths.length} items?`,
			buttons: [{
					label: "Yes",
					value: "yes",
					default: true,
				},
				{
					label: "No",
					value: "no",
				},
			],
			iconID: "nuke",
		}).then((result) => {
			if (result !== "yes") {
				return;
			}
			withFilesystem(function () {
				const fs = BrowserFS.BFSRequire('fs');
				let num_deleted = 0;
				let single_delete_success = false;
				for (const file_path of selected_file_paths) {
					try {
						deleteRecursiveSync(fs, file_path);
						single_delete_success = true;
						num_deleted += 1;
						folder_view.arrange_icons();
					} catch (error) {
						toast({
							message: `failed to delete ${file_path} ${error}`
						});
					}
					if (single_delete_success) {
						self.items.forEach((item) => {
							if (item.element.dataset.filePath === file_path) {
								item.element.remove();
								updateStatus();
								folder_view.arrange_icons();
							}
						});
					}
				}
			});
		});
	};

	self.start_rename = () => {
		for (const item of self.items) {
			if (item.element.classList.contains("focused")) {
				item.start_rename();
				break;
			}
		}
	};

	withFilesystem(function () {
		var fs = BrowserFS.BFSRequire('fs');
		fs.readdir(folder_path, function (error, contents) {
			if (error) {
				alert("Failed to read contents of the directory " + folder_path);
				throw error;
			}

			for (var i = 0; i < contents.length; i++) {
				var fname = contents[i];
				add_fs_item(fname, -1000, -1000);
			}
			self.arrange_icons();
		});
	});

	const resizeObserver = new ResizeObserver(entries => {
		self.arrange_icons();
	});
	resizeObserver.observe(self.element);

	(function () {
		var $marquee = $("<div class='marquee'/>").appendTo($folder_view).hide();
		var start = {
			x: 0,
			y: 0
		};
		var current = {
			x: 0,
			y: 0
		};
		var dragging = false;
		var drag_update = function () {
			var min_x = Math.min(start.x, current.x);
			var min_y = Math.min(start.y, current.y);
			var max_x = Math.max(start.x, current.x);
			var max_y = Math.max(start.y, current.y);
			$marquee.show().css({
				position: "absolute",
				left: min_x,
				top: min_y,
				width: max_x - min_x,
				height: max_y - min_y,
			});
			$folder_view.find(".desktop-icon").each(function (i, folder_view_icon) {
				var icon_offset = $(folder_view_icon).offset();
				var icon_left = parseFloat($(folder_view_icon).css("left"));
				var icon_top = parseFloat($(folder_view_icon).css("top"));
				var icon_width = $(folder_view_icon).width();
				var icon_height = $(folder_view_icon).height();
				folder_view_icon.classList.toggle("selected",
					icon_left < max_x &&
					icon_top < max_y &&
					icon_left + icon_width > min_x &&
					icon_top + icon_height > min_y
				);
			});
			updateStatus();
		};
		$folder_view.on("pointerdown", ".desktop-icon", function (e) {
			const item_el = e.currentTarget;
			item_el._was_selected_at_pointerdown = item_el.classList.contains("selected");
			select_item(item_el, e, true);
		});
		$folder_view.on("pointerdown", function (e) {
			var view_was_focused = $folder_view.is(":focus-within");
			self.focus();
			var $icon = $(e.target).closest(".desktop-icon");
			$marquee.hide();
			var folder_view_offset = self.element.getBoundingClientRect();
			start = {
				x: e.pageX - folder_view_offset.left + $folder_view[0].scrollLeft,
				y: e.pageY - folder_view_offset.top + $folder_view[0].scrollTop
			};
			current = {
				x: e.pageX - folder_view_offset.left + $folder_view[0].scrollLeft,
				y: e.pageY - folder_view_offset.top + $folder_view[0].scrollTop
			};
			if ($icon.length > 0) {
				$marquee.hide();
				set_dragging_file_paths($(".desktop-icon.selected").get().map((icon) =>
					icon.dataset.filePath
				).filter((file_path) => file_path));
			} else {
				set_dragging_file_paths([]);
				let scrollbar_width = $folder_view[0].offsetWidth - $folder_view[0].clientWidth;
				let scrollbar_height = $folder_view[0].offsetHeight - $folder_view[0].clientHeight;
				scrollbar_width += 2;
				scrollbar_height += 2;
				const rect = $folder_view[0].getBoundingClientRect();
				const over_scrollbar = e.clientX > rect.right - scrollbar_width || e.clientY > rect.bottom - scrollbar_height;
				dragging = !over_scrollbar;
				if (dragging && view_was_focused) {
					drag_update();
				}
			}
			$($folder_view[0].ownerDocument).on("pointermove", handle_pointermove);
			$($folder_view[0].ownerDocument).on("pointerup blur", handle_pointerup_blur);
		});

		function handle_pointermove(e) {
			var folder_view_offset = self.element.getBoundingClientRect();
			current = {
				x: e.pageX - folder_view_offset.left + $folder_view[0].scrollLeft,
				y: e.pageY - folder_view_offset.top + $folder_view[0].scrollTop
			};
			const scrollbar_width = $folder_view.width() - $folder_view[0].clientWidth;
			const scrollbar_height = $folder_view.height() - $folder_view[0].clientHeight;
			const clamp_left = $folder_view[0].scrollLeft;
			const clamp_top = $folder_view[0].scrollTop;
			const clamp_right = $folder_view.width() + $folder_view[0].scrollLeft - scrollbar_width;
			const clamp_bottom = $folder_view.height() + $folder_view[0].scrollTop - scrollbar_height;
			current.x = Math.max(clamp_left, Math.min(clamp_right, current.x));
			current.y = Math.max(clamp_top, Math.min(clamp_bottom, current.y));
			if (dragging) {
				drag_update();
				const scroll_speed = 10;
				if (current.x === clamp_left) {
					$folder_view[0].scrollLeft -= scroll_speed;
				} else if (current.x === clamp_right) {
					$folder_view[0].scrollLeft += scroll_speed;
				}
				if (current.y === clamp_top) {
					$folder_view[0].scrollTop -= scroll_speed;
				} else if (current.y === clamp_bottom) {
					$folder_view[0].scrollTop += scroll_speed;
				}
			}
		};

		function handle_pointerup_blur() {
			$marquee.hide();
			dragging = false;
			set_dragging_file_paths([]);
			$($folder_view[0].ownerDocument).off("pointermove", handle_pointermove);
			$($folder_view[0].ownerDocument).off("pointerup blur", handle_pointerup_blur);
		};
	})();

	let search_string = "";
	let search_timeout;

	$folder_view.on("keydown", function (e) {

		if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
			return;
		}
		if (e.key == "Enter") {
			$folder_view.find(".desktop-icon.selected").trigger("dblclick");
		} else if (e.ctrlKey && e.key == "a") {
			folder_view.select_all();
			e.preventDefault();
		} else if (e.key == "Delete") {
			self.delete_selected();
			e.preventDefault();
		} else if (
			e.key == "ArrowLeft" ||
			e.key == "ArrowRight" ||
			e.key == "ArrowUp" ||
			e.key == "ArrowDown"
		) {
			e.preventDefault();
			const move_x = e.key == "ArrowLeft" ? -1 : e.key == "ArrowRight" ? 1 : 0;
			const move_y = e.key == "ArrowUp" ? -1 : e.key == "ArrowDown" ? 1 : 0;
			navigate_grid(move_x, move_y, e);
		} else if (
			e.key == "PageUp" ||
			e.key == "PageDown"
		) {
			e.preventDefault();
			if (self.config.view_mode === FolderView.VIEW_MODES.LIST) {
				const x_dir = e.key == "PageUp" ? -1 : 1;
				const full_page_size = $folder_view.width();
				const item_width = $folder_view.find(".desktop-icon").outerWidth();
				const page_increment = full_page_size - item_width;
				for (let increment = page_increment; increment > 0; increment -= item_width) {
					if (navigate_grid(x_dir * increment / item_width, 0, e)) {
						break;
					}
				}
			} else {
				const y_dir = e.key == "PageUp" ? -1 : 1;
				const full_page_size = $folder_view.height();
				const item_height = $folder_view.find(".desktop-icon").outerHeight();
				const page_increment = full_page_size - item_height;
				for (let increment = page_increment; increment > 0; increment -= item_height) {
					if (navigate_grid(0, y_dir * increment / item_height, e)) {
						break;
					}
				}
			}
		} else if (e.key == "Home") {
			e.preventDefault();
			select_item(self.items[0], e);
		} else if (e.key == "End") {
			e.preventDefault();
			select_item(self.items[self.items.length - 1], e);
		} else if (e.key == " " && search_string.length === 0) {
			e.preventDefault();
			if ((e.ctrlKey || e.metaKey) && $folder_view.find(".desktop-icon.selected").length > 0) {
				$folder_view.find(".desktop-icon.focused").toggleClass("selected");
			} else {
				$folder_view.find(".desktop-icon.focused").addClass("selected");
			}
			updateStatus();
		} else if (e.key === "F2") {
			e.preventDefault();
			self.start_rename();
		} else {
			if (e.isDefaultPrevented() || e.ctrlKey || e.altKey || e.metaKey) {
				return;
			}
			if (search_timeout) {
				clearTimeout(search_timeout);
			}
			if (search_string === e.key) {
				const candidates = self.items.filter((item) => {
					const title = item.element.querySelector(".title").textContent;
					return title.toLocaleLowerCase().startsWith(search_string.toLocaleLowerCase());
				});
				if (candidates.length > 0) {
					const index = candidates.findIndex((item) => item.element.classList.contains("focused"));
					if (index === -1) {
						select_item(candidates[0], e);
					} else {
						select_item(candidates[(index + 1) % candidates.length], e);
					}
				}
			} else {
				if (e.key !== "Shift" && e.key !== "Compose") {
					search_string += e.key;
				}
				search_timeout = setTimeout(function () {
					search_string = "";
				}, 1000);

				if (search_string.length > 0) {
					for (const item of self.items) {
						const title = item.element.querySelector(".title").textContent;
						if (title.toLocaleLowerCase().startsWith(search_string.toLocaleLowerCase())) {
							select_item(item, {});
							break;
						}
					}
				}
			}
		}
	});

	var selection_anchor_item_el;

	function select_item(item_or_item_el, event, delay_scroll) {
		const item_el_to_select = item_or_item_el instanceof Element ? item_or_item_el : item_or_item_el.element;
		const extend_selection = event.shiftKey;
		if (selection_anchor_item_el && !self.items.some(item => item.element === selection_anchor_item_el)) {
			selection_anchor_item_el = null;
		}
		if (extend_selection && !selection_anchor_item_el) {
			selection_anchor_item_el = self.items.find((item) => item.element.classList.contains("focused")) ?.element ?? item_el_to_select;
		}
		$folder_view.find(".desktop-icon").each(function (i, item_el) {
			if (extend_selection) {
				const anchor_rect = selection_anchor_item_el.getBoundingClientRect();
				const item_el_to_select_rect = item_el_to_select.getBoundingClientRect();
				const item_el_rect = item_el.getBoundingClientRect();
				const rectangle = {
					top: Math.min(anchor_rect.top, item_el_to_select_rect.top),
					left: Math.min(anchor_rect.left, item_el_to_select_rect.left),
					bottom: Math.max(anchor_rect.bottom, item_el_to_select_rect.bottom),
					right: Math.max(anchor_rect.right, item_el_to_select_rect.right)
				};
				$(item_el).toggleClass("selected", (
					item_el_rect.top >= rectangle.top &&
					item_el_rect.left >= rectangle.left &&
					item_el_rect.bottom <= rectangle.bottom &&
					item_el_rect.right <= rectangle.right
				));
			} else {
				if (event.type === "pointerdown" && (event.ctrlKey || event.metaKey)) {
					if (item_el === item_el_to_select) {
						$(item_el).toggleClass("selected");
					}
				} else {
					if (!event.ctrlKey && !event.metaKey) {
						item_el.classList.toggle("selected", item_el === item_el_to_select);
					}
				}
			}
			item_el.classList.toggle("focused", item_el === item_el_to_select);
		});
		if (delay_scroll) {
			setTimeout(() => {
				item_el_to_select.scrollIntoView({
					block: "nearest"
				});
			}, 500);
		} else {
			item_el_to_select.scrollIntoView({
				block: "nearest"
			});
		}
		updateStatus();

		if (!event.shiftKey) {
			selection_anchor_item_el = item_el_to_select;
		}
	}

	function navigate_grid(move_x, move_y, event) {

		let $starting_icon = $folder_view.find(".desktop-icon.focused");
		if ($starting_icon.length == 0) {
			$starting_icon = $folder_view.find(".desktop-icon");
		}
		if ($starting_icon.length == 0) {
			return false;
		}
		const item_width = $starting_icon.outerWidth();
		const item_height = $starting_icon.outerHeight();
		const item_pos = $starting_icon[0].getBoundingClientRect();
		let x = item_pos.left;
		let y = item_pos.top;
		x += move_x * item_width;
		y += move_y * item_height;
		const candidates = $folder_view.find(".desktop-icon").toArray().sort(function (a, b) {
			const a_pos = a.getBoundingClientRect();
			const b_pos = b.getBoundingClientRect();
			const a_dist = Math.abs(a_pos.left - x) + Math.abs(a_pos.top - y);
			const b_dist = Math.abs(b_pos.left - x) + Math.abs(b_pos.top - y);
			return a_dist - b_dist;
		});
		const $icon = $(candidates[0]);
		if ($icon.length > 0) {
			select_item($icon[0], event);
			return true;
		}
		return false;
	}

	var stat = function (file_path) {
		var fs = BrowserFS.BFSRequire('fs');
		return new Promise(function (resolve, reject) {
			fs.stat(file_path, function (err, stats) {
				if (err) {
					return reject(err);
				}
				resolve(stats);
			});
		});
	};
	var icon_id_from_stats_and_path = function (stats, file_path) {
		if (stats.isDirectory()) {
			return "folder";
		}
		var file_extension = file_extension_from_path(file_path);
		var icon_name = file_extension_icons[file_extension.toLowerCase()];
		return icon_name || "document";
	};
	var icons_from_icon_id = function (icon_id) {
		return {
			16: getIconPath(icon_id, 16),
			32: getIconPath(icon_id, 32),
			48: getIconPath(icon_id, 48),
		};
	};

	var add_fs_item = function (initial_file_name, x, y) {
		var initial_file_path = folder_path + initial_file_name;
		var item = new FolderViewItem({
			title: initial_file_name,
			open: async function () {
				if (openFolder) {
					let stats = item.resolvedStats;
					if (!stats) {
						if (item.pendingStatPromise) {
							try {
								stats = await item.pendingStatPromise;
							} catch (error) {
								alert(`Failed to get info about '${item.file_path}':\n\n${error}`);
								return;
							}
						} else {
							alert(`Cannot open '${item.file_path}'. File type information not available.`);
							return;
						}
					}
					if (stats.isDirectory()) {
						openFolder(item.file_path);
						return;
					}
				}
				if (openFileOrFolder) {
					openFileOrFolder(item.file_path);
					return;
				}
				alert(`No handler for opening files or folders.`);
			},
			rename: (new_name) => {
				var fs = BrowserFS.BFSRequire('fs');
				return new Promise(function (resolve, reject) {
					const new_file_path = folder_path + new_name;
					fs.rename(item.file_path, new_file_path, function (err) {
						if (err) {
							return reject(err);
						}
						resolve();
						item.file_path = new_file_path;
						item.title = new_name;
						item.element.dataset.filePath = new_file_path;
						if (item.resolvedStats) {
							const icon_id = icon_id_from_stats_and_path(item.resolvedStats, new_file_path);
							item.setIcons(icons_from_icon_id(icon_id));
						}
					});
				});
			},
			shortcut: initial_file_path.match(/\.url$/),
			file_path: initial_file_path,
			iconSize: icon_size_by_view_mode[self.config.view_mode],
		});
		item.pendingStatPromise = stat(initial_file_path);
		item.pendingStatPromise.then((stats) => {
			item.pendingStatPromise = null;
			item.resolvedStats = stats;
			const icon_id = icon_id_from_stats_and_path(stats, item.file_path);
			item.setIcons(icons_from_icon_id(icon_id));
		}, (error) => {
			item.pendingStatPromise = null;
		});
		self.add_item(item);
		$(item.element).css({
			left: x,
			top: y,
		});
	};
	var drop_file = function (file, x, y) {

		var Buffer = BrowserFS.BFSRequire('buffer').Buffer;
		var fs = BrowserFS.BFSRequire('fs');

		var file_path = folder_path + file.name;

		var reader = new FileReader;
		reader.onerror = function (error) {
			throw error;
		};
		reader.onload = function (e) {
			var buffer = Buffer.from(reader.result);
			fs.writeFile(file_path, buffer, {
				flag: "wx"
			}, function (error) {
				if (error) {
					if (error.code === "EEXIST") {
						alert("File already exists!");
					}
					throw error;
				}

				add_fs_item(file.name, x, y);
			});
		};
		reader.readAsArrayBuffer(file);
	};

	var dragover_pageX = 0;
	var dragover_pageY = 0;
	$folder_view.on("dragover", function (e) {
		e.preventDefault();
		dragover_pageX = e.originalEvent.pageX;
		dragover_pageY = e.originalEvent.pageY;
	});
	$folder_view.on("drop", function (e) {
		e.preventDefault();
		var x = e.originalEvent.pageX || dragover_pageX;
		var y = e.originalEvent.pageY || e.dragover_pageY
		withFilesystem(function () {
			var files = e.originalEvent.dataTransfer.files;
			$.map(files, function (file) {
				drop_file(file, x, y);
			});
		});
	});
}