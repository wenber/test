//是否请求出AJAX的"开关"；
var onOff = true;
var offset = 0;
  $(window).scroll(function(){
	//拖动滚条时，是否发送AJAX的一个"开关"
	$(".show_more_ul").each(function(index, element) {
		
		//引用当前的UL
		var ulThis = this;
		//引用最后一个LI
		var lastLi = $("li:last",this);
		//调用是否进入可视区域函数
		var isSee = see(lastLi);
		if(isSee && onOff){
			onOff = false;
			$.ajax({
					  type:"GET",
					  url:"actionlistjson.json",
					  dataType: 'json',
					  data: "limits=8&offset="+offset+"",
					  error:function() { alert("加载失败.....") },
					  success: function(data0){
						  		
						  		//处理json的最外层数据，包含count,list,state,error,其中list是个对象数组，其他事键值对
								//if(count==){}
								
								//处理list对象数组，里面包含最多的8个li的对象具体信息,没处理一个li对象，就会动态生成一个li插入到文档中
								$.each(data0.list,function(key2,value2){
										var imgLi =$("<li><dl><dd><img src='"+value2.url+"' width='150px' height='200px' alt='"+value2.name+"' title='"+value2.name+"'/></dd><dt><span class='title'>["+value2.type+"]</span><span class='show_con'>"+value2.name+"</span></dt></dl><p class='time'>开始时间："+value2.stime+"</p><p class='others'><span class='fr concern'>"+value2.num+"人关注</span><span class='price'>"+value2.rmb+"</span></p></li>");
										$(".show_more_ul").append(imgLi); 
								})//end each2
								onOff = true;
								offset+=limits;
							//	})//end each3
					}// end success
			});// end ajax
		};//end if
	})//end each4	
})//end scrolll
