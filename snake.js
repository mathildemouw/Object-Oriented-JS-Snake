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

/////////////Whole GameView////////////

function GameView ( opts ) {
	this.field = opts.field;
	this.food = opts.food;
	this.snake = opts.snake;

	this.render = function () {
		if ((this.snake.model.head.x == this.food.xCoord) && (this.snake.model.head.y == this.food.yCoord)){
			this.food.updateFoodPos();
			this.snake.model.eat();
		}

		this.field.render();
		this.food.render( this.field.context );
		this.snake.render();
	};
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
	render: function( context ){
		context.fillStyle = "#FF10E0";
		context.fillRect( this.xCoord, this.yCoord, 1, 1 );
	},
	updateFoodPos: function () {
		this.xCoord = ( Math.floor( Math.random()*88 ) );
		this.yCoord = ( Math.floor( Math.random()*48 ) );
	},
}

/////////////The Snake////////////
function SnakeController ( context ) {
	this.view = new SnakeView ( context ) ;
	this.model = new SnakeModel;
	this.binder = new SnakeBinder( this.model );
}
SnakeController.prototype = {
	render: function () {
		this.view.draw( this.model.segments );
	},

	move: function () {
		this.model.updateSnakePosition();
	},
}

function SnakeBinder ( model ) {
	this.model = model;
	this.changeDirection();
}

SnakeBinder.prototype.changeDirection = function() {
	binder = this;
	document.onkeydown = function( e ) {
		e = e || window.event;
		switch(e.which || e.keyCode) {
			case 37: binder.model.updateSnakeDirection( -1, 0 )//left
			break;

			case 38: binder.model.updateSnakeDirection( 0, -1 )//down
			break;

			case 39: binder.model.updateSnakeDirection( 1, 0 )//right
			break;

			case 40: binder.model.updateSnakeDirection( 0, 1 )//up
			break;
		}
	e.preventDefault(); 
  }
}

function SnakeView ( context ) {
	this.context = context;
}
SnakeView.prototype = {
	draw: function ( segments ) {
		for (var i=0, segments; i<segments.length; i++){
			this.context.fillStyle = "#000000";
			this.context.fillRect( segments[ i ].x, segments[ i ].y, 1, 1 );
		}
	},
}

function SnakeModel () {
	this.segments = [ { x:1, y:0 }, {x:0, y:0} ];
	this.head = this.segments[ this.segments.length - 1 ];

	this.xdirection = 1;
	this.ydirection = 0;
}
SnakeModel.prototype = {

	updateSnakeDirection: function ( xdirection, ydirection ) {
			this.xdirection = xdirection;
			this.ydirection = ydirection;
		},

	updateSnakePosition: function () {
				newSegment = {};
				newSegment.x = (this.head.x);
				newSegment.y = (this.head.y);

				this.head.x += this.xdirection;
				this.head.y += this.ydirection;
				
				this.segments.unshift(newSegment);

				this.segments.pop();
	},

	// checkForEdgeCollision: function () {},

	// checkForSegmentsCollision: function () {},
	
	eat: function () {
		newTail = this.head;
		this.segments.unshift(newTail);
	},
	
}