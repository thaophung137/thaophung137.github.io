//Typewriter created by Tameem Safi.
//Link: https://safi.me.uk/typewriterjs/

//NAV BAR
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
}

//SCROLL BUTTON
$("#down").click(function() {
  $('html, body').animate({
      scrollTop: $("#aboutme").offset().top
  }, 100);
});


// TYPEWRITER
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Nice To Meet You!")
  .pauseFor(2500)
  .deleteAll()
  .typeString('<span style="color: #AFD3E8;">Im a Software Engineering Student at CSUSM!</span>')
  .pauseFor(2500)
  .deleteAll()
  .typeString("Check Out My Page :)")
  .pauseFor(2500)
  .start();
