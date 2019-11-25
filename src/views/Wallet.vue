<template>
    <div class="wallet">
        <section class="section">
            <div class="container">
                <h1 class="title">{{ $t('page.wallet.title') }}</h1>
                <hr>
            </div>
            <div class="container">
                <div class="content">
                    <p>
                        We have multiple clients available you can use to connect to the Ellaism network. You can also
                        use
                        MyEtherWallet, MyCrypto and MetaMask to interact with the network.
                    </p>

                    <h4 class="bl-h4">Desktop</h4>
                    <ul class="bl-list-bullet bl-spacer-l-m-40 bl-spacer-mob-l-m-30">
                        <li><a href="https://github.com/ellaism/shell/releases" target="_blank"
                               class="bl-text-secondary-underline">Ellaism Shell</a>: Ellaism-branded desktop wallet and
                            dapp
                            browser.
                        </li>
                    </ul>

                    <h4 class="bl-h4">Web</h4>
                    <ul class="bl-list-bullet bl-spacer-l-m-40 bl-spacer-mob-l-m-30">
                        <li><a href="https://mycrypto.com/account" target="_blank"
                               class="bl-text-secondary-underline">MyCrypto</a>: Choose ELLA from the top-right dropdown
                            menu.
                        </li>
                        <li><a href="https://www.myetherwallet.com/" target="_blank"
                               class="bl-text-secondary-underline">MyEtherWallet</a>:
                            Choose ELLA from the top-right dropdown menu.
                        </li>
                    </ul>

                    <h4 class="bl-h4">Mobile</h4>
                    <ul class="bl-list-bullet bl-spacer-l-m-40 bl-spacer-mob-l-m-30">
                        <li><a href="https://play.google.com/store/apps/details?id=com.outdoordevs.ellaism.wallet"
                               target="_blank" class="bl-text-secondary-underline">Android</a>: Ellaism is available on
                            Android
                            via the Google Play Store.
                        </li>
                        <li><a href="https://itunes.apple.com/us/app/ellaism-wallet/id1397079303?mt=8" target="_blank"
                               class="bl-text-secondary-underline">iOS</a>: Ellaism is available on iOS via the Apple
                            App Store
                        </li>
                    </ul>

                    <h4 class="bl-h4">Hardware</h4>
                    <ul class="bl-list-bullet bl-spacer-b-m-40 bl-spacer-l-m-40 bl-spacer-mob-l-m-30">
                        <li><a href="https://www.ledger.com/pages/supported-crypto-assets" target="_blank"
                               class="bl-text-secondary-underline">Ledger</a>: Ellaism is available on the Ledger Nano S
                            and
                            Ledger Blue.
                        </li>
                    </ul>

                    <h5 id="plugin" class="bl-h5-common-spacer bl-h5">Browser Plugin</h5>
                    <p>You can also use the MetaMask browser plugin on Ellaism. This plugin allows you to directly
                        interact with
                        many Ethereum dapps on the network. To do this:</p>
                    <ul class="bl-list-bullet bl-spacer-b-m-40 bl-spacer-l-m-40 bl-spacer-mob-l-m-30">
                        <li>Download <a href="https://metamask.io/" target="_blank"
                                        class="bl-text-secondary-underline">MetaMask</a> from the official website.
                        </li>
                        <li>After installation, click the MetaMask icon, and choose (in the top left corner of the pop
                        </li>
                        up) network selection.
                        <li>Choose “Custom RPC” and Enter <code
                                class="highlighter-rouge">https://jsonrpc.ellaism.io</code>.
                            Click “Save”.
                        </li>
                    </ul>
                    <p class="bl-spacer-b-m-40">
                        Now you can use dapps directly. For example, try out <a target="_blank"
                                                                                class="bl-text-secondary-underline"
                                                                                href="http://thetokenfactory.com/#/">Token
                        Factory </a> which allows you to create a new tokens in minutes.
                    </p>

                    <h5 id="fullnode" class="bl-h5">
                        Parity Full Node
                    </h5>
                    <p class="bl-spacer-b-m-40">
                        Install <a href="https://github.com/paritytech/parity/releases" target="_blank"
                                   class="bl-text-secondary-underline">Parity from Parity’s official website.</a> Please
                        use
                        Parity version 1.9.0 or later. Run Parity with <code class="highlighter-rouge">parity --chain
                        ellaism</code>.

                        Include the <code class="highlighter-rouge">--author yourellaaddress</code> parameter if you
                        plan to
                        mine using this node.
                    </p>

                    <h5 id="fullnode" class="bl-h5">
                        Mining
                    </h5>
                    <p>
                        If you want to solo mine on the Ellaism network, follow the solo mining guide <router-link :to="{name:'mining'}">here</router-link>
                        after you have started a full node.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
    metaInfo() {
        return {
            title: this.$t('page.wallet.meta_title').toString(),
        };
    },
})
export default class Wallet extends Vue {
}
</script>
