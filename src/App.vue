<template>
  <div id="app">

    <div class="headBar">
      在线点餐（西洪店）
    </div>

    <router-link to="/menu">到菜单</router-link>
    <router-link to="/seller">到商家</router-link>

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

    

  }


</style>
