Vue.component('product', {
    data: function () {
        return {
            imagePath: imagePath
        }
    },

    props: {
        artikel_data: {},
    },

    methods: {
        addToCart(id) {
            this.$root.$emit('add-to-cart', id)
        }
    },
    
    
    template: `
   
    <section class="main-section">
        <div class="product-container">
            <h5 class="card-title"></h5>
                <div class="products">
                    <div class="product">
                        <div class="product-under">                           
                            <figure class="product-image">
                                    <img :src="imagePath + artikel_data.image" class="card-img-top" alt="..."width="300" height="300">   
                                        <div class="product-over">
                                            <button class="btn btn-small addToCart" data-product-id="1" >
                                                <i class="fas fa-cart-plus"></i><i class="bi bi-cart4"></i>In winkelwagen</button>
                                                <a href="#"class="btn btn-small"><i class="bi bi-info-circle"></i>Meer informatie</a>
                                            </button>
                                        </div>
                                </figure>      

                                <h5><strong>  {{ artikel_data.name }} </strong></h5> 
                                
                                
                                
                               


                                  
                                <h5>  <p><strong>Prijs: {{ artikel_data.cost }}</strong></p> </h5>
                        </div>
                    </div>
                </div>
        </div>
    </section>


        `,

            
})