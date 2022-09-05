$(window).scroll(function(event) {
    // var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();
   
    if(scrollTop >= 100){
      document.getElementById('nav-sticky').style.backgroundColor='#023a77';
      document.getElementById('navbar-brand-sticky').style.height = '58'+'px';
      document.getElementById('navbar-sticky').classList.remove('my-3');
    }
  
   if(scrollTop < 100){
      document.getElementById('nav-sticky').style.backgroundColor='transparent';
      document.getElementById('navbar-brand-sticky').style.height = '68'+'px';
      document.getElementById('navbar-sticky').classList.add('my-3');
    }
  
});