var can = document.getElementById("canvas");
var can2 = document.getElementById("canvas2");
var ctx = can.getContext("2d");
var ctx2 = can2.getContext("2d");
var leftDown,upDown,rightDown,downDown;
var ball;
var floatage;
var x,y,winWidth,winHeight;
window.onload = function(){
	x=0;
	y=0;
	findDimensions();
	leftDown = false;
	upDown = false;
	rightDown = false;
	downDown = false;
	can.width = 2048;
	can.height = 2048;
	can2.width = winWidth-50;
	can2.height = winHeight-50;
	init();
}

function init(){
	ball = new ballObj();
	ball.init();
	floatage = new floatageObj();
	floatage.init();
	loop();
	ball.creat();
}

function loop(){
	ctx.clearRect(0,0,can.width,can.height);
	floatage.draw();
	ball.draw();


	direction();
	floatage.monitor();
	ball.update();
	ballfloatagesCollision();


	ctx2.clearRect(0,0,can2.width,can2.height);
	ctx2.drawImage(can,x,y,can2.width,can2.height,0,0,can2.width,can2.height);
	requestAnimFrame(loop);
}
document.body.onclick = function(){
	ball.creat2();
}
document.onkeydown =keyDown;
document.onkeyup =keyUp;
function keyDown(e){
　 var e=e||event;
　 var keyCode=e.keyCode||e.which||e.charCode;
	switch (keyCode) {
		case 37:leftDown = true;break;
		case 38:upDown = true;break;
		case 39:rightDown = true;break;
		case 40:downDown = true;break;
	}
}
function keyUp(e){
　 var e=e||event;
　 var keyCode=e.keyCode||e.which||e.charCode;
	switch (keyCode) {
		case 37:leftDown = false;break;
		case 38:upDown = false;break;
		case 39:rightDown = false;break;
		case 40:downDown = false;break;
	}
}
function direction() {
	var cha = ""+leftDown+rightDown+upDown+downDown;
	var num = 0;
	for(var i=0;i<ball.num;i++){
		if(ball.visible[i]){
			num++;
		}
	}
for(var i=0;i<num;i++){
	switch(cha){
		case "truefalsefalsefalse":
			ball.x[i]-=1.4*ball.v[i];
			// x-=1.4*ball.v[0];
			break;
		case "falsetruefalsefalse":
			ball.x[i]+=1.4*ball.v[i];
			// x+=1.4*ball.v[0];
			break;
		case "falsefalsetruefalse":
			ball.y[i]-=1.4*ball.v[i];
			// y-=1.4*ball.v[0];
			break;
		case "falsefalsefalsetrue":
			ball.y[i]+=1.4*ball.v[i];
			// y+=1.4*ball.v[0];
			break;
		case "truefalsetruefalse":
			ball.x[i]-=ball.v[i];
			// x-=ball.v[0];
			ball.y[i]-=ball.v[i];
			// y-=ball.v[0];
			break;
		case "falsetruetruefalse":
			ball.x[i]+=ball.v[i];
			// x+=ball.v[0];
			ball.y[i]-=ball.v[i];
			// y-=ball.v[0];
			break;
		case "falsetruefalsetrue":
			ball.x[i]+=ball.v[i];
			// x+=ball.v[0];
			ball.y[i]+=ball.v[i];
			// y+=ball.v[0];
			break;
		case "truefalsefalsetrue":
			ball.x[i]-=ball.v[i];
			// x-=ball.v[0];
			ball.y[i]+=ball.v[i];
			// y+=ball.v[0];
			break;
		}
	}
		switch(cha){
			case "truefalsefalsefalse":
			x-=1.4*ball.v[0];
			break;
		case "falsetruefalsefalse":
			x+=1.4*ball.v[0];
			break;
		case "falsefalsetruefalse":
			y-=1.4*ball.v[0];
			break;
		case "falsefalsefalsetrue":
			y+=1.4*ball.v[0];
			break;
		case "truefalsetruefalse":
			x-=ball.v[0];
			y-=ball.v[0];
			break;
		case "falsetruetruefalse":
			x+=ball.v[0];
			y-=ball.v[0];
			break;
		case "falsetruefalsetrue":
			x+=ball.v[0];
			y+=ball.v[0];
			break;
		case "truefalsefalsetrue":
			x-=ball.v[0];
			y+=ball.v[0];
			break;
		}
} 
