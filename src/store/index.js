import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      count: 1,
       data: null,
       favorites: [],
    },

    getters: {
      count(state){
        return state.count;
      },

      favorites(state) {
    return state.favorites;
  },
       data(state) {
      return state.data;
    }

    },

    mutations: {
      setData(state, data){
        state.data = data;
      },

      addCount(state) {
        state.count++;
      }
    },

    addFavorite(state, item) {
    if (!state.favorites.find(fav => fav === item)) {
      state.favorites.push(item);
    }
  },

    actions: {
      async fetchData({ commit }) {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    commit('setData', response.data.message);
    },

    addFavorite({ commit }, item) {
      commit('addFavorite', item);
    }

    },
    modules: {
    }
})