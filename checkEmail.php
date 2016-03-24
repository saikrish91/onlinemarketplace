<?php   session_start();  ?>
<?php
extract( $_POST);
$servername = "localhost";
$username = "saikris1_user";
$password = "onlineMarketPlace";
$dbname = "saikris1_onlineMarketPlace";
$conn = new mysqli($servername, $username, $password, $dbname);
$sql = "SELECT * FROM USER_DATA WHERE EMAIL_ID = '".$emailId."'";
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
$_SESSION['email']=$emailId;
echo "true";
}
else {
$sql = "INSERT INTO `USER_DATA` VALUES ('".$emailId."','".$fname."','".$lname."','".$password1."')";
$result = $conn->query($sql);
$_SESSION['email']=$emailId;

echo "false";
}
$conn->close();
?>