$(function(){
    //加载头部
	$("#header").load("ygtop.html",function(){
		$(".nav_items").css("display","none")
	});
	//加载脚步页面
//	$("#footer").load("ygfooter.html");
//轮播图-------------------------------------
	$(".banner_move").hover(function(){
		$(".banner_btn").css("display","block")
	},function(){
	$(".banner_btn").css("display","none")
	})
	$(".banner_btn").hover(function(){
		$(this).css("display","block")
	},function(){
		$(this).css("display","none")
	})
	var num=0;
	var timer=null;
	timer=setInterval(move,3000);
	function move(){
		num++;
		if(num>4){
			num=0;
		}
			$(".banner_move div").eq(num).fadeIn().siblings().fadeOut()
			$(".banner_con li").eq(num).addClass("active").siblings().removeClass("active");
		
	}
	//圆点点击---------------
	$(".banner_con li").hover(function(){
		 num=$(this).index();
		$(".banner_move div").eq(num).fadeIn().siblings().fadeOut()
		$(".banner_con li").eq(num).addClass("active").siblings().removeClass("active");
	})
	//清除定时器
	$("#banner img").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(move,3000);
	})
//	左右按钮
     $(".banner_btn_right").click(function(){
     	move();
     })
	  $(".banner_btn_left").click(function(){
	  	num--;
     	if(num<0){
     		num=4;
     	}
     		$(".banner_move div").eq(num).fadeIn().siblings().fadeOut();
     		$(".banner_con li").eq(num).addClass("active").siblings().removeClass("active");
     	
     })
	  //楼层---------------
//	  var num=0;
//	$(window).scroll(function(){
//		if($(window).scrollTop()>650){
//			$(".floor_nav").fadeIn(600)
//		}else{
//			$(".floor_nav").fadeOut(600)
//		}
//})
//	$.each($("#floorWrap"), function(index,ele) {
//		var offt=floorWrap[index].offsetTop-500;
//		if($(window).scrollTop()>offt){
//			$.each($(".floor_nav div p"), function() {
//				$(this).index().show();
//			});
//		}
//	});
	
		//页面滚动中  给对应的按钮加上颜色
		//循环所有楼层  跟页面滚动距离比较	
//		for(var j=0;j<ff.length;j++){
//			var offT=ff[j].offsetTop-250;
//			//当页面滚动距离大于楼层距离--找到当前楼层下标
//			if(otop>offT){
//				for(var k=0;k<btns.length;k++){
//					btns[k].style.background="#ccc";
//				}
//				
//				num=j;
//				//把当前下标按钮的颜色设置数组中的颜色
//				btns[num].style.background=arr[num];
//			}
//			
//		}
//数据加载
$.ajax({
	type:"get",
	url:"js/ygindex.json",
	async:true,
	success:function(res){
		var proarr=res.importedFruits;
		var str="";
		console.log(res)
		$.each(proarr, function(index,ele) {
			str+='<li pid="'+ele.pid+'"><a href="javascript:void(0)"><img src="'+ele.yiguosrc+'"/></a></li>'
		});
		$(".title_main_first").html(str);
		$(".title_main_first li").eq(2).addClass("wide");
		$(".title_main_first li").eq(3).addClass("wide");
		$(".title_main_first li").click(function(){
				
				window.location.href="ygdetail.html?pid="+$(this).attr("pid");
			})
	}
	
})

})















//加载脚步页面
	$("#footer").load("ygfooter.html");