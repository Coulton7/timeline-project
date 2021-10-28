(function($) {
  var stickyTop = 0;
  var scrollTarget = false;

  var timeline_nav = $('.navbar-nav');
  var items = $('li', timeline_nav);
  var milestones = $('.timeline li');
  var offsetLeft = parseInt(timeline_nav.css('left'));

  var TIMELINE_VALUES = {
    start: 190,
    step: 30
  };

  $(window).resize(function() {
    timeline_nav.removeClass('fixed');

    stickyLeft = timeline_nav.offset().left - offsetLeft;

    $(window).trigger('scroll');
  }).trigger('resize');

  $(window).scroll(function() {
    if ($(window).scrollLeft() > stickyLeft) {
      timeline_nav.addClass('fixed');
    } else {
      timeline_nav.removeClass('fixed');
    }
  }).trigger('scroll');

  items.find('span').click(function() {
    var li = $(this).parent();
    var index = li.index();
    var milestone = milestones.eq(index);

    if (!li.hasClass('active') && milestone.length) {
      scrollTarget = index;

      var scrollTargetTop = milestone.offset().top - 80;

      $('html, body').animate({
        scrollTop: scrollTargetTop
      }, {
        duration: 400,
        complete: function complete() {
          scrollTarget = false;
        }
      });
    }
  });

  $(window).scroll(function() {
    var viewLine = $(window).scrollTop() + $(window).height() / 3;
    var  active = -1;

    if (scrollTarget === false) {
      milestones.each(function() {
        if ($(this).offset().top - viewLine > 0) {
          return false;
        }

        active++;
      });
    } else {
      active = scrollTarget;
    }

    timeline_nav.css('left', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');

    items.filter('.active').removeClass('active');

    items.eq(active != -1 ? active : 0).addClass('active');
  }).trigger('scroll');
})(jQuery);
