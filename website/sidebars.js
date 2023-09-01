/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  buildDecentralizedAppsSidebar: [
    {
      type: 'category',
      label: 'Build dApps (Solidity)',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'for-devs/gentle-introduction-dapps',
          label: 'A gentle introduction',
        },
        {
          type: 'doc',
          id: 'for-devs/quickstart-solidity-hardhat',
        },
        {
          type: 'category',
          label: 'How-tos',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Estimate gas',
              id: 'devs-how-tos/how-to-estimate-gas',
            },
            {
              type: 'doc',
              label: 'Use oracles',
              id: 'devs-how-tos/how-to-use-oracles',
            },
          ],
        },
        {
          type: 'category',
          label: 'Concepts',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Arbitrum chains',
              id: 'for-devs/concepts/public-chains',
            },
            {
              type: 'category',
              label: 'Arbitrum/Ethereum differences',
              items: [
                {
                  type: 'doc',
                  label: 'Arbitrum vs. Ethereum',
                  id: 'arbitrum-ethereum-differences',
                },
                {
                  type: 'doc',
                  label: 'Solidity support',
                  id: 'solidity-support',
                },
                {
                  type: 'doc',
                  label: 'Block numbers and time',
                  id: 'time',
                },
              ],
            },
            {
              type: 'doc',
              label: 'Cross-chain messaging',
              id: 'for-devs/cross-chain-messsaging',
            },

            {
              type: 'doc',
              label: 'Precompiles',
              id: 'for-devs/concepts/precompiles',
            },
            {
              type: 'doc',
              label: 'Oracles',
              id: 'for-devs/concepts/oracles',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Troubleshooting',
          id: 'for-devs/troubleshooting-building',
        },
      ],
    },
    {
      type: 'category',
      label: 'Build dApps (Rust) (TESTNET)',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'stylus/stylus-gentle-introduction',
        },
        {
          type: 'doc',
          id: 'stylus/stylus-quickstart',
        },
        {
          type: 'category',
          label: 'Concepts',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'stylus/concepts',
            },
          ],
        },
        {
          type: 'category',
          label: 'Developer reference',
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'stylus/reference',
            },
            {
              type: 'link',
              label: 'Rust crate docs',
              href: 'https://docs.rs/crate/stylus-sdk',
            },
            {
              type: 'link',
              label: 'Source code repository',
              href: 'https://github.com/OffchainLabs/stylus',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Launch your own chain (Orbit)',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'launch-orbit-chain',
        },
      ],
    },
    {
      type: 'category',
      label: 'Bridge tokens between chains',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'How-tos',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'devs-how-tos/bridge-tokens/how-to-bridge-tokens-overview',
            },
            {
              type: 'doc',
              label: 'Standard gateway',
              id: 'devs-how-tos/bridge-tokens/how-to-bridge-tokens-standard',
            },
            {
              type: 'doc',
              label: 'Generic-custom gateway',
              id: 'devs-how-tos/bridge-tokens/how-to-bridge-tokens-generic-custom',
            },
            {
              type: 'doc',
              label: 'Custom gateway',
              id: 'devs-how-tos/bridge-tokens/how-to-bridge-tokens-custom-gateway',
            },
          ],
        },
        {
          type: 'category',
          label: 'Concepts',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'for-devs/concepts/token-bridge',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Migrate to Arbitrum',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'From Classic to Nitro',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Migrate from Classic to Nitro (architecture, contracts)',
              id: 'migration/dapp_migration',
            },
            {
              type: 'doc',
              label: 'Migrate from Classic to Nitro (state)',
              id: 'migration/state-migration',
            },
          ],
        },
        /** {
          type: 'category',
          label: 'From Ethereum (L1) to Arbitrum (L2)',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'TODO (vibe-checking)',
              id: 'migration/dapp_migration',
            },
          ],
        },
        {
          type: 'category',
          label: 'From Arbitrum (L2) to Orbit',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'TODO (vibe-checking)',
              id: 'migration/dapp_migration',
            },
          ],
        },
        {
          type: 'category',
          label: 'From Polkadot to Arbitrum',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'TODO (vibe-checking)',
              id: 'migration/dapp_migration',
            },
          ],
        },
        {
          type: 'category',
          label: 'From Solana to Arbitrum',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'TODO (vibe-checking)',
              id: 'migration/dapp_migration',
            },
          ],
        }, **/
      ],
    },
    {
      type: 'category',
      label: 'Developer reference',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'node-running/node-providers',
          label: 'RPC endpoints and providers',
        },
        {
          type: 'doc',
          label: 'Smart contract addresses',
          id: 'for-devs/useful-addresses',
        },
        {
          type: 'doc',
          label: 'Precompiles',
          id: 'for-devs/dev-tools-and-resources/precompiles',
        },
        {
          type: 'doc',
          label: 'Development frameworks',
          id: 'for-devs/dev-tools-and-resources/development-frameworks',
        },
        {
          type: 'doc',
          label: 'Web3 libraries and tools',
          id: 'for-devs/dev-tools-and-resources/web3-libraries-tools',
        },
        {
          type: 'doc',
          label: 'Monitoring tools and block explorers',
          id: 'for-devs/dev-tools-and-resources/monitoring-tools-block-explorers',
        },
        {
          type: 'doc',
          label: 'Debugging tools',
          id: 'for-devs/dev-tools-and-resources/debugging-tools',
        },
        {
          type: 'doc',
          label: 'Oracles',
          id: 'for-devs/dev-tools-and-resources/oracles',
        },
        {
          type: 'link',
          label: 'Arbitrum SDK',
          href: '/sdk',
        },
        {
          type: 'link',
          label: 'Tutorials',
          href: 'https://github.com/OffchainLabs/arbitrum-tutorials',
        },
        {
          type: 'doc',
          id: 'mainnet-risks',
          label: 'Mainnet risks',
        },
      ],
    },
    {
      type: 'category',
      label: 'More',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'for-devs/contribute',
        },
      ],
    },
  ],
  bridgeTokensSidebar: [
    {
      type: 'category',
      label: 'Get started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'bridge-tokens/gentle-introduction-bridge',
          label: 'A gentle introduction',
        },
        {
          type: 'doc',
          id: 'getting-started-users',
          label: 'Quickstart',
        },
        {
          type: 'doc',
          label: 'Troubleshooting',
          id: 'for-users/troubleshooting-users',
        },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'bridge-tokens/concepts/usdc-concept',
        },
      ],
    },
    {
      type: 'category',
      label: 'More',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'for-users/contribute',
        },
      ],
    },
  ],
  runNodesSidebar: [
    {
      type: 'category',
      label: 'Get started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'node-running/gentle-introduction-run-node',
          label: 'A gentle introduction',
        },
        {
          type: 'doc',
          id: 'node-running/quickstart-running-a-node',
          label: 'Quickstart',
        },
      ],
    },
    {
      type: 'category',
      label: 'How-tos',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'node-running/how-tos/running-a-full-node',
          label: 'Run a full node (Nitro)',
        },
        {
          type: 'doc',
          id: 'node-running/how-tos/running-a-classic-node',
          label: 'Run a full node (Classic, pre-Nitro)',
        },
        {
          type: 'doc',
          id: 'node-running/how-tos/running-an-archive-node',
          label: 'Run an archive node',
        },
        {
          type: 'doc',
          id: 'node-running/how-tos/local-dev-node',
          label: 'Run a local dev node',
        },
        {
          type: 'doc',
          id: 'node-running/how-tos/running-a-feed-relay',
          label: 'Run a feed relay',
        },
        {
          type: 'doc',
          id: 'node-running/how-tos/running-a-validator',
          label: 'Run a validator',
        },
        {
          type: 'doc',
          id: 'node-running/how-tos/read-sequencer-feed',
          label: 'Read the sequencer feed',
        },
        {
          type: 'doc',
          id: 'node-running/how-tos/build-nitro-locally',
        },
        {
          type: 'doc',
          id: 'das/daserver-instructions',
          label: 'Run a Data Availability Server',
        },
      ],
    },
    /*
    {
      type: "doc",
      id: "node-running/node-providers",
      label: "Third-party node providers"
    },
    */
    {
      type: 'category',
      label: 'More',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'node-running/command-line-options',
          label: 'Command-line options',
        },
        {
          type: 'doc',
          id: 'node-running/troubleshooting-running-nodes',
          label: 'Troubleshooting',
        },
        {
          type: 'doc',
          label: 'Frequently asked questions',
          id: 'node-running/faq',
        },
        {
          type: 'doc',
          id: 'node-running/contribute',
        },
      ],
    },
  ],
  learnMoreSidebar: [
    {
      type: 'category',
      label: 'Introductory concepts',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'intro/intro',
          label: 'A gentle introduction',
        },
        {
          type: 'doc',
          id: 'why-nitro',
          label: 'Why Nitro?',
        },
        {
          type: 'doc',
          id: 'tx-lifecycle',
          label: 'Transaction lifecycle',
        },
        {
          type: 'doc',
          id: 'sequencer',
          label: 'Sequencer',
        },
        {
          type: 'doc',
          id: 'inside-anytrust',
          label: 'AnyTrust protocol',
        },
        {
          type: 'category',
          label: 'Gas / fees',
          items: [
            {
              type: 'doc',
              id: 'arbos/gas',
              label: 'L2 gas',
            },
            {
              type: 'doc',
              id: 'arbos/l1-pricing',
              label: 'L1 pricing',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced concepts',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'inside-arbitrum-nitro/inside-arbitrum-nitro',
          label: 'Deep dive: Inside Arbitrum',
        },
        {
          type: 'link',
          href: 'https://github.com/OffchainLabs/nitro/blob/master/docs/Nitro-whitepaper.pdf',
          label: 'Deeper dive: Whitepaper',
        },
        {
          type: 'doc',
          id: 'assertion-tree',
          label: 'Assertion tree',
        },
        {
          type: 'category',
          label: 'Cross-chain messaging',
          items: [
            {
              type: 'doc',
              id: 'arbos/l1-to-l2-messaging',
              label: 'L1-to-L2 messaging',
            },
            {
              type: 'doc',
              id: 'arbos/l2-to-l1-messaging',
              label: 'L2-to-L1 messaging',
            },
          ],
        },
        {
          type: 'category',
          label: 'ArbOS',
          items: [
            {
              type: 'doc',
              id: 'arbos/arbos',
              label: 'ArbOS',
            },
            {
              type: 'doc',
              id: 'arbos/geth',
              label: 'Geth',
            },
          ],
        },
        {
          type: 'category',
          label: 'Fraud proofs',
          items: [
            {
              type: 'doc',
              id: 'proving/challenge-manager',
              label: 'Interactive challenges',
            },
            {
              type: 'doc',
              id: 'proving/wasm-to-wavm',
              label: 'Wasm To WAVM',
            },
            {
              type: 'doc',
              id: 'proving/wavm-custom-opcodes',
              label: 'Custom WAVM opcodes',
            },
            {
              type: 'doc',
              id: 'proving/wavm-floats',
              label: 'WAVM floats',
            },
            {
              type: 'doc',
              id: 'proving/wavm-modules',
              label: 'WAVM modules',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'More',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'learn-more/faq',
          label: 'Frequently asked questions',
        },
        {
          type: 'doc',
          id: 'intro/glossary',
          label: 'Glossary',
        },

        {
          type: 'doc',
          label: 'Audit reports',
          id: 'audit-reports',
        },
        {
          type: 'doc',
          id: 'learn-more/contribute',
        },
      ],
    },
  ],
};

module.exports = sidebars;
