<?php

function index($view)
{
    $products = require 'data/karaf.php';

    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}  