var validarNombre = function(nombre){
if (nombre == ""){
alert("Ingrese su nombre");
}
};

var validarApellido = function(apellido){
if (apellido == ""){
alert("Ingrese su apellido");
}
};

var validarCorreo = function(correo){
if (correo == ""){
alert("Ingrese su correo electrónico");
}
};

var validarDireccion = function(direccion){
if (direccion == ""){
alert("Ingrese su dirección");
}
};

var validar = function(){
 var nombre = document.getElementById("name").value;
 var apellido = document.getElementById("lastName").value;
 var correo = document.getElementById("mail").value;
 var direccion = document.getElementById("adress").value;
 var telefono = document.getElementById("phone").value;
 
validarNombre(nombre);
validarApellido(apellido);
validarCorreo(correo);
validarDireccion(telefono);
};



/*var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastName").value;
var correo = document.getElementById("mail").value;
var direccion = document.getElementById("adress").value;
var telefono = document.getElementById("phone").value;

var validarNombre = function(){
	if (nombre == ""){
		alert("Ingrese su nombre");
	}
};

var validarApellido = function(){
	if (apellido == ""){
		alert("Ingrese su apellido");
	}
};

var validarCorreo = function(){
	if (correo == ""){
		alert("Ingrese su correo electrónico");
	}
};

var validarDireccion = function(){
	if (direccion == ""){
		alert("Ingrese su dirección");
	}
};

var validar = function(){
	validarNombre();
	validarApellido();
	validarCorreo();
	validarDireccion();
};
*/
