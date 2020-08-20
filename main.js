$(document).ready(function () {
    $('.carousel').slick({
        dots: true,
        arrows: false
        // lazyLoad: 'ondemand',
        // slidesToShow: 3,
        // slidesToScroll: 1
    });
    window.sr = ScrollReveal();
    sr.reveal('#apps-row div');
    sr.reveal('.about-title', {origin: 'left', delay: 100})
    sr.reveal('.about-info', {origin: 'bottom', delay: 200})
});