<template>
  <div class="nowout">
    <ul>
      <li>
        <img src="https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg?x-oss-process=image/quality,Q_70" alt="">
        <div class="text">
          <h3>无名之辈</h3>
          <p>观众评<b>9.2</b></p>
          <p>主演:鸡一名 鸡二名鸡一名 鸡二名鸡一名 鸡二名鸡一名 鸡二名鸡一名 鸡二名鸡一名 鸡二名鸡一名 鸡二名鸡一名 鸡二名鸡一名 鸡二名鸡一名 鸡二名鸡一名 鸡二名</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="bought">预售</div>
      </li>
      <li>
        <img src="https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg?x-oss-process=image/quality,Q_70" alt="">
        <div class="text">
          <h3>无名之辈</h3>
          <p>观众评<b>9.2</b></p>
          <p>主演:鸡一名 鸡二名</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="bought">预售</div>
      </li>
      <li>
        <img src="https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg?x-oss-process=image/quality,Q_70" alt="">
        <div class="text">
          <h3>无名之辈</h3>
          <p>观众评<b>9.2</b></p>
          <p>主演:鸡一名 鸡二名</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="bought">预售</div>
      </li>
      <li>
        <img src="https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg?x-oss-process=image/quality,Q_70" alt="">
        <div class="text">
          <h3>无名之辈</h3>
          <p>观众评<b>9.2</b></p>
          <p>主演:鸡一名 鸡二名</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="bought">预售</div>
      </li>
      <li>
        <img src="https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg?x-oss-process=image/quality,Q_70" alt="">
        <div class="text">
          <h3>无名之辈</h3>
          <p>观众评<b>9.2</b></p>
          <p>主演:鸡一名 鸡二名</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="bought">预售</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .nowout { 
    overflow: scroll;
  }
  ul {
    width: 100%;
    li {
      padding: 10px 5px;
      box-sizing: border-box;
      display: flex;
      position: relative;
      img {
        width: 20%;
        margin-right: 7px;
      }
      
      .text {
        width: 55%;
        p {
          font-size: 13px;
          line-height: 22px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        b {
          margin-left: 5px;
          font-size: 15px;
          color: rgb(255, 208, 0);
          line-height: 15px;
        }
      }
      .bought {
        background-color: rgb(93, 93, 248);
        color: white;
        font-size: 13px;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
        height: 30px;
        width: 50px;
        position: absolute;
        top: 35%;
        right: 10px;
      }
    }
  }
</style>