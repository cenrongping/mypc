//封装一个ajax插件

   function ajax(method,url,data,fn){
   	//1.创建对象
   	try{
   		xhr=new XMLHttpRequest();
   	}catch(e){
   		xhr=new ActiveXObject();
   	}
// 	2.open()方法
      if(method=="get"&&data){
      	url=url+"?"+data;
      }
      xhr.open(method,url,true);
      //3.send()方法
      if(method=="get"){
      	xhr.send()
      }else{
      	//post
      	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");//申请发送的数据类型
      	xhr.send(data)
      }
      //4.接收数据
      xhr.onreadystatechange=function(){
      	if(xhr.readyState==4){
      		if(xhr.status==200){
//    			xhr.responseText
               //数据接收成功后执行传来的函数
               fn(xhr.responseText);
      		}else{
      			alert("错误"+xhr.status);
      		}
      	}
      }
   }
     