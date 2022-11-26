function moveCursor(e) { $('#cursor').css({"top": e.pageY, "left": e.pageX}); }
$(window).on('mousemove', moveCursor);