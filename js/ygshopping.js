$(function(){
var cookiearr=getAll()
console.log($(".cart_footer"))
if(cookiearr.length==0){
	$(".cart_header").hide()
	$(".cart_footer").hide()
}else{
	$(".cart_header").show()
	$(".cart_footer").show()
}

var  str="";
$.each(cookiearr, function(index,ele) {
   str+=
        '<tbody pid="'+ele.pid+'">'
		+'<tr>'
		+'<td class="cart_check"><input type="checkbox"id="myChecks"/></td>'
		+'<td class="cart_img">'
		+'<a href="javascript:void(0)"><img src="'+ele.imgsrc+'"/></a>'
		+'</td>'
		+'<td class="cart_info"><a href="javascript:void(0)">'+ele.name+'</a></td>'
		+'<td class="cart_ub"></td>'
		+'<td class="cart_price">'+Number(ele.price)+'</td>'
		+'<td class="cart_num"><a href="javascript:void(0)">'
		+'<button class="decrement">-</button>'
	    +'<input type="text" name="" id="itext" value="'+ele.pcount+'" />'
		+'<button class="increment">+</button></a></td>'
		+'<td class="cart_total">￥<span>'+Number(ele.price)*Number(ele.pcount)+'</span></td>'
		+'<td class="cart_spec">'+ele.guige+'</td>'
		+'<td class="cart_opera"><a href="javascript:void(0)">移入收藏</a><br/>'
		+'<a href="javascript:void(0)">删除</a></td>'
		+'</tr>'
		+'</tbody>'
		
});
 
	//加-------------------
        $(".cart_list .cart_table").html(str);
        $.each($(".increment"), function(index,ele){
        	console.log(ele)
        	console.log(index)
         $(".increment").on("click","isindex",function(){
         	alert(1)
          var inp=$(this).prev();
           inp.val(Number(inp.val())+1)
           var tr=$(this).parents("tbody");
           var pid=tr.prop("pid");
           var price=Number($(".cart_list .cart_price").html())
          $(".cart_total").children().html(Number(inp.val()*price))
//        Math.round($(".cart_total").children().html())
//         $(".cart_total").children().html()=parseFloat(  $(".cart_total").children().html().toFixed(2))
//          console.log(x.attr(checked))
//           console.log($(".total_prices p").html())
           var x=$(".cart_list .cart_check").children()
           	console.log(x.prop("checked"))
           if(x.prop("checked")){
           	$(".total_prices p").html($(".cart_total").children().html())
         
           }
        })
     });
         $(".decrement").on("click",function(){
         	var inp=$(this).next();
           inp.val(Number(inp.val())-1)
           var tr=$(this).parents("tbody");
           var pid=tr.attr("pid");
           if(inp.val()<1){
             inp.val(1)
           }
           var price=Number($(".cart_list .cart_price").html())
          $(".cart_total").children().html(Number(inp.val()*price))
           var x=$(".cart_list .cart_check").children()
           if(x.prop("checked")){
           	$(".total_prices p").html($(".cart_total").children().html())
         
           }
         })
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
})
