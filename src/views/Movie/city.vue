<template>
  <div class="cityout">
    <Loading v-if="isLoading"></Loading>
    <mt-index-list v-else>
      <div class="hot">
        <p>热门城市</p>
        <ul>
          <li v-for="data in hotlist" :key="data.cityId" @click="handleClick(data.cityId, data.name)">
            {{ data.name }}
          </li>
          <li class="null"></li>
          <li class="null"></li>
        </ul>
      </div>
      <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
        <div @click="handleClick(city.cityId, city.name)" v-for="city in data.list" :key="city.cityId">
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      datalist: [],
      hotlist: [],
      isLoading: true
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
      // console.log(res.data.data.cities)
      this.datalist = this.handleCity(res.data.data.cities)
      this.hotlist = this.hotCity(res.data.data.cities)
      this.isLoading = false
      // console.log(this.hotlist)
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
    },  
    hotCity(datalist){
      var newlist = []
      for(var i=0; i<datalist.length; i++){
        if(datalist[i].isHot === 1){
          newlist.push(datalist[i])
        }
      }
      return newlist
    },
    handleClick(id, name){
      this.$store.commit('city_info', {id, name})
      localStorage.setItem('id', id)
      localStorage.setItem('name', name)
      this.$router.push('/movie')
    }
  },
  
}
</script>
<style lang="scss" scoped>
.cityout {
  overflow: hidden;
}
.mint-indexlist {
  touch-action: none;
  height: 100%;
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
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    li {
      margin-bottom: 10px;
      flex-shrink: 0;
      background-color: white;
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;;
      border-radius: 5px;
    }
    .null {
        height: 0;
      }
  }
}
</style>