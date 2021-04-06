$(document).ready(function (){
    var $header = $('#header');
    var $gnb=$("#gnb > ul");
    
    $('#skip a').on('click', function () {
        var target = $(this).attr('href');
        console.log(target);

        $(target).attr('tabIndex', -1).focus();

        return false;
      });
			
	$gnb.find(">li>ul").hide();	//depth2의 ul 태그는 자동으로 숨기고 시작

	//1)depth1 <a>에 마우스 진입:mouseenter, focus
	$gnb.find("> li > a").on("mouseenter focus",function  () {
		//초기화
		$gnb.find("> li.on").removeClass("on").children("ul").hide();
		//현재설정
		$(this).next().show().parent().addClass("on");
		$header.addClass('active');
	});

	//2)nav에서 마우스 떠나기:mouseleave
	$gnb.on("mouseleave",function  () {
		//초기화
		$gnb.find("> li.on").removeClass("on").children("ul").hide();
		$header.removeClass('active');
	});

	//3)blur: shift탭을 눌러서 gnb에서 포커스가 나가던지, 탭을 눌러 gnb에서 포커스가 나가던지, 
	$("#gnb a:first , #gnb a:last").on("blur",function  () {
		setTimeout(function  () {
			if ( !$("#gnb a").is(":focus") ) {
				$gnb.trigger("mouseleave");
			}
		}, 10);
	});

});