<?php 
ini_set('display_errors', 1);
error_reporting(E_ALL);

$config = require __DIR__ . '/config.php';

$inputJSON = file_get_contents('php://input');
$cartData = json_decode($inputJSON, true);

if (!empty($cartData)) {

    $token = $config['bot_token'];
    $chat_id = $config['chat_id'];

    $txt = "<b>New Order</b>\n";
    $txt .= "----------------------\n";
    
    $totalSum = 0;

    foreach ($cartData as $index => $item) {
        $num = $index + 1;
        $title = strip_tags($item['title']);
        $price = intval($item['price']);
        $count = isset($item['count']) ? intval($item['count']) : 1;
        $sum = $price * $count;
        $totalSum += $sum;

        $txt .= "<b>$num. $title</b>\n";
        $txt .= "Count: $count\n";
        $txt .= "Subtotal: $sum$\n\n";
    }

    $txt .= "----------------------\n";
    $txt .= "<b>Total: $totalSum$</b>";

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
        echo json_encode(['status' => 'success', 'telegram_response' => json_decode($response)]);
    }
    curl_close($ch);

} else {
    echo "No cart data received";
}
?>