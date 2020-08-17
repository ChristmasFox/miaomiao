<template>
  <div id="main">
    <Header title="喵喵影院"></Header>
    <div id="content">
      <div class="cinema-menu">
        <div class="cinema-item">全城<i class="iconfont icon-xiala2"></i></div>
        <div class="cinema-item">品牌<i class="iconfont icon-xiala2"></i></div>
        <div class="cinema-item">特色<i class="iconfont icon-xiala2"></i></div>
      </div>
      <div class="cinema-list">
        <ul>
          <li>
            <div class="addr">
              <b>大地影院(奥东世纪店)</b>
              <p>金州区大连经济技术开发区澳东世纪3层</p>
              <span class="tag">小吃</span><span class="tag">折扣卡</span>
              <span class="price"><span>22.9</span>元起</span>
            </div>
            <div class="distence">1763.5km</div>
          </li>
          <li>
            <div class="addr">
              <b>大地影院(奥东世纪店)</b>
              <p>金州区大连经济技术开发区澳东世纪3层</p>
              <span class="tag">小吃</span><span class="tag">折扣卡</span>
              <span class="price"><span>22.9</span>元起</span>
            </div>
            <div class="distence">1763.5km</div>
          </li>
          <li>
            <div class="addr">
              <b>大地影院(奥东世纪店)</b>
              <p>金州区大连经济技术开发区澳东世纪3层</p>
              <span class="tag">小吃</span><span class="tag">折扣卡</span>
              <span class="price"><span>22.9</span>元起</span>
            </div>
            <div class="distence">1763.5km</div>
          </li>
          <li>
            <div class="addr">
              <b>大地影院(奥东世纪店)</b>
              <p>金州区大连经济技术开发区澳东世纪3层</p>
              <span class="tag">小吃</span><span class="tag">折扣卡</span>
              <span class="price"><span>22.9</span>元起</span>
            </div>
            <div class="distence">1763.5km</div>
          </li>
          <li>
            <div class="addr">
              <b>大地影院(奥东世纪店)</b>
              <p>金州区大连经济技术开发区澳东世纪3层</p>
              <span class="tag">小吃</span><span class="tag">折扣卡</span>
              <span class="price"><span>22.9</span>元起</span>
            </div>
            <div class="distence">1763.5km</div>
          </li>
          
        </ul>
      </div>
    </div>
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
.cinema-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(143, 143, 143, 0.377);
}
.cinema-list {
  overflow-x: none;
  ul {
    li {
      margin: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(143, 143, 143, 0.377);
      padding: 20px 0;
      .addr {
        width: 75%;
        box-sizing: border-box;
        position: relative;
        b {
          line-height: 24px;
        }
        p {
          font-size: 12px;
          line-height: 25px;
          color: rgba(97, 97, 97, 0.952);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .tag {
          color: rgb(163, 190, 38);
          border: 1px solid rgb(177, 216, 5);
          font-size: 13px;
          padding: 0 5px;
          border-radius: 3px;
          margin-right: 5px;
        }
        .price {
          position: absolute;
          right: 5px;
          top: 0;
          font-size: 13px;
          color: red;
          span {
            font-size: 18px;
          }
        }
      }
      .distence {
        font-size: 13px;
        color: rgba(97, 97, 97, 0.952);
      }
    }
  }
}
</style>