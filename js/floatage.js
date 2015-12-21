var floatageObj = function(){
	this.x = [];
	this.y = [];
	this.c = [];
	this.t = [];
	this.r = [];
	this.visible = [];
}
floatageObj.prototype.num = 500;
floatageObj.prototype.init = function(){
	for(var i = 0;i<this.num;i++){
		this.creat(i);
	}
}
floatageObj.prototype.draw = function(){
	for(var i = 0;i<this.num;i++){
		if(this.visible[i]){
			ctx.save();
			ctx.fillStyle = this.c[i];
			ctx.beginPath();
			ctx.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx.closePath();
			ctx.fill();
			ctx.restore;
		}
	}
}
floatageObj.prototype.monitor = function(){
	var num = 0;
	for(var i = 0;i<this.num;i++){
		if(this.visible[i]) num++;
	}
	if(num<this.num){
		this.sentFloatage();
	}
}

floatageObj.prototype.sentFloatage = function(){
	for(var i = 0;i<this.num;i++){
		if(!this.visible[i]){
			this.creat(i);
			return;
		}
	}	
}
floatageObj.prototype.creat = function(i){
		this.visible[i] = true;
		this.x[i] = Math.random()*can.width;
		this.y[i] = Math.random()*can.height;
		this.r[i] = 5;
		this.c[i] = randomColor(0,0,0,1);
}
floatageObj.prototype.dead = function(i){
		this.visible[i] = false;
}