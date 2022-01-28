<free-sending></free-sending>

<new-carousel></new-carousel>


<question-link></question-link>


<card-body></card-body>


    <!-- <div class="container">
        <div class="row">
            <?php foreach ($products as $product) : ?>
                <div class="col-md-4 pt-3">
                    <img src="<?= $_ENV['IMAGE_PATH'] . $product['image']  ?>" width="100%">
                    <button class="btn btn-small addToCart" data-product-id="1" >
                        <i  class="fas fa-cart-plus"></i><i class="bi bi-cart4"></i>In winkelwagen</button>
                        <a href="#"class="btn btn-small"><i class="bi bi-info-circle"></i>Meer informatie</a>
                    </button>
                </div>
            <?php endforeach ?>
        </div>
    </div> -->


<answer-link></answer-link>
                    


<div class="container">
    <cart-form ref="cartComponent" class="cart"></cart-form>
    <products></products>
</div>

