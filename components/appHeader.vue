<template>
  <header>
    <div class="top-nav small py-1 d-none d-md-block">
      <div class="container">
        <ul class="list-inline mb-0 text-center">
          <li class="list-inline-item">
            <i18n path="navigation.blockHeight">
              <span slot="amount">{{ height }}</span>
            </i18n>
          </li>
          <li class="list-inline-item">
            <i18n path="navigation.networkHashrate">
              <span slot="amount">{{ hashrate }}</span>
            </i18n>
          </li>
          <li class="list-inline-item">
            <i18n path="navigation.marketCap">
              <span slot="amount">{{ marketCap }}</span>
            </i18n>
          </li>
        </ul>
      </div>
    </div>
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
              href="https://vote.ellaism.io"
              target="_blank"
              rel="noopener"
              class="ani-pulse"
            >
              <font-awesome-icon
                :icon="['fas', 'vote-yea']"
                class="mr-1 d-none d-md-inline-block"
              />
              {{ $t('navigation.vote') }}
            </b-nav-item>
            <b-nav-item
              href="https://forum.ellaism.io"
              target="_blank"
              rel="noopener"
            >
              {{ $t('navigation.forum') }}
            </b-nav-item>
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
import { mapState } from 'vuex'
import { NET_INFO, PRICE, STATS_MODULE_NAMESPACE } from '~/store/stats'

export default {
  computed: {
    ...mapState(STATS_MODULE_NAMESPACE, {
      netInfo: NET_INFO,
      price: PRICE,
    }),
    hashrate() {
      return this.$n(this.netInfo?.averageNetworkHashRate?.toFixed(2) || 0)
    },
    height() {
      return this.$n(this.netInfo?.bestBlock || 0)
    },
    marketCap() {
      return this.$n(this.price?.usdMarketCap || 0, 'marketCap')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/_functions';
@import '~bootstrap/scss/mixins/_breakpoints';
@import 'assets/scss/variables';

.top-nav {
  background-color: darken(theme-color('primary'), 10%);
  color: rgba(255, 255, 255, 0.5);
}

/deep/ .navbar {
  background-color: theme-color('primary');
  margin-bottom: 1.875rem;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}

@include media-breakpoint-up(md) {
  .ani-pulse {
    animation-name: pulse;
    animation-duration: 3s;
    animation-iteration-count: infinite;

    &:hover,
    &:focus {
      animation: unset;
    }
  }
}
</style>
