var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
   
    document.getElementById("content-header").style.top = "-96px";

    prevScrollpos = currentScrollPos;
}
window.onmousemove = function(event) {
    if (event.clientY < window.innerHeight / 10) {
        document.getElementById("content-header").style.top = "8px";
    } else {
        document.getElementById("content-header").style.top = "-96px";
    }
    lastCursorY = event.clientY;
}