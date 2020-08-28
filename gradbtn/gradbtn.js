let count=0;			//Counts number of gradients for animation
let gradientAt = {};	//Stores selected gradient duration and values 

$(document).ready(function(){

	//Changes text (for animation-duration, degree of gradient) when range selector changes
	window.setInterval(function(){
		$(".animation-range-text").html($(".animation-range").val()+"%");
		$(".grad-deg-text").html($(".grad-deg").val()+"deg");
		
		//Setting background color for button when animation duration = 0% 
		if(0 in gradientAt === true)
		{
			//console.log(gradientAt["0"][2],gradientAt["0"][2]+1);
			//If there's a change in colorx & colorx+1 where x is for 0% time duration & gradient direction
			$(`.grad-deg,.color${gradientAt["0"][2]},.color${gradientAt["0"][2]+1}`).on("change",function(){
				console.log($(`.color${gradientAt["0"][2]}`).val(),$(`.color${gradientAt["0"][2]+1	}`).val());
				$(".btn-dark").css("background",`linear-gradient(${$(".grad-deg").val()+"deg"},${$(`.color${gradientAt["0"][2]}`).val()},${$(`.color${gradientAt["0"][2]+1}`).val()})`);
			});
		}
	},100);

	//Adding a new gradient
	$(".add-grad").click(function()
	{

		//Adds a new gradient duration only when it's not already present
		if($(".animation-range").val() in gradientAt===false){
			//For first color
			++count;
			$(".grad-below-this").after(`
				<div class="color-div">
					<strong><span>${count} : </span></strong>&nbsp;
					<input type="color" class=${'color'+count} value="#FFFFFF">
				</div>
			`);

			++count;
			//For second color
			$(".grad-below-this").after(`
				<div class="color-div">
					<strong><span>${count} : </span></strong>&nbsp;
					<input type="color" class=${'color'+count} value="#000000">
				</div>
			`);

			//Text for showing the duration for which the gradient will be generated
			$(".grad-below-this").after(`<strong style="text-align:center;">Gradient duration at ${$(".animation-range").val()+"%"}</strong>`);
			
			/*
				gradientAt will store value in the form
				{
					duration : [color1,color2],
					duration : [color3,color4],
					duration : [color5,color6],
					duration : [color7,color8]
				}
			*/
			gradientAt[$(".animation-range").val()]=[];
			gradientAt[$(".animation-range").val()].push($(`.color${count-1}`).val());
			gradientAt[$(".animation-range").val()].push($(`.color${count}`).val());
			gradientAt[$(".animation-range").val()].push(count-1);
			gradientAt[$(".animation-range").val()].push(count);
			//console.log(gradientAt);
			
			//Assigning color to button's background when animation range's value is 0%
			if($(".animation-range").val()==0){
				$(".btn-dark").css("background",`linear-gradient(${$(".grad-deg").val()+"deg"},${$(`.color${--count}`).val()},${$(`.color${++count}`).val()})`);
			}
		}

		//Button to get animation-time will be shown only when the number of gradients >= 2
		if(count>=4){
			$(".time-div").css("display","block");
		}

		//When the gradient degree value changes
		let gradTime = Object.keys(gradientAt);
		for(let i=0;i<gradTime.length;i++){
			gradTime[i]=Number(gradTime[i]);
		}
		gradTime = gradTime.sort(function(a,b){return a-b;});
		for(let i=0;i<gradTime.length;i++){
			gradTime[i]=String(gradTime[i]);
		}
		console.log(gradTime);
		let gradTimeSec = [];

		function generateLinearGrad(i){
			//console.log($(".grad-deg").val()+"deg", gradientAt[gradTime[i]][0], gradientAt[gradTime[i]][1]);
			return `linear-gradient( ${$(".grad-deg").val()+"deg"} ,${gradientAt[gradTime[i]][0]} ,${gradientAt[gradTime[i]][1]} )`;
			//return `linear-gradient(270deg, red, yellow)`;
		}

		$(".btn-success").click(function(){
			if($(".time").val()!=''){
				$(".demo").hover(
					function(){
						for(let i=0;i<gradTime.length;i++){
							gradTimeSec.push(Math.floor(Number(gradTime[i])/100 * Number($(".time").val())));
						}

						let date = new Date();		//Stores date on hover
						let time = date.getTime();	//Stores UNIX time on hover
						let cDate = new Date();	     //Stores current date which will be updated
						let cTime = cDate.getTime(); //Stores current time which will be updated
						for(let i=0;i<gradTimeSec.length;i++)
						{
							while(cTime<=time+gradTimeSec[i]){
								cDate = new Date();
								cTime = cDate.getTime();
								$(this).css("background",generateLinearGrad(i));
								console.log(`.btn-dark set to ${generateLinearGrad(i)} at time${i}`);
							}
						}
							
					},
					function(){
						$(".btn-dark").css("background",`linear-gradient(${$(".grad-deg").val()+"deg"},${$(`.color${gradientAt["0"][2]}`).val()},${$(`.color${gradientAt["0"][2]+1}`).val()})`);
					}
				);
			}
		});

		//console.log(count);
		//Generating a list of comma delimited class values
		let colorClassArr=[];			//Will store values of all color classes
		for(let i=1;i<=count;i++){
			colorClassArr.push(`.color${i}`);
		}
		let colorClass = colorClassArr.join(',');
	
		setInterval(function(){
			for(let i=0;i<colorClassArr.length;i++){
				$(".grad-deg,"+colorClassArr[i]).on("change",function(){
						for(let j=0;j<gradTime.length;j++)
						{
							if(gradientAt[gradTime[j]][2]==i+1)
							{
								gradientAt[gradTime[j]][0] = $(colorClassArr[i]).val();
								break;
							}
						
							else if(gradientAt[gradTime[j]][3]==i+1)
							{
								gradientAt[gradTime[j]][1] = $(colorClassArr[i]).val();
								break;
							}
						}});
				}},100);			
	});
});