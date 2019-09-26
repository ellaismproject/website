<template>
    <div id="app">
        <header>
            <MainNav/>
        </header>

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
import MainNav from '@/components/MainNav.vue';

@Component({
    components: {
        MainNav,
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

<style>
    body {
        cursor: default;
    }
</style>
