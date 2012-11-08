<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8" />
	<meta name="description" content="Buscar un concurso" />
	<meta name="author" content="Iván Antonio Corona Zárate" />
	
	<title>Buscar un concurso</title>
</head>

<body >
	
	<h1>Buscar un concurso</h1>
	<div style="width:600px;">
		<fieldset>
		<legend>Búsqueda</legend>
			<form name="formBusca" method="GET" action="php/buscaBD.php">
	
			<label for="texto" ><strong>Ingresa el texto a buscar de un concurso: </strong></label>
			<input type="text" name="texto" id="texto" />
		
			<button type="submit">Buscar</button>
	
			</form>
		</fieldset>
	</div>
	
	<?php
	
	//Porque la maestra dijo
	session_start();

	//Conectarse a la base de datos
	require_once("php/concursos.inc");
	$con = new mysqli($host, $user, $pass, $bd);
	
	//Validar que no genere error la conexión
	if($con -> connect_error)
		die("Por el momento no se puede acceder al gestor de la base de datos");


	//Creo la consulta
	//$mi_query = "select idconcurso as 'ID concurso' from concurso";
	
	$mi_query = "select idconcurso as 'ID de concurso', nombre as 'Nombre', hashtag as 'Hashtag (Twitter)', dificultad as 'Dificultad',  categoria as 'Categoría', fechaAlta as 'Fecha de alta', fechaInicio as 'Fecha de inicio', fechaFin as 'Fecha de fin', descripcion as 'Descripción', path_image as 'Path de imagen', creador as 'Creador' from concurso";

	//Ejecuto mi consulta
	$result = $con -> query($mi_query);

	//Cierro la conexión
	$con -> close();

	
	//Convierto el resultado de mi consulta a un arreglo
	if($result -> num_rows >= 1){
		//Por cada fila obtengo un arreglo
		while($fila = $result -> fetch_assoc())
			$datos[] = $fila;
	}
	
	
	$concursos = $datos;
	
	//Recorro mi arreglo para dibujar la tabla
	echo '<br /><br /><table border="2">';
	echo '<caption><strong>Datos de los concursos</strong></caption>';
	
	//Obtener los titulos
	$fila = $concursos[0];
	$titulos = array_keys($fila);
	echo '<thead><tr>';
	foreach($titulos as $th)
		echo '<th>',$th,'</th>';
	echo '</tr></thead>';
		

	echo '<tbody>';
	
	//Por cada fila
	foreach($concursos as $arr){
		echo '<tr>';
		//Todos los campos de cada fila
		foreach($arr as $valor)
			echo '<td>',$valor,'</td>'; 
		echo '</tr>';
	}
	echo '</tbody>';
	echo '</table>';
	
	$_SESSION['datos'] = $datos;

	
	?>
	
</body>
</html>
