<template>
    <div class="home">
        <section class="hero is-fullheight-with-navbar">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        {{ $t('page.error404.title') }}
                    </h1>
                    <h2 class="subtitle">
                        {{ $t('page.error404.subtitle') }}
                    </h2>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        metaInfo() {
            return {
                title: this.$t('page.error404.meta_title').toString(),
            };
        },
    })
    export default class Error404 extends Vue {
    }
</script>
