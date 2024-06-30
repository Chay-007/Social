$(document).ready(function () {
    $('.top-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        dots:true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
           
        }
    })
});