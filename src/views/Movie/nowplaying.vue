<template>
  <div class="nowout">
    <ul>
      <li v-for="data in datalist" :key="data.filmId">
        <img :src="data.poster" alt="">
        <div class="text">
          <h3>{{data.name}}</h3>
          <p>观众评<b>{{data.grade}}</b></p>
          <p>主演:{{ data.actors | actorfilter}}</p>
          <p>{{data.synopsis}}</p>
        </div>
        <div class="bought">购票</div>
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from 'axios'
import Vue from 'vue'
Vue.filter('actorfilter', function(data){
  var newlist = (data || []).map(item => item.name)
  return newlist.join(' ')
})
export default {
  data() {
    return {
      datalist: [],
      cityid: ''
    }
  },
  mounted() {
    this.cityid = localStorage.getItem('id')
    console.log(this.cityid)
    Axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.cityid}&pageNum=1&pageSize=10&type=1&k=1650893`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596954681169569603813377","bc":"210300"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.datalist = res.data.data.films
    })
  },
}
</script>
<style lang="scss" scoped>
  .nowout { 
    overflow-y: scroll;
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