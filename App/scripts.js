$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $(target).offset().top
	    }, 900, 'swing', function() {
	        window.location.hash = target;
	    });
	});
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }


  // window.setInterval(function(){
  //   // $('.my-name').effect( "shake" ).toggleClass('yellow');
  //   $('.my-name').effect( "pulsate" );
  // }, 5000);

  $('.my-name').mouseover(function(){
    $('.my-name').effect( "pulsate" );
  });


  // When the user clicks on the button, scroll to the top of the document
  // function topFunction() {
  //     document.body.scrollTop = 0; // For Chrome, Safari and Opera
  //     document.documentElement.scrollTop = 0; // For IE and Firefox
  // }

});
