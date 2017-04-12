// - 自适应两列三列布局

// - 请谈一下HTML和XHTML的区别。
xhtml中  defer="defer" async="async"
标签名小写
标签闭合
正确嵌套
小于符号带空格：被当做新标签的开始，用//<![[CDATA] function () {.........}//]>

defer:立即下载，延迟执行，两个async能保证执行顺序
async: 立即下载，两个async不能保证执行顺序

// - CSS属性选择器
[abc*="def"]    选择 abc 属性值中包含子串 "def" 的所有元素
[abc|="def"]    选择 abc 属性值等于def或以def-开头的所有元素
[abc~="def"]    选择 abc 属性值以空格隔开，其中一个属性值为def的元素

// Math.random() ---> in the range [0, 1)

// - 请举例说明你所解决的你认为比较复杂的一个技术难题的过程
cookie丢失   base64读取，样式合并

// 字符转译
function escapeHtml(str) {
    return str.replace(/[<>”&]/g, function(match) {
        switch (match) {
            case“ <”:
                return“ &lt;”;
            case“ >”:
                return“ &gt;”;
            case“ &”:
                return“ &amp;”;
            case“\”” :
            return“ &quot;”;
        }
    });
}

// 移动前端可优化性能点
加载性能
渲染速度
交互响应速度
动画流畅性
DOM操作无闪动
PageSpeed Insights可以获得网站待优化的点
webpagetest请求网络图
psi npm 端
grunt-yslow
grunt-perfbudget


// reduce
callbackfn
必需。一个接受最多四个参数的函数。(prev, next, index, selfArr)对于数组中的每个元素，reduce 方法都会调用 callbackfn 函数一次。
initialValue
可选。如果指定 initialValue，则它将用作初始值来启动累积。第一次调用 callbackfn 函数会将此值作为参数而非数组值提供。

// 一行代码学习js
[].forEach.call($$("*"), function(a) {
    a.style.outline = "1px solid #" + (parsetInt(Math.random() * (1 << 24))).toString(16)
})

// js中的进制转换
parsetInt   toStirng

// 两次按位取反是一个替代parseInt的便捷方法：
var a = 12.34, // ~~a = 12
b = -1231.8754, // ~~b = -1231
c = 3213.000001; // ~~c = 3213

// - 让一个浮动元素居中
.wrap{
    float:left;
    position:relative;
    left:50%;
    // 距离左边50%，不设置宽度，由内部元素宽度撑开的
}
.box{
    float: left;
    position: relative;
    right: 50%;
    width: 300px; // 定宽不定宽都可以
}
<div class="wrap">
    <div class="box">我是浮动的sd也是居也是居也是居也是居也是居也是居也是居也是居fdsaf</div>
</div>

// - display:inline-block的特点，兼容性以及怎么处理
IE6、IE7不识别inline-block但可以触发块元素。其它主流浏览器均支持inline-block。
解决IE6、IE7兼容性的方法：
display:inline-block;
*display:inline
*zoom:1;

// css继承属性
文本相关属性： font-*, letter-spacing,line-height,text-align, text-indent, texttransform,
word-spacing
列表相关属性：list-*
还有一个属性比较重要，color属性。 

// 以下事件不冒泡
blur、focus、load、unload

// - BFC怎么触发及其特性
触发：(根元素  float属性不为none  position为absolute或fixed 
 display为inline-block, table-cell, table-caption, flex, inline-flex  overflow不为visible)
特性：
- 内部的Box会在垂直方向，一个接一个地放置。Box垂直方向的距离由margin决定。
  属于同一个BFC的两个相邻Box的margin会发生重叠。
- 与包含块border box的边相接触
- BFC的区域不会与float box重叠。
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
- 计算BFC的高度时，浮动元素也参与计算

// - css3 的一些动画属性 (@keyframes)
animation: name duration timing-function delay iteration-count direction;

// - 左右垂直居中
position:fixed; margin: auto; left:0; right:0; top:0; bottom:0;

// - reactJS（注意生命周期）
Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM

React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。
componentWillMount()
componentDidMount()
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
componentWillUnmount()

React 还提供两种特殊状态的处理函数。
componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性
this.refs[name]: 获取真实的DOM节点

组件的style属性的设置方式也值得注意，不能写成style="opacity:{this.state.opacity}"
而要写成style={{opacity: this.state.opacity}}
这是因为 React 组件样式是一个对象，所以第一重大括号表示这是 JavaScript 语法，第二重大括号表示样式对象。

表单注意：用户在表单填入的内容，属于用户跟组件的互动，不能用 this.props.value 读取，
而要定义一个 onChange 事件的回调函数，通过 event.target.value 读取用户输入的值

this.props.children 属性。它表示组件的所有子节点
this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array 。所以，处理 this.props.children 的时候要小心。
React 提供一个工具方法 React.Children 来处理 this.props.children 。我们可以用 React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object


// - 图片的加载
先监听，后赋值

// - 如何优化和提高性能
第一条是上一节说到的，DOM 的多个读操作（或多个写操作），应该放在一起。不要两个读操作之间，加入一个写操作。
第二条，如果某个样式是通过重排得到的，那么最好缓存结果。避免下一次用到的时候，浏览器又要重排。
第三条，不要一条条地改变样式，而要通过改变class，或者csstext属性，一次性地改变样式。
第四条，尽量使用离线DOM，而不是真实的网面DOM，来改变元素样式。比如，操作Document Fragment对象，完成后再把这个对象加入DOM。再比如，使用 cloneNode() 方法，在克隆的节点上进行操作，然后再用克隆的节点替换原始节点。
第五条，先将元素设为 display: none （需要1次重排和重绘），然后对这个节点进行100次操作，最后再恢复显示（需要1次重排和重绘）。这样一来，你就用两次重新渲染，取代了可能高达100次的重新渲染。
第六条，position属性为absolute或fixed的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响。
第七条，只在必要的时候，才将元素的display属性为可见，因为不可见的元素不影响重排和重绘。另外，visibility : hidden 的元素只对重排有影响，不影响重绘。
第八条，使用虚拟DOM的脚本库，比如React等。
第九条，使用window.requestAnimationFrame()、window.requestIdleCallback()这两个方法调节重新渲染

//  requestAnimationFrame
我们可以使用window.requestAnimationFrame()，让读操作和写操作分离，把所有的写操作放到下一次重新渲染。
function doubleHeight(element) {
  var currentHeight = element.clientHeight;
  window.requestAnimationFrame(function () {
    element.style.height = (currentHeight * 2) + 'px';
  });
}
elements.forEach(doubleHeight);
页面滚动事件（scroll）的监听函数，就很适合用 window.requestAnimationFrame() ，推迟到下一次重新渲染。
$(window).on('scroll', function() {
  window.requestAnimationFrame(scrollHandler);
});

// - 写一个once函数，function fn () {console.log(‘test’)}; var b = once(fn);b();//执行fn;b();做其他操作

// 数组去重
var temp= myArray.filter(
    function(elem, pos,self) {
        return self.indexOf(elem)== pos;
    })
字符串去重可以采用正则，也可以采用传统的标记去重

// 采用js做算法时，注意事项？
这是在使用JavaScript进行编程，因此你不能信任传入的参数类型。因此，你永远都要检查函数的输入

// 查找两个节点的最近的一个共同父节点，可以包括节点自身
function commonParentNode(oNode1, oNode2){
    if (oNode1.contains(oNode2))
        {
            return oNode1;
        }
    else if (oNode2.contains(oNode1))
        {
            return oNode2;
        }
    else{
        return arguments.callee(oNode1.parentNode,oNode2);
    }
}

// 判断素数
function isPrime(number) {
   if (typeof number !== 'number' || !Number.isInteger(number)) {
      return false;
   }
 
   if (number < 2) {
      return false;
   }
    
   if (number === 2) {
      return true;
   } else if (number % 2 === 0) {
      return false;
   }
 
   var squareRoot = Math.sqrt(number);
   for(var i = 3; i <= squareRoot; i += 2) {
      if (number % i === 0) {
         return false;
      }
   }
 
   return true;
}

// 斐波那契数列
function fibonacci(n){
    if(n==1||n==2)
        return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}
// sort原理
var arr = [11,2,28,5,8,4]
arr.sort(function(a,b){return a-b}) a-b：从小到大   b-a:从大到小


// 想实现一个对页面某个节点的拖曳？如何做？（使用原生JS）
给需要拖拽的节点绑定mousedown, mousemove, mouseup事件
mousedown事件触发后，开始拖拽™
mousemove时，需要通过event.clientX和clientY获取拖拽位置，并实时更新位置
mouseup时，拖拽结束
需要注意浏览器边界的情况



// 编写一个JavaScript函数，输入指定类型的选择器(仅需支持id，class，tagName三种简单CSS选择器，无需兼容组合选择器)可以返回匹配的DOM节点，需考虑浏览器兼容性和性能。
var query = function(selector) {
    var reg = /^(#)?(\.)?(\w+)$/img;
    var regResult = reg.exec(selector);
    var result = [];
    //如果是id选择器
    if (regResult[1]) {
        if (regResult[3]) {
            if (typeof document.querySelector === "function") {
                result.push(document.querySelector(regResult[3]));
            } else {
                result.push(document.getElementById(regResult[3]));
            }
        }
    }
    //如果是class选择器
    else if (regResult[2]) {
        if (regResult[3]) {
            if (typeof document.getElementsByClassName === 'function') {
                var doms = document.getElementsByClassName(regResult[3]);
                if (doms) {
                    result = converToArray(doms);
                }
            }
            //如果不支持getElementsByClassName函数
            else {
                var allDoms = document.getElementsByTagName("*");
                for (var i = 0, len = allDoms.length; i < len; i++) {
                    if (allDoms[i].className.search(new RegExp(regResult[2])) > -1) {
                        result.push(allDoms[i]);
                    }
                }
            }
        }
    }
    //如果是标签选择器
    else if (regResult[3]) {
        var doms = document.getElementsByTagName(regResult[3].toLowerCase());
        if (doms) {
            result = converToArray(doms);
        }
    }
    return result;
}

function converToArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0); //针对非IE浏览器         
    } catch (ex) {
        array = new Array();
        for (var i = 0, len = nodes.length; i < len; i++) {
            array.push(nodes[i])
        }
    }
    return array;
}
// 伪数组
典型的是函数的argument参数，还有像调用getElementsByTagName,document.childNodes之类的,它们都返回NodeList对象都属于伪数组

// - onResize怎么处理窗口抖动（函数节流）
var throttle = function (fn, interval) {
    var firstTime = true;
    var timer = null;

    return function () {
        var me = this;
        // 第一次执行
        if (firstTime) {
            fn.apply(me, arguments);
            firstTime = false;
            return;
        }
        if (timer) {
            return;
        }
        timer = setTimeout(function () {
            clearTimeout(timer);
            fn.apply(me, arguments);
        }, interval || 500);
    }
}
// - xss和crfs原理

// 你移动端前端开发的理解？（和 Web 前端开发的主要区别是什么？）
（1）PC考虑的是浏览器兼容性，移动端开发考虑的更多的是手机兼容性，因为目前不管是android手机还是ios手机，一般浏览器用的都是webkit内核，所以做移动端开发，更多考虑的应该是手机分辨率的适配，和不同操作系统的略微差异化；
（2）在部分事件的处理上，移动端自然是偏向于触屏的，所以触屏事件的一些规律要多摸索一下，另外包括移动端弹出的手机键盘该如何处理，这样的问题在PC上肯定不会遇到，但在移动端，如果你没有经验，处理起来是相当麻烦的；
（3）在布局上，移动端开发一般是要做到布局自适应的，在这里我推荐用rem的解决方案，具体实现可以百度一下，相对比较简单，处理起来也比较灵活；
（4）在动画处理上，PC端由于要考虑到IE的兼容性，通常用JS做动画的通用性会好一些，但相比CSS3却牺牲了较大的性能，而在手机端，如果要做一些动画、特效等，第一选择肯定是CSS3，既简单，效率又高。

// 职位认识
前端是最贴近用户的程序员，比后端、数据库、产品经理、运营、安全都近。
1、实现界面交互
2、提升用户体验
3、有了Node.js，前端可以实现服务端的一些事情
前端是最贴近用户的程序员，前端的能力就是能让产品从 90分进化到 100 分


// - 随意整数数组如[1,30,9],找出数组中组合最大的数字，比如9301
function getMax(Arr, left, right) {
    if (left > right) {
        return;
    }
    if (left === right) {
        return Arr[left];
    }
    else if (left + 1 === right) {
        return Arr[left] > Arr[right] ? Arr[left] : Arr[right];
    }
    else {
        var minddle = parseInt((left + right) / 2);
        return getMax(Arr, left, minddle) > getMax(Arr, minddle, right) ? getMax(Arr, left, minddle) : getMax(Arr, minddle, right); 
    }
} 

// 按层遍历二叉树
function print_by_level_1(T) {
    int i = 0;
    for (i = 0; true; i++) {
        if (!print_at_level(T, i))
            break;
    }
}

function print_at_level(T, level) {
    if (!T || level < 0)
        return 0;
    if (0 == level) {
        console.log(T.data);
        return 1;
    }
    return print_at_level(T.lchild, level - 1) + print_at_level(T.rchild, level - 1);
}


// - 正则表达式去掉前后空格
replace(/^s+|s+$/g,'');

// - ctrl+f5 和 f5的区别
f5: ETag/Last-Modified 还有效

// - http header
req: Accept-*
res: Content-*

// - commonJS，and， cmd的区别
1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。
2. CMD 推崇依赖就近，AMD 推崇依赖前置。
3. AMD 的 API 默认是一个当多个用，CMD 的 API 严格区分，推崇职责单一。

// - html5一些新的api

// - css的优雅降级，渐进增强
　　渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，
    然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。
　　优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。
// Q X移动端PC端，怎么适配两者之间的宽度适配
// - doctype的作用是什么
IE5引入（混杂、 准标准（过度、框架）   标准（严格））

// 垃圾回收
标记清除、引用计数、分代回收（新生代[scavenge.cheney 交换from to]、老生代[markup-sweep markup-contact]）

// 内存泄漏
1，innerHTML被替换，内部元素未解绑事件
2，全局环境不释放对象引用持有（局部环境不存在这样的问题）

// - 怎么尽快的加载页面
图片压缩服务器、多域名、图片合并、延迟加载、CDN、缓存、压缩代码体积、

// 应对reflow策略
减少+平滑过渡

// cookie的安全性
把cookie设置为secure，只保证 cookie 与服务器之间的数据传输过程加密，
而保存在本地的 cookie文件并不加密。如果想让本地cookie也加密，得自己加密数据。

// 设计原则
单一职责原则（一个类只有一个可以引起它变化的原因）
开闭原则（对扩展开放，对修改关闭）
里氏替换原则（子类必须能够替换掉他们的父类）
依赖倒置原则（高层模块不应该依赖于底层模块，二者都应该依赖于抽象。抽象不应该依赖于细节，抽象应该依赖于抽象）
接口隔离原则（不应该依赖于不用的方法）

// - var a = new A(); a 与 A()是怎么联系起来的
四步走

// - 页面很多组件，之间有关系，怎么去处理这些关系
(依赖、嵌套、分组、通信)

// 浏览器渲染引擎
IE: Trident   OPERA:Presto    chrome safria: khtml(webkit是khtml的衍生品)   firefox: Gecko

// js脚本处理引擎
chrome: v8   firefox: spiderMonkey   IE:Chakra

// 拖拽代码
var drag_=false
function Move_obj(obj){
    var x,y;
    document.querySelector(obj).onmousedown = function (e) {
        var event = (e || window.event);
        var target = event.target || event.srcElement;

        drag_=true;
        target.style.position = "absolute";
        var temp1 = target.offsetLeft;
        var temp2 = target.offsetTop;
        x = event.clientX;
        y = event.clientY;

        document.onmousemove = function (e) {
            if(!drag_) {
                return false;
            }
            var event = (e || window.event);
            var target = event.target || event.srcElement;
            target.style.left = temp1 + event.clientX - x + "px"; // 核心：运动时的event.clientX - 初始时的event.clientX 
            target.style.top = temp2 + event.clientY - y + "px";
        }
        document.onmouseup = function () {
            drag_ = false;
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}

// jQuery.fn.init 中都做了哪些判断

// DOM操作 - 怎样添加、移除、移动、复制、创建和查找节点
appendChild(node)   insertBefore(newNode, posNode || null)
replaceChild(newNode, posNode)   removeChild(node)
createDocumentFragment   createElement  createTextNode

// DOM内部关系
firstChild   lastChild  previousSibling  nextSibling parentNode   childNodes

// - 正则表达式 去字符串中相邻重复字符
a.replace(/(\w)\1+/g, function ($0, $1) { return $1})

// 每三位数插入逗号   (?=)：前向声明  (?!):反前向声明  正则的子项匹配是深度优先
a.replace(/(?!\b)(?=(\d{3})+$)/g, ',');可以解决正负数，但不能解决小数点问题

// 二叉树
满二叉树：最完美的二叉树
完全二叉树：左侧优先排列，但还没达到满二叉树
平衡二叉树：左右两个子树的高度差的绝对值不超过1，
满二叉树 > 完全二叉树 > 平衡二叉树


// box-shadow:
x y blur spread color inset/outset; blur： 模糊半径是在原来的基础上边缘边模糊，spread会额外延伸模糊效果

// text-shadow: 
h-shadow v-shadow blur color;

// - 是否看过框架类库的源码
underscore  jquery  requirejs

// - 遇到有什么技术难题，怎么解决
cookie丢失

// - 你做的最大的技术产品是什么，怎么去处理的
脚手架
1、bin目录下通过commander解析输入，根据参数，在如lib下对应的命令
2、lib目录下是各个子命令的具体实现

依据现有项目，提取公共文件夹及其文件

// 手写trigger bind
var event = {
    // 事件池
    eventsPool: {},
    bind: function (key, listener){

        if (!this.eventsPool[key]) {
          this.eventsPool[key] = [];
        }

        if (this.eventsPool.indexOf(listener) === -1 && typeof listener === 'function') {
          this.eventsPool[key].push(listener);
        }

        return this;
      },

      //触发一个事件，也就是通知
      trigger:function(key){

        if (!this.eventsPool[key]) return;

        var args = Array.prototype.slice.call(arguments, 1) || [];

        var listeners = this.eventsPool[key];
        var i = 0;
        var l = listeners.length;
        // 回调函数是数组，一次执行
        for (i; i < l; i++) {
          listeners[i].apply(this,args);
        }

        return this;
      },

      // 取消监听
      off:function (key, listener) {
        // 全部取消
        if (!key && !listener) {
          this.eventsPool = {};
        }
        // 不传监听函数，就去掉当前key下面的所有的监听函数
        else if (key && !listener) {
          delete this.eventsPool[key];
        }

        else if (key && listener && this.eventsPool[key]) {
          var listeners = this.eventsPool[key];
          var index = _indexOf(listeners, listener);

          (index > -1) && listeners.splice(index, 1);
        }

        return this;
      }
    }
};
// 移动端自适应
rem
flex
百分比

// 获取样式
function getStyle(obj, attr, value) {
    if (!value) {
        if (obj.currentStyle) {
            return obj.currentStyle(attr)
        } else {
            obj.getComputedStyle(attr, false)
        }
    } else {
        obj.style[attr] = value
    }
}

//  Cache-control优先级高于Expires


<P>&nbsp;&nbsp;哥写的不是HTML，是寂寞。<br><br>&nbsp;&nbsp;我说：<br>不要迷恋哥，哥只是一个传说

// 跨域的解决方法
JSONP
script
document.domain+iframe
iframe+location.hash：改变hash并不会导致页面刷新，所以可以利用hash值来进行数据传递，数据暴露在了url中，数据容量和类型都有限
window.name
postMessage
利用flash
服务器去代理
Access-Control-Allow-Origin: *


// - 写一个原型继承
function extends(parent, child) {
    temp.prototype = parent.prototype;
    child.prototype.constructor = child;
}

// 中介继承
function extends(parent, child) {
    child = child || {};
    var temp = function () {};
    temp.prototype = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
    child.super = parent;
}

// 深度clone
function deepCopy(p, c) {
    c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            // 这一步很关键，先将c[i]赋值为空数组或者对象
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }　　　　
    }
    return c;　　
}

Object.prototype.clone = function(){
    var o = this.constructor === Array ? [] : {};
    for(var i in this){
            o[i] = typeof this[i] === "object" ? this[i].clone() : this[i];
    }
    return o;
}
var cloneObj = JSON.parse(JSON.stringify(obj));

// - 原型里this要注意的地方
1、默认绑定
2、隐式绑定
3、显示绑定
4、new 绑定

// IE6在块元素、左右浮动、设定marin时造成margin双倍（双边距） 
解决方法：display:inline 

// 1、终极方法：条件注释 
<!--[if lte IE 6]> 这段文字仅显示在 IE6及IE6以下版本。 <![endif]--> 
<!--[if gte IE 6]> 这段文字仅显示在 IE6及IE6以上版本。 <![endif]--> 
<!--[if gt IE 6]> 这段文字仅显示在 IE6以上版本（不包含IE6）。 <![endif]--> 
<!--[if IE 5.5]> 这段文字仅显示在 IE5.5。 <![endif]--> 
<!--在 IE6及IE6以下版本中加载css--> 
<!--[if lte IE 6]> <link type="text/css" rel="stylesheet" href="css/ie6.css" mce_href="css/ie6.css" /><![endif]--> 

// div+css的布局较table布局有什么优点
代码少，页面文件小，下载快
布局灵活，网页有小的改动不影响搜索引擎收录
解决了表格的嵌套问题 ,提高了spider爬行的速度,否则会爬行超时，降低权重


// normalize.css
保护有用的浏览器默认样式而不是完全去掉它们
一般化的样式：为大部分HTML元素提供
修复浏览器自身的bug并保证各浏览器的一致性
优化CSS可用性：用一些小技巧

// Ajax状态码
0:未初始化 ，未调用open()
1:启动，已调用open()
2:发送，已调用send()
3:接收，已经接到第一个数据
4:完成

// HTML5 为什么只需要写 <!DOCTYPE HTML>？
 HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；
 而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

// 实现不使用 border 画出1px高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。
<div style="height:1px;overflow:hidden;background:red"></div>

// RGB vs HEX
function changeColor(color) {

    // 判断color类型
    // 如果为HEX形式，转化为RGB
    if (color.charAt(0) === '#') {

        // 补全可能的简写(题目说明不会出现错误情况，那么简写情况加上#长度应该为4)
        if (color.length === 4) {
            color = color.replace(/([^#])/g, '$1$1')
        }

        // 拆分为两两一组
        color = color.match(/[a-f0-9]{2}/g);

        // 循环转化为10进制
        for (var i = 0; i < color.length; i++) {
            color[i] = parseInt(color[i], 16);
        }

        // 组合输出
        return 'RGB(' + color.join(',') + ')';

        // 如果为RGB形式，转化为HEX
    } else {

        // 拆分出三个数字
        color = color.match(/[0-9]+/g);

        // 循环转化为16进制
        for (var i = 0; i < color.length; i++) {
            color[i] = (+color[i]).toString(16);
            // 这里前面一个加号只是把字符串的数字转化为数字，至于为什么那篇文章也已经说明
        }

        // 循环判断如果不足两位0补全
        // 当然这一步和上一步的循环可以合并，但是这里为了说明按照需求一步一步实现就不这么做了
        for (var i = 0; i < color.length; i++) {
            if (color[i].length === 1) {
                color[i] = '0' + color[i];
            }
        }

        // 合并为HEX字符串
        color = '#' + color.join('');

        // 判断是否可以简写,如果可以转化为简写
        if (/^#((\w)\1){3}$/.test(color)) {
            color = color.replace(/(\w)\1/g, '$1');
        }
        return color;
    }
}


// 惰性加载,第一次执行后就不再走分支了
var addEvent = function (ele, type, handler) {
    if (window.attachEvent) {
        addEvent = function (ele, type, handler) {
            ele.attachEvent('on' + type, handler.bind(ele));
        }
    }
    else if (window.addEventListener) {
        addEvent = function (ele, type, handler) {
            ele.addEventListener(type, handler, false);
        }
    }
}

// - bind
Function.prototype.bind = function (ctx) {
    var fn = this;
    return function () {
        fn.apply(ctx || window, arguments)
    }
}
// - 点击改变div的颜色和背景 除了style还有别的方法，区别

// - css清除浮动的方法
1,在尾部添加一个标签
2，父级元素设置超出隐藏
不清除的后果：父级盒子塌陷&排列问题

// - 判定一个对象是不是数组
Object.prototype.toString.call(obj) === '[object Array]';

// - 点击页面上任何一个div，都会显示出它的id值
document.onclick = function (e) {
    if (e.target.tagName.toUpperCase() === 'DIV') {
        console.log(e.target.getAttribute('id'));
    }
}

// - 写一个闭包函数，怎么处理
function a() {
    var b = 9;
    return function () {
        return b++;
    }

}
var d = a();

// - 高阶函数
高阶函数只是将函数作为参数或返回值的函数

// - css透明度的写法
filter:alpha(opacity=50); /*IE滤镜，透明度50%*/
-khtml-opacity: 0.5;
-moz-opacity:0.5; /*Firefox私有，透明度50%*/
opacity:0.5;/*其他，透明度50%*/

// - opacity跟rbga的区别在哪里
opacity会连带影响子元素，而RGBA设置的元素的后代元素不会继承不透明属性

// - 跨浏览器监听事件程序，怎么优化
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

// 获取函数名称
Function.prototype.getName = function(){
    return this.name || this.toString().match(/function\s*([^(]*)\(/)[1]
}

// 什么是Viewport 
viewport是专为手机浏览器设计的一个meta标签
width=device-width: 表示此宽度不依赖于原始象素(px)，而依赖于屏幕的宽度

### 最近滴滴
---
1. 121,1221,12321,是对称数，求[1000, 99999999]闭区间里面的对称数.
function fn() {
    var start = 10;
    var i = 1000;
    while (i < 99999999) {
        var si = i+'';
        var len = si.length;
        // 奇数
        if (si%2) {
            (si-1) / 2
        }
        // 偶数
        else {
            si / 2;
        }
    }
}

// 点透
tap事件的touchstart--touchend 会触发click。且click会延迟300ms才触发
1、fastclick
2、tap事件也延迟>320
3、点透中间层

// ["1", "2", "3"].map(parseInt) 答案是多少？
1, NaN, NaN  
parseInt(1, 0) ok
parseInt(2, 1) error
parseInt(2, 1) error

// 如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）
多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms

// 让页面里的字体变清晰，变细用CSS怎么做？
（-webkit-font-smoothing: antialiased;）抗据此

// font-style属性可以让它赋值为“oblique” oblique是什么意思？
让文字的样式倾斜

// 浏览器是怎样解析CSS选择器的？
从右往左，性能比从左往右高

// CSS优化、提高性能的方法有哪些？
1、值为0时不需要任何单位
2、不在选择符中使用ID标识符
3、不适用expresion表达式
4、正确使用display的属性（如不在inline中设置宽高）
5、标准化各种浏览器前缀
6、避免让选择符看起来像正则表达式（如属性选择器）

// 如何修改chrome记住密码后自动填充表单的黄色背景 ？
input:-webkit-autofill {
    background-color: #FAFFBD;
    background-image: none;
    color: #000;
}

// AOP实现

// 按需加载实现

// CSS三角形
width: 0;
height: 0;
border-width: 20px;
border-style: solid;
border-color: transparent transparent red transparent;

// IE兼容性
.bb{
  background-color:#f1ee18;/*所有识别*/
  .background-color:#00deff\9; /*IE6、7、8识别*/
  +background-color:#a200ff;/*IE6、7识别*/
  _background-color:#1e0bd1;/*IE6识别*/
}

// ::before 和 :after中双冒号和单冒号 有什么区别？
在css3中修订后伪元素使用::,伪类使用:, 因而形式为:: before, ::after。但是IE8只支持单冒号格式，因而为兼容还是使用单冒号


// iframe有那些缺点？
*iframe会阻塞主页面的Onload事件；因为有src属性，是一种资源
*搜索引擎的检索程序无法解读这种页面，不利于SEO;
*iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
动态给iframe添加src属性值，这样可以绕开以上两个问题。


// 怎么让Chrome支持小于12px 的文字？
-webkit-text-size-adjust:none   或者  -webkit-transform:scale(xx);-o-transform:scale(1); display:inline-block;

// 什么是Cookie 隔离？
如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，
所以不如隔离开。
因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，
这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。

// null 和undefined区别
null表示"没有对象"，即该处不应该有值。
undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。
Number(undefined)
NaN
Number(null)
0

// node中间层
dd-turbo

// 内存泄漏
内存泄露是指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束
JS的内存泄露，无怪乎就是从DOM中remove了元素，但是依然有变量或者对象引用了该DOM对象。然后内存中无法删除。
使得浏览器的内存占用居高不下。这种内存占用，随着浏览器的刷新，会自动释放。
☑  而另外一种情况，就是循环引用，一个DOM对象和JS对象之间互相引用，这样造成的情况更严重一些，即使刷新，内存也不会减少。这就是严格意义上说的内存泄露了。

// DOM文档加载的步骤
解析HTML结构。
加载外部脚本和样式表文件。
解析并执行脚本代码。
构造HTML DOM模型。//ready
加载图片等外部文件。
页面加载完毕。//load

// jQuery多库共存处理
jQuery.noConflict();
// 使用 jQuery
jQuery("aaron").show();
// 使用其他库的 $()
$("aaron").style.display = ‘block’;
这个函数必须在你导入jQuery文件之后，并且在导入另一个导致冲突的库之前使用。

2. 地图上的一条线有上千个节点，怎么实现增删该查

#### React
1. 怎么控制某个组件自身是否刷新（shouldComponentUpdate）
2. SPA页面菜单，A按钮对应一个页面，B按钮对应另外一个页面，在A操作一个异步请求，在请求结束之前，马上点击B页面，这种情况怎么处理。

4. 怎么使用webpack做代码切分
5. 怎么使用loader做代码打包，比如common
6. 用过webpack几种loader 
8. react的表格组件怎么设计
9. 怎么看待Vue和react之间区别
10. 怎么看待双向绑定和单向绑定的区别


### 组件化
1. 怎么实现组件化
2. 组件化里面的静态资源打包机制和加载机制是怎么样的
3. 组件化的通信机制和使用机制

### 工具构建
1. 用nodejs实现md5版本号工具
// 2. nodejs 和 iojs 的区别
创始人： Ryan Dahl   Joyent公司赞助   “Gatekeeper ＋ Joyent”模式运作  蜜月期大概中止于第二任Gatekeeper Isaac Z. Schlueter离开Joyent自行创建npm inc.公司时期
Mikeal Rogers的威望不是建立在他对Node.js项目代码的贡献上，他的威望主要来自于request模块和JSConf会议。其中JSConf是JavaScript社区最顶级的会议，他是主要发起人。  Node forword
“Node forword”可以视作是io.js的前身。这些core contributor们在“Node forword”上工作了一段时间，后来因为可能涉及到Node这个商标问题，Fedor Indutny愤而fork了Node.js，改名为io.js，宣告了Node.js社区的正式分裂。
o.js的开放管理模式主要体现在以下方面：

不再有Gatekeeper。取而代之的是TC（Technical Committee），也就是技术委员会。
引入Collaborators
TC会议
成立工作组

// 3. babel 5 和 6 的区别
5对新手更加友好，因为只需要安装一个babel就可以了，而babel6整体插件化，需要安装比较多的东西和插件才可以。
相比5来说，6将命令行工具和API分开来了，最直观的感觉就是，当你想在代码中运行es6代码的话，需要安装babel-core，

// 1. function sub (str, times) => str 的 times倍拼接
"abc".repeat(3) 

// 2. Buffer的编码
js的汉字是三个字节，data += trunk等价于data = data.toString() + trunk.toString()
var buffers = [];
var nread = 0;
readStream.on('data', function (chunk) {
    buffers.push(chunk);
    nread += chunk.length;
});
readStream.on('end', function () {
    var buffer = null;
    switch(buffers.length) {
        case 0: buffer = new Buffer(0);
            break;
        case 1: buffer = buffers[0];
            break;
        default:
            buffer = new Buffer(nread);
            for (var i = 0, pos = 0, l = buffers.length; i < l; i++) {
                var chunk = buffers[i];
                chunk.copy(buffer, pos);
                pos += chunk.length;
            }
        break;
    }
});


// 3. gulp的原理
Gulp是一个streaming构建工具，Gulp 和 Grunt 类似。但相比于 Grunt 的频繁的 IO 操作，Gulp 的流操作，能更快地完成构建。每一个作业都是独立，定义为 task；
通过 stream 的机制，上一个的输出，作为下一个的输入；
通过 pipe 方法组装 task，完成我们想要的业务逻辑。
API:  src  dest   pipe  watch

http状态码
101协议升级,服务器已经理解了客户端的请求，并将通过Upgrade 消息头通知客户端采用不同的协议来完成这个请求
202 服务器已接受请求，但尚未处理。正如它可能被拒绝一样，最终该请求可能会也可能不会被执行
204 服务器成功处理了请求，但不需要返回任何实体内容，并且希望返回更新了的元信息
206 服务器已经成功处理了部分 GET 请求
301 永久重定向
302 临时重定向
403 服务器已经理解请求，但是拒绝执行它。

// 长连接的实现  
实现长连接要客户端和服务端都支持长连接。 通过Connection: close 关闭

// 跨越中credit   带不带cookie
把cookie设置为secure，只保证cookie与WEB服务器之间的数据传输过程加密，而保存在本地的 cookie文件并不加密


// REST API
(1) 每一个URI代表一种资源；
(2) 客户端和服务器之间，传递这种资源的某种表现层；
(3) 客户端通过四个HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"。

// 性能调优（缓存问题）

// A.sleep().school().eat();
function A () {}

A.prototype.sleep  = function (time) {
    console.log(time);
    return this;
}
A.prototype.school  = function (time) {
    console.log('go school');
    return this;
}
A.prototype.eat  = function (time) {
    console.log('go eat');
    return this;
}

