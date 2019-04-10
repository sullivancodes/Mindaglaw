<?php 
if(isset($_POST['submit'])){
    $to = "info@mindaglaw.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Mindaglaw.com";
    $subject2 = "Copy of your form submission";
    $message = "Name : " . $name . "\n" . "Subject: " . $_POST['subject'] . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . "\n" . "Subject: " . $_POST['subject'] . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); 
    header('Location: index.html');
	exit;
    }

?>