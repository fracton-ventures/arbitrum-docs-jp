---
title: 'Orbitチェーンのイントロダクション'
sidebar_label: 'Orbitチェーンのイントロダクション'
description: "Launch your own Arbitrum Orbit chain under the Arbitrum Nitro codebase's new licensing model. Settle to Arbitrum's L2 chains via bridge contracts on the underlying L2 chain (Goerli for now, One or Nova soon). No need for permission from the Arbitrum DAO or Offchain Labs to create your Orbit chain or modify its instance of the Nitro codebase."
author: symbolpunk
translator: Ying@Fracton, Tamura (Arbitrum Ambassador), Yu@Fracton
sme: oliviaJ3388
target_audience: technical decision-makers, people familiar with web3 who will decide to use Orbit on behalf of their organizations
sidebar_position: 1
---

import TranslationBannerPartial from "../stylus/partials/_stylus-translation-banner-partial.md";

<TranslationBannerPartial />

この文書は、独自の <a data-quicklook-from='layer-2-l2'>Arbitrum Rollup</a>および <a data-quicklook-from='layer-2-l2'>AnyTrust</a>チェーンを作成できる**Arbitrum Orbit**という新しい製品について知りたい開発者および意思決定者のためのものです。

実際に作成しながら学びたい場合は、独自のOrbitチェーンを設定、起動する手順を詳細に説明した[Orbitクイックスタート](https://docs.arbitrum.io/launch-orbit-chain/orbit-quickstart)を参照してください。

import PublicPreviewBannerPartial from './partials/_orbit-public-preview-banner-partial.md';

<PublicPreviewBannerPartial />

### 要約
- Arbitrum Orbitを使用すると、<a data-quicklook-from='arbitrum-one'>Arbitrum One</a>、<a data-quicklook-from="arbitrum-nova">Arbitrum Nova</a>、**Arbitrum Goerli**、または**Arbitrum Sepolia**などの<a data-quicklook-from='layer-2-l2'>レイヤー2 (L2)</a>チェーン上に**独自のブロックチェーンが作成できます**。
- **独自のOrbitチェーンを所有し**、そのプライバシー、権限、手数料トークン、ガバナンスなどをカスタマイズできます。
- Arbitrum Orbitにより可能になることの例：
    - Nitroのfraud proofsや高度な圧縮、[Stylusを介したEVM+互換性](https://medium.com/offchainlabs/hello-stylus-6b18fecc3a22)、および継続的な改良などの恩恵恩恵を受けられる、**<a data-quicklook-from='arbitrum-nitro'>Nitro</a>を搭載した分散型のブロックチェーンネットワークの立ち上げ**。
    - Orbitチェーンがデフォルトで提供する、専用のスループットとトラフィック分離によりエンドユーザーに対して**安定したガス代**を提供できます。
    - チェーンのデータを読むことや、スマートコントラクトをチェーンにデプロイできる人を**アクセス許可**設定を行うことでコントロールできます。Ethereumや<a data-quicklook-from="arbitrum-one">Arbitrum One</a>のように完全に無許可にすることも可能ですが、独自のアクセス許可を実装することも可能です。
    - **ガス代として使用するトークンを選択する**ことで、ドメイン固有のメカニズム設計と価値獲得の機会を迅速に繰り返すことができます。

### Orbitとは？

import {
  MermaidWithHtml,
  Nodes,
  Node,
  Connection,
  NodeDescriptions,
  NodeDescription,
} from '/src/components/MermaidWithHtml/MermaidWithHtml';

<MermaidWithHtml>
  <Nodes>
    <Node id="1">Orbit chain</Node>
    <Node id="2">Orbit chain</Node>
    <Node id="3">Orbit chain</Node>
    <Node id="4">Arbitrum (L2 - Goerli, One, Nova)</Node>
    <Node id="5">Ethereum (L1 - Goerli, Mainnet)</Node>
    <Connection from="1" to="4" />
    <Connection from="2" to="4" />
    <Connection from="3" to="4" />
    <Connection from="4" to="5" />
  </Nodes>
  <NodeDescriptions>
    <NodeDescription for="1,2,3">
      <strong>Arbitrum Orbit</strong> is a new product offering that lets you create your own chain
      that settles to one of Arbitrum's public Layer 2 (L2) chains.
      <strong>Arbitrum Orbit</strong>は、Arbitrumのパブリックレイヤー2（L2）チェーンの1つに決済する独自のチェーンを作成できる新しい製品です。
    </NodeDescription>
    <NodeDescription for="4">
      <strong>Arbitrum One</strong>, <strong>Arbitrum Nova</strong>, and{' '}
      <strong>Arbitrum Goerli</strong>はEthereumに決済するパブリックレイヤー2（L2）チェーンです。
    </NodeDescription>
    <NodeDescription for="5">
      <strong>Ethereum</strong>はパブリックレイヤー1（L1）チェーンです。
    </NodeDescription>
  </NodeDescriptions>
</MermaidWithHtml>

- **Arbitrum Orbit**は、Arbitrumのパブリックレイヤー2（L2）チェーンの1つの上に決済される独自のチェーンを作成できる新しい製品です。
- **Arbitrum One**、**Arbitrum Nova**、および**Arbitrum Goerli**は、Ethereumで決済されるパブリックL2チェーンです。
- **Ethereum**はパブリックレイヤー1（L1）チェーンです。
- Orbitチェーンは、**ArbitrumのL2 Nitro技術スタックをカスタマイズし、独自にデプロイできるフォークブロックチェーン**です。OrbitチェーンはArbitrumのL2チェーンと密接に結びついています。
- また、具体的な**ユースケースとビジネスニーズに合わせて調整可能なチェーン**と考えることもできます。
- これにより、アプリケーションを**段階的に非中央集権化**し、Ethereumのベースレイヤーの特性とセキュリティを**段階的に採用**する別の方法が提供されます。
- また、Orbitチェーンは<a data-quicklook-from="arbitrum-nitro">Arbitrum Nitro</a>の技術スタックを利用しており、Arbitrum Nitroに行われた改善を継続的に統合できます。
<a data-quicklook-from="arbitrum-one">Arbitrum One</a>および<a data-quicklook-from="arbitrum-nova">Arbitrum Nova</a>は、それぞれ<a data-quicklook-from='arbitrum-rollup-protocol'>Arbitrum Rollup</a>および<a data-quicklook-from='arbitrum-anytrust-protocol'>AnyTrust</a>プロトコルを実装しています。すべてのOrbit チェーンは、RollupまたはAnyTrustのいずれかを実装するように設定できます。選択はあなた次第です！[^1]
- Arbitrum OneおよびArbitrum Novaは、[Arbitrum DAO](https://docs.arbitrum.foundation/concepts/arbitrum-dao)によって所有および管理されています。Orbit チェーンでは、チェーンの管理方法を任意に決定できます。
    - [Arbitrum DAO](https://docs.arbitrum.foundation/concepts/arbitrum-dao)は、Orbitチェーンが基盤とするL2チェーンを所有および管理します。Arbitrum DAOの目的、プロトコル、およびOrbitチェーンに関する情報について詳しく知りたい場合は、[Arbitrum DAOドキュメント](https://docs.arbitrum.foundation/new-arb-chains)を参照してください。

### Orbitが解決する課題
Ethereumエコシステムは、それぞれがEthereumのレイヤー1（L1）クライアントソフトウェアを実行する**分散型ノードネットワーク**によってサポートされています。 Ethereumのブロックスペースは高い需要があり、ユーザーはネットワークの混雑の軽減を待つことがよくあります（混雑が軽減されればコストが下がるため）。

<a data-quicklook-from='arbitrum-rollup-protocol'>Arbitrum Rollup</a>および<a data-quicklook-from='arbitrum-anytrust-protocol'>AnyTrust</a>プロトコルは、この課題に対処するために、Ethereumネットワークの一部の重要な処理を、それぞれ<a data-quicklook-from="arbitrum-one">Arbitrum One</a>と<a data-quicklook-from="arbitrum-nova">Arbitrum Nova</a>のL2チェーンをサポートする**分散型ノードネットワーク**にオフロードすることで対処しています。

2つのチェーン間には重要な違いがあります。RollupとAnyTrustの選択は、分散性と性能の**トレードオフ**を表しています：

- **Arbitrum One**は、生のトランザクションデータをEthereum L1に保存するRollupプロトコルを実装しています。
- **Arbitrum Nova**は、生のトランザクションデータを保存するために<a data-quicklook-from='data-availability-committee-dac'>データ可用性委員会(DAC)</a>を使用する、AnyTrustプロトコルを実装したセキュリティの前提条件を導入することで決済を迅速化し、コストを削減します。

**これらの2つのパブリックチェーンは、ほとんどのプロジェクトのニーズを満しています**。実際すでに数千のアプリと何百万ものユーザーをサポートしています。しかし、共有のパブリックチェーンはすべてのプロジェクトに適しているわけではありません。一部のプロジェクトは、自分自身のAnyTrustまたはRollupチェーンを持つことで、同じセキュリティを確保しながら、チェーンの機能とガバナンスを高度に制御することができます（上記のL2チェーンとそのプロトコルは[Arbitrum DAO](https://docs.arbitrum.foundation/gentle-intro-dao-governance)によって管理されています）。

Orbitチェーンは、独自のインフラストラクチャを使用して自身のAnyTrustおよびRollupチェーンを作成できるサービス提供します。あなたのOrbitチェーンは、Ethereum上の**自己管理型の優先レーン**と考えることもできます。各Orbitチェーンは、Ethereumのセキュリティを利用しながら、Ethereumの容量の数倍をサポートできます。

ここまでのまとめ：
- **Arbitrum One**と**Arbitrum Nova**チェーンは、Ethereumを拡張し、ほとんどのプロジェクトのニーズを満たせる**2つのDAO管理型パブリックスマートコントラクトデプロイメントのオプション**を提供します。
- 一方、**Arbitrum Orbit**チェーンは、Ethereumをさらに拡張し、各個々のOrbitチェーンがその所有者のニーズに合わせて調整された、[「無限の庭」](https://ethereum.foundation/infinitegarden)型の**独自管理型コントラクトデプロイメントオプション**を提供します。

### OrbitはdApps構築にどのように役立ちますか？

| 利点                              | 概要                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **スループットを専有**              | dAppが高性能または一貫したリソースの可用性を要求する場合、専用のスループットが必要かもしれません。独自のOrbitチェーンでdAppを実行することは、リソースの利用可能性を大幅に増加する、又は計算、およびストレージリソースの競合を回避できるため、リソースの競合を心配する必要がありません。| 
| **EVM+ 互換性**                   | Orbitチェーンは、[Stylus](https://offchain.medium.com/hello-stylus-6b18fecc3a22)が導入するEVM+ 互換性も利用します。これは、Solidity、C、C++、およびRustを使用してEVM互換のスマートコントラクトを展開できることを意味し、既に使用している言語とツールチェーンから移行する必要がないことを意味します！| 
| **ロードマップの独立性**            | アプリケーションチェーンのロードマップをEthereum/Arbitrumから切り離したい場合、Orbitで実現できます。これにより、Ethereumの公開ロードマップに従うプロジェクトよりも前にアカウント抽象化などの先端機能を実装できるようになります。| 
| **ガス代の安定性**                 | 多くのdAppsは安定したトランザクションコストに依存しています。OrbitチェーンのトランザクションはEthereum L1/ Arbitrum L2のトラフィックから分離されているため、他のアプリケーションのオンチェーン活動から大きな影響を受けず、ユーザーへより安定したガス代を提供できます。| 
| **アカウント抽象化**               | 安定したガス代は、ビジネスコストのモデリングと予測を容易にし、**トランザクション手数料の補助**など、従来はコストの制約があるメカニズムを実験するのを容易にします。これにより、dAppsの技術的に複雑な要素をエンドユーザーの体験から抽象化しやすくなり、非技術社者のユーザー向けになじみやすい分散型体験を提供できます。| 
| **手数料トークンのカスタマイズ性**    | Orbitチェーンは、dAppのエコシステムとシームレスに統合できる任意のトークンをガストークンとして設定できます。| 
| **プロトコルロジックのカスタマイズ性**| 特定の要件を満たすために、チェーンの決済、実行、またはガバナンスプロトコルのロジックを変更する必要があるかもしれません。Orbitのチェーンを使用するとこれを行うことができ、イーサリアムのセキュリティをArbitrum DAOに管理されるL2チェーンを介して活用できます。| 
| **Nitroの拡張性**                 | Orbitチェーンは、Nitroコードのすべてのアップグレード、機能追加、および改善にアクセスできるため、OrbitチェーンをEthereumの最新スケーリング技術に適応させるオプションが提供されます。| 
| **分散オプション**                 | 分散化のためにEthereumを使用する<a data-quicklook-from='arbitrum-rollup-protocol'>Arbitrum Rollup</a>を実装することも、トランザクションをベースチェーンへ迅速に記録するために、<a data-quicklook-from='data-availability-committee-dac'>データ可用性委員会（DAC）</a>を使用する<a data-quicklook-from='arbitrum-anytrust-protocol'>Arbitrum AnyTrust</a>を実装することもできます。これにより、コストを削減できます。| 
| **プロトタイピングコストを削減**     | Orbitチェーンは簡単に作成できます。詳しい手順については、[Orbitクイックスタート](https://docs.arbitrum.io/launch-orbit-chain/orbit-quickstart)を参照してください。| 
| **セキュリティ**                  | Arbitrumの技術はL2で最も安全であり、同じ成熟した技術スタックをOrbitチェーンでも使用できます。| 
| **柔軟な技術オプション**           | Orbitは、Rollup、AnyTrust、またはカスタム技術スタックの選択を提供します。これにより、必要な技術要素のみを組み込むことで、EthereumとArbitrumをより適応性のあるものにすることができます。| 
| **許可制のアクセス**               | Orbitチェーンでは、どのコントラクトをチェーンにデプロイできるかを制御できます。Ethereumのようにオープンのままにすることも、または自社のアプリケーションのみを展開できるようにコントラクトのデプロイを制限することも、その間でも構いません！| 

### OrbitがEthereumエコシステムにどのように貢献するか？

OrbitはEthereumがマルチチェーンの未来に向かうのを支援します。これには以下の理由があります：


| 付加価値                             | 概要                                                                                                                                                                                                                                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|**スケーラビリティ**| 複数のチェーンは、活動をオプトイン環境に分割し、独自のリソース管理を持つことで、スケーリングのボトルネックを克服するのに役立ちます。|
|**セキュリティモデルの柔軟性**|異なるチェーンで異なるセキュリティモデルを試すことができ、トレードオフを考慮できます。例えば、Arbitrum OneとArbitrum Novaは両方ともL2チェーンですが、Arbitrum Novaでは低い手数料を最適化するための開発が可能です。Arbitrum Orbitを使用することで、技術の拡張と実験がさらに容易になります。|
|**実行環境の柔軟性**|異なるチェーンは、実行環境の制限が多かれ少なかを試すことができます。例えば、Arbitrumチェーンは完全にEVM互換ですが、Orbitチェーンはスマートコントラクトの機能を制限して、プロジェクトのニーズに最適化する事ができます。|
|**ガバナンスの柔軟性**|Orbitチェーンを使用すると、独自のガバナンスプロトコルを定義できます。|
|**dAppの利用向上**|Orbitが提供する様々な選択肢により、開発者は段階的に分散化を進めるコストを削減し、より自律的で自己管理された条件の下で構築される新しいカテゴリーのdAppsを作る事が可能になります。|


### Orbit chainsと「app chains」は同じものですか？

それは、「app chain」の定義に寄ります。Orbitチェーンは特定アプリケーションの為のチェーンとして使用できます。しかし、Orbitは**アプリケーションだけのためのものではありません**。Orbitアプリケーションをホストするためのものです。**独自のインフラストラクチャを使用し、計算、およびストレージリソースをArbitrumのパブリックL2チェーンから分離**し、固有のニーズに基づいて特定の**L2チェーンに決済**されます。
- Orbitチェーンを使用して、1つのdApp、2つのdApp、dAppのエコシステム、および何のdAppもサポートしないスマートコントラクトをホストする事も可能です。
- Orbitチェーンを使用して、プライベートな中央集権型サービスの任意EVMコントラクトをホストできます。
- Orbitチェーンは特殊用途、汎用用途、そしてその中間のあらゆる用途に使用できます。
- さらに新しい形式の冗長性、可用性、トラストレス性のをサポートするために複数のOrbitチェーンを使用して、一つのdAppを構築することさえできます。

### Orbitチェーンは他のOrbitチェーンと通信できますか？

はい！すべてのOrbitチェーンは、自己管理のノードを実行し、<a data-quicklook-from="arbitrum-nitro">Arbitrum Nitro</a>のノードソフトウェアの独自のインスタンスを実行しています。このソフトウェアは**AnyTrust**および**Rollup**:プロトコルの両方を実装しており、Orbitチェーンはそのどちらかを使用してトランザクションを処理および決済するように設定できます[^2]。

これは、Orbitチェーンが**完全に孤立したブロックチェーンネットワークではない**ことを意味します。Orbitチェーンは、お互いに情報を交換できる連携チェーンのエコシステムに参加できます。

開発チームは現在、ネイティブで相互運用可能なOrbitチェーンを簡単に起動できるツールとパターンを開発しています。相互運用の機能はまだリリースされていませんが、もし必要があればお知らせください。開発がすすむにつれてユーザーから学びたいと考えています。

Orbitのプロダクトロードマップは、Ethereumの分散型ウェブのビジョンとしっかりと一致しており、ユーザーがセキュリティ、検閲、またはUXの摩擦を気にすることなく、デジタルの剣、呪文、スキン、アート、トークン、および他のアセットを簡単に持ち運べるようになる未来を目指しています。


### Orbitのライセンスについて知るべきことは何ですか？

ユーザーは、自身のニーズに合わせてArbitrum Nitroのコードベースを自由に変更および適応する権限を与えられています。Orbitチェーンに対するライセンスは**永続的**で**再帰的**です：
- **永続的** - 誰もソフトウェアライセンスを取り上げることはできません
- **再帰的** - Orbitチェーン自体が同じライセンスに従う他のチェーンをホストできます

Arbitrum Orbitライセンスは、Arbitrum DAOによってガバナンスされるチェーン以外に基盤とするチェーンを自動的には含まないことに注意してください。そのため、Ethereum上でArbitrum Nitroチェーンを用いて独立したL2を起動したい場合、カスタムライセンスを取得する必要があります。これには2つのオプションがあります：
1. **Offchain Labsに尋ねる**：Arbitrum Nitroコードベースの初期開発者であるOffchain Labsは、ソフトウェアのライセンサーであり、カスタムライセンスを付与できます。
2. **Arbitrum DAOに提案する**：Arbitrum DAOの立ち上げと同時に、DAOに管理されないL2を承認する共同ライセンサー権限が与えられました。このメカニズムを利用するには、[Arbitrum DAOにプロポーサルを提出](https://docs.arbitrum.foundation/how-tos/create-submit-dao-proposal)し、DAOがライセンスを付与するかどうかを民主的なプロセスで決定します。

### Orbitで実験したいです！次に何をすべきですか？

[Orbit Quickstart](https://docs.arbitrum.io/launch-orbit-chain/orbit-quickstart)を訪れて、実験を始め、結果を共有してください。 皆さんと一緒に学び成長するのを楽しみにしています！ 🚀

脚注
[^1]: Orbitチェーンはデフォルトで他のOrbitチェーンと（及びそれが基盤とするするL2チェーンと）情報を交換できますが、独自のOrbitチェーンのコードを自由に変更できます。意図的に、他のOrbitチェーンやL2と_互換性がない_ように変更することもできます。
[^2]: Orbitチェーンは通常、Arbitrum Goerli、Arbitrum One、またはArbitrum Novaのいずれかで決済できます。この選択は通常、最初に[Orbitチェーンのデプロイポータル](https://orbit.arbitrum.io/)で設定する際に行います。Orbitチェーンは設計上、ネットワーク間で「ホットスワップ」することを意図していません。Orbitチェーンがデプロイされた後に基盤とするL2チェーンを変更することは明示的にサポートされていません。ただし、このユースケースを実験することは可能です。
