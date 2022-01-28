<?php

function index($view)
{
    $products = require 'data/best_sale.php';

    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}


function getData()
{
    $sql = "SELECT * FROM `products` WHERE `deleted_at` IS NULL";
    $res = query($sql);

    $shoppingCart = array_key_exists('cart', $_SESSION) ? json_decode($_SESSION['cart']) : [];

    $products = [];

    $index = 0;

    while ($product = $res->fetch(PDO::FETCH_ASSOC)) {
        $products[$index] = $product;
        $products[$index]['price'] = (float)$product['price'];
        $products[$index]['stock'] = (int)$product['stock'];

        if (count($shoppingCart)) {
            foreach ($shoppingCart as $key => $product) {
                dd($product, $product);
                
                if ($product['id'] === $product['id']) {
                    // $products[$key][''];
                }
            }
        }

        $index++;
    }

    // dd($products);

    echo json_encode([
        'success'   => true,
        'products'    => $products,
        'what'      => 'kiekeboo!',
    ]);
}
