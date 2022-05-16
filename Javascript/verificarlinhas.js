//Verifica a linha para ver se alguem ganhou
function verificarLinha(n1,n2,n3,arrBox){

	if(n1.childNodes.length > 0 && n2.childNodes.length > 0 && n3.childNodes.length > 0){
		let n1Child = n1.childNodes[0].className;
		let n2Child = n2.childNodes[0].className;
		let n3Child = n3.childNodes[0].className;


		if (n1Child == 'x' && n2Child == 'x' && n3Child == 'x') {
			vitoria = true;
			mensagemDeVitoria("x")
		}else
		if(n1Child == 'o' && n2Child == 'o' && n3Child == 'o') {
			vitoria = true;
			mensagemDeVitoria("o")
		}
	}
	let counter = 0;
	
	arrBox.forEach(function(element){if(element.childNodes[0] != undefined){counter++;}});

	if(counter == 9 && vitoria == false){
		mensagemDeVitoria("v");
		message.classList.remove("hide");
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
