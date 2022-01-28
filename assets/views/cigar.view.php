
<div class="container">
    <div class="row">
        <?php foreach ($products as $product) : ?>
            <div class="col-md-4 pt-3">
                <img src="<?= $_ENV['IMAGE_PATH'] . $product['image']  ?>" width="100%">
                <button class="btn btn-small addToCart" data-product-id="1" >
                    <i id="overlay" class="fas fa-cart-plus"></i><i class="bi bi-cart4"></i>In winkelwagen</button>
                    <a href="#"class="btn btn-small"><i class="bi bi-info-circle"></i>Meer informatie</a>
                </button>
            </div>
        <?php endforeach ?>
    </div>
</div>