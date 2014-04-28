window.onload = function () {

	function Field ( canvasId ) {
		this.grass = document.getElementById( canvasId );
		this.grassContext = this.grass.getContext( "2d" );
		this.grassContext.fillStyle = "#659D32";
		this.grassContext.fillRect( 0, 0, 40, 30 );
	}

	Field.prototype = {
		provideSnakeFood: function () {
			this.grassContext.fillStyle = "#FF0000";
			var xCoord = ( Math.floor( Math.random()*37 ) );
			var yCoord = ( Math.floor( Math.random()*27 ) );
			this.grassContext.fillRect( xCoord, yCoord, 3, 3 );
			console.log("I do not know how math works:")
			console.log(xCoord);
			console.log(yCoord);
		},
	}	

	// array of coordinates w/color
	function Snake () {
		// start w/ one snake-colored square at 0,0
		this.body = [];
	}

	Snake.prototype = {
		// + or - to x or y coordinate on body set w/ sleep in between
		move: function () {},
		// change + or - to x or y based on keyup event
		turn: function () {},
		// when snake head = food square, change food square color to snake color
		eat: function () {},
		// after eating food, move until tail is past food coord and add that coord to end of snake
		grow: function () {},
	}

	var myField = new Field( "snake" );

	// myField.grassContext.fillStyle = "#FF0000";
	// myField.grassContext.fillRect( 0, 0, 5, 5 );
	myField.provideSnakeFood();


};