$(document).ready(function() {
    $('img').on('click', function() {
        $("#showImg").empty();
        var image = $(this).attr("src");
        $("#showImg").append("<img class='img-responsive' src='" + image + "' />")
    })
});




// Vue.component('products', {
//     data() {
//         return {
//             machineItems: [],
//             imagePath: '/assets/images/webshop/',
//         }
//     },
//     props: {},
//     created() {
//         this.karafItems = machines;
//         // this.getProducts();
//     },
//     methods: {
//         updateCart(karaft, updateType) {
//             this.$root.$emit('update-cart', karaf, updateType)
//         },

//         // getProducts() {
//         //     let self = this;

//         //     axios({
//         //         method: 'GET',
//         //         url: '?page=coffeeMachines&action=getdata',
//         //         headers: {
//         //             "X-Requested-With": "XMLHttpRequest"
//         //         }
//         //     }).then(function(response) {
//         //         self.machines = response.data.machines;
//         //     }).catch(function(error) {

//         //     });
//         // },

//     },

//     template: `
//     <section class="products block">
//     <div class="card container-fluid col-md-5" v-for="karaf in machineItems" :key="karaf.id" v-show="karaf.show">
//         <a :href="imagePath + karaf.image"> <img :src="imagePath+karaf.image" class="card-img-top"
//                 :alt="karaf.alt"></a>
//         <div class="card-body">
//             <h5>{{karaf.name}}</h5>
//             <h5>{{karaf.machineNum}}</h5>
//             <p class="card-text">{{karaf.text}}</p>

//             <p v-if="karaf.onSale30"><b>Sale 30%</b>  <span class="onSale">{{karaf.price}}$</span><br><span class="newPrice30"> New Price: <b>{{karaf.newPrice30}}$</b></span></p>
//             <p v-else-if="karaf.onSale50"><b>Sale 50%</b>  <span class="onSale">{{karaf.price}}$</span><br><span class="newPrice50"> New Price: <b>{{karaf.newPrice50}}$</b></span></p>
//             <p v-else>Price: {{karaf.price}}$</p>

//             <p class="soldOut" v-if="karaf.stock===0">Sold Out</p>
//             <p class="soldOut" v-else-if="karaf.stock<=5 && karaf.stock>0">Almost Sold Out</p>
//             <p v-else-if="karaf.stock>5">In Stock</p>
//             &#x1F6D2;
//             <button class="addToCart btn btn-primary" @click="updateCart(karaf,'substract')"
//                 :disabled="karaf.stock === 0 && karaf.quantity===0"
//                 :class="{disabledButton: karaf.stock===0 && karaf.quantity===0}">-</button>
//             <span>{{karaf.quantity}}</span>
//             <button class=" addToCart btn btn-primary" @click="updateCart(karaf,'add')"
//                 :disabled="karaf.stock === 0" :class="{disabledButton: karaf.stock === 0}">+</button>
//         </div>
//     </div>
// </section>
