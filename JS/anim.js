$(window).on("load", function() {
  $('.single-item').slick({
    centerMode: false,
    draggable: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        dots: false
      }
    }]

  });

  $('.slider').slick({
    dots: false,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(".slider2").slick({
    responsive: [{
        breakpoint: 99999,
        settings: "unslick",
      },
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          mobileFirst: true,
          respondTo: 'slider2',
          adaptiveHeight: true,
          prevArrow: "<img class='slick-prev' src='../assets/img/arrow.png'>",
          nextArrow: "<img class='slick-next'  src='../assets/img/arrow.png'>"
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          autoplay: true,
          speed: 500,
        }
      }
    ]
  });

  $(window).on("scroll touchmove", function() {
    $('.navbar').toggleClass('tiny', $(document).scrollTop() > 0);
  });
});
