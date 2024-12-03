<template>
<div style="display: grid; grid-template-columns: repeat(3, 1fr);">
            <div
            v-for="product in data"
            :key="product.id"
            class="row"
            >
            <div class="col-sm-10">
                <div class="single-item">
                <div class="single-item-header">
                    <a href="product.html">
                    <img :src="`/src/image/product/${product.image}`" alt="" />
                    </a>
                </div>
                <div class="single-item-body">
                    <p class="single-item-title">{{ product.name }}</p>
                    <p class="single-item-price">
                    <!-- <span>{{ product.description }}</span> -->
                    </p>
                </div>
                <div class="single-item-caption">
                    <a
                    class="add-to-cart pull-left"
                    href="shopping_cart.html"
                    >
                    <i class="fa fa-shopping-cart"></i>
                    </a>
                    <a
                    class="beta-btn primary"
                    href="product.html"
                    >
                    Details <i class="fa fa-chevron-right"></i>
                    </a>
                    <div class="clearfix"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
import axios from "axios";
export default {
data() {
	return {
	data: [],
	loading: false,
	error: null,
	};
},
created() {
	this.fetchProducts();
},
methods: {
	addToCart(product) {
	console.log(`Added ${product.name} to cart.`);
	},
		async fetchProducts() {
			this.loading = true;
			this.error = null;
		try {
			const responseProduct = await axios.get("http://localhost:3000/newproduct");
			this.data = responseProduct.data;
		} catch (err) {
			this.error = "Không thể tải danh sách sản phẩm.";
		} finally {
			this.loading = false;
		}
		},
	},
};
</script>