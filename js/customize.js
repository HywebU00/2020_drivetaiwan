// 自行加入的JS請寫在這裡
$(function () {
  // Load document before calculating window height
  $(document).on('load scroll resize', function () {
    var winHeight = $(window).height(),
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max,
      value;
    /* Set the max scrollable area */
    max = docHeight - winHeight;
    progressBar.attr('max', max);

    value = $(window).scrollTop();
    progressBar.attr('value', value);
  });
  // kv
  $('.county_list')
    .find('ul li a')
    .hover(
      function () {
        var COUNTYNAME = $(this).attr('class');
        $('.taiwan_map')
          .find('.map')
          .find('.' + COUNTYNAME)
          .addClass('active');
      },
      function () {
        $('.taiwan_map').find('.el').removeClass('active');
      }
    );
  var $carousel = $('.mpSlider').slick({
    mobileFirst: true,
    dots: false,
    arrow: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
  });
  /* The first slide will not get the animation,
    therefore I add and remove a class that will trigger the css animation */
  $carousel.find('.slick-current').addClass('start');
  /* I use a set-timeoutfunction to hinder optimization
    of adding and removing classes */
  setTimeout(function () {
    $carousel.find('.start').removeClass('start');
  }, 0);
  $('.photoSlider').slick({
    mobileFirst: true,
    dots: false,
    arrow: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
  });
  // video
  $('.youtubeSlider').slick({
    mobileFirst: true,
    dots: false,
    arrow: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    autoplay: false,
    fade: false,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
  });
  // 主題公路
  $('.recommend .roadSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  // 主題公路
  $('.topicContent .roadSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  // 主題公路
  $('.secretContent .roadSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  // 影音專區
  $('.videoSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });

  // 影音專區
  $('.othervideoSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });

  // 即時影像
  $('.livevideoSlider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  $('.livevideoSlider').slickLightbox({
    caption: 'caption',
    lazyLoad: 'ondemand',
    useHistoryApi: 'true',
    ease: 'ease',
    lazy: true,
  });
  // $('.mainLivevideo').slickLightbox({
  //     caption: 'caption',
  //     lazyLoad: 'ondemand',
  //     useHistoryApi: 'true',
  //     ease: 'ease',
  //     lazy: true
  // });
  // 影音專區
  $('.changeSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  // var resizeTimer1;
  // var window_W = $(window).width();
  // $(window).bind("load resize", function(event) {
  //     clearTimeout(resizeTimer1);
  //     resizeTimer = setTimeout(function() {
  //         window_W = $(window).width();
  //     if(window_W < 767){
  //         $('.secretContent').slick('reinit');
  //     }, 50);
  // });
  // 影音專區
  // $('.secret .secretContent').slick({
  //     mobileFirst: true,
  //     dots: false,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: false,
  //     arrow: true,
  //     lazyLoaded: true,
  //     lazyLoad: 'ondemand',
  //     ease: 'ease',
  //     responsive: [{
  //         breakpoint: 545,
  //         settings: "unslick"
  //     }, {
  //         breakpoint: 544,
  //         settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             arrows: true
  //         }
  //     }]
  // });
  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $('.cp_slider').slickLightbox({
    caption: 'caption',
    lazyLoad: 'ondemand',
    useHistoryApi: 'true',
    ease: 'ease',
    lazy: true,
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    arrows: true,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //右側按鈕
  if ($('.quickDot').length > 0) {
    //主題公路
    $('.gotoTopic').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.topic').offset().top }, 600, 'linear');
      $(this).parent().siblings().find('a').removeClass('active');
      $(this).blur();
      e.preventDefault();
    });
    $('.gotoTopic').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.topic').offset().top }, 600, 'linear');
        $('.topic a:first').focus();
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    //私房秘境
    $('.gotoSecret').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.secret').offset().top }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoSecret').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.secret').offset().top }, 600, 'linear', function () {
            $('.secret a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    //玩味主題
    $('.gotoPlayfun').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.playfun').offset().top }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoPlayfun').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.playfun').offset().top }, 600, 'linear', function () {
            $('.playfun a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    //精選照片
    $('.gotoPhoto').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.photo').offset().top }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoPhoto').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.photo').offset().top }, 600, 'linear', function () {
            $('.photo a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoVideo').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.video').offset().top }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoVideo').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.video').offset().top }, 600, 'linear', function () {
            $('.video a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoCpIntro').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.cp_intro').offset().top - 40 }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoCpIntro').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.cp_intro').offset().top }, 600, 'linear', function () {
            $('.cp_intro a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoCpLengend').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.cp_legend').offset().top - 40 }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoCpLengend').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.cp_legend').offset().top }, 600, 'linear', function () {
            $('.cp_legend a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoBasic').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.basic').offset().top - 40 }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoBasic').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.basic').offset().top }, 600, 'linear', function () {
            $('.basic a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoRecommend').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.recommend').offset().top - 40 }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoRecommend').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.recommend').offset().top }, 600, 'linear', function () {
            $('.recommend a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoOtherVideo').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.othervideo').offset().top }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoOtherVideo').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.othervideo').offset().top }, 600, 'linear', function () {
            $('.othervideo a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoChange').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.change').offset().top - 40 }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoChange').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.change').offset().top }, 600, 'linear', function () {
            $('.change a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoCpTopic').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.cp_topic').offset().top }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoCpTopic').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.cp_topic').offset().top }, 600, 'linear', function () {
            $('.cp_topic a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoCpStory').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.cp_story').offset().top }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoCpStory').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.cp_story').offset().top }, 600, 'linear', function () {
            $('.cp_story a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoFeatureSlider').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.featureSlider').offset().top - 200 }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoFeatureSlider').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.featureSlider').offset().top }, 600, 'linear', function () {
            $('.featureSlider a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoRelativeSecret').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.relatveSecret').offset().top }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoRelativeSecret').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.relatveSecret').offset().top }, 600, 'linear', function () {
            $('.relatveSecret a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotopeopleShare').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.peopleShare').offset().top }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotopeopleShare').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.peopleShare').offset().top }, 600, 'linear', function () {
            $('.peopleShare a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoProvHighway').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.provHighway').offset().top }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoProvHighway').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.provHighway').offset().top }, 600, 'linear', function () {
            $('.provHighway a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoForecast').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.forecast').offset().top }, 600, 'linear');
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoForecast').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.forecast').offset().top }, 600, 'linear', function () {
            $('.forecast a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });

    $('.gotoliveVideo').click(function (e) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.livevideo').offset().top }, 600, 'linear', function () {
          $('.livevideo a:first').focus();
        });
      $(this).blur();
      $(this).parent().siblings().find('a').removeClass('active');
      e.preventDefault();
    });
    $('.gotoliveVideo').keydown(function (e) {
      if (e.which == 13) {
        $('html, body')
          .stop(true, true)
          .animate({ scrollTop: $('.livevideo').offset().top }, 600, 'linear', function () {
            $('.livevideo a:first').focus();
          });
        $(this).blur();
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
      }
    });
  }
  //
  $('.map_tag')
    .find('a')
    .each(function (index, el) {
      var zoneName = $(this).attr('class');
      console.log(zoneName);
      $(this).hover(
        function () {
          $('.tw_map')
            .find('.' + zoneName)
            .addClass('active');
        },
        function () {
          $('.tw_map').find('a').removeClass('active');
        }
      );
    });
  //
  // $('.tw_map a').each(function(index, el) {
  //     $this = $(this);
  //     $this.mousemove(function(e) {
  //         $(this).find('span').show();
  //         // var TEST = $('span').position();
  //         // var TESTX = TEST.left;
  //         // var TESTY = TEST.top;
  //         // var parentOffset = $(this).parent().offset();
  //         // var relX = e.pageX - parentOffset.left;
  //         // var relY = e.pageY - parentOffset.top
  //         // console.log('mouseX = '+TESTX +'mouseY = '+ TESTY);
  //         // console.log('relX = '+relX +'relY = '+ relY);
  //         var relX = e.pageX;
  //         var relY = e.pageY;
  //         $(this).find('span').css({ left: relX + 100, top: relY - 50 });
  //         //取每個path的name值
  //         //mouse div 放入 path的 name值
  //     });
  //     $this.mouseout(function(event) {
  //         $('.taiwan_map a span').hide();
  //     });
  // });
  // $('.tw_map a').each(function(index, el) {
  //     // $("#log").text("pageX: " + event.pageX + ", pageY: " + event.pageY);
  //     $(this).on("mousemove", function(event) {
  //         $(this).find('span').show();
  //         $(this).find('span').css("top", event.pageY).css('left', event.pageX)
  //     });
  // });
  $(window).on('load resize scroll', function (e) {
    var window_H = $(window).innerHeight();
    var windowTop = $(window).scrollTop();
    $('.section').each(function (index, el) {
      // 可以+130 讓圖進入多點再跑動畫
      var thisTop = Math.floor($(this).offset().top - windowTop + 200);
      //imgTop < window_H 是指進入到最底部
      //imgTop>0 是指還沒滾到最上方
      //同時條件成立 代表物件在看得到的地方才會trigger動畫
      if (thisTop < window_H && thisTop > 0) {
        $(this).addClass('effect');
      }
    });
  });
  $(window).on('load resize scroll', function (e) {
    var window_H = $(window).innerHeight();
    var windowTop = $(window).scrollTop();
    $('.mask').each(function (index, el) {
      // 可以+130 讓圖進入多點再跑動畫
      var imgTop = Math.floor($(this).offset().top - windowTop + 130);
      //imgTop < window_H 是指進入到最底部
      //imgTop>0 是指還沒滾到最上方
      //同時條件成立 代表物件在看得到的地方才會trigger動畫
      if (imgTop < window_H && imgTop > 0) {
        $(this).addClass('effect');
      }
    });
  });
  // before
  $('.before-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.before-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    arrows: true,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.before-nav',
    infinite: true,
  });
  $('.before-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.before-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // after
  $('.after-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.after-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    arrows: true,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.after-nav',
    infinite: true,
  });
  $('.after-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.after-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //
  // $.scrollify({
  //     section: ".mpSlider,.topic,.secret,.photo,.video",
  //     sectionName: ".mpSlider,.topic,.secret,.photo,.video",
  //     interstitialSection: "header,.fatfooter,footer,.playfun,.wantknow",
  //     easing: "easeOutExpo",
  //     scrollSpeed: 1000,
  //     offset: 0,
  //     scrollbars: true,
  //     standardScrollElements: ".mpSlider",
  //     setHeights: true,
  //     overflowScroll: true,
  //     updateHash: true,
  //     touchScroll: false,
  //     before: function() {},
  //     after: function() {},
  //     afterResize: function() {},
  //     afterRender: function() {},
  // });
  // $(window).on("resize", function(e) {
  //     $.scrollify.update();
  // });
  $.fn.isOnScreen = function () {
    var win = $(window);
    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft(),
    };
    if (!this.offset()) {
      return false;
    }
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height() / 3;
    // console.log(viewport.bottom);
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
  };
  var activeTimer;
  $(window).on('load resize scroll', function () {
    clearTimeout(activeTimer);
    activeTimer = setTimeout(function () {
      // 首頁
      if ($('.mpSlider').isOnScreen() === true) {
        $('.quickDot').find('a').removeClass('active');
      }
      if ($('.topic').isOnScreen() === true) {
        $('.quickDot').find('.gotoTopic').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoTopic').removeClass('active');
      }
      if ($('.secret').isOnScreen() === true) {
        $('.quickDot').find('.gotoSecret').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoSecret').removeClass('active');
      }
      if ($('.playfun').isOnScreen() === true) {
        $('.quickDot').find('.gotoPlayfun').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoPlayfun').removeClass('active');
      }
      if ($('.photo').isOnScreen() === true) {
        $('.quickDot').find('.gotoPhoto').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoPhoto').removeClass('active');
      }
      if ($('.video').isOnScreen() === true) {
        $('.quickDot').find('.gotoVideo').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoVideo').removeClass('active');
      }
      //內頁
      if ($('.cp_story').isOnScreen() === true) {
        $('.quickDot').find('.gotoCpStory').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoCpStory').removeClass('active');
      }
      if ($('.cp_topic').isOnScreen() === true) {
        $('.quickDot').find('.gotoCpTopic').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoCpTopic').removeClass('active');
      }
      if ($('.change').isOnScreen() === true) {
        $('.quickDot').find('.gotoChange').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoChange').removeClass('active');
      }
      if ($('.basic').isOnScreen() === true) {
        $('.quickDot').find('.gotoBasic').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoBasic').removeClass('active');
      }
      if ($('.othervideo').isOnScreen() === true) {
        $('.quickDot').find('.gotoOtherVideo').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoOtherVideo').removeClass('active');
      }
      // 秘境內頁
      if ($('.cp_intro').isOnScreen() === true) {
        $('.quickDot').find('.gotoCpIntro').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoCpIntro').removeClass('active');
      }
      if ($('.cp_legend').isOnScreen() === true) {
        $('.quickDot').find('.gotoCpLengend').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoCpLengend').removeClass('active');
      }
      if ($('.recommend').isOnScreen() === true) {
        $('.quickDot').find('.gotoRecommend').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoRecommend').removeClass('active');
      }
      if ($('.featureSlider').isOnScreen() === true) {
        $('.quickDot').find('.gotoFeatureSlider').addClass('active').parents('li').siblings().find('a').removeClass('active');
      } else {
        $('.quickDot').find('.gotoFeatureSlider').removeClass('active');
      }
      if ($('.fatfooter').isOnScreen() === true) {
        $('.quickDot').find('a').removeClass('active');
      }
      $('.change_info').each(function (index, el) {
        if ($(this).isOnScreen() === true) {
          $(this).find('.here').addClass('fixed');
        } else {
          $(this).find('.here').removeClass('fixed');
        }
      });
    }, 50);
  });
  // 公路蛻變
  $('.change_info').each(function (index, el) {
    $(this).append('<div class="here"><span></span></div>');
    var changeTitle = $(this).find('h3').text();
    $(this).find('.here').find('span').text(changeTitle);
    // changePos = $(this).offset().left + $(this).width();
    // hereRight = $(window).width() - changePos -100;
    // console.log(hereRight);
  });
  // $(window).on('load resize scroll', function() {
  //     var scrollTop = Math.floor($(window).scrollTop());
  //     // console.log("window" + scrollTop);
  //     $('.change_info').each(function(index, el) {
  //         var elementOffset = Math.floor($(this).offset().top),
  //             distance = (scrollTop - elementOffset);
  //             // console.log("div" + elementOffset);
  //         if (scrollTop >= distance) {
  //             $(this).find('.here').find('span').css('top', distance + 80);
  //         };
  //     });
  // });
  // 主題公路
  $('.topicNewest .roadSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  // 秘境
  $('.secretNewest .roadSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  // 秘境
  $('.relatveSecret .roadSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  // 省道公路
  $('.provHighway .roadSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  // adv_filter
  $('.filter_btn')
    .off()
    .click(function (e) {
      $('.adv_filter').stop().slideToggle();
      e.preventDefault();
    });

  // peopleShare
  $('.peopleShare .photoSlider ul').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });

  //逐三小時天氣預報 手機版展開/收合
  $('.btn-weather').click(function (e) {
    $(this).toggleClass('show');
    $('.weather_m').toggleClass('show-content');
    if ($('.weather_m').hasClass('show-content')) {
      $('.btn-weather').html('收合');
      $('.btn-weather').attr('name', '顯示較少資料');
    } else {
      $('.btn-weather').html('展開');
      $('.btn-weather').attr('name', '顯示更多資料');
    }
  });

  $('[data-fancybox]').fancybox({
    afterLoad: function (instance, current) {
      current.$image.attr('alt', current.opts.$orig.find('img').attr('alt'));
    },
  });
});
