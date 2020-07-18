<template>
  <div>
    <div>
      <van-cell-group>
        <van-cell title="用户名">{{userInfo.userName}}</van-cell>
        <van-cell title="专属内容">{{userInfo.text}}</van-cell>
      </van-cell-group>
    </div>
    <div>
      <van-button @click="logoutHandler" type="primary" size="large">退出</van-button>
    </div>
  </div>
  
</template>


<script>
import { mapState, mapActions } from 'vuex';

export default {
  
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['loginAction']),
    logoutHandler(){
      this.loginAction('未登录');
      this.$router.push("/");
    }
  }
}
</script>


<style lang="scss">

</style>
