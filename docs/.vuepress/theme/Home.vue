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
@import './styles/config.styl'

.home
  height 100vh
  width 100vw
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

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
