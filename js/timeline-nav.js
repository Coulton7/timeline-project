(function($) {
  var next = 1;
  var prev = 0;
  var nextPoint = document.getElementById('next').getAttribute('href');
  var prevPoint = document.getElementById('prev').getAttribute('href');

  document.getElementById('next').onclick = function() {
    if (next != 29) {
      next++;
    }
    if (prev != 28) {
      prev++;
    }
    document.getElementById('next').setAttribute("href", next);
    document.getElementById('prev').setAttribute("href", prev);

    $('html, body').animate({
      scrollTop: $(nextPoint).offset().top - 100
    }, 1000);
  };

  document.getElementById('prev').onclick = function() {
    if (next != 1) {
      next--;
    }
    if (prev != 0) {
      prev--;
    }
    document.getElementById('next').setAttribute("href", next);
    document.getElementById('prev').setAttribute("href", prev);
    $('html, body').animate({
      scrollTop: $(prevPoint).offset().top - 100
    }, 1000);
  };

})(jQuery);
