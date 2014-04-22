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

  smoothScroll.init({
    speed: 1000,
    easing: "easeInOutCubic",
    updateURL: false,
    offset: 0
  });

}).call(this);
