Vue.component('products', {
    props: {

    },

    data: function () {
        return {
            fruits: [],
        }
    },

    created() {
        this.getProducts();
    },

    methods: {
        addToCart(fruit) {
            fruit.stock--;

            this.$root.$emit('add-to-cart', fruit);
        },

        getProducts() {
            let self = this;

            axios({
                method: 'GET',
                url: '?page=home&action=getdata',
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then(function (response) {
                if (response.data.success) {
                    self.fruits = response.data.fruits;
                }
            }).catch(function (error) {

            });
        },
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