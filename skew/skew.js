let count=0;

window.setInterval(function(){
	$(".skewx-txt").html($(".skewx").val()+"deg");
	$(".skewy-txt").html($(".skewy").val()+"deg");
	$("div.content").height($(window).height()-$(".top-bar").height()-30);
	if($(".xrad").prop("checked")){
		$(".skewx").prop("disabled",false);
		$(".skewy").prop("disabled",true);
		$(".box").css("transform",`skewX(${$(".skewx").val()}deg)`);	
	}
	if($(".yrad").prop("checked")){
		$(".skewx").prop("disabled",true);
		$(".skewy").prop("disabled",false);
		$(".box").css("transform",`skewY(${$(".skewy").val()}deg)`);
	}
},100);

$(document).ready(function(){
	$(".btn-press").click(function(){
		$(".box").html($(".text").val());
	});
	$(".btn-sq-ci").click(function(){
		++count;
		if(count%2==1){
			$(".btn-sq-ci").html("Circle");
			$(".box").css("border-radius","50%");
		}
		else if(count%2==0){
			$(".btn-sq-ci").html("Square");
			$(".box").css("border-radius","0%");
		}
	});
});