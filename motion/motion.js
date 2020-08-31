window.setInterval(function(){
	$(".content-bar").height($(window).height()-$(".top-bar").height()-25);
},100);

$(document).ready(function(){

	//	
	$(".horizontal").click(function(){
		$(".horizontal").prop("disabled",true);
		$(".ball").addClass("hor");
		window.setTimeout(function(){
			$(".horizontal").prop("disabled",false);
			$(".ball").removeClass("hor");
		},5000);
	});
	
	//
	$(".vertical").click(function(){
		$(".vertical").prop("disabled",true);
		$(".ball").addClass("ver");
		window.setTimeout(function(){
			$(".vertical").prop("disabled",false);
			$(".ball").removeClass("ver");
		},5000);
	});
	
	//
	$(".sine").click(function(){
		$(".ball").addClass("sin");
		console.log("Sin class added");
		$(".sine").prop("disabled",true);
		$(".content-bar").css("justify-content","left");
		$(".content-bar").css("padding","10px");
		window.setTimeout(function(){
			$(".ball").removeClass("sin");
			console.log("Sin class removed");
			$(".sine").prop("disabled",false);
			$(".content-bar").css("justify-content","center");
		$(".content-bar").css("padding","0px");
		},5000);
	});
});