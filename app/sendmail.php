<?
if($_SERVER["REQUEST_METHOD"] == "POST")
{
 // Функция отправки email
 function send_mail($to, $subject, $message, $headers)
 {

   


  

  $hideinput = $_POST["hideinput"];
  $phone = $_POST["phone"];


  // $utm_source = $_POST["utm_source"];
  // $utm_medium = $_POST["utm_medium"];
  // $utm_campaign = $_POST["utm_campaign"];
  // $utm_term = $_POST["utm_term"];
  // $utm_content = $_POST["utm_content"];



  
  
  
  $to  = "1unitedcrew@gmail.com";  
  $message = "Телефон: $phone";
  if (!empty($hideinput)) {
    $message = "Телефон: $phone<br>$hideinput";
  } 

  $subject = "Заявка с сайта"; 

  
  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $from = "=?UTF-8?B?".base64_encode("1unitedcrew@gmail.com")."?= <1unitedcrew@gmail.com";
  $headers .= "From: $from\r\n";
  $headers .= "Reply-To: $email\r\n";

  $result = mail($to, $subject, $message, $headers);
} 

{
    // Отправка email
  send_mail($to, $subject, $message, $headers);      
  echo 'true'; 
}

}
?>