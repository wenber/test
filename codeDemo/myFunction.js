function getByClass(sClass) {
	var aEle = document.getElementsByTagName('*');
	var i = 0,
		aResult = [];

	for (var i = 0, len = aEle.length; i < len; i++) {
		if (aEle[i].className === sClass) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}
function getStyle(obj, attr) {
	if (obj.currentStyle) {// ie
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}
function setStyle(obj, json) {
	var attr = '';
	for (attr in json) {
		obj.style[attr] = json[attr];
	}
}
// setStyle(oDiv, {width: '200px', background: 'red'});
function setStyle(obj, json) {
	for (var i in json) {
		if (i === 'opacity') {
			obj.style.filter = "alpha(opacity=json[i]*100)";
		}
		obj.style[i] = json[i];
	}
}

// setAttr(oDiv, {id: 'id', name: 'name'});
function setAttr(obj, json) {
	for (var i in json) {
		obj.setAttribute(i, json[i]);
	}
}
function randomArr(iAll, iNow) {
	var arr = [];
	var newArr = [];
	for (var i = 0; i < iAll; i++) {
		arr.push(i);
	}
	for (var i = 0; i < iNow; i++) {
		newArr.push(arr.splice(Math.floor(Math.randm() * arr.length), 1));
	}
	return newArr;
}
//addEvent(window,'scroll',fn)
function addEvent(elm, evType, fn) {
	if (elm.addEventListener) {
		elm.addEventListener(evType, fn, false); //DOM2.0
		return true;
	} else if (elm.attachEvent) {
		var r = elm.attachEvent('on' + evType, fn); //IE5+
		return r;
	} else {
		elm['on' + evType] = fn; //DOM 0
	}
}
function minusEvent(elm, evType, fn) {
	if (document.all) {
		elm.detachEvent("on" + evType, fn);
	} else {
		elm.removeEventListener(evType, fn, false);
	}
}

var iSpeed = 0;
var left = 0;

function elasticMove(obj, iTarget) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		iSpeed -= (obj.offsetLeft - iTarget) / 5;
		iSpeed *= 0.7;
		left += iSpeed; //将速度累加起来
		if (Math.abs(iSpeed) < 1 && Math.abs(left - iTarget) < 1) {
			clearInterval(obj.timer);
			obj.style.left = iTarget + 'px';
		} else {
			obj.style.left = left + 'px';
		}
	}, 30);

}
function parse(url) {
	if (!url || url.indexOf("?") == -1) {
		return null;
	}

	var argUrl = url.split("?")[1];
	if (argUrl.indexOf("=") == -1) {
		return null;
	}

	var pro = argUrl.split('&');
	return pro;
}
function countChar(str) {
	if (str == '') return false;
	var newstr = str.split('').sort();
	var str_num = [];
	var str_char = [];
	var j = 0;
	str_char[0] = newstr[0];
	str_num[0] = 0;
	for (var i = 1; i < newstr.length; i++) {
		if (str_char[j] == newstr[i]) {
			str_num[j]++;
		} else {
			j++;
			str_char[j] = newstr[i];
			str_num[j] = 1;
		}
	}
	for (var k = 0; k < str_char.length; k++) {
		document.write(str_char[k] + ':' + str_num[k] + '<br/>');
	}

}

Array.prototype.remove = function(o) {
	var index = this.indexOf(o);
	if (index !== -1) {
		this.splice(index, 1);
	}
	return this;
}

Array.prototype.removeAll = function(o) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == o) {
			this.splice(i, 1);
			i--;
		}
	}

	return this;
}

Array.prototype.indexOf = function(o) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == o) {
			return i;
		}
	}

	return -1;
}

Array.prototype.indexOfAll = function(o) {
	var aResults = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i] == o) {
			aResults.push(i);
		}
	}
	return aResults;
}



function popCenterTop_Scroll(newDivHeighth) {
	var newDivTop = (document.body.scrollTop + document.body.clientHeight / 2 - newDivHeight / 2) + "px";
	return newDivTop;
}

function popCenterLeft_Scroll(newDivWidth) {
	var newDivLeft = (document.body.scrollLeft + document.body.clientWidth / 2 - newDivWidth / 2) + "px";
	return newDivLeft;
}

function popCenterTop(newDivHeighth) {
	var newDivTop = (document.documentElement.clientHeight / 2 - newDivHeight / 2) + "px";
	return newDivTop;
}

function popCenterLeft(newDivWidth) {
	var newDivLeft = (document.documentElement.clientWidth / 2 - newDivWidth / 2) + "px";
	return newDivLeft;
}




function getClientHeight() {
	var clientHeight = 0;
	if (document.body.clientHeight && document.documentElement.clientHeight) {
		var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
	} else {
		var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
	}
	return clientHeight;
}

/*******************
 ******************/
function getScrollHeight() {
	return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}
/********************
 ******************/
function getScrollTop() {
	var scrollTop = 0;
	if (document.documentElement && document.documentElement.scrollTop) {
		scrollTop = document.documentElement.scrollTop;
	} else if (document.body) {
		scrollTop = document.body.scrollTop;
	}
	return scrollTop;
}


/**
 */
function myScroll() {
	var x = document.body.scrollTop || document.documentElement.scrollTop;
	var timer = setInterval(function() {
		x = x - 100;
		if (x < 100) {
			x = 0;
			window.scrollTo(x, x);
			clearInterval(timer);
		}
		window.scrollTo(0, 0);
	}, "250");
}

/**
 */
function see(objLiLast) {
	var see = document.documentElement.clientHeight;
	var winScroll = $(this).scrollTop();
	//每个UL的最后一个LI，距离浏览器顶部的
	var lastLisee = objLiLast.offset().top
	return lastLisee < (see + winScroll) ? true : false;
} //end see


/**
 *name:简单轮播器,正反双向运动
 *@ul_className:ul的类名
 *@pic_width: 每张图片的宽度
 *@leftId:左按钮
 *@leftId:右按钮
 */
function lunBo(ul_className, pic_width, leftId, rightId) {
	//默认会循环的滚动图片

	var j = 0;
	flag = 1;
	var lengths = $("." + ul_className).first().children('li').length;

	function fn() {
		//正向运动
		if (flag == 1) {
			j++;
			$("." + ul_className).first().animate({
				left: -j * pic_width + "px"
			}, 500);
			if (j == lengths - 1) {
				flag = -1;
			}
		}
		//反向运动
		else {
			j--;
			if (j == 0) {
				flag = 1;
			}
			$("." + ul_className).first().animate({
				left: -j * pic_width + "px"
			}, 500);
		}
	}
	var timer = setInterval(fn, 3000);


	//响应左右方向键的切换
	$("#" + leftId).click(function() {
		clearInterval(timer);
		setTimeout(function() {
			var lefts = -parseInt($("." + ul_className).first().css('left'));
			if (lefts % pic_width != 0) {
				return;
			}
			if (!(lefts == 0)) {
				$("." + ul_className).first().animate({
					left: -(lefts - pic_width) + "px"
				}, 500);
			}
			j = lefts / pic_width;
			if (j == 0) {
				flag = 1;
			} else {
				flag = -1;
			}
		}, 200);
		timer = setInterval(fn, 3000);
	});

	$("#" + rightId).click(function() {
		clearInterval(timer);
		setTimeout(function() {
			var lefts = -parseInt($("." + ul_className).first().css('left'));
			if (lefts % pic_width != 0) {
				return;
			}
			if (!(lefts == (lengths - 1) * pic_width)) {
				$("." + ul_className).first().animate({
					left: -(lefts + pic_width) + "px"
				}, 500);
			}
			j = lefts / pic_width;
			if (j == lengths - 1) {
				flag = -1;
			} else {
				flag = 1;
			}
		}, 200);
		timer = setInterval(fn, 3000);
	});
}

/**
 *
 *图片居中(只有一张图片，不是一个序列)
 */
function pic_center(picClassName, max) {
	$(picClassName).first(function() {
		var height = $(this).height();
		var width = $(this).width();
		if (height > width) {
			$(this).height(max);
			$(this).css('margin-left', (max - width) / 2);
		} else {
			$(this).width(max);
			$(this).css('margin-top', (max - height) / 2);
		}
	});
}

/**
 *自定义运动框架
 *
 */

function startMove(obj, json, fnEnd) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var bStop = true;

		for (var name in json) {
			var iTarget = json[name];

			if (name == 'opacity') {
				var cur = Math.round(parseFloat(getStyle(obj, name)) * 100);
			} else {
				var cur = parseInt(getStyle(obj, name));
			}

			var speed = (iTarget - cur) / 3;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if (name == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
				obj.style.opacity = (cur + speed) / 100;
			} else {
				obj.style[name] = cur + speed + 'px';
			}

			if (cur != iTarget) {
				bStop = false;
			}
		}

		if (bStop) {
			clearInterval(obj.timer);

			if (fnEnd) {
				fnEnd();
			}
		}
	}, 20);
}

/**a标签的链接中在严格模式下
 *target="_blank"用rel="external"
 *
 */
function externallinks() {
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i = 0; i < anchors.length; i++) {
		var anchor = anchors[i];
		if (anchor.getAttribute("href") &&
			anchor.getAttribute("rel") == "external")
			anchor.target = "_blank";
	}
}
window.onload = externallinks;