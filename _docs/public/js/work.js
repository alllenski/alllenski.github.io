

$(document).ready(function(){
   
    document.querySelectorAll('.withbox img').forEach(elem => {
        elem.addEventListener('click', function() {
            openLightBox();
            showSlides(this);
        });  
    });

});

function openLightBox() {
    document.getElementById("lightBox").style.display = "block";
    document.getElementById("content-header").style.top = "-96px";
}

function closeLightBox() {
    document.getElementById("lightBox").style.display = "none";
}

var slideIndex = 1;



function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(elem) {
    var image = document.getElementById("lightBox-image");
    var text = document.getElementById("caption");
    image.src = elem.src;
    text.innerHTML = elem.alt;
}