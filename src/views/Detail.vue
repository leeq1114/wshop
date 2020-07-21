<template>
  <div>
      <van-nav-bar title='商品详情' left-text="返回" @click-left='$router.go(-1)'></van-nav-bar>
      <img :src="detail.img" alt="" class='detail-img'>
      <div class='detail'>
          <p class='detail-name'>{{detail.name}}</p>
          <p class='detail-price'>¥{{detail.price}}</p>
          <p>公司:{{detail.company}}</p>
          <p>产地:{{detail.city}}</p>
      </div>
      <div class='toolbar'>
          <van-goods-action>
              <van-goods-action-icon icon="chat-o" text="客服" />
              <van-goods-action-icon icon="cart-o" text="购物车" @click="$router.push('/cart')" />
              <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
              <van-goods-action-button type="danger" text="立即购买" />
          </van-goods-action>
      </div>
  </div>
</template>


<script>

import axios from 'axios';
import url from '@/service.config.js';
import { mapState } from 'vuex';
export default {
    data(){
        return {
            detail: {}
        }
    },
    created(){
        console.log(this.$route.params.id)
        axios({
            url: url.getDetail,
            method: 'get',
            params: {
                id: this.$route.params.id
            }
        }).then(res=>{
            this.detail = res.data;
        }).catch(err=>{
            console.log(err)
        });
    },
    methods: {
        addCart(){
            if (this.userInfo.userName === '未登录') {
                this.$toast.fail('请先登录');
                setTimeout(()=>{
                    this.$router.push('/profile');
                }, 1000);
                
            } else {
                console.log("登录成功，可以加入购物车!");
                axios({
                    url: url.addCart,
                    method: 'post',
                    data: {
                        productId: this.detail._id,
                        userId: this.userInfo.id
                    }
                }).then(res=>{
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                });
            }
        }
    },
    computed: {
        ...mapState(['userInfo'])
    }
}
</script>


<style lang="scss" scoped>

.detail {
    padding: 1rem;
    &-img {
        width: 100%;
        height: 12rem;
    }
    &-name{
        color: #333;
        font-weight: bolder;
    }
    &-price{
        color: #ff7300;
        font-size: 1.5rem;
    }
}

</style>
