$(window).scroll(function(event) {
    // var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();
   
    if(scrollTop >= 100){
      document.getElementById('nav-sticky').style.backgroundColor='#f5f5f5';
      document.getElementById('navbar-brand-sticky').style.height = '58'+'px';
      //document.getElementById('nav-top').classList.remove('d-flex');
      //document.getElementById('nav-top').classList.add('d-none');
      //document.getElementById('nav-top').classList.remove('d-flex');
      // document.getElementById('nav-top').style.visibility='hidden';
      // document.getElementById('nav-top').style.height='0';
    }
  
   if(scrollTop < 100){
      document.getElementById('nav-sticky').style.backgroundColor='#fff';
      document.getElementById('navbar-brand-sticky').style.height = '68'+'px';
      //document.getElementById('nav-top').classList.add('d-flex');
      //document.getElementById('nav-top').classList.remove('d-none');
      // document.getElementById('nav-top').style.visibility='visible';
      // document.getElementById('nav-top').style.height='23px';
    }
  
});

$(document).ready(function() {
  $('#slider').lightSlider({
      easing: 'easeOutQuad',
      mode: "fade",
      auto:true,
      loop:true,
      item:1,
      speed:600,
      pause: 5000,
      controls: true,
      prevHtml: '',
      nextHtml: '',
      slideEndAnimation: true,
      pauseOnHover: true,
  });
});