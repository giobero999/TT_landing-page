$(document).ready(function() {
  $(".container").css({
    opacity: 1
  }), $(window).scroll(function() {
    var s = $(this).scrollTop();
    $(".logo_home").css({
      transform: "translate(0px, " + s / 3 + "%)"
    });
  });

  var s = $(".share-buttons").children("div");
  s.hover(function() {
    $(this).stop().addClass("share-moving");
  }, function() {
    $(this).stop().removeClass("share-moving").css({
      transition: "all .2s ease-out"
    });
  });



}); //end ready
