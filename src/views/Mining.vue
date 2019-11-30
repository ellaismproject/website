<template>
    <div class="mining">
        <PageHeading title-key="page.mining.title" subtitle-key="page.mining.subtitle"/>
        <section class="section">
            <div class="container">
                <div class="content">
                    <p>Ellaism uses the <span class="bl-text-italic">ethash</span> proof of work algorithm, the same
                        algorithm used in Ethereum and Ethereum Classic.</p>
                    <h5>Solo Mining</h5>
                    <p>Set up a Parity full node as described on the
                        <router-link :to="{name:'wallet'}">Ellaism Wallets</router-link>
                        page. After that, you can use any ethash miner (such as <a
                                href="https://github.com/ethereum-mining/ethminer" target="_blank">ethminer</a>) to mine
                        Ellaism. To mine using your GPU, run ethminer <code class="highlighter-rouge">ethminer -G -F
                            http://localhost:8545</code>.
                    </p>

                    <h5>Pools</h5>
                    <!--<p>Pool mining helps miners to compensate “bad luck” and share “good luck” when it comes. This pool
                        maintains several infrastructures on Ellaism, like the BTC Relay fetchd script, and contributes
                        directly to the
                        <router-link :to="{name:'donate'}">development fund</router-link>
                        .
                    </p>

                    <p>You can also check out the current pool hashrates in Explorer's <a
                            href="https://explorer.ellaism.io/miners">miner ranking</a>. Pools have their own
                        instructions of how to set your miners up.</p>-->

                    <p>Pools that Donate to Dev Fund / Community Fund</p>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>Pool</th>
                                <th align="right">Donation (% from fee)</th>
                                <th align="right">Mining fee</th>
                            </tr>
                            </thead>
                            <tbody>
                            <!--<tr>
                                <td><a href="https://pool.ellaism.org" rel="nofollow">Dev Pool</a></td>
                                <td align="right">100</td>
                                <td align="right">1</td>
                            </tr>-->
                            <tr>
                                <td><a href="http://ella.pool.sexy" rel="nofollow">Pool Sexy</a></td>
                                <td align="right">2.5</td>
                                <td align="right">0.25</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p><strong>Pools using Ellaism's version of <a
                            href="https://github.com/ellaism/open-ethereum-pool">open-ethereum-pool</a></strong></p>
                    <p>Ellaism maintains its own fork of <a href="https://github.com/ellaism/open-ethereum-pool">open-ethereum-pool</a>
                        with improvements of memory usage, network latency and PPLNS support.
                        Below is the list of pools using this fork.</p>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th align="left">Pool</th>
                                <th align="center">Country</th>
                                <th>Client</th>
                                <th align="right">Version</th>
                            </tr>
                            </thead>
                            <tbody>
                            <!--<tr>
                                <td align="left"><a href="https://pool.ellaism.org/" rel="nofollow">Dev Mining
                                    Pool</a></td>
                                <td align="center"></td>
                                <td>Parity</td>
                                <td align="right">1.10.6</td>
                            </tr>-->
                            <tr>
                                <td align="left"><a href="https://ella.mypool.online"
                                                    rel="nofollow">MyPool.Online</a></td>
                                <td align="center"></td>
                                <td>Parity</td>
                                <td align="right"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p><strong>All Pools</strong></p>
                    <p>Other pools may also have advantages in their setup or shares of mining fees.
                        Contact <a href="mailto:core@ellaism.io">core@ellaism.io</a> or ping @majordutch on <a
                                href="https://discordapp.com/invite/gz9tURY" rel="nofollow">Discord</a> if you want
                        your pool
                        added to this list.</p>
                    <div id="user-content-all-pools">
                        <ul>
                            <li><a href="http://clona.ru" rel="nofollow">Clona.ru</a></li>
                            <li><a href="http://pool.baikalmine.com/en/ella/" rel="nofollow">BaikalMine</a></li>
                            <li><a href="http://comining.io/" rel="nofollow">Comining</a></li>
                            <li><a href="http://ella.digipools.org" rel="nofollow">DigiPools</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import PageHeading from '@/components/PageHeading.vue';

    @Component({
        components: {PageHeading},
        metaInfo() {
            return {
                title: this.$t('page.mining.meta_title').toString(),
            };
        },
    })
    export default class Mining extends Vue {
    }
</script>
