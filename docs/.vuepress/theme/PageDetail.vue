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
</style>
