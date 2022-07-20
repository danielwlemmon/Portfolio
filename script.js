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