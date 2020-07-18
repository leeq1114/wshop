<template>
  <div class="container">
    <van-nav-bar title="首页" class="nav-title">
      <template #left>
        <van-icon name="search"/>
      </template>
      <template #right>
        <van-icon v-if="userInfo.userName === '未登录'" @click="$router.push('/profile')">{{userInfo.userName}}</van-icon>
        <van-icon v-else @click="$router.push('/profile_loginOK')">{{userInfo.userName}}</van-icon>
      </template>

    </van-nav-bar>

    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe class="my-swipe" :autoplay="1000" indicator-color="grey">
        <van-swipe-item class="carousel-item" v-for="(item, index) in carouselItem" :key="index" >
          <img v-lazy="item.imgSrc" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 热门商品 -->
    <div class="hot">
       <p class="hot-title">热门商品</p>
       <swiper :options="swiperOption" class="hot-swiper">
         <swiper-slide v-for="(item, index) in hotProducts" :key="index" >
           <div class="hot-swiper-content">
             <img :src="item.img" alt="">
             <div>{{ item.name }}</div>
             <div>¥{{ item.price }}</div>
           </div>
         </swiper-slide>
       </swiper>
    </div>

    <!-- 推荐商品 -->
    <div class="variety">
      <p class="variety-title">推荐商品</p>
      <ul>
        <li class="variety-item" v-for=" (item, index) in varietyProducts" :key="index">
          <img :src="item.img" alt="">
          <div>{{ item.name }}</div>
          <div>¥{{ item.price }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import 'swiper/swiper.scss'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import axios from 'axios'
import url from '@/service.config.js'
import { mapState } from 'vuex'

export default { 
  data(){
    return {
      carouselItem:[  // 轮播图
        {
          name: 'img1',
          imgSrc:'http://www.nongji1688.com/file/upload/202001/15/0915163450801.jpg'
        },{
          name: 'img2',
          imgSrc:'https://i.machinio.com/medium/al/pfqkjj/4054778536_2.jpg'
        },{
          name: 'img3',
          imgSrc:'http://www.nongji1688.com/file/upload/202007/09/1725538650801.png'
        }
      ],
      hotProducts:[ // 热门商品
        {
          name : "手推车1",
          img : "http://www.nongji1688.com/file/upload/202001/15/0915163450801.jpg",
          price : "13260",
          company : "曲阜市机械制造有限公司",
          city : "曲阜市"
        },
        {
          name : "手推车2",
          img : "http://www.nongji1688.com/file/upload/202001/15/0915163450801.jpg",
          price : "23260",
          company : "曲阜市机械制造有限公司",
          city : "曲阜市"
        },
        {
          name : "手推车3",
          img : "http://www.nongji1688.com/file/upload/202001/15/0915163450801.jpg",
          price : "33260",
          company : "曲阜市机械制造有限公司",
          city : "曲阜市"
        },{
          name : "手推车4",
          img : "http://www.nongji1688.com/file/upload/202001/15/0915163450801.jpg",
          price : "43260",
          company : "曲阜市机械制造有限公司",
          city : "曲阜市"
        }
      ],
      swiperOption: {
        slidesPerView: 3
      },
      varietyProducts:[ // 推荐商品
        {
          name : "手推车1",
          img : "http://www.nongji1688.com/file/upload/202001/15/0915163450801.jpg",
          price : "13260",
          company : "曲阜市机械制造有限公司",
          city : "曲阜市"
        },
        {
          name : "手推车2",
          img : "http://www.nongji1688.com/file/upload/202001/15/0915163450801.jpg",
          price : "23260",
          company : "曲阜市机械制造有限公司",
          city : "曲阜市"
        },
        {
          name : "手推车3",
          img : "http://www.nongji1688.com/file/upload/202001/15/0915163450801.jpg",
          price : "33260",
          company : "曲阜市机械制造有限公司",
          city : "曲阜市"
        },{
          name : "手推车4",
          img : "http://www.nongji1688.com/file/upload/202001/15/0915163450801.jpg",
          price : "43260",
          company : "曲阜市机械制造有限公司",
          city : "曲阜市"
        }
      ],
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },

  created() {

    // let url2 = 'http://www.google.com/getVariety';
    let url2 = url.getVarietyItem;
    axios.get(url2).then(res=>{
      console.log(res);
    });
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>


<style lang="scss">

.container{
  background-color: #eeeeee;
}

.nav-title{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999!important;
}

.carousel{
  margin-top: 2rem;
  height: 10rem;
  &-item{
    img{
      width: 100%;
      height:10rem;
    }
  }
}

// 热门商品
.hot{
  margin-top: 1rem;
  background-color: #ffffff;
  &-title{
    width: 100%;
    height : 1rem;
    padding-left:  0.2rem;
    line-height: 1rem;
    box-sizing: border-box;
  }
  &-swiper{
    &-content{
      width : 7rem;
      text-align: center;
      img{
        width:7rem;
        height: 8rem;
      }
    }
    
  }
}

// 推荐商品
.variety{
  margin-top: 0.2rem;
  background-color: #ffffff;
  text-align: center;
  margin-bottom: 4rem;
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item{
    flex-basis: 45%;
    img{
      width: 5rem;
      height: 5rem;
    }
  }
}
</style>
