<template>
    <footer class="footer">
        <div class="container">
            <router-link :to="{ name: 'home' }" class="logo-footer">
                <img src="../assets/ellaism-logo-white-name.svg" v-bind:alt="$t('ellaism')">
            </router-link>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="level">
                    <div class="level-left">
                        <i18n path="copyright" tag="p">
                            <span slot="symbol">&copy;</span>
                            <span slot="year">{{year}}</span>
                        </i18n>
                    </div>
                    <div class="level-right">
                        <a href="https://stats.ellascout.com">
                            <b-icon pack="fas" icon="circle" size="is-small"/>
                            {{ $t('navigation.resource_subnav.network_status') }}</a>
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

<style lang="scss" scoped>
    @import "~bulma/sass/utilities/all";

    .logo-footer {
        display: block;
        text-align: center;
        margin-bottom: 3rem;
    }

    .logo-footer img {
        max-height: 2.25rem;
    }

    .footer-bottom {
        color: #9D9D9D;
        padding: 1.5rem;
        background-color: #242424;
    }

    @media screen and (max-width: $tablet - 1px) {
        .footer-bottom {
            text-align: center;
        }
    }

    .footer-bottom a {
        color: #9D9D9D;
    }

    .footer-bottom a span.icon {
        color: $primary;
        width: 1.5rem;
    }
</style>
