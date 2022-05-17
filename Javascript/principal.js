//variáveis 
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let containerCaixa = document.querySelector("#caixa");
let caixas = document.querySelectorAll(".box");
let botoes = document.querySelectorAll("#botao-container button");
let message = document.querySelector("#mensagem");
let textMessage = document.querySelector("#mensagem p")
let textoTurno = document.querySelector("h2");
let segundoJogador;

//contador de jogadas
let jogadasP1 = 0;
let jogadasP2 = 0;

textoTurno.textContent = "Escolha um modo de jogo";


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
				textoTurno.classList.add("corO");
				textoTurno.textContent ="Vez do O";
				jogadasP1++;

				if(segundoJogador == 'ai-player'){
					jogadaIa();
					jogadasP2++;

					textoTurno.classList.remove("corO");
					textoTurno.classList.add("corX");
					textoTurno.textContent ="Vez do X";

				}
			
			}else if(jogadasP1 > jogadasP2){
				jogadasP2++;
				
				textoTurno.classList.remove("corO");
				textoTurno.classList.add("corX");
				textoTurno.textContent ="Vez do X";

			}
		}
		//checando a vitoria
		checkWin();
	})
});


botoes.forEach(function(botao){
	botao.addEventListener("click", function(){
		
		setTimeout(function(){
			textoTurno.classList.add("corX");
			textoTurno.textContent = "Vez do X"
	
		},1000);
		
		segundoJogador = botao.getAttribute("id");
		console.log(segundoJogador);
		botoes.forEach(function(botao){
			setTimeout(function(){
				botao.classList.add("hide");
				containerCaixa.classList.remove("hide");
			},1000)
		});
		console.log("Esta aqui");
	});
})

function zeraJogadas(){
	jogadasP1 = 0;
	jogadasP2 = 0;
}
