var lastScrollTop = 0;
document.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.body.scrollTop;
   if (st > lastScrollTop){
    $('nav').addClass('open');
   } else {
    if (st <= 160) {
      $('nav').removeClass('open');
    }
   }
   lastScrollTop = st;
}, false);
