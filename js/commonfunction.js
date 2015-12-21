window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
function randomColor(r,g,b,a){
	var R = r||Math.floor(Math.random()*255);
    var G = g||Math.floor(Math.random()*255);
    var B = b||Math.floor(Math.random()*255);
    var A = a||Math.random();
    return "rgba("+R+","+G+","+B+","+A+")";
}
function lerpDistance(aim, cur, ratio) {
	var delta = cur - aim;
	return aim + delta * ratio;
}
function lerpAngle(a, b, t) {
	var d = b - a;
	if (d > Math.PI) d = d - 2 * Math.PI;
	if (d < -Math.PI) d = d + 2 * Math.PI;
	return a + d * t;
}
function calLength2(x1, y1, x2, y2) {
	var xdiff = x2 - x1;            // 计算两个点的横坐标之差
	var ydiff = y2 - y1;            // 计算两个点的纵坐标之差
	return Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5);
	// return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}
function findDimensions() //函数：获取尺寸 
{
	//获取窗口宽度 
	if (window.innerWidth)
		winWidth = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth))
		winWidth = document.body.clientWidth;
	//获取窗口高度 
	if (window.innerHeight)
		winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight))
		winHeight = document.body.clientHeight;
	//通过深入Document内部对body进行检测，获取窗口大小 
	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
		winHeight = document.documentElement.clientHeight;
		winWidth = document.documentElement.clientWidth;
	}
	// console.log(winHeight,winWidth);
}
function pointToLine(x1, y1, x2, y2, x0, y0) {
	var space = 0;
	var a = 0;
	var b = 0;
	var c = 0;
	a = lineSpace(x1, y1, x2, y2); // 线段的长度
	b = lineSpace(x1, y1, x0, y0); // (x1,y1)到点的距离
	c = lineSpace(x2, y2, x0, y0); // (x2,y2)到点的距离
	if (c <= 0.000001 || b <= 0.000001) {
		space = 0;
		return space;
	}
	if (a <= 0.000001) {
		space = b;
		return space;
	}
	if (c * c >= a * a + b * b) {
		space = b;
		return space;
	}
	if (b * b >= a * a + c * c) {
		space = c;
		return space;
	}
	var p = (a + b + c) / 2; // 半周长
	var s = Math.sqrt(p * (p - a) * (p - b) * (p - c)); // 海伦公式求面积
	space = 2 * s / a; // 返回点到线的距离（利用三角形面积公式求高）
	return space;
}

function lineSpace(x1, y1, x2, y2) {
	var lineLength = 0;
	lineLength = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	return lineLength;
}
function windowToCanvas(x,y){
    var bbox = canvas.getBoundingClientRect();
    return{
        x:x-bbox.left,
        y:y-bbox.top
    }
}
function getKeyCode(e){
　 var e=e||event;
　 var keyCode=e.keyCode||e.which||e.charCode;
	// alert(keyCode);
}