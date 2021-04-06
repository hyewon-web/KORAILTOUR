$(document).ready(function () {
    //출발일에 기본값 출력
    var today = new Date();
    $('#startDay').val($.datepicker.formatDate('yy-mm-dd', today));

    var dates = $('#startDay').datepicker({
      dateFormat : 'yy-mm-dd',        //yy:2020, y:20, mm:07, m:7, dd:01, d:1
     
      showMonthAfterYear : true,      //연도를 먼저 월은 다음에 보여지도록 
      yearSuffix : '년',                      //연도 뒤에 텍스트 추가
      
      monthNames : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],  //월에 해당하는 정식명 => 반드시 작성해야함
      monthNamesShort : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],  //월에 해당하는 약칭
      dayNames : ['일','월','화','수','목','금','토'],   //요일에 해당하는 정식명칭
      dayNamesShort : ['일','월','화','수','목','금','토'],   //요일에 해당하는 약식명칭
      dayNamesMin : ['일','월','화','수','목','금','토'],   //요일에 해당하는 최소명칭 => 필수
      
      changeYear : true, //년도를 select 태그로 변경
      changeMonth : true,//월을 select 태그로 변경
      
      minDate : 0,     //최소 선택일 => 0 오늘, 1 내일, -1 어제, 1M+10D 한달 열흘 뒤
      maxDate : '1M+10D', //최대 선택일
      
      showOn : 'focus',     //focus:기본, input 태그에 포커스가 가면 캘린더를 열어라, button:버튼을 클릭하는 경우만, both : focus, 버튼을 클릭해도 열릴수 있도록
      
      showAnim : 'drop',                  //이펙트 효과가 생기면서 보여지기
      showOptions : {direction : 'up'},  //방향전환
      duration : 'fast',                       //애니메이션 경과시간
      
      showOtherMonths : true,         //현재 달의 앞과 뒤 빈 td에 이전달과 다음달을 보이게 처리
    });
});