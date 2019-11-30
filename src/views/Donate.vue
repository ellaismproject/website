<template>
    <div class="donate">
        <PageHeading title-key="page.donate.title" subtitle-key="page.donate.subtitle"/>
        <section class="section">
            <div class="container">
                <div class="content">
                    <p>Ellaism did not have an ICO and is a coin without a pre-mine. Donations are welcomed to keep
                        those that contributed to the coin rewarded. This page was set up so that you can donate to some
                        people who have contributed code either directly or indirectly to Ellaism.</p>
                    <h3>Development Fund</h3>
                    <p><span class="mr"><strong>0xe9C2d958E6234c862b4AfBD75b2fd241E9556303</strong></span>
                        <a href="https://explorer.ellaism.io/address/0xe9c2d958e6234c862b4afbd75b2fd241e9556303"
                           class="button is-small"><span>View on Explorer</span>
                            <b-icon pack="fas" icon="external-link-alt"/>
                        </a></p>
                    <p>The Development Fund is a multisig wallet used to support the core development team, operate
                        infrastructures of Ellaism, and encourage other development activities related to the Ellaism
                        blockchain. <!--You can find the current signer information, deployment details and instructions for
                        verifying the proof from this document. Financial reports are published every month for
                        transparency. You can learn more about the role which Dev Fund and Ellaism Core plays in the
                        whole Ellaism community from the roadmap.--></p>
                    <p>Currently the fund is used for:</p>
                    <ul>
                        <li>Ellaism blockchain explorer</li>
                        <li>Ellaism public JSON-RPC API</li>
                        <li>Ellaism specifications and protocol upgrades</li>
                        <li>Ellaism Name System (ENS)</li>
                        <li>Other core development activities</li>
                    </ul>
                    <!--<p> Besides making donations, you can also support the Dev Fund by joining the Dev Mining Pool and
                        many other mining pools. You can find more information in Mining. The transparency page shows
                        all the outgoing transactions from the Dev Fund.</p>-->
                    <hr>
                    <h3>Community Fund</h3>
                    <p><span class="mr"><strong>0x01ff0FFd25B64dE2217744fd7d4dc4aA3cAbceE7</strong></span> <a
                            href="https://explorer.ellaism.io/address/0x01ff0ffd25b64de2217744fd7d4dc4aa3cabcee7"
                            class="button is-small"><span>View on Explorer</span>
                        <b-icon pack="fas" icon="external-link-alt"/>
                    </a></p>
                    <p>The Community Fund is a multisig wallet is managed by community members to support community
                        activities on the Ellaism blockchain. You can find the current signer information and deployment
                        details from this document. The transparency page shows all the outgoing transactions from the
                        Community Fund.</p>
                    <hr>
                    <h3>Split Contract</h3>
                    <p><span class="mr"><strong>0xEDae451f57B5bfF81d1D9eE64F591Ad6a865a652</strong></span> <a
                            href="https://explorer.ellaism.io/address/0xedae451f57b5bff81d1d9ee64f591ad6a865a652"
                            class="button is-small"><span>View on Explorer</span>
                        <b-icon pack="fas" icon="external-link-alt"/>
                    </a></p>
                    <p>This contract allows you to split your donation evenly between the Development Fund and Community
                        Fund.</p>
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
                title: this.$t('page.donate.meta_title').toString(),
            };
        },
    })
    export default class Donate extends Vue {
    }
</script>

<style scoped>
    .mr {
        margin-right: 0.5rem;
    }
</style>
