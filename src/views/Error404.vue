<template>
    <div class="home">
        <section class="hero is-fullheight-with-navbar">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        Not Found
                    </h1>
                    <h2 class="subtitle">
                        The requested page was not found.
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
            title: 'Not Found',
        };
    },
})
export default class Error404 extends Vue {
}
</script>
