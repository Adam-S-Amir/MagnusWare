(() => {
	var $window_switcher = $("<div class='window-switcher outset-deep'>");
	var $window_switcher_list = $("<ul class='window-switcher-list'>").appendTo($window_switcher);
	var $window_switcher_window_name = $("<div class='window-switcher-window-name inset-deep'>").appendTo($window_switcher);
	var agent;
	var used_window_switcher = false;

	function activate_window($window) {
		$window.unminimize();
		$window.bringToFront();
		$window.focus();
	}

	function show_window_switcher(cycle_backwards) {
		if ($window_switcher.is(":visible")) {
			cycle_window_switcher(cycle_backwards);
			return;
		}
		$window_switcher_list.empty();
		const tasks = Task.all_tasks;
		if (tasks.length === 1) {
			activate_window(tasks[0].$window);
			if (!used_window_switcher) {
				agent ?.stopCurrent();
				agent ?.speak("If there's only one window, Alt+` will switch to it right away.");
			}
			return;
		}
		if (tasks.length < 2) {
			return;
		}
		tasks.sort((a, b) =>
			b.$window[0].style.zIndex - a.$window[0].style.zIndex
		);
		for (const task of tasks) {
			var $window = task.$window;
			var $item = $("<li>").addClass("window-switcher-item");
			$item.append($window.getIconAtSize(32) ?? $("<img>").attr({
				src: "/images/icons/task-32x32.png",
				width: 32,
				height: 32,
				alt: $window.getTitle()
			}));
			$item.data("$window", $window);
			$window_switcher_list.append($item);
			if ($window.hasClass("focused")) {
				$item.addClass("active");
			}
		}
		cycle_window_switcher(cycle_backwards);
		$window_switcher.appendTo("body");
		if (!used_window_switcher) {
			agent ?.stopCurrent();
			agent ?.speak("There you go! Press grave accent until you get to the window you want.");
			used_window_switcher = true;
		}
	}

	function cycle_window_switcher(cycle_backwards) {
		const items = $window_switcher.find(".window-switcher-item").toArray();
		const $active = $window_switcher.find(".active");
		const old_index = items.indexOf($active[0]);
		const new_index = ((old_index + (cycle_backwards ? -1 : 1)) + items.length) % items.length;
		$active.removeClass("active");
		const new_item = items[new_index];
		$(new_item).addClass("active");
		$window_switcher_window_name.text($(new_item).data("$window").getTitle());
	}

	function window_switcher_close_and_select() {
		if (!$window_switcher.is(":visible")) {
			return;
		}
		const $active = $window_switcher.find(".active");
		if ($active.length === 0) {
			return;
		}
		activate_window($active.data("$window"));
		$window_switcher.remove();
	}

	function window_switcher_cancel() {
		$window_switcher.remove();
	}

	window.addEventListener("keydown", handle_keydown, true);
	window.addEventListener("keyup", handle_keyup, true);
	window.addEventListener("blur", window_switcher_cancel);

	var iid;
	var alt_held = false;
	var notice_shown = false;

	function handle_keydown(e) {
		if (e.altKey && (e.key === "4" || e.key === "F4")) {
			e.preventDefault();
			const $window = e.target.closest(".os-window") ?.$window;
			console.log("Alt+4 detected, closing window", $window, e.target);
			$window ?.close();
		}
		if (e.altKey && (e.code === "Backquote" || e.code === "Tab")) {
			show_window_switcher(e.shiftKey);
		} else {
			window_switcher_cancel();
		}
		if (e.key === "Alt") {
			alt_held = true;
			clearInterval(iid);
			iid = setInterval(look_for_focus_loss, 200);
		}
	}

	function handle_keyup(e) {
		if (!e.altKey) {
			alt_held = false;
			clearInterval(iid);
			window_switcher_close_and_select();
		}
	}

	function look_for_focus_loss() {

		if (alt_held && !top.document.hasFocus()) {
			if (
				!top.document.activeElement ||
				top.document.activeElement === top.document.body ||
				top.document.activeElement === top.document.documentElement
			) {
				top.focus();
				if (top.document.hasFocus()) {
					return;
				} else {}
			} else {}


			clearInterval(iid);
			alt_held = false;

			if (Task.all_tasks.length < 2) {
				return;
			}
			if (!notice_shown) {
				clippy.load("Clippy", function (loaded_agent) {
					agent = loaded_agent;
					agent.show();
					const message = "It looks like you're trying to switch windows.\n\nUse Alt+` (grave accent) instead of Alt+Tab within MagnusWare.\n\nAlso, use Alt+4 instead of Alt+F4 to close windows.";
					agent.speak(message, true);
					$(agent._el).one("dblclick", function () {
						agent.stopCurrent();
						agent.animate();
					});
				});
				notice_shown = true;
			}
		}
	}

})();