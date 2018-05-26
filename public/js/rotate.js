var pxScrolled = 200;
var duration = 500;

$(window).scroll(function() {
  if ($(this).scrollTop() > pxScrolled) {
    $('.fab-container').css({'bottom': '0px', 'transition': '.3s'});
  } else {
    $('.fab-container').css({'bottom': '-72px'});
  } 
});

$('.top').click(function() {
  $('body').animate({scrollTop: 0}, duration);
})