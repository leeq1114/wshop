<template>
  <div>
    <van-nav-bar title="我的购物车"></van-nav-bar>
    <div class="card">
      <!-- <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card> -->
      <van-card v-for="(item, index) in productList" :key='index' :price="item.price" :desc="item.company"
        :title="item.name" :thumb="item.img">
        <template #footer>
          <van-button size="mini" @click="delItem(item._id, index)">删除</van-button>
        </template>
      </van-card>
    </div>

    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>


<script>

import { mapState } from 'vuex';
import axios from 'axios';
import url from '@/service.config.js';

export default {
  data(){
    return {
      productList: [],
      itemList: []
    }
  },
  created(){
    // 验证用户是否登录
    if (this.userInfo.userName === '未登录') {
      this.$toast.fail('请先登录');
      setTimeout(() => {
        this.$router.push('/profile');
      }, 1000);
    } else {
      console.log("cart...user OK.")
      axios({
        url: url.getCartInfo,
        method: 'get',
        params: {
          userId: this.userInfo.id
        }
      }).then(res=>{
        console.log("cart...client res OK.");
        console.log(res);
        for (let item of res.data) {
          this.productList.push(item.productId);
        }
        this.itemList = res.data;
        console.log(this.productList);
      }).catch(err=>{
        console.log(err);
      });
    }
  },
  computed:{
    ...mapState(['userInfo']),
    totalPrice(){
      return this.productList.reduce((sum, elem) =>{
        sum+= elem.price;
        return sum;
      },0) * 10 * 10;
    }
  },
  methods: {
    onSubmit(){
      this.$toast.success('进入付款页面.');
    },
    delItem(id, index){
      console.log(this.itemList);
      console.log(this.productList);
      console.log(this.itemList[index]);
      console.log(this.itemList[index]._id);
      axios({
        url: url.delItem,
        method: 'get',
        params: {
          _id: this.itemList[index]._id
        }
      }).then(()=>{
        console.log("cartItem delete OK.")
        this.productList.splice(index, 1);
        this.itemList.splice(index, 1);
      }).catch(err=>{
        console.log(err);
      });
      
    }
  }
}
</script>


<style lang="scss">
.submit-bar{
  margin-bottom: 3rem;
  background-color: green($color: #000000);
  color: green;
}
</style>
