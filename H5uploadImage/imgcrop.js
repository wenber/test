var iosCropper;
iosCropper = (function () {

	var $container
	var $handle
	var $input
	var $mask

	var boxSize = {}
	var pointXY = {}
	var originSize = {}
	var originXY = {x: 0, y: 0}
	var originRatio = 0
	var maskSize = {w: 232, h: 380}
	var maskXY = {}
	var maskRatio = maskSize.w / maskSize.h
	var originScale = 0

	function handleDown(event) {
		event.stopPropagation()
		pointXY = {
			x: event.pageX || event.originalEvent.touches[0].pageX,
			y: event.pageY || event.originalEvent.touches[0].pageY
		}
	}

	function handleUp(event) {
		event.stopPropagation()
		pointXY = {}
	}

	function handleMove(event) {
		event.stopPropagation()
		if (pointXY.x || pointXY.y) {
			var pageX = event.pageX || event.originalEvent.touches[0].pageX
			var pageY = event.pageY || event.originalEvent.touches[0].pageY
			var left = pageX - pointXY.x + originXY.x
			var top = pageY - pointXY.y + originXY.y
			pointXY = {
				x: pageX,
				y: pageY
			}
			setPos(left, top)
		}
	}

	function bindEvents() {
		$handle.on('mousedown touchstart', handleDown)
		$handle.on('mouseup mouseleave touchend', handleUp)
		$handle.on('mousemove touchmove', handleMove)
	}

	function initSize(width, height) {
		boxSize = {
			w: $container.width(),
			h: $container.height()
		}
		maskSize = {
			w: $mask.width(),
			h: $mask.height()
		}
		maskXY = {
			x: (boxSize.w - maskSize.w) / 2,
			y: (boxSize.h - maskSize.h) / 2
		}
		originScale = 0;
		originRatio = width / height
		if (originRatio < maskRatio) {
			width = maskSize.w
			height = width / originRatio
		} else {
			height = maskSize.h
			width = height * originRatio
		}
		originSize.w = width
		originSize.h = height
		$input.css({
			width: originSize.w,
			height: originSize.h
		})
	}

	function setPos(left, top) {
		if (left > maskXY.x) {
			left = maskXY.x
		}
		if ((left + originSize.w) < (maskXY.x + maskSize.w)) {
			left = maskXY.x + maskSize.w - originSize.w
		}
		if (top > maskXY.y) {
			top = maskXY.y
		}
		if ((top + originSize.h) < (maskXY.y + maskSize.h)) {
			top = maskXY.y + maskSize.h - originSize.h
		}
		originXY.x = left
		originXY.y = top
		$input.css({
			left: originXY.x,
			top: originXY.y
		})
	}

	function center() {
		originXY.x = (boxSize.w - originSize.w) / 2;
		originXY.y = (boxSize.h - originSize.h) / 2;
		$input.css({
			left: originXY.x,
			top: originXY.y
		})
	}

	function zoom(scale) {
		if (scale < 0) scale = 0
		if (scale > 100) scale = 100
		var w = (scale - originScale) * 5
		var h = w / originRatio
		originSize.w += w
		originSize.h += h
		$input.css({
			width: originSize.w,
			height: originSize.h
		})
		var left = originXY.x - w / 2
		var top = originXY.y - h / 2
		setPos(left, top)
		originScale = scale
	}

	return {
		init: function () {
			$container = $('.container')
			$handle = $('.draghandle')
			$input = $('.orgin')
			$mask = $('.mask')
			bindEvents()

		},
		loadImg: function (opt) {
			var img = new Image()
			img.onload = function () {
				$input.attr('src', img.src)
				$mask.attr('src', 'http://event.wanmei.com/static/event/zxsj/201511/poster/images/mask.png')
				initSize(img.width, img.height)
				center()
			}
			img.src = opt.image
		},
		getMask: function () {

		},
		getImgData: function (image_target) {

			var crop_canvas = document.createElement('canvas'),
				r = 600 / maskSize.w,
				left = (originXY.x - maskXY.x) * r,
				top = (originXY.y - maskXY.y) * r,
				width = maskSize.w * r,
				height = maskSize.h * r,
				imgwidth = originSize.w * r,
				imgheight = originSize.h * r;

			crop_canvas.width = width;
			crop_canvas.height = height;
			//将后面的图切出来
			crop_canvas.getContext('2d').drawImage(document.getElementById("imgo"), left, top, imgwidth, imgheight);
			$('#orgSrc').val(crop_canvas.toDataURL("image/png"));
			//将img#mask上的图切到之前的图上
			crop_canvas.getContext('2d').drawImage(document.getElementById('mask'), 0, 0, width, height);

			var imgDataURL = crop_canvas.toDataURL("image/png")
			crop_canvas = null
			return imgDataURL

		},
		zoom: zoom
	}

})();

$(function(){
	$('#file').on('change',function(evt) {  
		// 如果浏览器不支持FileReader，则不处理  
		if (!window.FileReader) return;  
		var files = evt.target.files;  
		for (var i = 0, f; f = files[i]; i++) {  
				if (!f.type.match('image.*')) {  
						continue;  
				}  
				var reader = new FileReader();  
				reader.onload = (function() {  
					 function(e) {  
								// img 元素  
								var winH = $(window).height();
								$('.container').css('height',(winH-$('.btns').height())+'px')
								$('#previewImage').css('height',winH+'px').addClass('active');
								//document.getElementById('previewImage').src = e.target.result;  
								Cropper.loadImg({
									image: e.target.result
								})
						};
				})(f);
				reader.readAsDataURL(f);  
		}  
	})
	//剪裁
	var barL = $('.bar').css('left');
	var barW = $('.bar').width();
	$('#crop').on('touchstart',function(e){
			e.stopPropagation();
		}).on('touchmove',function(e){
			e.stopPropagation();
		}).on('touchend',function(e){
			e.stopPropagation();
		}).on('click',function(){
		 var src = Cropper.getImgData()
		 $('#result').attr('src',src).css('display','block');
		 $('.leftGrip').css('left','0px');
		 $('.bar').css({
		 'left':barL,
		 'width':barW
		});
		 $('#previewImage').removeClass('active');
	})
	
	$('.previewImage,.container,.draghandle').on('touchstart',function(e){
		event.preventDefault();
		e.stopPropagation();
	}).on('touchmove',function(e){
		e.stopPropagation();
	}).on('touchend',function(e){
		e.stopPropagation();
	});
	
	//滑块
	$('.nstSlider').nstSlider({
			"left_grip_selector": ".leftGrip",
			"value_bar_selector": ".bar",
			"highlight": {
					"grip_class": "gripHighlighted",
					"panel_selector": ".highlightPanel"
			},
			"value_changed_callback": function(cause, leftValue, rightValue) {
					Cropper.zoom(leftValue);
			}
	});

	nstSliderBtn();
	screened();
	
})
	function nstSliderBtn(){
		var nstWid = parseInt($('.nstSlider').width()-$('.leftGrip').width());
		var nstLen = parseInt(nstWid/10);
		$('.slidL').on('click',function(){ sliderL(); });
		$('.slidL').on('touchend',function(){ sliderL(); });
		$('.slidR').on('click',function(){ sliderR(); });
		$('.slidR').on('touchend',function(){ sliderR(); });
	}

	function sliderL(){
		var l = parseInt($('.leftGrip').css('left'));
		if(l > nstLen){
			$('.leftGrip').css('left',(l-nstLen)+'px');
		}else if(l <= nstLen && l > 0){
			$('.leftGrip').css('left','0px');
		}
		var reL = parseInt($('.leftGrip').css('left'))/nstWid;
		Cropper.zoom(Math.ceil(reL*100));
	}
	function sliderR(){
		var l = parseInt($('.leftGrip').css('left'));
		if(l < (nstWid-nstLen)){
			$('.leftGrip').css('left',(l+nstLen)+'px');
		}else if(l >= (nstWid-nstLen) && l < nstWid){
			$('.leftGrip').css('left',nstWid+'px');
		}
		var reL = parseInt($('.leftGrip').css('left'))/nstWid;
		Cropper.zoom(Math.ceil(reL*100));
	}
	
	/*
	  **筛选
			*颜色
		  *称号
		  *标签
	*/
	function screened(){
	  $('.list_color li').on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});	
		$('.nickName li').on('click',function(){
			var str = $(this).children('div').text();
			$('.input_nick input').val(str);
		});	
		$('.cont_lable').on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.input_Fir input').val($(this).text());
		});	
	}
	
	
	
	