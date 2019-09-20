<template xmlns="http://www.w3.org/1999/html">
    <div class="testnet">
        <section class="section">
            <div class="container">
                <h1 class="title">Ellaism Testnet</h1>
                <hr>
            </div>
            <div class="container">
                <div class="content">
                    <h2>ProgPoW (Mtihani)</h2>
                    <p>Help us test out ProgPoW mining. This testnet has mostly identical settings comparing Ellaism
                        mainnet, but with ProgPOW transition happening at block 0. </p>
                    <p><a href="https://wiki.ellaism.io/progpow">Setup instructions</a> are being developed by the
                        community.</p>
                    <h2>Shikinseki</h2>
                    <p>
                        Ellaism has a Proof of Authority (PoA) testnet called “Shikinseki”.
                        <br>
                        To connect to the testnet, <a
                            href="https://raw.githubusercontent.com/ellaism/parity-config/master/shikinseki.json"
                            class="bl-text-secondary">download</a> this file and run:
                    </p>

                    <div class="bl-highlight-wrapper"><pre class="highlight"><code>parity --chain shikinseki.json
          </code></pre>
                    </div>

                    <p class="bl-pre-line">
                        We choose PoA consensus algorithm because it provides a stable experience. It is known that PoW
                        testnets
                        can be unstable due to lack of nodes. And please note that the testnet might be restarted at any
                        time
                        with all states cleared. Don’t use it to store anything important.

                        Additional facilities you can use on the testnet:
                    </p>
                    <ul class="bl-list-bullet bl-spacer-b-m-40 bl-spacer-l-m-40 bl-spacer-mob-l-m-30">
                        <li>Explorer: <a href="https://explorer.testnet.ellaism.io" target="_blank"
                                         class="bl-text-secondary-underline">https://explorer.testnet.ellaism.io</a>
                        </li>
                        <li>JSONRPC Endpoint: <a href="https://jsonrpc.testnet.ellaism.io" target="_blank"
                                                 class="bl-text-secondary-underline">
                            https://jsonrpc.testnet.ellaism.io
                        </a></li>
                    </ul>
                    <h2 class="bl-h2">
                        Shikinseki Faucet
                    </h2>
                    <p>
                        To get some testnet token, go to the Discord channel, in #bots channel, run command <code
                            class="highlighter-rouge">!testnet send &lt;address&gt;</code> For example:
                    </p>

                    <div class="bl-highlight-wrapper">
                        <pre class="highlight"><code>!testnet send 0x2cbb505641e0c1b0ada0cf0b045014383de94576</code></pre>
                    </div>

                    <p>
                        You will receive 10 testnet tokens each time issuing this command.
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
            title: 'Ellaism Testnet',
        };
    },
})
export default class Testnet extends Vue {
}
</script>
