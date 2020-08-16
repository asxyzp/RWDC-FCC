let toff	=	0;				//Top offset for the ball in the relative posn
let loff	=	0;				//Left offset for the ball in the relative posn

$(document).ready(function(){
	$(".tbtn").click(function(){
			toff+=-10;
			console.log(`${toff},${loff}`);
			$(".ball").css("top",toff+"px");
		});
		$(".bbtn").click(function(){
			toff+=10;
			console.log(`${toff},${loff}`);
			$(".ball").css("top",toff+"px");
		});
		$(".lbtn").click(function(){
			loff+=10;
			console.log(`${toff},${loff}`);
			$(".ball").css("left",loff+"px");
		});
		$(".rbtn").click(function(){
			loff-=10;
			console.log(`${toff},${loff}`);
			$(".ball").css("left",loff+"px");
		});
});