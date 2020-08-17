<template>
  <div class="header">
    <p>{{ title }}</p>  
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '喵喵电影'
    }
  }
}
</script>
<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 50px;
    background-color: rgb(248, 2, 43);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
  }
</style>