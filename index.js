// NAV BAR SCROLL START
$(document).ready(function() {
  $('a[href*="#"]').bind('click', function(e) {
          e.preventDefault(); // prevent hard jump, the default behavior

          var target = $(this).attr("href"); // Set the target as variable

          // perform animated scrolling by getting top-position of target-element and set it as scroll target
          $('html, body').stop().animate({
                  scrollTop: $(target).offset().top
          }, 2500, function() {
                  location.hash = target; //attach the hash (#jumptarget) to the pageurl
          });

          return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}

  // Assign active class to nav links while scolling
  $('.section_of_pg').each(function(i) {
          if ($(this).position().top <= scrollDistance) {
                  $('.navigation a.active').removeClass('active');
                  $('.navigation a').eq(i).addClass('active');
          }
  });
}).scroll();
// NAV BAR SCROLL ENDS


   /* FOOTER AND COPY RIGHT SECTION START  */
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
      /* FOOTER AND COPY RIGHT SECTION ENDS  */



