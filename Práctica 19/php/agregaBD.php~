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
$razones_registro = $_REQUEST["razones"];
$razones_registro = implode(', ', $razones_registro);
$path_image = $_REQUEST["imagen"];
$nombres = $_REQUEST["nombres"];
$apellidos = $_REQUEST["apellidos"];
$direccion = $_REQUEST["direccion"];
$telefono = $_REQUEST["telefono"];
$fecha_nac = $_REQUEST["fecha"];
$sexo = $_REQUEST["sexo"];
$iduser = $_REQUEST["idusuario"];
$usuario = $_REQUEST['usuario'];
$email = $_REQUEST['email'];


//Limpiar variables a utilizar
$razones_registro = $conexion -> real_escape_string($razones_registro);
$path_image = $conexion -> real_escape_string($path_image);
$nombres = $conexion -> real_escape_string($nombres);
$apellidos = $conexion -> real_escape_string($apellidos);
$direccion = $conexion -> real_escape_string($direccion);
$telefono = $conexion -> real_escape_string($telefono);
$sexo = $conexion -> real_escape_string($sexo);
$iduser = $conexion -> real_escape_string($iduser);
$usuario = $conexion -> real_escape_string($usuario);
$email = $conexion -> real_escape_string($email);

$nombre = $nombres." ".$apellidos;
$nombre = $conexion -> real_escape_string($nombre);

//Validaciones para fechas

$dia = substr($fecha_nac, 0, 2);
$mes = substr($fecha_nac, 3, 2);
$anio = substr($fecha_nac, 6, 4);

if(substr($fecha_nac, 1, 1) == '/'){
	$dia = substr($fecha_nac, 0, 1); 
	$dia = '0'.$dia;
	$mes = substr($fecha_nac, 2, 2);
	$anio = substr($fecha_nac, 5, 4);
	}

if(substr($fecha_nac, 3, 1) == '/'){
	$mes = substr($fecha_nac, 2, 1);
	$mes = '0'.$mes;
	$dia = substr($fecha_nac, 0, 2);
	$anio = substr($fecha_nac, 5, 4);
	}
		
if(substr($fecha_nac, 1, 1) == '/' && substr($fecha_nac, 2, 1) == '/'){
	$dia = substr($fecha_nac, 0, 1);
	$mes = substr($fecha_nac, 2, 1); 
	$anio = substr($fecha_nac, 4, 4); 
}
		

$fecha_nac = $anio."-".$mes."-".$dia;
$fecha_nac = $conexion -> real_escape_string($fecha_nac);



//VALIDANDO CAMPOS ANTES HACER "INSERT" EN LA BD:

$flag = true;

//NO SIRVE UN CARAJO! D:

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
$query = "update usuario set razones_registro='$razones_registro', path_image='$path_image', nombre='$nombre', direccion='$direccion', telefono='$telefono', fecha_nac='$fecha_nac', sexo='$sexo' where idusuario=$iduser";

//Ejecutamos el query
$conexion -> query($query);

//Cerramos la conexion ... Ya no se necesita estar conectado.
$conexion -> close(); 


echo "<pre>";
echo "<br /><h1><p>"."     ".htmlentities("!")."<strong>Registro exitoso!</strong></p></h1>";
echo "</pre>";


//ENVÍO DE E-MAIL CON DATOS ... Los datos son enviados a mi correo, guardados los archivos en el servidor de alanturing sí llegan los correos.

	$to = "sharingan90210@gmail.com";
	$subject = "Registro de usuario en BD y envio de correo - P19";
	$from = "wolverine90210@progweb.com";
	$headers = "From: " . $from;
	
	$body = "<h2>Datos del usuario:</h2>\n".'<strong>Username:  </strong>'.$usuario.'<br /><strong>E-mail:  </strong>'.
	$email.'<br /><strong>Razones de registro:  </strong>'.$razones_registro.'<br /><strong>Imagen de avatar:  </strong>'.
	$path_image.'<br /><strong>Nombre:  </strong>'.$nombre.'<br /><strong>Direccion:  </strong>'.
	$direccion.'<br /><strong>Telefono:  </strong>'.$telefono.'<br /><strong>Fecha de nacimiento:  </strong>'.
	$fecha_nac.'<br /><strong>Sexo:  </strong>'.$sexo;

	require("../includes/class.phpmailer.php");       

	$mail = new PHPMailer();

	$mail->IsSMTP();  // telling the class to use SMTP
	#$mail->Host     = "smtp.example.com"; // SMTP server
	$mail->IsHTML(true); 

	$mail->From     = $from;
	$mail->AddAddress($to);
	$mail->Subject  = $subject;
	$mail->Body     = $body;
	
	$mail->WordWrap = 50;

	if(!$mail->Send()){
	  echo 'Message was not sent.';
	  echo 'Mailer error: ' . $mail->ErrorInfo;
	} else{
	  	echo '<br /><h3>Su mensaje ha sido enviado a ','<em>',$to,'</em> exitosamente.</h3>';
	}


}



?>
