<template>
  <main>
    <app-header />
    <Nuxt />
    <app-footer />
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import {
  FETCH_NET_INFO,
  FETCH_PRICE,
  STATS_MODULE_NAMESPACE,
} from '~/store/stats'
import AppHeader from '~/components/appHeader'
import AppFooter from '~/components/appFooter'

export default {
  components: { AppHeader, AppFooter },
  data() {
    return {
      fetchNetInfoTask: null,
      fetchPriceTask: null,
    }
  },
  async fetch() {
    await this.$store.dispatch(`${STATS_MODULE_NAMESPACE}/${FETCH_NET_INFO}`)
    await this.$store.dispatch(`${STATS_MODULE_NAMESPACE}/${FETCH_PRICE}`)
  },
  head() {
    const skipAnalytics = !this.$config.analytics.scriptSrc

    return {
      meta: [
        {
          hid: 'generator',
          name: 'generator',
          content: `${process.env.npm_package_name} ${process.env.version}`,
        },
      ],
      script: [
        {
          src: this.$config.analytics.scriptSrc,
          'data-site': this.$config.analytics.siteId,
          'data-included-domains': this.$config.analytics.includedDomains,
          'data-spa': 'auto',
          once: true,
          skip: skipAnalytics,
          defer: true,
        },
      ],
    }
  },
  mounted() {
    this.fetchNetInfoTask = setInterval(() => {
      this.fetchNetInfo()
    }, 15000)
    this.fetchPriceTask = setInterval(() => {
      this.fetchPrice()
    }, 30000)
  },
  beforeDestroy() {
    if (this.fetchNetInfoTask !== null) {
      clearInterval(this.fetchNetInfoTask)
    }
    if (this.fetchPriceTask !== null) {
      clearInterval(this.fetchPriceTask)
    }
  },
  methods: {
    ...mapActions(STATS_MODULE_NAMESPACE, {
      fetchNetInfo: FETCH_NET_INFO,
      fetchPrice: FETCH_PRICE,
    }),
  },
}
</script>
