<?php
header("Access-Control-Allow-Origin: https://main.d3skp8pnbu4rvc.amplifyapp.com/");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['subject']. " from " . $_POST['name'];
	$to = "visakanmathivannan@gmail.com";
	$from = $_POST['email'];

	// data

	$msg = $_POST['message'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: $from ";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );
	$data = ["sent" => true];
	echo json_encode($data);
	}
  else
	{

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>