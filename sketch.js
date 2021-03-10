let board;
let player = "r";
let gameOver = false;
let winner = "";

function setup() {
	// put setup code here
	createCanvas(400,400);
	board = new Board();
}

function mouseClicked() {
	if (player==="y") return;
	
	if (gameOver) return;
	if (mouseX < 50) return;
	if (mouseX > 390) return;
	
	let val = floor((mouseX-35)/50)
	board.play(player, val);
	
	if (player==="r")
		player = "y"
	else
		player = "r" 	
}

function draw() {
	background(25, 25,120);
	
	if(player=="y") {
	
		let val = floor(random(0,7))
		board.play(player, val);	
		player="r";	
	}	
	
	board.draw();	
	
	winner = board.winner();	
	if(winner !== "x" ) {
		let winnerName
		if(winner=="r")
			winnerName = "Red"
		else
			winnerName = "Yellow"
		
		textSize(48)
		textAlign(CENTER, CENTER);
		fill(255, 0, 124);
		text(winnerName, width /2, 370);
		noLoop();
	}
}