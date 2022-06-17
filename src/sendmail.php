<?php

    // Подключаем библиотеку PHPMailer
    use PHPMailer\PHPMailer\PHPMailer;
    require 'phpmailer/PHPMailer.php';
    
    // Создаем письмо
    $mail = new PHPMailer(true);
    $mail->setFrom('AIVP', 'AIVP'); // от кого (email и имя)
    $mail->addAddress('test@dewpoint.by', 'AIVP');  // кому (email и имя)
    $mail->Subject = 'Тест';                         // тема письма
    // html текст письма
    $mail->msgHTML("<html><body>
                    <h1>AIVP TEST</h1>
                    </html></body>");
    // Отправляем
    if ($mail->send()) {
        echo 'Письмо отправлено!';
    } else {
        echo 'Ошибка: ' . $mail->ErrorInfo;
    }  

?>