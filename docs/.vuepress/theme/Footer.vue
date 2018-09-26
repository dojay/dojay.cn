<template>
  <div class="d-footer">
    ©2018 隔壁老王 冀ICP备16000662号-1 <a href="mailto:wdojay@gmail.com"></a>
  </div>
</template>

<style lang="stylus">
  @import '../theme/styles/config.styl'
  .d-footer{
    width 100%
    margin 40px auto 0
    height 100px
    border-top 1px solid #eaecef
    text-align center
    line-height 100px
    background #fff
    color #999
    a{
      color #999
      font-weight normal
    }
  }
  @media screen and (max-width: $MQMobile){
    .d-footer{
      width 100%
      margin 20px auto 0
      height 40px
      border-top 1px solid #eaecef
      text-align center
      line-height 40px
      background #fff
      color #999
    }
  }
</style>

