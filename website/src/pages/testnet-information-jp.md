# Stylusテストネット情報

import PublicPreviewBannerPartial from '../../../arbitrum-docs/stylus/partials/_stylus-public-preview-banner-partial-jp.md';

<PublicPreviewBannerPartial />

:::caution
注意
Stylusは大規模なアップグレードを実施中であり、いくつかの改善がチェーンのリセットを必要とする可能性があります。リセットの前に、テストネット上の開発者はテストネットETHを引き出すことをお勧めします。テストネットでは7日間の遅延はなく、引き出しは数分で処理されます。新しいチェーンにコントラクトを再デプロイすることを検討してください。リセットの前に事前の警告が行われます。最新情報を得るために、[Discord](https://discord.com/invite/arbitrum)のStylusチャンネルに参加してください。
:::

この表は、Stylusテストネットの利用可能なパブリックRPCエンドポイントとそれらと対話するために必要な詳細を概説しています。

| 名前            | RPC URL                              | Chain ID | ブロックエクスプローラー                        | ベースチェーン     | テックスタック    |
|----------------|----------------------------------------|----------|----------------------------------------------|------------------|----------------|
| Stylus Testnet | https://stylus-testnet.arbitrum.io/rpc | 23011913 | https://stylus-testnet-explorer.arbitrum.io/ | Arbitrum Sepolia | Nitro (Rollup) |

:::caution
注意
RPC Urlと異なり、シーケンサーエンドポイントは`eth_sendRawTransaction`と`eth_sendRawTransactionConditional`呼び出しのみサポートしています。
:::


他のArbitrumメインネットとテストネットチェーンに関する情報は、ドキュメントの[Node Runner](https://docs.arbitrum.io/node-running/node-providers#rpc-endpoints)セクションをご覧ください。

## フォーセット
テストネットイーサを取得するフォーセットは、下記のフォーセットオペレータから取得し、[Arbitrum Bridge](/node-running/node-providers#rpc-endpoints)経由でStylusテストネットにブリッジできます。

| フォーセットオペレーター | フォーセットURL                                         | チェーン          |
| -------------------- | ----------------------------------------------------- | ---------------- |
| Bware Labs           | https://bwarelabs.com/faucets/arbitrum-stylus-testnet | Stylus Testnet   |
| QuickNode            | https://faucet.quicknode.com/arbitrum/sepolia         | Arbitrum Sepolia |
| Alchemy              | https://sepoliafaucet.com/                            | Ethereum Sepolia |
| Sepolia PoW Faucet   | https://sepolia-faucet.pk910.de/                      | Ethereum Sepolia |
