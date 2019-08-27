<template>
  <div id="app">
    <keep-alive include="classify,home,car,my">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>  
export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style lang="scss">
.wrap{
  @include width(100%);
  @include height(100%);
  @include sizing;
  @include box_flex;
  @include direction(column);
  header{
      width: 100%;
      height: pxTorem(44px);
      text-align: center;
      font-size:pxTorem(18px);
      line-height: pxTorem(44px);
  }
  .main{
    flex: 1;
    @include width(100%);
    @include height(100%);
    @include hidden;
    font-size:pxTorem(18px);
    overflow:auto;
  }
}
</style>
