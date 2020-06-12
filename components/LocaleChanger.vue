<template>
  <div class="navbar-item field">
    <div class="select">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in availableLocales" :key="`Lang${i}`" :value="lang.code">
          {{ lang.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      return this.$i18n.locales
    }
  }
}
</script>

<style scoped>
    .select select {
        border: none;
    }
</style>
