var html = document.getElementsByTagName("html")[0],
	scrollvalue = html.scrollTop;
const body = document.getElementById("body");

const	modal1=document.getElementById('modal1');
const	modal2=document.getElementById('modal2');
/*const	modal3=document.getElementById('modal3');
const	modal4=document.getElementById('modal4');
/*const	modal5=document.getElementById('modal5');*/

const	omodal1=document.getElementById('omodal1');
const	omodal2=document.getElementById('omodal2');
/*const	omodal3=document.getElementById('omodal3');
const	omodal4=document.getElementById('omodal4');
/*const	omodal5=document.getElementById('omodal5');*/

const	cmodal1=document.getElementById('cmodal1');
const	cmodal2=document.getElementById('cmodal2');
/*const	cmodal3=document.getElementById('cmodal3');
const	cmodal4=document.getElementById('cmodal4');
/*const	cmodal5=document.getElementById('cmodal5');*/

omodal1.addEventListener('click',()=>{
	modal1.setAttribute('open','true')
	modaler(0);
	// document.getElementById("contenedorgeneral").style.opacity=0.5;
	// document.getElementById("modal1").style.opacity=1;

})
omodal2.addEventListener('click',()=>{
	modal2.setAttribute('open','true')
	modaler(0);
	// document.getElementById("contenedorgeneral").style.opacity=0.5;
	// document.getElementById("modal1").style.opacity=1;
})

/*omodal3.addEventListener('click',()=>{
	modal3.setAttribute('open','true')
})
omodal4.addEventListener('click',()=>{
	modal4.setAttribute('open','true')
})
/*omodal5.addEventListener('click',()=>{
	modal5.setAttribute('open','true')
})*/
cmodal1.addEventListener('click',()=>{
	modal1.removeAttribute('open')
	modaler(1);
	// document.getElementById("contenedorgeneral").style.opacity=1;
})
cmodal2.addEventListener('click',()=>{
	modal2.removeAttribute('open')
	modaler(1);
	// document.getElementById("contenedorgeneral").style.opacity=1;
})
/*cmodal3.addEventListener('click',()=>{
	modal3.removeAttribute('open')
})
cmodal4.addEventListener('click',()=>{
	modal4.removeAttribute('open')
})
/*cmodal5.addEventListener('click',()=>{
	modal5.removeAttribute('open')
})*/

const botonsubir = document.getElementById('scrolltop');

function start(){
	animate();
}

function modaler(opt){
	if(opt==0){
		body.style.overflow='hidden';
	}else{
		body.style.overflow='auto';
	}
}

botonsubir.addEventListener('click',()=>{
	window.scroll({top:0, behavior:'smooth'});
	// aparecebotonsubir();
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