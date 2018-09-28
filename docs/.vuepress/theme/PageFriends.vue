<template>
  <div class="page-friends">
    <Content></Content>
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
  </div>
</template>

<script>

  export default {
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
    .content.custom{
      padding 0
    }
    .item-box{
      display flex
      justify-content flex-start
      // align-items center
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
    .more{
      margin-top 20px
      text-align center
    }
  }
  @media screen and (max-width $MQMobile){
    .page-resource{
      width 100%
      min-height 80vh
      margin: 20px auto
      .item-list{
        h3{
          padding-left 10px
        }
        .item-box{
          margin: 0 10px
          .item{
            width 100%
            margin-right 0
            .right{
              float left
              margin-left 10px
              .des{
                width 100%
              }
            }
          }
        }
      }
    }
  }
</style>


