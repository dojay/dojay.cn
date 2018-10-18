<template>
  <div class="d-page-right">
    <div class="about-me">
      <div class="title">关于作者</div>
      <div>
        <img class="user-img" src="/user-img.png" />
      </div>
      <div>
        <div class="info">姓名：王东杰</div>
        <div class="info">昵称：隔壁老王</div>
        <div class="info">爱好：撸猫</div>
        <div class="info">简介：一枚喜欢撸猫的web前端开发</div>
      </div>
      <a class="more-about" href="/about/">更多</a>
    </div>
    <hot-article></hot-article>
  </div>
</template>

<script>
  import HotArticle from './HotArticle'
  export default {
    components: {
      HotArticle
    }
  }
</script>


<style lang="stylus">
  @import './styles/config.styl'
  .d-page-right{
    width 26%
    float left 
    margin-left 2%
    border-radius 2px
    text-align left
    .about-me{
      background #ffffff
      .title{
        font-size 16px
        padding 10px 16px
        border-bottom 1px solid #f3f3f3
      }
      .user-img{
        width 70px
        height 70px
        border-radius 35px
        display block
        margin 10px auto
      }
      .info{
        font-size 14px
        color #666
        margin 10px 20px
      }
      .more-about{
        text-align center
        height 30px
        line-height 30px
        border-top 1px solid #eeeeee 
        width 100%
        font-size 12px
        display inline-block
      }
    }
  }
  @media screen and (max-width: $MQMobile) {
    .d-page-right{
      display none
    }
  }
</style>

