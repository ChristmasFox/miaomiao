<template>
  <div class="searchout">
    <div class="search">
      <i class="iconfont icon-sousuo1"></i>
      <input type="text" class="q" v-model="message">
    </div>
    <div class="res">
      <p class="tit">电影/电视剧/综艺</p>
      <ul>
        <li v-for="data in movielist" :key="data.filmId">
          <img :src="data.poster" alt="">
          <div class="text">
            <h3>{{data.name}}</h3>
            <p>{{data.director}}</p>
            <p>{{data.category}}</p>
            <p>{{data.nation}}</p>
          </div>
          <b>{{data.grade}}</b>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      message: '',
      datalist: [],
      movielist: [],
      msg: '',
    }
  },
  mounted() {
    Axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=1650893`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596954681169569603813377","bc":"210300"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.msg = res.data.msg
      this.datalist = res.data.data.films
    })
  },
  watch: {
    message(newval){
      if(newval != '') {
        var itemlist = []
        this.datalist.forEach(item => {
          if(item.name.search(newval) != -1){
            itemlist.push(item)
          }
        });
        this.movielist = itemlist
      }else {
        this.movielist = ''
      }
    }
  },
}
</script>
<style lang="scss" scoped>
  .searchout {
    overflow: scroll;
  }
  .search {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 45px;
    position: relative;
    box-sizing: border-box;
    padding: 8px 10px;
    background-color: rgba(228, 228, 228, 0.836);
    i {
      position: absolute;
      left: 20px;
      top: 13px;
      opacity: 0.7;
    }
    .q {
      width: 100%;
      box-sizing: border-box;
      padding-left: 35px;
      border-radius: 5px;
      border: none;
      outline: none;
    }
  }
  .res {
    .tit {
      padding: 10px;
      height: 14px;
      line-height: 14px;
      color: rgba(121, 121, 121, 0.911);
      font-size: 14px;
      border-bottom: 1px solid rgba(214, 203, 203, 0.808);
    }
    ul {
      width: 100%;
      li {
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        position: relative;
        border-bottom: 1px dashed rgba(214, 203, 203, 0.808);
        b {
          font-size: 18px;
          color: rgb(255, 208, 0);
          line-height: 15px;
          position: absolute;
          right: 15px;
          top: 15px;
        }
        img {
          width: 20%;
          margin-right: 7px;
        }
        .text {
          p {
            font-size: 13px;
            line-height: 22px;
          }
        }
      }
    }
  }
  
</style>