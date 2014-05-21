window.onload = function () {

	myField = new Field( {canvasId: "snake", yMax: 90, xMax: 50} );
	mySnakeFood = new SnakeFood( {xMax: myField.xMax, yMax: myField.yMax} );

	mySnake = new SnakeController( myField.context );
	
	ecosystem = new GameView( { field: myField, food: mySnakeFood, snake: mySnake } );
	ecosystem.render();

	myGame = new GameController( { scene: ecosystem, snake: mySnake } );
	turnPace = setInterval( myGame.nextTurn, 500 );

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
		if (( this.snake.model.head.x == this.food.xCoord ) && ( this.snake.model.head.y == this.food.yCoord )){
			this.food.updateFoodPos();
			this.snake.model.eat();
		}

		else if (( this.snake.model.head.x >= this.field.yMax ) || ( this.snake.model.head.y >= this.field.xMax )){
			clearInterval(turnPace)
		}
		else if (( this.snake.model.head.x < 0 ) || ( this.snake.model.head.y < 0 )){
			clearInterval(turnPace)
		}

		else if ( this.snakeCollision() ){
			clearInterval(turnPace)
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
	this.xCoord = 3;
	this.yCoord = 3;
	this.xMax = opts.xMax;
	this.yMax = opts.yMax;
}

SnakeFood.prototype = {
	render: function( context ){
		context.fillStyle = "#FF10E0";
		context.fillRect( this.xCoord, this.yCoord, 1, 1 );
	},
	updateFoodPos: function () {
		this.xCoord = ( Math.floor( Math.random()*(this.yMax - 2) ));
		this.yCoord = ( Math.floor( Math.random()*(this.xMax - 2) ));
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
			this.context.fillRect( segments[ i ].x, segments[ i ].y, 1, 1 );
		}
	},
}

function SnakeModel () {
	this.segments = [ {x:0, y:0} ];
	this.head = this.segments[ this.segments.length - 1 ];

	this.direction = "right";
	this.xdirection = 1;
	this.ydirection = 0;
	this.snakeDeath = false;
}
SnakeModel.prototype = {

	turn: function ( direction ) {
		switch( direction ){
			case "left": if (this.direction == "right") {}
			else{ 
				this.updateSnakeDirection( -1, 0 );
				this.direction = "left";
			};
			break;

			case "down": if (this.direction == "up") {}
			else{ 
				this.updateSnakeDirection( 0, -1 );
				this.direction = "down";
			};
			break;

			case "right": if (this.direction == "left") {}
			else{ 
				this.updateSnakeDirection( 1, 0 );
				this.direction = "right";
			};
			break;

			case "up": if (this.direction == "down") {}
			else{ 
				this.updateSnakeDirection( 0, 1 );
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