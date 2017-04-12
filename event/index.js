// eventPhase
var btn = document.getElementById('d1'); //body内的div
var wrap = document.getElementById('wrap'); //body
function handler() {
    alert(event.eventPhase)
};
//单击btn
btn.addEventListener('click', handler, false); //2处于目标对象
wrap.addEventListener('click', handler, false); //3冒泡阶段
wrap.addEventListener('click', handler, true); //1捕获


var EventUtil = {
    getEvent: function(event) {
        return event || window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    preventDefault: function() {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function() {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            // 此时，IE的回调函数handler中this会指向window，通过该方法进行修复
            element["e" + type] = function() {
                handler.call(element)
            }
            element.attachEvent("on" + type, element["e" + type]);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function(element, type, handler) {
        // 记得解除绑定
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, element["e" + type]);
            element["e" + type] = null;
        } else {
            element["on" + type] = null;
        }
    }

};