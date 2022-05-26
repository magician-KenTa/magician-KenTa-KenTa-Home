(function ($) {
  var $jsPagetop = $( '#js-pageTop')
  var DURATION = 300;

  $jsPagetop.on('click' , function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: 0
    },DURATION);
  });
})(jQuery);
