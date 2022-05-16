function atualizarPlacar(vencedor){
	let placarX = document.querySelector("#scoreboard-1");
	let placarO = document.querySelector("#scoreboard-2");

	if(vencedor == "x"){
		placarX.textContent = parseInt(placarX.textContent) + 1;
	}
	if(vencedor == "o"){
		placarO.textContent = parseInt(placarO.textContent) + 1;
	}

}

