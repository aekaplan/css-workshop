$.fn.scrollToContent = function(speed) {
  var speed = speed || 'fast';
  var targetElementId = $(this).attr('scroller-id');
  var offset = $("#" + targetElementId).offset().top + 'px';

  $('html, body').animate({ scrollTop: offset }, speed);
  return this;
}

function Scroller(scrollSpeed) {
  $('[scroller-id]').each(function() {
    $(this).click(function(){
      $(this).scrollToContent(scrollSpeed);
    });
  });
}
