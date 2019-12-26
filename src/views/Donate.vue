<template>
    <div class="page donate">
        <PageHeading title-key="page.donate.title" subtitle-key="page.donate.subtitle"/>
        <section class="section">
            <div class="container">
                <div class="content">
                    <p>{{ $t('page.donate.intro') }}</p>
                    <blockquote>
                        <p>{{ $t('page.donate.governance_note') }}</p>
                    </blockquote>
                    <h2>{{ $t('page.donate.donation_title') }}</h2>
                    <p>{{ $t('page.donate.donation_intro') }}</p>
                    <div class="columns">
                        <div class="column">
                            <FundWallet hash="0xe9C2d958E6234c862b4AfBD75b2fd241E9556303"
                                        :title="$t('page.donate.development_fund_title')"
                                        documentation-url="https://github.com/ellaismproject/ellaism/blob/master/doc/funds.md#development-fund-wallet"
                                        quorum-min="2" quorum-total="3">
                                <p>{{ $t('page.donate.development_fund_intro') }}</p>
                                <ul>
                                    <li>{{ $t('page.donate.development_fund_point_1') }}</li>
                                    <li>{{ $t('page.donate.development_fund_point_2') }}</li>
                                    <li>{{ $t('page.donate.development_fund_point_3') }}</li>
                                    <li>{{ $t('page.donate.development_fund_point_4') }}</li>
                                </ul>
                            </FundWallet>
                        </div>
                        <div class="column">
                            <FundWallet hash="0x01ff0ffd25b64de2217744fd7d4dc4aa3cabcee7"
                                        :title="$t('page.donate.community_fund_title')"
                                        documentation-url="https://github.com/ellaismproject/ellaism/blob/master/doc/funds.md#community-fund-wallet"
                                        quorum-min="6" quorum-total="11">
                                <p>{{ $t('page.donate.community_fund_intro') }}</p>
                                <ul>
                                    <li>{{ $t('page.donate.community_fund_point_1') }}</li>
                                    <li>{{ $t('page.donate.community_fund_point_2') }}</li>
                                    <li>{{ $t('page.donate.community_fund_point_3') }}</li>
                                </ul>
                            </FundWallet>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import PageHeading from '@/components/PageHeading.vue';
    import FundWallet from '@/components/FundWallet.vue';

    @Component({
        components: {PageHeading, FundWallet},
        metaInfo() {
            return {
                title: this.$t('page.donate.meta_title').toString(),
            };
        },
    })
    export default class Donate extends Vue {
    }
</script>
