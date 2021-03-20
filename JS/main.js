$(document).ready(function(){
    $('.customer-logo').slick({
        dots:true,
        arrows: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll:4,
        adaptiveHeight: true,

    });

    $('.menu nav').meanmenu({
        meanScreenWidth:"767"

    });
})


$(window).scroll(function() {
    $("header").removeClass("header-alt");
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $("header").addClass("header-alt");
    }
});





