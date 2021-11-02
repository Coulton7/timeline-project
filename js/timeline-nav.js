(function($) {
  var stickyTop = 0;
  var scrollTarget = false;

  var timeline_nav = $('.timeline-nav');
  var items = $('li', timeline_nav);
  var milestones = $('.timeline-badge');
  var offsetTop = parseInt(timeline_nav.css('top'));
  var windowScreen = $(window);

  var TIMELINE_VALUES = {
    start: 120,
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

      var scrollTargetTop = milestone.offset().top - 150;

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

    if(windowScreen.scrollTop() >= $('.socialmedia').offset().top){
      timeline_nav.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');
    };

    if(windowScreen.scrollTop() < $('.socialmedia').offset().top){
      timeline_nav.css('top', '30em');
    };

    items.filter('.active').removeClass('active');

    items.eq(active != -1 ? active : 0).addClass('active');
  }).trigger('scroll');
})(jQuery);

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$(document).ready(function(){
	var my_posts = $("[rel=tooltip]");

	var size = $(window).width();
	for(i=0;i<my_posts.length;i++){
		the_post = $(my_posts[i]);

		if(the_post.hasClass('invert') && size >=767 ){
			the_post.tooltip({ placement: 'left', container:'body'});
			the_post.css("cursor","pointer");
		}else{
			the_post.tooltip({ placement: 'right', container:'body'});
			the_post.css("cursor","pointer");
		}
	}
});

(function($){
  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: 'hover',
      container: 'body'
    });
  });

    $(document).ready(function() {
      // Select all links with hashes
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top - 100
              }, 1000
            );
            }
          }
        });
    });
})(jQuery);
