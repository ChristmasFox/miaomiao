<template>
  <div id="main">
    <Header title="我的喵喵"></Header>
    <div id="content">hello mine</div>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
import Header from '@/components/Header'
export default {
  components: {
    Tabbar,
    Header
  }  
}
</script>
<style lang="scss" scoped>
  
</style>