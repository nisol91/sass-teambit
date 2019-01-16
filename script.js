$(document).ready(function() {

  $(window).scroll(function() {
  var height = $(window).scrollTop();
  console.log(height);
  if(height  > 100) {
    $('.nav').addClass('nav_scroll')
  } else if (height === 0) {
    $('.nav').removeClass('nav_scroll')
  }
});
});
