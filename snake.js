window.onload = function () {

	var myField = new Field( "snake" );

	myField.provideSnakeFood();
	
	mySnake = new SnakeController;
	// mySnake.move();

};

/////////////The Field////////////
function Field ( canvasId ) {
	this.grass = document.getElementById( canvasId );
	this.grassContext = this.grass.getContext( "2d" );
	this.grassContext.fillStyle = "#AFEEEE";
	this.grassContext.fillRect( 0, 0, 90, 50 );
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
	this.xCoord = ( Math.floor( Math.random()*88 ) );
	this.yCoord = ( Math.floor( Math.random()*48 ) );
}

SnakeFood.prototype = {
	viewSnakeFood: function( context ){
		context.fillRect( this.xCoord, this.yCoord, 2, 2 );
	},
}

/////////////The Snake////////////
function SnakeController () {
	this.view = new SnakeView;
	this.binder = new SnakeBinder;
	this.model = new SnakeModel;
}
SnakeController.prototype = {
	// associate keyup events with snakeModel functions
	move: function () {
		// this.binder.listen();
		// this.view.draw();
		// this.model.slither();
	},
}

function SnakeBinder () {}
SnakeBinder.prototype = {}

function SnakeView () {}
SnakeView.prototype = {
	// set up rendering upon each movement based on model.body coordinates
}

function SnakeModel () {
	this.body = [ { x:0, y:0 } ];
	this.head = this.body[0];
	this.tail = this.body[this.body.length - 1]

	this.ydirection = 0;
	this.xdirection = 1;
}

SnakeModel.prototype = {
	// while this.body[0] is not intersecting with edge, or intersecting with itself, keep moving in current direction
	// moves by + or - to x or y coordinate on every elemebt of body array w/ sleep in between
	alive: function () {},
	slither: function () {
		while (this.alive){
			for ( i=0; i<this.body.length; i++){
				this.body[ i ].x += this.xdirection;
				this.body[ i ].y += this.ydirection;
			}
		}
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