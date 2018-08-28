//回到顶部
$(function(){
	$(".customer").hover(function(){
		$(this).css("background-position","-56px -46px")
	},function(){
		$(this).css("background-position","0px -42px")
	})
	$(".go_top").hover(function(){
		$(this).css("background-position","-56px 0px")
	},function(){
		$(this).css("background-position","0px 0px")
	})
	$(window).scroll(function(){
				if($(window).scrollTop()>500){
					$(".go_top").fadeIn(600)
				}else{
					$(".go_top").fadeOut(600)
				}
			})
				$(".go_top").click(function(){
					$("html,body").animate({scrollTop:0},700);
				})
//页面尾部-------------------------------
    $("dd p a").hover(function(){
    	$(this).css({textDecoration:"underline",color:"green"})
    },function(){
    	$(this).css({textDecoration:"none",color:"black"})
    })
	$(".con").hover(function(){
		$(this).css("color","green")
	},function(){
		$(this).css("color","rgb(113, 113, 113)")
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
