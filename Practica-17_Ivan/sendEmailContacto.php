<?php

	$to = "sharingan90210@gmail.com";
	$subject = "Contacto del usuario - P17";
	$from = "wolverine90210@progweb.com";
	$headers = "From: " . $from;

	$nombre = $_REQUEST['nombre'] ;
	$email = $_REQUEST['email'] ;
	$telefono = $_REQUEST['telefono'];
	$estado = $_REQUEST['estados'] ;
	$colonia = $_REQUEST['colonia'];
	$intereses = $_REQUEST['intereses'];
	$intereses = implode(', ', $intereses);
	$comentarios = $_REQUEST['comentarios'];
	
	$body = "<h2>Usuario que se pone en contacto:</h2>\n".'<strong>Nombre:  </strong>'.$nombre.'<br /><strong>E-mail:  </strong>'.
	$email.'<br /><strong>Teléfono:  </strong>'.$telefono.'<br /><strong>Estado:  </strong>'.$estado.'<br /><strong>Colonia:  </strong>'.
	$colonia.'<br /><strong>Intereses:  </strong>'.$intereses.'<br /><strong>Comentarios:  </strong>'.$comentarios;

	require("includes/class.phpmailer.php");       

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


?> 
