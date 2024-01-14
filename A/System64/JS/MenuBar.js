((exports) => {

	function E(nodeName, attrs) {
		const el = document.createElement(nodeName);
		if (attrs) {
			for (const key in attrs) {
				if (key === "class") {
					el.className = attrs[key];
				} else {
					el.setAttribute(key, attrs[key]);
				}
			}
		}
		return el;
	}

	let uid_counter = 0;

	function uid() {
		return (uid_counter++).toString(36) + Math.random().toString(36).slice(2);
	}


	function index_of_hotkey(text) {


		return ` ${text}`.search(/[^&]&[^&\s]/);
	}

	function remove_hotkey(text) {
		return text.replace(/\s?\(&.\)/, "").replace(/([^&]|^)&([^&\s])/, "$1$2");
	}

	function display_hotkey(text) {
		return text.replace(/([^&]|^)&([^&\s])/, "$1<span class='menu-hotkey'>$2</span>").replace(/&&/g, "&");
	}

	function get_hotkey(text) {
		return text[index_of_hotkey(text) + 1].toUpperCase();
	}


	const MENU_DIVIDER = "MENU_DIVIDER";

	const MAX_MENU_NESTING = 1000;

	let internal_z_counter = 1;

	function get_new_menu_z_index() {
		if (typeof $Window !== "undefined") {
			return ($Window.Z_INDEX++) + MAX_MENU_NESTING;
		}
		return (++internal_z_counter) + MAX_MENU_NESTING;
	}

	function MenuBar(menus) {
		if (!(this instanceof MenuBar)) {
			return new MenuBar(menus);
		}

		const menus_el = E("div", {
			class: "menus",
			role: "menubar",
			"aria-label": "Application Menu",
		});
		menus_el.style.touchAction = "none";

		function get_direction() {
			return window.get_direction ? window.get_direction() : getComputedStyle(menus_el).direction;
		}

		let selecting_menus = false;

		const top_level_menus = [];
		let top_level_menu_index = -1;
		let active_menu_popup;
		const menu_popup_by_el = new WeakMap();

		const submenu_popups_by_menu_item_el = new WeakMap();

		const parent_item_el_by_popup_el = new WeakMap();

		const any_open_menus = () => [...document.querySelectorAll(".menu-popup")].some(popup_el => popup_el.style.display !== "none");

		const close_menus = () => {
			for (const {
					menu_button_el
				} of top_level_menus) {
				menu_button_el.dispatchEvent(new CustomEvent("release"), {});
			}
			const popup_els = document.querySelectorAll(".menu-popup");
			for (const popup_el of popup_els) {
				if (!window.debugKeepMenusOpen) {
					popup_el.style.display = "none";
					popup_el.querySelectorAll(".menu-item").forEach((el) => el.classList.remove("highlight"));
					popup_el.removeAttribute("aria-activedescendant");
					const parent_item_el = parent_item_el_by_popup_el.get(popup_el);
					if (parent_item_el) {
						if (!parent_item_el.classList.contains("menu-button")) {
							parent_item_el.classList.remove("highlight");
						}
						parent_item_el.setAttribute("aria-expanded", "false");
					}
				}
			}
		};

		const refocus_window = () => {
			const window_el = menus_el.closest(".window");
			if (window_el) {
				window_el.dispatchEvent(new CustomEvent("refocus-window"));
			}
		};

		const top_level_highlight = (new_index_or_menu_key) => {
			const new_index = typeof new_index_or_menu_key === "string" ?
				Object.keys(menus).indexOf(new_index_or_menu_key) :
				new_index_or_menu_key;
			if (top_level_menu_index !== -1) {
				top_level_menus[top_level_menu_index].menu_button_el.classList.remove("highlight");
			}
			if (new_index !== -1) {
				top_level_menus[new_index].menu_button_el.classList.add("highlight");
			}
			top_level_menu_index = new_index;
		};
		menus_el.addEventListener("pointerleave", () => {
			if (
				top_level_menu_index !== -1 &&
				top_level_menus[top_level_menu_index].menu_popup_el.style.display === "none"
			) {
				top_level_highlight(-1);
			}
		});
		window.addEventListener("focusout", (event) => {
			if (event.relatedTarget ?.closest ?.(".menu-popup, .menus")) {
				return;
			}
			top_level_highlight(-1);
		});


		const is_disabled = item => {
			if (typeof item.enabled === "function") {
				return !item.enabled();
			} else if (typeof item.enabled === "boolean") {
				return !item.enabled;
			} else {
				return false;
			}
		};

		function send_info_event(item) {
			const description = item ?.description || "";
			if (window.jQuery) {
				const event = new window.jQuery.Event("info", {
					detail: {
						description
					}
				});
				const extraParam = {
					toString() {
						console.warn("jQuery extra parameter for info event is deprecated, use event.detail instead");
						return description;
					},
				};
				window.jQuery(menus_el).trigger(event, extraParam);
			} else {
				menus_el.dispatchEvent(new CustomEvent("info", {
					detail: {
						description
					}
				}));
			}
		}


		function handleKeyDown(e) {
			if (e.defaultPrevented) {
				return;
			}
			const active_menu_popup_el = e.target.closest(".menu-popup");
			const active_menu_popup = active_menu_popup_el && menu_popup_by_el.get(active_menu_popup_el);
			const top_level_menu = top_level_menus[top_level_menu_index];
			const {
				menu_button_el,
				open_top_level_menu
			} = top_level_menu || {};
			const menu_popup_el = active_menu_popup_el || top_level_menu ?.menu_popup_el;
			const parent_item_el = parent_item_el_by_popup_el.get(active_menu_popup_el);
			const highlighted_item_el = menu_popup_el ?.querySelector(".menu-item.highlight");


			switch (e.keyCode) {
				case 37:
				case 39:
					const right = e.keyCode === 39;
					if (
						highlighted_item_el ?.classList.contains("has-submenu") &&
						(get_direction() === "ltr") === right
					) {
						highlighted_item_el.click();
						e.preventDefault();
					} else if (
						parent_item_el &&
						!parent_item_el.classList.contains("menu-button") &&
						(get_direction() === "ltr") !== right
					) {
						active_menu_popup.parentMenuPopup.element.focus({
							preventScroll: true
						});
						active_menu_popup_el.style.display = "none";
						active_menu_popup.highlight(-1);
						parent_item_el.setAttribute("aria-expanded", "false");
						send_info_event(active_menu_popup.parentMenuPopup.menuItems[active_menu_popup.parentMenuPopup.itemElements.indexOf(parent_item_el)]);
						e.preventDefault();
					} else if (
						highlighted_item_el ||
						!active_menu_popup ||
						!active_menu_popup.parentMenuPopup
					) {
						const menu_was_open = menu_popup_el && menu_popup_el.style.display !== "none";
						const cycle_dir = ((get_direction() === "ltr") === right) ? 1 : -1;
						let new_index;
						if (top_level_menu_index === -1) {
							new_index = cycle_dir === 1 ? 0 : top_level_menus.length - 1;
						} else {
							new_index = (top_level_menu_index + cycle_dir + top_level_menus.length) % top_level_menus.length;
						}
						const new_top_level_menu = top_level_menus[new_index];
						const target_button_el = new_top_level_menu.menu_button_el;
						if (menu_was_open) {
							new_top_level_menu.open_top_level_menu("keydown");
						} else {
							menu_button_el ?.dispatchEvent(new CustomEvent("release"), {});
							target_button_el.focus({
								preventScroll: true
							});
							top_level_highlight(new_index);
						}
						e.preventDefault();
					}
					break;
				case 40:
				case 38:
					const down = e.keyCode === 40;
					if (active_menu_popup) {
						const cycle_dir = down ? 1 : -1;
						const item_els = [...menu_popup_el.querySelectorAll(".menu-item")];
						const from_index = item_els.indexOf(highlighted_item_el);
						const to_index = (from_index + cycle_dir + item_els.length) % item_els.length;
						const to_item_el = item_els[to_index];
						active_menu_popup.highlight(to_item_el);
						send_info_event(active_menu_popup.menuItems[active_menu_popup.itemElements.indexOf(to_item_el)]);
						e.preventDefault();
					} else {
						open_top_level_menu ?.("keydown");
					}
					e.preventDefault();
					break;
				case 27:
					if (any_open_menus()) {
						if (parent_item_el && parent_item_el !== menu_button_el) {
							active_menu_popup.parentMenuPopup.element.focus({
								preventScroll: true
							});
							active_menu_popup_el.style.display = "none";
							active_menu_popup.highlight(-1);
							parent_item_el.setAttribute("aria-expanded", "false");
							send_info_event(active_menu_popup.parentMenuPopup.menuItems[active_menu_popup.parentMenuPopup.itemElements.indexOf(parent_item_el)]);
						} else {
							close_menus();
							menu_button_el.focus({
								preventScroll: true
							});
						}
						e.preventDefault();
					} else {
						const window_el = menus_el.closest(".window");
						if (window_el) {
							window_el.dispatchEvent(new CustomEvent("refocus-window"));
							e.preventDefault();
						}
					}
					break;
				case 18:
					close_menus();
					refocus_window();
					e.preventDefault();
					break;
				case 32:
					break;
				case 13:
					if (menu_button_el === document.activeElement) {
						open_top_level_menu("keydown");
						e.preventDefault();
					} else {
						highlighted_item_el ?.click();
						e.preventDefault();
					}
					break;
				default:
					const key = String.fromCharCode(e.keyCode).toLowerCase();
					const item_els = active_menu_popup ? [...menu_popup_el.querySelectorAll(".menu-item")] :
						top_level_menus.map(top_level_menu => top_level_menu.menu_button_el);
					const item_els_by_accelerator = {};
					for (const item_el of item_els) {
						const accelerator = item_el.querySelector(".menu-hotkey");
						const accelerator_key = (accelerator ?
							accelerator.textContent :
							(item_el.querySelector(".menu-item-label") ?? item_el).textContent[0]
						).toLowerCase();
						item_els_by_accelerator[accelerator_key] = item_els_by_accelerator[accelerator_key] || [];
						item_els_by_accelerator[accelerator_key].push(item_el);
					}
					const matching_item_els = item_els_by_accelerator[key] || [];
					if (matching_item_els.length) {
						if (matching_item_els.length === 1) {
							const menu_item_el = matching_item_els[0];
							if (menu_item_el.classList.contains("menu-button")) {
								const top_level_menu = top_level_menus.find(top_level_menu => top_level_menu.menu_button_el === menu_item_el);
								top_level_menu.open_top_level_menu("keydown");
							} else {
								menu_item_el.click();
							}
							e.preventDefault();
						} else {
							let index = matching_item_els.indexOf(highlighted_item_el);
							if (index === -1) {
								index = 0;
							} else {
								index = (index + 1) % matching_item_els.length;
							}
							const menu_item_el = matching_item_els[index];
							active_menu_popup.highlight(menu_item_el);
							e.preventDefault();
						}
					}
					break;
			}
		}

		menus_el.addEventListener("keydown", handleKeyDown);

		function MenuPopup(menu_items, {
			parentMenuPopup
		} = {}) {
			this.parentMenuPopup = parentMenuPopup;
			this.menuItems = menu_items;
			this.itemElements = [];

			const menu_popup_el = E("div", {
				class: "menu-popup",
				id: `menu-popup-${uid()}`,
				tabIndex: "-1",
				role: "menu",
			});
			menu_popup_el.style.touchAction = "pan-y";
			menu_popup_el.style.outline = "none";
			const menu_popup_table_el = E("table", {
				class: "menu-popup-table"
			});
			menu_popup_el.appendChild(menu_popup_table_el);

			this.element = menu_popup_el;
			menu_popup_by_el.set(menu_popup_el, this);

			let submenus = [];

			menu_popup_el.addEventListener("keydown", handleKeyDown);

			menu_popup_el.addEventListener("pointerleave", () => {

				for (const submenu of submenus) {
					if (submenu.submenu_popup_el.style.display !== "none") {
						this.highlight(submenu.item_el);
						return;
					}
				}
				this.highlight(-1);
			});

			menu_popup_el.addEventListener("focusin", (e) => {
				menu_popup_el.focus({
					preventScroll: true
				});
			});

			let last_item_el;
			this.highlight = (index_or_element) => {
				let item_el = index_or_element;
				if (typeof index_or_element === "number") {
					item_el = this.itemElements[index_or_element];
				}
				if (last_item_el && last_item_el !== item_el) {
					last_item_el.classList.remove("highlight");
				}
				if (item_el) {
					item_el.classList.add("highlight");
					menu_popup_el.setAttribute("aria-activedescendant", item_el.id);
					last_item_el = item_el;
				} else {
					menu_popup_el.removeAttribute("aria-activedescendant");
					last_item_el = null;
				}
			};

			if (menu_items.length === 0) {
				menu_items = [{
					label: "(Empty)",
					enabled: false,
				}];
			}

			menu_items.forEach((item, item_index) => {
				const row_el = E("tr", {
					class: "menu-row"
				});
				this.itemElements.push(row_el);
				menu_popup_table_el.appendChild(row_el);
				if (item === MENU_DIVIDER) {
					const td_el = E("td", {
						colspan: 4
					});
					const hr_el = E("hr", {
						class: "menu-hr"
					});
					td_el.appendChild(hr_el);
					row_el.appendChild(td_el);
					hr_el.addEventListener("pointerenter", () => {
						this.highlight(-1);
					});
				} else {
					const item_el = row_el;
					item_el.classList.add("menu-item");
					item_el.id = `menu-item-${uid()}`;
					item_el.tabIndex = -1;
					item_el.setAttribute("role", item.checkbox ? "menuitemcheckbox" : "menuitem");
					item_el.setAttribute("aria-label", remove_hotkey(item.label || item.item));
					item_el.setAttribute("aria-keyshortcuts", item.ariaKeyShortcuts || item.shortcut || item.shortcutLabel);

					if (item.description) {
						item_el.setAttribute("aria-description", item.description);
					}
					const checkbox_area_el = E("td", {
						class: "menu-item-checkbox-area"
					});
					const label_el = E("td", {
						class: "menu-item-label"
					});
					const shortcut_el = E("td", {
						class: "menu-item-shortcut"
					});
					const submenu_area_el = E("td", {
						class: "menu-item-submenu-area"
					});

					item_el.appendChild(checkbox_area_el);
					item_el.appendChild(label_el);
					item_el.appendChild(shortcut_el);
					item_el.appendChild(submenu_area_el);

					label_el.innerHTML = display_hotkey(item.label || item.item);
					shortcut_el.textContent = item.shortcut;

					menu_popup_el.addEventListener("update", () => {
						if (is_disabled(item)) {
							item_el.setAttribute("disabled", "");
							item_el.setAttribute("aria-disabled", "true");
						} else {
							item_el.removeAttribute("disabled");
							item_el.removeAttribute("aria-disabled");
						}
						if (item.checkbox && item.checkbox.check) {
							const checked = item.checkbox.check();
							checkbox_area_el.querySelector("svg").style.visibility = checked ? "visible" : "hidden";
							item_el.setAttribute("aria-checked", checked ? "true" : "false");
						}
					});
					item_el.addEventListener("pointerenter", () => {
						menu_popup_el.dispatchEvent(new CustomEvent("update"), {});
						this.highlight(item_index);
						send_info_event(item);
					});
					item_el.addEventListener("pointerleave", (event) => {
						if (
							menu_popup_el.style.display !== "none" &&
							event.pointerType !== "touch"
						) {
							send_info_event();
						}
					});

					if (item.checkbox) {
						checkbox_area_el.innerHTML = `
						<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
							style="fill:currentColor;display:inline-block;vertical-align:middle"
						>
							<path d="M5 7v3l2 2 5-5V4L7 9Z"/>
						</svg>
					`;
					}

					let open_submenu, submenu_popup_el;
					if (item.submenu) {
						item_el.classList.add("has-submenu");
						submenu_area_el.innerHTML = `
						<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"
							style="fill:currentColor;display:inline-block;vertical-align:middle"
						>
							<path d="m6 4 4 4-4 4z"/>
						</svg>
					`;
						menu_popup_el.addEventListener("update", () => {
							submenu_area_el.querySelector("svg").style.transform = get_direction() === "rtl" ? "scaleX(-1)" : "";
						});

						const submenu_popup = new MenuPopup(item.submenu, {
							parentMenuPopup: this
						});
						submenu_popup_el = submenu_popup.element;
						document.body ?.appendChild(submenu_popup_el);
						submenu_popup_el.style.display = "none";

						item_el.setAttribute("aria-haspopup", "true");
						item_el.setAttribute("aria-expanded", "false");
						item_el.setAttribute("aria-controls", submenu_popup_el.id);

						submenu_popups_by_menu_item_el.set(item_el, submenu_popup);
						parent_item_el_by_popup_el.set(submenu_popup_el, item_el);
						submenu_popup_el.dataset.semanticParent = menu_popup_el.id;
						menu_popup_el.setAttribute("aria-owns", `${menu_popup_el.getAttribute("aria-owns") || ""} ${submenu_popup_el.id}`);
						submenu_popup_el.setAttribute("aria-labelledby", item_el.id);


						open_submenu = (highlight_first = true) => {
							if (submenu_popup_el.style.display !== "none") {
								return;
							}
							close_submenus_at_this_level();

							item_el.setAttribute("aria-expanded", "true");

							submenu_popup_el.style.display = "";
							submenu_popup_el.style.zIndex = get_new_menu_z_index();
							submenu_popup_el.setAttribute("dir", get_direction());
							if (!submenu_popup_el.parentElement) {
								document.body.appendChild(submenu_popup_el);
							}

							submenu_popup_el.dispatchEvent(new CustomEvent("update"), {});
							if (highlight_first) {
								submenu_popup.highlight(0);
								send_info_event(submenu_popup.menuItems[0]);
							} else {
								submenu_popup.highlight(-1);
							}

							const rect = item_el.getBoundingClientRect();
							let submenu_popup_rect = submenu_popup_el.getBoundingClientRect();
							submenu_popup_el.style.position = "absolute";
							submenu_popup_el.style.left = `${(get_direction() === "rtl" ? rect.left - submenu_popup_rect.width : rect.right) + window.scrollX}px`;
							submenu_popup_el.style.top = `${rect.top + window.scrollY}px`;

							submenu_popup_rect = submenu_popup_el.getBoundingClientRect();
							if (get_direction() === "rtl") {
								if (submenu_popup_rect.left < 0) {
									submenu_popup_el.style.left = `${rect.right}px`;
									submenu_popup_rect = submenu_popup_el.getBoundingClientRect();
									if (submenu_popup_rect.right > innerWidth) {
										submenu_popup_el.style.left = `${innerWidth - submenu_popup_rect.width}px`;
									}
								}
							} else {
								if (submenu_popup_rect.right > innerWidth) {
									submenu_popup_el.style.left = `${rect.left - submenu_popup_rect.width}px`;
									submenu_popup_rect = submenu_popup_el.getBoundingClientRect();
									if (submenu_popup_rect.left < 0) {
										submenu_popup_el.style.left = "0";
									}
								}
							}

							submenu_popup_el.focus({
								preventScroll: true
							});
							active_menu_popup = submenu_popup;
						};

						function close_submenu() {
							submenu_popup_el.style.display = "none";
							submenu_popup.highlight(-1);
							item_el.setAttribute("aria-expanded", "false");
							if (submenu_popup_el._submenus) {
								for (const submenu of submenu_popup_el._submenus) {
									submenu.close_submenu();
								}
							}
						}

						submenus.push({
							item_el,
							submenu_popup_el,
							open_submenu,
							close_submenu,
						});
						menu_popup_el._submenus = submenus;

						function close_submenus_at_this_level() {
							for (const submenu of submenus) {
								submenu.close_submenu();
							}
							menu_popup_el.focus({
								preventScroll: true
							});
						}


						let open_tid, close_tid;
						submenu_popup_el.addEventListener("pointerenter", () => {
							if (open_tid) {
								clearTimeout(open_tid);
								open_tid = null;
							}
							if (close_tid) {
								clearTimeout(close_tid);
								close_tid = null;
							}
						});
						item_el.addEventListener("pointerenter", () => {
							if (open_tid) {
								clearTimeout(open_tid);
								open_tid = null;
							}
							if (close_tid) {
								clearTimeout(close_tid);
								close_tid = null;
							}
							open_tid = setTimeout(() => {
								open_submenu(false);
							}, 501);
						});
						item_el.addEventListener("pointerleave", () => {
							if (open_tid) {
								clearTimeout(open_tid);
								open_tid = null;
							}
						});
						menu_popup_el.addEventListener("pointerenter", (event) => {
							if (event.target.closest(".menu-item") === item_el) {
								return;
							}
							if (!close_tid) {
								if (submenu_popup_el.style.display !== "none") {
									close_tid = setTimeout(() => {
										if (!window.debugKeepMenusOpen) {
											close_submenus_at_this_level();
										}
									}, 500);
								}
							}
						});
						menu_popup_el.addEventListener("pointerleave", () => {
							if (close_tid) {
								clearTimeout(close_tid);
								close_tid = null;
							}
						});

						item_el.addEventListener("pointerdown", () => {
							open_submenu(false);
						});
					}

					let just_activated = false;
					const item_action = () => {
						if (just_activated) {
							return;
						}
						just_activated = true;
						setTimeout(() => {
							just_activated = false;
						}, 10);

						if (item.checkbox) {
							if (item.checkbox.toggle) {
								item.checkbox.toggle();
							}
							menu_popup_el.dispatchEvent(new CustomEvent("update"), {});
						} else if (item.action) {
							close_menus();
							refocus_window();
							item.action();
						}
					};
					item_el.addEventListener("pointerup", e => {
						if (e.pointerType === "mouse" && e.button !== 0) {
							return;
						}
						if (e.pointerType === "touch") {
							return;
						}
						item_el.click();
					});
					item_el.addEventListener("click", e => {
						if (item.submenu) {
							open_submenu(true);
						} else {
							item_action();
						}
					});
				}
			});
		}

		const make_menu_button = (menus_key, menu_items) => {
			const menu_button_el = E("div", {
				class: "menu-button",
				"aria-expanded": "false",
				"aria-haspopup": "true",
				role: "menuitem",
			});

			menus_el.appendChild(menu_button_el);

			const menu_popup = new MenuPopup(menu_items);
			const menu_popup_el = menu_popup.element;
			document.body ?.appendChild(menu_popup_el);
			submenu_popups_by_menu_item_el.set(menu_button_el, menu_popup);
			parent_item_el_by_popup_el.set(menu_popup_el, menu_button_el);
			menu_button_el.id = `menu-button-${menus_key}-${uid()}`;
			menu_popup_el.dataset.semanticParent = menu_button_el.id;
			menu_button_el.setAttribute("aria-controls", menu_popup_el.id);
			menu_popup_el.setAttribute("aria-labelledby", menu_button_el.id);
			menus_el.setAttribute("aria-owns", `${menus_el.getAttribute("aria-owns") || ""} ${menu_popup_el.id}`);

			const update_position_from_containing_bounds = () => {
				const rect = menu_button_el.getBoundingClientRect();
				let popup_rect = menu_popup_el.getBoundingClientRect();
				menu_popup_el.style.position = "absolute";
				menu_popup_el.style.left = `${(get_direction() === "rtl" ? rect.right - popup_rect.width : rect.left) + window.scrollX}px`;
				menu_popup_el.style.top = `${rect.bottom + window.scrollY}px`;

				const uncorrected_rect = menu_popup_el.getBoundingClientRect();
				if (Math.floor(uncorrected_rect.right) > innerWidth) {
					menu_popup_el.style.left = `${innerWidth - uncorrected_rect.width}px`;
				}
				if (Math.ceil(uncorrected_rect.left) < 0) {
					menu_popup_el.style.left = "0px";
				}
			};
			window.addEventListener("resize", update_position_from_containing_bounds);
			menu_popup_el.addEventListener("update", update_position_from_containing_bounds);

			const menu_id = menus_key.replace("&", "").replace(/ /g, "-").toLowerCase();
			menu_button_el.classList.add(`${menu_id}-menu-button`);
			menu_popup_el.style.display = "none";
			menu_button_el.innerHTML = display_hotkey(menus_key);
			menu_button_el.tabIndex = -1;

			menu_button_el.setAttribute("aria-haspopup", "true");
			menu_button_el.setAttribute("aria-controls", menu_popup_el.id);

			menu_button_el.addEventListener("focus", () => {
				top_level_highlight(menus_key);
			});
			menu_button_el.addEventListener("pointerdown", e => {
				if (menu_button_el.classList.contains("active")) {
					menu_button_el.dispatchEvent(new CustomEvent("release", {}));
					refocus_window();
					e.preventDefault();
				} else {
					open_top_level_menu(e.type);
				}
			});
			menu_button_el.addEventListener("pointerenter", e => {
				top_level_highlight(menus_key);
				if (e.pointerType === "touch") {
					return;
				}
				if (selecting_menus) {
					open_top_level_menu(e.type);
				}
			});

			function open_top_level_menu(type = "other") {
				close_menus();

				menu_button_el.classList.add("active");
				menu_button_el.setAttribute("aria-expanded", "true");
				menu_popup_el.style.display = "";
				menu_popup_el.style.zIndex = get_new_menu_z_index();
				menu_popup_el.setAttribute("dir", get_direction());
				if (!menu_popup_el.parentElement) {
					document.body.appendChild(menu_popup_el);
				}
				top_level_highlight(menus_key);

				menu_popup_el.dispatchEvent(new CustomEvent("update"), {});

				selecting_menus = true;

				menu_popup_el.focus({
					preventScroll: true
				});
				active_menu_popup = menu_popup;

				if (type === "keydown") {
					menu_popup.highlight(0);
					send_info_event(menu_popup.menuItems[0]);
				} else {
					send_info_event();
				}
			};
			menu_button_el.addEventListener("release", () => {
				selecting_menus = false;

				menu_button_el.classList.remove("active");
				if (!window.debugKeepMenusOpen) {
					menu_popup_el.style.display = "none";
					menu_popup.highlight(-1);
					menu_button_el.setAttribute("aria-expanded", "false");
				}

				menus_el.dispatchEvent(new CustomEvent("default-info", {}));
			});
			top_level_menus.push({
				menu_button_el,
				menu_popup_el,
				menus_key,
				hotkey: get_hotkey(menus_key),
				open_top_level_menu,
			});
		};
		for (const menu_key in menus) {
			make_menu_button(menu_key, menus[menu_key]);
		}

		window.addEventListener("keydown", e => {
			if (
				!document.activeElement ||
				!document.activeElement.closest ||
				!document.activeElement.closest(".menus, .menu-popup")
			) {
				if (e.keyCode === 27) {
					if (any_open_menus()) {
						close_menus();
						e.preventDefault();
					}
				}
			}
		});
		window.addEventListener("blur", (event) => {
			if (!event.isTrusted) {
				return;
			}
			close_menus();
		});

		function close_menus_on_click_outside(event) {
			if (event.target ?.closest ?.(".menus, .menu-popup")) {
				return;
			}
			close_menus();
		}
		window.addEventListener("pointerdown", close_menus_on_click_outside);
		window.addEventListener("pointerup", close_menus_on_click_outside);

		let keyboard_scope_elements = [];

		function set_keyboard_scope(...elements) {
			for (const el of keyboard_scope_elements) {
				el.removeEventListener("keydown", keyboard_scope_keydown);
			}
			keyboard_scope_elements = elements;
			for (const el of keyboard_scope_elements) {
				el.addEventListener("keydown", keyboard_scope_keydown);
			}
		}

		function keyboard_scope_keydown(e) {
			if (
				(e.ctrlKey || e.metaKey) &&
				e.keyCode !== 17 &&
				e.keyCode !== 91 &&
				e.keyCode !== 93 &&
				e.keyCode !== 224
			) {
				close_menus();
				return;
			}
			if (e.defaultPrevented) {
				return;
			}
			if (e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
				const menu = top_level_menus.find((menu) =>
					menu.hotkey.toLowerCase() === String.fromCharCode(e.keyCode).toLowerCase()
				);
				if (menu) {
					e.preventDefault();
					menu.open_top_level_menu("keydown");
				}
			}
		}

		set_keyboard_scope(window);

		this.element = menus_el;
		this.closeMenus = close_menus;
		this.setKeyboardScope = set_keyboard_scope;
	}

	exports.MenuBar = MenuBar;
	exports.MENU_DIVIDER = MENU_DIVIDER;

})(window);