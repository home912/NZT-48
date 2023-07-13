/* функция открытия меню-бургер */
$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger, .header-menu, .buttons').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  // Изменение фона шапки при прокрутке
  if (scroll > 0) {
    $('.header').addClass('scrolled');
    $('.header-menu').css('background', '#fdfdfd');
  } else {
    $('.header').removeClass('scrolled');
    $('.header-menu').css('background', '#1E5AAF');
  }

  // Изменение цвета текста и SVG при прокрутке
  if (scroll > 0) {
    $('.header-link, .header-logo').addClass('scrolled');
    $('.header-logo svg path').css('fill', '#1E5AAF');
    $('#original').addClass('scrolled');
    $('#buy').addClass('scrolled-button');

  } else {
    $('.header-link, .header-logo').removeClass('scrolled');
    $('.header-logo svg path').css('fill', '');
    $('#original').removeClass('scrolled');
    $('#buy').removeClass('scrolled-button');

  }

  if (scroll > 0) {
    $('.header-burger span').addClass('stick');
    $('.header-burger').addClass('stick-before-after');
  } else {
    $('.header-burger span').removeClass('stick');
    $('.header-burger').removeClass('stick-before-after');
  }

  if ($('.header-burger').hasClass('active')) {
    if (scroll > 0) {
      $('.header-burger span').addClass('transparent');
    }
  } else {
    $('.header-burger span').removeClass('transparent');
  }

});




const images = document.querySelectorAll('.slider-line-item');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}

window.addEventListener('resize', init);

init();

document.querySelector('.slider-prev').addEventListener('click', function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = `translateX(-${count * width}px)`;
}






