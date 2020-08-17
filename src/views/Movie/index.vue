<template>
  <div id="main">
    <Header></Header>
    <div id="content">
      <div class="navtop">
        <router-link to="/movie/city" tag="div" class="city" activeClass="active_otr">
          <span>{{ $store.state.cityName }}</span>
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

import { messageBox } from '@/components/JS'
import Axios from 'axios'
export default {
  data() {
    return {
      datalist: [],
      myIp: ''
    }
  },
  mounted() {

    Axios({
      url: 'https://ip.seeip.org/geoip'
    }).then(res => {
      this.myIp = res.data.ip
      console.log(this.myIp)
    })
    Axios({
      url: 'https://m.maizuo.com/gateway?k=9325855',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596954681169569603813377","bc":"210300"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      console.log(res.data.data.cities)
      this.datalist = res.data.data.cities
    })
    setTimeout(() => {
      Axios({
        url: `http://restapi.amap.com/v3/ip?key=e573dc1792435fe0975dc1e484af680c&ip=${this.myIp}`
      }).then(res => {
        var cityName = res.data.city
        for(var i=0; i<this.datalist.length; i++){
          if(this.datalist[i].name + '市' === cityName){
            var cityId = this.datalist[i].cityId
          }
        }
        if( this.$store.state.cityName === cityName){return}
        messageBox({
         title: '定位',
         content: cityName,
         cancel: '取消',
         ok: '切换定位',
         handleCancel(){
           console.log('cancel')
         },
         handleOk(){
           // 修改状态管理和本地存储
           localStorage.setItem('id', cityId)
           localStorage.setItem('name', cityName)
           location.reload()
         }
        })
      })
    },2000)
// https://restapi.amap.com/v3/ip?ip=114.247.50.2&output=xml&key=e573dc1792435fe0975dc1e484af680c
  },
  components: {
    Tabbar,
    Header,
    Nowplaying,
    Comingsoon,
    City,
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