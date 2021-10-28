(function($) {
  var next = 1;
  var prev = 0;

  document.getElementById('next').onclick = function() {
    if (next != 29) {
      next++;
    }
    if (prev != 28) {
      prev++;
    }
    document.getElementById('next').setsetAttribute("href", next);
    document.getElementById('prev').setsetAttribute("href", prev);
  };

  document.getElementById('prev').onclick = function() {
    if (next != 1) {
      next--;
    }
    if (prev != 0) {
      prev--;
    }
    document.getElementById('next').setsetAttribute("href", next);
    document.getElementById('prev').setsetAttribute("href", prev);
  };

})(jQuery);
