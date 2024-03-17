$(document).ready(function(){
    $('.reviviews_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      Infinity:false,
      arrows:false,
      appendDots: $('.reviviews_slider'),
      dotsClass: 'slick-dots'
        
    });
  });

  $(document).ready(function() {
    $(".burger_inner").on("swipe", function(event) {
      if (event.swipestart.coords[0] < event.swipestop.coords[0]) {
        // Свайп вправо
        $(".burger").removeClass("active");
      }
    });

    $(".burger").click(function() {
      $(".burger_inner").toggleClass("open");
      $(".burger").toggleClass("active");
      $("html").toggleClass("hold");
    });

    // Обработчик событий для всех ссылок
    $('a').click(function() {
      // Закрыть бургер
      $(".burger_inner").removeClass("open");
      $(".burger").removeClass("active");
      $("html").removeClass("hold");

      // Плавная прокрутка до якоря при клике на кнопку
      let target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top + -150
      }, 800);
      return false;
    });
  });
    gsap.registerPlugin(ScrollTrigger);
  // Оберните ваш код в самовызывающуюся функцию (IIFE), чтобы создать локальную область видимости
(function() {
  // Объявите переменную внутри области видимости функции
  const fadeElements = document.querySelectorAll('.appearance');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          } else {
              entry.target.classList.remove('visible');
          }
      });
  }, {
      threshold: 0.3
  });

  fadeElements.forEach((fadeElement) => {
      observer.observe(fadeElement);
  });
})();


gsap.registerPlugin(ScrollTrigger);
  // Оберните ваш код в самовызывающуюся функцию (IIFE), чтобы создать локальную область видимости
(function() {
  // Объявите переменную внутри области видимости функции
  const fadeElements = document.querySelectorAll('.appearance');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          } else {
              entry.target.classList.remove('visible');
          }
      });
  }, {
      threshold: 0.3
  });

  fadeElements.forEach((fadeElement) => {
      observer.observe(fadeElement);
  });
})();