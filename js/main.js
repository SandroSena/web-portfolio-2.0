//~ Skillbar

$(document).ready(function() {
  $(".skillbar").each(function() {
    $(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: $(this).attr("data-percent")
        },
        9000
      );
  });
});

//~ Visibility

Visibility.onVisible(function() {
  setTimeout(function() {
    $(".header-img").addClass("animated zoomIn");
  }, 400);
  setTimeout(function() {
    $(".header-h1").addClass("animated zoomIn");
  }, 900);
  setTimeout(function() {
    $(".header-span").addClass("animated zoomIn");
  }, 1300);
  setTimeout(() => {
    $(".footer-p").addClass("animated infinite shake");
  }, 10000);
});

//~ Waypoint

$(".about-p").waypoint(() => {
  $(".about-p").addClass("animated zoomIn");
}, { offset: '95%' });

