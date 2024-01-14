var $start_menu = $(".start-menu");
var $inner_menu = $(".inner-menu");
$start_menu.hide();
var open_start_menu = function () {
	$start_button.addClass("selected");
	$start_menu.attr("hidden", null);
	$inner_menu.attr("display", "block");
	$start_menu.slideDown(100);
	$start_menu.css({
		zIndex: ++$Window.Z_INDEX + 5001
	});
};
var close_start_menu = function () {
	$start_button.removeClass("selected");
	$start_menu.attr("hidden", "hidden");
	$inner_menu.attr("display", "none");
	$start_menu.hide();
};
var toggle_start_menu = function () {
	if ($start_menu.is(":hidden")) {
		open_start_menu();
	} else {
		close_start_menu();
	}
};

var $start_button = $(".start-button");
$start_button.on("pointerdown", function () {
	toggle_start_menu();
});

$("body").on("pointerdown", function (e) {
	if ($(e.target).closest(".start-menu, .start-button").length === 0) {
		close_start_menu();
	}
});

$(window).on("keydown", function (e) {
	if (e.which === 27) {
		close_start_menu();
	}
});