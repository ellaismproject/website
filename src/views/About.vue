<template>
    <div class="about">
        <PageHeading :title="$t('page.about.title')" :subtitle="$t('page.about.subtitle')"/>
        <section class="section">
            <div class="container">
                <div class="content">
                    <p>Ellaism is an <abbr title="Ethereum Virtual Machine">EVM</abbr>-based network with <abbr
                            title="WebAssembly">Wasm</abbr> enabled. It intends to use exclusively “proof of work” to
                        secure the blockchain. It benefits from a zero pre-mine and has no mandatory developer fees with
                        all support and development donated freely by the community. We believe this makes our coin one
                        of the most honest pure Ethereum projects, and something that is uniquely interesting as a
                        platform for serious developers, educators, and enthusiasts.</p>
                    <h3>Roadmap</h3>
                    <p>Below are lists of our roadmap plan. You can submit your suggestions regarding this roadmap to
                        the public Discord server, or privately to <a href="mailto:core@ellaism.io">core@ellaism.io</a>.
                    </p>
                    <h4>Exploratory Topics</h4>
                    <ul>
                        <li>Sharding and blockchain scaling</li>
                        <li>Light client</li>
                        <li>Decentralized bulk storage integrated with blockchain</li>
                        <li><em>And many others</em></li>
                    </ul>
                    <h4>Client and Wallet Development and Maintenance</h4>
                    <ul>
                        <li>Maintain support for <a href="https://github.com/ellaismproject/parity-config">Parity
                            client</a></li>
                    </ul>
                    <h4>Ethereum Virtual Machine and Developer Tools</h4>
                    <ul>
                        <li>Optimize the performance of Ethereum Virtual Machine which will help the network handle more
                            transactions
                        </li>
                        <li>Port and maintain other developer tools for the Ellaism chain, if needed</li>
                    </ul>
                    <h4>Governance System and Hard Forks</h4>
                    <ul>
                        <li>Implement a public interface to incorporate CarbonVote and MinerVote. So everyone can easily
                            find out the current network opinions
                        </li>
                        <li>Support additional rules, such as voting delegation (you delegate your vote to other
                            community members you trust)
                        </li>
                        <li>Work on specifications to standardize CarbonVote and MinerVote</li>
                    </ul>
                    <h4>Ethereum Protocol-level New Features</h4>
                    <ul>
                        <li>Difficulty and total difficulty fix related to uncle and GHOST protocol</li>
                        <li>zkSNARK support with transaction privacy (EIP197)</li>
                        <li>Big integer operations support for RSA related operations (EIP196 and EIP198)</li>
                        <li>New EVM opcodes, including REVERT, RETURNDATASIZE, RETURNDATACOPY, STATICCALL</li>
                    </ul>
                    <h4>Protocol Specification</h4>
                    <ul>
                        <li>Create a clearly defined editor process for protocol specifications</li>
                        <li>Fill and correct missing pieces in the current protocol <a
                                href="https://github.com/ellaismproject/specs">specifications</a></li>
                    </ul>
                    <hr>
                    <h3>Principles</h3>
                    <ul>
                        <li>All changes and upgrades to the protocol should strive to maintain and reinforce these
                            Principles of Ellaism
                        </li>
                        <li>Monetary Policy: 280 million coins</li>
                        <li>No censorship: Nobody should be able to prevent valid txs from being confirmed</li>
                        <li>Open-Source: Ellaism source code should always be open for anyone to read, modify, copy,
                            share
                        </li>
                        <li>Permissionless: No arbitrary gatekeepers should ever prevent anybody from being part of the
                            network (user, node, miner, etc)
                        </li>
                        <li>Pseudonymous: No ID should be required to own, use Ellaism</li>
                        <li>Fungible: All coins are equal and should be equally spendable</li>
                        <li>Irreversible Transactions: Confirmed blocks should be set in stone. Blockchain History
                            should be immutable
                        </li>
                        <li>No Contentious Hard Forks: Never hard fork without consensus from the whole community. Only
                            break the existing consensus when necessary
                        </li>
                        <li>Many feature upgrades can be carried out without a hard fork, such as improving the
                            performance of the EVM
                        </li>
                    </ul>
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
                title: this.$t('page.about.meta_title').toString(),
            };
        },
    })
    export default class About extends Vue {
    }
</script>
