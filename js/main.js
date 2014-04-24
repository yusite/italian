(function() {
  var $popover;

  if (!/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
    skrollr.init();
  }

  $popover = $("[data-toggle=popover]").popover({
    html: true,
    placement: "top"
  });

  $(document).on("click", function(e) {
    var $target, inPopover, isPopover;
    $target = $(e.target);
    isPopover = $(e.target).is("[data-toggle=popover]");
    inPopover = $(e.target).closest(".popover").length > 0;
    if (!isPopover && !inPopover) {
      $popover.popover("hide");
    }
  });

  if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
    $("body").on("click", function(e) {
      $("[data-toggle=\"popover\"]").each(function() {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $(".popover").has(e.target).length === 0) {
          $(this).popover("hide");
        }
      });
    });
  }

  smoothScroll.init({
    speed: 1000,
    easing: "easeInOutCubic",
    updateURL: false,
    offset: 0
  });

  $(".menu-toggle").click(function() {
    var offset;
    offset = $(this).offset();
    if (offset.top >= 538) {
      $(".off-canvas").toggleClass("active");
    }
  });

}).call(this);
