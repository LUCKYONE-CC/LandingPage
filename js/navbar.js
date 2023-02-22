function toggleMenu() {
    /* hide hamburger icon and show close icon */
    const menu_toggle = $('#menu_toggle');
    const menu = $('#menu');

    menu.toggleClass('active');
    menu_toggle.toggleClass('active');
}

$(document).ready(function () {
    $('#menu_toggle').click(toggleMenu);
    $('#close_menu').click(toggleMenu);
});