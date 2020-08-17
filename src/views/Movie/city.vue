<template>
  <mt-index-list>
    <div class="hot">
      <p>热门城市</p>
      <ul>
        <li>北京</li>
        <li>上海</li>
        <li>广州</li>
      </ul>
      <ul>
        <li>深圳</li>
        <li>南京</li>
        <li>西安</li>
      </ul>
      <ul>
        <li>合肥</li>
        <li>湖南</li>
        <li>湖南</li>
      </ul>
    </div>
    <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
      <div @click="handleClick(city.cityId, city.name)" v-for="city in data.list" :key="city.cityId">
        <mt-cell :title="city.name"></mt-cell>
      </div>
    </mt-index-section>
  </mt-index-list>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      datalist: []
    }
  },
  mounted() {
    axios({
      url: 'https://m.maizuo.com/gateway?k=9325855',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596954681169569603813377","bc":"210300"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.datalist = this.handleCity(res.data.data.cities)
    })
  },
  methods: {
    handleCity(datalist){
      var letterArr = []
      var newlist = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      for (var j = 0; j < letterArr.length; j++) {
        var arr = datalist.filter(item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase())
        if (arr.length > 0) {
          newlist.push({
            index: letterArr[j],
            list: arr
          })
        }
      }
      return newlist
    }
  },
  handleClick(id, name){

  }
}
</script>
<style lang="scss" scoped>
.mint-indexlist {
  touch-action: none;
}
.hot {
  padding-bottom: 10px;
  p {
    padding: 5px 20px; 
    font-size: 14px;
  }
  background-color: rgba(224, 224, 224, 0.562);
  ul {
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0;
    li {
      background-color: white;
      width: 30%;
      height: 30px;
      line-height: 30px;
      text-align: center;;
      border-radius: 5px;
    }
  }
}
</style>