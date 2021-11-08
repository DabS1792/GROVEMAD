$(function () {
    $('.slider__box').slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },

        ]

    });
});