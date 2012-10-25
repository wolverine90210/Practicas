<?php

	$to = "sharingan90210@gmail.com";
	$subject = "Registro de usuario - P17";
	$from = "wolverine90210@progweb.com";
	$headers = "From: " . $from;

	$username = $_REQUEST['username'] ;
	$email = $_REQUEST['email'] ;
	$password = $_REQUEST['password'] ;
	
	$body = "<h2>Datos del usuario:</h2>\n".'<strong>Username:  </strong>'.$username.'<br /><strong>E-mail:  </strong>'.
	$email.'<br /><strong>Password:  </strong>'.$password;

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
