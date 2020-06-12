<template>
  <div class="page dapp">
    <PageHeading title-key="page.dapp.title" subtitle-key="page.dapp.subtitle" />
    <section class="section">
      <div class="container">
        <div class="content">
          <p>The following dapps are currently deployed on the Ellaism network:</p>
          <ul>
            <li>
              <a href="https://ens.ellaism.io/" rel="nofollow">Ellaism Name System</a>
              <ul>
                <li>Rent a name for your Ellaism address</li>
              </ul>
            </li>
            <!--<li><a href="http://ellaism.org/btcrelay/" rel="nofollow">BTC Relay</a>
                            <ul>
                                <li>Allow your dapps to accept payments in BTC</li>
                            </ul>
                        </li>-->
            <li>
              <a href="https://handsonahardcoin.com/?network=ella" rel="nofollow">Hands on a Hard Coin</a>
              <ul>
                <li>Do you want to play a game?</li>
              </ul>
            </li>
            <li>
              <a href="https://proveit.outdoordevs.com" rel="nofollow">Prove It</a>
              <ul>
                <li>Proof of Possesion/Revocation with a provably authentic timestamp</li>
              </ul>
            </li>
            <li>
              <a href="https://kryptium.io" rel="nofollow">Kryptium</a> *<strong>Only binaries are
                provided for the front end, please use a VM to run them.</strong>
              <ul>
                <li>Place a bet using Ellaism on real world events</li>
              </ul>
            </li>
          </ul>
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
      title: this.$t('page.dapp.meta_title')
    }
  }
}
</script>
