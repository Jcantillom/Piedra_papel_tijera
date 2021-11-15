let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('Machine-score');
const scoreBoard_div = document.querySelector('marcador');
const result_div = document.querySelector('.result p');
const piedra_div = document.getElementById("piedra");
const papel_div = document.getElementById("Papel");
const tijeras_div = document.getElementById("Tijeras");

function movidaComp(){
	const opciones = ['piedra', 'Papel', 'Tijeras'];
	const random = Math.floor( Math.random() * 3);
	const movida = opciones[random];
	return movida;


}
function simbolo (opcion){
	if (opcion == "piedra"){
		return "Piedra ✊ ";
	}else if(opcion == "Papel"){
		return "Papel 🖐 ";
	}else{
		return "Tijeras ✌ ";
	}
}



function ganar(opcionUser, opcionPc){
	userScore++;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML =" Felicitaciones!!  " +simbolo(opcionUser)+ " Le Gana a " +simbolo(opcionPc)+ ".  !! HAS GANADO !!";
	const userChoice_div = document.getElementById(opcionUser);
	const pcChoice_div = document.getElementById(opcionPc);
	userChoice_div.classList.add('azul');
	pcChoice_div.classList.add('rojo');
	setTimeout(function(){
		userChoice_div.classList.remove("azul");
		pcChoice_div.classList.remove("rojo");

	}, 1500);
}

function perder(opcionUser, opcionPc){
	compScore++;
	compScore_span.innerHTML=compScore;
	result_div.innerHTML ="Lo Siento !!  " +simbolo(opcionPc)+ " Le Gana a "+simbolo(opcionUser)+ ". !! HAS PERDIDO !!";
	const userChoice_div = document.getElementById(opcionUser);
	const pcChoice_div = document.getElementById(opcionPc);
	userChoice_div.classList.add('rojo');
	pcChoice_div.classList.add('azul'); 
	setTimeout(function(){
		userChoice_div.classList.remove("rojo");
		pcChoice_div.classList.remove("azul");

	}, 1500);
}

function empate(opcionUser){
	result_div.innerHTML = "Ambos Eligieron  "+simbolo(opcionUser)+". !! ES UN EMPATE !! ";
	const opcion_div = document.getElementById(opcionUser);
	opcion_div.classList.add('amarillo');
	setTimeout(function(){
		opcion_div.classList.remove("amarillo");
		
	}, 1500);
	
}


function game(opcion){
	const movidaPc = movidaComp();
	const movidaUser = opcion;
	
	

	switch (movidaUser+movidaPc){
		case "piedra" + "Tijeras":
		case "Papel"+ "piedra":
		case "Tijeras" + "Papel":
			ganar(movidaUser, movidaPc);
 
		break;
 
		case "piedra"+" Papel":
		case "Papel" +"Tijeras":
		case "Tijeras"+ " piedra":
			perder (movidaUser, movidaPc);
		break;

		case "piedra"+ "piedra":
		case "Papel" + "Papel":
		case "Tijeras" + "Tijeras":
			empate(movidaUser);
		break;


		
	}
}

function main(){
	piedra_div.addEventListener('click', ()=> game("piedra"));
	papel_div.addEventListener('click', ()=> game("Papel"));
	tijeras_div.addEventListener('click', ()=> game("Tijeras"));

}

main();