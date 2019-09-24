$(document).ready(function(){
  /*menu*/
  $('.gnb li').hover(function(){
    $(this).find('.lnb').stop().slideDown();
  }, function(){
    $(this).find('.lnb').hide();
  });



  var rangeDate = 31; // set limit day
  var setSdate, setEdate;
  $('#from').datepicker('setDate', 'today');
  $("#from").datepicker({
    changeYear: true,
    changeMonth: true,
    dateFormat: 'yy-mm-dd',
    minDate: 0,
    onSelect: function(selectDate){
      var stxt = selectDate.split("-");
          stxt[1] = stxt[1] - 1;
      var sdate = new Date(stxt[0], stxt[1], stxt[2]);
      var edate = new Date(stxt[0], stxt[1], stxt[2]);
          edate.setDate(sdate.getDate() + rangeDate);

      $('#to').datepicker('option', {
        minDate: selectDate,
        beforeShow : function () {
          $("#to").datepicker( "option", "maxDate", edate );
            setSdate = selectDate;
            console.log(setSdate)
        }});
          //to 설정
      }
      //from 선택되었을 때
  });

  $("#to").datepicker({
      changeYear: true,
      changeMonth: true,
      dateFormat: 'yy-mm-dd',
      onSelect : function(selectDate){
          setEdate = selectDate;
          console.log(setEdate)
      }
  });

  $('.btn').on('click', function(e){
      if($('input#from').val() == ''){
          alert('대여일을 선택해주세요.');
          $('input#from').focus();
          return false;
      }else if($('input#to').val() == ''){
          alert('반납일을 선택해주세요.');
          $('input#to').focus();
          return false;
      }

      alert("성공")
  });




});
