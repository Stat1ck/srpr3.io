$(document).ready(function(){
	let one = 1;
	let two = 1;
	let three = 1;
	let four = 1;
	let five = 1;
	let six = 1;
	let seven = 1;
	$(".modal").siblings().css({
			opacity:'0.3'
		});
		$("body").css({
			backgroundColor:'rgba(115, 192, 131, 0.3)'
		});
		$(".modal").css({
			display:'flex'
		});
	$(".modal").click(function(){
		$(".modal").css({
			display:'none'
		});
		$(".modal").siblings().css({
			opacity:'1'
		});
		$("body").css({
			backgroundColor:'rgba(115, 192, 131, 1)'
		});
		$(".dialog1").siblings().css({
			opacity:'0.3'
		});
		$("body").css({
			backgroundColor:'rgba(115, 192, 131, 0.3)'
		});
		$(".dialog1").css({
			display:'flex'
		});
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		$(".button2").click(function(){
			$(".dialog1").css({
				display:'none'
			});
			$(".dialog1").siblings().css({
				opacity:'1'
			});
			$("body").css({
				backgroundColor:'rgba(115, 192, 131, 1)'
			});
			$("body").mousemove(function(){
				$(".obl1").animate({
					left:'70%'
				}, 10000);
				$(".obl1").animate({
					left:'0%'
				}, 10000);
				$(".obl2").animate({
					left:'0%'
				}, 10000);
				$(".obl2").animate({
					left:'70%'
				}, 10000);
			});
			$("body").on('mousewheel', function(){
				let e = $(".car");
				let offs = e.offset();
				let y = offs.top;
				console.log(y);
				if((y>=2796) && (one<=1)){
					$("body").css({
						backgroundColor:'rgba(115, 192, 131, 1)'
					});
					$(".dialog2").siblings().css({
						opacity:'0.3'
					});
					$("body").css({
						backgroundColor:'rgba(115, 192, 131, 0.3)'
					});
					$(".dialog2").css({
						display:'flex'
					});
					$(".button3").click(function(){
						$(".dialog2").css({
							display:'none'
						});
						$(".dialog2").siblings().css({
							opacity:'1'
						});
						$("body").css({
							backgroundColor:'rgba(115, 192, 131, 1)'
						});
						$(".samolet").css({
							left:'0%'
						});
						$(".samolet").css({
							display: 'flex',
						});
						$(".samolet").animate({
							left:'120%'
						}, 10000);
					});
					one+=1;
				}else{}
				if((y>=3396) && (two<=1)){
					$("body").css({
						backgroundColor:'rgba(115, 192, 131, 1)'
					});
					$(".dialog3").siblings().css({
						opacity:'0.3'
					});
					$("body").css({
						backgroundColor:'rgba(115, 192, 131, 0.3)'
					});
					$(".dialog3").css({
						display:'flex'
					});
					$(".button4").click(function(){
						$(".dialog3").css({
							display:'none'
						});
						$(".dialog3").siblings().css({
							opacity:'1'
						});
						$("body").css({
							backgroundColor:'rgba(115, 192, 131, 1)'
						});
					});
					two+=1;
				}else{}
				if((y>=3596) && (seven<=1)){
					$(".ptica").css({
						display:'flex'
					});
					$(".ptica").animate({
						left:'120%',
						top:'+=30%'
					}, 10000);
					seven+=1;
				}else{}
				if(y>=4335){
					$(".ptica").css({
						display:'flex'
					});
					$(".ptica").animate({
						left:'120%'
					}, 10000);
					$("body").css({
						backgroundColor:'rgba(115, 192, 131, 1)'
					});
					$(".dialog4").siblings().css({
						opacity:'0.5'
					});
					$("body").css({
						backgroundColor:'rgba(115, 192, 131, 0.3)'
					});
					$(".dialog4").css({
						display:'flex'
					});
					$(".button5").click(function(){
						location.reload();
					});
				}else{}
				if((y>=677) && (three<=1)){
					$(".car1").animate({
						top:'46%'
					}, 12000);
					$(".car1").slideUp(); 
					three+=1;
				}else{}
				if((y>=1277) && (four<=1)){
					$(".car2").animate({
						top:'46%'
					}, 15000);
					$(".car2").slideUp(); 
					four+=1;
				}else{}
				if((y>=1577) && (five<=1)){
					$(".car3").animate({
						top:'46%'
					}, 20000);
					$(".car3").slideUp(); 
					five+=1;
				}else{}
				if((y>=1777) && (six<=1)){
					$(".car4").animate({
						top:'46%'
					}, 23000);
					$(".car4").slideUp(); 
					six+=1;
				}else{}
			});
		});
	});
});