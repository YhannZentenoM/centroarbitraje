$(window).scroll(function(event) {
    // var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();
   
    if(scrollTop >= 100){
      document.getElementById('nav-sticky').style.backgroundColor='#f5f5f5';
      document.getElementById('navbar-brand-sticky').style.height = '58'+'px';
      document.getElementById('nav-top').classList.remove('d-flex');
      document.getElementById('nav-top').classList.add('d-none');
    }
  
   if(scrollTop < 100){
      document.getElementById('nav-sticky').style.backgroundColor='#fff';
      document.getElementById('navbar-brand-sticky').style.height = '68'+'px';
      document.getElementById('nav-top').classList.add('d-flex');
      document.getElementById('nav-top').classList.remove('d-none');
    }
  
});