
function validaEnvio(){

				
		if(!(document.form2.recomendacion.checked || document.form2.interes.checked || document.form2.enlace.checked || document.form2.google.checked || document.form2.ninguna.checked)){
			alert("Seleccione al menos una raz\u00f3n de registro!");
			return 0;
			}
			

		if(document.form2.imagen.value == ""){
			alert("Seleccione una imagen de perfil!");
			return 0;
		}
		
		expresion = new RegExp(/^\w{8,15}/);
		
		if(!expresion.test(document.form2.password.value)){
			alert("Introduzca una contrase\u00f1a v\u00e1lida!\nDebe tener entre 8 y 15 caracteres (n\u00fameros, letras y/o guion bajo).");
			document.form2.password.value = "";
			document.form2.password.focus();
			return 0;
		}
		
		if (document.form2.nombres.value.length == 0){
			alert("Debe escribir un nombre o nombres!")
			document.form2.nombres.focus()
			return 0;
		}
		
		expresion = new RegExp(/^[a-zA-Z][a-zA-Z]+(\s[a-zA-Z]+)*$/);
		
		if(!expresion.test(document.form2.nombres.value)){
			alert("Introduzca un nombre o nombres v\u00e1lidos!");
			document.form2.nombres.value = "";
			document.form2.nombres.focus();
			return 0;
		}
		
		if (document.form2.apellidos.value.length == 0){
			alert("Debe escribir sus apellidos")
			document.form2.apellidos.focus()
			return 0;
		}
		
		expresion = new RegExp(/^[a-zA-Z][a-zA-Z]+(\s[a-zA-Z]+)*$/);
		
		if(!expresion.test(document.form2.apellidos.value)){
			alert("Introduzca apellidos v\u00e1lidos!");
			document.form2.apellidos.value = "";
			document.form2.apellidos.focus();
			return 0;
		}
		
		if (document.form2.direccion.value.length == 0){
			alert("Debe escribir una direcci\u00f3n!")
			document.form2.direccion.focus()
			return 0;
		}
		
		expresion = new RegExp(/^[a-zA-Z][a-zA-Z]+(\s[a-zA-Z]+)*\s[0-9]+$/);
		
		if(!expresion.test(document.form2.direccion.value)){
			alert("Introduzca una direcci\u00f3n v\u00e1lida!");
			document.form2.direccion.value = "";
			document.form2.direccion.focus();
			return 0;
		}
		
		if (document.form2.telefono.value.length == 0){
			alert("Debe escribir un tel\u00e9fono!")
			document.form2.telefono.focus()
			return 0;
		}
		
		expresion = new RegExp(/^[0-9]{2,3}-? ?[0-9]{6,7}$/);
		
		if(!expresion.test(document.form2.telefono.value)){
			alert("Introduzca un tel\u00e9fono v\u00e1lido!");
			document.form2.telefono.value = "";
			document.form2.telefono.focus();
			return 0;
		}
		
		if (document.form2.f_nac.value.length == 0){
			alert("Debe escribir una fecha de nacimiento!")
			document.form2.f_nac.focus()
			return 0;
		}
		
		expresion = new RegExp(/^(0[1-9]|1\d|2\d|3[1-2])\/(0[1-9]|1[0-2])\/\d{4}$/);
		
		if(!expresion.test(document.form2.f_nac.value)){
			alert("Introduzca una fecha de nacimiento v\u00e1lida!");
			document.form2.f_nac.value = "";
			document.form2.f_nac.focus();
			return 0;
		}
		
		if(!(document.form2.sexo[1].checked || document.form2.sexo[0].checked)){
			alert("Seleccione su sexo!");
			return 0;
			}
		
		
		
		alert("Gracias por registrarse en nuestro sitio!");
		
		document.form2.submit();
}