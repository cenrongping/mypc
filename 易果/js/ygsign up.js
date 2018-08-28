//页面尾部-------------------------------
$(function(){
	

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
	//随机数
	$(".login_main_security").children().eq(3).click(function(){
		var arr=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
		var str="";
	       for(var i=0;i<4;i++){
	       	var  x=Math.floor(Math.random()*arr.length)
	       	   str+=arr[x];
	       }
           $(".security_con").html(str)
       	    	
 })      	    
     
    //表单验证
    //手机号--------
   	    var reg=/^1[3|5|7|8|9]\d{9}$/
   	   $("#phoneText").blur(function(){
   	   	     if(($(this).val()=="")){
   	   	     	$(this).next().show();
   	   	     	$(".login_main_phone").children().eq(3).hide()
   	   	     }else if(!reg.test($(this).val())){
   	   	     	$(".login_main_phone").children().eq(3).show()
   	   	     	$(this).next().hide();
   	   	     }else{
   	   	     	$(this).next().hide();
   	   	     	$(this).next().hide();
   	   	     	$(".login_main_phone").children().eq(3).hide()
   	   	     }
   	   })
   	   //验证码--------------
   	    var reg1=/^\d{6}$/
   	    $("#phontCode").blur(function(){
   	    	if(($(this).val()=="")){
   	    		$(".login_main_code").children().eq(3).show();
   	    		$(".login_main_code").children().eq(4).hide();
   	    		$(".login_main_code").children().eq(6).hide();
   	    	}else if(!reg1.test($(this).val())){
   	    		$(".login_main_code").children().eq(4).show();
   	    		$(".login_main_code").children().eq(6).hide();
   	    	}else{
   	    		$(".login_main_code").children().eq(5).show();
   	    		$(".login_main_code").children().eq(3).hide();
   	    		$(".login_main_code").children().eq(6).hide();
   	    	}
   	    })
   	      $(".get_code").click(function(){
   	      	  if($("#myText").val()!=$(".security_con").val()){
   	      	  	$(".login_main_code").children().eq(6).show();
   	      	  	$(".login_main_code").children().eq(3).hide();
   	      	  	$(".login_main_code").children().eq(4).hide();
   	      	  	$(".login_main_code").children().eq(5).hide();
   	      	  }else{
   	      	  	$(".login_main_code").children().eq(6).hide();
   	      	  }
   	      })
        //密码验证
        var reg2=/^\w{6,20}$/
        $("#setText").blur(function(){
        	if(($(this).val()=="")){
        		$(this).next().show();
        		$(".login_main_set").children().eq(4).hide();
        		$(".login_main_set").children().eq(3).hide();
        	}else if(!reg2.test($(this).val())){
        		$(".login_main_set").children().eq(3).show();
        		$(".login_main_set").children().eq(4).hide();
        		$(this).next().hide();
        	}else{
        		$(".login_main_set").children().eq(4).show();
        		$(".login_main_set").children().eq(3).hide();
        		$(this).next().hide();
        	}
        })
        
        $("#notarizeText").blur(function(){
        	if($(this).val()!=$("#setText").val()){
        		$(this).next().show();
        	}else{
        		$(this).next().hide();
        	}
        })
         
            $("#myCheck").change(function(){
            	
            	if($(this).prop("checked")==false){
            	 $(".login_main_btn").children().css("background","darkslategray")
            	}else{
            	 $(".login_main_btn").children().css("background","green")	
            	}
            })
        $(".login_main_btn").click(function(){
        	if(reg.test($("#phoneText").val())&&reg2.test($("#setText").val())&&$("#setText").val()==$("#setText").val()){
        		setCookie("pass",$("#setText").val(),55);
		 		setCookie("phone",$("#phoneText").val(),55);
		 		window.location.href="ygregister.html"
        	}
        })









})