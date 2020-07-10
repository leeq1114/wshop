<template>
  <div id="app">
    <router-view></router-view>
    <!-- <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/category">分类</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/cart">购物车</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ul> -->

    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div> 
</template>



<script>
export default {
  data(){
    return {
      active: 0
    }
  }
}
</script>



<style lang="scss">
.footer-bar{
  display : flex;
  background-color: #eeeeee;
  position : fixed;
  bottom : 0;
  width: 100%;
  height : 3rem;
  line-height: 3rem;
  &-item{
    flex-grow: 1;
    text-align: center;

  }
}
</style>
