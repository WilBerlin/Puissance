function Board() {

	this.grid = [];
	this.max = [];
	
	for(j=0;j<7;j++) {
		let row = [];
		for(i=0;i<6;i++){
			row.push("x");
		}
		this.grid.push(row);
		this.max.push(0);	
	}
}

Board.prototype.play = function(player, col){
	if(col >=7) return;
	let max = this.max[col];
	if(max < 6){
		this.grid[col][max] = player;
		this.max[col]++;
	}
}

Board.prototype.draw = function() {
	for(j=0;j<7;j++) {		
		for(i=0;i<6 ;i++){
			let color;
			let play = this.grid[j][i]
			if (play=== "x") {
				color = "grey"
			} else {
				if (play==="r")
					color = "red"
				else
					color = "yellow" 		
			}
			
			fill(color);		
			circle(50+j*50,50+i*50,40);
		}				
	}
}

Board.prototype.winner = function(){
	let w = "x"

	for(j=0;j<7;j++) {
		if (this.max[j]>2){
			let col = this.grid[j] 	
			for(i=0;i<3;i++) {
			
				let a, b, c, d;
				a = col[i];
				b = col[i+1];
				c = col[i+2];
				d = col[i+3];
			
				if(a==b && b==c && c==d && a!==w) return a;
			}
		} 	
	}
		
	for(i=0;i<6;i++) {
		for(j=0;j<4;j++){
			let a, b, c, d;
			a = this.grid[j][i];
			b = this.grid[j+1][i];
			c = this.grid[j+2][i];
			d = this.grid[j+3][i];
		
			if(a==b && b==c && c==d && a!==w) return a;
		}
	}
		 	
	for(j=0;j<4;j++) {
		for(i=0;i<3;i++) {
			let a, b, c, d;
			a = this.grid[j][i];
		 	b = this.grid[j+1][i+1];
		 	c = this.grid[j+2][i+2];
		 	d = this.grid[j+3][i+3];
		 	
		 	if(a==b && b==c && c==d && a!==w) return a;
		 }
	}
		 	
	for(j=0;j<4;j++) {
		for(i=5;i>2;i--) {	
			let a, b, c, d;
			a = this.grid[j][i];
			b = this.grid[j+1][i-1];
		 	c = this.grid[j+2][i-2];
		 	d = this.grid[j+3][i-3];
		 	
		 	if(a==b && b==c && c==d && a!==w ) return a;
		 }
	}
		 	
	return w;
}