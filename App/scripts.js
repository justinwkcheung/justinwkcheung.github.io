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

  // $('.my-name').mouseover(function(){
  //   $('.my-name').effect( "pulsate" );
  //   window.setTimeout(function(){
  //     if (!$('.my-name').is('.opac1, .opac2, .opac3, .opac4')) {
  //
  //       $('.my-name').addClass('opac1');
  //     }
  //     else if ($('.my-name').hasClass('opac1')) {
  //       $('.my-name').removeClass('opac1').addClass('opac2');
  //     }
  //     else if ($('.my-name').hasClass('opac2')) {
  //       $('.my-name').removeClass('opac2').addClass('opac3');
  //     }
  //     else if ($('.my-name').hasClass('opac3')) {
  //       $('.my-name').addClass('opac4');
  //     }
  //   }, 400);
  // });

  $('.my-name').mouseover(function(){
    $('.my-name').effect( "pulsate" );
    $('.my-name').toggleClass('opac', 2000)
  });


  // When the user clicks on the button, scroll to the top of the document
  // function topFunction() {
  //     document.body.scrollTop = 0; // For Chrome, Safari and Opera
  //     document.documentElement.scrollTop = 0; // For IE and Firefox
  // }

});
