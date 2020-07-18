<template>
  <div class="d-page">
    <div class="d-page-left">
      <div class="item-list-box" v-if="list.length > 0">
        <div
          class="item-list"
          v-for="(item, index) in list"
          :key="index"
          @click="handlerClick(item.link)"
        > 
          <div class="date">{{item.date}}</div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <!-- <page-right></page-right> -->
  </div>
</template>

<script>
  import PageRight from './PageRight.vue'
  
  export default {
    data () {
      return {
        pageNo: 1,
        pageSize: 2,
        currentLen: 0,
        list: []
      }
    },

    components: {
      PageRight
    },

    computed: {
      items () {
        return this.$page.frontmatter.items
      },

      totalSize () {
        return this.items && this.items.length || 0
      }
    },

    mounted() {
      if (this.items === null) {
        this.list = []
      }
      const data = this.formatData(this.items)
      this.list = data
    },

    methods: {

      handlerClick (link) {
        this.$router.push(this.$page.path + link + '.html')
      },

      handleMore () {

        if (this.currentLen === this.totalSize) {
          return
        }

        let listData = this.list
        const start = this.currentLen
        const end = this.currentLen + 10

        listData.push(...this.items.slice(start, end))
        this.list = this.formatData(listData)
        
        this.currentLen = listData.length
      },

      formatData(data) {
        return data.map((item) => {
          const date = item.date.substring(0, 10)
          return { ...item, date}
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import './styles/config.styl'

  .d-page {
    width 1024px
    min-height 80vh
    margin: 20px auto
    overflow hidden
    .d-page-left{
      width 100%
      float left
      .item-list-box{
        width 100%
        background #ffffff
        padding 15px
      }
      .item-list {
        background #fff
        padding 6px 0
        display flex
        align-items center
        justify-content flex-start
        .date {
          color #333333
          font-size 14px
          margin-right 10px
        }
        .title{
          font-size 14px
          font-weight 400
          color #0088CC
          cursor pointer
        }
      }
    }
  }
  @media screen and (max-width: $MQMobile) {
    .d-page {
      width 100%
      margin: 10px auto
      .d-page-left{
        width 100%
      }
    }
  }
</style>
