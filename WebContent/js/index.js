// Controla Topnav
$(function() {
    var navPanels = $();

    $('#topnav a').each(function() {
        navPanels = navPanels.add($(this.hash));
    });

    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-$('#topnav').outerHeight() + 0
                }, 900);
                return false;
            }
        }
    });
});