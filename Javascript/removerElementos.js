function removeXO(){
	let remover = document.querySelectorAll(".box div");

	remover.forEach((box)=>{
		box.parentNode.removeChild(box);
	});
	
	textoTurno.textContent ="Vez do X";
	textoTurno.classList.remove("corO");
	textoTurno.classList.add("corX");
	vitoria = false;
}