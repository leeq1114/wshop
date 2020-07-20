import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Ajax from '../views/Ajax.vue'
import Profile_loginOK from '../views/Profile_loginOK.vue'
import Detail from '../views/Detail.vue'
import FooterBar from '../components/FooterBar.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    components: {
      default: Home,
      'footer-bar': FooterBar
    }
  },
  {
    path: '/category',
    name: 'category',
    // component: Category
    components: {
      default: Category,
      'footer-bar': FooterBar
    }
  },
  {
    path: '/cart',
    name: 'cart',
    // component: Cart
    components: {
      default: Cart,
      'footer-bar': FooterBar
    }
  },
  {
    path: '/profile',
    name: 'profile',
    // component: Profile
    components: {
      default: Profile,
      'footer-bar': FooterBar
    }
  },{
    path: '/ajax',
    name: 'ajax',
    component: Ajax
  },{
    path: '/profile_loginOK',
    name: 'profile_loginOK',
    // component: Profile_loginOK
    components: {
      default: Profile_loginOK,
      'footer-bar': FooterBar
    }
  },{
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
