<template>
    <div class="home">
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <p class="hero-summary">Ellaism is an open-source platform for decentralized applications.</p>
                </div>
            </div>
        </section>
        <section class="hero is-medium is-ella">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <i18n path="page.home.pitch.content" tag="p" class="is-size-3-desktop has-text-weight-light">
                        <abbr slot="evm" v-bind:title="this.$t('page.home.pitch.ethereum_virtual_machine')">{{
                            $t('page.home.pitch.evm') }}</abbr>
                        <abbr slot="wasm" v-bind:title="this.$t('page.home.pitch.webassembly')">{{
                            $t('page.home.pitch.wasm') }}</abbr>
                    </i18n>
                    <b-button tag="router-link" :to="{ name: 'testnet' }" class="is-size-4-desktop" type="is-dark"
                              icon-pack="fas" icon-left="info-circle">
                        {{ $t('page.home.pitch.button') }}
                    </b-button>
                </div>
            </div>
        </section>
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title is-4"><i class="fas fa-terminal"/>
                                    {{ $t('page.home.card_1.title') }}</p>
                                <div class="content">
                                    <p>{{ $t('page.home.card_1.content') }}</p>
                                </div>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title is-4"><i class="fas fa-balance-scale"/>
                                    {{ $t('page.home.card_2.title') }}</p>
                                <div class="content">
                                    <p>{{ $t('page.home.card_2.content') }}</p>
                                </div>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title is-4"><i class="fas fa-users"/>
                                    {{ $t('page.home.card_3.title') }}</p>
                                <div class="content">
                                    <p>{{ $t('page.home.card_3.content') }}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .hero-summary {
        max-width: 770px;
        margin: 0 auto;
        font-size: 3rem;
        font-weight: lighter;
    }
</style>
