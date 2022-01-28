Vue.component("card-body", {
	props: ["type"],
	data: function () {
		return {
			items: []
		}
	},
	created() {
		this.fillCards(this.type);
	},
	methods: {
		fillCards(type) {
			let self = this;
			axios({
				method: 'GET',
				url: `?page=home&action=get${type}`,
				headers: {
					"X-Requested-With": "XMLHttpRequest"
				}
			}).then(function (response) {
				if (response.data.success) {
					self.items = response.data.items;
				}
			}).catch(function (error) {

			});
		}
	},
	template: `
	<div class="row">
    <div class="col-md-4 pt-3" v-for="product in products">
        <div class="card">
            <img :src="'/assets/images/webshop/' + product.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">lorem.</p>
                <p>&#x20AC;: {{ product.cost }}</p>
                <input type="button" class="btn btn-primary" :disabled="product.stock === 0" @click="addToCart(product)" value="Order">
            </div>
        </div>
    </div>
</div>
`,
});