<section class='small-table'>

| Flag                                   | Description                                                                                                                                                                                                                                                                             |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--node.rpc.classic-redirect=<RPC>`    | アーカイブデータベースを持つ Arbitrum Classic ノードの RPC に、Nitro 以前のブロックのアーカイブ要求をリダイレクトします。Arbitrum One でのみ利用できます One.                                                                                                                                                   |
| `--http.api`                           | HTTP-RPC インターフェース上で提供される API です。デフォルトは `net,web3,eth,arb` になります。トレース用に `debug` を追加できます |
| `--http.corsdomain`                    | コンマで区切られたドメインからのクロスオリジンリクエストを受け付けます（ブラウザが執行する）|
| `--http.vhosts`                        | Accepts requests from these comma-separated virtual hostnames (server enforced). Default: `localhost`. Accepts `*`.                                                                                                                                                                     |
| `--http.addr`                          | RPC をバインドするアドレスを設定します。Docker ネットワーキングには `0.0.0.0` が必要な場合があります                                                                                                                                                                                                                   |
| `--node.caching.archive`               | 過去のブロックの状態を保持します。アーカイブノードを運行する場合利用します                                                                                                                                                                                                                                           |
| `--node.feed.input.url=<feed address>` | デフォルトは `wss://<chainName>.arbitrum.io/feed` になります　 ⚠️ データセンターごとに一つのフィードリレーを推奨します。[フィードリレーガイド](/node-running/how-tos/running-a-feed-relay.mdx)を参照してください                                                                                                                     |
| `--node.forwarding-target=<RPC>`       | 提供された L1 チェーン ID と L2 チェーン ID に基づいて、L2 シーケンサ RPC がデフォルトで設定されます                                                                                                                                                                                                                 |
| `--node.rpc.evm-timeout`               | デフォルト：`5s` `eth_call` のタイムアウトを設定します。 (0 == タイムアウトなし）                                                                                                                                                                                                                             |
| `--node.rpc.gas-cap`                   | デフォルト:`50000000` `eth_call`/`estimateGas` のガス代上限を設定します。(0 = キャップなし)                                                                                                                                                                                                             |
| `--node.rpc.tx-fee-cap`                | デフォルト:`1` RPC API のトランザクション手数料上限(ETH 単位)を設定します。(0=上限なし)                                                                                                                                                                                                                |
| `--ipc.path`                           | datadir 内の IPC ソケット/パイプのファイル名を設定します。🔉 macOS ではサポートされていません。Path は Docker コンテナ内であることに注意してください。                                                                                                                                                                |
| `--init.prune`                         | 初期化時にプルーニングを有効にします。full "または "validator "を指定できます。v2.0.14 以降で有効になります。                                                                                                                                                                                            |
| `--init.url="<snapshot file>"`         | (Orbit ではない Nitro ノード限定）genesis データベースをダウンロードする URL を設定します。Arbitrum One ノードの初回起動時のみ必要です。[スナップショット](https://snapshot.arbitrum.foundation/index.html)および[アーカイブノードガイド](/node-running/how-tos/running-an-archive-node)を参照してください。 |
| `--init.download-path="/path/to/dir"`  | (Orbit ではない Nitro ノード限定）ダウンロードしたデータベースのスナップショットを一時的に保存します。デフォルトは`/tmp/`です。`--init.url` と共に使用します                                                                                                                                         |

</section>








