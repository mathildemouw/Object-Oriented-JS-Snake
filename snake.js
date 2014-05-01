window.onload = function () {

	var myField = new Field( "snake" );

	myField.provideSnakeFood();
	
	mySnake = new Snake;
	mySnake.move();

};

function Field ( canvasId ) {
	this.grass = document.getElementById( canvasId );
	this.grassContext = this.grass.getContext( "2d" );
	this.grassContext.fillStyle = "#AFEEEE";
	this.grassContext.fillRect( 0, 0, 90, 50 );
}

Field.prototype = {
	provideSnakeFood: function () {
		this.grassContext.fillStyle = "#FF10E0";
		var xCoord = ( Math.floor( Math.random()*88 ) );
		var yCoord = ( Math.floor( Math.random()*48 ) );
		this.grassContext.fillRect( xCoord, yCoord, 2, 2 );
	},
}	

function Snake ( color ) {

	this.body = [ { x:0, y:0 } ];
	this.head = this.body[0];
	// this.tail = this.body[-1]; // not a thing in JS ...
	this.tail = this.body[this.body.length - 1]
	this.ydirection = 0;
	this.xdirection = 1;
}

Snake.prototype = {
	// while this.body[0] is not intersecting with edge, or intersecting with itself, keep moving in current direction
	// moves by + or - to x or y coordinate on every elemebt of body array w/ sleep in between
	move: function () {
				debugger
		while ((this.head.x < 399 && this.head.x < 0) && (this.head.y < 299 && this.head.y > 0)){
			for ( i=0; i<this.body.length; i++){
				this.body[ i ].x += this.xdirection;
				this.body[ i ].y += this.ydirection;
				console.log(this.head);
			}
		}
	},

	// change + or - to x or y based on keyup event
	turn: function () {},
	// when snake head = food square, change food square color to snake color
	eat: function () {},
	// after eating food, move until tail is past food coord and add that coord to end of snake
	// also will need to decrease sleep between moving after eating food
	grow: function () {},
}