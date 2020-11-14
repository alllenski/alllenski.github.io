
$(document).ready(function(){
   
    $('#content-header').load("common/navbar.md");

    $("body").show();

});

$(document).ajaxStop(function() {

    $('#logo').mouseenter(function(){
        let randomPositionX = ~Math.floor(Math.random() * 5) * 90;
        let randomPositionY = ~Math.floor(Math.random() * 4 - 1) * 90;
        $("#logo").css("background-position", randomPositionX.toString() + "px " + randomPositionY.toString() + "px");
    });

});