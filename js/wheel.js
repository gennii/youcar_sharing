$(document).ready(function(){
  var elm = ".box";

  $(elm).each(function(index){
    $(this).on('mousewheel DOMMouseScroll', function(e){
      e.preventDefault();

      var delta = 0;

      if(!event) event = window.event;

      if(event.wheelDelta) {
        delta = event.wheelDelta / 120;
      } else if(event.detail){
        delta = -event.detail / 3;
      }
      var moveTo = $(window).scrollLeft();
      var elmSelector = $(elm).eq(index);

      if(delta < 0) {
        if($(elmSelector).next() != undefined){
          try{
            moveTo = $(elmSelector).next().offset().left;
          } catch(e){}
        }
      } else {
        if($(elmSelector).prev() != undefined){
          try{
            moveTo = $(elmSelector).prev().offset().left;
          } catch(e){}
        }
      }

      $('html, body').stop().animate({
        scrollLeft:moveTo + 'px'
      }, {duration:800, complete:function(){}
      });
    });
  });
})
