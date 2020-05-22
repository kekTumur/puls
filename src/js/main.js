$(document).ready(function(){
    $('.carousel__slider').slick({
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/arrow_right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  dots: true
                }
            }
        ]
    });
});

// var slider = tns({
//     container: '.carousel__slider',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false
//   });

//   document.querySelector('.prev').addEventListener('click', () => {
//       slider.goTo('prev');
//   });

//   document.querySelector('.next').addEventListener('click', () => {
//     slider.goTo('next');
// });

