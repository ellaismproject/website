<template>
    <div id="app">
        <header>
            <MainNav/>
        </header>

        <router-view/>

        <footer class="footer">
            <div class="content has-text-centered">
                <p>&copy; {{year}} Ellaism</p>
                <p class="has-text-grey" style="max-width: 560px; margin: 0 auto;">Ellaism is not funded nor controlled
                    by any entity, it is a community driven EVM-based network with WASM enabled.</p>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import MainNav from "@/components/MainNav.vue";

    @Component({
        components: {
            MainNav,
        },
        metaInfo() {
            return {
                title: 'Ellaism',
                titleTemplate: '%s | Open-source Platform for Decentralized Applications'
            };
        },
    })
    export default class App extends Vue {
        get year(): string {
            return new Date().getFullYear().toString();
        }
    }
</script>
