<template>
    <div class="home">
        <section class="hero is-large is-dark">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        Ellaism
                    </h1>
                    <h2 class="subtitle">
                        An Open-source Platform for Decentralized Applications
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
                        Testnet Information
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
                                <p class="title is-4"><i class="fas fa-terminal"></i> EVM and Wasm Enabled</p>
                                <div class="content">
                                    <p>Ellaism enabled WebAssembly on August 4th, 2018, giving Developers the choice to
                                        use the EVM or gain experience running Wasm smart contracts in a production
                                        environment.</p>
                                </div>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title is-4"><i class="fas fa-balance-scale"></i> Transparency and Stability
                                </p>
                                <div class="content">
                                    <p>In cryptocurrency, transparency brings trust. The Core team hold strong
                                        transparency in its financial and development process. Our strong principles
                                        also build a stable platform.</p>
                                </div>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title is-4"><i class="fas fa-users"></i> Community Driven</p>
                                <div class="content">
                                    <p>We have a welcoming community and a donation-based development process. You have
                                        full control over the cryptocurrency you use, and can always choose a team you
                                        trust to develop Ellaism.</p>
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
