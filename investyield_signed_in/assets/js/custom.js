$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $(".header-desktop").addClass("header-desktop-active");
  } else {
    $(".header-desktop").removeClass("header-desktop-active");
  }
});

$(".scrollbar-external").scrollbar({
  autoScrollSize: false,
  scrollx: $(".external-scroll_x"),
  scrolly: $(".external-scroll_y"),
});

$(".scrollbar-rail").scrollbar();

//Scrollers with button
console.log("init-scroll: " + $(".right-paddle").scrollLeft());
$(".right-paddle").on("click", function () {
  $(".menu-wrapper").animate(
    {
      scrollLeft: "+=100",
    },
    200
  );
});
$(".left-paddle").on("click", function () {
  $(".menu-wrapper").animate(
    {
      scrollLeft: "-=100",
    },
    200
  );
});

//Scrollers with rails
$(".right-paddle").on("click", function () {
  $(".scroll-content").animate(
    {
      scrollLeft: "+=100",
    },
    200
  );
});
$(".left-paddle").on("click", function () {
  $(".scroll-content").animate(
    {
      scrollLeft: "-=100",
    },
    200
  );
});

(function ($) {
  // 'use strict';
  // weCare Slider
  var wecareSwiper = new Swiper(".wecare-slider", {
    slidesPerView: 1,
    spaceBetween: 2,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})(jQuery);
