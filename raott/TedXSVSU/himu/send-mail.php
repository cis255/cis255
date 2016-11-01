

<?

$name=$_POST['name'];
$Email=$_POST['email'];
$website=$_POST['url'];
$message=$_POST['message'];


    
    $body .= "Name: " . $name . "\n"; 
    $body .= "Email: " . $Email . "\n"; 
    $body .= "Website: " . $website . "\n"; 
    $body .= "Message: " . $message . "\n"; 

    //replace with your email
    mail("test@email.com","New email",$body); 

  
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script>alert("Your message has been sent successfully. We will contact you shortly.");</script>
<meta HTTP-EQUIV="REFRESH" content="0; url=index.html"> 

</head>