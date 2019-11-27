<template>
    <div class="testnet">
        <div class="hero is-medium is-ella">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">{{ $t('page.testnet.title') }}</h1>
                    <h2 class="subtitle">{{ $t('page.testnet.sub_title') }}</h2>
                </div>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="content">
                    <h2>Autumnus</h2>
                    <p>Ellaism has a Proof-of-Authority (PoA) testnet called "Autumnus". To connect to the testnet,
                        download <a
                                href="https://raw.githubusercontent.com/ellaismproject/parity-config/master/autumnus.json">this
                            file</a> and run:</p>
                    <pre>parity --chain autumnus.json</pre>
                    <p>We choose the PoA consensus algorithm because it provides a stable experience. It is known that
                        Proof-of-Work testnets can be unstable due to lack of nodes.</p>
                    <b-notification type="is-warning" has-icon icon-pack="fa" :closable="false" role="alert">Please be
                        aware that the Autumnus network can be restarted at any time with all states cleared. <strong>Do
                            not use it to store anything important.</strong>
                    </b-notification>
                    <p>Additional facilities you can use on the testnet:</p>
                    <ul>
                        <li>Explorer: <a
                                href="https://explorer.testnet.ellaism.io">https://explorer.testnet.ellaism.io</a> -
                            <strong>Soon</strong></li>
                        <li>JSONRPC Endpoint: <a href="https://jsonrpc.testnet.ellaism.io">https://jsonrpc.testnet.ellaism.io</a>
                            - <strong>Soon</strong></li>
                    </ul>
                    <h2>Faucet</h2>
                    <p>We are currently working on setting up an automated faucet. If you need testnet tokens
                        immediately, join us on Discord and ping majordutch. Otherwise send an email to <a
                                href="mailto:core@ellaism.io">core@ellaism.io</a> with your testnet address and we will
                        manually send you tokens.</p>
                    <!--<p>To get testnet tokens, go to the Discord channel, in #bots channel, run command <code>!testnet
                        send &lt;address&gt;</code> For example:</p>
                    <pre>!testnet send 0x2cbb505641e0c1b0ada0cf0b045014383de94576</pre>
                    <p>You will receive 10 testnet tokens each time issuing this command.</p>-->
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
                title: this.$t('page.testnet.meta_title').toString(),
            };
        },
    })
    export default class Testnet extends Vue {
    }
</script>
