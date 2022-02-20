<template>
    <div class="home-container py-section">
        <div class="container text-center">
            <h3 class="text-center mb-10">All Products</h3>
            <div v-if="getProducts.length" class="grid grid-cols-4 gap-5">
                <div v-for="(product, i) in getProducts" :key="i" class="product border p-5 text-center">
                    <n-link :to="`/product/${product.id}`">
                        {{ product.title.rendered }}
                    </n-link>
                </div>
            </div>
            <p v-else>
                Loading.......
            </p>
        </div> 
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'getProducts'
            ])
        },

        mounted() {
            this.fetchProducts()
        },

        methods: {
            ...mapActions([
                'fetchProducts'
            ])
        },
    }
</script>
