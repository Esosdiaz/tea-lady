
var validar = function(){
 var nombre = document.getElementById("name").value;
 var apellido = document.getElementById("lastName").value;
 var correo = document.getElementById("mail").value;
 var direccion = document.getElementById("adress").value;
 var telefono = document.getElementById("phone").value;
 var selector = document.getElementById("selector")
 var opcion = selector.options[selector.selectedIndex];
 var caja = document.getElementById("check")
 
if (nombre == "" || apellido == "" || correo == "" || direccion == "" || telefono == "" || opcion.value == 0){
	alert ("Por favor, rellene todos los campos");
} else if (caja.checked === false){
	alert ("Debe suscribirse a nuestro newsletter")
} else {
	var nombreDiv = document.createElement("div")
	var nombreInput = document.createTextNode("Nombre: " + nombre)
	nombreDiv.appendChild(nombreInput);
	document.getElementById("clientes").appendChild(nombreDiv);

	var apellidoDiv = document.createElement("div");
	var apellidoInput = document.createTextNode("Apellido: " + apellido);
	apellidoDiv.appendChild(apellidoInput);
	document.getElementById("clientes").appendChild(apellidoDiv);

	var correoDiv = document.createElement("div");
	var correoInput = document.createTextNode("Correo Electrónico: " + correo);
	correoDiv.appendChild(correoInput);
	document.getElementById("clientes").appendChild(correoDiv);

	var direccionDiv = document.createElement("div");
	var direccionInput = document.createTextNode("Direccion: " + direccion);
	direccionDiv.appendChild(direccionInput);
	document.getElementById("clientes").appendChild(direccionDiv);

	var telefonoDiv = document.createElement("div");
	var telefonoInput = document.createTextNode("Número Telefónico: " + telefono);
	telefonoDiv.appendChild(telefonoInput);
	document.getElementById("clientes").appendChild(telefonoDiv);

	var opcionDiv = document.createElement("div");
	var opcionInput = document.createTextNode(opcion.text)
	opcionDiv.appendChild(opcionInput);
	document.getElementById("clientes").appendChild(opcionDiv);
}
}

