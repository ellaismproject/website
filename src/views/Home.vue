<template>
    <div class="home">
        <section class="hero is-large is-dark">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        {{ $t('page.home.title') }}
                    </h1>
                    <h2 class="subtitle">
                        {{ $t('page.home.sub_title') }}
                    </h2>
                </div>
            </div>
        </section>
        <section class="hero is-medium is-callout">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <p class="is-size-3-desktop has-text-weight-light">Ellaism is an <abbr
                            title="Ethereum Virtual Machine">EVM</abbr>-based network with <abbr
                            title="WebAssembly">Wasm</abbr> enabled. We encourage developers, educators, and enthusiasts
                        to test WebAssembly scripting on our testnet.</p>
                    <b-button tag="router-link" :to="{ name: 'testnet' }" class="is-size-4-desktop" type="is-dark"
                              icon-pack="fas" icon-left="info-circle">
                        {{ $t('page.home.testnet_information') }}
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
                                <p class="title is-4"><i class="fas fa-terminal"></i>
                                    {{ $t('page.home.card_1.title') }}</p>
                                <div class="content">
                                    <p>{{ $t('page.home.card_1.content') }}</p>
                                </div>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title is-4"><i class="fas fa-balance-scale"></i>
                                    {{ $t('page.home.card_2.title') }}</p>
                                <div class="content">
                                    <p>{{ $t('page.home.card_2.content') }}</p>
                                </div>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title is-4"><i class="fas fa-users"></i>
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

<style>
    .is-callout {
        background-color: #3D9970;
    }

    .is-callout .hero-body p {
        color: #FFFFFF;
        margin-bottom: 1.5rem;
    }
</style>
