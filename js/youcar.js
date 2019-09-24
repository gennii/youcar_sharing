$(document).ready(function(){
  /*menu*/
  $('.gnb li').hover(function(){
    $(this).find('.lnb').stop().slideDown();
  }, function(){
    $(this).find('.lnb').hide();
  });

  // wheel
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

  /*tab menu*/

  var $tabAnchor = $('ul.tab li'),
      $tabPanel = $('.tab_content');

  $tabAnchor.click(function(e){
    e.preventDefault();
    $tabAnchor.removeClass('on');
    $(this).addClass('on');

    $tabPanel.hide();
    var $target = '#'+ $(this).attr('data-tab');
    $($target).show();
  });

// 1p. 이미지 바꾸기
$('.one img').hover(function(){
  $(this).attr({src: "images/play2.png"});
},function(){
  $(this).attr({src: "images/play.png"});
})
$('.two img').hover(function(){
  $(this).attr({src: "images/apple2.png"});
},function(){
  $(this).attr({src: "images/apple.png"});
})


/*위치찾기 팝업*/
$('.click_t').click(function(){
  $('.search_box').fadeIn();
});
$('.close').click(function(){
  $('.search_box').fadeOut();
});













});
