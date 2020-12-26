<template>
  <footer>
    <div class="footer-bottom">
      <div class="container py-3 text-center">
        <i18n path="footer.copyright">
          <span slot="symbol">&copy;</span>
          <span slot="year">{{ year }}</span>
          <span slot="name">{{ $t('ellaism') }}</span>
        </i18n>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
footer {
  color: #ffffff;
  background-color: #282828;
}
</style>
