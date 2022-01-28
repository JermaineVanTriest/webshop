<?php

function seedTable() {
    $sale = [
        [
            'id'    => 1,
            'name'  => 'Humidor compleet set',
            'image' => 'meestverkocht3.jpg',
            'price'  => 19.99,
            'stock' => 20,
        ],
    
        [
            'id'    => 2,
            'name'  => 'Sigaar bundel',
            'image' => 'meestverkocht2.jpg',
            'price'  => 25.99,
            'stock' => 2,
        ],
    
        [
            'id'    => 3,
            'name'  => 'Houten asbak',
            'image' => 'meestverkocht1.jpg',
            'price'  => 12.95,
            'stock' => 3,
        ],
    
        [
            'id'    => 4,
            'name'  => 'Zippo',
            'image' => 'meestverkocht4.jpg',
            'price'  => 15.95,
            'stock' => 3,
        ],
    
        [
            'id'    => 5,
            'name'  => 'Glazen asbak',
            'image' => 'meestverkocht5.jpg',
            'price'  => 12.95,
            'stock' => 3,
        ],
    ];
        
    
        
    
    $sql = "TRUNCATE `sale`.`products`";

    query($sql);

    foreach ($sale as $product) {
        $product['created_at'] = date('Y-m-d H:i:s');

        insert($product, 'products');
    }
}