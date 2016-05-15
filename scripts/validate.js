if (document.addEventListener) {
    document.addEventListener('invalid', function (e) {
        var element = $(e.target);
        element.addClass("invalid");
    }, true);
}
$(document).bind('change', function (e) {
    if ($(e.target).is(':invalid')) {
        $(e.target).addClass('invalid');
    } else {
        $(e.target).removeClass('invalid');
    }
});