<template>
    <footer class="footer">
        <div class="container">
            <router-link :to="{ name: 'home' }" class="logo-footer">
                <img src="../assets/ellaism-logo-white-name.svg" v-bind:alt="$t('ellaism')">
            </router-link>
            <div class="columns is-multiline">
                <div class="column is-two-fifths is-footer-links">
                    <h1>{{ $t('footer.statement.title') }}</h1>
                    <p>{{ $t('footer.statement.content') }}</p>
                </div>
                <div class="column is-1"></div>
                <div class="column is-footer-links">
                    <p class="footer-links-title">{{ $t('footer.navigation.individual') }}</p>
                    <ul class="footer-links-list">
                        <li>
                            <router-link :to="{ name: 'wallet' }">
                                {{ $t('footer.navigation.individual_subnav.wallet') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'mining' }">
                                {{ $t('footer.navigation.individual_subnav.mining') }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="column is-footer-links">
                    <p class="footer-links-title">{{ $t('footer.navigation.developer') }}</p>
                    <ul class="footer-links-list">
                        <li>
                            <router-link :to="{ name: 'testnet' }">
                                {{ $t('footer.navigation.developer_subnav.testnet') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'dapp' }">
                                {{ $t('footer.navigation.developer_subnav.dapp') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'bot' }">
                                {{ $t('footer.navigation.developer_subnav.bot') }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="column is-footer-links">
                    <p class="footer-links-title">{{ $t('footer.navigation.participate') }}</p>
                    <ul class="footer-links-list">
                        <li>
                            <a href="https://app.stex.com/en/trade/pair/BTC/ELLA/1D" rel="nofollow">
                                Buy at STEX
                            </a>
                        </li>
                        <li>
                            <a href="https://www.coingecko.com/en/coins/ellaism" rel="nofollow">
                                CoinGecko
                            </a>
                        </li>
                        <li>
                            <a href="https://coinpaprika.com/coin/ella-ellaism/" rel="nofollow">
                                coinpaprika
                            </a>
                        </li>
                        <li>
                            <a href="https://whattomine.com/coins/221-ella-ethash" rel="nofollow">
                                What To Mine
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="column is-footer-links">
                    <p class="footer-links-title">{{ $t('footer.navigation.other') }}</p>
                    <ul class="footer-links-list">
                        <li>
                            <router-link :to="{ name: 'donate' }">
                                {{ $t('footer.navigation.other_subnav.donate') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'about' }">
                                {{ $t('footer.navigation.other_subnav.about') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'privacy' }">
                                {{ $t('footer.navigation.other_subnav.privacy') }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="level">
                    <div class="level-left">
                        <i18n path="footer.copyright" tag="p">
                            <span slot="symbol">&copy;</span>
                            <span slot="year">{{year}}</span>
                        </i18n>
                    </div>
                    <div class="level-right">
                        <a href="https://stats.ellascout.com">
                            <b-icon pack="fas" icon="circle" size="is-small"/>
                            {{ $t('footer.network_status') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class FooterContent extends Vue {
        get year(): string {
            return new Date().getFullYear().toString();
        }
    }
</script>

<style lang="sass" scoped>
    @import "~bulma/sass/utilities/all"

    .footer
        color: #9D9D9D

    .logo-footer
        display: block
        text-align: center
        margin-bottom: 3rem

        img
            max-height: 2.25rem

    .is-footer-links
        text-align: center

    +tablet
        .is-footer-links
            text-align: inherit

    p.footer-links-title, h1
        color: #9D9D9D
        font-weight: bold
        line-height: 3rem

    .footer-links-list a
        color: #9D9D9D
        line-height: 2.25rem

    .footer-bottom
        margin-top: 3rem
        padding: 1.5rem
        background-color: #242424

    +mobile
        .footer-bottom
            text-align: center

    .footer-bottom a
        color: #9D9D9D

        span.icon
            color: $primary
            width: 1.5rem
</style>
