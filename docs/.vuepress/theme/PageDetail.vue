<template>
  <div class="page-detail">
    <div class="container">
      <div class="page-detail-content">
        <div class="title">{{title}}</div>
        <Content />
        <div :id="path" class="leancloud-visitors" :data-flag-title="title">
          <span class="post-meta-item-text">浏览</span>
          <span class="leancloud-visitors-count"></span>
        </div>
        <div class="line"></div>
        <div id="comments"></div>
      </div>
      <page-right></page-right>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import PageRight from './PageRight.vue'
  import Footer from './Footer'

  window.AV = require('leancloud-storage')
  import Valine from 'valine';

  export default {
    computed: {
      title() {
        return this.$page.frontmatter.title
      },
      path() {
        return window.location.pathname
      }
    },

    mounted() {
      console.log('我执行了')
      // 评论
      new Valine({
        el: '#comments' ,
        appId: 'jajaWXg5GEaojDFo5eq4pq0r-gzGzoHsz',// your appId
        appKey: '7Rb5a62BVxTQRvYG2YdII59F', // your appKey
        notify: false, 
        verify: true, 
        avatar: 'wavatar', 
        meta: ['nick'],
        visitor: true,
        placeholder: '可以在这里吐槽一下~' 
      })
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
      .line{
        height 10px
        width 100%
        background #f3f3f3
      }
    }
    .leancloud-visitors{
      text-align right
      padding 0 8px 8px 0 
      span{
        font-size 12px
        color #999
      }
    }
    .vlist{
      padding: 0 10px
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
