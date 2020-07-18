export default {
  ellaism: 'Ellaism',
  ellaism_project: '@:ellaism Project',
  page: {
    default: {
      meta_title: '@:ellaism',
      meta_title_template: '%s - @:ellaism'
    },
    about: {
      meta_title: 'About',
      title: 'About @:ellaism',
      subtitle: 'An open-source platform for decentralized applications.'
    },
    bot: {
      meta_title: 'Bots',
      title: '@:ellaism Bots',
      subtitle: 'Interact with the @:ellaism blockchain.'
    },
    dapp: {
      meta_title: 'DApps',
      title: '@:ellaism DApps',
      subtitle: 'Decentralized applications hosted on the @:ellaism blockchain.'
    },
    error404: {
      meta_title: 'Not Found',
      title: 'Not Found',
      subtitle: 'The requested page was not found.'
    },
    home: {
      meta_title_template: '%s - An Open-source Platform for Decentralized Applications',
      summary: '@:ellaism is an open-source platform for decentralized applications.',
      about_ella: 'What is @:ellaism?',
      choose_wallet: 'Choose your wallet',
      pitch: {
        content: 'Ellaism is an {evm}-based network with {wasm} enabled. We encourage developers, educators, and enthusiasts to test WebAssembly scripting on our testnet.',
        ethereum_virtual_machine: 'Ethereum Virtual Machine',
        evm: 'EVM',
        webassembly: 'WebAssembly',
        wasm: 'Wasm',
        button: 'Testnet Information'
      },
      card_1: {
        title: 'EVM and Wasm Enabled',
        content: 'Ellaism enabled WebAssembly on August 4th, 2018, giving Developers the choice to use the EVM or gain experience running Wasm smart contracts in a production environment.'
      },
      card_2: {
        title: 'Transparency and Stability',
        content: 'In cryptocurrency, transparency brings trust. The Core team hold strong transparency in its financial and development process. Our strong principles also build a stable platform.'
      },
      card_3: {
        title: 'Community Driven',
        content: 'We have a welcoming community and a donation-based development process. You have full control over the cryptocurrency you use, and can always choose a team you trust to develop @:(ellaism).'
      }
    },
    mining: {
      meta_title: 'Mining',
      title: 'Mining @:ellaism',
      subtitle: 'Help secure the @:ellaism network.'
    },
    testnet: {
      meta_title: 'Testnet',
      title: '@:ellaism Testnet',
      subtitle: 'Test your DApps before deploying to mainnet.'
    },
    donate: {
      meta_title: 'Donate',
      title: 'Donate to @:ellaism',
      subtitle: '@:ellaism is a 100% community-sponsored project.',
      intro: 'In an effort to maintain a high level of transparency for the @:ellaism_project, donated funds are held in multisignature (multisig) wallets. The multisig wallets for the development and community funds can receive inbound transactions as normal. However, to execute transactions, it requires multiple, unrelated entities to sign the transaction.',
      governance_note: 'The development and community funds are not intended to be utilized as a governance protocol. The understood purpose of these funds is to serve the community-driven goals of the @:(ellaism_project).',
      donation_title: 'Donation Methods',
      donation_intro: '@:ellaism is a 100% community-sponsored project. If you want to join our efforts, the easiest thing you can do is support the project financially.',
      development_fund_title: 'Development Fund Wallet',
      development_fund_intro: 'The development fund is currently used to support the following initiatives:',
      development_fund_point_1: '@:ellaism blockchain explorer',
      development_fund_point_2: '@:ellaism public JSON-RPC API',
      development_fund_point_3: '@:ellaism specifications and protocol upgrades',
      development_fund_point_4: 'Other development activities',
      community_fund_title: 'Community Fund Wallet',
      community_fund_intro: 'The community fund is currently used to support the following initiatives:',
      community_fund_point_1: 'Marketing initiatives and events',
      community_fund_point_2: 'Crowdsourced tasks',
      community_fund_point_3: 'Other community activities'
    },
    wallet: {
      meta_title: 'Wallets',
      title: 'Choose Your @:ellaism Wallet',
      subtitle: 'Select a wallet to store your @:ellaism so you can start interacting with the network.'
    },
    privacy: {
      meta_title: 'Privacy Policy',
      title: 'Privacy Policy'
    }
  },
  component: {
    fund_wallet: {
      balance: 'Balance {hash}',
      copy_success_message: 'Address copied to clipboard!',
      copy_failure_message: 'Unable to copy address to clipboard.',
      signers: {
        message: 'The current signers can be found in the {documentation}.',
        documentation: '@:ellaism documentation'
      },
      quorum: {
        message: 'The development fund requires a quorum of {min} out of {total} signers to execute a transaction.'
      },
      footer: {
        copy: 'Copy Address',
        explorer: 'View on Explorer'
      }
    }
  },
  navigation: {
    individual: 'Individuals',
    individual_subnav: {
      wallet: 'Wallets',
      mining: 'Mining'
    },
    developer: 'Developers',
    developer_subnav: {
      testnet: 'Testnet',
      dapp: 'DApps',
      bot: 'Bots'
    },
    about: 'About',
    donate: 'Donate',
    resource: 'Resources',
    resource_subnav: {
      official: 'Official',
      block_explorer_1: '@:ellaism Block Explorer 1',
      block_explorer_2: '@:ellaism Block Explorer 2',
      network_status: 'Network Status',
      github: '@:ellaism GitHub',
      community: 'Community',
      discord: 'Discord',
      reddit: 'Reddit',
      telegram: 'Telegram',
      twitter: 'Twitter'
    }
  },
  footer: {
    copyright: '{symbol} {year} @:ellaism Project',
    statement: {
      title: 'Statement',
      content: '@:ellaism is not funded nor controlled by any entity, it is an open-source platform for decentralized applications.'
    },
    network_status: 'Network Status',
    navigation: {
      individual: 'Individuals:',
      individual_subnav: {
        wallet: 'Wallets',
        mining: 'Mining'
      },
      developer: 'Developers:',
      developer_subnav: {
        testnet: 'Testnet',
        dapp: 'DApps',
        bot: 'Bots'
      },
      participate: 'Participate:',
      participate_subnav: {
        testnet: 'Testnet',
        dapp: 'DApps',
        bot: 'Bots'
      },
      other: 'Other:',
      other_subnav: {
        about: 'About',
        donate: 'Donate',
        privacy: 'Privacy Policy'
      }
    }
  }
}