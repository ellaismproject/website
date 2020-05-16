<template>
    <header>
        <b-navbar class="is-nav" wrapper-class="container">
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ name: 'home' }">
                    <img src="../assets/ellaism-logo-color-name.svg" v-bind:alt="$t('ellaism')"/>
                </b-navbar-item>
            </template>
            <template slot="end">
                <LocaleChanger/>
            </template>
            <template slot="start">
                <b-navbar-dropdown v-bind:label="$t('navigation.individual')">
                    <b-navbar-item tag="router-link" :to="{ name: 'wallet' }">
                    <span>
                        <b-icon pack="fas" icon="wallet"/>
                        {{ $t('navigation.individual_subnav.wallet') }}
                    </span>
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ name: 'mining' }">
                    <span>
                        <b-icon pack="fas" icon="microchip"/>
                        {{ $t('navigation.individual_subnav.mining') }}
                    </span>
                    </b-navbar-item>
                </b-navbar-dropdown>
                <b-navbar-dropdown v-bind:label="$t('navigation.developer')">
                    <b-navbar-item tag="router-link" :to="{ name: 'testnet' }">
                    <span>
                        <b-icon pack="fas" icon="server"/>
                        {{ $t('navigation.developer_subnav.testnet') }}
                    </span>
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ name: 'dapp' }">
                    <span>
                        <b-icon pack="fas" icon="window-restore"/>
                        {{ $t('navigation.developer_subnav.dapp') }}
                    </span>
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ name: 'bot' }">
                    <span>
                        <b-icon pack="fas" icon="robot"/>
                        {{ $t('navigation.developer_subnav.bot') }}
                    </span>
                    </b-navbar-item>
                </b-navbar-dropdown>
                <b-navbar-dropdown v-bind:label="$t('navigation.resource')">
                    <b-navbar-item tag="div">
                        <strong>{{ $t('navigation.resource_subnav.official') }}</strong>
                    </b-navbar-item>
                    <b-navbar-item href="https://explorer.ellaism.io">
                    <span>
                        <b-icon pack="fas" icon="cubes"/>
                        {{ $t('navigation.resource_subnav.block_explorer_1') }}
                    </span>
                    </b-navbar-item>
                    <b-navbar-item href="https://stats.ellascout.com" rel="nofollow">
                    <span>
                        <b-icon pack="fas" icon="heartbeat"/>
                        {{ $t('navigation.resource_subnav.network_status') }}
                    </span>
                    </b-navbar-item>
                    <b-navbar-item href="https://github.com/ellaismproject" rel="nofollow">
                    <span>
                        <b-icon pack="fab" icon="github"/>
                        {{ $t('navigation.resource_subnav.github') }}
                    </span>
                    </b-navbar-item>
                    <hr class="dropdown-divider">
                    <b-navbar-item tag="div">
                        <strong>{{ $t('navigation.resource_subnav.community') }}</strong>
                    </b-navbar-item>
                    <b-navbar-item href="https://discordapp.com/invite/gz9tURY" rel="nofollow">
                    <span>
                        <b-icon pack="fab" icon="discord"/>
                        {{ $t('navigation.resource_subnav.discord') }}
                    </span>
                    </b-navbar-item>
                    <b-navbar-item href="https://www.reddit.com/r/ellaism/" rel="nofollow">
                    <span>
                        <b-icon pack="fab" icon="reddit"/>
                        {{ $t('navigation.resource_subnav.reddit') }}
                    </span>
                    </b-navbar-item>
                    <b-navbar-item href="https://t.me/ellaismproject" rel="nofollow">
                    <span>
                        <b-icon pack="fab" icon="telegram"/>
                        {{ $t('navigation.resource_subnav.telegram') }}
                    </span>
                    </b-navbar-item>
                    <b-navbar-item href="https://twitter.com/ellacommunity" rel="nofollow">
                    <span>
                        <b-icon pack="fab" icon="twitter"/>
                        {{ $t('navigation.resource_subnav.twitter') }}
                    </span>
                    </b-navbar-item>
                </b-navbar-dropdown>
                <b-navbar-item tag="router-link" :to="{ name: 'donate' }">
                    {{ $t('navigation.donate') }}
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'about' }">
                    {{ $t('navigation.about') }}
                </b-navbar-item>
            </template>
        </b-navbar>
    </header>
</template>

<script lang="ts">
    import {Component, Vue, PropSync} from 'vue-property-decorator';
    import LocaleChanger from '@/components/LocaleChanger.vue';

    @Component({
        components: {LocaleChanger},
    })
    export default class HeaderContent extends Vue {
    }
</script>

<style>
    .navbar.is-nav .navbar-brand > a.navbar-item:focus,
    .navbar.is-nav .navbar-brand > a.navbar-item:hover,
    .navbar.is-nav .navbar-brand > a.navbar-item.is-active,
    .navbar a.navbar-item.no-highlight:focus,
    .navbar a.navbar-item.no-highlight:hover,
    .navbar a.navbar-item.no-highlight.is-active {
        background-color: transparent !important;
    }

    .navbar a.navbar-item .icon {
        margin-right: 0.5rem;
    }

    .navbar .navbar-start {
        flex-grow: 1;
        justify-content: center;
    }
</style>
