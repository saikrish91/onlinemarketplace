<?php
extract( $_POST);
$servername = "localhost";
$username = "saikris1_user";
$password = "onlineMarketPlace";
$dbname = "saikris1_onlineMarketPlace";
$conn = new mysqli($servername, $username, $password, $dbname);	
$sql = "SELECT * FROM product_info WHERE title='".$productname."'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$productid= $row["productid"];
    	}
}

$sql = "INSERT INTO rating VALUES('".$emailId."','".$productid."','0','0','".$timestamp."','1','0')";

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$result = $conn->query($sql);


$conn->close();

?>