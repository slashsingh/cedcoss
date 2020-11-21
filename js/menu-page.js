$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        pagination: true,
        paginationNumber: false,
        autoplay: true,
        rewind: true,
        autoplaySpeed: 2500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
});