<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $to = "tescodigitals@gmail.com";
  $subject = "New Contact Form Enquiry";

  $fullname = $_POST['fullname'] ?? '';
  $email    = $_POST['email'] ?? '';
  $mobile   = $_POST['mobile'] ?? '';
  $company  = $_POST['company'] ?? '';
  $service  = $_POST['service'] ?? '';
  $message  = $_POST['message'] ?? '';

  $body = "New Enquiry Received\n\n";
  $body .= "Name: $fullname\n";
  $body .= "Email: $email\n";
  $body .= "Mobile: $mobile\n";
  $body .= "Company: $company\n";
  $body .= "Service: $service\n\n";
  $body .= "Message:\n$message";

  $headers = "From: $email\r\nReply-To: $email\r\n";

  if (mail($to, $subject, $body, $headers)) {
    header("Location: thank-you.html");
    exit;
  } else {
    echo "Mail sending failed.";
  }
}
?>
