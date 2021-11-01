(function($) {
  var stickyTop = 0;
  var scrollTarget = false;

  var timeline_nav = $('.timeline-nav');
  var items = $('li', timeline_nav);
  var milestones = $('.timeline-badge');
  var offsetTop = parseInt(timeline_nav.css('top'));

  var TIMELINE_VALUES = {
    start: 50,
    step: 30
  };

  $(window).resize(function() {
    timeline_nav.removeClass('fixed');

    stickyTop = timeline_nav.offset().top - offsetTop;

    $(window).trigger('scroll');
  }).trigger('resize');

  $(window).scroll(function() {
    if ($(window).scrollTop() > stickyTop) {
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

    timeline_nav.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');

    items.filter('.active').removeClass('active');

    items.eq(active != -1 ? active : 0).addClass('active');
  }).trigger('scroll');
})(jQuery);
