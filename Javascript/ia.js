
const jogadaIa = () =>{
	let cloneO = o.cloneNode(true);
	let contador = 0;
	let preencidos = 0;

	for(i = 0; i < caixas.length; i++){
		let numAleatorio = Math.round(Math.random()*5);
		if(caixas[i].childNodes[0] == undefined){
			if(numAleatorio <=1){
				caixas[i].appendChild(cloneO);
				contador++;
				break;
			}
		}else{
			preencidos++;
		}
	}if (contador == 0 && preencidos <9 ) {
		jogadaIa();
	}
}