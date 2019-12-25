<template>
    <div id="app">
        <HeaderContent/>

        <div class="page-wrapper">
            <router-view/>
        </div>

        <FooterContent/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HeaderContent from '@/components/HeaderContent.vue';
    import FooterContent from '@/components/FooterContent.vue';

    @Component({
        components: {
            FooterContent,
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
    }
</script>

<style lang="sass">
    @import "~bulma/sass/utilities/initial-variables"
    @import "~bulma/sass/utilities/functions"

    $link: #3D996F

    $footer-background-color: #313131
    $footer-padding: 3rem 0 0

    $ella: #3D996F
    $ella-invert: findColorInvert($ella)

    @import "~bulma/sass/utilities/derived-variables"
    $addColors: ("ella":($ella, $ella-invert))

    $colors: map-merge($colors, $addColors)

    $navbar-item-img-max-height: 2.25rem

    @import "~bulma"
    @import "~buefy/src/scss/buefy"

    body
        cursor: default

    #app > div.page-wrapper, #app > div.page-wrapper .page
        min-height: 100vh

</style>
