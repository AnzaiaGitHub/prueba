var html = document.getElementsByTagName("html")[0],
	scrollvalue = html.scrollTop;
const body = document.getElementById("body");
const botonsubir = document.getElementById('scrolltop');

function start(){
	animate();
}

botonsubir.addEventListener('click',()=>{
	window.scroll({top:0, behavior:'smooth'});
})

function animate(){
	window.requestAnimationFrame(animate);
	scrollvalue=html.scrollTop;
	if(scrollvalue>0){
		botonsubir.style.cursor='pointer';
		botonsubir.style.opacity=1;
	}else{
		botonsubir.style.cursor='none';
		botonsubir.style.opacity=0;
	}
}
// Dirigirse a la página de cada rama
function unidades(unidad){
	switch(unidad){
		case 1:
		window.location="./ositos.html";
		break;
		case 2:
		window.location="./gatitos.html";
		break;
		case 3:
		window.location="./conejitos.html";
		break;

		case 11:
		window.location="./gris.html";
		break;
		case 12:
		window.location="./blanca.html";
		break;
		case 13:
		window.location="./cafe.html";
		break;
		case 14:
		window.location="./amarilla.html";
		break;
		case 15:
		window.location="./negra.html";
		break;

		case 21:
		window.location="./quimbaya.html";
		break;
		case 22:
		window.location="./tayrona.html";
		break;
		case 23:
		window.location="./yotoco.html";
		break;

		case 31:
		window.location="./pumas.html";
		break;
		case 32:
		window.location="./tibery.html";
		break;
		case 33:
		window.location="./gacelas.html";
		break;
		case 34:
		window.location="./centauros.html";
		break;
		case 35:
		window.location="./lobos.html";
		break;
		default:
			alert("La página solicitada no cuenta con la información necesaria para estar activa.");
		break;
	}
}