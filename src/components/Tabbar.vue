<template>
  <div class="nav">
    <router-link to="/movie" activeClass="active" tag="div" class="movie-home">
    <i class="iconfont icon-dianying2"></i>
    <span>电影</span>
    </router-link>
    <router-link to="/cinema" activeClass="active" tag="div" class="cinema-home">
    <i class="iconfont icon-yingyuan"></i>
    <span>影院</span>
    </router-link>
    <router-link to="/mine" activeClass="active" tag="div" class="mine-home">
    <i class="iconfont icon-wode"></i>
    <span>我的</span>
    </router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .active {
    color: red;
  }
  .nav {
    display: flex;
    justify-content: space-around;
    border-top: 2px solid rgba(161, 150, 150, 0.404);
    padding-bottom: 5px;
    padding-top: 8px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      i {
        font-size: 18px;
      }
      span {
        font-size: 14px;
      }
    }
  }
</style>