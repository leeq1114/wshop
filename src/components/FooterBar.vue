<template>
<van-tabbar v-model="active" @change='change'>
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" v-if="userInfo.userName === '未登录'" to="/profile">我的</van-tabbar-item>
      <van-tabbar-item icon="contact" v-else to="/profile_loginOK">我的</van-tabbar-item>
    </van-tabbar>
  
</template>


<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
      active: 0
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    change(active){
      console.log(active);
      localStorage.setItem('active', active);
    }
  },
  created(){
    this.active = parseInt(localStorage.getItem('active'));
  },
  // 监控路由变化
  watch: {
    $route(to,from){
      console.log(to);
      console.log(from);
      if (to.name === "Home") {
        this.active = 0;
      } else if (to.name === "Category") {
        this.active = 1;
      } else if (to.name === "Cart") {
        this.active = 2;
      } else if (to.name === "Profile" || to.name === "profile_loginOK" ) {
        this.active = 3;
      }
    }
  }
}

</script>


<style lang="scss">

</style>
