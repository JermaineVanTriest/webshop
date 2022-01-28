<?php

function index($view)
{
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}

 
function checkEmail()
{
    $email = json_decode(file_get_contents("php://input"), true);
    $sql = "SELECT email FROM users where EMAIL = '" . $email['email'] . "'";
    $res = query($sql);
    $mail = $res->fetchAll(PDO::FETCH_CLASS);
    if ($users) {
        echo json_encode([
            'success'   => true,
            'message'    => $mail,
        ]);
    } 
}
function submitForm()
{
    $userinfo = json_decode(file_get_contents("php://input"), true);
    $userinfo['password'] = password_hash($userinfo['password'], PASSWORD_DEFAULT);
    insert($userinfo, 'users');
    $_SESSION['alert'] = array("class" => "alert-success", "text" => "Thanks for registering, please login to continue.");
}
