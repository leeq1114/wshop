import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Ajax from '../views/Ajax.vue'
import Profile_loginOK from '../views/Profile_loginOK.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },{
    path: '/ajax',
    name: 'ajax',
    component: Ajax
  },
  {
    path: '/profile_loginOK',
    name: 'profile_loginOK',
    component: Profile_loginOK
  }
]

const router = new VueRouter({
  routes
})

export default router
