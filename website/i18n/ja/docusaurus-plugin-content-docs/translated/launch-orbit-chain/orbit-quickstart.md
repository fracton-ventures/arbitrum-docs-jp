---
title: 'クイックスタート：Orbitチェーンをローンチ'
sidebar_label: 'クイックスタート'
description: "Launch your own Orbit chain with the Arbitrum Nitro codebase's new license. Settle to Arbitrum's L2 chains via bridge contracts on the underlying L2 chain (Goerli or Sepolia testnets for now; One and Nova coming soon). No need for permission from the Arbitrum DAO or Offchain Labs to create your Orbit chain. Modify the Nitro codebase freely for your chain."
translator: Ying@Fracton, Tamura (Arbitrum Ambassador), Hikaru@Fracton
sidebar_position: 2
target_audience: developers who want to create their own self-managed AnyTrust or One chain

---

こちらは、[Orbitチェーンデプロイメントポータル](https://orbit.arbitrum.io/)を使用して独自のArbitrum Orbitチェーンを起動したい開発者向けの文書です。

このクイックスタートを最後まで進めると、EVM互換のスマートコントラクトをホストする**ローカルdevnetチェーン**を作成できます。このチェーンはトランザクションをローカルで処理し、**Arbitrum GoerliとSepoliaテストネット**で決済されます。Ethereum、EthereumのGoerliテストネット、およびArbitrumに関する知識が必要です。

Orbitチェーンに関する概念的な紹介をお求めの場合は、[「Orbitチェーンのイントロダクション」](./orbit-gentle-introduction.md)をご覧ください。

import TranslationBannerPartial from "../stylus/partials/_stylus-translation-banner-partial.md";
import PublicPreviewBannerPartial from './partials/_orbit-public-preview-banner-partial.md';

<TranslationBannerPartial />
<PublicPreviewBannerPartial />

## 前提要件
- [Docker](https://docs.docker.com/get-docker/)
- ブラウザベースのEthereumウォレット（[MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)など）
- 最低1の​テストネットETH（カスタムガストークンの場合0.6テストネットETHと0.4ネイティブトークン）

## ステップ 1: Arbitrumテストネット$ETHを取得する（Orbitチェーンでカスタムトークンを利用している場合はネイティブトークン）
通常のオービットチェーンの場合、最低1つのテストネットの$ETHが必要です。一方、カスタムガストークンを使用したオービットチェーンの場合、0.6$ETHと0.4のネイティブトークンが必要です。これは、Orbitチェーンの**ベースコントラクト**をその**ベースチェーン**（Arbitrum GoerliまたはSepolia）にデプロイするコストをカバーするためです。Goerliは近い将来廃止される見込みですので、Sepoliaを利用することをお勧めします。

このクイックスタートの作成時点で、テストネット$ETHを取得する最も簡単な方法は、テストネット$ETH をEthereumのL1 GoerliまたはSepoliaネットワークからArbitrumの対応するL2テストネットにブリッジすることです。

1. [goerlifaucet.com](https://goerlifaucet.com/)や[sepoliafauset.com](https://sepoliafaucet.com/)などのL1テストネット$ETHフォーセットを使用して、L1テストネット上でテストネット$ETHを取得します。
2. [Arbitrumブリッジ](https://bridge.arbitrum.io/)を使用して、L1テストネット$ETHをArbitrum L2にブリッジします。

## ステップ 2: チェーンのタイプを選択する: AnyTrust またはRollup

<p>
<a data-quicklook-from="arbitrum-rollup-protocol">Arbitrum Rollup</a>はOptimistic Rollupプロトコルです。Arbitrum Rollupは <a data-quicklook-from="trustless">トラストレス</a>で、パーミッションレスです。これらの特性は、すべてのチェーンデータがEthereumのレイヤー1（L1）チェーンに投稿されることによって実現されています。このデータの可用性がEthereum自体のセキュリティ特性に直接依存し、その結果、どの当事者もチェーンの検証に参加し、チェーンの安全を確保できます。
</p>


対照的に、<a data-quicklook-from='arbitrum-anytrust-protocol'>Arbitrum AnyTrust</a>は手数料の引き下げと引き換えに信頼仮定を導入しています。AnyTrustではすべてのArbitrumノードがArbitrumチェーンのinbox内のすべてのL2トランザクションのデータにアクセスすることを要求するのではなく、外部の<a data-quicklook-from='data-availability-committee-dac'>データ可用性委員会（DAC）</a>に依存してデータを保存し、オンデマンドで提供することで、L1へ投稿するL2トランザクションデータのバッチ処理と投稿のコストを削減します。詳細については、[FAQドキュメント](../learn-more/faq)をご覧ください。

通常、最高レベルのセキュリティが要求されるユースケース（DEXや他のDeFi dAppなど）にはロールアップチェーンを使用することをお勧めします。AnyTrustチェーンは、より低い手数料を必要とし、大量のトランザクションを生成するユースケース（ゲームやソーシャルdAppsなど）に適しています。

## ステップ 3: Orbit チェーンのdeploymentを設定する
[Orbitチェーンデプロイメントポータル](https://orbit.arbitrum.io/)にアクセスしてください。そうするとウォレットを接続するよう求められます。**Arbitrum Goerli**または**Arbitrum Sepolia**ネットワークをウォレットに追加するか、ウォレットをこのネットワークに切り替えるように求められる場合があります。これを承認してください。

デプロイメントポータルには次のようなフォームが表示されます。

import { PlaceholderForm } from '/src/components/PlaceholderForm/PlaceholderForm';

<PlaceholderForm inputs="Chain ID, Chain name, Challenge period (blocks), Stake token, Base stake, Owner" />

以下の表に、これらの各設定パラメータの簡単な説明を示します。デフォルトのままにすることをお勧めします。Orbitチェーンのデプロイメントのカスタマイズの詳細については、[「Orbit チェーンのデプロイメントをカスタマイズする方法」](./how-tos/customize-deployment-configuration.md)を参照してください。

<!-- todo: determine whether or not we want to align the UI with docs section-casing and param-casing patterns; align docs to UI if needed -->
| パラメータ                | 説明                                                                                                                                                                                                                                                                                                                        
| ---------------------------- |  ------------------------------------------------------------------------------------------- |
| ** チェーンID**                  |   チェーンのネットワークを表す一意の整数識別子。`Chain ID`を [Chainlist.org](https://chainlist.org)などのチェーンインデックスに送信できます。Devnet の場合、これはデプロイごとにランダムに生成されます。今のところは心配する必要はありません。                                                                       |
| **チェーン名**   | 自分のOrbit チェーンを他のOrbit チェーンと区別するための人間が判読できる方法。ユーザー、開発者、およびより広範なコミュニティは、あなたのチェーンを`Chain ID`や`Chain name`で参照します。
| **チャレンジ期間（ブロック）** | 基盤となるL2チェーン（Arbitrum Goerli または Sepolia）でチェーンの現在の状態が確認（そして最終的に確定）されるまでに、Orbit チェーンのノードがチェーンの現在の状態に異議を唱えられる時間。これは、基礎となる L1 チェーン（Ethereumの Goerli チェーンまたは Sepolia チェーン）上のブロック数を指すことに注意してください。
| **ステークトークン**               | チェーンに参加するためにチェーンのバリデーターがステークする必要があるトークン。これは今のところETH にハードコードされていますが、Orbit チェーンの将来のバージョンでは、ここで任意のERC-20トークンコントラクトを指定できるようになります。                                                                                  |
| **ベースステーク**                | `Stake token`チェーンに参加するためにチェーンのバリデーターがステークする必要がある設定金額。0 より大きくなければなりません。                                                                                                                                                                                  |
| **所有者**                     | チェーンのベースコントラクトをデプロイ、所有、更新する管理用Ethereumアドレス。これはデフォルトで、接続されているウォレットのアドレスになります。また、コントラクトアドレスではなく、標準のEthereum外部所有アカウント (EOA) である必要があります。後でローカルJSONファイル内でこのウォレットの秘密鍵を指定する必要があることに注意してください。|

## ステップ 4: チェーンのバリデータを設定する
`Configure Validators`セクションで、次のようなフォームが表示されます。

<PlaceholderForm inputs="Number of Validators, Validator 1 (0x...), [...], Validator n (0x...)" />

最初の整数値入力フィールドは、**初期展開をサポートするバリデーターの数**を決定します。2つ目以降のフィールドでは、これらの各バリデーターのアドレスを指定できます。

<!-- possible cut (we can provide this information when it's needed): a `Staker` JSON property that you'll find in the -->

最初のバリデータアドレスはランダムに生成され、変更できません。その秘密鍵は自動的に生成され、JSONコンフィギュレーションファイルの一つに保存されます。

チェーンのバリデーターは、トランザクションの整合性を検証し、Orbitチェーン現在状態のassertionをベースチェーンに投稿する役割を担っていまます。本番環境では、Orbitチェーンは、複数の連携して動作するバリデーターノードのネットワークによってホストされると思いますが、ローカルOrbitチェーンの場合は、自動生成された単一のバリデーターアドレスをそのまま使用できます。

このステップで指定した各バリデーターアドレスは、チェーンのいずれかの**ベースコントラクト**の許可リストに追加されます。各バリデーターは**ステーキング**が完了した後、Orbitチェーンに送信されたトランザクションを検証できるようになります。

:::info 新しい用語

「ベースコントラクト」と「ベースチェーン」は、それぞれ、Orbitチェーン自体のL2コントラクトと、それらがデプロイされるL2チェーンを指します。このガイドの残りの部分では、これらの用語を使用します。

:::
<!-- possible cut (meaning is unclear): or even challenges staker of a specific RBlock. -->

バリデーターアドレスが設定された後、`Next`をクリックし、次のステップ：**バッチ投稿者の設定**に進みます。

## ステップ 5: チェーンのバッチ投稿者を設定する
`Configure Batch Poster`セクションで、次のようなフォームが表示されます：

[form]
<PlaceholderForm inputs="Batch Poster Address" />

バッチ投稿者アドレスは、Orbitチェーンからそのベースチェーン上のベースコントラクトにトランザクションのバッチを投稿する責任があります。なおアドレスは自動的に生成されます。秘密鍵は自動的に生成され、JSONコンフィギュレーションファイルの一つに保存されます。

バッチ投稿者のアドレスが設定された後、`Next`をクリックし、次のステップ：Orbit**チェーンを確認、及びデプロイ**に進みます。

## ステップ 6: Orbitチェーンを確認し、デプロイする
OrbitチェーンのベースコントラクトをArbitrum GoerliまたはSepoliaにデプロイします

<!-- todo: label-casing alignment - could sentence-case in UI -->

設定フォームの下にある`Deploy`ボタンをクリックすると、ウォレットから、Arbitrumテストネットにトランザクションを送信するよう促されます。多少のガス代を支払う必要があります。あなたのウォレットはこれをETHで支払うことを要求します。トランザクションの詳細で、選択したArbitrumテストネットが表示されている限り、このガス代はテストネットETHで支払われます。

次に進む前に、今までの手順を簡単に振り返ります：
- パブリックL2チェーンであるArbitrumテストネット上にある、Orbitの”factory”スマートコントラクトにデプロイメントトランザクションを送信しました。このローカルOrbitチェーンは、指定されたArbitrumテストネットにトランザクションを決済します。
- このOrbitスマートコントラクトは、前の手順で指定した値でOrbitチェーンのベースコントラクトを初期化し、これらのベースコントラクトをArbitrumテストネットにデプロイしました。

Orbitチェーンのベースコントラクトは、Orbitチェーンのノードとそのベースチェーンのノード間の情報交換を促進する責任があります。これには、Orbitチェーンからそのベースチェーンへのトランザクションのバッチ投稿、Orbitチェーンのバリデーターによるトークンのステーキング、チャレンジメカニズム、ブリッジングメカニズムなどが含まれます。

AnyTrustチェーンをデプロイした場合は、トランザクションが完了した際、次にキーセットを設定します。それ以外の場合は[ステップ8](#step-8-download-your-chains-configuration-files-and-launch-your-chain)に進み、設定ファイルをダウンロードし、チェーンを起動します。

## ステップ 7: キーセットを設定する(AnyTrustチェーンのみ)

:::info ロールアップチェーンには適用されません

ロールアップチェーンをデプロイする場合は、この手順をスキップしてください。

:::

バッチ投稿者が正しく機能するには、現在の設定に対応するキーセットが`SequencerInbox`コントラクト内でアクティブであることが必要です。キーセットとキーセットハッシュバイナリblobの生成は必須であり、これらを`SequencerInbox`コントラクト上の`SetValidKeyset`メソッドの入力として使用します。

Orbit AnyTrustチェーンの現在のバージョンは単一のData Availability Serverを使用し、初期のキーセットを生成するために秘密鍵をnullに設定しています。トランザクションプロセスの一環として、この初期キーセットを`SequencerInbox`コントラクトに割り当てます。

Deployment Summaryの下にある`Deploy`ボタンをクリックしてください。ウォレットからArbitrumテストネットにトランザクションを送信することが請求されます。ガス代は前回のトランザクションとほぼ同じコストです。

トランザクションが完了すると、チェーンのデプロイメントを続行するためのダウンロードページに移動します。

## ステップ 8: チェーンの設定ファイルをダウンロードし、チェーンをローンチする
`Rollup Config`と`L3 Config`と書かれた二つのJSONコードブロックが表示されます。各コードブロックの右上にあるダウンロードボタンをクリックし、コードブロックをローカルに保存します。
<!-- todo: align UI with terminology patterns - eg NOT saying L3 -->

1. **ロールアップJSONをダウンロード**: これにより、**チェーンのノード設定**を含む`nodeConfig.json`が生成されます。これには、バリデータ (ステーカー) とバッチ投稿者の秘密鍵が含まれていることに注意してください。秘密鍵は、L2チェーン上のベースコントラクトに、RBlockをpostするトランザクションに署名するために使用されます。
2. ** L3Config JSONをダウンロード**: これにより、**トークンブリッジコントラクト**をサポートする**チェーンの設定**を含む`orbitSetupScriptConfig.json`が生成されます。

## ステップ 9: セットアップスクリプトリポジトリのクローンを作成し、設定ファイルを導入する
1. [orbit-setup-script](https://github.com/OffchainLabs/orbit-setup-script)リポジトリのクローンを作成します：`git clone https://github.com/OffchainLabs/orbit-setup-script.git`
2. ダウンロードした`nodeConfig.json`ファイルを、cloneした`orbit-setup-script`リポジトリのルートの`config`ディレクトリに移動します。
3. ダウンロードした`orbitSetupScriptConfig.json`ファイルを、cloneした`orbit-setup-script`リポジトリのルートの`config`ディレクトリに移動します。
4. `orbit-setup-script`リポジトリのルートから`yarn install`を実行して依存関係をインストールします。

## ステップ 10: チェーンのノードとブロックエクスプローラーを実行する
Dockerを実行し、`orbit-setup-script`リポジトリのルートから`docker-compose up -d`を実行します。

NitroノードとBlockScoutエクスプローラーインスタンスが開始されます。[http://localhost:4000/](http://localhost:4000/)にアクセスして、BlockScoutエクスプローラーインスタンスにアクセスできます。これにより、チェーンのトランザクションとブロックを表示できるようになり、デバッグに役立ちます。

## ステップ 11:　チェーンセットアップを完了する
私たちは下記のタスクを処理するHardhatスクリプトを提供しています：
1. L2チェーン上の**バッチ投稿**アカウントと**バリデーター**(ステーカー) アカウントに資金を提供する
2. 新しくデプロイされたブリッジを使用して、チェーン上のアカウントにETHを入金する
3. トークンブリッジコントラクトをL2と自身のチェーンの両方にデプロイする
4. チェーンのパラメータを設定する



このスクリプトを実行するには、`0xYourPrivateKey`をチェーンのコントラクトをデプロイするために使用した`Owner`アカウントの秘密鍵に置き換え、`http://localhost:8449`をチェーンのノードのRPC URLに置き換えて、`orbit-setup-script`リポジトリのルートから下記のコマンドを実行します。

Arbitrum Goerliの場合:

```shell
PRIVATE_KEY="0xYourPrivateKey" L2_RPC_URL="https://goerli-rollup.arbitrum.io/rpc" L3_RPC_URL="http://localhost:8449" yarn run setup
```

Arbitrum Sepoliaの場合:

```shell
PRIVATE_KEY="0xYourPrivateKey" L2_RPC_URL="https://sepolia-rollup.arbitrum.io/rpc" L3_RPC_URL="http://localhost:8449" yarn run setup
```

## おめでとうございます！
ローカルOrbitチェーンが実行されました。スクリプトフォルダーのメインディレクトリに`outputInfo.json`ファイルが表示されます。ここには、チェーンのベースコントラクトのアドレスなど、チェーンに関する詳細情報が含まれています。

### 付録 A: ログ
クローンされたOrbitセットアップスクリプトリポジトリのルートディレクトリで次のコマンドを実行すると、チェーンのログを表示できます。

```shell
docker-compose logs -f nitro
```

### 付録 B: ETH/ネイティブトークンを入金する
バリデーターアドレス、またはバッチポスターアドレスにさらにETHを入金する必要がある場合は、セットアップスクリプトのベースディレクトリで次のコマンドを`0xYourPrivateKey`と`<AMOUNT>`を置き換えて実行します。

Arbitrum Sepoliaの場合:

```shell
PRIVATE_KEY="0xYourPrivateKey" L2_RPC_URL="https://goerli-rollup.arbitrum.io/rpc" L3_RPC_URL="http://localhost:8449" AMOUNT="<AMOUNT>" yarn run deposit
```

Arbitrum Sepoliaの場合:

```shell
PRIVATE_KEY="0xYourPrivateKey" L2_RPC_URL="https://sepolia-rollup.arbitrum.io/rpc" L3_RPC_URL="http://localhost:8449"
AMOUNT="<AMOUNT>" yarn run deposit
```

### 付録 C:
ノードの出力ログ(付録Aより)に`error getting latest batch count`が表示される場合があります。これはOrbitチェーンのベースコントラクトのデプロイがL1チェーン上でまだ完了していないときに表示されます。このファイナライズには15～20分かかることがありますが、心配する必要はありません。チェーンが適切に機能するためにデプロイメントをL1ファイナライズする必要はなく、通常これは無視しても問題ありません。

