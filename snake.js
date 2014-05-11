window.onload = function () {

	myField = new Field( "snake" );
	mySnakeFood = new SnakeFood;

	mySnake = new SnakeController( myField.context );
	
	ecosystem = new GameView( { field: myField, food: mySnakeFood, snake: mySnake } );
	ecosystem.render();

	myGame = new GameController( { scene: ecosystem, snake: mySnake } );
	turnPace = setInterval( myGame.nextTurn, 1000 );

};
/////////////Each Turn////////////

function GameController ( opts ) {
	this.scene = opts.scene;
	this.snake = opts.snake;
	var self = this;

	this.nextTurn = function () {
		self.snake.move();
		self.scene.render();
	};
}

GameController.prototype = {
	
}

/////////////Whole GameView////////////

function GameView ( opts ) {
	this.field = opts.field;
	this.food = opts.food;
	this.snake = opts.snake;
}

GameView.prototype = {
	render: function () {
		this.field.render();
		this.food.render( this.field.context );
		this.snake.render();
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
function SnakeController ( context ) {
	this.view = new SnakeView ( context ) ;
	this.binder = new SnakeBinder;
	this.model = new SnakeModel;
}
SnakeController.prototype = {
	render: function () {
		this.view.draw( this.context );
	},

	move: function () {
		this.model.updateSnakePosition();
	},
}

function SnakeBinder () {}
SnakeBinder.prototype = {}

function SnakeView ( context ) {
	this.context = context;
}
SnakeView.prototype = {
	draw: function () {
		for (var i=0, segments = mySnake.model.body; i<segments.length; i++){
			this.context.fillStyle = "#000000"
			this.context.fillRect( segments[ i ].x, segments[ i ].y, 2, 2 )
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

	updateSnakePosition: function ( view ) {
		if (this.head.x < 5){ //canvasnote: should be the limits of the canvas, maybe if instead of while?
			// for ( i=0; i<this.body.length; i++){
				this.body[ 0 ].x += this.xdirection;
				this.body[ 0 ].y += this.ydirection;
				// user setTimeout() to make it sleep between renderings or setInterval()
			// }
		}
		else{
			console.log("SNAAAAKE!")
		};
	},

	// changeDirection: function () {},
	
	// // when snake head = food square, change food square color to snake color
	// eat: function () {
	// 	this.body.push()
	// },
	
	// // after eating food, move until tail is past food coord and add that coord to end of snake
	// // also will need to decrease sleep between moving after eating food
	// grow: function () {},
}