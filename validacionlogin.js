var formulario;
function iniciar() {
	var boton = document.getElementById("enviar");
	boton.addEventListener("click", enviarformulario);
	formulario = document.querySelector("form[name='informacion']");
	formulario.addEventListener("invalid", validacion, true);
}
function validacion(evento) {
	var elemento = evento.target;
	elemento.style.background = "#FFDDDD";
}
function enviarformulario() {
	var valido = formulario.checkValidity();
	if (valido) {
		formulario.submit();
 
	}
window.addEventListener("load", iniciar);
}

// </head>
// <body>
// 	<section>
// 		<form name="informacion" method="get" action="procesar.php">
// 		<p><label>Apodo: <input pattern="[A-Za-z]{3,}" name="apodo" id="apodo" maxlength="10" required></label></p>
// 		<p><label>Correo: <input type="email" name="correo" id="correo" required></label></p>
// 		<p><button type="button" id="enviar">Registrarse</button></p> 
//  </form> 
//  </section> 
// </body> 
// </html>

