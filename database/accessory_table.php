<?php

function seedTable() {
    $accessory = [ 

        [
            'id'            => 7,
            'name'          => 'Aansterker deluxe',
            'image'         => 'aansteker2.jpeg',
            'description'   => 'lorem',
            'price'         => 17.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 8,
            'name'          => 'Aansteker stormbestendig',
            'image'         => 'aansteker3.jpeg',
            'description'   => 'lorem',
            'price'         => 12.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 9,
            'name'          => 'Aansteker 3 vlams',
            'image'         => 'aansteker4.jpeg',
            'description'   => 'lorem',
            'price'         => 14.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 10,
            'name'          => 'Asbak ovaal',
            'image'         => 'asbak2.jpeg',
            'description'   => 'lorem',
            'price'         => 12.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 11,
            'name'          => 'Asbak hout en uitschuifbaar',
            'image'         => 'asbak3.jpeg',
            'description'   => 'lorem',
            'price'         => 18.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 12,
            'name'          => 'Asbak tafelmodel',
            'image'         => 'asbak4.jpeg',
            'description'   => 'lorem',
            'price'         => 29.95,
            'stock'         => 3,
        ],
        [
            'id'            => 13,
            'name'          => 'Asbak alu. inc. houder',
            'image'         => 'asbak5.jpeg',
            'description'   => 'lorem',
            'price'         => 24.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 14,
            'name'          => 'Asbak inc. houder',
            'image'         => 'asbak6.jpeg',
            'description'   => 'lorem',
            'price'         => 17.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 15,
            'name'          => 'Asbak luxe',
            'image'         => 'asbak7.jpeg',
            'description'   => 'lorem',
            'price'         => 29.95,
            'stock'         => 3,
        ],
    
        [
            'id'            => 16,
            'name'          => 'Asbak Montecristo de luxe',
            'image'         => 'asbak8.jpeg',
            'description'   => 'lorem',
            'price'         => 29.95,
            'stock'         => 3,
        ],
    ];


        $sql = "TRUNCATE `accessory`.`products`";

        query($sql);
    
        foreach ($accessory as $product) {
            $product['created_at'] = date('Y-m-d H:i:s');
    
            insert($product, 'products');
        }
}