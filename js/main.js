
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
}
}

