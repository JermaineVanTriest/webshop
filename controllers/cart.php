<?php

function updateCart()
{
    $_SESSION['cart'] = [
        [
            'id' => 1,
            'name' => 'Product 1',
        ],

        [
            'id' => 2,
            'name' => 'Product 2',
        ],
    ];
}