<?php

function index($view)
{
    $products = require 'data/cigar.php';

    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}  