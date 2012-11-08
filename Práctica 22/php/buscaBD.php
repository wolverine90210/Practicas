<?php

//Porque la maestra dijo :P
session_start();

$concursos = $_SESSION['datos'];

//Nos conectamos a la base de datos y obtenemos el usuario
require_once('concursos.inc');
$conexion = new mysqli($host, $user, $pass, $bd);

if($conexion->connect_error){

	die("Por el momento no se puede acceder al gestor de la BD");

}


$myquery = 'select idconcurso, nombre, hashtag, dificultad, categoria, fechaAlta, fechaInicio, fechaFin, descripcion, path_image, creador from concurso';

$resultados = $conexion -> query($myquery);

//Convierto el resultado de mi consulta a un arreglo
	if($resultados -> num_rows >= 1){
		//Por cada fila obtengo un arreglo
		while($fila = $resultados -> fetch_assoc())
			$datos[] = $fila;
	}
	



//Obtengo mis variables a utilizar
$texto = $_REQUEST['texto'];


//Limpiar variables a utilizar
$texto = $conexion -> real_escape_string($texto);



//bandera para verificar si se encontró un concurso
$flag = false;


//verificamos si el texto está contenido en el valor de algún campo
for($i=0; $i<count($datos); $i++){

	if(strstr($datos[$i]['idconcurso'], $texto) || strstr($datos[$i]['nombre'], $texto) || strstr($datos[$i]['hashtag'], $texto) || 
	strstr($datos[$i]['dificultad'], $texto) || strstr($datos[$i]['categoria'], $texto) || strstr($datos[$i]['fechaAlta'], $texto) || 
	strstr($datos[$i]['fechaInicio'], $texto) || strstr($datos[$i]['fechaFin'], $texto) || strstr($datos[$i]['descripcion'], $texto) || 
	strstr($datos[$i]['path_image'], $texto) || strstr($datos[$i]['creador'], $texto)){
	
		//Recorro mi arreglo para dibujar la tabla
		echo '<br /><br /><table border="2">';
		echo '<caption><strong>Datos del concurso encontrado</strong></caption>';
	
		//Obtener los titulos
		$fila = $datos[0];
		$titulos = array_keys($fila);
		echo '<thead><tr>';
		foreach($titulos as $th)
			echo '<th>',$th,'</th>';
		echo '</tr></thead>';
		

		echo '<tbody>';
		//Por cada fila
		foreach($datos[$i] as $valor){

				echo '<td>',$valor,'</td>'; 

		}
		
		echo '</tbody>';
		echo '</table>';
		
		$flag = true;
	
		}
		

}

if($flag == false)
	echo '<br /><h2><strong>No se encontr&oacute el concurso con ese dato...</strong></h2>';
	
//echo "<br />&nbsp&nbsp&nbsp<input type='button' value='Regresar' onClick='history.back()' />";

echo '<br /><br /><strong><a style="text-decoration: none; padding: .1em .5em; margin: 1em 0; background: #EEE;border: 1px groove #CCC;" href=' . $_SERVER['HTTP_REFERER']. '>Regresar</strong></a>';
	
//header("Location:  {$_SERVER['HTTP_REFERER']}");



?>
