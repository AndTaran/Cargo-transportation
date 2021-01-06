
$(function () {

  $('.top__slider').slick({
    // infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 123 && window.innerWidth > 800) {
      $('.menu').addClass('fixed');
    } else if ($(this).scrollTop() < 125 && window.innerWidth > 800) {
      $('.menu').removeClass('fixed');
    }
  });

  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu').toggleClass("menu--active");
  });

  // $('.menu__list-link').on('click', function () {
  //   $('.menu__btn').removeClass('menu__btn--active');
  //   $('.menu__list').removeClass('menu__list--active');
  // });

})