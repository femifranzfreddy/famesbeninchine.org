$(document).on('click', 'a', function(event){
  if($(this).attr('class') == 'google-doc') {
    return;
  }

  event.preventDefault();

  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
});
