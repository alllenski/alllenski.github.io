
var words = ["Hello", "World", "Sucker", "Punch"];

$(document).ready(function(){
    
    $("#prompt").hide();

    $("#correct").click(function(){
        nextCard();
    });

    $("#wrong").click(function(){
        nextCard();
    });
     
    $('.flip-container .flipper').click(function() {
        flipCard();
    });

    $(".flip-container").on('transitionend',
        function(){
            $("#info-container").show();
            $("#info").show();
            if ($('.flip-container').hasClass('new')){
                $('.flip-container').toggleClass('new');
                if ($('.flip-container').hasClass('flipped')){
                    $('.back').text(words[0]);
                    words.shift();     
                } else {
                    $('.front').text(words[0]);
                    words.shift(); 
                }
            }
        });


});

function nextCard(){

    $("#prompt").hide();    
    $("#info").hide();    
    $('#info').text('Try to recall your card. Flip the card when you are ready.');
    $('.flip-container').toggleClass('new');
    if ($('.flip-container').hasClass('flipped')){
        $('.front').text(words[0]);
        words.shift();     
    } else {
        $('.back').text(words[0]);
        words.shift(); 
    }
    $('.flip-container').toggleClass('flipped');
    $('.flip-container').css('transform, rotateY(180deg)');

}

function flipCard(){

    $('.flip-container').toggleClass('flipped');
    $('.flip-container').css('transform, rotateY(180deg)');
    if ($('#prompt').is(":hidden")){
        $('#info').text("Did you get it right?");
        $('#info-container').hide();
        $('#prompt').show();
    }
    

}
