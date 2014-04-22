(function() {
  var $popover;

  skrollr.init();

  smoothScroll.init({
    speed: 800,
    easing: 'easeOutCubic',
    updateURL: false,
    offset: 0
  });

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

}).call(this);
