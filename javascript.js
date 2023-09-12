

$(".contact-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 2000);
});

$(".about-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-us").offset().top
    }, 1000);
});

$(".about-footer-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-us").offset().top
    }, 1000);
});

$(".contact-footer-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

$(".whypara-footer-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".strategies").offset().top
    }, 1000);
});

$(".project-footer-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".content-header").offset().top
    }, 1000);
});



$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});