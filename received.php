<?php

//? Form variables
$userName = $_POST['username'];
$userEmail = $_POST['useremail'];
$userService = $_POST['userservice'] ?? "";
$userMessage = $_POST['usermessage'];
$date = date("m/d/Y");
$time = date("h:i:s A");
$imageUrl = 'https://drive.google.com/thumbnail?id=126zx-dWPBE4OfD6wRfDECURmYI01bt52';

//? Multiple recipients are separated by comma
$to = $userName. '<'. $userEmail . '>'; 

//? Subject
$subject = 'From SettleInSpain.com';

//? Message
$message = '
<html>
<head>
  <style>
    a img: hover {
      opacity: 0.9;
    }
  </style>
</head>
<body style="color: hsl(225, 35%, 10%); font-size: 1.1rem">
  <p style="font-weight: bold; font-size: 1.25rem; padding-bottom: 1.5rem">Dear ' . $userName . ',</p>
  <p style="font-weight: normal">We have received your message and will get back to you shortly. </p>
  <p style="font-weight: bold; padding-top: 1.5rem">Thank you.</p>
  <a href="https://www.settleinspain.com" target="_blank"> <img style="border-radius: 0.15rem" width="95" height="95"; transition: opacity 500ms;  :hover{opacity: 0.9};" src= ' .$imageUrl. '></a>
  <p style="margin: 2rem 0; width: 100%; border-bottom: 3px solid hsl(225, 35%, 10%)"></p>
   <p style="font-weight: normal"><span style="font-weight: bold">Name</span>: ' . $userName .' </p>
   <p style="font-weight: normal"><span style="font-weight: bold">Email</span>: ' . $userEmail .' </p>
   <p style="font-weight: normal"><span style="font-weight: bold">Service</span>: ' . $userService .' </p>
   <p style="font-weight: normal"><span style="font-weight: bold">Query</span>: ' . $userMessage .' </p>
   <p style="font-weight: normal"><span style="font-weight: bold">Timestamp</span>: '. $date . ', ' . $time .' CET</p>
  </body>
</html>
';

//? To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

//? Additional headers
$headers[] = 'To:' . $userName . ' <'. $userEmail .'>';
$headers[] = 'From: SettleInSpain.com <info@settleinspain.com>';
//?$headers[] = 'Cc: name@gmail.com';
$headers[] = 'Bcc: daniel.costa.rosenthal@gmail.com';

//? Mail it
mail($to, $subject, $message, implode("\r\n", $headers));

//? Once email has been sent user is redirected to this reply page
header('location: reply.html');

?>
