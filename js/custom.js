$( document ).ready(function() {

  $('.slide-front-page-wrap').slick({
    dots: true,
    arrows: false,
  });

  $('.burger').click(function(event) {
    $('.main-menu ul').slideToggle(500);
  });
});

