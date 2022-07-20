let bg1 = document.getElementById('bg1');
let bg2 = document.getElementById('bg2');
let bg3 = document.getElementById('bg3');
let text = document.getElementById('text');

window.addEventListener('scroll', function () {
  var value = window.scrollY;

  bg1.style.top = value * 1.5 + 'px';
  bg1.style.left = value * 0.5 + 'px';
  bg2.style.left = value * 0.5 + 'px';
  bg3.style.top = value * 0.5 + 'px';
  text.style.top = value * 1 + 'px';

});

$(function() {
  $("a[href*='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);