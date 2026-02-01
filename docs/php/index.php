<?php 
ini_set('display_errors', 1);
error_reporting(E_ALL);

$config = require __DIR__ . '/config.php';

if($_POST) {
    $name = $_POST['name'] ?? 'Не вказано';
    $email = $_POST['mail'] ?? 'Не вказано';
    $subject = $_POST['subj'] ?? 'Не вказано';
    $companyName = $_POST['compName'] ?? 'Не вказано';
    $message = $_POST['message'] ?? 'Не вказано';

    $token = $config['bot_token'];
    $chat_id = $config['chat_id'];

    $txt = "<b>Your details \xE2\x9C\x89</b>\n";
    $txt .= "<b>Name:</b> " . strip_tags($name) . "\n";
    $txt .= "<b>Email:</b> " . strip_tags($email) . "\n";
    $txt .= "<b>Subject:</b> " . strip_tags($subject) . "\n";
    $txt .= "<b>Company name:</b> " . strip_tags($companyName) . "\n";
    $txt .= "<b>Message:</b> " . strip_tags($message) . "\n";
    $txt .= "----------------------\n";
    $txt .= "<b>Application sent</b>";

    $data = [
        'chat_id' => $chat_id,
        'text' => $txt,
        'parse_mode' => 'HTML'
    ];

    $ch = curl_init("https://api.telegram.org/bot" . $token . "/sendMessage");
    
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);     
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'Error cURL: ' . curl_error($ch);
    } else {
        echo $response;
    }
    curl_close($ch);
} else {
    echo "No POST data received";
}
?>