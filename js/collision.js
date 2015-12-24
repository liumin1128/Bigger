function ballfloatagesCollision(){
 	// if(!data.gameOver){
 	for(var j=0;j<ball.num;j++){
 		if(ball.visible[j]){

 		for(var i=0;i<floatage.num;i++){
			if(floatage.visible[i]){
				var l = calLength2(floatage.x[i],floatage.y[i],ball.x[j],ball.y[j]);
				if(l<ball.r[j]){
					floatage.dead(i);
					ball.w[j]+=50;
				} 
			}
		}
 		}

 	// }
 	}

}