<template>
  <div id="main">
    <Header title="我的喵喵"></Header>
    <Login></Login>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
import Header from '@/components/Header'
import Login from '@/components/Login'
export default {
  components: {
    Tabbar,
    Header,
    Login
  }  
}
</script>
<style lang="scss" scoped>
  
</style>