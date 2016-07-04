$(document).ready(function () {
    $('#play-video').on('click', function (ev) {

        $("#video")[0].src += "&autoplay=1";
        ev.preventDefault();

    });
    $('#closeButton,#closebutton2').click(function () {
        $("#video")[0].src = 'https://www.youtube.com/embed/QtXby3twMmI?rel=0';

    });
    
    $("#btnstarter").click(function () {        
        $("#starter").addClass("highlighted");
        $("#business, #extended").removeClass("highlighted");
    });
    $('#btnbusiness').click(function () {     
        $("#business").addClass("highlighted");
        $("#starter, #extended").removeClass("highlighted");
    });
    $('#btnextended').click(function () {       
        $("#extended").addClass("highlighted");
        $("#starter, #business").removeClass("highlighted");
    });

$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
});

