import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
// import Category from '../views/Category.vue'
// import Cart from '../views/Cart.vue'
// import Profile from '../views/Profile.vue'
// import Profile_loginOK from '../views/Profile_loginOK.vue'
// import Detail from '../views/Detail.vue'

// 路由懒加载
let Home = ()=> import('../views/Home.vue'); 
let Category = ()=> import('../views/Category.vue');
let Cart = ()=> import('../views/Cart.vue');
let Profile = ()=> import('../views/Profile.vue');
let Profile_loginOK = ()=> import('../views/Profile_loginOK.vue');
let Detail = ()=> import('../views/Detail.vue');

import Ajax from '../views/Ajax.vue'
import FooterBar from '../components/FooterBar.vue'
import Error from '../views/Error.vue'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    components: {
      default: Home,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/category',
    name: 'category',
    // component: Category
    components: {
      default: Category,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    // component: Cart
    components: {
      default: Cart,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: false
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
  },{
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
