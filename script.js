//variáveis 
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let caixas = document.querySelectorAll(".box");
let botoes = document.querySelectorAll("#botao-container button");
let message = document.querySelector("#mensagem");
let textMessage = document.querySelector("#mensagem p")
let textoTurno = document.querySelector("h2");
let segundoJogador;

//contador de jogadas
let jogadasP1 = 0;
let jogadasP2 = 0;

textoTurno.classList.add("corX");


//Iterando sobre a variável caixa para pegar cada box
caixas.forEach(function(box){
	//adicionando eventos na box
	box.addEventListener("click", function(){
		//checando o turno 
		let turno = checkTurn(jogadasP1,jogadasP2);

		//verifica se ja tem x ou bola
		if(this.childNodes.length == 0){
			let cloneTurno = turno.cloneNode(true);
			this.appendChild(cloneTurno);

			//mudando o turno
			if(jogadasP1 == jogadasP2){
				
				textoTurno.classList.remove("corX");
				textoTurno.classList.add("corO")
				textoTurno.textContent ="Vez do O";
				jogadasP1++;
			
			}else{

				textoTurno.classList.remove("corO");
				textoTurno.classList.add("corX");
				textoTurno.textContent ="Vez do X";

				jogadasP2++;

			}
		}
		//checando a vitoria
		checkWin();
	})
});

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

//Verifica a linha para ver se alguem ganhou
function verificarLinha(n1,n2,n3,arrBox){

	if(n1.childNodes.length > 0 && n2.childNodes.length > 0 && n3.childNodes.length > 0){
		let n1Child = n1.childNodes[0].className;
		let n2Child = n2.childNodes[0].className;
		let n3Child = n3.childNodes[0].className;


		if (n1Child == 'x' && n2Child == 'x' && n3Child == 'x') {
			mensagemDeVitoria("x")
		}else
		if(n1Child == 'o' && n2Child == 'o' && n3Child == 'o') {
			mensagemDeVitoria("o")
		}
	}
	let counter = 0;
	
	arrBox.forEach(function(element){if(element.childNodes[0] != undefined){counter++;}});

	if(counter == 9){
		mensagemDeVitoria("v")
		message.classList.remove("hide")
	}
	
}

//Verifica todas as linhas
function verificarTodasAsLinhas(b1,b2,b3,b4,b5,b6,b7,b8,b9,arrBox){
	//Horizontal
	verificarLinha(b1,b2,b3,arrBox);
	verificarLinha(b4,b5,b6,arrBox);
	verificarLinha(b7,b8,b9,arrBox);
	//Cruzada
	verificarLinha(b1,b5,b9,arrBox);
	verificarLinha(b3,b5,b7,arrBox);
	//Vertical
	verificarLinha(b1,b4,b7,arrBox);
	verificarLinha(b2,b5,b8,arrBox);
	verificarLinha(b3,b6,b9,arrBox);
}


//Mostra a Mensagem de vitoria
function mensagemDeVitoria(vencedor){
	if (vencedor =="x") {
		textMessage.textContent = "O Vencedor foi o jogador 1";
		atualizarPlacar(vencedor);
		mostrarMensagem();
		
	}else if (vencedor =='o') {
		textMessage.textContent = "O Vencedor foi o jogador 2"
		atualizarPlacar(vencedor);
		mostrarMensagem();
	}else if (vencedor =='v') {
		textMessage.textContent = "Deu Velha"
		mostrarMensagem();
	}
}

function mostrarMensagem(){
	message.classList.remove("hide");

	setTimeout(function(){
		message.classList.add("hide");
	}, 1000);
	zeraJogadas();
	removeXO();
}

function zeraJogadas(){
	jogadasP1 = 0;
	jogadasP2 = 0;
}

function removeXO(){
	let remover = document.querySelectorAll(".box div");

	remover.forEach((box)=>{
		box.parentNode.removeChild(box);
	})
	textoTurno.textContent ="Vez do X";
	textoTurno.classList.remove("corO");
	textoTurno.classList.add("corX");
}

function atualizarPlacar(vencedor){
	let placarX = document.querySelector("#scoreboard-1");
	let placarO = document.querySelector("#scoreboard-2");

	if(vencedor == "x"){
		placarX.textContent = parseInt(placarX.textContent) + 1;
	}
	if(vencedor == "o"){
		placarO.textContent = parseInt(placarX.textContent) + 1;
	}

}