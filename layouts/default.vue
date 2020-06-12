<template>
  <div id="app">
    <HeaderContent />

    <div class="page-wrapper">
      <nuxt />
    </div>

    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from '~/components/HeaderContent'
import FooterContent from '~/components/FooterContent'
export default {
  components: {
    HeaderContent,
    FooterContent
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        }
      ]
    }
  }
}
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/initial-variables"
  @import "~bulma/sass/utilities/functions"

  $link: #3D996F

  $footer-background-color: #313131
  $footer-padding: 3rem 0 0

  $ella: #3D996F
  $ella-invert: findColorInvert($ella)

  @import "~bulma/sass/utilities/derived-variables"
  $addColors: ("ella":($ella, $ella-invert))

  $colors: map-merge($colors, $addColors)

  $navbar-item-img-max-height: 2.25rem

  @import "~bulma"
  @import "~buefy/src/scss/buefy"

  body
    cursor: default

  #app > div.page-wrapper, #app > div.page-wrapper .page
    min-height: 100vh

</style>
