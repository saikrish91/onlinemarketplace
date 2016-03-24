<html>
<body>
<?php
 session_start();   
if(isset($_SESSION['google'])) {
              session_destroy();
            echo "<script>document.location.href = 'https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://www.saikrishnanonline.com/onlinemarketplace/'</script>";
       
       } 
       session_destroy();
       echo "<script>document.location.href = 'http://www.saikrishnanonline.com/onlinemarketplace/'</script>";
       
//header("Location: index.html"); 
?>

</body>
</html>