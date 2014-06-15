var myFireRef = new Firebase( 'https://sweltering-fire-2405.firebaseio.com/' );

//set writes data to the firebase
//.push() appends new data to make a list
myFireRef.push({player: player, changes: changes}); //what does this information look like?

myFireRef.on('snake_turn', function yolo ( snapshot ) {
	var changesThisTurn = snapshot.val();
});

// every turn messages needs to get sent to firebase and back to the game,
// updating the current state of the snakes and the snake food
// snake info = the current state of the snakeModel attributes
// food info = current state of the snakeFood model

// when I open the page
//right away you can play snake 1 player

// 