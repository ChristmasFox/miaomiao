<template>
  <div>
    detail -- {{ $route.params.myid }}
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      filmlist: null
    }
  },
  activated () {
    Axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=4848910`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596954681169569603813377","bc":"210300"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filmlist = res.data.data.film
      console.log(this.filmlist)
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
