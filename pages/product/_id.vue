<template>
    <div class="text-center py-section">
        <h3>This is product details page</h3>
        <h2>{{ $route.params.id }}</h2>

        <div v-if="product" class="product">
            <h4>{{ product.slug }}</h4>
        </div>
        <p v-else>Loading.......</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id: this.$route.params.id 
            }
        },

        computed: {
            product() {
                return this.$store.state.product
            }
        },

        mounted () {
            this.$store.dispatch('fetchProduct', this.id)
        },
    }
</script>
