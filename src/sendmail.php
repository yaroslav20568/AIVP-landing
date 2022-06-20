<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
	use PHPMailer\PHPMailer\SMTP;

    require "phpmailer/Exception.php";
    require "phpmailer/PHPMailer.php";
	require "phpmailer/SMTP.php";

	$mail = new PHPMailer();
	$mail->CharSet = "UTF-8";
	$mail->isSMTP();
	$mail->Host   = 'smtp.mail.ru'; //Адрес SMTP сервера
	$mail->SMTPAuth   = true;
	$mail->Username   = '*************@***.by'; // ваше имя пользователя
	$mail->Password   = '***********'; // ваш пароль
	$mail->SMTPSecure = 'ssl'; // шифрование ssl
	$mail->Port       = 465; // порт подключения
	$mail->SMTPDebug = 4;
	
	$elementsForm = [];

	foreach ($_POST as $key => $value) {
		$elementsForm[$key] = $value;
	}

	$mail->setFrom('*************@***.by', $_POST["fio"]); // от кого
	$mail->addAddress('info@aivp.io'); // кому

	$mail->Subject = $_POST["addinfo"] ? "Стать партнёром" : "Свяжитесь с нами";

	$body = "";
	foreach ($_POST as $key => $value)
		if($key == 'fio') {
			$body.='<div><b>ФИО:</b> '.$value.'</div>';
		} else if($key == 'company') {
			$body.='<div><b>Компания:</b> '.$value.'</div>';
		} else if($key == 'email') {
			$body.='<div><b>Email:</b> '.$value.'</div>';
		} else if($key == 'phone') {
			$body.='<div><b>Телефон:</b> '.$value.'</div>';
		} else if($key == 'addinfo') {
			$body.='<div><b>Дополнительная информация:</b> '.$value.'</div>';
		}
		
		
	$mail->Body = $body;
	$mail->IsHTML(true); 

	if ($mail->send()) {
		echo 'Письмо отправлено!';
	} else {
		echo 'Ошибка: ' . $mail->ErrorInfo;
	}

?>