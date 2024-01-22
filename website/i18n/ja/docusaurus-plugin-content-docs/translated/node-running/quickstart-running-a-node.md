---
title: 'クイックスタート: ノードを実行する'
description: Learn more about what type of ARb node one needs to run.
author-objective: Build a quickstart that helps readers understand why they might want to run a specific type of an Arbitrum node.
reader-audience: Moderately-technical readers who are familiar with command lines, but not Ethereum / Arbitrum infrastructure
reader-task: Run a node with minimal effort and maximum understanding
content-type: quickstart
---

import PublicPreviewBannerPartial from '../partials/_public-preview-banner-partial.md';

<PublicPreviewBannerPartial />

Arbitrumのネットワークと通信する場合、ユーザーはフルノードかアーカイブノードのどちらかを選択することができます。Arbitrumのフルノードを実行することには明確な利点があります。このクイックスタートでは、ユーザーがアーカイブノードではなくフルノードを実行したい理由を探ります。それぞれのノードの利点とトレードオフを理解することで、それぞれの要件や目的に応じて、十分な情報を得た上で決断することができます。

### Arbitrumフルノードを実行するための考慮事項
⚠️ 注意：Arbitumフルノードを実行することによるプロトコルレベルのインセンティブはありません。Arbitrumチェーンへのアクセスに興味があるが、自分のノードを立ち上げたくない場合は、第三者プロバイダーが管理し、ホストするノードへのRPCアクセスを得るための「[RPCエンドポイントとプロバイダー](https://docs.arbitrum.io/node-running/node-providers)」をご覧ください。

- トランザクションの検証とセキュリティ：フルノードを実行することで、ユーザーは独自にトランザクションを検証し、Arbitrumのブロックチェーンのステートを確認することができます。ユーザーは自分がやり取りするトランザクションの真正性と完全性に全幅の信頼を置くことができます。
- 信頼仮定の削減：フルノードを実行することで、ユーザーは第三者のサービスやインフラに依存することなく、Arbitrumネットワークとやり取りすることができます。これにより、外部エンティティを信頼する必要性が減り、潜在的な中央集権的障害や脆弱性のリスクが軽減されます。
- 必要なリソースが少ない：アーカイブノードと比較して、フルノードは一般的にストレージや計算能力などのリソースが少なくて済みます。そのため、ハードウェアの性能が限られているユーザーや、リソースに制約のある環境で運用するユーザーにとって、より利用しやすくなります。

Arbitrumフルノードの詳しい実行方法は、[こちら](https://docs.arbitrum.io/node-running/how-tos/running-a-full-node)をご覧ください。

### Arbitrumアーカイブノードを運用する際の注意点
フルノードには多くの利点がありますが、アーカイブノードを運用する方が適切な場合もあります。アーカイブノードはArbitrumネットワークの全履歴を保存するため、広範な履歴データへのアクセスや高度な分析目的を必要とするユーザーに適しています。ただし、アーカイブノードはリソース集約型であり、大きなストレージ容量と計算能力を必要とすることに注意が必要です。

Arbitrumアーカイブノードの実行方法の詳細については、[こちら](https://docs.arbitrum.io/node-running/how-tos/running-an-archive-node)をご覧ください。

### Arbitrumクラシックノードを運用する際の注意点
Arbitrumクラシックノードを運用する意義は、主にアーカイブノードとクラシック関連コマンドへのアクセスに特定のニーズがある人に当てはまります。詳細は[こちら](https://docs.arbitrum.io/node-running/how-tos/running-an-archive-node)をご覧ください。

Arbitrumクラシックノードの実行方法の詳細については、[こちら](https://docs.arbitrum.io/node-running/how-tos/running-a-classic-node)をご覧ください。

### フィードリレーを運用する際の注意点
1つのノードのみを実行している場合は、フィードリレーを設置する必要はありません。しかし、複数のノードを使用している場合は、データセンターごとに一つのフィードリレーを設置することを強くお勧めします。このセットアップには、イングレス料金の削減やネットワーク内の安定性の向上など、いくつかの利点があります。

近い将来、フィードエンドポイントは、カスタム辞書を使用した圧縮を義務付ける予定です。したがって、標準ノード以外を使用してフィードに接続する場合は、 ローカルでフィードリレーを実行することを強く推奨します。そうすることで、圧縮されていないフィードにデフォルトでアクセスできるようになり、 パフォーマンスと互換性が最適化されます。

フィードリレーの詳しい実行方法については、[こちら](https://docs.arbitrum.io/node-running/how-tos/running-a-feed-relay)をご覧ください。



