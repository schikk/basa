<?php
    $to = 'schikk@ukr.net';

    $subject = 'Баса - заявка';

    $headers = "From: BASA\r\n";
    $headers .= "Reply-To: BASA\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";

    $message = '<html><body>';
    $message .= '<table rules="all" style="border-color: #eee; border-radius: 2px; margin: 10px;" cellpadding="10">';
    $message .= "<tr><td style='background: #111815fc; color: #fff; border-radius: 2px; padding: 15px 20px; font-size: 20px;' colspan='2'><strong>BASA.CITY</strong></td></tr>";
    $message .= "<tr style='background: #fefefe;'><td><strong>Ім'я</strong> </td><td>" . strip_tags($_POST['user-name']) . "</td></tr>";
    $message .= "<tr style='background: #fefefe;'><td><strong>Телефон</strong> </td><td>" . strip_tags($_POST['user-tel']) . "</td></tr>";
    $message .= "<tr style='background: #fefefe;'><td><strong>Email</strong> </td><td>" . strip_tags($_POST['user-email']) . "</td></tr>";         
    $message .= "</table>";
    $message .= '</body></html>';
				
    if ( $_POST["required"] == '' ){
                $sentMail = @mail($to, $subject, $message, $headers);
            }
?>