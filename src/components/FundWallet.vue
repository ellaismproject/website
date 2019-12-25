<template>
    <div class="card">
        <b-loading :active="isLoading" :is-full-page="false"/>
        <header class="card-header">
            <p class="card-header-title">{{syncedTitle}}</p>
        </header>
        <div class="card-content">
            <div class="balance">
                <p class="title">{{addressBalance}}</p>
                <i18n path="component.fund_wallet.balance" tag="p" class="subtitle">
                    <small class="has-text-grey-light" slot="hash">{{ syncedHash }}</small>
                </i18n>
            </div>
            <div class="content">
                <slot/>
            </div>
            <div class="meta">
                <i18n path="component.fund_wallet.signers.message" tag="p">
                    <a :href="syncedDocumentationUrl"
                       slot="documentation">{{ $t('component.fund_wallet.signers.documentation') }}</a>
                </i18n>
                <i18n path="component.fund_wallet.quorum.message" tag="blockquote">
                    <span slot="min">{{ syncedQuorumMin }}</span>
                    <span slot="total">{{ syncedQuorumTotal }}</span>
                </i18n>
            </div>
        </div>
        <footer class="card-footer">
            <a v-clipboard:copy="syncedHash" v-clipboard:success="onCopy" v-clipboard:error="onError"
               class="card-footer-item">{{ $t('component.fund_wallet.footer.copy') }}</a>
            <a :href="`https://explorer.ellaism.io/address/${syncedHash}`"
               class="card-footer-item">{{ $t('component.fund_wallet.footer.explorer') }}</a>
        </footer>
    </div>
</template>

<script lang="ts">
    import {Component, PropSync, Vue} from 'vue-property-decorator';
    import ApiService from '@/services/ApiService';
    import Address from '@/models/Address';

    @Component({})
    export default class DevelopmentFundWallet extends Vue {
        @PropSync('hash')
        public readonly syncedHash!: string;

        @PropSync('title')
        public readonly syncedTitle!: string;

        @PropSync('documentationUrl')
        public readonly syncedDocumentationUrl!: string;

        @PropSync('quorumMin')
        public readonly syncedQuorumMin!: number;

        @PropSync('quorumTotal')
        public readonly syncedQuorumTotal!: number;

        public address: Address | null = null;
        public isLoading: boolean = false;
        private api = new ApiService();

        public async created() {
            this.isLoading = true;
            try {
                this.address = await this.api.getAddressByHash(this.syncedHash);
            } catch (e) {
            }
            this.isLoading = false;
        }

        public async onCopy() {
            this.$buefy.toast.open({
                message: this.$t('component.fund_wallet.copy_success_message').toString(),
                type: 'is-success',
            });
        }

        public async onError() {
            this.$buefy.toast.open({
                message: this.$t('component.fund_wallet.copy_failure_message').toString(),
                type: 'is-danger',
            });
        }

        get addressBalance() {
            if (this.address == null || this.address.balance == null) {
                return '0';
            }

            return `${this.address.balance}`;
        }
    }
</script>

<style lang="sass" scoped>
    .card
        display: flex
        flex-direction: column
        height: 100%

        .card-footer
            margin-top: auto

        .balance
            margin-bottom: 1rem
</style>
