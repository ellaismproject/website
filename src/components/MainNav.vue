<template>
    <b-navbar type="is-dark" fixed-top wrapper-class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
                <img src="../assets/logo.png" v-bind:alt="$t('navigation.ellaism')"/>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
                {{ $t('navigation.ellaism') }}
            </b-navbar-item>
            <b-navbar-dropdown v-bind:label="$t('navigation.getting_started')">
                <b-navbar-item tag="div">
                    <strong>{{ $t('navigation.getting_started_subnav.user') }}</strong>
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'wallet' }">
                    {{ $t('navigation.getting_started_subnav.wallet') }}
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'mining' }">
                    {{ $t('navigation.getting_started_subnav.mining') }}
                </b-navbar-item>
                <hr class="dropdown-divider">
                <b-navbar-item tag="div">
                    <strong>{{ $t('navigation.getting_started_subnav.developer') }}</strong>
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'testnet' }">
                    {{ $t('navigation.getting_started_subnav.testnet') }}
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'dapp' }">
                    {{ $t('navigation.getting_started_subnav.dapp') }}
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'bot' }">
                    {{ $t('navigation.getting_started_subnav.bot') }}
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item tag="router-link" :to="{ name: 'about' }">
                {{ $t('navigation.about') }}
            </b-navbar-item>
            <b-navbar-dropdown v-bind:label="$t('navigation.community')">
                <b-navbar-item tag="div">
                    <strong>{{ $t('navigation.community_subnav.official') }}</strong>
                </b-navbar-item>
                <b-navbar-item href="https://explorer.ellaism.io">
                    {{ $t('navigation.community_subnav.block_explorer') }}
                </b-navbar-item>
                <b-navbar-item href="https://github.com/ellaism" rel="nofollow">
                    {{ $t('navigation.community_subnav.github') }}
                </b-navbar-item>
                <hr class="dropdown-divider">
                <b-navbar-item tag="div">
                    <strong>{{ $t('navigation.community_subnav.community') }}</strong>
                </b-navbar-item>
                <b-navbar-item href="https://discordapp.com/invite/gz9tURY" rel="nofollow">
                    {{ $t('navigation.community_subnav.discord') }}
                </b-navbar-item>
                <b-navbar-item href="https://www.reddit.com/r/ellaism/" rel="nofollow">
                    {{ $t('navigation.community_subnav.reddit') }}
                </b-navbar-item>
                <b-navbar-item href="https://t.me/ellaismcoin" rel="nofollow">
                    {{ $t('navigation.community_subnav.telegram') }}
                </b-navbar-item>
                <b-navbar-item href="https://twitter.com/EllaismCore" rel="nofollow">
                    {{ $t('navigation.community_subnav.twitter') }}
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
        <template slot="end">
            <b-navbar-item href="https://explorer.ellaism.io">
                {{ $t('navigation.blockchain_explorer') }}
            </b-navbar-item>
            <b-navbar-item href="https://github.com/ellaism" rel="nofollow" class="no-highlight">
                <i class="fab fa-github"></i>
            </b-navbar-item>
            <!--<LocaleChanger/>-->
        </template>
    </b-navbar>
</template>

<script lang="ts">
import {Component, Vue, PropSync} from 'vue-property-decorator';
import LocaleChanger from '@/components/LocaleChanger.vue';

@Component({
    components: {LocaleChanger},
})
export default class MainNav extends Vue {
}
</script>

<style scoped>
    .navbar.is-dark .navbar-brand > a.navbar-item:focus,
    .navbar.is-dark .navbar-brand > a.navbar-item:hover,
    .navbar.is-dark .navbar-brand > a.navbar-item.is-active,
    .navbar a.navbar-item.no-highlight:focus,
    .navbar a.navbar-item.no-highlight:hover,
    .navbar a.navbar-item.no-highlight.is-active {
        background-color: transparent !important;
    }
</style>
