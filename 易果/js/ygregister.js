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
    $(".login").click(function(){
    	var phoneval=$("#phone").val()
    	var passval=$("#pass").val()
//  	console.log(phoneval,passval)
    	var cookiepuser=getCookie("phone");
//  	console.log(getCookie("phone"))
  	var cookirpass=getCookie("pass");
//	console.log($("#phontCode").val())
//	console.log($(".security_con").html())
  	if(phoneval!=cookiepuser){
  		alert("用户名不存在");
   	}else if(passval!=cookirpass){
  		alert("密码错误");
    }else if($("#phontCode").val()!=$(".security_con").html()){
    	
        alert("验证码错误")
    }else{
    	window.location.href="ygindex.html"
    }
        	
       
  	
    })
//  $("button").click(function(){
//				var userval=$("#user").val();
//				var passval=$("#pass").val();
//				var cookieuser=getCookie("username");
//				var cookiepass=getCookie("pass");
//				if(userval!=cookieuser){
//					alert("用户名不存在")
//				}else if(passval!=cookiepass){
//					alert("密码错误")
//				}else{
//					alert("登录成功");
//					window.location.href="轮播图.html";
//				}
})