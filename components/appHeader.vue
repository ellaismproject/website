<template>
  <header>
    <b-navbar toggleable="lg" type="dark" class="mb-0">
      <b-container>
        <b-navbar-brand
          :to="localePath({ name: 'index' })"
          class="d-flex justify-content-center align-items-center rounded-left"
        >
          <img
            src="~/assets/ellaism-logo-white.svg"
            width="40"
            height="40"
            :alt="$t('ellaism')"
          />
          <span class="ml-2">{{ $t('ellaism') }}</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              href="https://explorer.ellaism.io"
              target="_blank"
              rel="noopener"
            >
              {{ $t('navigation.explorer') }}
            </b-nav-item>
            <b-nav-item-dropdown :text="$t('navigation.resources')">
              <b-dropdown-item
                href="https://github.com/ellaismproject/ellaism"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'github']" class="mr-1" />
                {{ $t('navigation.resourcesGithub') }}
              </b-dropdown-item>
              <div class="dropdown-divider"></div>
              <b-dropdown-item
                href="https://discord.gg/rndbuSz"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon :icon="['fab', 'discord']" class="mr-1" />
                {{ $t('navigation.resourcesDiscord') }}
              </b-dropdown-item>
              <b-dropdown-item
                href="https://t.me/ellaismproject"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'telegram']" class="mr-1" />
                {{ $t('navigation.resourcesTelegram') }}
              </b-dropdown-item>
              <b-dropdown-item
                href="https://www.reddit.com/r/ellaism/"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'reddit']" class="mr-1" />
                {{ $t('navigation.resourcesReddit') }}
              </b-dropdown-item>
              <b-dropdown-item
                href="https://twitter.com/ellacommunity"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'twitter']" class="mr-1" />
                {{ $t('navigation.resourcesTwitter') }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables';

/deep/ .navbar {
  background-color: theme-color('primary');
  margin-bottom: 1.875rem;
}
</style>
