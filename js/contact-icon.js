(function($) {

  $.fn.contactIcon = function() {

    var contact_icon = jQuery(".contact_icon");
    var contactIcon = -1;
    var runCount = 0;

    function showNextIcon() {
      if (runCount < 101) {
        ++contactIcon;
        contact_icon.eq(contactIcon % contact_icon.length)
          .show(0)
          .delay(1800)
          .hide(0, showNextIcon);
        runCount++;
      } else {
        contact_icon.eq(contactIcon % contact_icon.length)
          .show(0);
      }
    }
    showNextIcon();
  };
})(jQuery);

jQuery(document).ready(function() {
  jQuery('.socialmedia').contactIcon();
});
