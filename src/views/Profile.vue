<template>
  <div>
    <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field v-model="loginUsername" label="用户名：" required clearable placeholder="请输入用户名" />
          <van-field v-model="loginPassword" type="password" label="密码：" required clearable placeholder="请输入密码" />
        </van-cell-group>
        <div>
          <van-button @click="loginHandler" type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field v-model="registUsername" label="用户名：" required clearable placeholder="请输入用户名" />
          <van-field v-model="registPassword" type="password" label="密码：" required clearable placeholder="请输入密码" />
          <van-field v-model="registPasswordCon" type="password" label="密码：" required clearable placeholder="请再次输入密码" />
        </van-cell-group>
        <div>
          <van-button @click="registHandler" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>

import axios from 'axios';
import url from '@/service.config.js';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      loginUsername: '',
      loginPassword: '',
      registUsername: '',
      registPassword: '',
      registPasswordCon: ''
    };
  },
  methods:{
    ...mapActions(['loginAction']),
    // regist処理
    registHandler(){
      axios({
        url : url.registUser,
        method : 'post',
        data : {
          userName : this.registUsername,
          password : this.registPassword
        }
      }).then(res=>{
        // console.log(res);
        if (res.data.code == 200) {
          this.$toast.success('注册成功');
          this.registPassword = this.registUsername = this.registPasswordCon = '';
        } else {
          this.$toast.fail('注册失败');
        }
      }).catch(err=>{
        console.log(err);
        this.$toast.fail('注册失败');
      });
    },
    // login処理
    loginHandler(){
      axios({
        url : url.loginUser,
        method : 'post',
        data : {
          userName : this.loginUsername,
          password : this.loginPassword
        }
      }).then(res=>{
        // console.log(res);
        if (res.data.code == 200) {
          this.$toast.success(res.data.message);
          this.loginPassword = this.loginUsername = '';
          // 保存登录状态
          console.log(res.data.userInfo.name);
          this.loginAction(res.data.userInfo.name);
          this.$router.push("/");
        } else {
          this.$toast.fail(res.data.message);
        }
      }).catch(err=>{
        console.log(err);
        this.$toast.fail('登录失败');
      });
    }
  }
}
</script>


<style lang="scss">

</style>
