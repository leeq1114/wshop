<template>
<van-tabbar v-model="active">
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
  }
}

</script>


<style lang="scss">

</style>
