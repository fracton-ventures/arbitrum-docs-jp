<section class='small-table'>

| Flag                           | Description                                                                                                                                                                                                                                                                             |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--execution.rpc.classic-redirect=<RPC>` | Pre-nitroブロックがアーカイブリクエストされた際、Arbitrum ClassicノードのアーカイブデータベースのRPCにリダイレクトします。Arbitrum One専用です。                                                                                                                                                   |
| `--http.api`                             | HTTP-RPCインターフェースで提供されるAPIの設定。 デフォルトは`net,web3,eth,arb`で、トレースのためにdebugを追加できます。                                                                                                                                                                                         |
| `--http.corsdomain`                      | クロスオリジンリクエストを受け入れるドメインをカンマ区切りで指定します（ブラウザで執行）                                                                                                                                                                                                    |
| `--http.vhosts`                          | これらのカンマ区切りの仮想ホスト名からのリクエストを受け入れます（サーバーで執行）。デフォルトは`localhost`で、`*`も受け入れます。                                                                                                                                                                     |
| `--http.addr`                            | RPCをバインドするアドレス。Dockerネットワーキングには`0.0.0.0`が必要かもしれません。                                                                                                                                                                                                                    |
| `--execution.caching.archive`            | アーカイブノード向けに過去のブロックの状態を保持します。                                                                                                                                                                                                                                           |
| `--node.feed.input.url=<feed address>`   | フィードリレーの入力URL。デフォルトは`wss://<chainName>.arbitrum.io/feed`で、データセンターごとに1つのリレーが推奨されています。 詳しくは[フィードリレーガイド](/node-running/how-tos/running-a-feed-relay.mdx)を参照してください                                                                                                                     |
| `--execution.forwarding-target=<RPC>`    | L1およびL2のチェーンIDに基づいてL2 Sequencer RPCにデフォルトで設定されます。                                                                                                                                                                                                                |
| `--execution.rpc.evm-timeout`            |  `eth_call`のタイムアウト時間のデフォルトは`5s`で、`0`はタイムアウトなしを意味します。                                                                                                                                                                                                                               |
| `--execution.rpc.gas-cap`                | `eth_call`や`estimateGas`のガスキャップのデフォルトは`50000000`で、`0`はキャップなしを意味します。                                                                                                                                                                                                               |
| `--execution.rpc.tx-fee-cap`             | RPC APIのトランザクション手数料上限のデフォルトは`1`で、イーサで指定します。`0`は上限なしを意味します。                                                                                                                                                                                                                |
| `--ipc.path`                             | データディレクトリ内のIPCソケット/パイプのファイル名。macOSではサポートされていません。パスはDockerコンテナ内にあります。                                                                                                                                                                  |
| `--init.prune`                           | ノードを起動する前にデータベースを削減します。"full"または"validator"は利用できます。                                                                                                                                                                                                                 |
| `--init.url="<snapshot file>"`           | (Orbit Nitroノード以外) Arbitrum Oneノードを初めて起動する時にGenesisデータベースをダウンロードするためのURL。詳しくは[スナップショット](https://snapshot.arbitrum.foundation/index.html) and [アーカイブノードガイド](/node-running/how-tos/running-an-archive-node)を参照してください。 |
| `--init.download-path="/path/to/dir"`    | (Orbit Nitroノード以外) ダウンロードしたデータベーススナップショットを一時的に保存するパス。デフォルトは`/tmp/`です。`--init.url`と共に使用されます。




                                                                                                                                                           |

</section>
