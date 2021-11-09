$(document).ready(function() {
  $('.stick-news').slick();
  $('.slick_news_hot').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
    $('.slick_news_business').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});
// Scroll To Top //
$(document).ready(function(){
  $('.bota_btn_mobile_search').on('click', function(){
    $('body').toggleClass('search-open');
  });
    $('.bota_btn_mobile_menu').on('click', function(){
    $('body').toggleClass('mobile-open');
  });
  $('.bota_body_opactiy').click(function() {
    $('body').removeClass('search-open');
     $('body').removeClass('mobile-open');
  });
  $('.bota_menu_mobile_header').click(function() {
    $('body').removeClass('mobile-open');
  });
  $(".bota_icon_scrolltop").click(function(event){
   $('html, body').animate({ scrollTop: 0 }, 1000);
 });
  // Hide,Show ScrollToTop
  var num = 100;  
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {   
      $('.bota_scrolltop,.bota_header_nav').addClass('fixed');
    }
    else
    {
      $('.bota_scrolltop,.bota_header_nav').removeClass('fixed');
    }
  });
});  
// End Scroll To Top //