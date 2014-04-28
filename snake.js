window.onload = function () {
	field( "snake" );


	// the canvas, this my not need to be OO but w/e
	function field ( canvasId ) {
		var grass = document.getElementById( canvasId );
		var grassctx = grass.getContext( "2d" );
		grassctx.fillStyle = "#659D32";
		grassctx.fillRect( 0, 0, 40, 30 );
	}

	// single pixel w/ color
	function snakeFood ( field ) {
	}

	// array of coordinates w/color
	function snake () {
		// start w/ one snake-colored square at 0,0
		this.body = [];
	}

	snake.prototype = {
		// + or - to x or y coordinate on body set w/ sleep in between
		move: function () {},
		// change + or - to x or y based on keyup event
		turn: function () {},
		// when snake head = food square, change food square color to snake color
		eat: function () {},
		// after eating food, move until tail is past food coord and add that coord to end of snake
		grow: function () {}
	}


};