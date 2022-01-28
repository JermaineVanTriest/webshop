<?php

function index($view)
{
    // $bestSale = require 'data/best_sale.php';

    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}
 
function getData()
{ 
    try {
        $query = "SELECT * FROM `bestSale` WHERE `deleted_at` IS NULL";
        $result = query($query);
        
        $bestSale = $result->fetchAll(PDO::FETCH_ASSOC);

        $success = true;
        $message = "Success";
        
    } catch (Exception $e) {
        $bestSale = null;
        $success = false;
        $message = $e->getMessage();
    }

    echo json_encode([
        'success'   => $success,
        'message'   => $message,
        'bestSale'  => $bestSale,
    ]);
}

function registerSuccessful()
{
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/register-succful.view.php';
}
