window.onload = function () {

	myField = new Field( "snake" );
	mySnakeFood = new SnakeFood;

	mySnake = new SnakeController( myField );
	
	ecosystem = new Scene( { field: myField, food: mySnakeFood, snake: mySnake } );
	ecosystem.render();

	// mySnake.move();

};
/////////////Whole Scene////////////

function Scene ( opts ) {
	this.field = opts.field;
	this.food = opts.food;
	this.snake = opts.snake;
}

Scene.prototype = {
	render: function () {
		this.field.render();
		this.food.render( this.field.context );
		// this.snake.render();
	},
}

/////////////The Field////////////

function Field ( canvasId ) {
		this.grass = document.getElementById( canvasId );
		this.context = this.grass.getContext( "2d" );
}

Field.prototype = {
	render: function () {
	this.context.fillStyle = "#AFEEEE";
	this.context.fillRect( 0, 0, 90, 50 );
	},
}	

/////////////The Food////////////
function SnakeFood () {
	this.xCoord = 3;
	this.yCoord = 3;
}

SnakeFood.prototype = {
		//should show food at current position
	render: function( context ){
		context.fillStyle = "#FF10E0";
		context.fillRect( this.xCoord, this.yCoord, 2, 2 );
	},
	updateFoodPos: function () {
		// should change x and y coord values
		this.xCoord = ( Math.floor( Math.random()*88 ) );
		this.yCoord = ( Math.floor( Math.random()*48 ) );
	},
}

/////////////The Snake////////////
function SnakeController ( fieldForView ) {
	this.view = new SnakeView ( fieldForView ) ;
	this.binder = new SnakeBinder;
	this.model = new SnakeModel;
}
SnakeController.prototype = {
	move: function () {
		// this.binder.listen();
		this.view.draw( this.context );
		this.model.slither( this.view );
	},
}

function SnakeBinder () {}
SnakeBinder.prototype = {}

function SnakeView ( fieldForView ) {
	this.snakeContext = fieldForView.grassContext;
	this.wholeField = fieldForView;
}
SnakeView.prototype = {
	// render upon each movement based on model.body coordinates
	draw: function () {
		for (var i=0, segments = mySnake.model.body; i<segments.length; i++){
			this.snakeContext.fillStyle = "#000000"
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
				// user setTimeout() to make it sleep between renderings
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