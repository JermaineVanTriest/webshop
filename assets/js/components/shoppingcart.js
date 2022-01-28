Vue.component('shopping-cart', {
    data() {
        return {
            product: 'cigar',
        }
    },

    props: {
        first_name: '',
        last_name: '',
    },

    methods: {
        closeShoppingCart() {
            $('.layer').fadeOut();
            $('.cart').fadeOut();
        },

        updateShoppingCart(value) {
            console.log('updateShoppingCart: ' + value);
        },
    },

    template: `<div class="cart">
        <button>Click me {{ this.product }}</button>
        </div>`,
}


)