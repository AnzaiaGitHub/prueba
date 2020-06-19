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
	// console.log("animate");
}