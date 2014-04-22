(function() {
  var $popover;

  skrollr.init();

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

  $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
      var target;
      if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        target = $(this.hash);
        target = (target.length ? target : $("[name=" + this.hash.slice(1) + "]"));
        if (target.length) {
          $("html,body").animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });
  });

}).call(this);
