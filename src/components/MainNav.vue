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
                    <span>
                        <b-icon pack="fas" icon="wallet"></b-icon>
                        {{ $t('navigation.getting_started_subnav.wallet') }}
                    </span>
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'mining' }">
                    <span>
                        <b-icon pack="fas" icon="microchip"></b-icon>
                        {{ $t('navigation.getting_started_subnav.mining') }}
                    </span>
                </b-navbar-item>
                <hr class="dropdown-divider">
                <b-navbar-item tag="div">
                    <strong>{{ $t('navigation.getting_started_subnav.developer') }}</strong>
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'testnet' }">
                    <span>
                        <b-icon pack="fas" icon="server"></b-icon>
                        {{ $t('navigation.getting_started_subnav.testnet') }}
                    </span>
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'dapp' }">
                    <span>
                        <b-icon pack="fas" icon="window-restore"></b-icon>
                        {{ $t('navigation.getting_started_subnav.dapp') }}
                    </span>
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'bot' }">
                    <span>
                        <b-icon pack="fas" icon="robot"></b-icon>
                        {{ $t('navigation.getting_started_subnav.bot') }}
                    </span>
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
                    <span>
                        <b-icon pack="fas" icon="cubes"></b-icon>
                        {{ $t('navigation.community_subnav.block_explorer') }}
                    </span>
                </b-navbar-item>
                <b-navbar-item href="https://github.com/ellaism" rel="nofollow">
                    <span>
                        <b-icon pack="fab" icon="github"></b-icon>
                        {{ $t('navigation.community_subnav.github') }}
                    </span>
                </b-navbar-item>
                <hr class="dropdown-divider">
                <b-navbar-item tag="div">
                    <strong>{{ $t('navigation.community_subnav.community') }}</strong>
                </b-navbar-item>
                <b-navbar-item href="https://discordapp.com/invite/gz9tURY" rel="nofollow">
                    <span>
                        <b-icon pack="fab" icon="discord"></b-icon>
                        {{ $t('navigation.community_subnav.discord') }}
                    </span>
                </b-navbar-item>
                <b-navbar-item href="https://www.reddit.com/r/ellaism/" rel="nofollow">
                    <span>
                        <b-icon pack="fab" icon="reddit"></b-icon>
                        {{ $t('navigation.community_subnav.reddit') }}
                    </span>
                </b-navbar-item>
                <b-navbar-item href="https://t.me/ellaismcoin" rel="nofollow">
                    <span>
                        <b-icon pack="fab" icon="telegram"></b-icon>
                        {{ $t('navigation.community_subnav.telegram') }}
                    </span>
                </b-navbar-item>
                <b-navbar-item href="https://twitter.com/EllaismCore" rel="nofollow">
                    <span>
                        <b-icon pack="fab" icon="twitter"></b-icon>
                        {{ $t('navigation.community_subnav.twitter') }}
                    </span>
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

    .navbar a.navbar-item .icon {
        margin-right: 0.5rem;
    }
</style>
