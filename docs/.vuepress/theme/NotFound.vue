<template>
  <div class="page-404">
    <div class="content">
      <img class="404-img" src="/404.png" />
      <div class="tips">对不起，页面迷路了，我们建议您...</div>
      <router-link to="/" class="back-home">返回首页</router-link>
    </div>
  </div>
</template>

<style lang="stylus">
.page-404{
  width 100vw
  height 100vh
  background #ffffff
  .tips{
    color #666666
    font-size 24px
    text-align center
  }
  .back-home{
    width 200px
    height 50px
    border-radius 25px
    background #20a0ff
    border 2px solid #eee
    color #ffffff
    text-align center
    line-height 50px
    display block
    font-size 20px
    margin 20px auto
    cursor pointer
    text-decoration none
  }
}

@media (max-width: $MQMobile)
  .page-404{}
</style>
