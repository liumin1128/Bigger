function ballfloatagesCollision(){
 	// if(!data.gameOver){
 		for(var i=0;i<floatage.num;i++){
			if(floatage.visible[i]){
				var l = calLength2(floatage.x[i],floatage.y[i],ball.x[0],ball.y[0]);
				if(l<ball.r[0]){
					floatage.dead(i);
					ball.w[0]+=50;
				} 
			}
		}
 	// }
}