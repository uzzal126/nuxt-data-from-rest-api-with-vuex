
import axios from 'axios';

export const state = () => ({
    products: [],
    product: null
})

export const getters = {
    getProducts (state) {
        return state.products
    },
    getProduct (state) {
        return state.product
    }
}


export const mutations = {
    SET_PRODUCTS (state, products) {
        state.products = products
    },

    SET_PRODUCT (state, product) {
        state.product = product
    }
}

export const actions = {
    /* async fetchProducts({commit}) {
        const products = await axios.get('https://flone.hasthemes.com/wp-json/wp/v2/product')
        .then(response => {
            commit('SET_PRODUCTS', response.data);
        })
        return products
    } */
    
    async fetchProducts({ commit }) {
       await axios.get('http://localhost/project/wp-json/wc/v3/products')
            .then(response => {
                commit('SET_PRODUCTS', response.data);
            })
    },

    async fetchProduct({ commit }, id) {
       await axios.get(`https://flone.hasthemes.com/wp-json/wp/v2/product/${id}`)
            .then(response => {
                commit('SET_PRODUCT', response.data);
            })
    },
}
