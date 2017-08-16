<template>
  <div id="app">
    <div class="headBar">
      在线点餐（西洪店）
    </div>
    <div class="nav">
      <div class="nav-item">
        <router-link class="nav-link" to="/menu">点单</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view> 
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app'
}
</script>
<style lang="scss">

  #app{
    .headBar{
      height: 53px;
      background: #18B4ed;
      color: #fff;
      line-height: 53px;
      text-align: center;
    }
    .nav{
      height: 48px;
      display: flex;
      line-height: 48px;
      .nav-item{
        flex-grow : 1;
        text-align: center;
        .nav-link{
          display: block;  
          &.router-link-active{
            color: #d45604;
            border-bottom: 3px solid #d45604;
          }  
        }
      }
    }
  }


</style>
