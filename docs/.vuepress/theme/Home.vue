<template>
  <div class="home">
    <div class="logo">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="logo"
      >

      <h1>{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">{{data.description}}</p>

    </div>

    <div class="links">
      <a class="button" v-for="item in data.features" :href="item.links" :target="item.target ? '_blank' : ''">{{item.title}}</a>
    </div>

  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="stylus">
.home
  height 100vh
  background #f8f8f8
  display flex
  justify-content center
  align-items center
  flex-direction column
  .logo
    text-align center
    img
      max-height 160px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 2rem
      margin 1.8rem auto
    .description
      color #6a8bad
  .links
    margin-top 20px
    border-top 1px solid #eee
    a
      display: inline-block;
      min-width: 2.5rem;
      background-color: #fff;
      border: 1px solid #ebeef5;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      padding: .6rem 1rem;
      margin: .5rem 1rem;
      border-radius: 1.5rem;
      text-align center
</style>
