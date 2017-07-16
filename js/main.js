var lastScrollTop = 0;
document.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.body.scrollTop;
   if (st > lastScrollTop){
    $('.bottom-nav').addClass('open');
   } else {
    if (st <= 160) {
      $('.bottom-nav').removeClass('open');
    }
   }
   lastScrollTop = st;
}, false);


$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
});