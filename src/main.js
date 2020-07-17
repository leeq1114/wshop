import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// totol insert
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant);

import { Button,Icon,NavBar,Tabbar,TabbarItem,Swipe,SwipeItem,Lazyload,Tab,Tabs,Field,CellGroup,Toast  } from 'vant';

Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload)
   .use(Tab).use(Tabs).use(Field).use(CellGroup).use(Toast);

import '@/mock/mock.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
