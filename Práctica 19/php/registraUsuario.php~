<?php


//Porque la maestra dijo :P
session_start();


//Nos conectamos a la base de datos y obtenemos el usuario
require_once('p19.inc');
$conexion = new mysqli($host, $user, $pass, $bd);

if($conexion->connect_error){

	die("Por el momento no se puede acceder al gestor de la BD");

}


//Obtengo mis variables a utilizar
$idusuario = $_REQUEST["idusuario"];

//Limpiar variables a utilizar
$idusuario = $conexion -> real_escape_string($idusuario);


//Creamos la consulta/select
$consulta = "select * from usuario where idusuario=$idusuario";

//Ejecutamos el query
$result = $conexion -> query($consulta);

//Cerramos la conexion ... Ya no se necesita estar conectado.
$conexion -> close(); 

//Convierto el resultado de mi consulta a un arreglo
if($result -> num_rows == 1){

	$datos = $result -> fetch_array(MYSQLI_ASSOC);
	
}

$_SESSION["datos"] = $datos;

//var_dump($datos);

header('Location: ../usuario_completa.php');

/*
<?php
if(a>b) :
?>


html
html
html


<?php
endif;
?>

*/

?>
