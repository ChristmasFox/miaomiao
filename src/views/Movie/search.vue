<template>
  <div class="searchout">
    <div class="search">
      <i class="iconfont icon-sousuo1"></i>
      <input type="text" class="q">
    </div>
    <div class="res">
      <p class="tit">电影/电视剧/综艺</p>
      <ul>
        <li>
          <img src="https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg?x-oss-process=image/quality,Q_70" alt="">
          <div class="text">
            <h3>无名之辈</h3>
            <p>A Cool Fish</p>
            <p>剧情,戏剧,犯罪</p>
            <p>2018-11-16</p>
          </div>
          <b>9.2</b>
        </li>
        <li>
          <img src="https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg?x-oss-process=image/quality,Q_70" alt="">
          <div class="text">
            <h3>无名之辈</h3>
            <p>A Cool Fish</p>
            <p>剧情,戏剧,犯罪</p>
            <p>2018-11-16</p>
          </div>
          <b>9.2</b>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
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