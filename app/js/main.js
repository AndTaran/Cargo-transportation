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


  let btn = document.querySelectorAll('#btn');
  let form = document.querySelector('.form');
  let popup = document.querySelector('.form__popup');
  let body = document.querySelector('body');

  for (let index = 0; index < btn.length; index++) {
    const el = btn[index];
    el.addEventListener('click', () => {
      form.classList.toggle('open');
      body.style.overflow = 'hidden';
      body.style.paddingRight = '17px';
    })
  }

  $(form).on('click', function (e) {
    if (!$(e.target).closest(popup).length) {
      $(form).removeClass('open');
      body.style.overflow = 'visible';
      body.style.paddingRight = '0px';
    }
    e.stopPropagation();
  });



  $('.send-form').click(function () {
    let form = $(this).closest('form');

    if (form.valid()) {
      // form.css('opacity', '.5');
      var actUrl = form.attr('action');

      $.ajax({
        url: actUrl,
        type: 'post',
        dataType: 'html',
        data: form.serialize(),
        success: function (data) {
          form.html(data);
          form.css('opacity', '1');
          form.find('.status').html('форма отправлена успешно');
          //$('#myModal').modal('show') // для бутстрапа
        },
        error: function () {
          form.find('.status').html('серверная ошибка');
        }
      });
    }
  });


  // Курсор всегда в начале поля phone
  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  $(".phone").click(function () {
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-99-99");


})