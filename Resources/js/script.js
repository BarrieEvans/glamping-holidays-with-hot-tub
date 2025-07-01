/*eslint-env jquery*/
$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--bodyComtainerWrapper').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px'
    });
    
    
    /* Animations on Scroll */
    
    $('.js--hero-text-box').waypoint(function(direction) {
        $('.js--hero-text-box').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });
    $('.js--contentBox').waypoint(function(direction) {
        $('.js--contentBox').addClass('animated fadeInUpBig');
    }, {
        offset: '60%'
    });
    $('.js--blog-post').waypoint(function(direction) {
        $('.js--blog-post').addClass('animated slideInLeft');
    }, {
        offset: '60%'
    });
    $('.js--other').waypoint(function(direction) {
        $('.js--other').addClass('animated slideInRight');
    }, {
        offset: '60%'
    });

    /* Mobile Nav */
     $('.js--nav-icon').click(function(){
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon ion-icon');
       nav.slideToggle(200);
        
       if(icon.hasClass('hide')){
          icon.toggleClass('hide')
       } 
        
        
    });
    
});














/*var waypoint = new Waypoint({
  element: document.getElementById('px-offset-waypoint'),
  handler: function(direction) {
    notify('I am 20px from the top of the window')
  },
  offset: 20 
})*/