Vue.component('product', {
    data: function () {
        return {
            
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
        <div class="card">
            <img :src="imagePath + artikel_data.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ artikel_data.name }}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>Stock: {{ artikel_data.stock }}</p>
                <button class="btn btn-primary" :disabled="artikel_data.stock === 0" @click="addToCart(artikel_data.id)">Order</button>
            </div>
        </div>`,
})