<template>
    <div id="app">
        <HeaderContent/>

        <router-view/>

        <footer class="footer">
            <div class="content has-text-centered">
                <p>&copy; {{ `${year} ${$t('ellaism')}` }}</p>
                <p class="has-text-grey" style="max-width: 560px; margin: 0 auto;">{{ $t('footer_message') }}</p>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HeaderContent from '@/components/HeaderContent.vue';

    @Component({
        components: {
            MainNav,
            HeaderContent,
        },
        metaInfo() {
            return {
                title: this.$t('page.default.meta_title').toString(),
                titleTemplate: this.$t('page.default.meta_title_template').toString(),
            };
        },
    })
    export default class App extends Vue {
        get year(): string {
            return new Date().getFullYear().toString();
        }
    }
</script>

<style lang="scss">
    @import "~bulma/sass/utilities/initial-variables";
    @import "~bulma/sass/utilities/functions";

    $ella: #3D996F;
    $ella-invert: findColorInvert($ella);

    @import "~bulma/sass/utilities/derived-variables";
    $addColors: (
            "ella":($ella, $ella-invert),
    );
    $colors: map-merge($colors, $addColors);

    $navbar-item-img-max-height: 2.25rem;

    @import "~bulma";
    @import "~buefy/src/scss/buefy";

    body {
        cursor: default;
    }
</style>
