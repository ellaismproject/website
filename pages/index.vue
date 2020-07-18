<template>
  <div class="page home">
    <section class="hero is-large is-intro">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="hero-summary is-size-1-desktop is-size-3">
            {{ $t('page.home.summary') }}
          </p>
          <div class="buttons">
            <b-button type="is-ella" size="is-medium" tag="nuxt-link" :to="localePath({ name: 'about' })">
              {{ $t('page.home.about_ella') }}
            </b-button>
            <b-button type="is-ella" size="is-medium" tag="nuxt-link" :to="localePath({ name: 'wallet' })" outlined>
              {{ $t('page.home.choose_wallet') }}
            </b-button>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium is-ella is-overview">
      <div class="hero-body">
        <div class="container has-text-centered">
          <i18n path="page.home.pitch.content" tag="p" class="is-pitch is-size-3-desktop is-size-5">
            <abbr slot="evm" :title="this.$t('page.home.pitch.ethereum_virtual_machine')">{{
              $t('page.home.pitch.evm') }}</abbr>
            <abbr slot="wasm" :title="this.$t('page.home.pitch.webassembly')">{{
              $t('page.home.pitch.wasm') }}</abbr>
          </i18n>
          <b-button
            tag="nuxt-link"
            :to="localePath({ name: 'testnet' })"
            class="is-medium"
            type="is-dark"
            icon-pack="fas"
            icon-left="info-circle"
          >
            {{ $t('page.home.pitch.button') }}
          </b-button>
        </div>
      </div>
    </section>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title is-4">
                  <b-icon type="fas" icon="terminal" />
                  {{ $t('page.home.card_1.title') }}
                </p>
                <div class="content">
                  <p>{{ $t('page.home.card_1.content') }}</p>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title is-4">
                  <b-icon type="fas" icon="balance-scale" />
                  {{ $t('page.home.card_2.title') }}
                </p>
                <div class="content">
                  <p>{{ $t('page.home.card_2.content') }}</p>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title is-4">
                  <b-icon type="fas" icon="users" />
                  {{ $t('page.home.card_3.title') }}
                </p>
                <div class="content">
                  <p>{{ $t('page.home.card_3.content') }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  @import '~bulma/sass/utilities/all'

  .is-overview
    padding-top: 30px
    background: url(../assets/home-overview-divider.svg) top no-repeat
    background-size: cover

  +desktop
    .is-overview
      padding-top: 50px

  .is-intro
    .hero-summary
      max-width: 750px
      margin: 0 auto 1.75rem
      font-weight: lighter

    .buttons
      justify-content: center

  .is-pitch
    margin-bottom: 1.75rem
    font-weight: lighter
</style>