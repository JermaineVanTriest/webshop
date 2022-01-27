<?php

function index($view)
{
    $products = require 'data/accessory.php';

    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}