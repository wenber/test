this.replace(/(^\s*)|(\s*$)/g,'');

document.onclick=function(e){ 
     var e=(e||window.event); 
     var o=e.target.||e.srcElement; 
     alert(o.tagName.toLowerCase())


 	function dynamicLoad()  
   {  
      var _doc=document.getElementsByTagName('head')[0];  
      var script=document.createElement('script');  
      	script.setAttribute('type','text/javascript');  
     	script.setAttribute('src','jquery-1.4.4.js');  
  		 _doc.appendChild(script);  
  		 //onload FF        onreadystatechange IE
   		script.onload=script.onreadystatechange=function(){  
      	if(!this.readyState  //FF
      		||this.readyState=='loaded'   //ie
      		||this.readyState=='complete'){  //ie
   	   		alert('done');  
   		}  
   		script.onload=script.onreadystatechange=null;  //注意要释放资源
   		}  
   	}




   function GetBytes(str){
    var len = str.length;
    var bytes = len;
    for(var i=0; i<len; i++){
        if (str.charCodeAt(i) > 255) bytes++;
    }
    return bytes;
}

function deepCopy(p, c) {
　　　　var c = c || {};
　　　　for (var i in p) {
// 　　　　　　if (typeof p[i] === 'object') {
// 　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
c[i] = (Object.prototype.toString.apply(p[i]) === "[object Array]") ? [] : {};
// 　　　　　　　　deepCopy(p[i], c[i]);
// 　　　　　　} 
				else {
　　　　　　　　　c[i] = p[i];
　　　　　　}
　　　　}
　　　　return c;
　　}
Array.prototype.slice.call(arguements);


function getPagearea(){
　　　　if (document.compatMode == "BackCompat"){//BackCompat    CSS1Compat
　　　　　　return {
　　　　　　　　width: Math.max(document.body.scrollWidth,
　　　　　　　　　　　　　　　　document.body.clientWidth),
　　　　　　　　height: Math.max(document.body.scrollHeight,
　　　　　　　　　　　　　　　　document.body.clientHeight)
　　　　　　}
　　　　} else {
　　　　　　return {
　　　　　　　　width: Math.max(document.documentElement.scrollWidth,
　　　　　　　　　　　　　　　　document.documentElement.clientWidth),
　　　　　　　　height: Math.max(document.documentElement.scrollHeight,
　　　　　　　　　　　　　　　　document.documentElement.clientHeight)
　　　　　　}
　　　　}
　　}


function getViewport(){
　　　　if (document.compatMode == "BackCompat"){
　　　　　　return {
　　　　　　　　width: document.body.clientWidth,
　　　　　　　　height: document.body.clientHeight
　　　　　　}
　　　　} else {
　　　　　　return {
　　　　　　　　width: document.documentElement.clientWidth,
　　　　　　　　height: document.documentElement.clientHeight
　　　　　　}
　　　　}
　　}


var str = "abcdefgaddda";
　　var obj = {};
　　for (var i = 0, l = str.length; i < l; i++) {
　　　　if (!obj[str[i]]) {
　　　　　　obj[str[i]] = 1;
　　    } else {
　　       obj[str[i]]++;
　　    }
　　}


function IsString(str){
　　return (typeof str === "string" || str.constructor === String);
　　}

function loadScript(){
  var script = document.createElement("script");
  script.setAttribute("src", "");
  script.setAttribute("type", "text/javascript");
  document.getElementsByTagName("head")[0].appendChild(script);
  script.onload=script.onreadystatechange=function(){
    if(!this.readyState || this.readyState=="loaded" || this.readyState=="complete"){ //ff
      

      script.onload =script.onreadystatechange=null;
    }//
  }

  
  
}