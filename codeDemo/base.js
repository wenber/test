var EventUtil={
	addHandler:function(element,type,handler){//bind a event
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=handler;
		}
	},
	removeHandler:function(element,type,handler){//remove a event
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	},
	getEvent:function(event){//get a event
		return event?event:window.event;
	},
	getTarget:function(event){//get a event's target，using in event capture
		var targ;
		if (!event) {event = window.event;}
		if (event.target){targ = event.target;}
		else if (event.srcElement){targ = event.srcElement;}
		if (targ.nodeType == 3){ // defeat Safari bug
   			targ = targ.parentNode;
   		}
   		return targ;
	},
	preventDefault:function(event){//stop defaultevent
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},
	stopPropagation:function(event){//stop bubble
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	},
	getWheelDelta:function(event){
		if(event.wheelDelta){
			return event.wheelDelta;
		}else{
			return -event.detail*40;
		}
	},
	getElementLeft:function(element){
		var eleLeft = element.offsetLeft;
		var parent = element.offsetParent;
		while(parent !== null){
			eleLeft += parent.offsetLeft;
			parent = parent.offsetParent;
		}
		return eleLeft;
	},
	getElementTop:function(element){
		var eleTop = element.offsetTop;
		var parent = element.offsetParent;
		while(parent !== null){
			eleTop += parent.offsetTop;
			parent = parent.offsetParent;
		}
		return eleTop;
	},
	bind:function(fn,con){
		return function(){
			return fn.apply(con,arguments);
		}
	}
};