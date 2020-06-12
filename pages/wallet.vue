<template>
  <div class="page wallet">
    <PageHeading subtitle-key="page.wallet.subtitle" title-key="page.wallet.title" />
    <section class="section">
      <div class="container">
        <div class="content">
          <p>
            We have multiple clients available you can use to connect to the Ellaism network. You can also
            use MyEtherWallet, MyCrypto and MetaMask to interact with the network.
          </p>

          <h4 class="bl-h4">
            Web
          </h4>
          <ul class="bl-list-bullet bl-spacer-l-m-40 bl-spacer-mob-l-m-30">
            <li>
              <a
                class="bl-text-secondary-underline"
                href="https://mycrypto.com/"
                target="_blank"
              >MyCrypto</a>: Choose ELLA from the top-right dropdown menu.
            </li>
            <li>
              <a
                class="bl-text-secondary-underline"
                href="https://www.myetherwallet.com/"
                target="_blank"
              >MyEtherWallet</a>: Choose ELLA from the top-right dropdown menu.
            </li>
          </ul>

          <h4 class="bl-h4">
            Hardware
          </h4>
          <ul class="bl-list-bullet bl-spacer-b-m-40 bl-spacer-l-m-40 bl-spacer-mob-l-m-30">
            <li>
              <a
                class="bl-text-secondary-underline"
                href="https://www.ledger.com/supported-crypto-assets/"
                target="_blank"
              >Ledger</a>: Ellaism is available on the Ledger Nano S
              and Ledger Blue.
            </li>
          </ul>

          <h5 id="plugin" class="bl-h5-common-spacer bl-h5">
            Browser Plugin
          </h5>
          <p>
            You can also use the MetaMask browser plugin on Ellaism. This plugin allows you to directly
            interact with many Ethereum dapps on the network. To do this:
          </p>
          <ul class="bl-list-bullet bl-spacer-b-m-40 bl-spacer-l-m-40 bl-spacer-mob-l-m-30">
            <li>
              Download <a class="bl-text-secondary-underline" href="https://metamask.io/" target="_blank">MetaMask</a>
              from the official website.
            </li>
            <li>
              After installation, click the MetaMask icon, and choose (in the top left corner of the pop
              up) network selection.
            </li>
            <li>
              Choose “Custom RPC” and Enter <code
                class="highlighter-rouge"
              >https://jsonrpc.ellaism.io</code>. Click “Save”.
            </li>
          </ul>
          <p class="bl-spacer-b-m-40">
            Now you can use dapps directly. For example, try out <a
              class="bl-text-secondary-underline"
              href="http://thetokenfactory.com/#/"
              target="_blank"
            >Token
              Factory </a> which allows you to create a new tokens in minutes.
          </p>

          <h5 class="bl-h5">
            OpenEthereum Full Node
          </h5>
          <p class="bl-spacer-b-m-40">
            Install <a
              class="bl-text-secondary-underline"
              href="https://github.com/openethereum/openethereum/releases"
              target="_blank"
            >OpenEthereum</a>
            Please use OpenEthereum version 1.9.0 or later. Run OpenEthereum with <code
              class="highlighter-rouge"
            >openethereum
              --chain ellaism.json</code>. Include the <code class="highlighter-rouge">--author
              yourellaaddress</code> parameter if you plan to mine using this node.
          </p>

          <h5 id="fullnode" class="bl-h5">
            Mining
          </h5>
          <p>
            If you want to solo mine on the Ellaism network, follow the solo mining guide
            <nuxt-link :to="localePath({name:'mining'})">
              here
            </nuxt-link>
            after you have started a full node.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeading from '~/components/PageHeading'
export default {
  components: {
    PageHeading
  },
  head () {
    return {
      title: this.$t('page.wallet.meta_title')
    }
  }
}
</script>
