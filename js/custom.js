$(document).ready(function () {
    $('.venobox').venobox({
        border: '10px',
    });
    //banner part slider
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 500,
    });
    //team part slider
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        autoplay: true,
    });
    //testemonial part
    $('.text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-img'
    });
    $('.slider-img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.text-slider',
        prevArrow: '.team-arrow-left',
        nextArrow: '.team-arrow-right',
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        arrows: true,
        autoplay: true,
    });
    //sticky top menu design
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-top');
        if (scrolling >= 300) {
            sticky.addClass('nav-bg');
        } else {
            sticky.removeClass('nav-bg');
        }
    });
    //
    $('body').scrollspy({
        target: ".navbar"
    })
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });
    new WOW().init();
});
