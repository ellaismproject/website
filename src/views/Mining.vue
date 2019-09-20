<template>
    <div class="mining">
        <section class="section">
            <div class="container">
                <h1 class="title">Mining Ellaism</h1>
                <hr>
            </div>
            <div class="container">
                <div class="content">
                    <p>
                        Ellaism uses the <span class="bl-text-italic">ethash</span> proof of work algorithm, the same
                        algorithm used in Ethereum and Ethereum Classic.
                    </p>

                    <h5 id="solomining" class="bl-h5-common-spacer bl-h5">Solo Mining</h5>
                    <p class="bl-spacer-b-m-40">
                        Follow the guide in <a href="/installation/"
                                               class="bl-text-secondary-underline">Installation</a> to either set up a
                        Parity or Geth full node. After that, you can use any ethash miner (such as <a
                            href="https://github.com/ethereum-mining/ethminer" target="_blank"
                            class="bl-text-secondary-underline">ethminer</a>) to mine Ellaism. To mine using your GPU,
                        run ethminer <code class="highlighter-rouge">ethminer -G -F http://localhost:8545</code>.
                    </p>

                    <h5 id="pools" class="bl-h5">Pools</h5>
                    <p>
                        Pool mining helps miners to compensate “bad luck” and share “good luck” when it comes. Help is
                        appreciated to keep the <a href="#" class="bl-text-secondary-underline"
                                                   target="_blank">
                        Dev Mining Pool
                    </a> running. This pool maintains several infrastructures on Ellaism, like the BTC Relay fetchd
                        script, and contributes directly to the <a href="/donate/" class="bl-text-secondary-underline"
                                                                   target="_blank">Dev Fund</a>.
                        <br><br>
                        You can also check out the current pool hashrates in Explorer’s <a
                            href="https://explorer.ellaism.io/miners" class="bl-text-secondary-underline"
                            target="_blank">miners’ ranking</a>. Pools have their own instructions of how to set your
                        miners up.
                    </p>

                    <h6 class="bl-h6"><span>
             Pools that Donate to Dev Fund
           </span></h6>

                    <h6 class="bl-h6"><span>
             Pools using Ellaism's version of </span><span><a href="https://github.com/ellaism/open-ethereum-pool"
                                                              class="bl-text-secondary-b" target="_blank">open-ethereum-pool</a></span><span>
           </span></h6>
                    <p>
                        Ellaism maintains its own fork of <a href="https://github.com/ellaism/open-ethereum-pool"
                                                             target="_blank" class="bl-text-secondary">open-ethereum-pool</a>
                        with improvements of memory usage, network latency and PPLNS support.
                        Below is the list of pools using this fork.
                    </p>

                    <h6 class="bl-h6"><span>
             All Pools
           </span></h6>
                    <p>
                        Other pools may also have advantages in their setup or shares of mining fees.
                        Contact <a href="mailto:core@ellaism.io">core@ellaism.io</a>
                        or ping @ellaismer on <a href="https://discordapp.com/invite/gz9tURY" target="_blank"
                                                 class="bl-text-secondary">Discord</a> if you want your pool added to
                        this list.
                    </p>
                    <article class="markdown-body entry-content p-3 p-md-6" itemprop="text">

                        <p><strong>Pools that Donate to Dev Fund / Community Fund</strong></p>
                        <div id="user-content-dev-pools">
                            <table>
                                <thead>
                                <tr>
                                    <th>Pool</th>
                                    <th align="right">Donation (% from fee)</th>
                                    <th align="right">Mining fee</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><a href="https://pool.ellaism.org" rel="nofollow">Dev Pool</a></td>
                                    <td align="right">100</td>
                                    <td align="right">1</td>
                                </tr>
                                <tr>
                                    <td><a href="http://ella.pool.sexy" rel="nofollow">Pool Sexy</a></td>
                                    <td align="right">2.5</td>
                                    <td align="right">0.25</td>
                                </tr>
                                <tr>
                                    <td><a href="http://ella.cgpools.io/" rel="nofollow">CoinGarden</a></td>
                                    <td align="right">50</td>
                                    <td align="right">1</td>
                                </tr>
                                <tr>
                                    <td><a href="https://ella-speedpool.com/" rel="nofollow">SpeedPool</a></td>
                                    <td align="right">10</td>
                                    <td align="right">0.1</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Pools using Ellaism's version of <a
                                href="https://github.com/ellaism/open-ethereum-pool">open-ethereum-pool</a></strong></p>
                        <p>Ellaism maintains its own fork of <a href="https://github.com/ellaism/open-ethereum-pool">open-ethereum-pool</a>
                            with improvements of memory usage, network latency and PPLNS support.
                            Below is the list of pools using this fork.</p>
                        <div id="user-content-oep-pools">
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
                                <tr>
                                    <td align="left"><a href="https://pool.ellaism.org/" rel="nofollow">Dev Mining
                                        Pool</a></td>
                                    <td align="center"></td>
                                    <td>Parity</td>
                                    <td align="right">1.10.6</td>
                                </tr>
                                <tr>
                                    <td align="left"><a href="http://ella.poolhub.org/" rel="nofollow">poolHUB</a></td>
                                    <td align="center"></td>
                                    <td></td>
                                    <td align="right"></td>
                                </tr>
                                <tr>
                                    <td align="left"><a href="https://ella.mypool.online"
                                                        rel="nofollow">MyPool.Online</a></td>
                                    <td align="center"></td>
                                    <td>Parity</td>
                                    <td align="right"></td>
                                </tr>
                                <tr>
                                    <td align="left"><a href="https://ella-speedpool.com" rel="nofollow">SpeedPool</a>
                                    </td>
                                    <td align="center"></td>
                                    <td>Parity</td>
                                    <td align="right">v1.10.8</td>
                                </tr>
                                <tr>
                                    <td align="left"><a href="https://ellapool.net" rel="nofollow">EllaPool</a></td>
                                    <td align="center"></td>
                                    <td>Parity</td>
                                    <td align="right">v1.10.9</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>All Pools</strong></p>
                        <p>Other pools may also have advantages in their setup or shares of mining fees.
                            Contact <a href="mailto:core@ellaism.io">core@ellaism.io</a> or ping @ellaismer on <a
                                    href="https://discordapp.com/invite/gz9tURY" rel="nofollow">Discord</a> if you want your pool
                            added to this list.</p>
                        <div id="user-content-all-pools">
                            <ul>
                                <li><a href="http://ella.ethash-coins.ru" rel="nofollow">Ethash-coins.ru</a></li>
                                <li><a href="http://ella.coinminer.space" rel="nofollow">CoinminerSpace</a></li>
                                <li><a href="http://ella.altpool.pro" rel="nofollow">AltpoolPro</a></li>
                                <li><a href="http://ella-solo.cryptodig.ru" rel="nofollow">Cryptodig.ru</a></li>
                                <li><a href="https://2miners.com" rel="nofollow">2miners</a></li>
                                <li><a href="http://megapool.io/ella" rel="nofollow">MegaPool</a></li>
                                <li><a href="http://clona.ru" rel="nofollow">Clona.ru</a></li>
                                <li><a href="http://pool.baikalmine.com/en/ella/" rel="nofollow">BaikalMine</a></li>
                                <li><a href="http://ella.cryptopool.network" rel="nofollow">cryptopool.network</a></li>
                                <li><a href="http://ella.minerpool.net" rel="nofollow">Ella Minerpool</a></li>
                                <li><a href="https://ella.solopool.org" rel="nofollow">SoloPool</a></li>
                                <li><a href="http://comining.io/" rel="nofollow">Comining</a></li>
                                <li><a href="http://ella.digipools.org" rel="nofollow">DigiPools</a></li>
                                <li><a href="http://ella.nevermining.org" rel="nofollow">Nevermining</a></li>
                                <li><a href="https://ella.upool.in" rel="nofollow">Upool.in</a></li>
                                <li><a href="http://ella.noobpool.com" rel="nofollow">Noobpool</a></li>
                                <li><a href="https://bekopool.io/" rel="nofollow">BekoPool</a></li>
                                <li><a href="https://www.cubepool.eu" rel="nofollow">CubePool</a></li>
                                <li><a href="https://ella-speedpool.com" rel="nofollow">SpeedPool</a></li>
                                <li><a href="http://ella.arsmine.com" rel="nofollow">Arsmine</a></li>
                                <li><a href="http://ella.soyminero.es" rel="nofollow">Soyminero</a></li>
                            </ul>
                        </div>
                    </article>
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
            title: 'Mining Ellaism',
        };
    },
})
export default class Mining extends Vue {
}
</script>
