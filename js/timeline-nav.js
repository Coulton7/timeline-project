(function($) {
  var next = 1;
  var prev = 0;
  var nextPoint = $('#next').attr('href');
  var prevPoint = $('#prev').attr('href');

  $(document).ready(function() {
    document.getElementById('next').onclick = function() {
      if (next != 29) {
        next++;
      }
      if (prev != 28) {
        prev++;
      }
      document.getElementById('next').setAttribute("href", "#" + next);
      document.getElementById('prev').setAttribute("href", "#" + prev);
    };

    document.getElementById('prev').onclick = function() {
      if (next != 1) {
        next--;
      }
      if (prev != 0) {
        prev--;
      }
      document.getElementById('next').setAttribute("href", "#" + next);
      document.getElementById('prev').setAttribute("href", "#" + prev);
    };
  });

})(jQuery);
