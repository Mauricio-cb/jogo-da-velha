function jogadaIa(){
	let oClone = o.cloneNode(true);
	let contador = 0;
	let preenchido = 0;

	for(i = 0; i<caixas.length;i++){
		
		let numeroAleatorio = Math.floor(Math.random()*5);

		if(caixas[i].childNodes[0] == undefined){
			if (numeroAleatorio <=1) {
				caixas[i].appendChild(oClone);
				contador++;
				break;
			}
		}else{
			preenchido++;
		}
		if (contador == 0 && preenchido < 9){
			jogadaIa();
		}
	}
}
