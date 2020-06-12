<template>
  <div class="hero is-medium is-ella is-heading">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          {{ $t(titleKey) }}
        </h1>
        <h2 v-if="subtitleKey" class="subtitle">
          {{ $t(subtitleKey) }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleKey: {
      default: null,
      type: String
    },
    subtitleKey: {
      default: null,
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
    @import '~bulma/sass/utilities/all'

    .is-heading
        padding-bottom: 30px
        background: url(../assets/page-heading-divider.svg) bottom no-repeat
        background-size: cover

    +desktop
        .is-heading
            padding-bottom: 60px
</style>
