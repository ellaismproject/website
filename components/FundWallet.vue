<template>
  <div class="card">
    <b-loading :active="isLoading" :is-full-page="false" />
    <header class="card-header">
      <p class="card-header-title">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="balance">
        <p class="title">
          {{ addressBalance }}
        </p>
        <i18n path="component.fund_wallet.balance" tag="p" class="subtitle">
          <small slot="hash" class="has-text-grey-light">{{ hash }}</small>
        </i18n>
      </div>
      <div class="content">
        <slot />
      </div>
      <div class="meta">
        <i18n path="component.fund_wallet.signers.message" tag="p">
          <a
            slot="documentation"
            :href="documentationUrl"
          >{{ $t('component.fund_wallet.signers.documentation') }}</a>
        </i18n>
        <i18n path="component.fund_wallet.quorum.message" tag="blockquote">
          <span slot="min">{{ quorumMin }}</span>
          <span slot="total">{{ quorumTotal }}</span>
        </i18n>
      </div>
    </div>
    <footer class="card-footer">
      <a
        v-clipboard:copy="hash"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        class="card-footer-item"
      >{{ $t('component.fund_wallet.footer.copy') }}</a>
      <a
        :href="`https://explorer.ellaism.io/address/${hash}`"
        class="card-footer-item"
      >{{ $t('component.fund_wallet.footer.explorer') }}</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: null,
      type: String
    },
    hash: {
      default: null,
      type: String
    },
    documentationUrl: {
      default: null,
      type: String
    },
    quorumMin: {
      default: null,
      type: String
    },
    quorumTotal: {
      default: null,
      type: String
    }
  },
  data () {
    return {
      isLoading: false,
      address: null
    }
  },
  computed: {
    addressBalance () {
      if (this.address == null || this.address.balance == null) {
        return '0'
      }

      return `${this.address.balance}`
    }
  },
  async created () {
    this.isLoading = true
    try {
      this.address = await this.getAddressByHash(this.hash)
    } catch (e) {
    }
    this.isLoading = false
  },
  methods: {
    async getAddressByHash (hash) {
      return await this.$axios.$get(`${process.env.NUXT_ENV_API_URI}/v1/address/${hash}`)
    },
    onCopy () {
      this.$buefy.toast.open({
        message: this.$t('component.fund_wallet.copy_success_message').toString(),
        type: 'is-success'
      })
    },
    onError () {
      this.$buefy.toast.open({
        message: this.$t('component.fund_wallet.copy_failure_message').toString(),
        type: 'is-danger'
      })
    }
  }
}
</script>

<style lang="sass" scoped>
    .card
        display: flex
        flex-direction: column
        height: 100%

        .card-footer
            margin-top: auto

        .balance
            margin-bottom: 1rem
</style>
