<template>
    <b-navbar type="is-dark" fixed-top wrapper-class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
                <img src="../assets/logo.png" alt="Ellaism"/>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
                Ellaism
            </b-navbar-item>
            <b-navbar-dropdown label="Getting Started">
                <b-navbar-item tag="div">
                    <strong>Users</strong>
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'wallet' }">
                    Wallets
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'mining' }">
                    Mining
                </b-navbar-item>
                <hr class="dropdown-divider">
                <b-navbar-item tag="div">
                    <strong>Developers</strong>
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'testnet' }">
                    Testnet
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'dapp' }">
                    DApps
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'bot' }">
                    Bots
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item tag="router-link" :to="{ name: 'about' }">
                About
            </b-navbar-item>
            <b-navbar-dropdown label="Community">
                <b-navbar-item tag="div">
                    <strong>Official</strong>
                </b-navbar-item>
                <b-navbar-item href="https://explorer.ellaism.io">
                    Ellaism Block Explorer
                </b-navbar-item>
                <b-navbar-item href="https://github.com/ellaism" rel="nofollow">
                    Ellaism GitHub
                </b-navbar-item>
                <hr class="dropdown-divider">
                <b-navbar-item tag="div">
                    <strong>Community</strong>
                </b-navbar-item>
                <b-navbar-item href="https://discordapp.com/invite/gz9tURY" rel="nofollow">
                    Discord
                </b-navbar-item>
                <b-navbar-item href="https://www.reddit.com/r/ellaism/" rel="nofollow">
                    Reddit
                </b-navbar-item>
                <b-navbar-item href="https://t.me/ellaismcoin" rel="nofollow">
                    Telegram
                </b-navbar-item>
                <b-navbar-item href="https://twitter.com/EllaismCore" rel="nofollow">
                    Twitter
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
        <template slot="end">
            <b-navbar-item href="https://explorer.ellaism.io">
                Blockchain Explorer
            </b-navbar-item>
            <b-navbar-item href="https://github.com/ellaism" rel="nofollow" class="no-highlight">
                <i class="fab fa-github"></i>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
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
