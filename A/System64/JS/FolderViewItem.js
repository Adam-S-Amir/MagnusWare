function FolderViewItem(options) {
	var $id = options.id;
	var $container = $(`<div class='desktop-icon' draggable='true' tabindex=-1 id='${$id}'/>`);
	var $icon_wrapper = $("<div class='icon-wrapper'/>").appendTo($container);
	var $selection_effect = $("<div class='selection-effect'/>").appendTo($icon_wrapper);
	var $title = $("<div class='title'/>").text(options.title);
	var $icon;
	$container.append($icon_wrapper, $title);


	let single_click_timeout;
	$container.on("dblclick", (event) => {
		if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
			return;
		}
		options.open();
		clearTimeout(single_click_timeout);
	});

	$title.on("click", () => {
		if (!$container[0]._was_selected_at_pointerdown) {
			return;
		}
		single_click_timeout = setTimeout(() => {
			if ($container.hasClass("selected")) {
				this.start_rename();
			}
		}, 500);
	});

	if (options.shortcut) {
		$container.addClass("shortcut");
	}
	$container[0].dataset.filePath = options.file_path;

	this.element = $container[0];

	this.icons = options.icons;
	this.iconSize = options.iconSize || DESKTOP_ICON_SIZE;

	this.file_path = options.file_path;
	this.is_system_folder = options.is_system_folder;

	this._update_icon = () => {
		if (this.icons) {
			const $old_icon = $icon;
			const src = this.icons[this.iconSize];
			$icon = $("<img class='icon'/>");
			$icon.attr({
				draggable: false,
				src,
				width: this.iconSize,
				height: this.iconSize,
			});
			$selection_effect[0].style.setProperty("--icon-image", `url("${src}")`);
			if ($old_icon) {
				$old_icon.replaceWith($icon);
			} else {
				$icon_wrapper.prepend($icon);
			}
		} else {
			$icon ?.remove();
			$icon = null;
			$selection_effect[0].style.setProperty("--icon-image", "none");
		}
		$icon_wrapper[0].style.setProperty("--icon-size", this.iconSize + "px");
	};
	this.setIcons = (new_icons) => {
		this.icons = new_icons;
		this._update_icon();
	};
	this.setIconSize = (new_size) => {
		if (this.iconSize === new_size) {
			return;
		}
		this.iconSize = new_size;
		this._update_icon();
	};
	this._update_icon();

	this.start_rename = () => {
		if (!options.rename) {
			return;
		}
		if ($container.hasClass("renaming")) {
			return;
		}
		$container.addClass("renaming");
		$container.attr("draggable", false);
		const old_title = $title.text();
		const $input = $("<input type='text'/>");
		$input.val(old_title);
		$input.on("keydown", (e) => {
			if (e.key === "Enter") {
				$container.focus();
				e.preventDefault();
			} else if (e.key === "Escape") {
				$input.val(old_title);
				$container.focus();
				e.preventDefault();
			}
		});
		$input.on("blur", () => {
			const new_title = $input.val();
			if (new_title.trim() === "") {
				showMessageBox({
					title: "Rename",
					message: "You must type a filename.",
					iconID: "error",
				}).then(() => {
					$input.focus();
				});
				return;
			}
			$input.remove();
			$title.text(new_title);
			$container.removeClass("renaming");
			$container.attr("draggable", true);
			if (new_title !== old_title) {
				options.rename(new_title)
					.catch((error) => {
						$title.text(old_title);
						alert("Failed to rename:\n\n" + error);
					});
			}
		});
		$title.empty().append($input);
		$input[0].focus();
		$input[0].select();
	};
}