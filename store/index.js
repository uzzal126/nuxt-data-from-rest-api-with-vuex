
import axios from 'axios';

export const state = () => ({
    title: "This is from store",
    posts: []
})

export const getters = {
    getPosts (state) {
        return state.posts
    }
}


export const mutations = {
    SET_POST (state, posts) {
        state.posts = posts
    }
}

export const actions = {
    /* async fetchPosts({commit}) {
        const posts = await axios.get('https://flone.hasthemes.com/wp-json/wp/v2/posts')
        .then(response => {
            commit('SET_POST', response.data);
        })
        return posts
    } */
    
    async fetchPosts({ commit }) {
       await axios.get('https://flone.hasthemes.com/wp-json/wp/v2/posts')
            .then(response => {
                commit('SET_POST', response.data);
            })
    },
}
