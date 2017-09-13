$(document).on('click', 'a', function(event){
  if($(this).attr('class') == 'locale') {
    return;
  }

  event.preventDefault();

  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
});
