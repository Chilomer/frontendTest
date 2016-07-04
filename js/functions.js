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

});

