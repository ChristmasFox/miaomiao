<template>
  <transition name="slide">
    <Loading v-if="isLoading"></Loading>
    <div id="main" v-else>
      <Header title="影片详情"></Header>
      <router-link tag="i" to="/movie" class="back iconfont icon-xiala1"></router-link>
      <div id="content">
        <div class="filmtit">
          <div class="filmtit_filter" :style="{ 'background-image': 'url('+ filmlist.poster +')' }"></div>
          <img :src="filmlist.poster" alt=""> 
          <div class="text">
            <h3>{{filmlist.name}}</h3>
            <p>评分:{{filmlist.grade}}</p>
            <p>{{filmlist.director}}</p>
            <p>{{filmlist.category}}</p>
            <p>{{filmlist.nation}}</p>
          </div>
        </div>
        <!-- <img :src="data" v-for="data in filmlist.photos" :key="data.filmId" alt="" class="photos"> -->
        
        <p>{{filmlist.synopsis}}</p>
      </div>
      <mt-swipe :auto="4000">
          <mt-swipe-item v-for="data in filmlist.photos" :key="data.filmId">
            <img :src="data" alt="" class="photos">
          </mt-swipe-item>
        </mt-swipe>
    </div>
  </transition>
</template>
<script>
import Axios from 'axios'
import Header from '@/components/Header'
export default {
  data () {
    return {
      filmlist: [],
      isLoading: true,
      filmId: ''
    }
  },
  activated() {
    this.isLoading = true
    Axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=4848910`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596954681169569603813377","bc":"210300"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filmlist = res.data.data.film   
      this.filmId = res.data.data.film.filmId
      this.isLoading = false
    })
  },
  beforeRouteLeave (to, from, next) {
    this.isLoading = true
    next() 
  },
  components: {
    Header,
  }
}
</script>
<style lang="scss" scoped>
  .back {
    position: absolute;
    color: white;
    font-size: 24px;
    top: 14px;
    left: 10px;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
  .filmtit {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    background-color: rgba(128, 128, 128, 0.356);
    .filmtit_filter {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      filter: blur(15px);
    }
    img {
      width: 30%;
      margin-right: 7px;
    }
    .text {
      margin-left: 10px;
      p {
        font-size: 15px;
        line-height: 25px;
      }
    }
  }
  .mint-swipe {
    height: 200px;
  }
  .photos {
    width: 100%;
    height: 100%;
  }
</style>
