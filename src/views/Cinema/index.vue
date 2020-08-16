<template>
  <div id="main">
    <Header title="喵喵影院"></Header>
    <div id="content">hello cinema</div>
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