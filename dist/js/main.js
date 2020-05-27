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
                  dots: false
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


// let items = document.querySelectorAll('.catalog-item__link');
// for (let item of items){
//     item.addEventListener('click', () => {
//         event.preventDefault()
//         item.parentNode.classList.toggle('catalog-item__content_active')
//     })
// }

// tabs
let tabs = document.querySelectorAll('.catalog__tab');
let contents = document.querySelectorAll('.catalog__content');
tabs.forEach((element, i) => {
    element.addEventListener('click', () => {
        document.querySelector('.catalog__content_active').classList.remove('catalog__content_active');
        document.querySelector('.catalog__tab_active').classList.remove('catalog__tab_active');
        element.classList.add('catalog__tab_active');
        contents[i].classList.add('catalog__content_active');
    });
});

// tabs 
let links = document.querySelectorAll('.link');
for (let link of links) {
    link.addEventListener('click', event => {
        event.preventDefault();
        link.parentNode.classList.toggle(`${link.parentNode.classList[0]}_active`);
        if (link.parentNode.nextElementSibling) {
            link.parentNode.nextElementSibling.classList.toggle('catalog-item__list_active');
        } else link.parentNode.previousElementSibling.classList.toggle('catalog-item__content_active');
    });
}

let btns = document.querySelectorAll('.header_btn');
for (let btn of Array.from(btns)) btn.addEventListener('click', () => overlay('consultation'));

let buyBtns = document.querySelectorAll('.buy');
for (let btn of Array.from(buyBtns)) btn.addEventListener('click', () => overlay('order'));

let closes = document.querySelectorAll('.modal__close');
for (let close of Array.from(closes)) close.addEventListener('click', () => overlay('modal_isModal'));

const overlay = sect => {
    document.querySelector(`.${sect}`).classList.toggle('modal_isModal');
    document.querySelector('.overlay').classList.toggle('overlay_isOverlay');
}

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val('');

        $('form').trigger();
    });
    return false;
});

window.addEventListener('scroll', () => {
    if (pageYOffset > document.querySelector('.consult').getBoundingClientRect().top){
        $('.pageup').fadeIn('slow');
    } else $('.pageup').hide();
});

$("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

new WOW().init();