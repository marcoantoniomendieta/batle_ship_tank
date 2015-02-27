var setMatriz = function(num){
	var matriz = new Array();
	for (var i = 0; i < num; i++){
			matriz[i] = new Array();
		for (var j = 0; j < num; j++){
			matriz[i][j]= 'a';
			continue;
		};
	};
};


var printMatrizOne = function(){
	var matriz = new Array();
	matriz[0] = new Array ('e00', 'e01', 'e02'); 
	matriz[1] = new Array ('e10', 'e11', 'e12'); 
	matriz[2] = new Array ('e20', 'e21', 'e22'); 
	for (var i = 0; i < matriz.length; i++){
		for (var j = 0; j < matriz[i].length; j++){
			console.log(matriz[i][j]);
			continue;
		};
	};
};
