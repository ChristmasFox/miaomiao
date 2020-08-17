import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import Loading from '@/components/Loading'
Vue.use(Mint);
Vue.component('Loading', Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
