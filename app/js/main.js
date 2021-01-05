// $(function () {
//     $('body').css('background-color', 'red')
// })

$(function () {

  $('.top__slider').slick({
    // infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>123){
        $('.menu').addClass('fixed');
    }
    else if ($(this).scrollTop()<125){
        $('.menu').removeClass('fixed');
    }
});

})