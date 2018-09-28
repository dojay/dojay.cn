<template>
  <div class="page-friends">
    <div class="tips-title">不积跬步无以至千里，不积小流无以成江海。</div>
    <div class="item-box">
      <a
        class="item"
        v-for="item in list"
        :key="item.title"
        :href="item.links"
        target="_blank"
      >
        <div class="left">
          <img :src="item.icon" alt="">
        </div>
        <div class="right">
          <div class="title">{{item.title}}</div>
          <div class="des">{{item.des}}</div>
        </div>
      </a>
    </div>
    <div class="tip-box">
      <h4>友链申请</h4>
      <div class="tip-item">
        <span class="title">申请方式:</span>
        <span class="ml">1. 直接在下方评论区留言</span>
        <span class="ml">
          2. 发邮箱: <a href="mailto:dojaycn@163.com">dojaycn@163.com</a>
          ，或者去github留言<a target="_blank" href="https://github.com/dojay/dojay.cn">dojay</a></span>
      </div>
      <div class="tip-item">
        <span class="title">申请格式(已我的为例):</span>
        <span class="ml blue">请首先确定在 贵站 可以看到本站链接</span>
        <span class="ml">名称：隔壁老王的随笔</span>
        <span class="ml">链接：https://dojay.cn</span>
        <span class="ml">网站Logo：https://dojay.cn/favicon.png</span>
        <span class="ml">简介：一枚喜欢撸猫的web前端开发</span>
      </div>
      <!-- <div class="tip-item">
        <span class="title">注意事项:</span>
        <span class="ml">如果您的链接违反国家规定, 我将不会通过您的申请</span>
        <span class="ml">网站Logo：https://dojay.cn/favicon.png</span>
        <span class="ml">简介：一枚喜欢撸猫的web前端开发</span>
      </div> -->
    </div>
    <Comments></Comments>
  </div>
</template>

<script>
  import Comments from './Comments.vue'

  export default {
    components: {
      Comments
    },
    computed: {
      list() {
        return this.$page.frontmatter.items
      }
    }
  }
</script>

<style lang="stylus">
  @import './styles/config.styl'
  .page-friends{
    width 960px
    min-height 80vh
    margin: 20px auto
    background #ffffff
    padding-top 1px
    .tips-title{
      text-align center
      color #666
      margin 30px 0
      font-size 14px
      &:before{
        content ''
        width 200px
        height 1px
        background #ccc
        display inline-block
        vertical-align middle
        margin-right 20px
      }
      &:after{
        content ''
        width 200px
        height 1px
        background #ccc
        display inline-block
        vertical-align middle
        margin-right 20px
      }
    }
    .content.custom{
      padding 0
    }
    .item-box{
      display flex
      justify-content flex-start
      flex-direction row
      flex-wrap wrap
      min-height 30vh
      .item{
        background #ffffff
        width 190px
        height 40px
        border-radius 4px
        background #fff
        cursor pointer
        padding 16px
        display block
        transition all .2s ease-out
        overflow hidden
        margin 0 24px 10px 0
        &:nth-child(4n){
          margin-right 0
        }
        &:hover{
          box-shadow 0 0 8px #cccccc
        }
        .left{
          float left
          img{
            width 40px
            height 40px
            display block
            float left
          }
        }
        .right{
          float left
          margin-left 10px
          .title{
            width 100%
            font-size 14px
            font-weight 500
            color #3d3d3d
            letter-spacing .2px
            white-space nowrap
            overflow hidden
            display -webkit-flex
            display -ms-flexbox
            display flex
            transition color .3s ease-out
          }
          .des{
            margin-top 3px
            width 140px
            font-size 12px
            color #909090
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            transition color .3s ease-out
          }
        }
      }
    }
    .tip-box{
      h4{
        margin 6px 20px
        // text-align center
        color #666
      }
      .title{
        margin-left 20px
      }
      .tip-item{
        margin-bottom 20px
        span{
          font-size 12px
          display block
          line-height 26px
          color #999
          &.ml{
            margin-left 40px
          }
          &.blue{
            color #20a0ff
          }
        }
      }
    }
    .more{
      margin-top 20px
      text-align center
    }
  }
  @media screen and (max-width $MQMobile){
    .page-friends{
      width 100%
      .tips-title{
        &:before,&:after{
          display none
        }
      }
    }
  }
</style>


