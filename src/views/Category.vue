<template>
  <div>
    <van-nav-bar title="商品分类"></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li @click="selectCategory(item.typeId, index)" :class="{active111:active==index}" v-for="(item, index) in types" :key='index'>
              {{item.typeName}}
            </li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="content" @load="onLoad" :finished="finished" v-model="isLoading" finished-text="没有更多了" offset=0>
              <div @click="goDetail(item._id)" class="content-item" v-for="(item, index) in productList" :key="index">
                <img :src="item.img" alt="">
                <p class="content-item-name">{{item.name}}</p>
                <p>¥{{item.price}}</p>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js'
export default {
  data(){
    return {
      types: [],
      active: 0,
      productList: [],
      typeId: 1,
      start: 0,
      limit: 10,
      finished: false,
      isLoading: false,
    }
  },
  created(){
    axios({
      url: url.getTypes
    }).then(res=>{
      console.log(res);
      this.types = res.data;
      this.selectCategory(this.typeId, this.active);
    }).catch(err=>{
      console.log(err);
    });
  },
  methods: {
    selectCategory(typeId, index){
      console.log("selectCategory!");
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.finished = false;

      this.getProductList();
    },
    getProductList(){
      console.log("getProductList!");
      this.isLoading = true;
      axios({
        url: url.getProductsByType,
        method: 'get',
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      }).then(res=>{
        console.log(res);
        if (res.data.length != 0) {
          this.productList = this.productList.concat(res.data);
        } else {
          this.finished = true;
        }
        this.isLoading = false;
       
      }).catch(err=>{
        console.log(err);
      })
    },

    onLoad(){
      setTimeout(()=>{
        console.log("onLoad!");
        this.getProductList();
      },2000);
    },

    onRefresh() {
      setTimeout(() => {
        console.log("onRefresh!");
        this.productList = [];
        this.getProductList();
      }, 2000);
    },

    goDetail(id) {
      // this.$router.push({
      //   name: 'detail',
      //   params: {
      //     id: id
      //   }
      // });

      // this.$router.push({
      //   path: '/detail',
      //   query: {
      //     id: id
      //   }
      // });

      this.$router.push(`/detail/${id}`);
    }
  }

}

</script>

<style lang="scss">
.nav{
  background-color: #eeeeee;
  li{
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-bottom: 1px solid #ffffff;
    padding: 3px;
  }
  .active111{
    background-color: #ffffff;
  }
}

.container{
  position: fixed;
  top:46px;
  bottom: 1rem;
  right: 0;
  overflow-y: scroll;
}
.content{
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  &-item{
    width: 40%;
    padding: 0 10px;
    text-align: center;
    img{
      width: 5rem;
      height: 5rem;
    }
    &-name{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

</style>
