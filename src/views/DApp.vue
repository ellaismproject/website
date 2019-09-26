<template>
    <div class="dapp">
        <section class="section">
            <div class="container">
                <h1 class="title">{{ $t('page.dapp.title') }}</h1>
                <h2 class="subtitle">{{ $t('page.dapp.sub_title') }}</h2>
                <hr>
            </div>
            <div class="container">
                <div class="content">
                    <p>The following dapps are currently deployed on the Ellaism network:</p>
                    <ul>
                        <li><a href="https://ens.ellaism.io/" rel="nofollow">Ellaism Name System</a>
                            <ul>
                                <li>Rent a name for your Ellaism address</li>
                            </ul>
                        </li>
                        <!--<li><a href="http://ellaism.org/btcrelay/" rel="nofollow">BTC Relay</a>
                            <ul>
                                <li>Allow your dapps to accept payments in BTC</li>
                            </ul>
                        </li>-->
                        <li><a href="https://handsonahardcoin.com/?network=ella" rel="nofollow">Hands on a Hard Coin</a>
                            <ul>
                                <li>Do you want to play a game?</li>
                            </ul>
                        </li>
                        <li><a href="https://proveit.outdoordevs.com" rel="nofollow">Prove It</a>
                            <ul>
                                <li>Proof of Possesion/Revocation with a provably authentic timestamp</li>
                            </ul>
                        </li>
                        <li><a href="https://kryptium.io" rel="nofollow">Kryptium</a> *<strong>Only binaries are
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

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
    metaInfo() {
        return {
            title: this.$t('page.dapp.meta_title').toString(),
        };
    },
})
export default class DApp extends Vue {
}
</script>
