var ballObj = function(){
	this.x = [];
	this.y = [];
	this.r = [];
	this.c = [];
	this.s = [];
	this.w = [];
	this.v = [];
	this.visible = [];
}
ballObj.prototype.num = 10;
ballObj.prototype.init = function(){
	for(var i = 0;i<this.num;i++){
		this.visible[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.r[i] = 0;
		this.w[i] = 0;
		this.c[i] = "";
		this.s[i] = 0;
		this.v[i] = 0;
	}
}
ballObj.prototype.update = function(){
	for(var i = 0;i<this.num;i++){
		if(this.visible[i]){
			// this.r[i] = Math.pow((this.w[i]*3)/(4*Math.PI),1/3);
			this.r[i] = Math.pow(this.w[i]/Math.PI,0.5);
			this.v[i] = 5*Math.pow(200/this.w[i],0.5);
		}
	}
}
ballObj.prototype.draw = function(){
	for(var i = 0;i<this.num;i++){
		if(this.visible[i]){
			ctx.save();
			ctx.fillStyle = this.c[i];
			ctx.beginPath();
			ctx.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx.closePath();
			ctx.fill();
			ctx.restore;
		}
	}
}
ballObj.prototype.creat = function(){
	for(var i = 0;i<this.num;i++){
		if(!this.visible[i]){
			this.visible[i] = true;
			this.x[i] = 0.5*can2.width;
			this.y[i] = 0.5*can2.height;
			this.w[i] = 500;
			// this.r[i] = Math.pow((this.w[i]*3)/(4*Math.PI),1/3);
			this.r[i] = Math.pow(this.w[i]/Math.PI,0.5);
			this.v[i] = 5*Math.pow(200/this.w[i],0.5);
			// console.log("v"+ball.v[0]);
			console.log("r"+ball.r[0]);
			this.c[i] = randomColor(0,0,0,1);
			return;
		}
	}
}