window.onload = function () {

	var myField = new Field( "snake" );

	myField.provideSnakeFood();
	
	mySnake = new SnakeController( myField.grassContext );
	// mySnake.move();

};

/////////////The Field////////////
function Field ( canvasId ) {
	this.grass = document.getElementById( canvasId );
	this.grassContext = this.grass.getContext( "2d" );
	this.grassContext.fillStyle = "#AFEEEE";
	this.grassContext.fillRect( 0, 0, 90, 50 ); //canvasnote: may want to make canvas limits arguments later
}

Field.prototype = {
	provideSnakeFood: function () {
		this.grassContext.fillStyle = "#FF10E0";
		food = new SnakeFood;
		food.viewSnakeFood( this.grassContext );
	},
}	

/////////////The Food////////////
function SnakeFood () {
	this.xCoord = ( Math.floor( Math.random()*88 ) ); //canvasnote: should be the limits of the canvas, maybe if instead of while?
	this.yCoord = ( Math.floor( Math.random()*48 ) );
}

SnakeFood.prototype = {
	viewSnakeFood: function( context ){
		context.fillRect( this.xCoord, this.yCoord, 2, 2 );
	},
}

/////////////The Snake////////////
function SnakeController ( context ) {
	this.view = new SnakeView ( context ) ;
	// this.binder = new SnakeBinder;
	this.model = new SnakeModel;
}
SnakeController.prototype = {
	// associate keyup events with snakeModel functions
	move: function () {
		// this.binder.listen();
		this.view.draw( this.context );
		this.model.slither( this.view );
	},
}

// function SnakeBinder () {}
// SnakeBinder.prototype = {}

function SnakeView ( context ) {
	this.snakeContext = context;
}
SnakeView.prototype = {
	// render upon each movement based on model.body coordinates
	draw: function () {
		for (i=0, segments = mySnake.model.body; i<segments.length; i++){
			this.snakeContext.fillStyle = "#FFD0E0"
			this.snakeContext.fillRect( segments[ i ].x, segments[ i ].y, 2, 2 )
		}
	},
}

function SnakeModel () {
	this.body = [ { x:0, y:0 } ];
	this.head = this.body[0];
	this.tail = this.body[this.body.length - 1];

	this.ydirection = 0;
	this.xdirection = 1;
}

SnakeModel.prototype = {
	// while this.body[0] is not intersecting with edge, or intersecting with itself, keep moving in current direction
	// moves by + or - to x or y coordinate on every elemebt of body array w/ sleep in between

	slither: function ( view ) {
		while (this.head.x < 5){ //canvasnote: should be the limits of the canvas, maybe if instead of while?
			// for ( i=0; i<this.body.length; i++){
				this.body[ 0 ].x += this.xdirection;
				this.body[ 0 ].y += this.ydirection;
				setTimeout()
				view.draw();
			// }
		};
	},
	// turn: function () {},
	// // when snake head = food square, change food square color to snake color
	// eat: function () {
	// 	this.body.push()
	// },
	// // after eating food, move until tail is past food coord and add that coord to end of snake
	// // also will need to decrease sleep between moving after eating food
	// grow: function () {},
}