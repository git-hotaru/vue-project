import { createStore } from 'vuex'
import Vue from 'vue'

export default createStore({
  state: {
    idToken: null
  }, 
  getters: {
    idToken: state => state.idToken
  },
  mutations: {
    updateIdToken(state, idToken) { 
      state.idToken = idToken;
    }
  },
})
