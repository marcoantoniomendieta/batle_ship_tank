// Player class
var Player = function(){
	// this.name = window.prompt('Your name?');
	this.name = 'Leo';
	var size = Number(window.prompt('Enter the field size'));
	var numShips = Number(window.prompt('Enter the number of ships'));
	this.field = new Field(size, numShips);
	
	this.isLooser = function() {
		return this.field.isAnyShipAlive();
	};
};