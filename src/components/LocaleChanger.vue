<template>
    <div class="navbar-item field">
        <div class="select">
            <select v-model="$i18n.locale">
                <option v-for="(lang, i) in syncedLanguages" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
            </select>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, PropSync} from 'vue-property-decorator';

@Component({})
export default class LocaleChanger extends Vue {
    @PropSync('languages', {default: () => ['en', 'de']})
    public readonly syncedLanguages!: string[];
}
</script>
