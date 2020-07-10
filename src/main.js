import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// totol insert
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant);

import { Button } from 'vant';

Vue.use(Button)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
