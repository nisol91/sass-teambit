$(document).ready(function() {


  //navbar scroll
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    console.log(height);
    if(height  > 100) {
      $('.nav').addClass('nav_scroll')
    } else if (height === 0) {
      $('.nav').removeClass('nav_scroll')
    }
  });

  //slide menu
  $('#solutions').mouseenter(function() {
    $('.slide').slideDown('slow');
  });
  $('.slide').mouseleave(function() {
    $('.slide').slideUp('slow');
  });
  
});
