<template>
    <div class="testnet">
        <PageHeading title-key="page.testnet.title" subtitle-key="page.testnet.subtitle"/>
        <section class="section">
            <div class="container">
                <div class="content">
                    <p>Ellaism has a Proof-of-Authority (PoA) testnet called "Autumnus". The testnet settings are
                        similar to mainnet, however we chose the PoA consensus algorithm because it provides a stable
                        experience. More information about proof-of-authority consensus can be found in the <a
                                href="https://wiki.parity.io/Proof-of-Authority-Chains">Parity documentation</a> and on
                        <a href="https://en.wikipedia.org/wiki/Proof_of_authority">Wikipedia</a>.</p>
                    <b-notification type="is-warning" has-icon icon-pack="fa" :closable="false" role="alert">Please be
                        aware that the Autumnus network can be restarted at any time with all states cleared. <strong>Do
                            not use it to store anything important.</strong>
                    </b-notification>
                    <h2>Getting Started</h2>
                    <p>It is easy to connect to the Autumnus testnet! To get started, download the <a
                            href="https://raw.githubusercontent.com/ellaismproject/parity-config/master/autumnus.json">autumnus
                        testnet configuration</a> and run:</p>
                    <pre>parity --chain autumnus.json</pre>
                    <p>Additional facilities you can use on the testnet:</p>
                    <ul>
                        <li>Explorer: <a
                                href="https://explorer.testnet.ellaism.io">https://explorer.testnet.ellaism.io</a> -
                            <strong>Soon</strong></li>
                        <li>JSONRPC Endpoint: <a href="https://jsonrpc.testnet.ellaism.io">https://jsonrpc.testnet.ellaism.io</a>
                            - <strong>Soon</strong></li>
                    </ul>
                    <h2>Testnet Faucet</h2>
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
    import PageHeading from '@/components/PageHeading.vue';

    @Component({
        components: {PageHeading},
        metaInfo() {
            return {
                title: this.$t('page.testnet.meta_title').toString(),
            };
        },
    })
    export default class Testnet extends Vue {
    }
</script>
