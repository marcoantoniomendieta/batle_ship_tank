// Field class
var Field = function(){
	// Constructor code
	this.size = 8; // Optional
	this.numShips = 1; // Optional
	this._field = new Array();
	this._ships = [];
	
	// Defintion of class method
	this._initField = function() {
		for (var i = 0; i < this.size; i++) {
			this._field[i] = new Array();
			for (var j = 0; j < this.size; j++){
				this._field[i][j]= '0';
			};
		};
	};
	this.drawn = function() {
		for (var i = 0; i < this.size; i++) {
			console.log('TEST: ', this._field[i].join('-'), i);
		};
		for (var j = 0; j < this.size; j++) {
			console.log('PLAYER: ', this._field[j].join('-').replace(/1/g, '0'), j);
		};
	};
	
	this._drawShip = function(ship){
		var initPosx = parseInt(Math.random() * (this.size - ship.size));
		var initPosy = parseInt(Math.random() * (this.size - ship.size));
		
		for (var i = initPosx; i < (initPosx + ship.size); i++) {
			this._field[initPosy][i] = ship.id;
		};
	};
	
	this._initShips = function() {
		for (var i = 1; i <= this.numShips; i++) {
			var ship = new Ship(i);
			this._ships[ship.id] = ship;
			this._drawShip(ship);
		}
	};
	
	
	this.evalShot = function(pos) {
	
		var val = this._field[0][pos];
		if (val != '0') {
			var ship = this._ships[val];
			ship.getShot();
			this._field[0][pos] = 'H';
			console.log(ship.status);
		}
		else {
			this._field[0][pos] = 'F';
			console.log('FAIL');
		}
		this.drawn();
	};
	
	this.isAnyShipAlive = function() {
		for (var i = 1; i < this._ships.length; i++) {
			if (this._ships[i].status != 'KILL')
				return true;
		}
	};
	
	this._initField();
	this._initShips();
	this.drawn();
};
