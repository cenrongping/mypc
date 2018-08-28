		//加载头部
		$("#header").load("ygtop.html",function(){
			$(".catalogs_list").hide();
			$(".catalogs_title").click(function(){
				$(".catalogs_list").toggle();
			})
		})
		//加载尾部
		$("#footer").load("ygfooter.html");
		//详情页的加载------------------
			//获取url中的search	
		function GetQueryString(name) { 
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
			
			var r = window.location.search.substr(1).match(reg); 
			
			if (r!=null) return (r[2]); return null; 
		}
		//获取商品id  同过商品id发送ajax--请求商品详情数据
		
		var pid=GetQueryString("pid");
		
	  $.ajax({
	    	type:"get",
	    	url:"js/ygindex.json",
	  		async:true,
	    	success:function(res){
	    		var proarr=res.details;
	    		console.log(proarr)
	         var str="";
	         
	         $.each(proarr, function(index,ele) {
	         if(ele.pid==pid){
				str+='<div class="content_preview">'
						+'<div class="content_preview_big" pid='+ele.pid+'>'
							+'<img src="'+ele.yiguosrc+'"/>'
						+'</div>'
						+'<div class="content_preview_samll">'
							+'<img src="'+ele.slug[0]+'"/>'
							+'<img src="'+ele.slug[1]+'"/>'
							+'<img src="'+ele.slug[2]+'"/>'
						+'</div>'
					+'</div>'
					+'<div class="product_info">'
						+'<div class="product_info_name">'
							+'<h4>'+ele.name+'</h4>'
							+'<p>'+ele.describe+'</p>'
						+'</div>'
						+'<div class="product_info_summary">'
							+'<div class="summary_price">'
								+'<p>价格：</p>'
								+'<p>￥</p>'
								+'<p>'+ele.price+'</p>'
							   +' <div class="summary_del">'
								   +'<del>'+ele.oldprice+'</del>'
							   +'</div>'
							+'</div>'
							+'<div class="summary_review">'
								+'<p>总体满意度</p>'
								+'<p><b>'+ele.pingf+'</b>分</p>'
								+'<span>(评论数5008)</span>'
							+'</div>'
						+'</div>'
						+'<div class="summary_other">'
							+'<div class="summary_left">'
								+'<div class="summary_discounts">'
									+'<ul>'
										+'<li>'
											+'<span class="discounts_way"><b>'+ele.cu+'</b>'+ele.youhui+'</span>'
										+'</li>'
									+'</ul>'
								+'</div>'
								+'<div class="commodity_size">'
									+'<p>规格：</p>'
									+'<ul class="commodity_price">'
										+'<li class="selected">'
											+'<a href="javascript:void(0)">'
												+'<span>'+ele.smallprice+'</span>'
												+'<span>'+ele.ypbp+'</span>'
												+'<i></i>'
											+'</a>'
										+'</li>'
									+'</ul>'
								+'</div>'
								+'<div class="pro_service">满百包邮,<b>20:00</b>完成订单 预计明日<b>(7月04日)送达</b>'
								+'</div>'
								+'<div class="pro_return">'
								+'<i><img src="yiguo/icon1.png"/></i>不支持7天无理由退货</div>'
								+'<div class="pro_amount">'
									+'<p>数量：</p>'
									+'<div class="pro_btn">'
										+'<button class="pro_plus">+</button>'
										+'<input type="tetx" name="" id="myTexts" value="1" />'
										+'<button class="pro_subtract">-</button>'
									+'</div>'
									+'<div class="addcart">'
								       +' <a href="javascript:void(0)"><i></i>加入购物车 </a></div>'
								+'</div>'
							+'</div>'
					       +' <div class="summary_right">'
					        	+'<table border="0" cellspacing="0" cellpadding="0" class="zx">'
					        		+'<tr>'
					        			+'<th>原产地：</th>'
					        			+'<td>'+ele.ycd+'</td>'
					        		+'</tr>'
					        		+'<tr>'
					        			+'<th>商品编号：</th>'
					        			+'<td>'+ele.spbh+'</td>'
					        		+'</tr>'
					        		+'<tr>'
					        		+'	<th>品牌：</th>'
					        			+'<td>易果</td>'
					        		+'</tr>'
					        	+'	<tr>'
					        			+'<th>发货：</th>'
					        			+'<td>上海</td>'
					        		+'</tr>'
					        	+'</table>'
					       +' </div>'
				       +' </div>'
					+'</div>'
				}
	         });
	              $(".wrap_content").html(str);
	        if($(".discounts_way b").html()!=""){
	           	  $(".discounts_way").show();
	            }else{
	            	$(".discounts_way").hide();
	            }
	            
	            

	            //购物车-------------------
	        var cookie=getCookie("datas");
		    if(cookie==undefined){
		    	//设置cookie
		    	setCookie("datas","[]");
		    	cookie=getCookie("datas");
		    	
		    }
		    var cookiearr=JSON.parse(cookie);
//		    console.log(cookiearr)
	            $(".addcart a").on("click",function(){
		     		//收集要添加的信息
		     		var obj={};
		     		obj.imgsrc=$(".content_preview_big>img").attr("src");
		     		obj.name=$(".product_info_name h4").html();
		     		obj.price=$(".summary_price").children().eq(2).html();
		     		obj.pcount=$("#myTexts").val();//商品数量；
		     		obj.guige=$(".selected").children().children().eq(1).html();
		     		obj.pid=$(".content_preview_big").attr("pid");
		     		console.log(cheackobj(obj.pid))
		     		if(cheackobj(obj.pid)){
//		     		var b=parseInt(obj.pcount)+
						//更新商品数量
//					updateNum(obj.pid,);
				var news=getCookie("datas")
				var arr=JSON.parse(news)
				$.each(arr, function(index,ele) {
					if(ele.pid==pid){
//						console.log(ele.pcount)
			ele.pcount=parseInt(ele.pcount)+parseInt(obj.pcount)
					}
					console.log(arr)
			var cookiestr=JSON.stringify(arr)
				getCookie("datas")
				setCookie("datas",cookiestr)			
})
			
					}else{
		     		
		     		var cookie=getCookie("datas");
		     		cookiearr=JSON.parse(cookie);
//		     		console.log(cookiearr)
		     		//把收集好的信息添加到cookie数组中
		     		cookiearr.push(obj);//[{}]
		     		//把添加好商品的数组转会字符串
		     		var cookiestr=JSON.stringify(cookiearr)
		     		//从新设置cookie
		     		setCookie("datas",cookiestr);
		     	}
			var x=parseInt($(".totleNum b").html())
			var y=Number($("#myTexts").val())
				var z=x+y
				setCookie("shuzi",z);
				$(".totleNum b").html(z)

				var pri=$(".summary_price").children().eq(2).html()*z
				setCookie("jiaqian",pri);
                 $(".totlePrice").html(pri)
					  
         })     
        	 var cookie=getCookie("shuzi")
        	 var cookies=getCookie("jiaqian")
         		$(".totleNum b").html(cookie)
                 $(".totlePrice").html(cookies)
	            $(".pro_plus").on("click",function(){
	            	var xx=Number($("#myTexts").val());
	            	$("#myTexts").val(xx+1)
	            })
	            $(".pro_subtract").on("click",function(){
	            	var xx=Number($("#myTexts").val());
	            	if($("#myTexts").val()<=1){
                    $(".pro_subtract").attr("disabled")
	            	}else{
	            		$("#myTexts").val(xx-1)
	            	}
	            })
	                 
	    }
	})

         setTimeout(function(){
	             	//详情页的内容
			$(".content_preview_samll img").hover(function(){
				$(".content_preview_big img").attr("src",$(this).attr("src"));
			})
        },0);
	    
		
	
		
		
//	            	