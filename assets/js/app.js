let app = new Vue({
    el: '#app',

    data: {
        appName: 'SigaarShop',
        products: [],
        showHeader: true,
        artikels: artikels
    },

    mounted() {
        this.$on('add-to-cart', (id) => {
            this.products.push(id)
        })
    },

    methods: {
        updateCart(id) {
            this.products.push(id)
        },

        showCart() {
            $('.layer').fadeIn();

            $('.cart').toggle({
                direction: 'right',
            });
        }
    }
})



Vue.config.devtools = true
Vue.config.productionTip = false

