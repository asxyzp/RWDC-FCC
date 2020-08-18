window.setInterval(function(){
	$(".hop").html($(".hue").val());
	$(".sop").html($(".sat").val()+"%");
	$(".lop").html($(".lit").val()+"%");
	$("div.color").height($(window).height()-$(".top-bar").height());
	$("div.color").css("background",`hsl(${$(".hue").val()},${$(".sat").val()}%,${$(".lit").val()}%)`);
},100);
