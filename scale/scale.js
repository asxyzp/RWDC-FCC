window.setInterval(function(){
	$(".txt-range").html($(".range").val()+"x");
	$(".txtop").css("transform",`scale(${$(".range").val()})`);
},100);

$(document).ready(function(){
	$(".btn").click(function(){
		$(".txtop").html($(".text").val());
	});
});