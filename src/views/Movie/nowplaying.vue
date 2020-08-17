<template>
  <div class="nowout" ref="nowout">
    <Loading v-if="isLoading"></Loading>
    <div class="scroll-home" v-else>
      <ul>
        <li class="pulldown">{{ pullDownMsg }}</li>
        <li v-for="data in datalist" :key="data.filmId">
          <img :src="data.poster" alt="" @tap="handleToDetail(data.filmId)">
          <div class="text" @tap="handleToDetail(data.filmId)">
            <h3>{{data.name}}</h3>
            <p>观众评<b>{{data.grade}}</b></p>
            <p>主演:{{ data.actors | actorfilter}}</p>
            <p>{{data.synopsis}}</p>
          </div>
          <div class="bought">购票</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
import Vue from 'vue'
import BScroll from 'better-scroll'
Vue.filter('actorfilter', function(data){
  var newlist = (data || []).map(item => item.name)
  return newlist.join(' ')
})
export default {
  data() {
    return {
      datalist: [],
      pullDownMsg: '',
      isLoading: true,
      prevcityId: -1
    }
  },
  activated() {
    // 被 keep-alive 缓存的组件激活时调用。
    var nowCityId = this.$store.state.cityId
    if( this.prevcityId === nowCityId){return}
    this.isLoading = true

    this.cityid = localStorage.getItem('id')
    console.log(this.cityid)
    Axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=1650893`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596954681169569603813377","bc":"210300"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data.data.films)
      this.datalist = res.data.data.films
      this.prevcityId = nowCityId
      this.isLoading = false
      this.$nextTick(() => {
        var scroll = new BScroll(this.$refs.nowout, {
          tap: true,
          probeType: 1
        })
        scroll.on('scroll', (pos) => {
          if(pos.y > 15){
            this.pullDownMsg = '更新中'
          }
        })
        scroll.on('touchEnd', (pos)=> {
          if(pos.y > 15){
            Axios({
              url: `https://m.maizuo.com/gateway?cityId=${this.cityid}&pageNum=1&pageSize=10&type=1&k=1650893`,
              headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596954681169569603813377","bc":"210300"}',
                'X-Host': 'mall.film-ticket.film.list'
              }
            }).then(res => {
              this.pullDownMsg = '更新成功'
              setTimeout(() => {
                this.datalist = res.data.data.films             
                this.pullDownMsg = ''
              }, 1000);
            })       
          }
        })
      })
    })
  },
  methods: {
    handleToDetail(id) {
      this.$router.push(`/detail/${id}`)
    }
  },
}
</script>
<style lang="scss" scoped>
  .nowout { 
    overflow-y: scroll;
  }
  .pulldown {
    margin: 0;
    padding: 0;
    border: none;
  }
  ul {
    width: 100%;
    li {
      padding: 10px 5px;
      box-sizing: border-box;
      display: flex;
      position: relative;
      img {
        width: 20%;
        margin-right: 7px;
      }
      .text {
        width: 55%;
        p {
          font-size: 13px;
          line-height: 22px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        b {
          margin-left: 5px;
          font-size: 15px;
          color: rgb(255, 208, 0);
          line-height: 15px;
        }
      }
      .bought {
        background-color: red;
        color: white;
        font-size: 13px;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
        height: 30px;
        width: 50px;
        position: absolute;
        top: 35%;
        right: 10px;
      }
    }
  }
</style>