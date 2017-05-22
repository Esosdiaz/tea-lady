var formulario = document.getElementsByName("formulario")[0];
var elementos = formulario.elements;
var boton = document.getElementById("btn");

var validarNombre = function(){
	if(formulario.nombre.value == 0){
		alert("Ingrese su nombre");
	};
}

var validar = function(){
	validarNombre();
}
formulario.addEventListener("submit", validar);	