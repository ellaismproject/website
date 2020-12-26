<template>
  <div>
    <b-jumbotron fluid class="bg-transparent mb-0">
      <template #header>Ellaism</template>
      <template #lead>
        Ellaism is a proof of work blockchain for building
        <strong>unstoppable</strong> applications.
      </template>
      <hr class="my-4" />
      <p>
        Ellaism is one of the few community-driven blockchain projects that had
        a
        <b-link
          href="https://explorer.ellaism.io/block/0x4d7df65052bb21264d6ad2d6fe2d5578a36be12f71bf8d0559b0c15c4dc539b5"
          target="_blank"
          rel="noopener"
          >fair launch</b-link
        >, and has never had any mandatory developer fees. All development is
        donated freely by the community, making Ellaism one of the most pure
        Ethereum projects.
      </p>
      <b-button
        variant="purple"
        href="https://discord.gg/rndbuSz"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <font-awesome-icon :icon="['fab', 'discord']" />
        <span>Discord</span>
      </b-button>
      <b-button
        variant="blue"
        href="https://github.com/ellaismproject/ellaism"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
        <span>GitHub</span>
      </b-button>
      <b-button
        variant="primary"
        href="https://explorer.ellaism.io"
        target="_blank"
        rel="noopener"
      >
        <font-awesome-icon :icon="['fas', 'cubes']" />
        <span>Explorer</span>
      </b-button>
    </b-jumbotron>
    <section class="section alt px-md-5">
      <b-container>
        <h2 class="h1 font-weight-lighter">Getting Started</h2>
        <p class="lead">
          If you are familiar with Ethereum, you are in good company. Ellaism is
          a decentralized computing platform that executes smart contracts.
          Applications are ran exactly as programmed without the possibility of
          censorship, downtime, or third-party interference.<br /><br />
          Ellaism is a distributed network consisting of a blockchain ledger,
          native cryptocurrency (ELLA), and robust ecosystem of on-chain
          applications and services.
        </p>
        <div class="mt-5">
          <b-row>
            <b-col sm="12" md="4">
              <h3 class="font-weight-lighter">Wallets</h3>
              <p>
                Most wallets that support Ethereum also support Ellaism. The
                wallets listed below have been verified as working by the team.
              </p>
              <ul>
                <li>
                  <b-link
                    href="https://www.myetherwallet.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    ><span>MyEtherWallet</span>
                    <font-awesome-icon
                      :icon="['fas', 'external-link-square-alt']"
                  /></b-link>
                </li>
                <li>
                  <b-link
                    href="https://support.ledger.com/hc/en-us/articles/360008655654-Ellaism-ELLA-"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    ><span>Ledger</span>
                    <font-awesome-icon
                      :icon="['fas', 'external-link-square-alt']"
                  /></b-link>
                </li>
              </ul>
              <p>
                If you would like to use a service that supports a standard
                Ethereum JSON-RPC server, our public endpoint is located at:
              </p>
              <code>https://jsonrpc.ellaism.io</code>
            </b-col>
            <b-col sm="12" offset-md="2" md="6" class="mt-5 mt-md-0">
              <h3 class="font-weight-lighter">Clients</h3>
              <p>
                The Ellaism team recommends the use of
                <b-link
                  href="https://github.com/multi-geth/multi-geth"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  ><span>MultiGeth</span>
                  <font-awesome-icon
                    :icon="['fas', 'external-link-square-alt']"
                /></b-link>
                when connecting to the Ellaism network. Alternative clients have
                been known to work with Ellaism, but the team cannot provide
                support for anything other than MultiGeth.<br /><br />
                Once you have downloaded MultiGeth, start your node by running
                the following command:
              </p>
              <code>geth --ellaism</code>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <section class="section px-md-5">
      <b-container>
        <h2 class="h1 font-weight-lighter">Principles</h2>
        <p class="lead">
          Ellaism is guided by a set of principals that were established along
          with the genesis block. All changes or upgrades to the protocol should
          should strive to maintain and reinforce these principals.
        </p>
        <div class="mt-5">
          <b-card-group deck>
            <b-card>
              <b-card-title>
                <font-awesome-icon :icon="['fas', 'coins']" />
                <span>Monetary Policy</span>
              </b-card-title>
              <b-card-text
                >280,000,000 total coins with an emission rate that is reduced
                by 20% every 10 million blocks.</b-card-text
              >
            </b-card>
            <b-card>
              <b-card-title>
                <font-awesome-icon :icon="['fas', 'ban']" />
                <span>No Censorship</span>
              </b-card-title>
              <b-card-text
                >No party should be able to prevent valid transactions from
                being confirmed.</b-card-text
              >
            </b-card>
            <b-card>
              <b-card-title>
                <font-awesome-icon :icon="['fas', 'code-branch']" />
                <span>Open Source</span>
              </b-card-title>
              <b-card-text
                >Ellaism source code should always be open for any party to
                read, modify, copy, and share.</b-card-text
              >
            </b-card>
          </b-card-group>
        </div>
        <div class="mt-md-4">
          <b-card-group deck>
            <b-card>
              <b-card-title>
                <font-awesome-icon :icon="['fas', 'unlock-alt']" />
                <span>Permissionless</span>
              </b-card-title>
              <b-card-text
                >No arbitrary gatekeepers should prevent any party from being
                part of the network.</b-card-text
              >
            </b-card>
            <b-card>
              <b-card-title>
                <font-awesome-icon :icon="['fas', 'user-secret']" />
                <span>Pseudonymous</span>
              </b-card-title>
              <b-card-text
                >No identification should be required to own or use
                Ellaism.</b-card-text
              >
            </b-card>
            <b-card>
              <b-card-title>
                <font-awesome-icon :icon="['fas', 'balance-scale']" />
                <span>Fungible</span>
              </b-card-title>
              <b-card-text
                >All coins are equal and should be equally
                spendable.</b-card-text
              >
            </b-card>
          </b-card-group>
        </div>
        <div class="mt-md-4">
          <b-card-group deck>
            <b-card>
              <b-card-title>
                <font-awesome-icon :icon="['fas', 'link']" />
                <span>Irreversible Transactions</span>
              </b-card-title>
              <b-card-text
                >Confirmed blocks should be set in stone. Blockchain history
                should be immutable.</b-card-text
              >
            </b-card>
            <b-card>
              <b-card-title>
                <font-awesome-icon :icon="['fas', 'unlink']" />
                <span>No Contentious Hard Forks</span>
              </b-card-title>
              <b-card-text
                >Never hard fork without consensus from the community. Only
                break existing consensus when absolutely necessary.</b-card-text
              >
            </b-card>
          </b-card-group>
        </div>
      </b-container>
    </section>
    <section class="section alt px-md-5">
      <b-container>
        <h2 class="h1 font-weight-lighter">Team</h2>
        <p class="lead">
          Ellaism is a community project, however, there are individuals who
          stand out for contributing in meaningful ways. These contributors,
          past and present, continue to be vital to the success of Ellaism.
        </p>
        <div class="mt-5 text-center">
          <b-row>
            <b-col sm="12" md="3">
              <b-avatar variant="primary" size="6rem" class="mb-2" />
              <p class="mb-0"><strong>ellaismer</strong></p>
              <p class="text-muted mb-5 mb-md-0">
                <small>Creator, Core Developer</small>
              </p>
            </b-col>
            <b-col sm="12" md="3">
              <b-avatar variant="primary" size="6rem" class="mb-2" />
              <p class="mb-0"><strong>majordutch</strong></p>
              <p class="text-muted mb-5 mb-md-0">
                <small>Core Developer</small>
              </p>
            </b-col>
            <b-col sm="12" md="3">
              <b-avatar variant="primary" size="6rem" class="mb-2" />
              <p class="mb-0"><strong>differdrift</strong></p>
              <p class="text-muted mb-5 mb-md-0">
                <small>Communications</small>
              </p>
            </b-col>
            <b-col sm="12" md="3" class="inactive">
              <b-avatar variant="primary" size="6rem" class="mb-2" />
              <p class="mb-0"><strong>nully</strong></p>
              <p class="text-muted mb-0">
                <small>Core Developer</small>
              </p>
            </b-col>
          </b-row>
        </div>
        <div class="mt-5 text-center">
          <b-row>
            <b-col sm="12" md="3" class="inactive">
              <b-avatar variant="primary" size="6rem" class="mb-2" />
              <p class="mb-0"><strong>towd</strong></p>
              <p class="text-muted mb-5 mb-md-0"><small>Marketing</small></p>
            </b-col>
            <b-col sm="12" md="3" class="inactive">
              <b-avatar variant="primary" size="6rem" class="mb-2" />
              <p class="mb-0"><strong>limax</strong></p>
              <p class="text-muted mb-5 mb-md-0">
                <small>Community Developer</small>
              </p>
            </b-col>
            <b-col sm="12" md="3" class="inactive">
              <b-avatar variant="primary" size="6rem" class="mb-2" />
              <p class="mb-0"><strong>Denis Vantur</strong></p>
              <p class="text-muted mb-0">
                <small>Communications</small>
              </p>
            </b-col>
          </b-row>
        </div>
        <p class="mt-5 mb-0 text-center">
          <small
            >If you contribute to Ellaism, and would like to be included here,
            open a
            <b-link
              href="https://github.com/ellaismproject/website/issues"
              target="_blank"
              rel="noopener noreferrer nofollow"
              >pull request</b-link
            >
            or contact a team member on Discord.</small
          >
        </p>
      </b-container>
    </section>
    <section class="section alt2 px-md-5">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h2 class="h1 font-weight-lighter">Community Updates</h2>
            <p class="lead">
              Ellaism team members occasionally post updates related to internal
              projects as well as industry news. If you would like to contribute
              related news, please contact a team member on Discord.
            </p>
            <b-button :to="{ name: 'news' }" variant="outline-light">
              <font-awesome-icon :icon="['fas', 'newspaper']" />
              <span>Read the latest updates</span></b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section px-md-5">
      <b-container>
        <h2 class="h1 font-weight-lighter">Find Ellaism On</h2>
        <b-row class="mt-5 text-center">
          <b-col sm="12" md="3" class="mb-5 mb-md-0">
            <b-link
              href="https://www.coingecko.com/en/coins/ellaism"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <b-img
                src="~/assets/vendors/coingecko.svg"
                alt="CoinGecko"
                class="logo"
                fluid
              />
            </b-link>
          </b-col>
          <b-col sm="12" md="3" class="mb-5 mb-md-0">
            <b-link
              href="https://coinmarketcap.com/currencies/ellaism/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <b-img
                src="~/assets/vendors/coinmarketcap.svg"
                alt="CoinMarketCap"
                class="logo"
                fluid
              />
            </b-link>
          </b-col>
          <b-col sm="12" md="3" class="mb-5 mb-md-0">
            <b-link
              href="https://app.stex.com/en/trade/pair/BTC/ELLA/1D"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <b-img
                src="~/assets/vendors/stex.svg"
                alt="STEX"
                class="logo"
                fluid
              />
            </b-link>
          </b-col>
          <b-col sm="12" md="3" class="mb-5 mb-md-0">
            <b-link
              href="https://coinpaprika.com/coin/ella-ellaism/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <b-img
                src="~/assets/vendors/coinpaprika.svg"
                alt="coinpaprika"
                class="logo"
                fluid
              />
            </b-link>
          </b-col>
        </b-row>
        <b-row class="mt-md-5 text-center">
          <b-col sm="12" md="3" class="mb-5 mb-md-0">
            <b-link
              href="https://blockfolio.com/coin/ELLA"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <b-img
                src="~/assets/vendors/blockfolio.svg"
                alt="Blockfolio"
                class="logo"
                fluid
              />
            </b-link>
          </b-col>
          <b-col sm="12" md="3">
            <b-link
              href="https://whattomine.com/coins/221-ella-ethash"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <b-img
                src="~/assets/vendors/whattomine.svg"
                alt="WhatToMine"
                class="logo"
                fluid
              />
            </b-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables';

.jumbotron {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

section.section {
  padding-top: 6rem;
  padding-bottom: 6rem;

  &.alt {
    background-color: darken($body-bg, 5%);
  }

  &.alt2 {
    background-color: theme-color('primary');
    color: #ffffff;
  }
}

.card {
  border: none;
  border-left: 4px solid theme-color('primary');
  border-radius: 0;
  background-color: darken($body-bg, 5%);
}

.card-title {
  font-weight: lighter;
}

.inactive {
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}

.logo {
  max-height: 40px;
}
</style>
