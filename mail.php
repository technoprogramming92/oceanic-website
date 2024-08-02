<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$contact = $_POST['contact'];
$message= $_POST['message'];
$to = "rhtrivedi92@outlook.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message . "\r\n Contact = " . $contact;
$headers = "From: `$email`" . "\r\n" ;
// "CC: somebodyelse@example.com";
if($email!=NULL) {
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>