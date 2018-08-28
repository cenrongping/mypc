//我的易果------------
$(function(){
	$(".fr>li").hover(function(){
		$(this).children(".cons").css({display:"block"});
		$(this).children(".tit").css({borderLeftColor:"green",borderRightColor:"green"});
	    $(this).find("p").css({backgroundPosition:"-13px 0px"});
	},function(){
		$(this).children(".cons").css({display:"none"});
		$(this).children(".tit").css({borderLeftColor:"white",borderRightColor:"white"});
		$(this).find("p").css({backgroundPosition:"0px 0px"});
	})
//头部吸顶--------------------	
	$(window).scroll(function(){
		if($(window).scrollTop()>=45){
			$(".header_clearfix").addClass("fixedul");
		}else{
			$(".header_clearfix").removeClass("fixedul");
		}
	})
//购物车
	var flag=true;
    	$(".shopping_cart").mouseenter(function(){
    		$(".shopping_btn").css("borderBottom","none")
    		$(".shopping_list").stop(true,true).show();
    	})
    	$(".shopping_cart").mouseleave(function(){
    		$(".shopping_btn").css("borderBottom","1px solid rgb(0, 136, 66)")
    		$(".nogoods").mouseenter(function(){
    			flag=false;
    		})
    		$(".nogoods").mouseleave(function(){
    			flag=true;
    		})
    		if(flag){
    			$(".shopping_list").stop(true,true).hide(1000);
    		}
    		
    	})
    	//商品分类--------------------------------------
    	$(".item").hover(function(){
			$(this).children(".sub_item").show()
			$(this).children(":eq(0)").addClass("getborder")
    	},function(){
    		$(this).children(".sub_item").hide()
    		$(this).children(":eq(0)").removeClass("getborder")
    	})
	    
 	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
