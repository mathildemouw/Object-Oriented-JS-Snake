window.onload = function () {

	myField = new Field( {canvasId: "snake", yMax: 900, xMax: 500} );

	mySnakeFood = new SnakeFood( {xMax: myField.xMax, yMax: myField.yMax} );

	mySnake = new SnakeController( myField.context );

	ecosystem = new GameView( { field: myField, food: mySnakeFood, snake: mySnake } );
	ecosystem.render();

	myGame = new GameController( { scene: ecosystem, snake: mySnake } );
	turnPace = setInterval( myGame.nextTurn, 90 );

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

	this.checkCollision = function(opts) {
		var occupiedCoords = opts['occupiedCoords']
		var occupiedSize = opts['occupiedSize']
		var occupierCoords = opts['occupierCoords']
		var occupierSize = opts['occupierSize']


		var xOverlap = this.checkAxisOverlap({ occupiedPoint: occupiedCoords['x'],
											 occupiedSize: occupiedSize,
											 occupierPoint: occupierCoords['x'],
											 occupierSize: occupierSize })

		var yOverlap = this.checkAxisOverlap({ occupiedPoint: occupiedCoords['y'],
											 occupiedSize: occupiedSize,
											 occupierPoint: occupierCoords['y'],
											 occupierSize: occupierSize })

		return (xOverlap && yOverlap)
	}

  this.checkAxisOverlap = function(opts) {
    var occupiedStart = opts["occupiedPoint"]
    var occupiedEnd = opts["occupiedPoint"] + opts["occupiedSize"]
    var occupierStart = opts["occupierPoint"]
    var occupierEnd = opts["occupierPoint"] + opts["occupierSize"]

    if ( occupierStart >= occupiedStart && occupierStart <= occupiedEnd ) { return true }
    if ( occupierEnd >= occupiedStart && occupierEnd <= occupiedEnd ) { return true }

    return false
  }


	this.render = function () {
		var collisionOpts = { occupiedCoords: {x: this.food.xCoord, y: this.food.yCoord } ,
													occupiedSize: 40,
													occupierCoords: { x: this.snake.model.head.x, y: this.snake.model.head.y } ,
													occupierSize: 10}
		if ( this.checkCollision( collisionOpts ) ){
			this.food.updateFoodPos();
			this.snake.model.eat();
		}

		else if (( this.snake.model.head.x >= (this.field.yMax - 3) ) || ( this.snake.model.head.y >= (this.field.xMax - 3) )){//transforms by 3
			clearInterval( turnPace )
		}
		else if (( this.snake.model.head.x < 0 ) || ( this.snake.model.head.y < 0 )){
			clearInterval( turnPace )
		}

		else if ( this.snakeCollision() ){
			clearInterval( turnPace )
		}

		this.field.render();
		this.food.render( this.field.context );
		this.snake.render();
	};

	this.snakeCollision = function () {
		this.snake.model.snakeDeath;
		for(  var i=1, segs = this.snake.model.segments; i<segs.length; i++ ){
			(( segs[ i ].x == this.snake.model.head.x ) && ( segs[ i ].y == this.snake.model.head.y )) ? this.snake.model.snakeDeath = true : "";
		};
		return this.snake.model.snakeDeath;
	};
}

/////////////The Field////////////

function Field ( opts ) {
	this.grass = document.getElementById( opts.canvasId );
	this.context = this.grass.getContext( "2d" );
	this.xMax = opts.xMax;
	this.yMax = opts.yMax;
}

Field.prototype = {
	render: function () {
		this.context.fillStyle = "#AFEEEE";
		this.context.fillRect( 0, 0, this.yMax, this.xMax );
	},
}

/////////////The Food////////////
function SnakeFood ( opts ) {

	this.xCoord = 30;
	this.yCoord = 30;

	this.xMax = opts.xMax;
	this.yMax = opts.yMax;
}

SnakeFood.prototype = {
	render: function( context ){
		context.fillStyle = "#FF10E0";
		context.fillRect( this.xCoord, this.yCoord, 40, 40);
	},
	updateFoodPos: function () {
		this.xCoord = ( Math.floor( Math.random()*(this.yMax - 2) )); //must return 1-9
		this.yCoord = ( Math.floor( Math.random()*(this.xMax - 2) )); //1-9, then multiply by 10
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
			case 37: binder.model.turn("left")
			break;

			case 38: binder.model.turn("down")
			break;

			case 39: binder.model.turn("right")
			break;

			case 40: binder.model.turn("up")
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
			this.context.fillRect( segments[ i ].x, segments[ i ].y, 10, 10 );
		}
	},
}

function SnakeModel () {
	this.segments = [ {x:0, y:0} ];
	this.head = this.segments[ this.segments.length - 1 ];

	this.direction = "right";
	this.xdirection = 10;
	this.ydirection = 0;
	this.snakeDeath = false;
}
SnakeModel.prototype = {

	turn: function ( direction ) { //transforms by 3
		switch( direction ){
			case "left": if (this.direction == "right") {}
			else{
				this.updateSnakeDirection( -10, 0 );
				this.direction = "left";
			};
			break;

			case "down": if (this.direction == "up") {}
			else{
				this.updateSnakeDirection( 0, -10 );
				this.direction = "down";
			};
			break;

			case "right": if (this.direction == "left") {}
			else{
				this.updateSnakeDirection( 10, 0 );
				this.direction = "right";
			};
			break;

			case "up": if (this.direction == "down") {}
			else{
				this.updateSnakeDirection( 0, 10 );
				this.direction = "up";
			};
			break;
		}
	},

	updateSnakeDirection: function ( xdirection, ydirection ) {
			this.xdirection = xdirection;
			this.ydirection = ydirection;
	},

	updateSnakePosition: function () {
				newHead = {};
				newHead.x = (this.head.x += this.xdirection);
				newHead.y = (this.head.y += this.ydirection);
				this.segments.unshift(newHead);

				this.segments.pop();
	},

	eat: function () {
		newTail = this.segments[ 0 ];
		this.segments.push( newTail );
	},

}