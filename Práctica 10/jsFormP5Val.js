
function validaEnvio(){

		if (document.form1.username.value.length == 0){
			alert("Debe escribir su nombre de usuario!")
			document.form1.username.focus()
			return 0;
		}
		
		var expresion = new RegExp(/^[a-zA-Z0-9_ ·¡ È… ÌÕ Û” ˙⁄ Ò—][a-zA-z0-9_ ·¡ È… ÌÕ Û” ˙⁄ Ò—]{4,15}$/);
		
		if(!expresion.test(document.form1.username.value)){
			alert("Introduzca un nombre de usuario v\u00e1lido! \nDebe comenzar con letra, n\u00famero o guion bajo; entre 4 y 15 caracteres.");
			document.form1.username.value = "";
			document.form1.username.focus();
			return 0;
		}
		
		if (document.form1.email.value.length == 0){
			alert("Debe escribir su email!")
			document.form1.email.focus()
			return 0;
		}
		
		expresion = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
		
		if(!expresion.test(document.form1.email.value)){
			alert("Introduzca un email v\u00e1lido!");
			document.form1.email.value = "";
			document.form1.email.focus();
			return 0;
		}
		
		if (document.form1.password.value.length == 0){
			alert("Debe escribir una contrase\u00f1a!")
			document.form1.password.focus()
			return 0;
		}
		
		expresion = new RegExp(/^\w{8,15}/);
		
		if(!expresion.test(document.form1.password.value)){
			alert("Introduzca una contrase\u00f1a v\u00e1lida!\nDebe tener entre 8 y 15 caracteres (n\u00fameros, letras y/o guion bajo).");
			document.form1.password.value = "";
			document.form1.pconfirm.value = "";
			document.form1.password.focus();
			return 0;
		}
		
		if(!(document.form1.password.value == document.form1.pconfirm.value)){		
			alert("Las contrase\u00f1as no coinciden!");
			document.form1.password.value = "";
			document.form1.pconfirm.value = "";
			return 0;
		}
		
		alert("Gracias por registrarse en nuestro sitio!");
		
		document.form1.submit();
}