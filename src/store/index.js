import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
    teamSelected: [],
    pokemonToAdd: null
  },
  mutations: {
    toggleDarkMode(state){
      state.darkMode = !state.darkMode
    },
    addPokemonToList(state){
      state.teamSelected = [state.pokemonToAdd,...state.teamSelected]
    },
    deleteAllPokemonToList(state){
      state.teamSelected = []
    }
  },
  actions: {
    toggleDarkModeAction(context){
      context.commit('toggleDarkMode')
    },
    addPokemonToListAction(context){
      context.commit('addPokemonToList')
    },
    deleteAllPokemonToListAction(context){
      context.commit('deleteAllPokemonToList')
    }
  },
  getters:{
    darkMode(state){
      return state.darkMode
    },
    teamSelected(state){
      return state.teamSelected
    }
  },
  modules: {
  }
})
