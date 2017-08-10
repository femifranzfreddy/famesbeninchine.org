$(document).on('click', 'a', function(event){
  if(event.target.id == 'accueil')
    return;
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
});
