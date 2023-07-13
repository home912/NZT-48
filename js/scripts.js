$(document).ready(function () {
  // Функция для открытия/закрытия меню-бургера
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

  // Изменение цвета палочек бургер-меню при прокрутке
  if (scroll > 0) {
    $('.header-burger span').addClass('stick');
    $('.header-burger').addClass('stick-before-after');
  } else {
    $('.header-burger span').removeClass('stick');
    $('.header-burger').removeClass('stick-before-after');
  }

  // Изменение прозрачности палочек бургер-меню, если меню открыто
  if ($('.header-burger').hasClass('active')) {
    if (scroll > 0) {
      $('.header-burger span').addClass('transparent');
    }
  } else {
    $('.header-burger span').removeClass('transparent');
  }

});

// Инициализация слайдеров
function initSlider(slider, index) {
  const sliderImages = slider.querySelectorAll('.slider-line-item');
  const sliderLine = slider.querySelector('.slider-line');
  let count = 0;
  let width;

  function init() {
    width = slider.offsetWidth;
    if (index === 1) {
      sliderLine.style.width = (width - 500) * sliderImages.length + 'px'; // Уменьшаем ширину на 800px
      sliderImages.forEach(item => {
        item.style.width = width - 500 + 'px'; // Уменьшаем ширину слайда на 800px
        item.style.height = 'auto';
      });
      sliderLine.style.gap = '40px'; // Добавляем отступы (gap) в 40px для второго слайдера
    } else {
      sliderLine.style.width = width * sliderImages.length + 'px'; // Используем обычную ширину для других слайдеров
      sliderImages.forEach(item => {
        item.style.width = width + 'px'; // Используем обычную ширину слайда для других слайдеров
        item.style.height = 'auto';
      });
      sliderLine.style.gap = '0'; // Убираем отступы для других слайдеров
    }
    rollSlider();
  }

  window.addEventListener('resize', init);

  init();

  // Переключение слайдов при нажатии на кнопки навигации
  slider.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
      count = sliderImages.length - 1;
    }
    rollSlider();
  });

  slider.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= sliderImages.length) {
      count = 0;
    }
    rollSlider();
  });

  function rollSlider() {
    if (index === 1) {
      sliderLine.style.transform = `translateX(-${count * (width - 500)}px)`; // Уменьшаем смещение на 800px для второго слайдера
    } else {
      sliderLine.style.transform = `translateX(-${count * width}px)`; // Используем обычное смещение для других слайдеров
    }
  }
}

// Инициализация всех слайдеров на странице
const sliders = document.querySelectorAll('.slider');
sliders.forEach((slider, index) => {
  initSlider(slider, index);
});


