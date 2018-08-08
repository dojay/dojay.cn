<template>
  <div class="d-page-right">
    待定...
  </div>
</template>

<style lang="stylus">
  @import './styles/config.styl'
  .d-page-right{
    height 300px
    width 28%
    float left 
    margin-left 2%
    background #ffffff
    border-radius 2px
    color #cccccc
    line-height 300px
    text-align center
  }
  @media screen and (max-width: $MQMobile) {
    .d-page-right{
      display none
    }
  }
</style>

