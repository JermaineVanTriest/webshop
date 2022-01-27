<?php

function index($view)
{
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}

function handleForm($view)
{
    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        die('go away! only posting here!');
    }

    $product = $_POST;

    // Update (PUT/PATCH) record
    if (array_key_exists('id', $_GET) && (int)$_GET['id'] > 0) {
        update($product, 'products', $_GET['id']);
    } else {
        $product['created_at'] = date('Y-m-d H:i:s');

        insert($product, 'products');
    }
}

function editRecord($view = null)
{
    if (array_key_exists('id', $_GET) && (int)$_GET['id'] > 0) {
        $query = "SELECT * FROM `products` WHERE `id`=" . $_GET['id'];
        $result = query($query);

        $product = $result->fetch(PDO::FETCH_ASSOC);

        if ($product === false) {
            die('This record does not exist');
        } 
    }
    
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}