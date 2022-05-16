//Checando o Turno
function checkTurn(player1, player2){

	if (jogadasP1 == jogadasP2) return x;

	return o;
}

//Checando quem ganhou
function checkWin(){

	let [b1,b2,b3,b4,b5,b6,b7,b8,b9] = document.querySelectorAll(".box");

	arrBox =[b1,b2,b3,b4,b5,b6,b7,b8,b9];

	verificarTodasAsLinhas(b1,b2,b3,b4,b5,b6,b7,b8,b9,arrBox);
}
