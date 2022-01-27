<?php

function index($view)
{
    $products = require 'data/products.php';

    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}