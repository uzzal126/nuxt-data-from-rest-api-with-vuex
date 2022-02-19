<template>
    <div class="home-container py-section">
        <div class="container text-center">
            <h3 class="text-center mb-10">All Products</h3>
            <div v-if="getPosts.length" class="grid grid-cols-4 gap-5">
                <div v-for="(post, i) in getPosts" :key="i" class="product border p-5 text-center">
                    {{ post.title.rendered }}
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
                'getPosts'
            ])
        },

        mounted() {
            this.fetchPosts()
        },

        methods: {
            ...mapActions([
                'fetchPosts'
            ])
        },
    }
</script>