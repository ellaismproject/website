<template>
    <div class="hero is-medium is-ella is-heading">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">{{ syncedTitle }}</h1>
                <h2 class="subtitle">{{ syncedSubtitle }}</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, PropSync} from 'vue-property-decorator';

    @Component({})
    export default class PageHeading extends Vue {
        @PropSync('title')
        public readonly syncedTitle!: string;

        @PropSync('subtitle')
        public readonly syncedSubtitle!: string;
    }
</script>

<style lang="scss" scoped>
    @import '~bulma/sass/utilities/initial-variables';

    .is-heading {
        padding-bottom: 60px;
        background: url(../assets/page-heading-divider.svg) bottom no-repeat;
        background-size: cover;
    }

    @media screen and (min-width: $desktop) {
        .is-heading {
            padding-bottom: 100px;
        }
    }
</style>
