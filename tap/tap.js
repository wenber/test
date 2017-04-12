$(target).bind('touchstart', function () {
    $(this).data('touchon', true).addClass('pressed');
})

$(target).bind('touchend', function () {
    $(this).removeClass('pressed');
    if ($(this).data('touchon')) {
        cb.call(this);
        $(this).data('touchon', false);
    }
})


$(target).bind('touchmove', function () {
    $(this).removeClass('pressed').data('touchon', false);
})