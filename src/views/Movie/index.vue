<template>
  <div id="main">
    <Header></Header>
    <div id="content">
      <div class="navtop">
        <router-link to="/movie/city" tag="div" class="city" activeClass="active_otr">
          <span>大连</span>
          <i class="iconfont icon-xiala2"></i>
        </router-link>
        <div class="movienav">
          <router-link to="/movie/nowplaying" tag="div" activeClass="active" class="playing">正在热映</router-link>
          <router-link to="/movie/comingsoon" tag="div" activeClass="active" class="playing">即将上映</router-link>
        </div>
        <router-link to="/movie/search" tag="div" activeClass="active_otr">
          <i class="iconfont icon-sousuo1"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
import Header from '@/components/Header'
import Nowplaying from '@/views/Movie/nowplaying'
import Comingsoon from '@/views/Movie/comingsoon'
import City from '@/views/Movie/city'
export default {
   components: {
    Tabbar,
    Header,
    Nowplaying,
    Comingsoon,
    City
  } 
}
</script>
<style lang="scss" scoped>
  .navtop {
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid rgba(134, 134, 134, 0.24);
  }
  .movienav {
    display: flex;
    width: 60%;
    height: 100%;
    justify-content: space-around;
    text-align: center;
    .playing {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  .active {
    color: red;
    border-bottom: 1px solid red;
  }
  .active_otr {
    color: red;
  }
</style>