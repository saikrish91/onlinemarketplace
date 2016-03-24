<?php   session_start();  ?>
<?php
 
 	
     if (isset($_GET["email"]))
     {
     $_SESSION['email']=$_GET["email"];
     $_SESSION['google']="set";
     
     }
     if(isset($_SESSION['email']))    {

          header("Location:productList.php");
       
       }
?>