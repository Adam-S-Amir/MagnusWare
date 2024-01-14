((exports) => {

	function E(tagName) {
		return document.createElement(tagName);
	}

	function element_to_string(element) {
		if (typeof element === "object" && "tagName" in element) {
			return element.tagName.toLowerCase() +
				(element.id ? "#" + element.id : "") +
				(element.className ? "." + element.className.split(" ").join(".") : "") +
				(element.src ? `[src="${element.src}"]` : "") +
				(element.srcdoc ? "[srcdoc]" : "") +
				(element.href ? `[href="${element.href}"]` : "");
		} else if (element) {
			return element.constructor.name;
		} else {
			return `${element}`;
		}
	}

	function find_tabstops(container_el) {
		const $el = $(container_el);


		let $controls = $el.find(`
		input:enabled,
		textarea:enabled,
		select:enabled,
		button:enabled,
		a[href],
		[tabIndex='0'],
		details summary,
		embed,
		object,
		embed,
		video[controls],
		audio[controls],
		[contenteditable]:not([contenteditable='false'])
	`).filter(":visible");

		const radios = {};
		const to_skip = [];
		for (const el of $controls.toArray()) {
			if (el.nodeName.toLowerCase() === "input" && el.type === "radio") {
				if (radios[el.name]) {
					if (el.checked) {
						to_skip.push(radios[el.name]);
						radios[el.name] = el;
					} else {
						to_skip.push(el);
					}
				} else {
					radios[el.name] = el;
				}
			}
		}
		const $tabstops = $controls.not(to_skip);
		return $tabstops;
	}
	var $G = $(window);


	$Window.Z_INDEX = 5;

	var minimize_slots = [];

	function $Window(options, id) {
		options = options || {};

		var $w = $(E("div")).addClass("window os-window").appendTo("body");
		$w[0].$window = $w;
		$w.element = $w[0];
		$w[0].id = id || `os-window-${Math.random().toString(36).substr(2, 9)}`;
		$w.$titlebar = $(E("div")).addClass("window-titlebar").appendTo($w);
		$w.$title_area = $(E("div")).addClass("window-title-area").appendTo($w.$titlebar);
		$w.$title = $(E("span")).addClass("window-title").appendTo($w.$title_area);
		if (options.toolWindow) {
			options.minimizeButton = false;
			options.maximizeButton = false;
		}
		if (options.minimizeButton !== false) {
			$w.$minimize = $(E("button")).addClass("window-minimize-button window-action-minimize window-button").appendTo($w.$titlebar);
			$w.$minimize.attr("aria-label", "Minimize window");
			$w.$minimize.append("<span class='window-button-icon'></span>");
		}
		if (options.maximizeButton !== false) {
			$w.$maximize = $(E("button")).addClass("window-maximize-button window-action-maximize window-button").appendTo($w.$titlebar);
			$w.$maximize.attr("aria-label", "Maximize or restore window");
			if (!options.resizable) {
				$w.$maximize.attr("disabled", true);
			}
			$w.$maximize.append("<span class='window-button-icon'></span>");
		}
		if (options.closeButton !== false) {
			$w.$x = $(E("button")).addClass("window-close-button window-action-close window-button").appendTo($w.$titlebar);
			$w.$x.attr("aria-label", "Close window");
			$w.$x.append("<span class='window-button-icon'></span>");
		}
		$w.$content = $(E("div")).addClass("window-content").appendTo($w);
		$w.$content.attr("tabIndex", "-1");
		$w.$content.css("outline", "none");
		if (options.toolWindow) {
			$w.addClass("tool-window");
		}
		if (options.parentWindow) {
			options.parentWindow.addChildWindow($w);
			if (options.toolWindow) {
				$w[0].dataset.semanticParent = options.parentWindow[0].id;
			}
		}

		var $component = options.$component;
		if (typeof options.icon === "object" && "tagName" in options.icon) {
			options.icons = {
				any: options.icon
			};
		} else if (options.icon) {
			debugger;
			if (typeof $Icon !== "undefined" && typeof TITLEBAR_ICON_SIZE !== "undefined") {
				$w.icon_name = options.icon;
				$w.$icon = $Icon(options.icon, TITLEBAR_ICON_SIZE).prependTo($w.$titlebar);
			} else {
				throw new Error("Use {icon: img_element} or {icons: {16: url_or_img_element}} options");
			}
		}
		$w.icons = options.icons || {};
		let iconSize = 16;
		$w.setTitlebarIconSize = function (target_icon_size) {
			if ($w.icons) {
				$w.$icon ?.remove();
				$w.$icon = $($w.getIconAtSize(target_icon_size));
				$w.$icon.prependTo($w.$titlebar);
			}
			iconSize = target_icon_size;
			$w.trigger("icon-change");
		};
		$w.getTitlebarIconSize = function () {
			return iconSize;
		};
		$w.getIconAtSize = function (target_icon_size) {
			let icon_size;
			if ($w.icons[target_icon_size]) {
				icon_size = target_icon_size;
			} else if ($w.icons["any"]) {
				icon_size = "any";
			} else {
				const sizes = Object.keys($w.icons).filter(size => isFinite(size) && isFinite(parseFloat(size)));
				sizes.sort((a, b) => Math.abs(a - target_icon_size) - Math.abs(b - target_icon_size));
				icon_size = sizes[0];
			}
			if (icon_size) {
				const icon = $w.icons[icon_size];
				let icon_element;
				if (icon.nodeType !== undefined) {
					icon_element = icon.cloneNode(true);
				} else {
					icon_element = E("img");
					const $icon = $(icon_element);
					if (icon.srcset) {
						$icon.attr("srcset", icon.srcset);
					} else {
						$icon.attr("src", icon.src || icon);
					}
					$icon.attr({
						width: icon_size,
						height: icon_size,
						draggable: false,
					});
					$icon.css({
						width: target_icon_size,
						height: target_icon_size,
					});
				}
				return icon_element;
			}
			return null;
		};
		$w.setTitlebarIconSize(iconSize);

		$w.getIconName = () => {
			return $w.icon_name;
		};
		$w.setIconByID = (icon_name) => {
			var old_$icon = $w.$icon;
			$w.$icon = $Icon(icon_name, TITLEBAR_ICON_SIZE);
			old_$icon.replaceWith($w.$icon);
			$w.icon_name = icon_name;
			$w.task ?.updateIcon();
			$w.trigger("icon-change");
			return $w;
		};
		$w.setIcons = (icons) => {
			$w.icons = icons;
			$w.setTitlebarIconSize(iconSize);
			$w.task ?.updateIcon();
		};

		if ($component) {
			$w.addClass("component-window");
		}

		setTimeout(() => {
			if (get_direction() == "rtl") {
				$w.addClass("rtl");
			}
		}, 0);

		function get_direction() {
			return window.get_direction ? window.get_direction() : getComputedStyle($w[0]).direction;
		}

		const $event_target = $({});
		const make_simple_listenable = (name) => {
			return (callback) => {
				const fn = () => {
					callback();
				};
				$event_target.on(name, fn);
				const dispose = () => {
					$event_target.off(name, fn);
				};
				return dispose;
			};
		};
		$w.onFocus = make_simple_listenable("focus");
		$w.onBlur = make_simple_listenable("blur");
		$w.onClosed = make_simple_listenable("closed");

		$w.setDimensions = ({
			innerWidth,
			innerHeight,
			outerWidth,
			outerHeight
		}) => {
			let width_from_frame, height_from_frame;
			if (innerWidth) {
				width_from_frame = $w.outerWidth() - $w.$content.outerWidth();
			}
			if (innerHeight) {
				height_from_frame = $w.outerHeight() - $w.$content.outerHeight();
				const $menu_bar = $w.$content.find(".menus");
				if ($menu_bar.length) {
					height_from_frame += $menu_bar.outerHeight();
				}
			}
			if (outerWidth) {
				$w.outerWidth(outerWidth);
			}
			if (outerHeight) {
				$w.outerHeight(outerHeight);
			}
			if (innerWidth) {
				$w.outerWidth(innerWidth + width_from_frame);
			}
			if (innerHeight) {
				$w.outerHeight(innerHeight + height_from_frame);
			}
		};
		$w.setDimensions(options);

		let child_$windows = [];
		$w.addChildWindow = ($child_window) => {
			child_$windows.push($child_window);
		};
		const showAsFocused = () => {
			if ($w.hasClass("focused")) {
				return;
			}
			$w.addClass("focused");
			$event_target.triggerHandler("focus");
		};
		const stopShowingAsFocused = () => {
			if (!$w.hasClass("focused")) {
				return;
			}
			$w.removeClass("focused");
			$event_target.triggerHandler("blur");
		};
		$w.focus = () => {
			$w.bringToFront();
			refocus();
		};
		$w.blur = () => {
			stopShowingAsFocused();
			if (document.activeElement && document.activeElement.closest(".window") == $w[0]) {
				document.activeElement.blur();
			}
		};

		if (options.toolWindow) {
			if (options.parentWindow) {
				options.parentWindow.onFocus(showAsFocused);
				options.parentWindow.onBlur(stopShowingAsFocused);

				if (document.activeElement && document.activeElement.closest(".window") == options.parentWindow[0]) {
					showAsFocused();
				}
			} else {
				$(window).on("focus", showAsFocused);
				$(window).on("blur", stopShowingAsFocused);
				if (document.hasFocus()) {
					showAsFocused();
				}
			}
		} else {

			const global_focus_update_handler = make_focus_in_out_handler($w[0], true);
			window.addEventListener("focusin", global_focus_update_handler);
			window.addEventListener("focusout", global_focus_update_handler);
			window.addEventListener("blur", global_focus_update_handler);
			window.addEventListener("focus", global_focus_update_handler);

			function setupEmbed(embed) {
				if (!focus_update_handlers_by_container.has(embed)) {
					const embed_update_focus = make_focus_in_out_handler(embed, false);
					focus_update_handlers_by_container.set(embed, embed_update_focus);

					setTimeout(() => {
						try {
							const wait_for_embed_load = (callback) => {
								if (embed.contentDocument.readyState == "complete") {
									callback();
								} else {
									setTimeout(() => {
										wait_for_embed_load(callback);
									}, 100);
								}
							};
							wait_for_embed_load(() => {
								embed.contentWindow.addEventListener("focusin", embed_update_focus);
								embed.contentWindow.addEventListener("focusout", embed_update_focus);
								embed.contentWindow.addEventListener("blur", embed_update_focus);
								embed.contentWindow.addEventListener("focus", embed_update_focus);
								observeEmbeds(embed.contentDocument);
							});
						} catch (error) {
							warn_embed_access(embed, error);
						}
					}, 100);
				}
			}

			function observeEmbeds(container_node) {
				const observer = new MutationObserver((mutations) => {
					for (const mutation of mutations) {
						for (const node of mutation.addedNodes) {
							if (node.tagName == "EMBED") {
								setupEmbed(node);
							}
						}
					}
				});
				observer.observe(container_node, {
					childList: true,
					subtree: true
				});
				for (const embed of container_node.querySelectorAll("embed")) {
					setupEmbed(embed);
				}
			}

			observeEmbeds($w.$content[0]);

			function make_focus_in_out_handler(logical_container_el, is_root) {

				return function handle_focus_in_out(event) {
					const container_node = logical_container_el.tagName == "EMBED" ? logical_container_el.contentDocument : logical_container_el;
					const document = container_node.ownerDocument ?? container_node;

					let newly_focused = event ? (event.type === "focusout" || event.type === "blur") ? event.relatedTarget : event.target : document.activeElement;
					if (event ?.type === "blur") {
						newly_focused = null;
					}


					if (
						document.activeElement &&
						document.activeElement.tagName === "EMBED" &&
						(event ?.type === "focusout" || event ?.type === "blur") &&
						!newly_focused
					) {
						newly_focused = document.activeElement;
					}

					const outside_or_at_exactly = !newly_focused ||
						newly_focused.window === newly_focused ||
						!container_node.contains(newly_focused);
					const firmly_outside = outside_or_at_exactly && container_node !== newly_focused;

					if (firmly_outside && is_root) {
						stopShowingAsFocused();
					}
					if (
						!outside_or_at_exactly &&
						newly_focused.tagName !== "HTML" &&
						newly_focused.tagName !== "BODY" &&
						newly_focused !== container_node &&
						!newly_focused.matches(".window-content") &&
						!newly_focused.closest(".menus") &&
						!newly_focused.closest(".window-titlebar")
					) {
						last_focus_by_container.set(logical_container_el, newly_focused);
						debug_focus_tracking(document, container_node, newly_focused, is_root);
					}

					if (
						!outside_or_at_exactly &&
						newly_focused.tagName === "EMBED"
					) {
						const embed = newly_focused;
						try {
							const focus_in_embed = embed.contentDocument.activeElement;
							if (
								focus_in_embed &&
								focus_in_embed.tagName !== "HTML" &&
								focus_in_embed.tagName !== "BODY" &&
								!focus_in_embed.closest(".menus")
							) {
								last_focus_by_container.set(embed, focus_in_embed);
								debug_focus_tracking(embed.contentDocument, embed.contentDocument, focus_in_embed, is_root);
							}
						} catch (e) {
							warn_embed_access(embed, e);
						}
					}


					if (is_root) {
						do {
							const waypoint = newly_focused ?.closest ?.("[data-semantic-parent]");
							if (waypoint) {
								const id = waypoint.dataset.semanticParent;
								const parent = waypoint.ownerDocument.getElementById(id);
								newly_focused = parent;
								if (!parent) {
									break;
								}
							} else {
								break;
							}
						} while (true);
					}

					if (
						newly_focused &&
						newly_focused.window !== newly_focused &&
						container_node.contains(newly_focused)
					) {
						showAsFocused();
						$w.bringToFront();
						if (!is_root) {
							let el = logical_container_el;
							while (el) {
								el.dispatchEvent(new Event("focusin", {
									bubbles: true,
									target: el,
									view: el.ownerDocument.defaultView,
								}));
								el = el.currentView ?.frameElement;
							}
						}
					} else if (is_root) {
						stopShowingAsFocused();
					}
				}
			}
		}

		$w.css("touch-action", "none");

		let minimize_target_el = null;
		$w.setMinimizeTarget = function (new_taskbar_button_el) {
			minimize_target_el = new_taskbar_button_el;
		};

		let task;
		Object.defineProperty($w, "task", {
			get() {
				return task;
			},
			set(new_task) {
				task = new_task;
			},
		});

		let before_minimize;
		$w.minimize = () => {
			minimize_target_el = minimize_target_el || task ?.$task[0];
			if (animating_titlebar) {
				when_done_animating_titlebar.push($w.minimize);
				return;
			}
			if ($w.is(":visible")) {
				if (minimize_target_el && !$w.hasClass("minimized-without-taskbar")) {
					const before_rect = $w.$titlebar[0].getBoundingClientRect();
					const after_rect = minimize_target_el.getBoundingClientRect();
					$w.animateTitlebar(before_rect, after_rect, () => {
						$w.hide();
						$w.blur();
					});
				} else {


					const to_width = 150;
					const spacing = 10;
					if ($w.hasClass("minimized-without-taskbar")) {
						minimize_slots[$w._minimize_slot_index] = null;
					} else {
						let i = 0;
						while (minimize_slots[i]) {
							i++;
						}
						$w._minimize_slot_index = i;
						minimize_slots[i] = $w;
					}
					const to_x = $w._minimize_slot_index * (to_width + spacing) + 10;
					const titlebar_height = $w.$titlebar.outerHeight();
					let before_unminimize;
					const instantly_minimize = () => {
						before_minimize = {
							position: $w.css("position"),
							left: $w.css("left"),
							top: $w.css("top"),
							width: $w.css("width"),
							height: $w.css("height"),
						};

						$w.addClass("minimized-without-taskbar");
						if ($w.hasClass("maximized")) {
							$w.removeClass("maximized");
							$w.addClass("was-maximized");
							$w.$maximize.removeClass("window-action-restore");
							$w.$maximize.addClass("window-action-maximize");
						}
						$w.$minimize.removeClass("window-action-minimize");
						$w.$minimize.addClass("window-action-restore");
						if (before_unminimize) {
							$w.css({
								position: before_unminimize.position,
								left: before_unminimize.left,
								top: before_unminimize.top,
								width: before_unminimize.width,
								height: before_unminimize.height,
							});
						} else {
							$w.css({
								position: "fixed",
								top: `calc(100% - ${titlebar_height + 5}px)`,
								left: to_x,
								width: to_width,
								height: titlebar_height,
							});
						}
					};

					const instantly_unminimize = () => {
						before_unminimize = {
							position: $w.css("position"),
							left: $w.css("left"),
							top: $w.css("top"),
							width: $w.css("width"),
							height: $w.css("height"),
						};

						$w.removeClass("minimized-without-taskbar");
						if ($w.hasClass("was-maximized")) {
							$w.removeClass("was-maximized");
							$w.addClass("maximized");
							$w.$maximize.removeClass("window-action-maximize");
							$w.$maximize.addClass("window-action-restore");
						}
						$w.$minimize.removeClass("window-action-restore");
						$w.$minimize.addClass("window-action-minimize");
						$w.css({
							width: "",
							height: ""
						});
						if (before_minimize) {
							$w.css({
								position: before_minimize.position,
								left: before_minimize.left,
								top: before_minimize.top,
								width: before_minimize.width,
								height: before_minimize.height,
							});
						}
					};

					const before_rect = $w.$titlebar[0].getBoundingClientRect();
					let after_rect;
					$w.css("transform", "");
					if ($w.hasClass("minimized-without-taskbar")) {
						instantly_unminimize();
						after_rect = $w.$titlebar[0].getBoundingClientRect();
						instantly_minimize();
					} else {
						instantly_minimize();
						after_rect = $w.$titlebar[0].getBoundingClientRect();
						instantly_unminimize();
					}
					$w.animateTitlebar(before_rect, after_rect, () => {
						if ($w.hasClass("minimized-without-taskbar")) {
							instantly_unminimize();
						} else {
							instantly_minimize();
							$w.blur();
						}
					});
				}
			}
		};
		$w.unminimize = () => {
			if (animating_titlebar) {
				when_done_animating_titlebar.push($w.unminimize);
				return;
			}
			if ($w.hasClass("minimized-without-taskbar")) {
				$w.minimize();
				return;
			}
			if ($w.is(":hidden")) {
				const before_rect = minimize_target_el.getBoundingClientRect();
				$w.show();
				const after_rect = $w.$titlebar[0].getBoundingClientRect();
				$w.hide();
				$w.animateTitlebar(before_rect, after_rect, () => {
					$w.show();
					$w.bringToFront();
					$w.focus();
				});
			}
		};

		let before_maximize;
		$w.maximize = () => {
			if (!options.resizable) {
				return;
			}
			if (animating_titlebar) {
				when_done_animating_titlebar.push($w.maximize);
				return;
			}
			if ($w.hasClass("minimized-without-taskbar")) {
				$w.minimize();
				return;
			}

			const instantly_maximize = () => {
				before_maximize = {
					position: $w.css("position"),
					left: $w.css("left"),
					top: $w.css("top"),
					width: $w.css("width"),
					height: $w.css("height"),
				};

				$w.addClass("maximized");
				const $taskbar = $(".taskbar");
				const scrollbar_width = window.innerWidth - $(window).width();
				const scrollbar_height = window.innerHeight - $(window).height();
				const taskbar_height = $taskbar.length ? $taskbar.outerHeight() + 1 : 0;
				$w.css({
					position: "fixed",
					top: 0,
					left: 0,
					width: `calc(100vw - ${scrollbar_width}px)`,
					height: `calc(100vh - ${scrollbar_height}px - ${taskbar_height}px)`,
				});
			};
			const instantly_unmaximize = () => {
				$w.removeClass("maximized");
				$w.css({
					width: "",
					height: ""
				});
				if (before_maximize) {
					$w.css({
						position: before_maximize.position,
						left: before_maximize.left,
						top: before_maximize.top,
						width: before_maximize.width,
						height: before_maximize.height,
					});
				}
			};

			const before_rect = $w.$titlebar[0].getBoundingClientRect();
			let after_rect;
			$w.css("transform", "");
			const restoring = $w.hasClass("maximized");
			if (restoring) {
				instantly_unmaximize();
				after_rect = $w.$titlebar[0].getBoundingClientRect();
				instantly_maximize();
			} else {
				instantly_maximize();
				after_rect = $w.$titlebar[0].getBoundingClientRect();
				instantly_unmaximize();
			}
			$w.animateTitlebar(before_rect, after_rect, () => {
				if (restoring) {
					instantly_unmaximize();
					$w.$maximize.removeClass("window-action-restore");
					$w.$maximize.addClass("window-action-maximize");
				} else {
					instantly_maximize();
					$w.$maximize.removeClass("window-action-maximize");
					$w.$maximize.addClass("window-action-restore");
				}
			});
		};
		$w.restore = () => {
			if ($w.is(".minimized-without-taskbar, .minimized")) {
				$w.unminimize();
			} else if ($w.is(".maximized")) {
				$w.maximize();
			}
		};
		$w.$minimize ?.on("click", (e) => {
			$w.minimize();
		});
		$w.$maximize ?.on("click", (e) => {
			$w.maximize();
		});
		$w.$x ?.on("click", (e) => {
			$w.close();
		});
		$w.$title_area.on("dblclick", (e) => {
			$w.maximize();
		});

		$w.css({
			position: "absolute",
			zIndex: $Window.Z_INDEX++
		});
		$w.bringToFront = () => {
			$w.css({
				zIndex: $Window.Z_INDEX++
			});
			for (const $childWindow of child_$windows) {
				$childWindow.bringToFront();
			}
		};

		var last_focus_by_container = new Map();
		var focus_update_handlers_by_container = new Map();
		var debug_svg_by_container = new Map();
		var debug_svgs_in_window = [];
		var warned_embeds = new WeakSet();

		const warn_embed_access = (embed, error) => {
			const log_template = (message) => [`OS-GUI.js failed to access an embed (${element_to_string(embed)}) for focus integration.
${message}
Original error:
`, error];

			let cross_origin;
			if (embed.srcdoc) {
				cross_origin = false;
			} else {
				try {
					const url = new URL(embed.src);
					cross_origin = url.origin !== window.location.origin;
				} catch (parse_error) {
					return;
				}
			}
			if (cross_origin) {
				if (options.embeds ?.ignoreCrossOrigin && !warned_embeds.has(embed)) {
					return;
				}
			} else {
				return;
			}
		};

		const debug_focus_tracking = (document, container_el, descendant_el, is_root) => {
			if (!$Window.DEBUG_FOCUS) {
				return;
			}
			let svg = debug_svg_by_container.get(container_el);
			if (!svg) {
				svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				svg.style.position = "fixed";
				svg.style.top = "0";
				svg.style.left = "0";
				svg.style.width = "100%";
				svg.style.height = "100%";
				svg.style.pointerEvents = "none";
				svg.style.zIndex = "100000000";
				svg.style.direction = "ltr";
				debug_svg_by_container.set(container_el, svg);
				debug_svgs_in_window.push(svg);
				document.body.appendChild(svg);
			}
			svg._container_el = container_el;
			svg._descendant_el = descendant_el;
			svg._is_root = is_root;
			animate_debug_focus_tracking();
		};
		const update_debug_focus_tracking = (svg) => {
			const container_el = svg._container_el;
			const descendant_el = svg._descendant_el;
			const is_root = svg._is_root;

			while (svg.lastChild) {
				svg.removeChild(svg.lastChild);
			}
			const descendant_rect = descendant_el.getBoundingClientRect ?.() ?? {
				left: 0,
				top: 0,
				width: innerWidth,
				height: innerHeight,
				right: innerWidth,
				bottom: innerHeight
			};
			const container_rect = container_el.getBoundingClientRect ?.() ?? {
				left: 0,
				top: 0,
				width: innerWidth,
				height: innerHeight,
				right: innerWidth,
				bottom: innerHeight
			};
			for (const rect of [descendant_rect, container_rect]) {
				const rect_el = document.createElementNS("http://www.w3.org/2000/svg", "rect");
				rect_el.setAttribute("x", rect.left);
				rect_el.setAttribute("y", rect.top);
				rect_el.setAttribute("width", rect.width);
				rect_el.setAttribute("height", rect.height);
				rect_el.setAttribute("stroke", rect === descendant_rect ? "#f44" : "#f44");
				rect_el.setAttribute("stroke-width", "2");
				rect_el.setAttribute("fill", "none");
				if (!is_root) {
					rect_el.setAttribute("stroke-dasharray", "5,5");
				}
				svg.appendChild(rect_el);
				const text_el = document.createElementNS("http://www.w3.org/2000/svg", "text");
				text_el.setAttribute("x", rect.left);
				text_el.setAttribute("y", rect.top + (rect === descendant_rect ? 20 : 0));
				text_el.setAttribute("fill", rect === descendant_rect ? "#f44" : "aqua");
				text_el.setAttribute("font-size", "20");
				text_el.style.textShadow = "1px 1px 1px black, 0 0 10px black";
				text_el.textContent = element_to_string(rect === descendant_rect ? descendant_el : container_el);
				svg.appendChild(text_el);
			}
			const lines = [
				[descendant_rect.left, descendant_rect.top, container_rect.left, container_rect.top],
				[descendant_rect.right, descendant_rect.top, container_rect.right, container_rect.top],
				[descendant_rect.left, descendant_rect.bottom, container_rect.left, container_rect.bottom],
				[descendant_rect.right, descendant_rect.bottom, container_rect.right, container_rect.bottom],
			];
			for (const line of lines) {
				const line_el = document.createElementNS("http://www.w3.org/2000/svg", "line");
				line_el.setAttribute("x1", line[0]);
				line_el.setAttribute("y1", line[1]);
				line_el.setAttribute("x2", line[2]);
				line_el.setAttribute("y2", line[3]);
				line_el.setAttribute("stroke", "green");
				line_el.setAttribute("stroke-width", "2");
				svg.appendChild(line_el);
			}
		};
		let debug_animation_frame_id;
		const animate_debug_focus_tracking = () => {
			cancelAnimationFrame(debug_animation_frame_id);
			if (!$Window.DEBUG_FOCUS) {
				clean_up_debug_focus_tracking();
				return;
			}
			debug_animation_frame_id = requestAnimationFrame(animate_debug_focus_tracking);
			for (const svg of debug_svgs_in_window) {
				update_debug_focus_tracking(svg);
			}
		};
		const clean_up_debug_focus_tracking = () => {
			cancelAnimationFrame(debug_animation_frame_id);
			for (const svg of debug_svgs_in_window) {
				svg.remove();
			}
			debug_svgs_in_window.length = 0;
			debug_svg_by_container.clear();
		};

		const refocus = (container_el = $w.$content[0]) => {
			const logical_container_el = container_el.matches(".window-content") ? $w[0] : container_el;
			const last_focus = last_focus_by_container.get(logical_container_el);
			if (last_focus) {
				last_focus.focus({
					preventScroll: true
				});
				if (last_focus.tagName === "EMBED") {
					try {
						refocus(last_focus);
					} catch (e) {
						warn_embed_access(last_focus, e);
					}
				}
				return;
			}
			const $tabstops = find_tabstops(container_el);
			const $default = $tabstops.filter(".default");
			if ($default.length) {
				$default[0].focus({
					preventScroll: true
				});
				return;
			}
			if ($tabstops.length) {
				if ($tabstops[0].tagName === "EMBED") {
					try {
						refocus($tabstops[0]);
					} catch (e) {
						warn_embed_access($tabstops[0], e);
					}
				} else {
					$tabstops[0].focus({
						preventScroll: true
					});
				}
				return;
			}
			if (options.toolWindow && options.parentWindow) {
				options.parentWindow.triggerHandler("refocus-window");
				return;
			}
			container_el.focus({
				preventScroll: true
			});
			if (container_el.tagName === "EMBED") {
				try {
					refocus(container_el.contentDocument.body);
				} catch (e) {
					warn_embed_access(container_el, e);
				}
			}
		};

		$w.on("refocus-window", () => {
			refocus();
		});

		$w.on("pointerdown mousedown", handle_pointer_activation);

		$G.on("focusin", (e) => {
			last_focus_by_container.set(window, e.target);
		});

		function handle_pointer_activation(event) {
			$w.bringToFront();

			requestAnimationFrame(() => {
				const last_focus_global = last_focus_by_container.get(window);

				if (
					document.activeElement &&
					document.activeElement !== document &&
					document.activeElement !== document.body &&
					document.activeElement !== $w.$content[0] &&
					document.activeElement !== last_focus_global
				) {
					return;
				}
				if (document.activeElement ?.closest ?.(".menus, .menu-popup")) {
					return;
				}

				const target_style = getComputedStyle(event.target);
				if (target_style.userSelect !== "none") {
					$w.$content.focus();

					$w.one("pointerup pointercancel", () => {
						requestAnimationFrame(() => {
							if (!getSelection().toString().trim()) {
								refocus();
							}
						});
					});
					return;
				}
				refocus();
			});
		}

		$w.on("keydown", (e) => {
			if (e.isDefaultPrevented()) {
				return;
			}
			if (e.ctrlKey || e.altKey || e.metaKey) {
				return;
			}
			if (e.target.closest(".menus")) {
				return;
			}
			const $buttons = $w.$content.find("button");
			const $focused = $(document.activeElement);
			const focused_index = $buttons.index($focused);
			switch (e.keyCode) {
				case 40:
				case 39:
					if ($focused.is("button") && !e.shiftKey) {
						if (focused_index < $buttons.length - 1) {
							$buttons[focused_index + 1].focus();
							e.preventDefault();
						}
					}
					break;
				case 38:
				case 37:
					if ($focused.is("button") && !e.shiftKey) {
						if (focused_index > 0) {
							$buttons[focused_index - 1].focus();
							e.preventDefault();
						}
					}
					break;
				case 32:
				case 13:
					if ($focused.is("button") && !e.shiftKey) {
						$focused.addClass("pressed");
						const release = () => {
							$focused.removeClass("pressed");
							$focused.off("focusout", release);
							$(window).off("keyup", keyup);
						};
						const keyup = (e) => {
							if (e.keyCode === 32 || e.keyCode === 13) {
								release();
							}
						};
						$focused.on("focusout", release);
						$(window).on("keyup", keyup);
					}
					break;
				case 9: {
					const $controls = find_tabstops($w.$content[0]);
					if ($controls.length > 0) {
						const focused_control_index = $controls.index($focused);
						if (e.shiftKey) {
							if (focused_control_index === 0) {
								e.preventDefault();
								$controls[$controls.length - 1].focus();
							}
						} else {
							if (focused_control_index === $controls.length - 1) {
								e.preventDefault();
								$controls[0].focus();
							}
						}
					}
					break;
				}
				case 27:
					$w.close();
					break;
			}
		});

		$w.applyBounds = () => {
			const bound_width = Math.max(document.body.scrollWidth, innerWidth);
			const bound_height = Math.max(document.body.scrollHeight, innerHeight);
			$w.css({
				left: Math.max(0, Math.min(bound_width - $w.width(), $w.position().left)),
				top: Math.max(0, Math.min(bound_height - $w.height(), $w.position().top)),
			});
		};

		$w.bringTitleBarInBounds = () => {
			const bound_width = Math.max(document.body.scrollWidth, innerWidth);
			const bound_height = Math.max(document.body.scrollHeight, innerHeight);
			const min_horizontal_pixels_on_screen = 40;
			$w.css({
				left: Math.max(
					min_horizontal_pixels_on_screen - $w.outerWidth(),
					Math.min(
						bound_width - min_horizontal_pixels_on_screen,
						$w.position().left
					)
				),
				top: Math.max(0, Math.min(
					bound_height - $w.$titlebar.outerHeight() - 5,
					$w.position().top
				)),
			});
		};

		$w.center = () => {
			$w.css({
				left: (innerWidth - $w.width()) / 2 + window.scrollX,
				top: (innerHeight - $w.height()) / 2 + window.scrollY,
			});
			$w.applyBounds();
		};


		$G.on("resize", $w.bringTitleBarInBounds);

		var drag_offset_x, drag_offset_y, drag_pointer_x, drag_pointer_y, drag_pointer_id;
		var update_drag = (e) => {
			if (drag_pointer_id === (e.pointerId ?? e.originalEvent.pointerId)) {
				drag_pointer_x = e.clientX ?? drag_pointer_x;
				drag_pointer_y = e.clientY ?? drag_pointer_y;
			}
			$w.css({
				left: drag_pointer_x + scrollX - drag_offset_x,
				top: drag_pointer_y + scrollY - drag_offset_y,
			});
		};
		$w.$titlebar.css("touch-action", "none");
		$w.$titlebar.on("selectstart", (e) => {
			e.preventDefault();
		});
		$w.$titlebar.on("mousedown", "button", (e) => {
			refocus();
			const button = e.currentTarget;
			if (!$(button).is(":enabled")) {
				return;
			}
			button.classList.add("pressing");
			const release = (event) => {
				if (event && event.type === "blur") {
					if (document.hasFocus()) {
						return;
					}
				}
				button.classList.remove("pressing");
				$G.off("mouseup blur", release);
				$(button).off("mouseenter", on_mouse_enter);
				$(button).off("mouseleave", on_mouse_leave);
			};
			const on_mouse_enter = () => {
				button.classList.add("pressing");
			};
			const on_mouse_leave = () => {
				button.classList.remove("pressing");
			};
			$G.on("mouseup blur", release);
			$(button).on("mouseenter", on_mouse_enter);
			$(button).on("mouseleave", on_mouse_leave);
		});
		$w.$titlebar.on("pointerdown", (e) => {
			if ($(e.target).closest("button").length) {
				return;
			}
			if ($w.hasClass("maximized")) {
				return;
			}
			const customEvent = $.Event("window-drag-start");
			$w.trigger(customEvent);
			if (customEvent.isDefaultPrevented()) {
				return;
			}
			drag_offset_x = e.clientX + scrollX - $w.position().left;
			drag_offset_y = e.clientY + scrollY - $w.position().top;
			drag_pointer_x = e.clientX;
			drag_pointer_y = e.clientY;
			drag_pointer_id = (e.pointerId ?? e.originalEvent.pointerId);
			$G.on("pointermove", update_drag);
			$G.on("scroll", update_drag);
			$("body").addClass("dragging");
		});
		$G.on("pointerup pointercancel", (e) => {
			if ((e.pointerId ?? e.originalEvent.pointerId) !== drag_pointer_id) {
				return;
			}
			$G.off("pointermove", update_drag);
			$G.off("scroll", update_drag);
			$("body").removeClass("dragging");
			$w.bringTitleBarInBounds();
			drag_pointer_id = -1;
		});
		$w.$titlebar.on("dblclick", (e) => {
			if ($component) {
				$component.dock();
			}
		});

		if (options.resizable) {

			const HANDLE_MIDDLE = 0;
			const HANDLE_START = -1;
			const HANDLE_END = 1;
			const HANDLE_LEFT = HANDLE_START;
			const HANDLE_RIGHT = HANDLE_END;
			const HANDLE_TOP = HANDLE_START;
			const HANDLE_BOTTOM = HANDLE_END;

			[
				[HANDLE_TOP, HANDLE_RIGHT],
				[HANDLE_TOP, HANDLE_MIDDLE],
				[HANDLE_TOP, HANDLE_LEFT],
				[HANDLE_MIDDLE, HANDLE_LEFT],
				[HANDLE_BOTTOM, HANDLE_LEFT],
				[HANDLE_BOTTOM, HANDLE_MIDDLE],
				[HANDLE_BOTTOM, HANDLE_RIGHT],
				[HANDLE_MIDDLE, HANDLE_RIGHT],
			].forEach(([y_axis, x_axis]) => {
				const $handle = $("<div>").addClass("handle").appendTo($w);

				let cursor = "";
				if (y_axis === HANDLE_TOP) {
					cursor += "n";
				}
				if (y_axis === HANDLE_BOTTOM) {
					cursor += "s";
				}
				if (x_axis === HANDLE_LEFT) {
					cursor += "w";
				}
				if (x_axis === HANDLE_RIGHT) {
					cursor += "e";
				}
				cursor += "-resize";

				const handle_thickness = ($w.outerWidth() - $w.width()) / 2;
				const border_width = ($w.outerWidth() - $w.innerWidth()) / 2;
				const window_frame_height = $w.outerHeight() - $w.$content.outerHeight();
				const window_frame_width = $w.outerWidth() - $w.$content.outerWidth();
				$handle.css({
					position: "absolute",
					top: y_axis === HANDLE_TOP ? -border_width : y_axis === HANDLE_MIDDLE ? `calc(${handle_thickness}px - ${border_width}px)` : "",
					bottom: y_axis === HANDLE_BOTTOM ? -border_width : "",
					left: x_axis === HANDLE_LEFT ? -border_width : x_axis === HANDLE_MIDDLE ? `calc(${handle_thickness}px - ${border_width}px)` : "",
					right: x_axis === HANDLE_RIGHT ? -border_width : "",
					width: x_axis === HANDLE_MIDDLE ? `calc(100% - ${handle_thickness}px * 2 + ${border_width * 2}px)` : `${handle_thickness}px`,
					height: y_axis === HANDLE_MIDDLE ? `calc(100% - ${handle_thickness}px * 2 + ${border_width * 2}px)` : `${handle_thickness}px`,
					touchAction: "none",
					cursor,
				});

				let rect;
				let resize_offset_x, resize_offset_y, resize_pointer_x, resize_pointer_y, resize_pointer_id;
				$handle.on("pointerdown", (e) => {
					e.preventDefault();

					$G.on("pointermove", handle_pointermove);
					$G.on("scroll", update_resize);
					$("body").addClass("dragging");
					$G.on("pointerup pointercancel", end_resize);

					rect = {
						x: $w.position().left,
						y: $w.position().top,
						width: $w.outerWidth(),
						height: $w.outerHeight(),
					};

					resize_offset_x = e.clientX + scrollX - rect.x - (x_axis === HANDLE_RIGHT ? rect.width : 0);
					resize_offset_y = e.clientY + scrollY - rect.y - (y_axis === HANDLE_BOTTOM ? rect.height : 0);
					resize_pointer_x = e.clientX;
					resize_pointer_y = e.clientY;
					resize_pointer_id = (e.pointerId ?? e.originalEvent.pointerId);

					$handle[0].setPointerCapture(resize_pointer_id);

				});

				function handle_pointermove(e) {
					if ((e.pointerId ?? e.originalEvent.pointerId) !== resize_pointer_id) {
						return;
					}
					resize_pointer_x = e.clientX;
					resize_pointer_y = e.clientY;
					update_resize();
				}

				function end_resize(e) {
					if ((e.pointerId ?? e.originalEvent.pointerId) !== resize_pointer_id) {
						return;
					}
					$G.off("pointermove", handle_pointermove);
					$G.off("scroll", onscroll);
					$("body").removeClass("dragging");
					$G.off("pointerup pointercancel", end_resize);
					$w.bringTitleBarInBounds();
				}

				function update_resize() {
					const mouse_x = resize_pointer_x + scrollX - resize_offset_x;
					const mouse_y = resize_pointer_y + scrollY - resize_offset_y;
					let delta_x = 0;
					let delta_y = 0;
					let width, height;
					if (x_axis === HANDLE_RIGHT) {
						delta_x = 0;
						width = ~~(mouse_x - rect.x);
					} else if (x_axis === HANDLE_LEFT) {
						delta_x = ~~(mouse_x - rect.x);
						width = ~~(rect.x + rect.width - mouse_x);
					} else {
						width = ~~(rect.width);
					}
					if (y_axis === HANDLE_BOTTOM) {
						delta_y = 0;
						height = ~~(mouse_y - rect.y);
					} else if (y_axis === HANDLE_TOP) {
						delta_y = ~~(mouse_y - rect.y);
						height = ~~(rect.y + rect.height - mouse_y);
					} else {
						height = ~~(rect.height);
					}
					let new_rect = {
						x: rect.x + delta_x,
						y: rect.y + delta_y,
						width,
						height,
					};

					new_rect.width = Math.max(1, new_rect.width);
					new_rect.height = Math.max(1, new_rect.height);

					if (options.constrainRect) {
						new_rect = options.constrainRect(new_rect, x_axis, y_axis);
					}
					new_rect.width = Math.max(new_rect.width, options.minOuterWidth ?? 100);
					new_rect.height = Math.max(new_rect.height, options.minOuterHeight ?? 0);
					new_rect.width = Math.max(new_rect.width, (options.minInnerWidth ?? 0) + window_frame_width);
					new_rect.height = Math.max(new_rect.height, (options.minInnerHeight ?? 0) + window_frame_height);
					if (x_axis === HANDLE_LEFT) {
						new_rect.x = Math.min(new_rect.x, rect.x + rect.width - new_rect.width);
					}
					if (y_axis === HANDLE_TOP) {
						new_rect.y = Math.min(new_rect.y, rect.y + rect.height - new_rect.height);
					}

					$w.css({
						top: new_rect.y,
						left: new_rect.x,
					});
					$w.outerWidth(new_rect.width);
					$w.outerHeight(new_rect.height);
				}
			});
		}

		$w.$Button = (text, handler) => {
			var $b = $(E("button"))
				.appendTo($w.$content)
				.text(text)
				.on("click", () => {
					if (handler) {
						handler();
					}
					$w.close();
				});
			return $b;
		};
		$w.title = title => {
			if (title) {
				$w.$title.text(title);
				$w.trigger("title-change");
				if ($w.task) {
					$w.task.updateTitle();
				}
				return $w;
			} else {
				return $w.$title.text();
			}
		};
		$w.getTitle = () => {
			return $w.title();
		};
		let animating_titlebar = false;
		let when_done_animating_titlebar = [];
		$w.animateTitlebar = (from, to, callback = () => {}) => {
			animating_titlebar = true;
			const $eye_leader = $w.$titlebar.clone(true);
			$eye_leader.find("button").remove();
			$eye_leader.appendTo("body");
			const duration_ms = $Window.OVERRIDE_TRANSITION_DURATION ?? 200;
			const duration_str = `${duration_ms}ms`;
			$eye_leader.css({
				transition: `left ${duration_str} linear, top ${duration_str} linear, width ${duration_str} linear, height ${duration_str} linear`,
				position: "fixed",
				zIndex: 10000000,
				pointerEvents: "none",
				left: from.left,
				top: from.top,
				width: from.width,
				height: from.height,
			});
			setTimeout(() => {
				$eye_leader.css({
					left: to.left,
					top: to.top,
					width: to.width,
					height: to.height,
				});
			}, 5);
			let handled_transition_completion = false;
			const handle_transition_completion = () => {
				if (handled_transition_completion) {
					return;
				} else {
					handled_transition_completion = true;
				}
				animating_titlebar = false;
				$eye_leader.remove();
				callback();
				when_done_animating_titlebar.shift() ?.();
			};
			$eye_leader.on("transitionend transitioncancel", handle_transition_completion);
			setTimeout(handle_transition_completion, duration_ms * 1.2);
		};
		$w.close = (force) => {
			if (force && force !== true) {
				throw new TypeError("force must be a boolean or undefined, not " + Object.prototype.toString.call(force));
			}
			if (!force) {
				var e = $.Event("close");
				$w.trigger(e);
				if (e.isDefaultPrevented()) {
					return;
				}
			}
			if ($component) {
				$component.detach();
			}
			$w.closed = true;
			$event_target.triggerHandler("closed");
			$w.trigger("closed");

			$w.remove();


			var $next_topmost = $($(".window:visible").toArray().sort((a, b) => b.style.zIndex - a.style.zIndex)[0]);
			$next_topmost.triggerHandler("refocus-window");

			clean_up_debug_focus_tracking();
		};
		$w.closed = false;

		let current_menu_bar;
		$w.setMenuBar = (menu_bar) => {
			if (current_menu_bar) {
				current_menu_bar.element.remove();
			}
			if (menu_bar) {
				$w.$titlebar.after(menu_bar.element);
				menu_bar.setKeyboardScope($w[0]);
				current_menu_bar = menu_bar;
			}
		};

		if (options.title) {
			$w.title(options.title);
		}



		return $w;
	}

	function $FormWindow(title) {
		var $w = new $Window();

		$w.title(title);
		$w.$form = $(E("form")).appendTo($w.$content);
		$w.$main = $(E("div")).appendTo($w.$form);
		$w.$buttons = $(E("div")).appendTo($w.$form).addClass("button-group");

		$w.$Button = (label, action) => {
			var $b = $(E("button")).appendTo($w.$buttons).text(label);
			$b.on("click", (e) => {
				e.preventDefault();

				action();
			});

			$b.on("pointerdown", () => {
				$b.focus();
			});

			return $b;
		};

		return $w;
	}

	exports.$Window = $Window;
	exports.$FormWindow = $FormWindow;

})(window);