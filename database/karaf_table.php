<?php

function seedTable() {
    $karaf = [
        
        [
            'id'            => 6,
            'name'          => 'Karaf set luxe',
            'image'         => 'meestverkocht6.jpg',
            'description'   => 'lorem',
            'price'         => 34.95,
            'stock'         => 3,
        ],
     
        [
            'id'            => 17,
            'name'          => 'Karaf set 7 delig',
            'image'         => 'karafset1.jpeg',
            'description'   => 'lorem',
            'price'         => 36.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 18,
            'name'          => 'Karaf set 3 delig',
            'image'         => 'karafset2.jpeg',
            'description'   => 'lorem',
            'price'         => 29.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 19,
            'name'          => 'Karaf set 7 delig luxe',
            'image'         => 'karafset3.jpeg',
            'description'   => 'lorem',
            'price'         => 39.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 20,
            'name'          => 'Karaf set 4 delig inc houder',
            'image'         => 'karafset4.jpeg',
            'description'   => 'lorem',
            'price'         => 44.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 21,
            'name'          => 'Karaf set 3 delig ovaal',
            'image'         => 'karafset5.jpeg',
            'description'   => 'lorem',
            'price'         => 33.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 22,
            'name'          => 'Karaf set 2 delig ',
            'image'         => 'karafset6.jpeg',
            'description'   => 'lorem',
            'price'         => 29.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 23,
            'name'          => 'Karaf Deluxe',
            'image'         => 'karafset7.jpg',
            'description'   => 'lorem',
            'price'         => 28.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 24,
            'name'          => 'Karaf met kurk',
            'image'         => 'karafset8.jpg',
            'description'   => 'lorem',
            'price'         => 27.95,
            'stock'         => 3,
        ],
    ];

        $sql = "TRUNCATE `karaf`.`products`";

        query($sql);
    
        foreach ($karaf as $product) {
            $product['created_at'] = date('Y-m-d H:i:s');
    
            insert($product, 'products');
        }
    }