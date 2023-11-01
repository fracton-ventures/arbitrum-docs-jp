---
title: 'Stylusイントロダクション'
sidebar_label: 'Stylusイントロダクション'
description: 'An educational introduction that provides a high-level understanding of Stylus, a new way to write EVM-compatible smart contracts using your favorite programming languages.'
author: amarrazza
sme: amarrazza
target_audience: 'Developers who want to build on Arbitrum using popular programming languages, like Rust'
sidebar_position: 1
---

# Stylusイントロダクション

import PublicPreviewBannerPartial from '../../../arbitrum-docs/stylus/partials/_stylus-public-preview-banner-partial-jp.md';

<PublicPreviewBannerPartial />

### 要約すると：

- Stylusを使用すると、**Rust、C、C++など**のWASMにコンパイルできるプログラミング言語でスマートコントラクトを書くことができます。
- Rustには既に豊富な言語サポートがあり、Stylus SDKとCLIツールを使用して**今すぐ開発を開始できます**。
- Stylusスマートコントラクトは、第二の等価なWASM仮想マシンによる**ArbitrumのEVM互換性**。
- SolidityコントラクトとStylusコントラクトは完全に相互運用可能です。SolidityでRustプログラムを呼び出すことができ、RustでSolidityプログラムを呼び出すこともできます。
- WASMプログラムの優れた効率性により、Stylusコントラクトは**ガス料金が大幅に低く、桁違いのスピードで実行できます**。
- Stylusを使用すると**メモリのコストが100〜500倍安くなり**、RAMの消費がブロックチェーンで実現可能になり、新たなユースケースが可能になります。

### Stylusとは？

Stylusは、Arbitrum One、Arbitrum Nova、およびArbitrum Orbitチェーンを支えるテックスタックであるArbitrum Nitroのアップグレードです。このアップグレードにより、EVMに第二の等価な仮想マシンが追加され、EVMコントラクトは引き続きEthereum上での動作とまったく同じように振る舞います。**すべてが完全にEVMを拡張するよう**に設計されているため、私たちはこれを**EVM+**と呼んでいます。

この二つ目のVMはEVM Bytecodeではなく、WebAssembly（WASM）を実行します。WASMは、主要なWeb標準、ブラウザ、および企業での使用によって広まり、計算速度を向上させるために利用されている現代のバイナリ形式です。高速で、移植性があり、人間に読みやすいように設計されており、セキュリティとシンプルさのためのサンドボックス実行環境も備えています。ArbitrumチェーンにとってWASMは新しいことではありません。[**Nitroアップグレード**](https://medium.com/offchainlabs/arbitrum-nitro-one-small-step-for-l2-one-giant-leap-for-ethereum-bc9108047450)以来、WASMはArbitrumの完全な機能を備えた不正証明の基礎的な構成要素として存在しています。

WASMVMを使用すると、WASMにコンパイルできるプログラミング言語はすべてStylusの対象となります。多くの人気のあるプログラミング言語はWASMにコンパイルできますが、Rust、C、C++などは他の言語より比較的スマートコントラクトの開発に適しています。Go、Sway、Move、およびCairoなどの他の言語もサポートできます。一方、PythonやJavaScriptなど独自ランタイムを含む言語をサポートするのは難しいですが、不可能ではありません。新しい言語や既存の言語のためのライブラリとしての第三者からの貢献は歓迎されています！

Solidityを使用する場合と比べて、WASMプログラムははるかに効率的です。これには、RustとCのための数十年にわたるコンパイラの開発など、多くの理由があります。また、WASMはEVMよりも高速なランタイムを持っており、実行速度が向上します。一般的に、WASMを使用するコントラクトは、Solidityを使用するコントラクトと**10倍の改善**が見られています。

### なぜそれは可能なのか？

Stylusは、Arbitrum Nitro独自の不正証明技術で実現しています。Arbitrumネットワークで紛争が発生すると、Nitroは**WASM**でチェーンの実行を再生します。誠実なArbitrumバリデータは、紛争の対象となる部分を二分探索法で特定し、単一の無効なステップを特定し、チェーン上で[**「ワンステッププルーフ」**](https://docs.arbitrum.io/proving/challenge-manager#general-bisection-protocol)を介して確認されます。

これは、Nitroが**任意のWASM**を確定的に証明できることを意味します。

WASMが一般的に証明可能であれば、WASMにコンパイルされる**任意のプログラム**の正確性も証明できます。これがStylusを実現する鍵となる技術的飛躍です。

Nitroの技術的アーキテクチャの詳細については、[**Nitroドキュメンテーション**](https://docs.arbitrum.io/inside-arbitrum-nitro/)または[**Nitroホワイトペーパー**](https://github.com/OffchainLabs/nitro/blob/master/docs/Nitro-whitepaper.pdf)をご覧ください。

### これはなぜ重要なのか

Stylusは複数のレベルで革新的であり、その要点は以下の通りです：

#### 一つのチェーン、多くの言語

おおよそ20,000人のSolidity開発者がいるとされていますが、Rust開発者は300万人、C開発者は1200万人と推定されています[[1](https://www.slashdata.co/blog/state-of-the-developer-nation-23rd-edition-the-fall-of-web-frameworks-coding-languages-blockchain-and-more)]。開発者はこれから、自分の好きなプログラミング言語を自由に使うことができ、Stylusを備えたArbitrumチェーン上で相互運用が可能になります。次の数十億人のユーザーへ拡張するには、次の数百万人の開発者を採用する必要があります。

#### EVM+

Stylusを搭載したArbitrumチェーンは開発者はEVMのすべての利点、エコシステム、流動性を維持しながら、Rust、C、およびC++の既存ライブラリへのアクセスを得ることができます。EVMの動作に変更を加えず、より高い効率で実現できます。EVMの等価性はもはや制約ではなく、基準となります。

#### 高度な暗号化を低コストで実現可能

既存EVM上で実用的でなかったユースケースがStylusで可能になります。計算は10倍以上改善され、メモリは100倍以上改善されます。暗号ライブラリは、許可なしでカスタムプリコンパイルとして展開できるようになります。ブロックチェーンイノベーションの最大の温床が到来しました。

#### 再入可能性の任意化

Stylusはコストの削減とスピードの向上だけでなく、WASMのおかげで安全性も向上させます。再入可能性は、Solidity開発者が避けることに苦労する普遍的な脆弱性です。Stylusは安価な再入可能性を検出できます。RustSDKを使用することで、再入可能性はデフォルトで無効になり、意図的に上書きしない限り無効のままになります。

#### 完全な相互運用性

SolidityプログラムとWASMプログラムは完全コンポーザブルです。Solidityで作業している場合、開発者はRustプログラムを呼び出すか、異なる言語で別の依存関係を利用できます。Rustで作業している場合、すべてのSolidityの機能がすぐに利用できます。

### 動作原理

Stylusの動作原理は、主に4つのステップから成り立っています：コーディング、コンパイル、実行、証明です。

#### コーディング

原則として、開発者はWASMにコンパイルできるプログラミング言語でスマートコントラクトを書くことができます。しかし、実際には、いくつかの高水準言語は他の言語よりも遥かに高性能なWASMを生成します。
初期段階では、Rust、C、およびC++がサポートされます。ただし、最初はサポートのレベルが異なります。Rustは最初から豊富な言語サポートを提供され、Rustでスマートコントラクトを書くことを可能にするオープンソースのSDKも用意されています。CとC++も初めからサポートされていまして、これらの言語で既存のコントラクトを最小限の修正でチェーン上に展開できます。

Rust向けのStylus SDKには、ほとんどの開発者がStylusを使用する際に必要とするスマートコントラクト開発フレームワークと言語機能が含まれています。このSDKはまた、スマートコントラクト開発者にとって馴染み深いEVM固有の機能をすべて実行することも可能です。[**Rust SDKガイド**](https://docs.arbitrum.io/stylus/reference/rust-sdk-guide)と[**Crateドキュメンテーション**](https://docs.rs/stylus-sdk/latest/stylus_sdk/index.html)をご覧ください。

#### コンパイル

Stylusプログラムは2回コンパイルされます。1回目は高水準言語（Rust、C、またはC++など）からWASMへのコンパイルであり、2回目は「アクティベーション」と呼ばれるプロセスで、WASMからノードのネイティブマシンコード（例：ARMまたはx86）へのコンパイルです。

最初のコンパイル段階は、Rust向けのStylus SDKに含まれるCLIツールを使用するか、CおよびC++の場合はClangなどの他のコンパイラを使用して行われます。一旦コンパイルが完了すると、WASMはチェーン上に投稿されます。この段階で、コントラクトの挙動は定義された状態になりますが、アクティベーションが行われるまでコールことはできません。

Stylusプログラムをアクティベートするには、`ArbWasm`という新しいプリコンパイルが必要です。このプリコンパイルは、ノードのネイティブアセンブリに合わせて最適化されたバイナリコードを生成します。このステップでは、一連のミドルウェアはユーザープログラムが安全に実行され、不正証明が決定的に行えるように確認します。計装には、ガスメータリング、スタック深度チェック、メモリChargingなどが含まれ、WASMプログラムがチェーン上で安全に実行できることを保証します。

#### 実行

Stylusプログラムは、主流なWebAssemblyランタイムである[**Wasmer**](https://wasmer.io/)のフォークで実行されます。このランタイムは、ブロックチェーン固有のユースケースに最適化するために最小限の変更が加えられています。Wasmerは、GethがEVMバイトコードを実行するよりもはるかに高速にネイティブコードを実行し、Stylusが提供する大幅なガスの節約に貢献しています。

EVMコントラクトは、Stylus以前と同じ方法で実行され続けます。コントラクトが呼び出されると、EVMコントラクトとWASMプログラムの違いは[**EOF**](https://notes.ethereum.org/@ipsilon/evm-object-format-overview)に着想を得たコントラクトヘッダを介して確認できます。その後、対応するランタイムを使用してコントラクトが実行されます。SolidityとWASM言語で書かれたコントラクトは互いにコントラクト呼び出しを行うことができ、開発者はコントラクトがどの言語で書かれたかを考慮する必要はありません。すべて相互運用可能です。

#### 証明

Nitroには「ハッピーケース」と「サッドケース」があります。ほとんどの場合、Nitroは「ハッピーケース」であり、実行履歴をネイティブコードにコンパイルします。バリデータ間に紛争がある「サッドケース」の場合、Nitroは実行履歴をWASMにコンパイルして、Ethereumメインネット上で対話型不正証明を行います。StylusはNitroの不正証明技術の拡張であり、開発者が展開したWASMプログラムに対しても実行履歴の途中で二分探索を行うだけでなく、その不正証明技術を活用しています。

### 続き

Stylusのテストネットは誰でも利用できます。最高のプログラミング体験を提供するために多くの工夫がされています。ただし、ここで作業が終了するわけではありません。開発者からのフィードバックは、Stylusを次のレベルに進化させ、ツール、ドキュメンテーション、および言語機能を向上させるのに役立ちます。Stylusの早期採用者になることは、その提供する機会に慣れる最良の方法です。

Stylusのおかげで多くの可能性が開かれています。その一部は：

- secp256r1などの署名スキームのカスタムプリコンパイル
- 大量のRAMを消費するジェネラティブアートライブラリ
- C++で記述された既存のゲーム
- 計算量が多いAIモデル

Stylusの最も興奮する部分は、EVMでさえ夢にも思われなかった革新的なユースケースです。これは、今日まで不可能でした。

多くの開発者は新しいユースケースに引かれるでしょうが、既存のアプリケーションをStylusで再構築することも革新の扉を開くことにつながります。dAppsはこれまで以上に速く、安く、安全になりました。

Stylusに興味を持つ開発者の方は、[**クイックスタート**](https://docs.arbitrum.io/stylus/stylus-quickstart)を訪れ、[**Discordチャンネル**](https://discord.com/invite/arbitrum)に参加し、開発を始めてみてください！
