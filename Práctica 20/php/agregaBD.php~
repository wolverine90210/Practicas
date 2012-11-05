<?php

//Porque la maestra dijo :P
session_start();


//Nos conectamos a la base de datos y obtenemos el usuario
require_once('concursos.inc');
$conexion = new mysqli($host, $user, $pass, $bd);

if($conexion->connect_error){

	die("Por el momento no se puede acceder al gestor de la BD");

}


//Obtengo mis variables a utilizar
$nombreConcurso = $_REQUEST["nombreConcurso"];
$hashTwitter = $_REQUEST["hashTwitter"];
$dificultad = $_REQUEST["dificultad"];
$categoria = $_REQUEST["categoria"];
$fechaInicial = $_REQUEST["fechaInicial"];
$fechaFinal = $_REQUEST["fechaFinal"];
$fechaCreacion = $_REQUEST["fechaCreacion"];
$img = $_REQUEST["cargarImagen"];
$usuario = $_REQUEST['user'];
$contenido = $_REQUEST['contenido'];


//Limpiar variables a utilizar
$nombreConcurso = $conexion -> real_escape_string($nombreConcurso);
$hashTwitter = $conexion -> real_escape_string($hashTwitter);
$ndificultad = $conexion -> real_escape_string($dificultad);
$categoria = $conexion -> real_escape_string($categoria);
$fechaInicial = $conexion -> real_escape_string($fechaInicial);
$fechaFinal = $conexion -> real_escape_string($fechaFinal);
$fechaCreacion = $conexion -> real_escape_string($fechaCreacion);
$img = $conexion -> real_escape_string($img);
$usuario = $conexion -> real_escape_string($usuario);
$contenido = $conexion -> real_escape_string($contenido);


$dia = substr($fechaInicial, 0, 2);
$mes = substr($fechaInicial, 3, 2);
$anio = substr($fechaInicial, 6, 4);

$fechaInicial = $anio."-".$mes."-".$dia;
$fechaInicial = $conexion -> real_escape_string($fechaInicial);


$dia = substr($fechaFinal, 0, 2);
$mes = substr($fechaFinal, 3, 2);
$anio = substr($fechaFinal, 6, 4);

$fechaFinal = $anio."-".$mes."-".$dia;
$fechaFinal = $conexion -> real_escape_string($fechaFinal);


$dia = substr($fechaCreacion, 0, 2);
$mes = substr($fechaCreacion, 3, 2);
$anio = substr($fechaCreacion, 6, 4);

$fechaCreacion = $anio."-".$mes."-".$dia;
$fechaCreacion = $conexion -> real_escape_string($fechaCreacion);


//VALIDANDO CAMPOS ANTES HACER "INSERT" EN LA BD:

$flag = true;

//NO ME FUNCIONA UN CARAJO! D:

/*
//Tenemos una lista con las extensiones que aceptaremos
$extensionesPermitidas = array("jpg", "jpeg", "gif", "png");

//Obtenemos la extensión del archivo
$extension = end(explode(".", $_FILES["imagen"]["name"]));

//Validamos el tipo de archivo, el tamaño en bytes y que la extensión sea válida
if ((($_FILES["imagen"]["type"] == "image/gif")
   || ($_FILES["imagen"]["type"] == "image/jpg")
   || ($_FILES["imagen"]["type"] == "image/png")
   || ($_FILES["imagen"]["type"] == "image/jpeg"))
&& ($_FILES["imagen"]["size"] < 20000)
&& in_array($extension, $extensionesPermitidas))
{
  //Si no hubo un error al subir el archivo temporalmente
  if ($_FILES["imagen"]["error"] > 0)
  {
     echo "Return Code: " . $_FILES["imagen"]["error"] . "<br />";
  }
  else
  {
    //Si el archivo ya existe se muestra el mensaje de error
    if (file_exists("upload/" . $_FILES["imagen"]["name"]))
    {
       echo $_FILES["imagen"]["name"] . " already exists. ";
    }
    else
    {
        //Se mueve el archivo de su ruta temporal a una ruta establecida
        move_uploaded_file($_FILES["imagen"]["tmp_name"],
                           "upload/" . $_FILES["imagen"]["name"]);
        echo "Stored in: " . "upload/" . $_FILES["imagen"]["name"];
    }
  }
}
else
{
  echo "<h1>Invalid file!</h1>";
  $flag = false;
}*/



if($flag != false){

//Creamos la consulta/select
$query = "insert into concurso values ( null, '$nombreConcurso', '$hashTwitter', '$dificultad', '$categoria', '$fechaCreacion', '$fechaInicial', '$fechaFinal', '$usuario', '$contenido', '$img' )";

//Ejecutamos el query
$conexion -> query($query);

//Cerramos la conexion ... Ya no se necesita estar conectado.
$conexion -> close(); 


echo "<pre>";
echo "<br /><h1><p>"."     ".htmlentities("!")."<strong>Registro del concurso exitoso!</strong></p></h1>";
echo "</pre>";


}



?>
