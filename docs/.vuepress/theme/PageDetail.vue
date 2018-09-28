<template>
  <div class="page-detail">
    <div class="container">
      <div class="page-detail-content">
        <div class="title">{{title}}</div>
        <Content />
      </div>
      <page-right></page-right>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import PageRight from './PageRight.vue'
  import Footer from './Footer'
  import Comments from './Comments.vue'

  export default {
    computed: {
      title() {
        return this.$page.frontmatter.title
      }
    },

    components: {
      PageRight,
      Footer
    }
  }
</script>

<style lang="stylus">
  @import './styles/config.styl'

  .page-detail{
    .container{
      overflow hidden
      width 960px
      min-height 80vh
      margin 80px auto 0
    }
    .page-detail-content{
      width 70%
      float left
      border-radius 2px
      background #ffffff
      .title{
        font-size 26px
        font-weight bold
        padding 20px
        border-bottom: 1px solid #eaecef;
      }
    }
  }

  @media screen and (max-width: $MQMobile) {
    .page-detail{
      .container{
        overflow hidden
        width 100%
        margin 60px auto 0
      }
      .page-detail-content{
        width 100%
        float none
      }
    }
  }
</style>
