<template>
    <div class="hero is-medium is-ella is-heading">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">{{ $t(syncedTitleKey) }}</h1>
                <h2 class="subtitle" v-if="syncedSubtitleKey">{{ $t(syncedSubtitleKey) }}</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, PropSync} from 'vue-property-decorator';

    @Component({})
    export default class PageHeading extends Vue {
        @PropSync('titleKey')
        public readonly syncedTitleKey!: string;

        @PropSync('subtitleKey')
        public readonly syncedSubtitleKey?: string;
    }
</script>

<style lang="sass" scoped>
    @import '~bulma/sass/utilities/all'

    .is-heading
        padding-bottom: 30px
        background: url(../assets/page-heading-divider.svg) bottom no-repeat
        background-size: cover

    +desktop
        .is-heading
            padding-bottom: 60px
</style>
