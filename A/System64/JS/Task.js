Task.all_tasks = [];

function Task(win, id) {
	Task.all_tasks.push(this);

	this.$window = win;

	const $task = this.$task = $(`<button class='task toggle' id="${id}"/>`).appendTo($(".tasks"));
	// const $title = $("<span class='title'/>");

	// this.updateTitle = () => {
	// 	$title.text(win.getTitle());
	// };

	let $icon;
	this.updateIcon = () => {
		const old_$icon = $icon;
		$icon = win.getIconAtSize(32);
		if (!$icon) {
			old_$icon ?.remove();
			return;
		}
		if (old_$icon) {
			old_$icon.replaceWith($icon);
		} else {
			$task.prepend($icon);
		}
	};

	// this.updateTitle();
	this.updateIcon();

	// win.on("title-change", this.updateTitle);
	win.on("icon-change", this.updateIcon);

	win.setMinimizeTarget($task[0]);

	$task.append($icon);
	$task.on("pointerdown", function (e) {
		e.preventDefault();
	});
	$task.on("click", function () {
		if ($task.hasClass("selected")) {
			win.minimize();
			win.blur();
		} else {
			win.unminimize();
			win.bringToFront();
			win.focus();
		}
	});

	win.onFocus(() => {
		$task.addClass("selected");
	});
	win.onBlur(() => {
		$task.removeClass("selected");
	});
	win.onClosed(() => {
		$task.remove();
		const index = Task.all_tasks.indexOf(this);
		if (index !== -1) {
			Task.all_tasks.splice(index, 1);
		}
	});

	if (win.is && win.is(":visible")) {
		win.focus();
	}
}