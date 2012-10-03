
function validaEnvio(){

		document.getElementById("error_checkBoxes").style.display="none";
		document.getElementById("error_image").style.display="none";
		document.getElementById("error_pass").style.display="none";
		document.getElementById("error_name").style.display="none";
		document.getElementById("error_lastName").style.display="none";
		document.getElementById("error_address").style.display="none";
		document.getElementById("error_tel").style.display="none";
		document.getElementById("error_sex").style.display="none";
		document.getElementById("error_date").style.display="none";

				
		if(!(document.form2.recomendacion.checked || document.form2.interes.checked || document.form2.enlace.checked || document.form2.google.checked || document.form2.ninguna.checked)){
			//alert("Seleccione al menos una raz\u00f3n de registro!");
			document.getElementById("error_checkBoxes").style.display='block';
			return 0;
			}
			

		if(document.form2.imagen.value == ""){
			//alert("Seleccione una imagen de perfil!");
			document.getElementById("error_image").style.display='block';
			return 0;
		}
		
		expresion = new RegExp(/^\w{8,15}/);
		
		if(!expresion.test(document.form2.password.value) || document.form2.password.value == 0){
			//alert("Introduzca una contrase\u00f1a v\u00e1lida!\nDebe tener entre 8 y 15 caracteres (n\u00fameros, letras y/o guion bajo).");
			document.getElementById("error_pass").style.display='block';
			document.form2.password.focus();
			return 0;
		}
		

		
		expresion = new RegExp(/^[a-zA-Z][a-zA-Z]+(\s[a-zA-Z]+)*$/);
		
		if(!expresion.test(document.form2.nombres.value) || document.form2.nombres.value.length == 0){
			//alert("Introduzca un nombre o nombres v\u00e1lidos!");
			document.getElementById("error_name").style.display='block';
			document.form2.nombres.focus();
			return 0;
		}
		

		
		expresion = new RegExp(/^[a-zA-Z][a-zA-Z]+(\s[a-zA-Z]+)*$/);
		
		if(!expresion.test(document.form2.apellidos.value) || document.form2.apellidos.value.length == 0){
			//alert("Introduzca apellidos v\u00e1lidos!");
			document.getElementById("error_lastName").style.display='block';
			document.form2.apellidos.focus();
			return 0;
		}
		

		
		expresion = new RegExp(/^[a-zA-Z][a-zA-Z]+(\s[a-zA-Z]+)*\s[0-9]+$/);
		
		if(!expresion.test(document.form2.direccion.value) || document.form2.direccion.value.length == 0){
			//alert("Introduzca una direcci\u00f3n v\u00e1lida!");
			document.getElementById("error_address").style.display='block';
			document.form2.direccion.focus();
			return 0;
		}
		

		
		expresion = new RegExp(/^[0-9]{2,3}-? ?[0-9]{6,7}$/);
		
		if(!expresion.test(document.form2.telefono.value) || document.form2.telefono.value.length == 0){
			//alert("Introduzca un tel\u00e9fono v\u00e1lido!");
			document.getElementById("error_tel").style.display='block';
			document.form2.telefono.focus();
			return 0;
		}
		

		
		
		if(document.form2.fecha.value.length == 0){
			//alert("Introduzca una fecha de nacimiento!");
			document.getElementById("error_date").style.display='block';
			document.form2.fecha.focus();
			return 0;
		}
		
		
		if(!(document.form2.sexo[1].checked || document.form2.sexo[0].checked)){
			//alert("Seleccione su sexo!");
			document.getElementById("error_sex").style.display='block';
			return 0;
			}
			
		
		document.form2.submit();
		
}




var i = 1;

function otherTel(){

	var tField = document.createElement("input");

	tField.type = "tel";
	i++;
	tField.id = "telefono"+i;
	tField.name = "otro_telefono";
	tField.placeholder = "Escriba otro teléfono";
	tField.style.marginLeft = "80px";

	var tel = document.getElementById("telefono1");

	var br = document.createElement("br");

	tel.parentNode.insertBefore(br, document.getElementById("otro_tel"));

	tel.parentNode.insertBefore(tField, document.getElementById("otro_tel"));

	var button = document.createElement("input");

	button.type = "button";
	button.id = "delete";
	button.name = "delete";
	button.value = "Eliminar campo";
	button.style.marginRight = "10px";
	button.style.marginLeft = "10px";
	button.setAttribute("onClick", "deleteField()");

	tel.parentNode.insertBefore(button, document.getElementById("otro_tel"));

}



function deleteField(){

	//var tel = document.getElementById("telefono"+i);
	//tel.parentNode.removeChild(tel);
	
	var bDelete = document.getElementById("delete");
	bDelete.parentNode.removeChild(bDelete.previousSibling);
	bDelete.parentNode.removeChild(bDelete.previousSibling);
	
	bDelete.parentNode.removeChild(bDelete);

}

