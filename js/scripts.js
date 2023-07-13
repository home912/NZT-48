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
    if ($(window).width() <= 1200) {
      $('.header-menu').css('background', '#fdfdfd');
    }
  } else {
    $('.header').removeClass('scrolled');
    if ($(window).width() <= 1200) {
      $('.header-menu').css('background', '#1E5AAF');
    }
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
      const slideWidth = width * 0.8; // Уменьшаем ширину каждого слайда на 20%
      const gap = 20; // Устанавливаем отступ между слайдами второго слайдера
      const totalWidth = (slideWidth + gap) * sliderImages.length - gap; // Вычисляем общую ширину слайдера с учетом отступов
      sliderLine.style.width = totalWidth + 'px';
      sliderImages.forEach(item => {
        item.style.width = slideWidth + 'px';
        item.style.height = 'auto';
        item.style.marginRight = gap + 'px';
      });
    } else {
      sliderLine.style.width = width * sliderImages.length + 'px';
      sliderImages.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
        item.style.marginRight = '0';
      });
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
      const slideWidth = width * 0.8;
      const gap = 20;
      const slideOffset = (slideWidth + gap) * count; // Смещение для каждого слайда второго слайдера
      sliderLine.style.transform = `translateX(-${slideOffset}px)`;
    } else {
      sliderLine.style.transform = `translateX(-${count * width}px)`;
    }
  }
}

// Инициализация всех слайдеров на странице
const sliders = document.querySelectorAll('.slider');
sliders.forEach((slider, index) => {
  initSlider(slider, index);
});


