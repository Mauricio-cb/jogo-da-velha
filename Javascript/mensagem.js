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