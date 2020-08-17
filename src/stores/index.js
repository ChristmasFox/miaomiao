import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityId: localStorage.getItem('id') || '210300',
    cityName: localStorage.getItem('name') || '鞍山',
  },
  mutations: {
    city_info(state, data){
      state.cityId = data.id
      state.cityName = data.name
    }
  },
  actions: {
  },
  modules: {
  }
})
